(function () {
  'use strict';
  const SITE = window.SITE || {}, ANIMALS = window.ANIMALS || [], CAFES = window.CAFES || [];
  const BASE = String(window.BASE_URL || '').replace(/\/+$/, '');
  // 拡張子なしURLで配信される置き場（Cloudflare Pages）では canonical / og:url も拡張子なしにする
  const cleanPath = p => window.CLEAN_URLS ? p.replace(/^index\.html$/, '').replace(/^(\w+)\.html/, '$1') : p;
  const AMAP = Object.fromEntries(ANIMALS.map(a => [a.id, a]));
  const PRICE = { 1: '〜1,000円', 2: '〜2,000円', 3: '〜3,000円', 4: '3,000円超' };
  const FKEY = 'dcz-favs';
  const PAGE_SIZE = 24;
  const SORTS = { '': 'おすすめ順', price: '料金が安い順', name: '名前順' };
  const SITE_NAME = SITE.name || 'どうぶつカフェ図鑑';
  const $app = document.getElementById('app');
  const page = document.body.dataset.page;
  const HEART = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-4.6-9.3-9.1C1 8.6 2.8 5 6.3 5c2 0 3.7 1.1 4.7 2.7h2C14 6.1 15.7 5 17.7 5c3.500 0 5.3 3.6 3.600 6.900C19 16.4 12 21 12 21z"/></svg>';
  const SEARCH = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>';

  /* ---- motion (WAAPI。reduced-motion のときは何も動かさない) ---- */
  const RM = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
  const EASE = 'cubic-bezier(.2,.7,.2,1)';
  const canAnim = () => !RM.matches && typeof Element.prototype.animate === 'function';
  const rise = (el, delay, px, dur) => canAnim() && el.animate([{ opacity: 0, translate: '0 ' + px + 'px' }, { opacity: 1, translate: '0 0' }], { duration: dur || 280, delay: delay || 0, easing: EASE, fill: 'backwards' });
  function intro() { /* 読み込み時に一度だけ。スクロール連動なし */
    if (!canAnim()) return;
    const t = document.querySelector('.hero-txt');
    if (page === 'index' && t) {
      [...t.children].forEach((el, i) => rise(el, i * 50, 10));
      document.querySelectorAll('.collage .win').forEach((el, i) => el.animate([{ opacity: 0, scale: '.96' }, { opacity: 1, scale: '1' }], { duration: 280, delay: 160 + i * 30, easing: EASE, fill: 'backwards' }));
    } else { const h = document.querySelector('main h1'); if (h) rise(h, 0, 10); }
  }
  function pop(el) { if (el && canAnim()) el.animate([{ scale: '1' }, { scale: '1.25' }, { scale: '1' }], { duration: 180, easing: 'ease-out' }); }
  let countRaf = 0;
  function setCount(el, n, animate) {
    cancelAnimationFrame(countRaf);
    const from = Number(el.dataset.v);
    el.dataset.v = n;
    if (!animate || !canAnim() || !isFinite(from) || from === n) { el.textContent = n; return; }
    const t0 = performance.now(), D = 350;
    const step = now => {
      const k = Math.min(1, (now - t0) / D), e = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(from + (n - from) * e);
      if (k < 1) countRaf = requestAnimationFrame(step); else el.textContent = n;
    };
    countRaf = requestAnimationFrame(step);
  }
  /* カードの入れ替え（FLIP）：残る＝滑る／消える＝フェード／入る＝下からフェード（最大12枚ずらす） */
  function flip(grid, oldPos) {
    const seen = new Set(); let k = 0;
    grid.querySelectorAll(':scope > .card').forEach(el => {
      const id = el.dataset.id, o = oldPos.get(id); seen.add(id);
      if (o) {
        const dx = o.x - el.offsetLeft, dy = o.y - el.offsetTop;
        if (dx || dy) el.animate([{ translate: dx + 'px ' + dy + 'px' }, { translate: '0 0' }], { duration: 250, easing: EASE });
      } else { rise(el, Math.min(k, 11) * 30, 8, 240); k++; }
    });
    oldPos.forEach((o, id) => {
      if (seen.has(id)) return;
      const g = o.el;
      g.classList.add('ghost'); g.setAttribute('inert', ''); g.setAttribute('aria-hidden', 'true');
      g.style.cssText = `position:absolute;margin:0;pointer-events:none;left:${o.x}px;top:${o.y}px;width:${o.w}px;height:${o.h}px`;
      grid.appendChild(g);
      const a = g.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 150, easing: 'ease-out', fill: 'forwards' });
      a.onfinish = () => g.remove();
    });
  }

  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const has = v => !(v === null || v === undefined || String(v).trim() === '');
  const val = v => has(v) ? esc(v) : '—';
  const safeUrl = u => /^https?:\/\//i.test(u || '') ? u : '';
  const absUrl = p => BASE ? BASE + '/' + p : p;
  /* ドット絵：img/pixel/<id>.png があれば本物、無ければ旧SVGにフォールバック */
  const pix = (id, cls) => `<img class="px ${cls || ''}" src="img/pixel/${esc(id)}.png" alt="" loading="lazy" onerror="this.onerror=null;this.classList.add('fb');this.src='img/${esc(id)}.svg'">`;
  const band = (cls, inner) => `<section class="band ${cls}"><div class="wrap">${inner}</div></section>`;
  const sechead = (ja, en, extra) => `<div class="sec-title"><span class="en">${esc(en)}</span><h2>${esc(ja)}</h2>${extra || ''}</div>`;

  /* ---- head meta (title / description / OGP / canonical) ---- */
  function metaTag(attr, key, content) {
    let el = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el); }
    el.setAttribute('content', content);
  }
  function setMeta(o) {
    const title = o.title || SITE_NAME;
    const desc = (o.desc || SITE.description || '').replace(/\s+/g, ' ').trim();
    document.title = title;
    metaTag('name', 'description', desc);
    metaTag('property', 'og:title', title);
    metaTag('property', 'og:description', desc);
    metaTag('property', 'og:type', o.type || 'website');
    metaTag('property', 'og:image', absUrl('img/ogp.png'));
    if (BASE && o.path) {
      metaTag('property', 'og:url', absUrl(cleanPath(o.path)));
      let l = document.head.querySelector('link[rel="canonical"]');
      if (!l) { l = document.createElement('link'); l.rel = 'canonical'; document.head.appendChild(l); }
      l.href = absUrl(cleanPath(o.path));
    }
  }

  /* ---- favorites ---- */
  const favs = {
    get() { try { return JSON.parse(localStorage.getItem(FKEY)) || []; } catch (e) { return []; } },
    set(a) { try { localStorage.setItem(FKEY, JSON.stringify(a)); } catch (e) { /* private mode */ } },
    has(id) { return this.get().includes(id); },
    toggle(id) { const a = this.get(), i = a.indexOf(id); i < 0 ? a.push(id) : a.splice(i, 1); this.set(a); updateBadge(); return i < 0; }
  };
  function updateBadge() {
    const b = document.getElementById('badge'); if (!b) return;
    const n = favs.get().filter(id => CAFES.some(c => c.id === id)).length;
    b.textContent = n; b.hidden = n === 0;
  }

  /* ---- shared pieces ---- */
  function header() {
    return `<header class="hdr"><div class="wrap"><a class="logo" href="index.html">${pix('cat', 'logo-px')}<span>${esc(SITE_NAME)}</span></a>
      <nav class="hnav" aria-label="メニュー"><a class="about-link" href="about.html">このサイトについて</a>
      <a class="favlink" href="index.html?fav=1" aria-label="お気に入り">${HEART}<span class="badge" id="badge" hidden>0</span></a></nav></div></header>`;
  }
  function footer() {
    const parts = [`<nav aria-label="フッター"><a href="index.html">トップ</a><a href="index.html#animals">動物から探す</a><a href="about.html">このサイトについて</a></nav>`];
    if (SITE.disclaimer) parts.push(`<p>${esc(SITE.disclaimer)}</p>`);
    if (SITE.updated) parts.push(`<p>データ更新：${esc(SITE.updated)}</p>`);
    parts.push(`<p>© ${esc(SITE_NAME)}</p>`);
    return `<footer class="ftr"><div class="wrap">${pix('cat', 'ftr-px')}${parts.join('')}</div></footer>`;
  }
  function mainFrame(inner) {
    $app.innerHTML = header() + `<main>${inner}</main>` + footer();
    updateBadge();
  }
  function notFound(msg) {
    mainFrame(band('b-cream', `<div class="notfound"><div class="nf-px" aria-hidden="true">${pix('other')}</div><p class="eyebrow">Not Found</p><h1>${esc(msg)}</h1>
      <p>URLが変わったか、掲載が終了した可能性があります。</p>
      <div class="nf-actions"><a class="btn" href="index.html">トップへ戻る</a><a class="btn ghost" href="index.html#animals">動物から探す</a></div></div>`));
    setMeta({ title: msg + ' | ' + SITE_NAME });
    const m = document.head.querySelector('meta[name="robots"]') || Object.assign(document.createElement('meta'), { name: 'robots' });
    m.content = 'noindex'; document.head.appendChild(m);
  }
  const primary = c => AMAP[(c.animals || [])[0]] || { color: '#eee', id: 'other' };
  function thumb(c, ribbon) {
    const a = primary(c);
    const rb = ribbon && has(c.prefecture) ? `<span class="ribbon">${esc(c.prefecture)}</span>` : '';
    const inner = c.image ? `<img class="photo" src="${esc(c.image)}" alt="" loading="lazy">` : pix(a.id, 'ill');
    return `<div class="thumb">${inner}${rb}</div>`;
  }
  function badgesOf(c) {
    const b = [];
    const lv = Number(c.price_level);
    if (lv >= 1 && lv <= 4) b.push(`<span class="bdg" title="料金の目安：${esc(PRICE[lv])}">${'¥'.repeat(lv)}</span>`);
    if (has(c.reservation)) {
      const cls = c.reservation === '必須' ? ' rv-must' : c.reservation === '推奨' ? ' rv-reco' : '';
      b.push(`<span class="bdg${cls}">予約${esc(c.reservation)}</span>`);
    }
    return b.length ? `<div class="badges">${b.join('')}</div>` : '';
  }
  function tagsOf(c) {
    const an = (c.animals || []).map(id => AMAP[id]).filter(Boolean).map(a => `<span class="tag an" style="--c:${esc(a.color)}">${esc(a.short)}</span>`);
    const ft = (c.features || []).filter(has).map(x => `<span class="tag">#${esc(x)}</span>`);
    const t = an.concat(ft);
    return t.length ? `<div class="tags">${t.join('')}</div>` : '';
  }
  function card(c) {
    const area = [c.prefecture, c.area].filter(has).join(' ');
    const acc = has(c.access) ? ` ／ ${esc(c.access)}` : '';
    return `<article class="card" data-id="${esc(c.id)}" style="--c:${esc(primary(c).color)}">${thumb(c, true)}
      <button class="fbtn" data-fav="${esc(c.id)}" aria-pressed="${favs.has(c.id)}" aria-label="お気に入り">${HEART}</button>
      <div class="body"><h3><a href="cafe.html?id=${encodeURIComponent(c.id)}">${esc(c.name)}</a></h3>
      <div class="area">${area ? esc(area) : '—'}${acc}</div>${badgesOf(c)}${tagsOf(c)}<span class="detail-link" aria-hidden="true">DETAIL<i class="go">→</i></span></div></article>`;
  }
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-fav]'); if (!b) return;
    e.preventDefault();
    const on = favs.toggle(b.dataset.fav);
    if (on) pop(b.querySelector('svg'));
    b.setAttribute('aria-pressed', on);
    if (b.classList.contains('favbig')) b.querySelector('span').textContent = on ? 'お気に入り済み' : 'お気に入りに追加';
    if (new URLSearchParams(location.search).get('fav') === '1' && b.classList.contains('fbtn')) render();
  });

  /* ---- list view (index / animal) ---- */
  const GROUPS = [
    { key: 'animal', label: '動物' }, { key: 'pref', label: '都道府県' },
    { key: 'price', label: '料金' }, { key: 'feat', label: '特徴' }
  ];
  const state = { q: '', animal: [], pref: [], price: [], feat: [], sort: '' };
  let fixedAnimal = null, favOnly = false, openGroup = null, built = false, limit = PAGE_SIZE, animReady = false;

  function readState() {
    const p = new URLSearchParams(location.search);
    state.q = p.get('q') || '';
    GROUPS.forEach(g => state[g.key] = (p.get(g.key) || '').split(',').filter(Boolean));
    state.sort = SORTS[p.get('sort')] && p.get('sort') ? p.get('sort') : '';
    favOnly = p.get('fav') === '1';
    if (page === 'animal') { fixedAnimal = p.get('animal'); state.animal = []; }
  }
  function writeState(push) {
    const p = new URLSearchParams();
    if (page === 'animal' && fixedAnimal) p.set('animal', fixedAnimal);
    if (favOnly) p.set('fav', '1');
    if (state.q) p.set('q', state.q);
    GROUPS.forEach(g => { if (state[g.key].length) p.set(g.key, state[g.key].join(',')); });
    if (state.sort) p.set('sort', state.sort);
    const url = location.pathname + (p.toString() ? '?' + p : '');
    history[push ? 'pushState' : 'replaceState'](null, '', url);
  }
  function haystack(c) {
    return [c.name, c.prefecture, c.area, c.address, c.access, c.description, (c.features || []).join(' '),
      (c.animals || []).map(id => (AMAP[id] || {}).name + ' ' + (AMAP[id] || {}).short).join(' ')].join(' ').toLowerCase();
  }
  function base() {
    let list = CAFES;
    if (page === 'animal') list = list.filter(c => (c.animals || []).includes(fixedAnimal));
    if (favOnly) { const f = favs.get(); list = list.filter(c => f.includes(c.id)); }
    return list;
  }
  function matches(c, skip) {
    const q = state.q.trim().toLowerCase();
    if (q && !q.split(/\s+/).every(w => haystack(c).includes(w))) return false;
    if (skip !== 'animal' && state.animal.length && !(c.animals || []).some(a => state.animal.includes(a))) return false;
    if (skip !== 'pref' && state.pref.length && !state.pref.includes(c.prefecture)) return false;
    if (skip !== 'price' && state.price.length && !state.price.includes(String(c.price_level))) return false;
    if (skip !== 'feat' && state.feat.length && !(c.features || []).some(f => state.feat.includes(f))) return false;
    return true;
  }
  function sorted(list) {
    if (!state.sort) return list;
    const idx = new Map(CAFES.map((c, i) => [c.id, i]));
    const out = list.slice();
    if (state.sort === 'price') out.sort((a, b) => (Number(a.price_level) || 99) - (Number(b.price_level) || 99) || idx.get(a.id) - idx.get(b.id));
    else out.sort((a, b) => String(a.name).localeCompare(String(b.name), 'ja') || idx.get(a.id) - idx.get(b.id));
    return out;
  }
  function options(key) {
    const src = base().filter(c => matches(c, key)), cnt = new Map();
    const add = k => cnt.set(k, (cnt.get(k) || 0) + 1);
    src.forEach(c => {
      if (key === 'animal') (c.animals || []).forEach(add);
      else if (key === 'pref') has(c.prefecture) && add(c.prefecture);
      else if (key === 'price') c.price_level && add(String(c.price_level));
      else (c.features || []).forEach(add);
    });
    let items;
    if (key === 'animal') items = ANIMALS.map(a => ({ v: a.id, l: a.short }));
    else if (key === 'price') items = [1, 2, 3, 4].map(n => ({ v: String(n), l: PRICE[n] }));
    else {
      const all = new Set(); base().forEach(c => (key === 'pref' ? [c.prefecture] : c.features || []).forEach(x => x && all.add(x)));
      items = [...all].map(v => ({ v, l: v }));
      items.sort((a, b) => (cnt.get(b.v) || 0) - (cnt.get(a.v) || 0) || a.l.localeCompare(b.l, 'ja'));
    }
    return items.map(i => Object.assign(i, { n: cnt.get(i.v) || 0 }));
  }


  function factLine() {
    const n = CAFES.length; if (!n) return '';
    const prefs = new Set(CAFES.map(c => c.prefecture).filter(Boolean)).size;
    const kinds = ANIMALS.filter(a => CAFES.some(c => (c.animals || []).includes(a.id))).length;
    return `<p class="fact">いま <b>${n}</b> 店を掲載（${prefs}都道府県・${kinds}種の動物）</p>`;
  }
  function hero() {
    const wins = ANIMALS.map(a => `<span class="win" style="--c:${esc(a.color)}">${pix(a.id)}</span>`).join('');
    const tiles = ANIMALS.map(a => {
      const n = CAFES.filter(c => (c.animals || []).includes(a.id)).length;
      return `<a class="tile${n ? '' : ' zero'}" href="animal.html?animal=${encodeURIComponent(a.id)}" style="--c:${esc(a.color)}"><span class="tpx">${pix(a.id)}</span><span class="nm">${esc(a.short)}</span><span class="ct">${n ? n + ' 店' : '準備中'}</span></a>`;
    }).join('');
    return band('b-hero', `<div class="hero"><div class="hero-txt"><div class="eyebrow">Animal Cafe Guide</div><h1>${esc(SITE_NAME)}</h1>
      ${SITE.tagline ? `<p class="tagline">${esc(SITE.tagline)}</p>` : ''}${SITE.description ? `<p class="desc">${esc(SITE.description)}</p>` : ''}${factLine()}
      <a class="btn hero-cta" href="#animals">動物から探す<i class="go">↓</i></a></div>
      <div class="collage" aria-hidden="true">${wins}</div></div>`)
      + band('b-mint tiles-sec" id="animals', `${sechead('動物から探す', 'Find by animal')}<div class="tiles">${tiles}</div>`);
  }
  function animalHead() {
    const a = AMAP[fixedAnimal];
    const n = CAFES.filter(c => (c.animals || []).includes(a.id)).length;
    return band('b-mint b-top', `<div class="crumb"><a href="index.html">TOP</a> / ${esc(a.name)}</div>
      <div class="animal-head" style="--c:${esc(a.color)}"><span class="apx" aria-hidden="true">${pix(a.id)}</span><div><div class="eyebrow">Animal</div><h1>${esc(a.name)}<span class="cnt">${n ? n + ' 店' : '準備中'}</span></h1>${a.description ? `<p>${esc(a.description)}</p>` : ''}</div></div>`);
  }
  function buildShell() {
    const groups = GROUPS.filter(g => !(page === 'animal' && g.key === 'animal'));
    if (page === 'animal' && !AMAP[fixedAnimal]) { notFound('その動物カテゴリは見つかりませんでした'); return false; }
    const top = page === 'index' ? hero() : animalHead();
    const head = favOnly ? sechead('お気に入り', 'Favorites') : sechead('お店を探す', 'Search');
    mainFrame(`${top}` + band('b-cream b-list', `${head}
      <div class="finder"><label class="search">${SEARCH}<input id="q" type="search" placeholder="店名・エリア・特徴で検索" autocomplete="off" aria-label="検索"></label>
      <div class="pills" id="pills">${groups.map(g => `<button class="pill" type="button" data-g="${g.key}" aria-expanded="false" aria-controls="panel-${g.key}">${g.label}<span class="n" hidden></span><i class="car"></i></button>`).join('')}<button class="clear" id="clear" type="button" hidden>条件をクリア</button></div>
      <div class="chips-row"><span class="lbl">AREA</span><div class="chips" id="chips" role="group" aria-label="都道府県で絞り込み"></div></div>
      ${groups.map(g => `<div class="panel" id="panel-${g.key}" hidden></div>`).join('')}</div>
      <div class="count"><span class="num" id="num">0</span><span class="en">Cafes</span><span class="shown" id="shown"></span>
        <label class="sortbox">並び替え<select id="sort" aria-label="並び替え">${Object.entries(SORTS).map(([k, l]) => `<option value="${k}">${l}</option>`).join('')}</select></label></div>
      <div class="grid" id="grid"></div>
      <div class="more" id="more" hidden><button type="button" id="morebtn">もっと見る</button></div>`));
    animReady = false;
    const q = document.getElementById('q'); q.value = state.q;
    document.getElementById('sort').value = state.sort;
    q.addEventListener('input', () => { state.q = q.value; limit = PAGE_SIZE; writeState(false); render(); });
    document.getElementById('sort').addEventListener('change', e => { state.sort = e.target.value; limit = PAGE_SIZE; writeState(true); render(); });
    document.getElementById('morebtn').addEventListener('click', () => { limit += PAGE_SIZE; render(); });
    document.getElementById('pills').addEventListener('click', e => {
      const b = e.target.closest('.pill'); if (!b) return;
      openGroup = openGroup === b.dataset.g ? null : b.dataset.g; render();
    });
    document.getElementById('chips').addEventListener('click', e => {
      const b = e.target.closest('.chip'); if (!b) return;
      const arr = state.pref, i = arr.indexOf(b.dataset.pref);
      i < 0 ? arr.push(b.dataset.pref) : arr.splice(i, 1);
      limit = PAGE_SIZE; writeState(true); render();
    });
    document.getElementById('clear').addEventListener('click', () => {
      state.q = ''; GROUPS.forEach(g => state[g.key] = []); q.value = ''; limit = PAGE_SIZE; writeState(true); render();
    });
    groups.forEach(g => document.getElementById('panel-' + g.key).addEventListener('change', e => {
      const cb = e.target; if (cb.type !== 'checkbox') return;
      const arr = state[g.key], i = arr.indexOf(cb.value);
      cb.checked ? (i < 0 && arr.push(cb.value)) : (i >= 0 && arr.splice(i, 1));
      limit = PAGE_SIZE; writeState(true); render();
    }));
    if (page === 'animal') {
      const a = AMAP[fixedAnimal];
      setMeta({ title: a.name + '一覧 | ' + SITE_NAME, desc: a.description, path: 'animal.html?animal=' + encodeURIComponent(a.id) });
    } else if (favOnly) setMeta({ title: 'お気に入り | ' + SITE_NAME, desc: SITE.description });
    else setMeta({ title: SITE_NAME + (SITE.tagline ? ' | ' + SITE.tagline : ''), desc: SITE.description, path: 'index.html' });
    return true;
  }
  function render() {
    if (!built) { readState(); built = buildShell(); if (!built) return; }
    const groups = GROUPS.filter(g => !(page === 'animal' && g.key === 'animal'));
    groups.forEach(g => {
      const panel = document.getElementById('panel-' + g.key), pill = document.querySelector(`.pill[data-g="${g.key}"]`);
      const opts = options(g.key).filter(o => o.n > 0 || state[g.key].includes(o.v));
      const focus = document.activeElement && panel.contains(document.activeElement) ? document.activeElement.value : null;
      panel.innerHTML = opts.length ? opts.map(o => `<label><input type="checkbox" value="${esc(o.v)}"${state[g.key].includes(o.v) ? ' checked' : ''}>${esc(o.l)}<small>${o.n}</small></label>`).join('') : '<span class="tag">候補がありません</span>';
      if (focus) { const el = [...panel.querySelectorAll('input')].find(i => i.value === focus); el && el.focus(); }
      panel.hidden = openGroup !== g.key;
      pill.setAttribute('aria-expanded', openGroup === g.key);
      const n = state[g.key].length, nb = pill.querySelector('.n');
      nb.hidden = !n; nb.textContent = n; pill.classList.toggle('on', n > 0);
    });
    // prefecture chips (count desc)
    const chips = document.getElementById('chips'), keep = chips.scrollLeft;
    const po = options('pref').filter(o => o.n > 0 || state.pref.includes(o.v));
    const hadFocus = document.activeElement && chips.contains(document.activeElement) ? document.activeElement.dataset.pref : null;
    const prevOn = new Map([...chips.children].map(b => [b.dataset.pref, b.getAttribute('aria-pressed')]));
    chips.innerHTML = po.length ? po.map(o => `<button type="button" class="chip" data-pref="${esc(o.v)}" aria-pressed="${state.pref.includes(o.v)}">${esc(o.v)}<small>${o.n}</small></button>`).join('') : '';
    chips.parentElement.hidden = !po.length;
    if (animReady && canAnim()) { /* 色の切り替えを 150ms で見せるため、前の状態から付け直す */
      const flipped = [...chips.children].filter(b => prevOn.has(b.dataset.pref) && prevOn.get(b.dataset.pref) !== b.getAttribute('aria-pressed'));
      flipped.forEach(b => { b.dataset.to = b.getAttribute('aria-pressed'); b.setAttribute('aria-pressed', prevOn.get(b.dataset.pref)); });
      if (flipped.length) { void chips.offsetWidth; flipped.forEach(b => { b.setAttribute('aria-pressed', b.dataset.to); delete b.dataset.to; }); }
    }
    chips.scrollLeft = keep;
    if (hadFocus) { const el = [...chips.children].find(b => b.dataset.pref === hadFocus); el && el.focus({ preventScroll: true }); }

    const list = sorted(base().filter(c => matches(c)));
    const shown = Math.min(limit, list.length);
    setCount(document.getElementById('num'), list.length, animReady);
    document.getElementById('shown').textContent = shown < list.length ? `（${shown}件表示中）` : '';
    document.getElementById('sort').value = state.sort;
    document.getElementById('clear').hidden = !(state.q || GROUPS.some(g => state[g.key].length));
    const pool = base(), grid = document.getElementById('grid');
    const oldPos = new Map();
    if (animReady) grid.querySelectorAll(':scope > .card:not(.ghost)').forEach(el => oldPos.set(el.dataset.id, { el, x: el.offsetLeft, y: el.offsetTop, w: el.offsetWidth, h: el.offsetHeight }));
    const emptyMsg = pool.length === 0 ? (favOnly ? 'お気に入りはまだありません。カードのハートで追加できます。' : '準備中です。店舗情報を調査しています。') : '条件に合うお店が見つかりませんでした。条件をゆるめてみてください。';
    grid.innerHTML = list.length ? list.slice(0, shown).map(card).join('') :
      `<div class="empty"><span class="empty-px" aria-hidden="true">${pix('cat')}</span><p>${emptyMsg}</p></div>`;
    if (animReady && canAnim()) flip(grid, oldPos);
    animReady = true;
    const more = document.getElementById('more');
    more.hidden = shown >= list.length;
    document.getElementById('morebtn').textContent = `もっと見る（残り${list.length - shown}件）`;
  }

  /* ---- detail ---- */
  function jsonLd(c) {
    const o = { '@context': 'https://schema.org', '@type': 'CafeOrCoffeeShop', name: c.name };
    const url = safeUrl(c.url); if (url) o.url = url;
    if (has(c.description)) o.description = c.description;
    if (has(c.address) || has(c.prefecture)) {
      o.address = { '@type': 'PostalAddress', addressCountry: 'JP' };
      if (has(c.prefecture)) o.address.addressRegion = c.prefecture;
      if (has(c.address)) o.address.streetAddress = c.address;
    }
    const m = String(c.hours || '').match(/^(\d{1,2}):(\d{2})\s*[〜~\-–ー]\s*(\d{1,2}):(\d{2})$/);
    if (m && c.closed === '無休') o.openingHours = `Mo-Su ${m[1].padStart(2, '0')}:${m[2]}-${m[3].padStart(2, '0')}:${m[4]}`;
    const lv = Number(c.price_level); if (lv >= 1 && lv <= 4) o.priceRange = '¥'.repeat(lv);
    const s = document.createElement('script'); s.type = 'application/ld+json';
    s.textContent = JSON.stringify(o).replace(/</g, '\\u003c');
    document.head.appendChild(s);
  }
  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(text);
    return new Promise((res, rej) => {
      try {
        const t = document.createElement('textarea'); t.value = text; t.style.position = 'fixed'; t.style.opacity = '0';
        document.body.appendChild(t); t.select(); const ok = document.execCommand('copy'); t.remove(); ok ? res() : rej();
      } catch (e) { rej(e); }
    });
  }
  function detail() {
    const id = new URLSearchParams(location.search).get('id');
    const c = CAFES.find(x => x.id === id);
    if (!c) { notFound('お店が見つかりませんでした'); return; }
    const a = primary(c), fav = favs.has(c.id), url = safeUrl(c.url);
    const mapUrl = has(c.address) ? 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(c.address) : '';
    const addrCell = has(c.address) ? esc(c.address) + `<a class="maplink" href="${esc(mapUrl)}" target="_blank" rel="noopener">地図で見る ↗</a>` : '—';
    const rows = [['住所', addrCell, true], ['アクセス', c.access], ['料金', c.price], ['営業時間', c.hours], ['定休日', c.closed], ['予約', c.reservation]]
      .map(r => `<tr><th>${r[0]}</th><td>${r[2] ? r[1] : val(r[1])}</td></tr>`).join('');
    const sims = CAFES.filter(x => x.id !== c.id && (x.animals || []).some(t => (c.animals || []).includes(t))).slice(0, 6);
    const used = new Set(sims.map(x => x.id).concat(c.id));
    const prefs = has(c.prefecture) ? CAFES.filter(x => !used.has(x.id) && x.prefecture === c.prefecture).slice(0, 6) : [];
    const crumb = `<div class="crumb"><a href="index.html">TOP</a>${a.name ? ` / <a href="animal.html?animal=${encodeURIComponent(a.id)}">${esc(a.name)}</a>` : ''} / ${esc(c.name)}</div>`;
    mainFrame(band('b-cream b-top', `${crumb}
      <section class="detail" style="--c:${esc(a.color)}">${thumb(c)}<div><div class="eyebrow">Cafe</div><h1>${esc(c.name)}</h1>${badgesOf(c)}
      <div class="actions">${url ? `<a class="btn" href="${esc(url)}" target="_blank" rel="noopener">公式サイトを見る ↗</a>` : ''}
      <button class="favbig" type="button" data-fav="${esc(c.id)}" aria-pressed="${fav}">${HEART}<span>${fav ? 'お気に入り済み' : 'お気に入りに追加'}</span></button>
      <button class="copybtn" type="button" id="copybtn">URLをコピー</button></div>
      <div class="meta">確認日：${val(c.checked)}</div>${tagsOf(c)}
      ${has(c.description) ? `<p class="lead">${esc(c.description)}</p>` : ''}
      <table class="info">${rows}</table></div></section>`)
      + band('b-mint', `${sechead('同じ動物の店', 'Similar')}<div class="grid">${sims.length ? sims.map(card).join('') : '<div class="empty">まだ登録がありません。</div>'}</div>`)
      + (prefs.length ? band('b-cream', `${sechead('同じ都道府県の店', 'Nearby', `<span class="sub">${esc(c.prefecture)}</span>`)}<div class="grid">${prefs.map(card).join('')}</div>`) : ''));
    const btn = document.getElementById('copybtn'); let timer;
    btn.addEventListener('click', () => {
      copyText(location.href).then(() => {
        btn.textContent = 'コピーしました'; btn.classList.add('done');
        clearTimeout(timer); timer = setTimeout(() => { btn.textContent = 'URLをコピー'; btn.classList.remove('done'); }, 2000);
      }).catch(() => { btn.textContent = 'コピーできませんでした'; clearTimeout(timer); timer = setTimeout(() => { btn.textContent = 'URLをコピー'; }, 2000); });
    });
    const where = [c.prefecture, c.area].filter(has).join(' ');
    const d = has(c.description) ? c.description : `${where}の${a.name || '動物カフェ'}。`;
    setMeta({ title: c.name + ' | ' + SITE_NAME, desc: (where ? where + '｜' : '') + d.slice(0, 110), type: 'article', path: 'cafe.html?id=' + encodeURIComponent(c.id) });
    jsonLd(c);
  }

  /* ---- about ---- */
  function about() {
    mainFrame(band('b-cream b-top', `<article class="about-page"><div class="eyebrow">About</div><h1>このサイトについて</h1>
      ${SITE.about ? `<p>${esc(SITE.about)}</p>` : ''}
      <h2>掲載の方針</h2>
      <ul><li>掲載する情報は、各店の公式サイトや公式SNSで確認した内容をもとに、自分たちの言葉でまとめています。</li>
      <li>掲載は無料です。店からお金をもらって順位や紹介文を変えることはしていません。</li>
      <li>写真は使っていません。画面の動物の絵は、このサイトのためにAI（Codexの画像生成）で作ったドット絵です。</li>
      <li>各店の「確認日」は、公式情報を見た日です。その後に変わっていることがあります。</li></ul>
      <h2>掲載内容の修正依頼</h2>
      <p>店名・料金・営業時間などの間違いや、閉店・休業のお知らせがあれば、修正をお願いできます。</p>
      <div class="box"><p>修正依頼は GitHub の Issues で受け付けています（GitHub のアカウントが必要です）。店名と、どこがどう違うかを書いてください。</p><p><a class="btn" href="https://github.com/pon524/animal-cafe-portal/issues/new?title=%E6%8E%B2%E8%BC%89%E5%86%85%E5%AE%B9%E3%81%AE%E4%BF%AE%E6%AD%A3%E4%BE%9D%E9%A0%BC&amp;body=%E5%BA%97%E5%90%8D%EF%BC%9A%0A%E7%9B%B4%E3%81%97%E3%81%A6%E3%81%BB%E3%81%97%E3%81%84%E3%81%A8%E3%81%93%E3%82%8D%EF%BC%9A%0A%E6%AD%A3%E3%81%97%E3%81%84%E6%83%85%E5%A0%B1%E3%81%8C%E5%88%86%E3%81%8B%E3%82%8B%E5%85%AC%E5%BC%8F%E3%83%9A%E3%83%BC%E3%82%B8%EF%BC%9A%0A" target="_blank" rel="noopener">修正を依頼する</a></p><p class="note">店の運営者の方も、同じ窓口から掲載の取り下げや追加をお知らせください。</p></div>
      <h2>広告について</h2>
      <p>このサイトは Google AdSense の広告を表示しています。Google などの第三者配信事業者は Cookie を使い、過去の閲覧内容にもとづいた広告を出すことがあります。パーソナライズ広告は <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener">Google の広告設定</a> で無効にできます。広告の仕組みは <a href="https://policies.google.com/technologies/ads?hl=ja" target="_blank" rel="noopener">Google のポリシーと規約</a> をご覧ください。</p>
      <p>このサイト自身は、お気に入りの保存にブラウザの localStorage を使うだけで、個人を特定する情報は集めていません。</p>
      <h2>免責</h2>
      ${SITE.disclaimer ? `<p>${esc(SITE.disclaimer)}</p>` : ''}
      <p>このサイトの情報を使って生じた損害について、運営は責任を負えません。最終的な判断は、各店の公式の案内をもとにしてください。</p></article>`));
    setMeta({ title: 'このサイトについて | ' + SITE_NAME, desc: '掲載の方針、掲載内容の修正依頼のご案内、免責事項をまとめたページです。', path: 'about.html' });
  }

  /* ---- boot ---- */
  if (page === 'cafe') detail();
  else if (page === 'about') about();
  else { render(); window.addEventListener('popstate', () => { built = false; openGroup = null; limit = PAGE_SIZE; render(); }); }
  intro();
  window.addEventListener('storage', updateBadge);
})();
