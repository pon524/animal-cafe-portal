# site/ （どうぶつカフェ図鑑 静的サイト）

- 開き方：`site/index.html` をブラウザで直接開く（file:// で動く）。または `python3 -m http.server 8765 --directory site` → http://localhost:8765/
- build：リポジトリ直下で `python3 tools/build.py`。`data/` から `site/data.js`、`site/robots.txt`（、BASE_URL 設定時は `site/sitemap.xml`）を書き出す。データを直したら必ず再実行。
- `_` で始まる `data/cafes/_*.json`（ダミー）は本番 build では無視。動作確認は `python3 tools/build.py --with-sample`。
- ページ：`index.html`（トップ）／`animal.html?animal=cat`（動物別）／`cafe.html?id=…`（詳細）／`about.html`（このサイトについて）／`404.html`／お気に入りは `index.html?fav=1`
- 一覧の機能：検索、絞り込みピル（動物・都道府県・料金・特徴）、都道府県チップ（件数付き横スクロール）、並び替え（おすすめ／料金が安い順／名前順）、24件ずつ「もっと見る」。条件は URL（q, animal, pref, price, feat, sort）に反映。
- 詳細の機能：料金・予約バッジ、地図リンク（Google マップ検索）、URLコピー、同じ動物／同じ都道府県の店、JSON-LD。title / description / OGP は JS が各ページに入れる（HTML にも既定値あり）。
- ファイル：`css/style.css`、`js/app.js`（全ページ共通）、`img/pixel/<動物id>.png`（AI生成のドット絵。無ければ `img/<動物id>.svg` の旧イラストに自動で戻る。`_sample.png` は見本）、`img/favicon.svg`、`img/ogp.svg`・`img/ogp.png`、`data.js`（生成物・手で編集しない）
- 公開URLの設定：環境変数 `BASE_URL`（例 `BASE_URL=https://example.com/dcz python3 tools/build.py`）。sitemap.xml・robots.txt の Sitemap 行が作られ、HTML の og:image と 404.html の `<base>` が絶対URLになり、JS が canonical / og:url を絶対URLにする。空のままなら相対に戻る。GitHub Pages では `.github/workflows/pages.yml` が自動で渡すので手元では空でよい（手順は `公開手順.md`）。
- OGP 画像は `img/ogp.png`（1200×630、`img/ogp.svg` を Chrome ヘッドレスで書き出したもの）。ogp.svg を直したら PNG も作り直す。`site/.nojekyll` は GitHub Pages 用の目印（消さない）。
- Google AdSense：各 HTML の `</head>` 直前にタグ（pub-9990610420404495、自動広告）、`ads.txt` をサイト直下に置いた（2026-11-06）。404.html には入れない。広告と Cookie の説明は about の「広告について」（`js/app.js`）。
- お気に入りは localStorage（キー dcz-favs）。店の `image` に画像パスを入れるとイラストの代わりに表示される。

## 見た目（v3）
- 紙の質感のクリーム地（CSSだけのノイズ）と、区画ごとの色帯（ヒーロー＝クリーム、動物の入口＝薄ミント、店一覧＝クリーム、フッター＝濃い緑）。境目に波線、点々の飾り。
- 配色：コーラル #D9626B（文字や塗りには濃い #B83F4B）、ティール #2F8F86、マスタード #E6B54A、ラベンダー #A99BD1、文字は焦げ茶 #3B2A20。
- フォント：Zen Kaku Gothic New（本文・見出し）、Zen Old Mincho（英字の小見出し）。見出しは「日本語＋英字」の組。
- ドット絵は `image-rendering: pixelated`。画像枠の地は #FFF6E8。ヒーローは12種の「カフェの窓」風タイル 4×3。
- カード：角丸22px、動物色の枠、左上に都道府県のリボン、ティールの「#」札、右下に丸い矢印（DETAIL）。
- ドット絵PNGがまだ無い間は、その画像が404になりコンソールにエラーが出る（表示は旧SVGで続行）。12枚そろえば出なくなる。

## 動きの一覧と止め方
- 動き：①読み込み時に一度だけ、ヒーローの文字が下からせり上がりタイルが順に出る（他ページは見出しのみ）／②ピル・チップ・ボタンの押下で2%縮み、選択色が150msで変わる／③絞り込み・並び替え・「もっと見る」でカードが滑って入れ替わる（FLIP）／④件数のカウントアップ（初回は数えない）／⑤ハートが弾む・コピーで枠がティール2秒／⑥主ボタンのホバー1.03倍／⑦0件の猫が一度まばたき。
- 実装：`js/app.js` 冒頭の motion 部（Web Animations API。translate / scale / opacity のみ）と `css/style.css` の transition。外部ライブラリなし、スクロール連動なし。
- 止め方：OSの「視差効果を減らす」（`prefers-reduced-motion: reduce`）で全部止まり、最終状態でそのまま出る。JS側は `canAnim()` が偽になり、CSS側は末尾の `@media (prefers-reduced-motion: reduce)` で transition / animation を無効化。
- 全部やめたいとき：`js/app.js` の `canAnim` を `() => false` にし、CSS 末尾の reduce ブロックの `@media` 条件を外す。
- カードのホバーは2pxの浮きのみ（以前の5pxから変更）。タイル（動物の入口）のホバーは従来どおり。
