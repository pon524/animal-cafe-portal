#!/usr/bin/env python3
"""data/ をまとめて site/data.js を書き出す。標準ライブラリのみ。
使い方: python3 tools/build.py [--with-sample]
ファイル名が _ で始まる cafes/*.json は --with-sample のときだけ含める。"""
import json, os, re, sys
from pathlib import Path
from urllib.parse import quote

# 公開URL（例 "https://example.com/dcz"）。空文字＝相対リンクのみで、sitemap.xml は作らない。
# 環境変数 BASE_URL があればそれを使う。無ければ Cloudflare Pages が自動で渡す CF_PAGES_URL
# （本番は https://doubutsu-cafe.pages.dev）。手元では両方とも無いので空＝相対リンクのまま。
BASE_URL = (os.environ.get("BASE_URL") or os.environ.get("CF_PAGES_URL") or "").strip()

ROOT = Path(__file__).resolve().parent.parent
with_sample = "--with-sample" in sys.argv

def load(p):
    with open(p, encoding="utf-8") as f:
        return json.load(f)

animals = load(ROOT / "data/animals.json")
site = load(ROOT / "data/site.json")
cafes, seen = [], set()
for p in sorted((ROOT / "data/cafes").glob("*.json")):
    if p.name.startswith("_") and not with_sample:
        continue
    for c in load(p):
        if c["id"] in seen:
            print(f"warn: duplicate id {c['id']} ({p.name})", file=sys.stderr)
            continue
        seen.add(c["id"])
        cafes.append(c)
ids = {a["id"] for a in animals}
for c in cafes:
    for a in c.get("animals", []):
        if a not in ids:
            print(f"warn: unknown animal '{a}' in {c['id']}", file=sys.stderr)

# 主な動物(animals[0])の animals.json 順に並べる（同じ動物の中はファイル内の並びのまま）
order = {a["id"]: i for i, a in enumerate(animals)}
cafes.sort(key=lambda c: order.get((c.get("animals") or [None])[0], len(order)))

out = ROOT / "site/data.js"
dump = lambda o: json.dumps(o, ensure_ascii=False, indent=1)
out.write_text(
    "/* build.py が生成。手で編集しない */\n"
    f"window.BASE_URL = {json.dumps(BASE_URL.rstrip('/'))};\nwindow.SITE = {dump(site)};\nwindow.ANIMALS = {dump(animals)};\nwindow.CAFES = {dump(cafes)};\n",
    encoding="utf-8")
print(f"wrote {out} : {len(animals)} animals, {len(cafes)} cafes" + (" (with sample)" if with_sample else ""))

# robots.txt と sitemap.xml
base = BASE_URL.rstrip("/")
robots = "User-agent: *\nAllow: /\n"
sm = ROOT / "site/sitemap.xml"
if base:
    paths = ["index.html", "about.html"] + [f"animal.html?animal={a['id']}" for a in animals] + [f"cafe.html?id={quote(c['id'])}" for c in cafes]
    lastmod = site.get("updated", "")
    esc = lambda u: u.replace("&", "&amp;")
    body = "".join(f"<url><loc>{esc(base + '/' + p)}</loc>" + (f"<lastmod>{lastmod}</lastmod>" if lastmod else "") + "</url>\n" for p in paths)
    sm.write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + body + "</urlset>\n", encoding="utf-8")
    robots += f"Sitemap: {base}/sitemap.xml\n"
    print(f"wrote {sm} : {len(paths)} urls")
elif sm.exists():
    sm.unlink()
(ROOT / "site/robots.txt").write_text(robots, encoding="utf-8")

# HTML の静的な og:image（JS を動かさない SNS のボットが読む）を絶対URLにする。BASE_URL が空なら相対に戻す。
# 404.html には <base> を入れ、どの深さの URL で表示されても css/js/img が読めるようにする。
HTML = ["index.html", "animal.html", "cafe.html", "about.html", "404.html"]
for name in HTML:
    p = ROOT / "site" / name
    s = t = p.read_text(encoding="utf-8")
    t = re.sub(r'(<meta property="og:image" content=")(?:https?://[^"]*/)?(img/ogp\.png")',
               lambda m: m.group(1) + (base + "/" if base else "") + m.group(2), t)
    t = re.sub(r'\n<base href="[^"]*">', "", t)
    if base and name == "404.html":
        t = t.replace("<head>", f'<head>\n<base href="{base}/">', 1)
    if t != s:
        p.write_text(t, encoding="utf-8")
        print(f"patched {name} ({'absolute' if base else 'relative'})")
