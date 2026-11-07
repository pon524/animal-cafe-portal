/* build.py が生成。手で編集しない */
window.BASE_URL = "";
window.CLEAN_URLS = false;
window.SITE = {
 "name": "どうぶつカフェ図鑑",
 "tagline": "会いたい動物から、日本の動物カフェを探す",
 "description": "会いたい動物から、日本の動物カフェを探せるポータルサイト。猫、うさぎ、フクロウなど動物別に、料金やアクセスの目安を確認できます。",
 "about": "どうぶつカフェ図鑑は、行きたい動物から動物カフェを探すためのサイトです。掲載している情報は、各店の公式サイトや公式SNSで確認した内容をもとにまとめています。掲載は無料で、店からお金をもらってはいません。動物ごとの特徴も紹介しているので、初めての人も参考にしてください。",
 "disclaimer": "料金や営業時間は変わることがあるため、来店前に必ず公式サイトで最新の情報をご確認ください。動物の体調や機嫌によって、会えない場合や触れ合えない場合があります。動物に無理をさせず、スタッフの案内に従って楽しんでください。",
 "updated": "2026-11-06"
};
window.ANIMALS = [
 {
  "id": "cat",
  "name": "猫カフェ",
  "short": "猫",
  "emoji": "🐱",
  "color": "#F6C9C9",
  "description": "気ままに過ごす猫のそばで、のんびり時間を過ごせます。抱っこできるかどうかは店ごとに違うので、ルールを聞いて猫のペースに合わせるのが基本です。静かに過ごしたい人や、初めて動物カフェに行く人にも向いています。"
 },
 {
  "id": "dog",
  "name": "犬カフェ",
  "short": "犬",
  "emoji": "🐶",
  "color": "#F7DDB5",
  "description": "犬カフェは、人なつこい犬と触れ合ったり、散歩や撮影を楽しめたりする店が中心です。犬には相性や機嫌があり、触れ方の約束事も店ごとに違うので、スタッフの案内をよく聞きましょう。にぎやかな雰囲気が好きな人に向いています。"
 },
 {
  "id": "rabbit",
  "name": "うさぎカフェ",
  "short": "うさぎ",
  "emoji": "🐰",
  "color": "#E9D7F2",
  "description": "うさぎは音や急な動きに敏感なので、落ち着いた空間でそっと撫でるのが基本です。抱っこが苦手な子が多く、床に座って近づいてくるのを待つ店もあります。ゆったり静かに過ごしたい人に向いています。"
 },
 {
  "id": "owl",
  "name": "フクロウカフェ",
  "short": "フクロウ・猛禽",
  "emoji": "🦉",
  "color": "#D9D2C5",
  "description": "フクロウや猛禽類を腕や肩にのせて、間近で見られるのが魅力です。羽ばたきや足の爪に注意が必要で、のせ方などは店のスタッフが教えてくれます。写真を撮りたい人や、ちょっと珍しい体験をしたい人に向いています。"
 },
 {
  "id": "hedgehog",
  "name": "ハリネズミカフェ",
  "short": "ハリネズミ",
  "emoji": "🦔",
  "color": "#E6D8C3",
  "description": "ハリネズミは小さくて針があり、手のひらにのせて見守る形のふれあいが中心です。驚くと針を立てるため、触り方は店の説明に従い、静かに接しましょう。小さな生き物をじっくり観察したい人に向いています。"
 },
 {
  "id": "bird",
  "name": "小鳥カフェ",
  "short": "小鳥・インコ",
  "emoji": "🦜",
  "color": "#C9E7D6",
  "description": "インコや小鳥が肩や手に乗ってくれる店が多く、鳴き声を聞きながら過ごせます。大声や急な動きは苦手な子もいるため、ゆっくり動くのがコツです。かわいい鳥の仕草を間近で楽しみたい人に向いています。"
 },
 {
  "id": "reptile",
  "name": "爬虫類カフェ",
  "short": "爬虫類",
  "emoji": "🦎",
  "color": "#CFE3C4",
  "description": "ヘビやトカゲ、カメなど、普段は見られない爬虫類に出会えるカフェです。触れるかどうかは種類や店で異なるので、入店前に確認しておくと安心です。見た目の珍しさや生態に興味がある人に向いています。"
 },
 {
  "id": "capybara",
  "name": "カピバラカフェ",
  "short": "カピバラ",
  "emoji": "🦫",
  "color": "#E8D2B8",
  "description": "大きな体でのんびり過ごすカピバラは、おとなしい姿が魅力です。えさやりや撫でる体験ができる店もありますが、その日の機嫌や体調で内容が変わることがあります。ゆったりした癒やしを求める人に向いています。"
 },
 {
  "id": "otter",
  "name": "カワウソカフェ",
  "short": "カワウソ",
  "emoji": "🦦",
  "color": "#C7DEEA",
  "description": "カワウソは動きが速く、好奇心旺盛でよく動き回る様子を楽しめます。人気が高く予約が必要な店や、触れ合いの決まりが細かい店もあるので、事前に確認しましょう。元気な動物を眺めて楽しみたい人に向いています。"
 },
 {
  "id": "smallanimal",
  "name": "小動物カフェ",
  "short": "小動物",
  "emoji": "🐹",
  "color": "#F3E2C7",
  "description": "ハムスターやチンチラ、フェレットなど、小さな動物を手のひらで見守れるカフェです。動物ごとに触れ方の約束が違い、体調によって会えない子もいます。小さな生き物がじっくり好きな人に向いています。"
 },
 {
  "id": "farm",
  "name": "ふれあい牧場カフェ",
  "short": "牧場の動物",
  "emoji": "🐐",
  "color": "#DDE8C8",
  "description": "ヤギやミニブタ、アルパカなどにえさをあげたり、近くで見たりできる店です。動物が大きめなので、動きに驚かせないよう気をつけ、えさやりのルールを守りましょう。子ども連れや、のどかな雰囲気が好きな人に向いています。"
 },
 {
  "id": "other",
  "name": "そのほかの動物カフェ",
  "short": "その他の動物",
  "emoji": "🐧",
  "color": "#D6DCEB",
  "description": "ペンギンやミーアキャット、ヤマネコなど、ほかのカテゴリに入らない珍しい動物に会える店です。動物によって触れ合えるかどうかが大きく違うので、事前に公式サイトで確認しておくと安心です。新しい出会いを探したい人に向いています。"
 }
];
window.CAFES = [
 {
  "id": "kyoto-cat-mocha-kawaramachi",
  "name": "猫カフェMOCHA 京都河原町店",
  "animals": [
   "cat"
  ],
  "prefecture": "京都府",
  "area": "河原町",
  "address": "京都府京都市中京区河原町通三条下ル大黒町58 mina 4F",
  "access": "京都市役所前駅・三条駅から徒歩5分",
  "url": "https://www.catmocha.jp/shop/kawaramachi/",
  "price": "入場1,200円／最初の30分（平日・税込、ドリンクバー込み）、延長10分220円",
  "price_level": 2,
  "hours": "11:00〜21:00（最終入店20:30）",
  "closed": "1/1のみ休館",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "駅近",
   "子ども可",
   "写真OK"
  ],
  "description": "河原町の商業ビル4階にある、全国チェーンの猫カフェ。ドリンクバー込みの時間制で、漫画を読んだり仕事をしたりと自由に過ごせる。観光の合間にふらりと立ち寄りたい人や、ひとりで来る人にも向く。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://www.catmocha.jp/shop/kawaramachi/ で確認"
 },
 {
  "id": "fukuoka-cat-mocha-tenjin-daimyo",
  "name": "猫カフェMOCHA 天神大名店",
  "animals": [
   "cat"
  ],
  "prefecture": "福岡県",
  "area": "天神・大名",
  "address": "福岡県福岡市中央区大名1-12-6 NEO大名ビル3F",
  "access": "福岡市地下鉄七隈線 天神南駅から徒歩10分／空港線 赤坂駅から徒歩8分",
  "url": "https://www.catmocha.jp/shop/tenjindaimyo/",
  "price": "入場1,045円／最初の30分（平日・税込、ドリンクバー込み）、延長10分220円",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入店19:30）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "子ども可",
   "写真OK"
  ],
  "description": "天神の西側、大名エリアのビルの3階にある猫カフェ。ドリンクバー付きの時間制で、ワークスペースとして使える席もあるのが特徴。買い物や散歩のついでに立ち寄りやすい。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://www.catmocha.jp/shop/tenjindaimyo/ で確認"
 },
 {
  "id": "aichi-cat-mocha-nagoya-sakae",
  "name": "猫カフェMOCHA 名古屋栄店",
  "animals": [
   "cat"
  ],
  "prefecture": "愛知県",
  "area": "栄・矢場町",
  "address": "愛知県名古屋市中区栄3-32-6 BECOME SAKAE 2F",
  "access": "矢場町駅から徒歩1分、栄駅から徒歩10分",
  "url": "https://www.catmocha.jp/shop/nagoya/",
  "price": "入場1,100円／最初の30分（平日・税込、ドリンクバー込み）、延長10分220円",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入店19:30）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "駅近",
   "子ども可",
   "写真OK"
  ],
  "description": "矢場町駅から歩いてすぐの、栄エリアにある猫カフェ。ドリンクバー込みの30分単位の料金で、予約なしで入れる気軽さが魅力。買い物帰りのひと休みや、友人との待ち合わせにも使いやすい。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://www.catmocha.jp/shop/nagoya/ で確認"
 },
 {
  "id": "hyogo-cat-mocha-sannomiya",
  "name": "猫カフェMOCHA 三宮店",
  "animals": [
   "cat"
  ],
  "prefecture": "兵庫県",
  "area": "三宮",
  "address": "兵庫県神戸市中央区下山手通2丁目1-14 アークコースト5F",
  "access": "阪急「神戸三宮駅」西口から徒歩3分／地下鉄「三宮駅」西1番・西3番出口から徒歩1分",
  "url": "https://www.catmocha.jp/shop/kobesannomiya/",
  "price": "入場1,100円／最初の30分（平日・税込、ドリンクバー込み）、延長10分220円",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入店19:30）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "駅近",
   "子ども可",
   "写真OK"
  ],
  "description": "三宮駅の西側、ビルの5階にある猫カフェ。地下鉄の出口から徒歩1分ほどと、旅行中でも寄りやすい立地。ドリンクバー込みで、短時間の利用にも長居にも合う。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://www.catmocha.jp/shop/kobesannomiya/ で確認"
 },
 {
  "id": "osaka-cat-neco-republic-necoyokujo",
  "name": "ねこ浴場&ねこ旅籠 保護猫カフェ ネコリパブリック大阪",
  "animals": [
   "cat"
  ],
  "prefecture": "大阪府",
  "area": "心斎橋・長堀橋",
  "address": "大阪府大阪市中央区島之内1丁目14-29",
  "access": "長堀橋駅6番出口から徒歩約2分、心斎橋駅から徒歩約9分",
  "url": "https://www.neco-republic.jp/necoyokujo/",
  "price": "平日30分1,570円／60分1,760円（税込、ドリンク飲み放題）、延長10分220円",
  "price_level": 2,
  "hours": "平日12:00〜21:00／土日祝12:00〜20:00",
  "closed": "なし（猫の健康管理のため月1回ほど不定休）",
  "reservation": "推奨",
  "features": [
   "保護動物",
   "里親募集",
   "ドリンク込み",
   "駅近",
   "子ども可"
  ],
  "description": "銭湯をイメージした内装の保護猫カフェで、畳に寝転んで猫を眺めたり足湯をしたりできる。猫カフェに隣接して宿泊できる「ねこ旅籠」も併設している。保護猫の譲渡の場でもあり、利用料が猫の世話に使われる仕組み。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://www.neco-republic.jp/necoyokujo/ で確認（予約なしでも入店可、混雑時は不可の記載）"
 },
 {
  "id": "hiroshima-cat-neco-republic-hiroshima",
  "name": "保護猫カフェ ネコリパブリック広島店",
  "animals": [
   "cat"
  ],
  "prefecture": "広島県",
  "area": "大手町",
  "address": "広島県広島市中区大手町5-5-10 栗原ビル2F",
  "access": "アーケード商店街の2階",
  "url": "https://www.neco-republic.jp/shop/shop-necorepublic-hiroshima/",
  "price": "平日30分1,100円／60分1,500円（税抜）、休日30分1,300円／60分1,700円",
  "price_level": 2,
  "hours": "平日13:00〜19:00／休日11:00〜19:00（ページ上部に平日20:00までの表記もあり）",
  "closed": "火曜",
  "reservation": "推奨",
  "features": [
   "保護動物",
   "里親募集",
   "子ども可"
  ],
  "description": "広島市中心部の商店街の2階にある、ネコリパブリックの西日本唯一の店舗。シックな内装と大きなキャットタワーが印象的な保護猫カフェ。入店時に靴下の着用と手足の消毒が求められ、中学生以下は保護者同伴。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://www.neco-republic.jp/shop/shop-necorepublic-hiroshima/ で確認。営業時間は同ページ内で19:00と20:00の表記が混在"
 },
 {
  "id": "tokyo-cat-neco-republic-ochanomizu",
  "name": "保護猫カフェ ネコリパブリック東京お茶の水店",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "御茶ノ水・湯島",
  "address": "東京都文京区湯島3丁目1-9 CRANEビル4階",
  "access": "御茶ノ水・湯島エリア",
  "url": "https://www.neco-republic.jp/shop/shop-necorepublic-ochanomizu/",
  "price": "平日30分1,430円／60分1,760円（税込）、土日祝30分1,650円／60分1,980円、延長30分660円",
  "price_level": 2,
  "hours": "平日12:00〜19:00／休日11:00〜18:00",
  "closed": "木曜（祝日は営業）",
  "reservation": "推奨",
  "features": [
   "保護動物",
   "里親募集",
   "貸切可",
   "子ども可"
  ],
  "description": "文京区湯島にある、保護猫の譲渡活動も行うネコリパブリックの東京の店。現在は予約優先の営業で、予約制の個室も用意されている。猫との出会いも含めて、落ち着いて過ごしたい人向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://www.neco-republic.jp/shop/shop-necorepublic-ochanomizu/ で確認"
 },
 {
  "id": "miyagi-cat-moff-sendai-parco",
  "name": "Cat Café MOFF 仙台PARCO店",
  "animals": [
   "cat"
  ],
  "prefecture": "宮城県",
  "area": "仙台駅",
  "address": "宮城県仙台市青葉区中央1-2-3 仙台PARCO1 5F",
  "access": "JR仙台駅に直結（PARCO1）",
  "url": "https://moff-moff.jp/cat-cafe/shop/sendai/",
  "price": "入園700円／30分（ワンドリンク制）、以降10分250円、最大平日1,900円・土日祝2,900円",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "仙台PARCOの定休日に準ずる",
  "reservation": "不要",
  "features": [
   "駅近",
   "子ども可"
  ],
  "description": "仙台駅直結の商業施設の5階にある猫カフェで、公式ページでは18匹が在籍。ドリンクを1杯頼む方式で、最大料金の設定があるので長居もしやすい。小学生以下は大人の同伴が必要で、再入園はできない。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://moff-moff.jp/cat-cafe/shop/sendai/ で確認"
 },
 {
  "id": "hokkaido-cat-mata-tabi",
  "name": "保護猫カフェ mata×tabi",
  "animals": [
   "cat"
  ],
  "prefecture": "北海道",
  "area": "すすきの・中島公園",
  "address": "北海道札幌市中央区南6条西8丁目4-11",
  "access": "札幌市中心部・すすきの方面",
  "url": "https://neko-matatabicafe.shopinfo.jp/",
  "price": "1階 大人1時間1,000円・30分600円・延長10分200円＋ワンオーダー、ドリンクコース1時間1,500円",
  "price_level": 2,
  "hours": "11:30〜17:00（1階LO16:30、2階LO16:00）",
  "closed": "水曜",
  "reservation": "推奨",
  "features": [
   "保護動物",
   "里親募集",
   "子ども可"
  ],
  "description": "古民家を使った札幌の保護猫カフェで、障がいのある人の就労支援も兼ねる運営。館内には猫神社もあり、フロアごとに過ごし方が選べる。公式アプリでの予約が優先される。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://neko-matatabicafe.shopinfo.jp/ と https://mata-tabi.com/system/ で確認。猫おやつは当面休止との告知あり"
 },
 {
  "id": "kyoto-cat-hyoneko-no-mori",
  "name": "京都ひょう猫の森",
  "animals": [
   "cat"
  ],
  "prefecture": "京都府",
  "area": "新京極・河原町",
  "address": "京都府京都市中京区寺町通東大文字町380番地",
  "access": "新京極通りから徒歩1分",
  "url": "https://owls-cats-forest.com/free/cats-kyoto",
  "price": "大人1,000円／30分（ワンドリンク付き）、以降10分単位で延長",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:30〜18:30（最終入場は閉店30分前）",
  "closed": "公式ページに記載なし",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "子ども可",
   "写真OK"
  ],
  "description": "ヒョウ柄の毛並みが特徴のベンガルキャットに会える、京都・新京極の猫カフェ。チケットは当日店頭のみの販売で、予約は受け付けていない。入店には靴下が必要で、4歳以上から入場できる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://owls-cats-forest.com/free/cats-kyoto で確認。2026-07-06 の公式お知らせ（https://owls-cats-forest.com/info/6830176 ）で移転後の住所を確認（店舗ページの住所欄は旧表記のまま）"
 },
 {
  "id": "miyagi-cat-full-cat-sendai",
  "name": "保護猫カフェ フルキャット",
  "animals": [
   "cat"
  ],
  "prefecture": "宮城県",
  "area": "仙台・一番町",
  "address": "宮城県仙台市青葉区一番町10-25 一番街ビル3F",
  "access": "地下鉄広瀬通駅・青葉通一番町駅から徒歩3分",
  "url": "https://full-cat.com",
  "price": "平日30分1,100円（フリードリンク付）、フリータイム3,300円／土日祝30分1,300円",
  "price_level": 2,
  "hours": "11:00〜20:00",
  "closed": "定休日なし（臨時休業あり）",
  "reservation": "推奨",
  "features": [
   "保護動物",
   "駅近",
   "ドリンク込み",
   "時間無制限プランあり",
   "子ども可",
   "写真OK"
  ],
  "description": "仙台中心部のアーケード内にある保護猫カフェで、2026年8月に開いた。16匹ほどの猫が暮らし、ドリンクバー込みで過ごせる。猫が嫌がる抱っこは控える決まりなので、猫のペースに合わせて静かに楽しみたい人向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://full-cat.com 、https://full-cat.com/about/ 、https://full-cat.com/howto/ で確認"
 },
 {
  "id": "aichi-cat-hidamari-gou-nagoya",
  "name": "保護猫カフェ ひだまり号",
  "animals": [
   "cat"
  ],
  "prefecture": "愛知県",
  "area": "名古屋・西区",
  "address": "愛知県名古屋市西区香呑町3-74",
  "access": "名古屋市営バス「香呑町」バス停すぐ／庄内通駅から約480m",
  "url": "https://hidamari-cat.com/cafe/",
  "price": "30分880円、60分1,320円（ソフトドリンク飲み放題）、以降15分275円",
  "price_level": 2,
  "hours": "11:30〜20:00（土日祝は19:00まで、最終入店19:00／日祝は17:50）",
  "closed": "水曜・木曜（不定休あり）",
  "reservation": "推奨",
  "features": [
   "保護動物",
   "里親募集",
   "ドリンク込み",
   "写真OK"
  ],
  "description": "名古屋市西区の保護猫カフェで、ソファ12席ほどの小さな店。ドリンクバー込みで、里親を探す猫たちと過ごせる。5歳未満は入店できないので、大人や小学生以上向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://hidamari-cat.com/ 、https://hidamari-cat.com/cafe/ で確認"
 },
 {
  "id": "gunma-cat-moff-takasaki-opa",
  "name": "Cat Café MOFF 高崎オーパ店",
  "animals": [
   "cat"
  ],
  "prefecture": "群馬県",
  "area": "高崎駅",
  "address": "群馬県高崎市八島町46-1 高崎オーパ4F",
  "access": "JR高崎駅西口デッキ直結",
  "url": "https://moff-moff.jp/cat-cafe/shop/takasaki/",
  "price": "入園700円／30分（ワンドリンクオーダー制）、以降10分250円、最大平日1,900円・土日祝2,900円",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "高崎オーパの定休日に準ずる",
  "reservation": "不要",
  "features": [
   "駅近",
   "子ども可"
  ],
  "description": "高崎駅の西口から屋根続きで行ける商業施設の4階にある猫カフェ。公式ページでは約25匹が紹介され、ドリンクを頼んで過ごす方式。買い物や電車の待ち時間に寄りやすい。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://moff-moff.jp/cat-cafe/shop/takasaki/ で確認"
 },
 {
  "id": "saitama-cat-moff-aeon-kawaguchi-maekawa",
  "name": "Cat Café MOFF イオンモール川口前川店",
  "animals": [
   "cat"
  ],
  "prefecture": "埼玉県",
  "area": "川口市・前川",
  "address": "埼玉県川口市前川1丁目1-11 イオンモール川口前川 3F",
  "access": "イオンモール川口前川 3階",
  "url": "https://moff-moff.jp/cat-cafe/shop/kawaguchi/",
  "price": "入園700円／30分（ワンドリンクオーダー制）、以降10分250円、最大平日1,900円・土日祝2,900円",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "イオンモール川口前川の定休日に準ずる",
  "reservation": "不要",
  "features": [
   "子ども可"
  ],
  "description": "ショッピングモール3階にある猫カフェで、公式ページには約25匹が載っている。予約なしで入れ、時間料金に上限があるため、買い物ついでに長めに過ごすこともできる。抱っこはできず、眺めたりおやつをあげたりして楽しむ。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://moff-moff.jp/cat-cafe/shop/kawaguchi/ で確認"
 },
 {
  "id": "saitama-cat-moff-cocoon-saitama-shintoshin",
  "name": "Cat Café MOFF コクーンシティさいたま新都心店",
  "animals": [
   "cat"
  ],
  "prefecture": "埼玉県",
  "area": "さいたま新都心",
  "address": "埼玉県さいたま市大宮区吉敷町4-263-1 コクーンシティ コクーン2 3F",
  "access": "JRさいたま新都心駅東口からすぐ",
  "url": "https://moff-moff.jp/cat-cafe/shop/cc-saitama/",
  "price": "入園700円／30分（ワンドリンクオーダー制）、以降10分250円、最大平日1,900円・土日祝2,900円",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "コクーンシティの定休日に準ずる",
  "reservation": "不要",
  "features": [
   "駅近",
   "子ども可"
  ],
  "description": "さいたま新都心駅東口の商業施設にある猫カフェで、公式ページでは約30匹が紹介されている。ブリティッシュやラグドールなど猫種が幅広く、駅から近いので仕事帰りにも寄りやすい。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://moff-moff.jp/cat-cafe/shop/cc-saitama/ で確認"
 },
 {
  "id": "saitama-cat-moff-morage-shobu",
  "name": "Cat Café MOFF モラージュ菖蒲店",
  "animals": [
   "cat"
  ],
  "prefecture": "埼玉県",
  "area": "久喜市・菖蒲",
  "address": "埼玉県久喜市菖蒲町菖蒲6005-1 モラージュ菖蒲3F",
  "access": "モラージュ菖蒲の3階（車での来店は施設の駐車場を利用）",
  "url": "https://moff-moff.jp/cat-cafe/shop/shobu/",
  "price": "入園700円／30分（ワンドリンクオーダー制）、以降10分250円、最大平日1,900円・土日祝2,900円",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "モラージュ菖蒲の定休日に準ずる",
  "reservation": "不要",
  "features": [
   "子ども可"
  ],
  "description": "大型商業施設の3階にある猫カフェで、公式ページでは約28匹が紹介されている。メインクーンやベンガルなど大きめの猫種もいる。車で家族と出かけるときの立ち寄り先に向く。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://moff-moff.jp/cat-cafe/shop/shobu/ で確認"
 },
 {
  "id": "chiba-cat-moff-seven-park-ario-kashiwa",
  "name": "Cat Café MOFF セブンパークアリオ柏店",
  "animals": [
   "cat"
  ],
  "prefecture": "千葉県",
  "area": "柏市・大島田",
  "address": "千葉県柏市大島田1-6-1 セブンパークアリオ柏 3F",
  "access": "セブンパークアリオ柏の3階（車での来店は施設の駐車場を利用）",
  "url": "https://moff-moff.jp/cat-cafe/shop/kashiwa/",
  "price": "入園700円／30分（ワンドリンクオーダー制）、以降10分250円、最大平日1,900円・土日祝2,900円",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "セブンパークアリオ柏の定休日に準ずる",
  "reservation": "不要",
  "features": [
   "子ども可"
  ],
  "description": "大型モールの3階にある猫カフェで、公式ページでは約29匹が紹介されている。メインクーン、ラグドール、ベンガルなど猫種が多く、ドリンクを1杯頼んで過ごす。買い物のついでに立ち寄りたい人向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://moff-moff.jp/cat-cafe/shop/kashiwa/ で確認"
 },
 {
  "id": "chiba-cat-moff-aeon-narita",
  "name": "Moff animal cafe イオンモール成田店",
  "animals": [
   "cat"
  ],
  "prefecture": "千葉県",
  "area": "成田市",
  "address": "千葉県成田市ウイング土屋24 イオンモール成田 2F",
  "access": "京成成田駅から直行バスで約10分（成田IC から約3.5km）",
  "url": "https://moff-moff.jp/cat-cafe/shop/narita/",
  "price": "入園700円／30分＋ドリンクバー380円（必須）、以降10分250円、最大平日1,900円・土日祝2,900円",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "イオンモール成田の定休日に準ずる",
  "reservation": "不要",
  "features": [
   "子ども可"
  ],
  "description": "成田空港に近いイオンモールの2階にある、猫のいる動物カフェ。公式ページでは約23匹が紹介され、ドリンクバーが必須の料金体系になっている。旅行の前後や買い物のついでに寄りやすい。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://moff-moff.jp/cat-cafe/shop/narita/ で確認"
 },
 {
  "id": "kanagawa-cat-moff-coaska-bayside",
  "name": "Cat Café MOFF コースカベイサイドストアーズ店",
  "animals": [
   "cat"
  ],
  "prefecture": "神奈川県",
  "area": "横須賀・汐入",
  "address": "神奈川県横須賀市本町2-1-12 コースカベイサイドストアーズ 5F",
  "access": "京急汐入駅から徒歩3分",
  "url": "https://moff-moff.jp/cat-cafe/shop/coaska/",
  "price": "入園700円／30分（ワンドリンクオーダー制）、以降10分250円、最大平日1,900円・土日祝2,900円",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "コースカベイサイドストアーズの定休日に準ずる",
  "reservation": "不要",
  "features": [
   "駅近",
   "子ども可"
  ],
  "description": "横須賀の港沿いの商業施設5階にある猫カフェで、公式ページでは約25匹が紹介されている。汐入駅から近く、海辺の散策や買い物とあわせて立ち寄れる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://moff-moff.jp/cat-cafe/shop/coaska/ で確認"
 },
 {
  "id": "nagano-cat-moff-aeon-suzaka",
  "name": "Cat Café MOFF イオンモール須坂店",
  "animals": [
   "cat"
  ],
  "prefecture": "長野県",
  "area": "須坂市",
  "address": "長野県須坂市大字福島386-1 イオンモール須坂 3F",
  "access": "イオンモール須坂の3階（車での来店は施設の駐車場を利用）",
  "url": "https://moff-moff.jp/cat-cafe/shop/suzaka/",
  "price": "入園700円／30分（ワンドリンクオーダー制）、以降10分250円、最大平日1,900円・土日祝2,900円",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "イオンモール須坂の定休日に準ずる",
  "reservation": "不要",
  "features": [
   "子ども可"
  ],
  "description": "長野市の近く、須坂市のイオンモール3階にある猫カフェ。公式ページでは約25匹が紹介され、予約なしで入れる。長野県北部でふれあい以外の猫カフェを探している人に向く。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://moff-moff.jp/cat-cafe/shop/suzaka/ で確認"
 },
 {
  "id": "shizuoka-cat-moff-shizuoka-parco",
  "name": "Cat Café MOFF 静岡PARCO店",
  "animals": [
   "cat"
  ],
  "prefecture": "静岡県",
  "area": "静岡駅",
  "address": "静岡県静岡市葵区紺屋町6-7 静岡PARCO 3F",
  "access": "JR静岡駅から徒歩3分",
  "url": "https://moff-moff.jp/cat-cafe/shop/shizuoka/",
  "price": "入園700円／30分（ワンドリンクオーダー制）、以降10分250円、最大平日1,900円・土日祝2,900円",
  "price_level": 2,
  "hours": "平日10:30〜19:30／土日祝10:00〜19:30（最終入園19:00）",
  "closed": "静岡PARCOの定休日に準ずる",
  "reservation": "不要",
  "features": [
   "駅近",
   "子ども可"
  ],
  "description": "静岡駅から歩いて行ける商業施設の3階にある猫カフェで、公式ページでは約31匹が紹介されている。ドリンク1杯の注文制で、最大料金の上限もある。静岡観光の合間にも寄りやすい。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://moff-moff.jp/cat-cafe/shop/shizuoka/ で確認"
 },
 {
  "id": "okayama-cat-moff-ario-kurashiki",
  "name": "Cat Café MOFF アリオ倉敷店",
  "animals": [
   "cat"
  ],
  "prefecture": "岡山県",
  "area": "倉敷市",
  "address": "岡山県倉敷市寿町12-2 アリオ倉敷 2F",
  "access": "アリオ倉敷の2階（車での来店は施設の駐車場を利用）",
  "url": "https://moff-moff.jp/cat-cafe/shop/kurashiki/",
  "price": "入園700円／30分（ワンドリンクオーダー制）、以降10分250円、最大平日1,900円・土日祝2,900円",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "アリオ倉敷の定休日に準ずる",
  "reservation": "不要",
  "features": [
   "子ども可"
  ],
  "description": "倉敷市のショッピングモール2階にある猫カフェで、公式ページでは約21匹が紹介されている。予約不要で、買い物のついでに寄れる。抱っこはできないので、見て楽しむ人向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://moff-moff.jp/cat-cafe/shop/kurashiki/ で確認"
 },
 {
  "id": "okinawa-cat-moff-kokusaidori",
  "name": "Cat Café MOFF 沖縄国際通り店",
  "animals": [
   "cat"
  ],
  "prefecture": "沖縄県",
  "area": "那覇・国際通り",
  "address": "沖縄県那覇市久茂地3丁目29番2号 JMFビル沖縄国際通り01 3F",
  "access": "ゆいレール県庁前駅から徒歩7分（駐車場なし）",
  "url": "https://moff-moff.jp/cat-cafe/shop/kokusaidori/",
  "price": "入園900円／30分＋ドリンクバー380円（必須）、以降10分250円、最大平日2,100円・土日祝3,100円",
  "price_level": 3,
  "hours": "11:00〜20:00（最終入園19:30）",
  "closed": "JMFビル沖縄国際通り01の定休日に準ずる",
  "reservation": "不要",
  "features": [
   "子ども可"
  ],
  "description": "那覇の国際通り近くのビル3階にある猫カフェで、公式ページでは約20匹が紹介されている。観光中に雨宿りがてら寄る使い方もできる。他の店舗より入園料はやや高めの設定。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://moff-moff.jp/cat-cafe/shop/kokusaidori/ で確認"
 },
 {
  "id": "shiga-cat-neco-republic-shiga",
  "name": "保護猫カフェ ネコリパブリック滋賀",
  "animals": [
   "cat"
  ],
  "prefecture": "滋賀県",
  "area": "愛荘町",
  "address": "滋賀県愛知郡愛荘町愛知川364-1 2F",
  "access": "公式ページに記載なし（来店前に確認を）",
  "url": "https://www.neco-republic.jp/shop/shiga/",
  "price": "平日30分600円／60分1,100円（税抜）、土日祝30分760円／60分1,400円",
  "price_level": 2,
  "hours": "火・水・金・土 11:00〜19:00／日・祝 11:00〜18:00",
  "closed": "月曜・木曜（祝日は営業）",
  "reservation": "推奨",
  "features": [
   "保護動物",
   "里親募集"
  ],
  "description": "愛荘町の建物の2階にある保護猫カフェ。公式ページでは約20匹が在籍と読み取れ、譲渡を前提にした猫たちと過ごせる。気に入った猫がいればスタッフに相談し、面談とトライアルを経て迎えることができる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://www.neco-republic.jp/shop/shiga/ で確認（最新の日記投稿は2025-08）"
 },
 {
  "id": "chiba-cat-neco-republic-chiba-mofmof",
  "name": "ネコリパブリックちば CAFE&CATS MOF MOF",
  "animals": [
   "cat"
  ],
  "prefecture": "千葉県",
  "area": "千葉市緑区・あすみが丘",
  "address": "千葉県千葉市緑区あすみが丘東3-32-3 Nyalcon Max 103",
  "access": "JR外房線 土気駅から徒歩19分（車の場合は駐車場4台）",
  "url": "https://www.neco-republic.jp/shop/chiba-cafecats-mofmof/",
  "price": "平日40分990円（延長10分165円）、土日祝40分1,320円（延長10分220円）、小学生以下の同伴は1人550円引き",
  "price_level": 2,
  "hours": "11:00〜19:00",
  "closed": "月曜・木曜",
  "reservation": "推奨",
  "features": [
   "保護動物",
   "里親募集",
   "子ども可"
  ],
  "description": "千葉市の住宅街にある保護猫カフェ。譲渡をめざす猫たちが在籍し、気に入った猫がいればスタッフとの面談やトライアルを経て迎えられる。入店時は透けない靴下の着用と足裏の消毒が必要。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://www.neco-republic.jp/shop/chiba-cafecats-mofmof/ で確認"
 },
 {
  "id": "nagano-cat-mocha-aeon-matsumoto",
  "name": "猫カフェMOCHA イオンモール松本店",
  "animals": [
   "cat"
  ],
  "prefecture": "長野県",
  "area": "松本市",
  "address": "長野県松本市中央4-9-51 イオンモール松本 空庭1F",
  "access": "最寄り駅はJR松本駅（イオンモール松本内）",
  "url": "https://www.catmocha.jp/shop/matsumoto/",
  "price": "10分297円（平日・税込）、最大3,960円／土日祝・特定日は10分363円、最大4,290円",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入店19:30）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "子ども可",
   "ドリンク込み"
  ],
  "description": "松本市のイオンモール1階にある、全国チェーンの猫カフェ。公式ページでは約24匹が紹介され、10分刻みの時間制で、予約なしで入れる。中学生未満は保護者の同伴が必要。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://www.catmocha.jp/shop/matsumoto/ で確認"
 },
 {
  "id": "ibaraki-cat-mocha-aeon-mito-uchihara",
  "name": "猫カフェMOCHA イオンモール水戸内原店",
  "animals": [
   "cat"
  ],
  "prefecture": "茨城県",
  "area": "水戸市・内原",
  "address": "茨城県水戸市内原2-1 イオンモール水戸内原 3F",
  "access": "JR常磐線 内原駅から徒歩10分",
  "url": "https://www.catmocha.jp/shop/mitouchihara/",
  "price": "10分297円（平日・税込）、最大3,960円／土日祝・特定日は10分363円、最大4,290円",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入店19:30）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "子ども可",
   "ドリンク込み"
  ],
  "description": "水戸市内原のイオンモール3階にある猫カフェで、公式ページでは約21匹が紹介されている。年中無休で予約も不要なので、買い物のついでに寄りやすい。飲み物の持ち込みもできる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://www.catmocha.jp/shop/mitouchihara/ で確認"
 },
 {
  "id": "shizuoka-cat-mocha-aeon-hamamatsu-ichino",
  "name": "猫カフェMOCHA イオンモール浜松市野店",
  "animals": [
   "cat"
  ],
  "prefecture": "静岡県",
  "area": "浜松市・市野",
  "address": "静岡県浜松市中央区天王町字諏訪1981-3 イオンモール浜松市野 1F",
  "access": "イオンモール浜松市野の1階（公式の最寄り駅表記はJR浜松駅）",
  "url": "https://www.catmocha.jp/shop/hamamatsuichino/",
  "price": "10分297円（平日・税込）、最大3,960円／土日祝・特定日は10分363円、最大4,290円",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入店19:30）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "子ども可",
   "ドリンク込み"
  ],
  "description": "浜松市のイオンモール1階にある猫カフェで、公式ページでは約21匹が紹介されている。年中無休・予約不要の時間制で、3歳以上から入れる。家族の買い物の合間にも使いやすい。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://www.catmocha.jp/shop/hamamatsuichino/ で確認"
 },
 {
  "id": "tokushima-cat-mocha-aeon-tokushima",
  "name": "猫カフェMOCHA イオンモール徳島店",
  "animals": [
   "cat"
  ],
  "prefecture": "徳島県",
  "area": "徳島市",
  "address": "徳島県徳島市南末広町4番1号 イオンモール徳島 5F",
  "access": "JR徳島駅が最寄り（イオンモール徳島内）",
  "url": "https://www.catmocha.jp/shop/tokushima/",
  "price": "最初の30分1,045円（平日・税込、ドリンクバー込み）、延長10分220円、最大3,025円／土日祝・特定日は30分1,320円、最大3,520円",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入店19:30）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "子ども可"
  ],
  "description": "徳島市のイオンモール5階にある猫カフェで、公式ページでは約24匹が紹介されている。ドリンクバー込みの料金なので、飲み物を気にせず長く過ごせる。徳島県内では数少ない猫カフェ。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://www.catmocha.jp/shop/tokushima/ で確認"
 },
 {
  "id": "kyoto-cat-noahs-ark-gion",
  "name": "Cat & Animal Cafe Noah's Ark 京都祇園店",
  "animals": [
   "cat",
   "smallanimal",
   "other"
  ],
  "prefecture": "京都府",
  "area": "祇園",
  "address": "京都府京都市東山区祇園町北側323 祇園会館 2階東号室",
  "access": "京阪本線「祇園四条駅」から徒歩5分",
  "url": "https://www.purrcat.co.jp/%E4%BA%AC%E9%83%BD%E7%A5%87%E5%9C%92%E5%BA%97",
  "price": "平日30分1,100円＋10分ごと330円（最大3,080円）、土日祝30分1,320円（最大3,520円）、別途ワンドリンク385円〜",
  "price_level": 3,
  "hours": "10:00〜20:00（最終入店19:30）",
  "closed": "無休",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "複数の動物"
  ],
  "description": "八坂神社の近くにある、約40匹の猫とフェレットのいる店で、ミーアキャットなど珍しい動物にも会える。予約なしでも入れる。京都観光の合間に、猫と変わった動物の両方を楽しみたい人向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://www.purrcat.co.jp/京都祇園店 と料金 https://www.purrcat.co.jp/system で確認。予約不要はトップの記載による"
 },
 {
  "id": "fukuoka-cat-mocha-aeon-chikushino",
  "name": "猫カフェMOCHA イオンモール筑紫野店",
  "animals": [
   "cat"
  ],
  "prefecture": "福岡県",
  "area": "筑紫野市",
  "address": "福岡県筑紫野市立明寺434-1 イオンモール筑紫野2F",
  "access": "JR鹿児島本線 天拝山駅すぐ／西鉄天神大牟田線 朝倉街道駅から徒歩7分",
  "url": "https://www.catmocha.jp/shop/chikushino/",
  "price": "10分297円（平日・税込）、最大3,960円／土日祝・特定日は10分363円、最大4,290円。ドリンクバーあり（別料金の記載なし）",
  "price_level": 2,
  "hours": "10:00〜21:00（最終入店20:30）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "子ども可",
   "写真OK",
   "駅近",
   "ドリンク込み"
  ],
  "description": "福岡県筑紫野市のイオンモール2階にある、全国チェーンの猫カフェ。公式ページでは約19匹の猫が紹介され、10分刻みで入れる。3歳以下は入場無料で、買い物のついでにも家族連れにも使いやすい。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://www.catmocha.jp/shop/chikushino/ で確認／検品⑥（2026-11-07）公式FAQ「お飲み物はドリンクバーをご用意」で、店舗ページの料金表にドリンクバー代の別記が無いため「ドリンク込み」を付けた（別途385円と明記する神戸北・岡山は除く）"
 },
 {
  "id": "miyazaki-cat-mocha-miyazaki-tachibana",
  "name": "猫カフェMOCHA 宮崎橘通店",
  "animals": [
   "cat"
  ],
  "prefecture": "宮崎県",
  "area": "宮崎市・橘通",
  "address": "宮崎県宮崎市橘通西3丁目10番32号 宮崎ナナイロ西館3F",
  "access": "JR宮崎駅から徒歩約10分",
  "url": "https://www.catmocha.jp/shop/miyazaki/",
  "price": "10分297円（平日・税込）、最大3,630円／土日祝・特定日は10分363円、最大3,960円。ドリンクバーあり（別料金の記載なし）",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入店19:30）",
  "closed": "施設の休館日に準ずる",
  "reservation": "不要",
  "features": [
   "子ども可",
   "写真OK",
   "ドリンク込み"
  ],
  "description": "宮崎駅から歩ける商業施設の3階にある猫カフェ。公式ページには約16匹の猫が載っていて、予約なしで10分単位で利用できる。九州の旅行中に短時間だけ猫と過ごしたい人にも合う。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://www.catmocha.jp/shop/miyazaki/ で確認／検品⑥（2026-11-07）公式FAQ「お飲み物はドリンクバーをご用意」で、店舗ページの料金表にドリンクバー代の別記が無いため「ドリンク込み」を付けた（別途385円と明記する神戸北・岡山は除く）"
 },
 {
  "id": "hyogo-cat-mocha-himeji-piole",
  "name": "猫カフェMOCHA ピオレ姫路店",
  "animals": [
   "cat"
  ],
  "prefecture": "兵庫県",
  "area": "姫路駅前",
  "address": "兵庫県姫路市駅前町188-1 ピオレ1 6F",
  "access": "JR姫路駅北口から徒歩1分／山陽電鉄 山陽姫路駅から徒歩2分",
  "url": "https://www.catmocha.jp/shop/himeji/",
  "price": "入場1,045円／最初の30分（平日・税込、ドリンクバー込み）、延長10分220円。土日祝・特定日は1,210円、延長275円",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入店19:30）",
  "closed": "施設の休館日に準ずる",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "駅近",
   "子ども可",
   "写真OK"
  ],
  "description": "姫路駅の北口すぐ、ピオレ姫路6階にある猫カフェで、公式ページで約18匹が紹介されている。ドリンクバー込みの30分制で、6歳から入場できる。城見物の前後に寄りやすい。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://www.catmocha.jp/shop/himeji/ で確認"
 },
 {
  "id": "okayama-cat-mocha-aeon-okayama",
  "name": "猫カフェMOCHA イオンモール岡山店",
  "animals": [
   "cat"
  ],
  "prefecture": "岡山県",
  "area": "岡山駅前",
  "address": "岡山県岡山市北区下石井1丁目2番1号 イオンモール岡山5F",
  "access": "JR岡山駅から徒歩5分",
  "url": "https://www.catmocha.jp/shop/okayama/",
  "price": "10分220円（平日・税込）、最大2,640円／土日祝・特定日は10分275円、最大2,970円。ドリンクバーは別途385円",
  "price_level": 2,
  "hours": "10:00〜21:00（最終入店20:30）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "駅近",
   "子ども可",
   "写真OK"
  ],
  "description": "岡山駅から近いイオンモール5階にある猫カフェ。公式ページで約17匹が紹介され、10分単位の料金にドリンクバーを別につける仕組み。3歳から入場でき、予約は要らない。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://www.catmocha.jp/shop/okayama/ で確認"
 },
 {
  "id": "osaka-cat-mocha-umeda",
  "name": "猫カフェMOCHA 梅田店",
  "animals": [
   "cat"
  ],
  "prefecture": "大阪府",
  "area": "梅田・東梅田",
  "address": "大阪府大阪市北区小松原町1-7 ミスターりんビル2F",
  "access": "地下鉄 東梅田駅1番出口から徒歩2分／阪神 大阪梅田駅東出口から徒歩3分／JR大阪駅から徒歩5分",
  "url": "https://www.catmocha.jp/shop/osakaumeda/",
  "price": "入場1,100円／最初の30分（平日・税込、ドリンクバー込み）、延長10分220円。土日祝・特定日は1,400円、延長220円",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入店19:30）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "駅近",
   "子ども可",
   "写真OK"
  ],
  "description": "梅田の中心部、ビルの2階にある猫カフェ。公式ページに約31匹が載っていて、チェーンの中でも頭数が多いほうだ。30分の入場料にドリンクバーが含まれ、6歳から入れる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://www.catmocha.jp/shop/osakaumeda/ で確認"
 },
 {
  "id": "osaka-cat-mocha-shinsaibashi",
  "name": "猫カフェMOCHA 心斎橋店",
  "animals": [
   "cat"
  ],
  "prefecture": "大阪府",
  "area": "心斎橋",
  "address": "大阪府大阪市中央区東心斎橋1-18-11 リバティ心斎橋ビル1F",
  "access": "御堂筋線 心斎橋駅5号出口から徒歩3分",
  "url": "https://www.catmocha.jp/shop/shinsaibashi/",
  "price": "入場1,188円／最初の30分（平日・税込、ドリンクバー込み）、延長10分220円。土日祝・特定日は1,518円、延長220円",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入店19:30）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "駅近",
   "子ども可",
   "写真OK"
  ],
  "description": "心斎橋の路面1階にある猫カフェ。公式ページに約20匹が載り、ドリンクバーつきの30分制で使える。買い物や観光の合間に立ち寄る人が多い立地だ。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://www.catmocha.jp/shop/shinsaibashi/ で確認"
 },
 {
  "id": "aichi-cat-mocha-aeon-nagoya-noritake",
  "name": "猫カフェMOCHA イオンモール Nagoya Noritake Garden店",
  "animals": [
   "cat"
  ],
  "prefecture": "愛知県",
  "area": "名古屋駅西・則武新町",
  "address": "愛知県名古屋市西区則武新町3-1-17 イオンモールNagoya Noritake Garden 3F",
  "access": "JR名古屋駅 ルーセントアベニューL4出入口から徒歩6分",
  "url": "https://www.catmocha.jp/shop/nagoyanoritake/",
  "price": "10分297円（平日・税込）、最大3,960円／土日祝・特定日は10分363円、最大4,290円。ドリンクバーあり（別料金の記載なし）",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入店19:30）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "子ども可",
   "写真OK",
   "ドリンク込み"
  ],
  "description": "名古屋駅から歩ける大型商業施設の3階にある猫カフェで、公式ページに約20匹が紹介されている。3歳以下は無料で、予約なしで入れる。買い物ついでに寄りやすい。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://www.catmocha.jp/shop/nagoyanoritake/ で確認／検品⑥（2026-11-07）公式FAQ「お飲み物はドリンクバーをご用意」で、店舗ページの料金表にドリンクバー代の別記が無いため「ドリンク込み」を付けた（別途385円と明記する神戸北・岡山は除く）"
 },
 {
  "id": "aichi-cat-mocha-lalaport-nagoya-minato-aqls",
  "name": "猫カフェMOCHA ららぽーと名古屋みなとアクルス店",
  "animals": [
   "cat"
  ],
  "prefecture": "愛知県",
  "area": "名古屋市港区・みなとアクルス",
  "address": "愛知県名古屋市港区港明2-3-2 ららぽーと名古屋みなとアクルス1F",
  "access": "地下鉄名港線 港区役所駅2番出口から徒歩2分／東海通駅3番出口から徒歩3分",
  "url": "https://www.catmocha.jp/shop/nagoyaminato/",
  "price": "10分297円（平日・税込）、最大3,960円／土日祝・特定日は10分363円、最大4,290円。ドリンクバーあり（別料金の記載なし）",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入店19:30）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "駅近",
   "子ども可",
   "写真OK",
   "ドリンク込み"
  ],
  "description": "ららぽーと1階にある猫カフェで、公式ページでは約23匹が紹介されている。10分単位の時間制で、3歳以下は無料。家族でのお出かけの途中にも入りやすい。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://www.catmocha.jp/shop/nagoyaminato/ で確認／検品⑥（2026-11-07）公式FAQ「お飲み物はドリンクバーをご用意」で、店舗ページの料金表にドリンクバー代の別記が無いため「ドリンク込み」を付けた（別途385円と明記する神戸北・岡山は除く）"
 },
 {
  "id": "tokyo-cat-mocha-kichijoji",
  "name": "猫カフェMOCHA 吉祥寺店",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "吉祥寺",
  "address": "東京都武蔵野市吉祥寺本町1-8-3 吉祥寺コスモ5F",
  "access": "JR・京王 吉祥寺駅から徒歩3分",
  "url": "https://www.catmocha.jp/shop/kichijoji/",
  "price": "10分297円（平日・税込）、最大3,960円／土日祝・特定日は10分385円、最大4,620円。ドリンクバーあり（別料金の記載なし）",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入店19:30）",
  "closed": "施設の休館日に準ずる",
  "reservation": "不要",
  "features": [
   "駅近",
   "子ども可",
   "写真OK",
   "ドリンク込み"
  ],
  "description": "吉祥寺駅から歩いてすぐのビル5階にある猫カフェ。公式ページに約25匹が載っていて、3歳から入場できる。散歩や買い物の合間に予約なしで使える。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://www.catmocha.jp/shop/kichijoji/ で確認／検品⑥（2026-11-07）公式FAQ「お飲み物はドリンクバーをご用意」で、店舗ページの料金表にドリンクバー代の別記が無いため「ドリンク込み」を付けた（別途385円と明記する神戸北・岡山は除く）"
 },
 {
  "id": "tokyo-cat-mocha-akihabara",
  "name": "猫カフェMOCHA 秋葉原店",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "秋葉原",
  "address": "東京都千代田区外神田4-4-3 秋葉原SILビル2F",
  "access": "JR秋葉原駅電気街口から徒歩5分",
  "url": "https://www.catmocha.jp/shop/akihabara/",
  "price": "10分330円（平日・税込）、最大3,960円／土日祝・特定日は10分440円、最大4,620円。ドリンクバーあり（別料金の記載なし）",
  "price_level": 2,
  "hours": "10:00〜21:00（最終入店20:30）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "駅近",
   "子ども可",
   "写真OK",
   "ドリンク込み"
  ],
  "description": "秋葉原駅の電気街口から歩ける雑居ビル2階にある猫カフェ。公式ページに約25匹が載っている。夜9時まで開いているので、街歩きのあとにも寄りやすい。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://www.catmocha.jp/shop/akihabara/ で確認／検品⑥（2026-11-07）公式FAQ「お飲み物はドリンクバーをご用意」で、店舗ページの料金表にドリンクバー代の別記が無いため「ドリンク込み」を付けた（別途385円と明記する神戸北・岡山は除く）"
 },
 {
  "id": "fukuoka-cat-coorikuya-kokura",
  "name": "猫喫茶 空陸家 小倉店",
  "animals": [
   "cat"
  ],
  "prefecture": "福岡県",
  "area": "北九州市小倉南区",
  "address": "福岡県北九州市小倉南区葛原東4-3-41",
  "access": "JR日豊本線 下曽根駅から徒歩7分",
  "url": "https://www.coorikuya.com/shop/kokura/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "ペットショップ併設の猫カフェで、北九州市の小倉南区にある。漫画やWi-Fiがそろい、予約なしで使える。ドリンクバー込みの時間制なので、読書をしながら長居したい人にも向く。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/kokura/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載）"
 },
 {
  "id": "kumamoto-cat-coorikuya-carino-kikuyo",
  "name": "猫喫茶 空陸家 カリーノ菊陽店",
  "animals": [
   "cat"
  ],
  "prefecture": "熊本県",
  "area": "菊陽町",
  "address": "熊本県菊池郡菊陽町大字津久礼字廣街道2422番地4 カリーノ菊陽ショッピングセンター1F",
  "access": "JR豊肥本線 三里木駅から徒歩5分",
  "url": "https://www.coorikuya.com/shop/kikuyo/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "ショッピングセンターの1階にあるペットショップ併設の猫カフェ。ウッド調の店内に山型のステップがあり、猫たちが上り下りして遊ぶ。買い物の合間にドリンクを飲みながら過ごせる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/kikuyo/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載）"
 },
 {
  "id": "kumamoto-cat-coorikuya-carino-tamana",
  "name": "猫喫茶 空陸家 カリーノ玉名店",
  "animals": [
   "cat"
  ],
  "prefecture": "熊本県",
  "area": "玉名市",
  "address": "熊本県玉名市亀甲前田110番地 カリーノ玉名1F",
  "access": "JR鹿児島本線 玉名駅から徒歩11分",
  "url": "https://www.coorikuya.com/shop/tamana/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "玉名市のショッピングセンター内にある、和の雰囲気の猫カフェ。ペットショップに併設され、自宅のようにくつろげる造りだという。予約は不要で、車で来る人向けの駐車場もある。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/tamana/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載）"
 },
 {
  "id": "kumamoto-cat-coorikuya-uto-citymall",
  "name": "猫喫茶 空陸家 宇土シティモール店",
  "animals": [
   "cat"
  ],
  "prefecture": "熊本県",
  "area": "宇土市",
  "address": "熊本県宇土市善道寺町綾織95番地 シティモール 1階北棟D区画",
  "access": "JR鹿児島本線 宇土駅から車で6分",
  "url": "https://www.coorikuya.com/shop/utocity/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "宇土市のショッピングモール1階にある、和風の猫カフェ。ペットショップに併設されている。駅からは車で行くのが基本で、モールの駐車場を使う。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/utocity/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載）"
 },
 {
  "id": "hokkaido-cat-coorikuya-hakodate",
  "name": "猫喫茶 空陸家 函館店",
  "animals": [
   "cat"
  ],
  "prefecture": "北海道",
  "area": "函館市",
  "address": "北海道函館市港町1-2-1 ポールスターショッピングセンター1F",
  "access": "五稜郭駅から徒歩11分",
  "url": "https://www.coorikuya.com/shop/hakodate/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "函館市のショッピングセンター1階にある、ペットショップ併設の猫カフェ。ドリンクバー込みの時間制で、猫が好きな人が何時間でも居たくなる居心地を目指している、と公式は紹介している。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/hakodate/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載）"
 },
 {
  "id": "niigata-cat-coorikuya-niigata-higashi",
  "name": "猫喫茶 空陸家 新潟東店",
  "animals": [
   "cat"
  ],
  "prefecture": "新潟県",
  "area": "新潟市東区",
  "address": "新潟県新潟市東区はなみずき3-1-14",
  "access": "JR東新潟駅から車で7分",
  "url": "https://www.coorikuya.com/shop/niigata/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "新潟市東区にある、ペットショップ併設の猫カフェ。市内で猫とゆっくり過ごせる店として案内されている。予約は取らず、来た順に案内される。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/niigata/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載）"
 },
 {
  "id": "osaka-cat-coorikuya-plus-tennoji",
  "name": "猫喫茶 空陸家plus 天王寺店",
  "animals": [
   "cat"
  ],
  "prefecture": "大阪府",
  "area": "天王寺",
  "address": "大阪府大阪市天王寺区悲田院町9-13",
  "access": "JR関西本線 天王寺駅から徒歩1分",
  "url": "https://www.coorikuya.com/shop/tennoji/",
  "price": "30分880円（入場495円＋ドリンクバー385円）、延長10分165円（税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "天王寺駅から徒歩1分の、ブルーを基調にした猫カフェ。公式では約20頭の猫がいるとされ、猫のタイルアートが飾られている。入場料とドリンクバーを分けた料金で、スタッフが常にカフェエリアにいる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/tennoji/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載）"
 },
 {
  "id": "osaka-cat-coorikuya-shinsaibashi",
  "name": "猫喫茶 空陸家 心斎橋店",
  "animals": [
   "cat"
  ],
  "prefecture": "大阪府",
  "area": "心斎橋・南船場",
  "address": "大阪府大阪市中央区南船場3-6-21 西澤ビル1階",
  "access": "御堂筋線 心斎橋駅から徒歩4分",
  "url": "https://www.coorikuya.com/shop/shinsaibashi/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "心斎橋の商店街近くの1階にある、ペットショップ併設の猫カフェ。にぎやかな街の中で、短い時間だけ猫と過ごしたいときに寄りやすい。ドリンクバー込みで、予約は不要。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/shinsaibashi/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載）"
 },
 {
  "id": "hokkaido-cat-puchi-marry-lasora-sapporo",
  "name": "猫カフェ Puchi Marry ラソラ札幌店",
  "animals": [
   "cat"
  ],
  "prefecture": "北海道",
  "area": "札幌市白石区・東札幌",
  "address": "北海道札幌市白石区東札幌三条1-1-1",
  "access": "地下鉄東西線 東札幌駅1番出口から徒歩3分",
  "url": "https://www.puchimarry.com/shop/%E3%83%A9%E3%82%BD%E3%83%A9%E6%9C%AD%E5%B9%8C%E5%BA%97/",
  "price": "30分1,095円（ドリンクバー込み・税込）、延長10分220円。フリータイムは平日2,580円／土日祝2,800円",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入場19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "駅近",
   "子ども可"
  ],
  "description": "札幌の東札幌にある、商業施設内の猫カフェ。時間制のほか、ドリンク飲み放題のフリータイムがあり、猫のごはんタイムは12時と18時だ。電源とWi-Fiが使えるので、長居する人にも向く。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://www.puchimarry.com/shop/%E3%83%A9%E3%82%BD%E3%83%A9%E6%9C%AD%E5%B9%8C%E5%BA%97/ で確認。予約の記載はなく推奨とした"
 },
 {
  "id": "aichi-cat-puchi-marry-nagoya-osu",
  "name": "猫カフェ Puchi Marry 名古屋大須店",
  "animals": [
   "cat"
  ],
  "prefecture": "愛知県",
  "area": "名古屋市中区・大須",
  "address": "愛知県名古屋市中区大須三丁目25番28号 石原ビル2F〜4F",
  "access": "名古屋市営地下鉄 大須観音駅から徒歩3分",
  "url": "https://www.puchimarry.com/shop/%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%A4%A7%E9%A0%88%E5%BA%97/",
  "price": "30分1,095円（ドリンクバー込み・税込）、延長10分220円。平日限定フリータイム（猫のおやつ付き）3,300円",
  "price_level": 2,
  "hours": "11:00〜21:00（最終入場20:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "子ども可"
  ],
  "description": "大須の商店街エリアにある、3フロアにまたがる猫カフェ。猫のごはんタイムは12時と19時。平日限定でおやつつきのフリータイムがあり、散策のあとにゆっくりしたい人に向く。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://www.puchimarry.com/shop/%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%A4%A7%E9%A0%88%E5%BA%97/ で確認。予約の記載はなく推奨とした"
 },
 {
  "id": "ibaraki-cat-puchi-marry-aeon-tsukuba",
  "name": "猫カフェ Puchi Marry イオンモールつくば店",
  "animals": [
   "cat"
  ],
  "prefecture": "茨城県",
  "area": "つくば市",
  "address": "茨城県つくば市稲岡66-1 イオンモールつくば2F",
  "access": "つくばエクスプレスの駅からバスで10分",
  "url": "https://www.puchimarry.com/shop/%E3%82%A4%E3%82%AA%E3%83%B3%E3%83%A2%E3%83%BC%E3%83%AB%E3%81%A4%E3%81%8F%E3%81%B0%E5%BA%97/",
  "price": "30分1,095円（ドリンクバー込み・税込）、延長10分220円。フリータイムは平日2,580円／休日2,800円",
  "price_level": 2,
  "hours": "10:00〜21:00（最終入場20:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "子ども可"
  ],
  "description": "つくば市のイオンモール2階にある猫カフェ。時間制のほか、一日何度でも出入りできるフリータイムがあり、モールでの買い物と組み合わせやすい。ごはんタイムは12時と19時。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://www.puchimarry.com/shop/%E3%82%A4%E3%82%AA%E3%83%B3%E3%83%A2%E3%83%BC%E3%83%AB%E3%81%A4%E3%81%8F%E3%81%B0%E5%BA%97/ で確認。予約の記載はなく推奨とした"
 },
 {
  "id": "toyama-cat-puchi-marry-aeon-takaoka",
  "name": "猫カフェ Puchi Marry イオンモール高岡店",
  "animals": [
   "cat"
  ],
  "prefecture": "富山県",
  "area": "高岡市",
  "address": "富山県高岡市下伏間江383 イオンモール高岡東館1階",
  "access": "JR新高岡駅から徒歩3分",
  "url": "https://www.puchimarry.com/shop/%E3%82%A4%E3%82%AA%E3%83%B3%E3%83%A2%E3%83%BC%E3%83%AB%E9%AB%98%E5%B2%A1%E5%BA%97/",
  "price": "30分1,095円（ドリンクバー込み・税込）、延長10分220円。フリータイムは平日2,580円／休日2,800円",
  "price_level": 2,
  "hours": "10:00〜21:00（最終入場20:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "駅近",
   "子ども可"
  ],
  "description": "新高岡駅から歩けるイオンモール東館1階にある猫カフェ。猫が一列に並んで食べるごはんタイム（12時と19時）が見どころ。新幹線の駅が近いので、旅行中にも立ち寄りやすい。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://www.puchimarry.com/shop/%E3%82%A4%E3%82%AA%E3%83%B3%E3%83%A2%E3%83%BC%E3%83%AB%E9%AB%98%E5%B2%A1%E5%BA%97/ で確認。予約の記載はなく推奨とした"
 },
 {
  "id": "ishikawa-cat-puchi-marry-aeon-kahoku",
  "name": "猫カフェ Puchi Marry イオンモールかほく店",
  "animals": [
   "cat"
  ],
  "prefecture": "石川県",
  "area": "かほく市",
  "address": "石川県かほく市内日角夕25番 イオンモールかほく1階",
  "access": "宇野気駅が最寄り（徒歩時間は公式に記載なし）",
  "url": "https://www.puchimarry.com/shop/%E3%82%A4%E3%82%AA%E3%83%B3%E3%83%A2%E3%83%BC%E3%83%AB%E3%81%8B%E3%81%BB%E3%81%8F%E5%BA%97/",
  "price": "30分1,095円（ドリンクバー込み・税込）、延長10分220円。フリータイムは平日2,580円／土日祝2,800円",
  "price_level": 2,
  "hours": "10:00〜21:00（最終入場20:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "子ども可"
  ],
  "description": "石川県かほく市のイオンモール1階にある猫カフェ。時間制とドリンク飲み放題のフリータイムがあり、ごはんタイムは12時と19時。北陸で気軽に猫と過ごせる店のひとつだ。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://www.puchimarry.com/shop/%E3%82%A4%E3%82%AA%E3%83%B3%E3%83%A2%E3%83%BC%E3%83%AB%E3%81%8B%E3%81%BB%E3%81%8F%E5%BA%97/ で確認。予約の記載はなく推奨とした"
 },
 {
  "id": "miyagi-cat-nonnon-the-mall-sendai-nagamachi",
  "name": "キャットラウンジ nonnon ザ・モール仙台長町店",
  "animals": [
   "cat"
  ],
  "prefecture": "宮城県",
  "area": "仙台市太白区・長町",
  "address": "宮城県仙台市太白区長町7丁目20-3 ザ・モール仙台長町 本館1階",
  "access": "ザ・モール仙台長町の本館1階（駐車場あり）",
  "url": "https://catnonnon.jp/shop/2/",
  "price": "10分220円（平日・税込）、最大2,420円／土日祝・特定日は10分275円、最大2,750円。ドリンクバーは別途418円",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入店19:30）",
  "closed": "施設の定休日に準ずる",
  "reservation": "不要",
  "features": [
   "子ども可"
  ],
  "description": "仙台市長町のショッピングモール内にある猫カフェ。猫を「キャスト」と呼び、それぞれの生年月日や猫種を公式ページで紹介している。10分刻みの料金で、ドリンクバーは別料金。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://catnonnon.jp/shop/2/ で確認（予約は承っていないと公式に記載）"
 },
 {
  "id": "iwate-cat-nonnon-aeon-morioka-minami",
  "name": "キャットラウンジ nonnon 盛岡南店",
  "animals": [
   "cat"
  ],
  "prefecture": "岩手県",
  "area": "盛岡市",
  "address": "岩手県盛岡市本宮7丁目1-1 イオンモール盛岡南 2階 PETEMO盛岡南店内",
  "access": "イオンモール盛岡南の2階（駐車場あり）",
  "url": "https://catnonnon.jp/shop/3/",
  "price": "10分220円（平日・税込）、最大2,420円／土日祝・特定日は10分275円、最大2,750円。ドリンクバーは別途418円",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入店19:30）",
  "closed": "施設の定休日に準ずる",
  "reservation": "不要",
  "features": [
   "子ども可"
  ],
  "description": "盛岡市のイオンモール2階、ペットショップ内にある猫カフェ。時間制で、スマホの充電器やWi-Fiが使える。買い物のあとに猫と過ごしたい人向けだ。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://catnonnon.jp/shop/3/ で確認（予約は承っていないと公式に記載）"
 },
 {
  "id": "fukuoka-cat-cota-nishijin",
  "name": "猫カフェ cota",
  "animals": [
   "cat"
  ],
  "prefecture": "福岡県",
  "area": "西新",
  "address": "福岡県福岡市早良区西新2丁目6番4号 マルエイ西新2階",
  "access": "福岡市地下鉄空港線 西新駅7番出口から徒歩3分",
  "url": "https://neko-cota.com/index_top",
  "price": "昼料金（11:30〜19:00）1時間1,300円（1ドリンク付）、延長10分150円。夜料金（19:00〜20:30）1,200円",
  "price_level": 2,
  "hours": "11:30〜20:30",
  "closed": "木曜日",
  "reservation": "推奨",
  "features": [
   "ドリンク込み",
   "駅近",
   "里親募集"
  ],
  "description": "西新駅から歩いてすぐの、個人経営の猫カフェ。猫は5歳で卒業する決まりがあり、卒業する猫の里親募集を公式サイトで告知している。子ども連れは第1・第3・第5日曜の10:30〜13:40のキッズデーだけ予約できる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://neko-cota.com/index_top で確認（2026-11の里親募集・イベント告知あり）。通常営業日のお子さま連れは予約不可とされている"
 },
 {
  "id": "miyagi-cat-ouchi-ni-oide-sendai",
  "name": "保護猫シェルター おうちにおいで",
  "animals": [
   "cat"
  ],
  "prefecture": "宮城県",
  "area": "仙台駅東口",
  "address": "宮城県仙台市宮城野区榴岡4-12-5 第一さくらビル6F",
  "access": "JR・仙台空港アクセス線 仙台駅東口から徒歩7分",
  "url": "https://www.outinioide.jp/",
  "price": "1時間 平日1,200円／土日祝1,500円（ドリンク付き）、延長30分 平日600円／土日祝750円",
  "price_level": 2,
  "hours": "13:00〜19:00（18:00受付終了）",
  "closed": "月曜日",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "保護動物",
   "里親募集",
   "駅近"
  ],
  "description": "多頭飼育崩壊の現場などから保護された猫たちが暮らす、里親募集型のシェルター。家族を探す人も、飼えないけれど猫と遊びたい人も歓迎している。2026年4月に料金が改定された。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://www.outinioide.jp/ （2026-03-15付の価格改定告知）で確認。予約の記載はなく推奨とした"
 },
 {
  "id": "hokkaido-cat-mewkies-sapporo",
  "name": "猫カフェ ミューキーズ",
  "animals": [
   "cat"
  ],
  "prefecture": "北海道",
  "area": "札幌市東区",
  "address": "北海道札幌市東区北8条東6丁目24",
  "access": "札幌市営地下鉄東豊線 東区役所前駅4番出口から徒歩約6分",
  "url": "https://mewkies.com/",
  "price": "30分600円、延長15分200円（最大 平日2,500円／土日祝3,000円）。90分1,600円（1ドリンク付）",
  "price_level": 2,
  "hours": "11:00（平日は11:45）〜21:00（最終受付19:30）",
  "closed": "ほぼ無休（臨時休業あり。公式トップで告知）",
  "reservation": "不要",
  "features": [
   "駅近"
  ],
  "description": "2013年に開いた、札幌市東区の猫カフェ。滞在時間で後払いする時間制で、長く居るならお得な90分パックもある。予約は取っておらず、時間帯ごとの混み具合を公式ページで見られる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイトの料金システム https://mewkies.com/?page_id=12 、店舗情報 https://mewkies.com/?page_id=25 、予約 https://mewkies.com/?page_id=619 で確認"
 },
 {
  "id": "hokkaido-cat-neko-sun-cafe-sapporo",
  "name": "猫SUNCAFE",
  "animals": [
   "cat"
  ],
  "prefecture": "北海道",
  "area": "札幌市白石区・南郷7丁目",
  "address": "北海道札幌市白石区本郷通8丁目南2-8",
  "access": "地下鉄東西線 南郷7丁目駅3番出口から徒歩5分",
  "url": "https://nyapan.jp/cafe/",
  "price": "30分700円／60分1,400円、延長15分350円。平日限定フリータイム3,500円。ドリンク150円〜",
  "price_level": 2,
  "hours": "12:00〜19:00",
  "closed": "木曜日（譲渡会の開催日は臨時休業）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "駅近"
  ],
  "description": "札幌の本郷通商店街にある保護猫カフェ。時間制の料金で、平日限定のフリータイムもある。予約は不要で、支払いは現金かPayPay、専用駐車場はない。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://nyapan.jp/cafe/ と、料金ページ https://nyapan.jp/cafe/?page_id=6 に掲載されたMENU画像（2025-10掲載）から料金を読み取った。営業時間・定休日・予約は公式トップで確認"
 },
 {
  "id": "kyoto-cat-noahs-ark-kyoto-aquarium-mae",
  "name": "Cat & Animal Cafe Noah's Ark 京都水族館前店",
  "animals": [
   "cat",
   "smallanimal"
  ],
  "prefecture": "京都府",
  "area": "京都駅西・梅小路",
  "address": "京都府京都市下京区上之町416番2 HOTEL SUN CHLORELLA 1F",
  "access": "京都水族館・梅小路公園から徒歩2分",
  "url": "https://www.purrcat.co.jp/%E4%BA%AC%E9%83%BD%E6%B0%B4%E6%97%8F%E9%A4%A8%E5%89%8D%E5%BA%97",
  "price": "平日30分1,100円＋10分ごと330円（最大3,080円）、土日祝30分1,320円＋10分ごと385円（最大3,520円）、別途ワンドリンク385円〜",
  "price_level": 3,
  "hours": "10:00〜18:30（最終入店18:00）",
  "closed": "定休日なし",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "複数の動物"
  ],
  "description": "京都水族館と梅小路公園の近くにある、約20匹の猫とフェレットがいる動物カフェ。祇園店より落ち着いた雰囲気で、観光の合間にゆっくり過ごせる。サラダなどのフードは2026年1月から休止中で、再開は未定。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://www.purrcat.co.jp/%E4%BA%AC%E9%83%BD%E6%B0%B4%E6%97%8F%E9%A4%A8%E5%89%8D%E5%BA%97 と料金 https://www.purrcat.co.jp/system で確認。予約なしでも利用可と公式トップに記載"
 },
 {
  "id": "hokkaido-cat-cat-cafe-prince",
  "name": "cat cafe Prince",
  "animals": [
   "cat"
  ],
  "prefecture": "北海道",
  "area": "函館",
  "address": "北海道函館市堀川町30-13",
  "access": "公式ページに記載なし（来店前に確認を）。駐車場あり",
  "url": "https://www.catcafeprince.com/",
  "price": "30分600円／60分1,000円〜（税表記なし）",
  "price_level": 1,
  "hours": "13:00〜19:00（最終受付18:00）",
  "closed": "営業日は土曜・日曜と、祝日の月曜のみ（それ以外は休み）",
  "reservation": "必須",
  "features": [
   "予約制"
  ],
  "description": "函館市の堀川町にある、定員5名ほどの小さな猫カフェだ。完全予約制（当日予約も可）で、猫スタッフ一匹ずつの紹介がサイトに載っている。カフェエリアは無くフタ付きの飲み物だけ持ち込め、入店は小学生以上から。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://www.catcafeprince.com/ のトップで料金・営業日・予約制・住所を確認。最寄駅は記載なし"
 },
 {
  "id": "iwate-cat-dream-cat-house-shinmeicho",
  "name": "ドリームキャットハウス神明町 猫ふれあいルーム",
  "animals": [
   "cat"
  ],
  "prefecture": "岩手県",
  "area": "盛岡",
  "address": "岩手県盛岡市神明町1-11（2階）",
  "access": "公式ページに記載なし（来店前に確認を）",
  "url": "https://dreamcathouse.jp/",
  "price": "30分800円／60分1,200円（小学生以下は半額）",
  "price_level": 2,
  "hours": "11:00〜17:00（最終入場16:30）",
  "closed": "日曜",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "子ども可"
  ],
  "description": "盛岡市の神明町にある、2階が猫ふれあいルームで1階がカフェレストランの複合店だ。障害のある人の就労支援事業所が運営し、保護猫と遊んだりくつろいだりできる。譲渡対象の猫は里親として迎えることもできる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://dreamcathouse.jp/ で料金・営業時間・住所を確認（ブログ最終更新 2026-10-30）。予約の案内は記載なし"
 },
 {
  "id": "fukushima-cat-nekohige",
  "name": "猫カフェ ねこひげ（フクロウがいる猫カフェ）",
  "animals": [
   "cat",
   "owl"
  ],
  "prefecture": "福島県",
  "area": "郡山",
  "address": "福島県郡山市喜久田町前田沢字中赤津22",
  "access": "郡山駅から車で約25分（本宮ICから車で8分。駐車場あり）",
  "url": "https://nekohige-catcafe.jimdofree.com/",
  "price": "大人30分600円／60分1,100円（1ドリンク付）／120分1,600円、小学生まで60分800円",
  "price_level": 2,
  "hours": "火水木11:00〜16:00／土日11:00〜17:00（最終入店は16時）",
  "closed": "月曜・金曜（祝日は営業。月曜が祝日なら翌日休み）",
  "reservation": "不要",
  "features": [
   "複数の動物",
   "子ども可",
   "ドリンク込み"
  ],
  "description": "郡山市郊外にある、猫のほかにフクロウの部屋も備えた猫カフェだ。猫の部屋とフクロウの部屋が分かれていて、子どもは保護者同伴で入室できる。1時間からはドリンクバーが付く料金設定である。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト料金表 https://nekohige-catcafe.jimdofree.com/料金表/ と店舗情報で確認。猫・フクロウの頭数、予約の案内は記載なし。フクロウは追加料金の記載なし"
 },
 {
  "id": "fukushima-cat-love-lab",
  "name": "保護猫カフェ love.lab（ラブラブ）",
  "animals": [
   "cat"
  ],
  "prefecture": "福島県",
  "area": "郡山",
  "address": "福島県郡山市静町1-28 根本ビル102",
  "access": "公式ページに記載なし（来店前に確認を）。駐車場あり",
  "url": "https://www.love-lab.jp/",
  "price": "30分600円／60分1,200円（中学生以下は500円／1,000円、3歳以下無料）。ドリンクは別（任意）",
  "price_level": 2,
  "hours": "13:00〜18:00（最終受付17:30）",
  "closed": "木曜",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "子ども可"
  ],
  "description": "郡山市の中心部にある、NPO法人運営の保護猫カフェだ。保護猫出身の猫たちと遊ぶ料金は、猫の医療費など保護活動費に回される。ドリンクは注文しなくても利用でき、入店でポストカードがもらえる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://www.love-lab.jp/ のトップで料金・営業時間・住所を確認。予約の案内は記載なし（キャンセル連絡先のみ記載）"
 },
 {
  "id": "gunma-cat-totonou-nekocafe-bania",
  "name": "ととのう猫カフェバーニャ",
  "animals": [
   "cat"
  ],
  "prefecture": "群馬県",
  "area": "高崎",
  "address": "群馬県高崎市上並榎町595-12 オオサキビル1F",
  "access": "公式ページに記載なし（来店前に確認を）",
  "url": "https://nekosauna.com/",
  "price": "平日30分1,300円／1時間2,200円／2時間2,500円／フリータイム2,900円（いずれも1ドリンク付）",
  "price_level": 3,
  "hours": "11:00〜17:00（最終入場16:30。2026-08-01から時間変更）",
  "closed": "年中無休（猫の体調により臨時休業あり）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "ドリンク込み",
   "時間無制限プランあり"
  ],
  "description": "高崎市唯一をうたう譲渡型の保護猫カフェで、看板猫と譲渡対象の猫がいる。予約なしで入れるが満室時は待つことになり、遠方からならじゃらん経由の予約もできる。12歳以下の入場は不可で、小学生は土日祝などの指定日に保護者同伴で入れる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://nekosauna.com/ と料金表 https://nekosauna.com/pg61.html（料金は公式画像の表を読み取り）で確認。画像の掲載は2025-03、営業時間は2026-08-01の変更告知に従った。最寄駅は記載なし"
 },
 {
  "id": "tochigi-cat-therapy-cafe-popo-utsunomiya",
  "name": "セラピーカフェPoPo 宇都宮店",
  "animals": [
   "cat"
  ],
  "prefecture": "栃木県",
  "area": "宇都宮",
  "address": "栃木県宇都宮市北若松原1-1-11",
  "access": "公式ページに記載なし（来店前に確認を）",
  "url": "https://therapycafepopo.wixsite.com/my-site",
  "price": "30分800円／1時間1,500円／2時間3,000円（各1オーダー別途）、土日祝は+300円、平日限定フリータイム4,500円",
  "price_level": 2,
  "hours": "11:00〜19:00（最終受付18:00）",
  "closed": "木曜",
  "reservation": "推奨",
  "features": [
   "子ども可"
  ],
  "description": "猫アレルギーが出にくいとされる、サイベリアン専門をうたう珍しい猫カフェだ。一軒家に全5部屋の個室があり、猫を独り占めするように過ごせる。無理に抱っこしないなど注意事項が多く、初回は猫アレルギーの有無を確認される。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://therapycafepopo.wixsite.com/my-site のトップと、料金は公式サイトの料金画像（猫とのふれあいMenu）で確認。予約は『予約優先（電話・公式LINE）』の記載。3歳まで無料・小学生まで半額"
 },
 {
  "id": "toyama-cat-nekonoshippo",
  "name": "ネコのしっぽ",
  "animals": [
   "cat"
  ],
  "prefecture": "富山県",
  "area": "高岡",
  "address": "富山県高岡市大坪町2-3-2",
  "access": "高岡駅から車で10分、万葉線広小路電停から徒歩10分",
  "url": "https://nekono-sippo.jp/",
  "price": "平日60分1,300円／土日祝1,400円（ワンドリンク付）、小学生まで1,000円。延長10分200円",
  "price_level": 2,
  "hours": "平日11:00〜18:00／土日祝10:00〜18:00（最終受付17:30）",
  "closed": "月曜・火曜（祝日は営業）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "子ども可",
   "ドリンク込み"
  ],
  "description": "高岡市で店主が1人で運営している、譲渡型の保護ネコカフェだ。約25匹の猫を保護していて、触れ合い方を丁寧に伝えることを大事にしている。土日は混むため、事前に電話すると空き状況を教えてもらえる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://nekono-sippo.jp/ のトップ（料金と注意事項）で確認。予約は不要で、土日は事前電話が望ましい旨の記載"
 },
 {
  "id": "toyama-cat-tsukineko-cafe",
  "name": "月猫カフェ",
  "animals": [
   "cat"
  ],
  "prefecture": "富山県",
  "area": "富山",
  "address": "富山県富山市中布目20",
  "access": "公式ページに記載なし（来店前に確認を）。駐車場あり",
  "url": "https://tsukineko.jp/",
  "price": "60分1,500円／120分2,100円／180分2,800円（いずれも1ドリンク付）、以降30分ごとに500円",
  "price_level": 2,
  "hours": "11:00〜18:00（16:45までに入店）",
  "closed": "土日のみ営業（月により変更あり。営業予定は公式のお知らせで告知）",
  "reservation": "推奨",
  "features": [
   "保護動物",
   "里親募集",
   "ドリンク込み"
  ],
  "description": "富山市にある、里親さんを募集している譲渡型の保護猫カフェだ。時間料金制で、利用は中学生から。月ごとの営業予定は公式サイトのお知らせで告知される。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト ご利用案内 https://tsukineko.jp/price/ で確認。営業日は同ページ（土日）と上部表記（金土日）が食い違うため要確認。予約は『ご予約優先（電話）』の記載"
 },
 {
  "id": "toyama-cat-naon",
  "name": "保護猫＆豆柴カフェ 凪音（naon）",
  "animals": [
   "cat",
   "dog"
  ],
  "prefecture": "富山県",
  "area": "氷見",
  "address": "富山県氷見市脇方172",
  "access": "公式ページに記載なし（来店前に確認を）。駐車場あり",
  "url": "https://www.naon-cat-dog.com/",
  "price": "大人30分1,000円／60分1,500円（1ドリンク付）、小学生以下30分800円／60分1,200円。延長30分700円",
  "price_level": 2,
  "hours": "平日11:00〜19:00／土日祝11:00〜20:00",
  "closed": "月曜・木曜",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ドリンク込み",
   "子ども可"
  ],
  "description": "氷見市の灘浦地区にある、保護猫と豆柴の両方に会える店だ。猫と犬の部屋で遊んだあと、別室のカフェで食事ができ、ランチや地元の海の幸を使った料理が売りである。時間の声かけはなく、自動延長になる点に注意が要る。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト料金&メニュー https://www.naon-cat-dog.com/information と店舗案内で確認。予約・最寄駅の記載なし。猫と犬の頭数は記載なし"
 },
 {
  "id": "fukui-cat-shiawase-nyanke",
  "name": "譲渡型保護猫カフェ しあわせにゃん家",
  "animals": [
   "cat"
  ],
  "prefecture": "福井県",
  "area": "福井",
  "address": "福井県福井市栄町1-3-1（2階）",
  "access": "JR森田駅から徒歩2分（駐車場あり。来店前に公式で確認を）",
  "url": "http://shianyan.com/",
  "price": "大人30分850円／1時間1,550円／フリーコース1,900円（飲み物付）、小学生以下は1時間1,150円など",
  "price_level": 2,
  "hours": "10:00〜17:15（最終受付16:45）",
  "closed": "不定休（営業カレンダーで告知）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "時間無制限プランあり",
   "子ども可"
  ],
  "description": "福井市にあるNPO法人運営の譲渡型保護猫カフェで、座席は25席ある。靴下の着用が必須（持たない場合は店で購入可）で、2歳未満は無料。営業カレンダーで休業日と時短営業日が告知される。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト料金 http://shianyan.com/free/system とアクセス http://shianyan.com/about で確認。営業カレンダー http://shianyan.com/calendar に2026-11-05の休業日の掲載あり。予約の案内は記載なし"
 },
 {
  "id": "fukui-cat-cat-village",
  "name": "cat village（キャットヴィレッヂ）",
  "animals": [
   "cat"
  ],
  "prefecture": "福井県",
  "area": "勝山",
  "address": "福井県勝山市村岡町浄土寺38-12",
  "access": "勝山温泉センター水芭蕉の近く（バス「水芭蕉入口」下車すぐ。駐車場あり）",
  "url": "https://catvillage.catfood.jp/",
  "price": "60分1,200円（追加は5分100円）。子どもも同料金でおやつ付",
  "price_level": 2,
  "hours": "水・木・金12:00〜18:00／土・日10:00〜18:00（受付は16:30まで）",
  "closed": "月曜・火曜",
  "reservation": "推奨",
  "features": [
   "里親募集",
   "子ども可"
  ],
  "description": "福井県勝山市にある、田舎の村のような雰囲気の猫カフェだ。料金は時間制で、行儀のよい人は時間制限なしで過ごせるという独特のルールがある。里親希望者向けに、1泊2日の里親体験（有料・事前予約）も用意している。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://catvillage.catfood.jp/ のトップで料金・営業時間・予約推奨を確認。臨時休業はHP・ブログ・Instagramで告知される"
 },
 {
  "id": "kagawa-cat-morinoneko-patos-cafe",
  "name": "森の猫 Pato'sCafe",
  "animals": [
   "cat"
  ],
  "prefecture": "香川県",
  "area": "高松",
  "address": "香川県高松市木太町5023-3",
  "access": "公式ページに記載なし（来店前に確認を）。駐車場あり（台数に限りあり）",
  "url": "https://www.patos-neko.com/",
  "price": "60分平日1,150円／土日祝1,350円、10分延長150円",
  "price_level": 2,
  "hours": "平日11:30〜18:00（最終受付17:00）／土日祝11:00〜19:00（最終受付18:00）",
  "closed": "月曜（祝日は営業。店舗概要では不定休の表記もあり）",
  "reservation": "推奨",
  "features": [],
  "description": "ほとんどがノルウェージャンフォレストキャットという、長毛猫ばかりの猫カフェだ。檜のキャットウォークがある吹き抜けの店内で、猫たちが上下に追いかけっこをする。ブリーダー兼業の店で、子猫の販売も同じ敷地内で行われるが、カフェ利用は別料金で入れる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト システム・店舗概要 https://www.patos-neko.com/cafe/about/ ・ /info/overview/ で確認。予約は『予約制ではないが、予約か来店前の電話を推奨』の記載。未就学児は入場不可。第一種動物取扱業（展示・販売）の登録あり"
 },
 {
  "id": "ehime-cat-cat-cafe-ronron",
  "name": "猫カフェ RonRon（ロンロン）",
  "animals": [
   "cat"
  ],
  "prefecture": "愛媛県",
  "area": "松山",
  "address": "愛媛県松山市大街道1-5-9 双葉屋ビル2階",
  "access": "大街道シネマサンシャイン隣のビル2階（最寄駅は公式に記載なし）",
  "url": "https://nekocaferonron.wixsite.com/ronron",
  "price": "60分1,000円（1ドリンク付）／90分1,300円／120分1,600円／180分2,000円（高校生以下は割安）",
  "price_level": 1,
  "hours": "平日12:00〜22:00／土日祝11:00〜22:00",
  "closed": "無休",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "子ども可",
   "時間無制限プランあり"
  ],
  "description": "松山の繁華街・大街道にある猫カフェで、夜22時まで営業している。60分から180分まで料金が段階的に決まっていて、長く居るほど割安になる。ポイントカードで割引も受けられる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト ご利用料金 https://nekocaferonron.wixsite.com/ronron/ryoukin とトップで確認。猫の頭数・予約の案内は記載なし。180分以降の固定料金表記は読み取りが曖昧なため省略"
 },
 {
  "id": "wakayama-cat-kimamana-miiko",
  "name": "猫・夢空間 気ままなみーこ",
  "animals": [
   "cat"
  ],
  "prefecture": "和歌山県",
  "area": "和歌山",
  "address": "和歌山県和歌山市湊1-4-26",
  "access": "ガーデンパークメッサの交差点から約500m（駐車場あり。最寄駅の記載なし）",
  "url": "https://www.kimamana-miiko.jp/",
  "price": "アイアイコース60分1,300円（ドリンクか猫おやつ付）／ミニカフェコース30分660円（ドリンクなし）",
  "price_level": 2,
  "hours": "平日11:00〜16:00／土日祝11:00〜18:00",
  "closed": "火曜・第1水曜",
  "reservation": "不要",
  "features": [
   "里親募集",
   "写真OK"
  ],
  "description": "和歌山市の湊にある猫カフェで、室内と外の庭を猫が自由に行き来できる。実家が老舗和菓子店という店主が、猫の判子入りの和菓子などを出す。自分の飼い猫を連れて来てもよいという珍しい決まりがある。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://www.kimamana-miiko.jp/cafe/ と店舗概要 https://www.kimamana-miiko.jp/info/ で確認。予約の案内・最寄駅の記載なし"
 },
 {
  "id": "shiga-cat-kururi-cafe",
  "name": "Kururi Cafe∞（ふれあいroom）",
  "animals": [
   "cat"
  ],
  "prefecture": "滋賀県",
  "area": "近江八幡",
  "address": "滋賀県近江八幡市牧町728",
  "access": "公式ページに記載なし（来店前に確認を）。向かいに駐車場4台",
  "url": "https://kururi222.com/kururicafe/",
  "price": "30分1,000円／60分1,500円／90分2,000円（いずれもフリードリンク・お菓子付）",
  "price_level": 2,
  "hours": "10:00〜18:00",
  "closed": "不定休",
  "reservation": "必須",
  "features": [
   "予約制",
   "保護動物",
   "里親募集",
   "ドリンク込み"
  ],
  "description": "近江八幡市にある、保護された猫と触れ合える予約制の猫カフェだ。定員は6名で、猫たちは人に慣れる練習をしながら新しい家族を待っている。料金は猫の医療費や食費に使われ、希望すれば譲渡の相談もできる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://kururi222.com/kururicafe/ で料金・営業時間・完全予約制・定員を確認。最寄駅の記載なし"
 },
 {
  "id": "shiga-cat-lily-blanc-cat-space",
  "name": "Lily Blanc（リリーブラン）猫カフェ Catspace",
  "animals": [
   "cat"
  ],
  "prefecture": "滋賀県",
  "area": "彦根",
  "address": "滋賀県彦根市馬場2-4-25",
  "access": "公式ページに記載なし（来店前に確認を）",
  "url": "https://lilyblanc-catspace.com/",
  "price": "平日入場30分400円／土日祝30分500円、延長10分200円、ワンドリンク300円〜",
  "price_level": 2,
  "hours": "11:00〜20:00（最終入店18:30）",
  "closed": "不定休（公式の休業日カレンダーで告知）",
  "reservation": "推奨",
  "features": [],
  "description": "彦根市にある、猫カフェと猫の販売を同じ店で営むペットショップ併設の店だ。入場料は30分単位で、ドリンクは別料金になる。サイベリアンやブリティッシュなどの猫がいると、お知らせで紹介されている。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト Catspace 利用案内 https://lilyblanc-catspace.com/catspace/ と トップで確認。ペットショップ併設（猫販売あり）のため、掲載可否はリーダー判断。平日30分400円は入場料のみでドリンク別。予約の案内は記載なし"
 },
 {
  "id": "niigata-cat-nekomachi",
  "name": "里親募集型 ほご猫カフェ ねこまち",
  "animals": [
   "cat"
  ],
  "prefecture": "新潟県",
  "area": "見附",
  "address": "新潟県見附市今町5-27-2 2階",
  "access": "公式ページに記載なし（来店前に確認を）。店向かいに無料駐車場3台",
  "url": "https://nekomachi.crayonsite.info/",
  "price": "60分1,000円／90分1,500円／フリータイム2,000円",
  "price_level": 1,
  "hours": "平日12:00〜17:00／土日祝11:00〜17:00（最終受付16:00）",
  "closed": "不定休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集"
  ],
  "description": "見附市の今町にある、保護猫を里親に譲渡する里親募集型の猫カフェだ。来店するだけでも猫の助けになるという考えで運営されている。怖がりな猫もいるため、子どもの遊び場には向かないと公式に断っている。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://nekomachi.crayonsite.info/ のトップ（基本情報・利用料）で確認。予約の案内は記載なし"
 },
 {
  "id": "niigata-cat-aoneko",
  "name": "譲渡型保護猫Cafe あおねこ",
  "animals": [
   "cat"
  ],
  "prefecture": "新潟県",
  "area": "田上町",
  "address": "新潟県南蒲原郡田上町大字川船河甲771-3",
  "access": "公式ページに記載なし（来店前に確認を）",
  "url": "https://aoneko-cafe222.crayonsite.info/",
  "price": "一般（中学生以上）30分800円（300円のワンドリンク付）、小学生以下600円。延長30分500円",
  "price_level": 2,
  "hours": "10:00〜18:00",
  "closed": "不定休（月初に公式HP・SNSで告知）",
  "reservation": "推奨",
  "features": [
   "保護動物",
   "里親募集",
   "ドリンク込み",
   "貸切可"
  ],
  "description": "新潟県田上町にある保護猫カフェで、料金は猫たちの保護活動に使われる。予約優先で、少人数の貸切（平日30分3,200円〜）も受け付けている。小学生以下は保護者同伴が条件だ。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://aoneko-cafe222.crayonsite.info/ と料金表 /p/2/ で確認。予約は『ご予約優先』の記載。最寄駅の記載なし"
 },
 {
  "id": "niigata-cat-rakkuraya",
  "name": "共生提案型保護猫カフェ らっくら家",
  "animals": [
   "cat"
  ],
  "prefecture": "新潟県",
  "area": "三条",
  "address": "新潟県三条市居島4-19",
  "access": "JR北三条駅から徒歩7分（専用駐車場なし）",
  "url": "https://rakkuraya.amebaownd.com/",
  "price": "大人60分1,200円（6回分6,000円の回数券あり）。貸切は平日60分5,000円〜",
  "price_level": 2,
  "hours": "公式の営業カレンダーに掲載（公式ページに時間の記載なし。来店前に確認を）",
  "closed": "営業カレンダーの通り（猫の通院などで臨時休業あり）",
  "reservation": "推奨",
  "features": [
   "保護動物",
   "里親募集",
   "貸切可"
  ],
  "description": "三条市の飲食店街の一角にある、猫との共生を提案する保護猫カフェだ。昼営業のほかに夜カフェも設けていて、回数券や貸切のプランがある。譲渡を希望する場合は、営業時間外に予約して相談する決まりだ。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト料金・システム https://rakkuraya.amebaownd.com/pages/5585720/static（2026-05-18現在）と トップで確認。営業時間の数字は公式ページに無く、営業カレンダー参照。じゃらん予約の案内あり"
 },
 {
  "id": "shizuoka-cat-nekocafe-irori",
  "name": "猫カフェいろり",
  "animals": [
   "cat"
  ],
  "prefecture": "静岡県",
  "area": "藤枝",
  "address": "静岡県藤枝市駅前2-8-10 富山ビル1階",
  "access": "JR藤枝駅北口から徒歩約3分（専用駐車場なし）",
  "url": "https://www.catcafe-irori.com/",
  "price": "平日30分900円（フリードリンク付）、最大1.5時間1,900円まで。土日祝30分1,000円",
  "price_level": 2,
  "hours": "12:00〜22:00（公式表記は12:00 am〜10:00 pm）",
  "closed": "火曜",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "里親募集",
   "子ども可",
   "時間無制限プランあり"
  ],
  "description": "藤枝駅前のビルの1階にある猫カフェで、夜10時まで営業している。入店料にフリードリンクが付き、平日は1.5時間分で料金が頭打ちになる。1歳未満の子どもは無料で、公式SNSをフォローして投稿すると100円引きになる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト 料金 https://www.catcafe-irori.com/price.html とトップで確認。営業時間の午前・午後表記は公式のまま。予約の案内は記載なし。2025-12の価格改定告知が出ている"
 },
 {
  "id": "shizuoka-cat-adagio",
  "name": "猫がいるカフェ Adagio（アダージョ）",
  "animals": [
   "cat"
  ],
  "prefecture": "静岡県",
  "area": "浜松",
  "address": "静岡県浜松市中央区西伊場町47-17",
  "access": "浜松駅からバスでのアクセス案内が公式にある。駐車場8台",
  "url": "https://adagio22.com/",
  "price": "最初の30分650円、以降10分ごとに100円（ドリンクは任意注文）",
  "price_level": 1,
  "hours": "11:00〜21:00（最終受付20:00）",
  "closed": "木曜（祝日の場合は営業し翌日休み）",
  "reservation": "不要",
  "features": [
   "子ども可"
  ],
  "description": "浜松で最初に開いた猫カフェで、一軒家で猫とのんびり過ごせる。予約なしでも入れるが、予約すれば待たずに案内してもらえる。初心者向けの猫カフェ教室や、ほぼ毎月の猫雑貨の値引きなど、イベントが多いのも特徴だ。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト 猫カフェ情報 https://adagio22.com/index.php?NekoCafe（料金・予約）と 店舗情報 ?ShopInfo で確認。6歳以下・7〜9歳の子ども料金あり"
 },
 {
  "id": "shizuoka-cat-izu-nyaon",
  "name": "伊豆高原ねこカフェ にゃおん",
  "animals": [
   "cat"
  ],
  "prefecture": "静岡県",
  "area": "伊豆高原",
  "address": "静岡県伊東市八幡野1132-8",
  "access": "伊豆急行 伊豆高原駅から徒歩約10分",
  "url": "https://izu-nyaon.com/index.html",
  "price": "大人60分1,300円（ワンドリンク付）、中高生1,000円、小学生以下900円。延長10分100円",
  "price_level": 2,
  "hours": "平日12:00〜20:00／土日祝11:00〜20:00（最終入店19:00）",
  "closed": "水曜・木曜（第3水曜は営業）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "子ども可"
  ],
  "description": "伊豆半島で最初の本格的な猫カフェをうたう店で、約30匹の猫スタッフがいる。飼えなくなった猫や野良猫、捨てられた猫が多く、人懐こい子ばかりだという。1歳まで無料で、公式サイト提示で10%引き、スタンプ10個で1人分無料になる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://izu-nyaon.com/index.html のトップで料金・営業時間・住所（動物取扱業表示）を確認。予約の案内は記載なし"
 },
 {
  "id": "mie-cat-matatabian",
  "name": "湯の山 保護猫かふぇ またたび庵",
  "animals": [
   "cat"
  ],
  "prefecture": "三重県",
  "area": "菰野",
  "address": "三重県三重郡菰野町菰野8475-75",
  "access": "湯の山街道沿い。駐車場あり（公式のアクセス記載による）",
  "url": "https://mie-matatabian.sakura.ne.jp/",
  "price": "30分700円／60分1,200円（小学生以下・シニア500円／1,000円）。60分以降30分ごとに+400円",
  "price_level": 2,
  "hours": "10〜3月 11:00〜16:30（最終受付16:00）／4〜9月 11:00〜17:30（最終受付17:00）",
  "closed": "火曜・水曜（祝日は営業）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "子ども可",
   "ドリンク込み"
  ],
  "description": "自然に囲まれた湯の山街道沿いにある、里親募集型の保護猫カフェだ。地域猫活動やTNRの過程で保護された子猫や成猫がいて、トイレのしつけや人慣れが済んでいる。毎日通えるサポーターズパスポート（15,000円）も用意している。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://mie-matatabian.sakura.ne.jp/ のトップで料金・営業日・住所を確認。予約の案内は記載なし"
 },
 {
  "id": "mie-cat-hogoneko-cafe-285",
  "name": "保護猫カフェ285（ニヤゴ）",
  "animals": [
   "cat"
  ],
  "prefecture": "三重県",
  "area": "津",
  "address": "三重県津市島崎町285",
  "access": "公式ページに記載なし（来店前に確認を）（1階にCAFE 285を併設）",
  "url": "https://neco.285.co.jp/",
  "price": "30分700円／1時間1,100円（いずれも1ドリンクオーダー別）、延長30分550円。フリータイム3,850円（+1ドリンク）",
  "price_level": 2,
  "hours": "平日11:30〜17:00（最終入店16:30）／土日祝11:30〜18:00（最終入店17:30）",
  "closed": "火曜・木曜",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "時間無制限プランあり"
  ],
  "description": "津市で2018年に開いた保護猫カフェで、1階が本格コーヒーのカフェ、2階が猫のフロアだ。金曜限定で、猫30分と1階の食事を組み合わせた1,650円のプランがある。未就学児は水曜のみ入場できる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト ご利用料金 https://neco.285.co.jp/price.html とトップで確認。電話予約は可能だが必須の記載はなし（不要とした）。ドリンクはオーダー制（コーヒー550円〜）"
 },
 {
  "id": "mie-cat-nekocafe-enjoy",
  "name": "猫カフェ ENJOY（エンジョイ）",
  "animals": [
   "cat"
  ],
  "prefecture": "三重県",
  "area": "津",
  "address": "三重県津市高茶屋小森町2874-3",
  "access": "公式ページに記載なし（来店前に確認を）。ボディケア・フィットネス施設内",
  "url": "http://enjoyshibagym.com/neko-cafe/",
  "price": "一般1,100円／学生・幼児800円（公式では期間限定の時間無制限料金。通常料金の記載なし）",
  "price_level": 2,
  "hours": "12:00〜22:00",
  "closed": "日曜・祝日",
  "reservation": "不要",
  "features": [
   "子ども可"
  ],
  "description": "津市の整体・フィットネス施設「ENJOY」に併設された猫カフェだ。公式の案内では期間限定で、営業時間内なら何時間いても同じ料金になる。飲食の提供はなく、小学生以下は保護者同伴が条件である。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://enjoyshibagym.com/neko-cafe/ で確認。同ページ下部の施設全体の営業時間（11:30〜24:00）は別施設のもので、猫カフェの12:00〜22:00を採用。『期間限定』の終了時期は記載なし。猫の頭数は記載なし"
 },
 {
  "id": "gifu-cat-nekocafe-lounge-kitto",
  "name": "猫カフェラウンジKitto",
  "animals": [
   "cat"
  ],
  "prefecture": "岐阜県",
  "area": "岐阜",
  "address": "岐阜県岐阜市野一色5-7-11 1F",
  "access": "公式ページに記載なし（来店前に確認を）",
  "url": "https://kitto.m-evolution.com/",
  "price": "30分880円（以降15分ごとに330円）、平日限定フリータイム3,300円",
  "price_level": 2,
  "hours": "12:00〜18:00",
  "closed": "水曜・木曜（変更あり、SNSで告知）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "時間無制限プランあり"
  ],
  "description": "岐阜市にある、保護猫とのふれあいと譲渡を行う猫カフェだ。公式の在舎データには、ラグドールやラガマフィン、マンチカンなど血統のある猫の保護個体が並ぶ。靴下の着用が必須で、スリッパは用意がない。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://kitto.m-evolution.com/ のトップで料金・営業時間・住所を確認。予約の案内は記載なし。猫の頭数は公式の在舎データ参照"
 },
 {
  "id": "gifu-cat-nekohouse-kuu",
  "name": "ねこハウス 空",
  "animals": [
   "cat"
  ],
  "prefecture": "岐阜県",
  "area": "可児",
  "address": "岐阜県可児市若葉台2-6",
  "access": "公式ページに記載なし（来店前に確認を）",
  "url": "https://nekohouse-kuu.amebaownd.com/",
  "price": "カフェ利用 大人800円／小学生未満600円（ドリンクとバームクーヘン・お菓子付）。時間制限なし",
  "price_level": 1,
  "hours": "11:00〜17:30",
  "closed": "基本の営業日は月・木・土日祝（それ以外は休み。カレンダーで告知）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "ドリンク込み",
   "時間無制限プランあり"
  ],
  "description": "可児市にあるボランティア運営の猫カフェで、カフェと猫部屋が別々になっている。カフェからガラス越しに猫を見られるため、猫アレルギーの人でも楽しめる作りだ。ふれあいには猫部屋の心得を読む必要があり、利用後の寄付が保護活動に使われる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://nekohouse-kuu.amebaownd.com/ と お店のご利用について（/pages/6817361/page_202302261213）で確認。2026-04から月・木・土日祝を基本の営業日にとの告知。予約の案内は記載なし"
 },
 {
  "id": "hyogo-cat-cat-cafe-nyanny",
  "name": "cat cafe Nyanny（ニャニー）",
  "animals": [
   "cat"
  ],
  "prefecture": "兵庫県",
  "area": "神戸元町",
  "address": "兵庫県神戸市中央区元町通2-6-11 徳永ビル3F",
  "access": "JR・阪神 元町駅西口から徒歩2分",
  "url": "https://www.nyanny.com/",
  "price": "最初の1時間 ドリンクなし1,100円／ワンドリンク付1,430円（土日祝1,320円／1,540円）、延長30分550円",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:00）",
  "closed": "火曜（祝日の場合は翌日）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "駅近"
  ],
  "description": "神戸の元町通にあるビルの3階の猫カフェだ。料金は1時間単位で、ドリンクの有無や土日祝で値段が変わる。猫を撮りすぎても大丈夫なよう、携帯の充電サービスがあるのが珍しい。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト メニュー https://www.nyanny.com/menu.html で確認。アクセス頁に元町駅西口徒歩2分。予約の案内は記載なし"
 },
 {
  "id": "hiroshima-cat-nyannyan-hutte",
  "name": "猫カフェ にゃんにゃんヒュッテ",
  "animals": [
   "cat"
  ],
  "prefecture": "広島県",
  "area": "呉",
  "address": "広島県呉市室瀬町13-39",
  "access": "公式ページに記載なし（来店前に確認を）。駐車場は軽自動車のみ（要予約）",
  "url": "https://kure-nyan-hutte.com/",
  "price": "大人30分600円／1時間1,200円／2時間2,000円／無制限3,000円、子供（高3まで）30分500円",
  "price_level": 2,
  "hours": "平日13:00〜18:00／土日祝10:00〜18:00",
  "closed": "不定休（公式の営業日カレンダーで告知）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "子ども可",
   "時間無制限プランあり"
  ],
  "description": "呉市にある、保護猫を約30匹迎えている猫カフェだ。人慣れした子から臆病な子までいて、里親募集や譲渡の相談もできる。民泊の「猫と泊まれる宿」やペットホテルも運営する団体だ。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://kure-nyan-hutte.com/ のトップで料金・営業時間・住所・約30匹の記載を確認。予約の案内は駐車場のみ。子供の1時間以降の料金は記載が途切れたため省略"
 },
 {
  "id": "okinawa-cat-chura-neko",
  "name": "Catcafe 美ら猫",
  "animals": [
   "cat"
  ],
  "prefecture": "沖縄県",
  "area": "石垣島",
  "address": "沖縄県石垣市宮良97-105",
  "access": "バス停「宮良東」から徒歩約10分（駐車場あり）",
  "url": "https://chura-neko.com/",
  "price": "小学生以上30分770円／45分1,100円／60分1,320円（税込・2026-11-01改定）、以降15分220円。4歳以上の未就学児は半額",
  "price_level": 2,
  "hours": "10:00〜18:00（最終受付17:30）",
  "closed": "不定休（公式お知らせで11月の休業日を告知）",
  "reservation": "不要",
  "features": [
   "子ども可"
  ],
  "description": "石垣島の宮良にある猫カフェで、市街地と空港のあいだに位置する。猫たちは店内を自由に歩き回り、猫専用のホテルも併設している。2026年11月1日に料金を改定した。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト ショップ情報 https://chura-neko.com/info/ と トップ（料金改定のお知らせ）で確認。猫の頭数・予約の案内は記載なし。240分3,740円のプランあり（詳細は料金システムのページ）"
 },
 {
  "id": "okinawa-cat-nekomaru-chaya",
  "name": "猫まる茶屋",
  "animals": [
   "cat"
  ],
  "prefecture": "沖縄県",
  "area": "那覇・国際通り",
  "address": "沖縄県那覇市牧志2-3-22 高良産業ビル5階",
  "access": "国際通り周辺（最寄駅の記載は公式にない）",
  "url": "https://www.nekomaruchaya.com/",
  "price": "平日30分750円／60分1,200円／90分1,750円、土日祝30分850円。昼パック（1.5〜4時間）1,900円（ドリンク付2,100円）",
  "price_level": 2,
  "hours": "平日11:30〜18:00／土日祝11:30〜19:00（最終入店は閉店1時間前）",
  "closed": "不定休",
  "reservation": "不要",
  "features": [
   "里親募集",
   "時間無制限プランあり",
   "貸切可"
  ],
  "description": "那覇の国際通り近くのビル5階にある猫カフェだ。15分区切りで自動的に次の料金プランへ移る後払い制で、昼パックや1日フリーパックもある。少人数の集まりや誕生日会での貸切もできる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://www.nekomaruchaya.com/shopaccess.html で営業時間・住所、料金は公式の料金システムページの料金画像（system_price03.jpg）を読み取り。同ページの文言は『外税表記』、画像は『税込み価格』で食い違うため税の扱いは要確認。予約の案内は記載なし。本文は外税表記で画像は税込表記のため、来店前に確認を"
 },
 {
  "id": "mie-cat-nekotachi-no-ie",
  "name": "ねこ達のいえ（ログハウスのYSK）",
  "animals": [
   "cat"
  ],
  "prefecture": "三重県",
  "area": "玉城町",
  "address": "三重県度会郡玉城町勝田3591-2 YSK本社ショールーム2F",
  "access": "公式ページに記載なし（来店前に確認を）",
  "url": "https://nekonoie.ysklog.com/",
  "price": "30分900円／45分1,100円／60分1,400円（いずれもフリードリンク付）、延長30分600円、2時間パック2,200円、1dayフリータイム4,300円",
  "price_level": 2,
  "hours": "12:00〜19:00（最終入店18:30）",
  "closed": "火曜",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "時間無制限プランあり",
   "里親募集"
  ],
  "description": "玉城町のログハウスにある猫カフェで、猫は店内を自由気ままに歩いている。ドリンクバーは何杯でも自由で、1日いられるフリータイムのプランもある。売上の一部は地域猫の保護に回される。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト 料金システム https://nekonoie.ysklog.com/system/ の料金画像（2022-12掲載、ページ本文は2023-01-01価格改定）を読み取り。営業時間・定休日は店舗紹介ページ。猫の頭数・予約の案内は記載なし。譲渡の案内ページあり"
 },
 {
  "id": "yamaguchi-cat-neko-to-hon-miaw",
  "name": "猫と本 Miaw（ミャオ）",
  "animals": [
   "cat"
  ],
  "prefecture": "山口県",
  "area": "下関",
  "address": "山口県下関市赤間町3-41 アサビル2F",
  "access": "公式ページに記載なし（来店前に確認を）",
  "url": "https://miaw.jp/",
  "price": "時間制（フリードリンク付）30分750円／40分1,000円／50分1,250円／1時間1,500円、以降10分100円。パック2時間1,900円／3時間2,300円",
  "price_level": 2,
  "hours": "平日13:00〜17:00／土日祝13:00〜20:00",
  "closed": "火曜・金曜",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "時間無制限プランあり"
  ],
  "description": "店名のとおり、猫と本を組み合わせた下関の猫カフェだ。フリードリンク付きの時間制で、2時間・3時間のパック料金もある。年齢制限があり、利用は中学生以上、素足の人は110円の専用スリッパを買う決まりだ。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://miaw.jp/ のトップで料金（税込）・営業時間・住所を確認。予約の案内・最寄駅は記載なし"
 },
 {
  "id": "kumamoto-cat-neko-cafe-mico",
  "name": "Neko Cafe MICO（ネコカフェミコ）",
  "animals": [
   "cat"
  ],
  "prefecture": "熊本県",
  "area": "熊本市東区",
  "address": "熊本市東区西原1-1-7",
  "access": "産交バス「新南部入口」下車、車では熊本ICから約5分",
  "url": "https://chiusas1.wixsite.com/nekocafemico",
  "price": "基本30分600円＋ワンオーダー、30分以降10分ごとに200円。ドリンクコース90分2,100円／120分2,400円。小学生・65歳以上は200円引き",
  "price_level": 2,
  "hours": "金・土・祝前日11:00〜22:00／その他11:00〜20:00",
  "closed": "木曜（祝日は営業）",
  "reservation": "推奨",
  "features": [
   "子ども可"
  ],
  "description": "熊本市東区にある猫カフェで、毎年の猫の写真コンテストやカレンダー販売など、ファン向けの企画が多い。店内の人数を制限しているため、予約をすすめている。未就学児は午前11時から12時のキッズアワーのみ入れる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト System https://chiusas1.wixsite.com/nekocafemico/system と トップ・Access で確認。予約は『ご予約をお勧め』の記載。支払いは現金のみ。猫の頭数は記載なし"
 },
 {
  "id": "tokyo-cat-cat-cafe-nyankoto",
  "name": "cat cafe にゃんこと",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "高田馬場",
  "address": "東京都新宿区高田馬場2-14-6 スワンビル201",
  "access": "高田馬場駅周辺（徒歩分数は公式ページに記載なし）",
  "url": "http://www.nyankoto.com/",
  "price": "基本1時間1,500円（1ドリンク付）、延長15分300円、3時間パック3,200円（2ドリンク付）、平日フリータイム3,500円",
  "price_level": 2,
  "hours": "平日12:30〜21:00（受付終了20:00）／土日祝12:00〜21:00（受付終了20:00）",
  "closed": "公式のスケジュールページで告知",
  "reservation": "推奨",
  "features": [
   "ドリンク込み",
   "貸切可",
   "時間無制限プランあり"
  ],
  "description": "高田馬場の駅近くのビルにある猫カフェで、1時間1,500円のドリンク付き料金を基本にしている。1日2回のおやつの時間があり、猫の抱っこは遠慮する決まりだ。貸切は1時間12,000円で受け付けている。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://www.nyankoto.com/about.html（料金）と access.html（住所）で確認。予約は『お勧め』の記載（なしでも来店可）。定休日の記載は公式スケジュールを参照とした"
 },
 {
  "id": "fukuoka-cat-ito-nyago",
  "name": "伊都にゃ～ご",
  "animals": [
   "cat"
  ],
  "prefecture": "福岡県",
  "area": "福岡市早良区",
  "address": "福岡県福岡市早良区原3-12-12",
  "access": "公式ページに記載なし（来店前に確認を）",
  "url": "https://itonya-go.com/",
  "price": "大人1時間1,300円（フリードリンク付）、小・中学生800円、1日フリーパス2,500円（混雑時は時間制限あり）",
  "price_level": 2,
  "hours": "11:00〜19:00",
  "closed": "水曜・木曜、お盆、年末年始",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "ドリンク込み",
   "時間無制限プランあり"
  ],
  "description": "福岡市早良区にある、保護された猫と里親のマッチングを進める猫カフェだ。里親を考える場合は、アレルギーの確認のためにも家族全員での来店をすすめている。毎月2・12・22日などはチュールが安くなる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト 料金プラン https://itonya-go.com/menu/ とトップで確認。予約の案内は記載なし"
 },
 {
  "id": "fukuoka-cat-nekochaya-kokura",
  "name": "ねこのいるカフェ 小倉猫茶家",
  "animals": [
   "cat"
  ],
  "prefecture": "福岡県",
  "area": "北九州市小倉",
  "address": "福岡県北九州市小倉北区魚町3-4-3 バザーリ小倉5階",
  "access": "公式ページに記載なし（来店前に確認を）",
  "url": "https://kokuranekocyaya.web.fc2.com/",
  "price": "30分1ドリンク付700円／60分1ドリンク付1,200円〜（デザート付1,300円など）／90分1ドリンク付1,700円〜",
  "price_level": 2,
  "hours": "11:00〜21:00",
  "closed": "月曜（祝日の月曜は営業）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "ドリンク込み"
  ],
  "description": "小倉の繁華街にある猫カフェで、行政に持ち込まれた猫を店主が引き取って店のスタッフ猫にしている。高齢の猫が多く、猫最優先で静かに過ごす決まりがある。ドリンクにデザートやケーキを付けるコースを細かく選べる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://kokuranekocyaya.web.fc2.com/ のトップ（お品書き）で料金・営業時間・住所を確認。最終更新は2026-01。予約の案内は記載なし"
 },
 {
  "id": "fukuoka-cat-bineko",
  "name": "猫と人の癒しの家 猫カフェ 美猫",
  "animals": [
   "cat"
  ],
  "prefecture": "福岡県",
  "area": "福岡市中央区",
  "address": "福岡県福岡市中央区港3-3-20",
  "access": "公式ページに記載なし（来店前に確認を）",
  "url": "https://minatoneko.wixsite.com/bineko",
  "price": "1時間1,400円（ワンドリンク付）、延長20分300円",
  "price_level": 2,
  "hours": "11:00〜19:00（最終入場18:00）。平日は17:00閉店（最終入場16:00）",
  "closed": "木曜・金曜",
  "reservation": "不要",
  "features": [
   "ドリンク込み"
  ],
  "description": "福岡市中央区の港にある猫カフェで、猫と人の癒しの家をうたっている。時間の声かけがなく、利用者が時間を管理する形式だ。混雑時には延長を断られることがある。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト ご利用料金 https://minatoneko.wixsite.com/bineko/blank-dbvg8（2022-10の価格改定告知）とトップで確認。予約の案内・猫の頭数は記載なし"
 },
 {
  "id": "miyazaki-cat-necoutatane",
  "name": "猫カフェうたたね",
  "animals": [
   "cat"
  ],
  "prefecture": "宮崎県",
  "area": "宮崎市",
  "address": "宮崎県宮崎市北川内町野間口4634-2",
  "access": "公式ページに記載なし（来店前に確認を）",
  "url": "https://necoutatane.com/",
  "price": "土日祝30分700円／45分900円／60分1,200円（ワンドリンク付）。平日は90分1,500円／120分1,800円。延長15分300円（公式の表記は税8%込みのままのため来店前に確認を）",
  "price_level": 2,
  "hours": "10〜6月11:00〜18:00（最終17:00）／7〜9月11:00〜19:00（最終18:00）",
  "closed": "年中無休（元旦のみ休み）",
  "reservation": "必須",
  "features": [
   "予約制",
   "保護動物",
   "里親募集",
   "ドリンク込み"
  ],
  "description": "2008年に開いた宮崎市の保護猫カフェで、500匹以上の猫が新しい家族に巣立ったという。完全予約制で人数を制限して営業している。未就学児は午前11時から12時だけ入れ、猫ルームの貸切プランもある。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト SYSTEM https://necoutatane.com/ で確認。料金は『消費税8%込み』と古い表記のままのため、実際の価格は来店前に確認を"
 },
 {
  "id": "tokyo-cat-cateriam",
  "name": "Cat Cafe Cateriam（キャテリアム）",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "下北沢",
  "address": "東京都世田谷区北沢2-26-6 モンブランビル2F",
  "access": "京王井の頭線下北沢駅西口から徒歩1分",
  "url": "https://www.cateriam.com/",
  "price": "1時間1,200円（ワンドリンク付き）、ドリンクなし1,000円、15分お試し300円、延長15分ごとに250円",
  "price_level": 2,
  "hours": "平日11:00〜21:00／土日祝10:00〜21:00（最終受付20:45）",
  "closed": "月曜（祝日の場合は営業、翌火曜が代休）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "駅近",
   "写真OK",
   "子ども可"
  ],
  "description": "下北沢駅のすぐそば、ビルの2階にある老舗の猫カフェ。猫と人が同じ空間で過ごす造りで、15分や30分のお試し利用もできる。5歳未満は入店できないが、親子で猫との接し方を学べる場として小学生以下も保護者同伴で歓迎している。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "料金 https://www.cateriam.com/pages/2329773/menu 、営業時間・定休日・年齢 https://www.cateriam.com/pages/2329862/page_201810171809 、予約 Q&A https://www.cateriam.com/pages/2329879/page_201810171814 で確認（2026-08のお知らせ更新あり）。猫の頭数は公式ページに記載なし。"
 },
 {
  "id": "tokyo-cat-bokuneko-akihabara",
  "name": "BOKUNEKO 秋葉原店",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "秋葉原",
  "address": "東京都千代田区外神田4-4-3 小木曽ビル5F",
  "access": "秋葉原エリア（公式ページに最寄駅の記載なし）",
  "url": "http://bokuneko.jp/",
  "price": "平日10分330円（税込）、土日祝10分440円、フリードリンク平日385円・土日祝550円",
  "price_level": 3,
  "hours": "全日11:00〜21:00（最終入店20:30）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "写真OK",
   "子ども可"
  ],
  "description": "秋葉原のビル5階にある猫カフェで、10分単位で気軽に入れる時間制が特徴。ペルシャやノルウェージャンフォレストキャット、スコティッシュフォールドなど血統の異なる猫が暮らし、静かな図書館のような雰囲気で過ごせる。無料Wi-Fiがあり、読書や作業にも向く。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "料金・営業時間 http://bokuneko.jp/ 、予約・年齢 http://bokuneko.jp/faq/ で確認。最寄駅は公式ページに記載なし。猫7〜8匹の紹介を確認。"
 },
 {
  "id": "tokyo-cat-necoma-meguro",
  "name": "保護猫喫茶 necoma",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "目黒（学芸大学）",
  "address": "東京都目黒区中町1-33-3 3階",
  "access": "東急東横線学芸大学駅から徒歩12分",
  "url": "https://necoma.co/",
  "price": "1時間1,500円（延長30分ごとに750円）",
  "price_level": 2,
  "hours": "平日13:00〜20:00／土日祝11:00〜20:00",
  "closed": "木曜（祝日は営業）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "写真OK"
  ],
  "description": "里親を待つ保護猫だけが暮らす喫茶で、ギャラリーも兼ねており、季節ごとに展示が入れ替わる。猫のいる喫茶店として静かに過ごせ、無料Wi-Fiも使える。里親希望の相談もできる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "営業時間・料金 https://necoma.co/ で確認（2026-11-07の更新あり）。予約の案内は公式トップに記載なし。"
 },
 {
  "id": "tokyo-cat-nyankotei-kaname",
  "name": "保護猫喫茶 要にゃんこ亭",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "池袋（要町）",
  "address": "東京都豊島区池袋3-12-1",
  "access": "東京メトロ有楽町線・副都心線要町駅から徒歩3分",
  "url": "https://nyankotei.com/shop/kanameten/",
  "price": "平日1時間1,500円（ドリンク飲み放題・駄菓子食べ放題）、30分1,000円、フリータイム3,800円。土日祝1時間1,600円",
  "price_level": 2,
  "hours": "12:00〜21:00（最終受付20:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "ドリンク込み",
   "時間無制限プランあり",
   "子ども可"
  ],
  "description": "大正モダンな和喫茶をイメージした保護猫喫茶で、ドリンクと駄菓子が食べ放題という珍しい料金設定だ。来館料の一部は保護活動やTNRの費用に回される。未就学児は無料、小学生〜高校生は半額で、親子連れにも向く。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://nyankotei.com/shop/kanameten/ で料金・営業時間・住所を確認。定休日の記載なし。LINE予約の案内はあるが必須とは書かれていない。"
 },
 {
  "id": "tokyo-cat-nyankotei-kamiitabashi",
  "name": "保護猫喫茶 上板にゃんこ亭",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "上板橋",
  "address": "東京都板橋区上板橋1-26-7",
  "access": "東武東上線上板橋駅から徒歩3分",
  "url": "https://nyankotei.com/shop/kamiitabashiten/",
  "price": "平日1時間1,500円（ドリンク飲み放題）、30分1,000円、フリータイム3,800円。土日祝1時間1,600円",
  "price_level": 2,
  "hours": "12:00〜21:00（最終受付20:00）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "ドリンク込み",
   "時間無制限プランあり",
   "子ども可"
  ],
  "description": "猫エイズキャリアの猫たち専用のフロアを持つ保護猫喫茶で、ヨーロピアンな内装が目を引く。キャリアの猫の性格や健康面の説明を受けながらふれあえ、理解したうえでの里親探しにつなげている。ドリンクは飲み放題だ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://nyankotei.com/shop/kamiitabashiten/ で確認。定休日の記載なし。電話予約の案内はあるが必須とは書かれていない。"
 },
 {
  "id": "tokyo-cat-nyankotei-jujo",
  "name": "保護猫喫茶 十条にゃんこ亭",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "十条",
  "address": "東京都北区上十条2-11-12 榎本ビル201",
  "access": "JR埼京線十条駅から徒歩3分",
  "url": "https://nyankotei.com/shop/jujoten",
  "price": "平日1時間1,500円（ドリンク飲み放題）、30分1,000円、フリータイム3,800円。土日祝1時間1,600円",
  "price_level": 2,
  "hours": "12:00〜21:00（最終受付20:00）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "ドリンク込み",
   "時間無制限プランあり",
   "子ども可"
  ],
  "description": "2025年10月に開いた系列3店目の保護猫喫茶。ブラウンを基調にしたレトロな店内に大きな木のキャットタワーがあり、子猫から高齢猫までが暮らす。広い空間で静かに猫と過ごしたい人に向く。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://nyankotei.com/shop/jujoten で確認（公式ページ内で所在が201号室・202号室と表記ゆれあり）。定休日の記載なし。／検品⑥（2026-11-07）公式サイト内で部屋番号が201（フッター）と202（本文）で割れている。フッターの201を採用"
 },
 {
  "id": "tokyo-cat-miagolare-nakano",
  "name": "保護猫カフェ Miagolare（ミャゴラーレ）",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "新中野",
  "address": "東京都中野区本町4-30-26 第二藤尾ビル3F",
  "access": "東京メトロ丸ノ内線新中野駅3番出口から徒歩3分",
  "url": "https://miagolare.org/",
  "price": "1時間1,400円（フリードリンク込み）、以降30分ごとに500円、1日パック4,000円（現金のみ）",
  "price_level": 2,
  "hours": "11:30〜21:30（最終入店20:30）",
  "closed": "毎週木曜",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "ドリンク込み",
   "時間無制限プランあり",
   "写真OK"
  ],
  "description": "里親募集中の保護猫が常時15頭前後いる、新中野の保護猫カフェ。漫画が多く、パソコンの持ち込みも可能で、猫に囲まれて自由に過ごせる。未就学児は入店できず、混雑状況は公式サイトで確認できる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "トップ https://miagolare.org/ 、料金 https://miagolare.org/お店のシステム/ 、アクセス https://miagolare.org/アクセス/ で確認。エレベーターなし。"
 },
 {
  "id": "tokyo-cat-ekoneko-nerima",
  "name": "里親募集型猫カフェ えこねこ",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "練馬",
  "address": "東京都練馬区練馬1-2-13 サンネット練馬ビル401",
  "access": "西武池袋線練馬駅から徒歩1分",
  "url": "https://necocafe.co.jp/",
  "price": "最初の1時間1,300円（フリードリンク込み）、以降30分ごとに500円",
  "price_level": 2,
  "hours": "11:00〜19:00",
  "closed": "水曜・第3木曜",
  "reservation": "推奨",
  "features": [
   "保護動物",
   "里親募集",
   "ドリンク込み",
   "駅近"
  ],
  "description": "動物病院が運営する里親募集型の猫カフェで、練馬駅から徒歩1分。フリードリンク付きの時間制で、予約があれば確実に入れる。小学生未満は入店できず、靴下の着用が必要だ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "料金 https://necocafe.co.jp/price/ 、営業時間・定休日 https://necocafe.co.jp/access-schedule/ で確認（公式ブログ2026-11更新）。予約は任意だが予約優先のため「推奨」とした。"
 },
 {
  "id": "tokyo-cat-catsanddogs-mukojima",
  "name": "CATS&DOGS CAFE",
  "animals": [
   "cat",
   "dog"
  ],
  "prefecture": "東京都",
  "area": "向島（墨田区）",
  "address": "東京都墨田区向島5-48-1",
  "access": "東武スカイツリーライン曳舟駅から徒歩10分",
  "url": "http://cats-and-dogs.cafe/cafe/",
  "price": "猫ルーム30分単位500円（大人・小人同額）",
  "price_level": 1,
  "hours": "水木金14:00〜17:00・18:00〜21:00／土12:00〜17:00・18:00〜21:00／日祝12:00〜17:00（猫ルームは20:00まで）",
  "closed": "月・火曜（祝日は営業、水曜代休）",
  "reservation": "必須",
  "features": [
   "保護動物",
   "里親募集",
   "予約制",
   "複数の動物"
  ],
  "description": "保護猫の猫ルームと、保護犬のいるカフェエリアを持つ墨田区の保護動物カフェ。猫ルームは事前予約制で、30分500円と手頃だ。犬エリアは保護犬に会いたい場合に予約が要り、飲食だけなら予約不要である。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "料金 http://cats-and-dogs.cafe/cafe/ 、営業時間・予約 http://cats-and-dogs.cafe/cafe/about.html で確認。犬エリアの料金は公式ページに記載なし。"
 },
 {
  "id": "tokyo-cat-yahoneko-kunitachi",
  "name": "猫のいる休憩室 谷保ねこ",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "国立（谷保）",
  "address": "東京都国立市富士見台1-10-15 宝ビル2F",
  "access": "JR南武線谷保駅北口から徒歩3分",
  "url": "https://www.yahoneko.com/",
  "price": "10分あたり230円〜（平日・大人）、1時間パック平日1,300円（フリードリンク付き）、3時間パック2,700円、フリータイム4,800円",
  "price_level": 2,
  "hours": "平日12:00〜20:00／土日祝10:00〜20:00（最終入店19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "推奨",
  "features": [
   "ドリンク込み",
   "時間無制限プランあり",
   "貸切可",
   "子ども可"
  ],
  "description": "国立市の住宅街にある時間制の猫カフェで、10分単位の利用から1日フリータイムまで選べる。ごく短い休憩にも長居にも使いやすい料金設計で、貸切も受け付けている。5歳以上から入店できる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "料金・営業時間 https://www.yahoneko.com/ で確認（トップに2026年11月のお知らせ）。10分料金は年齢区分の表の平日大人欄を採用。予約は公式が勧めているため「推奨」。定休日の記載なし。"
 },
 {
  "id": "tokyo-cat-hachineko-hachioji",
  "name": "保護猫ぱあく はちねこカフェ",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "八王子（西八王子）",
  "address": "東京都八王子市千人町1-6-2 杉本マンション1階",
  "access": "JR西八王子駅から徒歩6分",
  "url": "https://www.hachineko.com/保護猫ぱあく-はちねこカフェ/",
  "price": "30分600円、1時間1,000円（1ドリンク付き）、以降30分ごとに500円",
  "price_level": 1,
  "hours": "木・土・日 12:30〜16:30（10〜5月。最終受付16:00）",
  "closed": "月・火・水・金曜",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "ドリンク込み"
  ],
  "description": "地域猫活動を続ける団体が運営する保護猫カフェで、営業は木・土・日の週3日だ。1ドリンク付きで1時間1,000円と手頃である。4歳から入店でき、お見合い希望者は別時間に案内される。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "利用案内 https://www.hachineko.com/保護猫ぱあく-はちねこカフェ/ で確認。営業曜日の裏返しとして定休日を記載。現金払いのみ。"
 },
 {
  "id": "tokyo-cat-tamaneko-tama",
  "name": "ねこカフェ たまねこ",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "多摩センター",
  "address": "東京都多摩市落合1-19-16 パークタマ2F",
  "access": "小田急線・京王線多摩センター駅から徒歩10分",
  "url": "https://tamaneko.jp/",
  "price": "平日30分1,000円（大人）、オールフリー1,500円。土日祝30分1,500円、オールフリー2,000円",
  "price_level": 2,
  "hours": "12:00〜20:30（受付終了19:30）",
  "closed": "木曜（日祝は営業）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "時間無制限プランあり",
   "子ども可"
  ],
  "description": "ラグドールと保護猫が暮らす、多摩市初の猫カフェ。常時10頭以上の猫がいて、軽食やデザートも出す。4歳から入店でき、4名以上なら予約もできる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "料金 https://tamaneko.jp/price/ 、営業時間 https://tamaneko.jp/ 、住所 https://tamaneko.jp/access/ で確認（2026-10の定休日お知らせあり）。ドリンクは別注文制（公式にドリンク込みの記載なし）。"
 },
 {
  "id": "tokyo-cat-lipmy-kitasenju",
  "name": "猫カフェ リプミィ",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "北千住",
  "address": "東京都足立区千住東2-4-14",
  "access": "JR常磐線・東京メトロ北千住駅から徒歩5分",
  "url": "https://lipmy.cafe/",
  "price": "60分平日1,100円・土日祝1,400円（別途ワンドリンクの注文が必要）、30分600円〜",
  "price_level": 2,
  "hours": "13:00〜18:00（最終受付17:30）",
  "closed": "月曜（祝日の場合は翌火曜）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "駅近"
  ],
  "description": "北千住駅近くの小さな猫カフェで、ベンガルやマンチカン、ノルウェージャンフォレストキャットなど純血種を中心に9匹が暮らす。パック料金にワンドリンクの注文を足す形で、短時間から使える。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "料金・営業時間 https://lipmy.cafe/ で確認。ドリンク代は公式トップで確認できず。猫9匹は公式の紹介による。"
 },
 {
  "id": "tokyo-cat-meooow-ebara",
  "name": "保護猫カフェ Meooow!（ミャーーーオ！）",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "荏原（品川区）",
  "address": "東京都品川区荏原1-12-6",
  "access": "東急池上線戸越銀座駅から徒歩約8分",
  "url": "https://meooow-cat.com/",
  "price": "1時間1,000円、延長15分ごとに200円",
  "price_level": 1,
  "hours": "13:00〜20:00（土日祝は予約制）",
  "closed": "水曜（不定休あり）",
  "reservation": "推奨",
  "features": [
   "保護動物",
   "里親募集",
   "写真OK"
  ],
  "description": "里親を探す猫たちが暮らす、品川区荏原の保護猫カフェ。1時間1,000円で、ポイントカードでたまった分が1時間無料に使える。2026年11月から土日祝は予約制で、営業日カレンダーと予約システムが公式サイトにある。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "料金・営業時間 https://meooow-cat.com/about.php 、アクセス https://meooow-cat.com/access.php で確認。複数駅からの徒歩分が併記され、最寄りに近い戸越銀座駅を記載。／検品⑥（2026-11-07）公式 about に「11月より土日祝のみ予約制」。平日は不要のため reservation は推奨とし、hours と説明文に土日祝の予約制を明記"
 },
 {
  "id": "tokyo-cat-bakeneko-okubo",
  "name": "BAKENEKO CAFE 化猫茶屋",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "新宿（大久保）",
  "address": "東京都新宿区大久保3-13-1 1棟106",
  "access": "東京メトロ副都心線西早稲田駅から徒歩6分",
  "url": "https://bakeneko-cafe.tokyo/",
  "price": "30分1,000円、1時間パック1,500円、2時間パック2,400円、3時間パック3,000円、延長30分800円",
  "price_level": 2,
  "hours": "11:00〜20:00（ラストオーダー19:00）",
  "closed": "月・水曜",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "時間無制限プランあり"
  ],
  "description": "新宿区の諏訪通り沿いにある保護猫カフェで、収益を保護活動に充てている。時間制のパックが選べ、平日限定のフリー料金もある。4名以上は電話予約になる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "料金・営業時間 https://bakeneko-cafe.tokyo/ で確認（2026-07の更新あり）。中学生未満は保護者同伴。"
 },
 {
  "id": "tokyo-cat-cathomegarden-adachi",
  "name": "CAT HOME GARDEN",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "足立（足立区）",
  "address": "東京都足立区足立4-14-1",
  "access": "足立区足立エリア（公式ページに最寄駅の記載なし）",
  "url": "https://cathomegarden.com/",
  "price": "猫部屋20分500円（大学生以上。中高生300円、小学5年生以上200円）、延長20分ごと。カフェのみは時間制限なし",
  "price_level": 2,
  "hours": "土日祝 11:00〜14:00／16:00〜19:00の二部制",
  "closed": "平日（不定期休みあり。Instagramで確認）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "子ども可"
  ],
  "description": "足立区初の譲渡型保護猫カフェで、土日祝のみ二部制で開く。スペシャルティコーヒーを出すカフェスペースと猫部屋が分かれており、猫部屋だけが20分制の有料になっている。猫アレルギーの人は入室できない。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "利用案内 https://cathomegarden.com/guide/ 、店舗情報 https://cathomegarden.com/cafe/ で確認。最寄駅の記載なし。"
 },
 {
  "prefecture": "東京都",
  "image": null,
  "checked": "2026-11-07",
  "id": "tokyo-cat-moff-grandberry-park",
  "name": "Cat Café MOFF グランベリーパーク店",
  "animals": [
   "cat"
  ],
  "area": "南町田",
  "address": "東京都町田市鶴間3-4-1 グランベリーパーク3F",
  "access": "東急田園都市線南町田グランベリーパーク駅直結",
  "url": "https://moff-moff.jp/archives/shop/cat-cafe_gb-park",
  "price": "入園700円／30分（ワンドリンクオーダー制）、以降10分250円、最大料金は平日1,900円・土日祝2,900円（税込）",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "グランベリーパークの定休日に準ずる",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "駅近",
   "子ども可",
   "写真OK"
  ],
  "description": "南町田グランベリーパークの3階にある猫カフェ。駅直結で、ショッピングや公園散策のついでに入れる。ワンドリンクの時間制で、平日は最大料金が1,900円に収まり長居しやすい。",
  "source_note": "店舗ページ https://moff-moff.jp/archives/shop/cat-cafe_gb-park で確認。Cat Café MOFF 系列（チェーン担当と重複の可能性あり）。"
 },
 {
  "prefecture": "東京都",
  "image": null,
  "checked": "2026-11-07",
  "id": "tokyo-cat-maomao-ikebukuro",
  "name": "一組限定個室猫カフェ MAOMAO",
  "animals": [
   "cat"
  ],
  "area": "池袋（東池袋）",
  "address": "東京都豊島区東池袋2-50-13 マガザン東池袋7階",
  "access": "東池袋エリア（公式ページに最寄駅の記載なし）",
  "url": "https://nekomaomao.com/",
  "price": "1名は1時間3,000円（最長3時間）、2名以上は1人1時間2,000円〜、4〜5名は団体料金1人1,600円〜。土日祝は1人1時間500円増、5〜15歳は1,000円（最少1名、最低料金1名1時間3,000円）",
  "price_level": 4,
  "hours": "11:00〜20:00",
  "closed": "無休",
  "reservation": "必須",
  "features": [
   "予約制",
   "貸切可",
   "ふれあいOK",
   "写真OK"
  ],
  "description": "一組ずつ個室を貸し切る、完全予約制の会員制猫カフェ。5匹ほどの猫を独占でき、ほかの客を気にせず過ごせる。予約はアプリまたは電話で、5歳以上から利用できる。",
  "source_note": "料金・営業時間 https://nekomaomao.com/ で確認（2026-07に価格改定、2026-10に冬のキャンペーン告知）。最低人数・最低料金は公式に文字で記載。サイドメニューが別途必要な場合あり。"
 },
 {
  "id": "yamanashi-cat-hakobuneco-kofushowa",
  "name": "猫カフェ Hako bu neco 甲府昭和店",
  "animals": [
   "cat"
  ],
  "prefecture": "山梨県",
  "area": "甲府・昭和町",
  "address": "山梨県中巨摩郡昭和町西条5241 Ms.garage",
  "access": "公式ページに記載なし（来店前に確認を）",
  "url": "https://hakobuneco0314.jimdofree.com/",
  "price": "平日30分1,100円（学生750円・小学生以下550円、1ドリンク込み）／平日2時間パック1,650円／土日祝30分1,400円",
  "price_level": 2,
  "hours": "11:15〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "ドリンク込み"
  ],
  "description": "動物病院が運営する猫カフェで、店にいるのは保護された成猫だけだ。健康検査と不妊去勢を終えた猫たちで、里親募集も兼ねている。山梨県内で独立系の猫カフェを探す人に向く。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式サイト https://hakobuneco0314.jimdofree.com/ のホーム・お店情報・料金案内で確認。定休日・最寄駅の記載なし。予約の案内は記載なし"
 },
 {
  "id": "yamanashi-cat-nyanconnect",
  "name": "Nyan Connect（譲渡型保護猫カフェ＆オープン型保護猫シェルター）",
  "animals": [
   "cat"
  ],
  "prefecture": "山梨県",
  "area": "甲府",
  "address": "山梨県甲府市上石田1-9-16",
  "access": "甲府市上石田（最寄駅の記載なし。公式ページに記載なし）",
  "url": "https://cafe.nyan-connect.com/",
  "price": "1時間1,500円（1ドリンク付き）／2時間2,500円（2ドリンク付き）／以降30分500円／平日フリータイム3,000円",
  "price_level": 2,
  "hours": "平日13:00〜16:00（最終入場15:00）／土日13:00〜18:00（最終入場17:00）。火曜は不定期に夜営業あり",
  "closed": "公式の営業カレンダー（Instagram）で案内",
  "reservation": "推奨",
  "features": [
   "保護動物",
   "里親募集",
   "ドリンク込み",
   "時間無制限プランあり"
  ],
  "description": "譲渡型の保護猫カフェで、猫が暮らすオープン型のシェルターを兼ねている。猫と遊ぶのも施設を見て回るのも自由で、里親希望でなくても入れる。基本は予約制だが、平日は予約なしでも利用できる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式サイト https://cafe.nyan-connect.com/ のトップ・料金予約ページ・アクセスページで確認。基本予約制で平日は予約なしも可（来店前の電話確認を勧める旨あり）。定休日は営業カレンダー参照"
 },
 {
  "id": "yamanashi-cat-mckofu",
  "name": "MC Kofu（老猫ホーム・猫カフェ）",
  "animals": [
   "cat"
  ],
  "prefecture": "山梨県",
  "area": "甲府",
  "address": "山梨県甲府市蓬沢町向畑710-1",
  "access": "JR身延線 南甲府駅から徒歩15分。国道20号沿い",
  "url": "http://www.mycatkofu.com/",
  "price": "60分1,100円／90分1,500円／120分1,900円／180分2,800円／延長30分600円／フリータイムパス3,900円（お試し35分800円は初回限定）",
  "price_level": 2,
  "hours": "11:00〜19:00（猫カフェの利用は18:30まで）",
  "closed": "不定休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "時間無制限プランあり"
  ],
  "description": "老猫ホームを併設した甲府市の猫カフェだ。ドリンク提供は終了しており、猫と過ごすことが中心になる。予約制ではなく、そのまま入れる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式サイト http://www.mycatkofu.com/ のトップ（営業のご案内・アクセス）と料金ページ(?page=menu1)で確認。当店は予約制ではない旨の記載あり／検品⑥（2026-11-07）公式トップのお知らせは2025-11-28が最新（1年以内）。公式X @mc_kofu・Instagram catcafe_mycat あり。掲載継続"
 },
 {
  "id": "chiba-cat-wafuunekohonpo",
  "name": "保護猫かふぇ 和風猫本舗",
  "animals": [
   "cat"
  ],
  "prefecture": "千葉県",
  "area": "船橋・高根台",
  "address": "千葉県船橋市高根台1-7-3 第3大京ビル3階",
  "access": "新京成線 高根公団駅から徒歩2分",
  "url": "https://xn--0tr664bhxiv4oht0a.com/",
  "price": "平日1時間1,500円／2時間以上2,500円／土曜1時間1,800円／2時間以上3,000円（予約で500円引き）",
  "price_level": 2,
  "hours": "平日13:00〜17:30（金曜は15:00まで）／土曜13:00〜18:00（最終入店17:00）",
  "closed": "日曜・祝日・第3週（営業日は平日と土曜）",
  "reservation": "推奨",
  "features": [
   "保護動物",
   "里親募集",
   "駅近"
  ],
  "description": "約50匹の保護猫がいる船橋市の保護猫カフェだ。定員は約10人と少なく、猫との距離が近い。予約すると料金が500円引きになる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式サイト https://xn--0tr664bhxiv4oht0a.com/ のトップ（お店の詳細・料金）で確認。予約は公式LINEか電話で受付、予約なしの当日利用は割引対象外の旨を記載"
 },
 {
  "id": "kanagawa-cat-miysis",
  "name": "Cat Cafe Miysis（キャットカフェ ミーシス）",
  "animals": [
   "cat"
  ],
  "prefecture": "神奈川県",
  "area": "横浜・関内",
  "address": "神奈川県横浜市中区長者町6-99 ハローイセザキビル2階",
  "access": "JR関内駅から徒歩5分／横浜市営地下鉄 伊勢佐木長者町駅から徒歩3分",
  "url": "https://www.cat-miysis.com/",
  "price": "50分1,700円／70分1,900円／100分2,100円（各1ドリンク付き）／平日限定フリータイム4,500円（3ドリンク付き）",
  "price_level": 2,
  "hours": "13:00〜19:00（最終入店18:00）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "里親募集",
   "時間無制限プランあり"
  ],
  "description": "横浜の伊勢佐木長者町にある猫カフェだ。コーヒーや紅茶を手淹れ・ハンドドリップで出し、里親様募集のページも設けている。当日の問い合わせは電話で受ける。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式サイト https://www.cat-miysis.com/ のトップ・料金ご案内(/menu)・アクセス(/access)で確認。当店は予約制ではない旨の記載あり。定休日の記載なし"
 },
 {
  "id": "kanagawa-cat-hogoneco-omusubi",
  "name": "横浜 保護ねこカフェ おむすび",
  "animals": [
   "cat"
  ],
  "prefecture": "神奈川県",
  "area": "横浜・北幸",
  "address": "神奈川県横浜市西区北幸2-13-1 北原不動産ビル6F",
  "access": "西区北幸（最寄駅の記載なし。公式ページに記載なし）",
  "url": "https://oshirigaomusubi.com/",
  "price": "2時間まで1,600円／4時間まで2,300円／4時間超2,800円（2026-04-27改定）",
  "price_level": 2,
  "hours": "13:00〜20:00（オープン日はカレンダーで案内）",
  "closed": "不定休（営業日は完全予約制）",
  "reservation": "必須",
  "features": [
   "保護動物",
   "里親募集",
   "予約制",
   "時間無制限プランあり"
  ],
  "description": "野良だった猫を預かる保護ねこカフェで、頭数を制限して健康を管理している。人に慣れていない猫もおり、モフモフを求める人より、ゆっくり距離を縮める過ごし方に向く。営業日は前日から受け付ける完全予約制だ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式サイト https://oshirigaomusubi.com/ のトップ（料金改定のお知らせ・ご予約について・場所）で確認。公式LINE・X・Instagram・Googleマップから予約。定休日は不定休と営業日カレンダーによる"
 },
 {
  "id": "kanagawa-cat-velcat-bashamichi",
  "name": "保護猫VELCAT 馬車道店",
  "animals": [
   "cat"
  ],
  "prefecture": "神奈川県",
  "area": "横浜・馬車道",
  "address": "神奈川県横浜市中区弁天通3-48 弁三ビル2F",
  "access": "みなとみらい線 馬車道駅／JR根岸線・横浜市営地下鉄 関内駅",
  "url": "https://www.velcat-bashamichi.site/",
  "price": "オープンルーム60分1,650円／90分2,100円／120分2,500円／180分3,200円／平日30分800円／平日フリータイム4,000円",
  "price_level": 2,
  "hours": "11:00〜17:30（最終入店 平日17:00・土日祝16:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "貸切可",
   "時間無制限プランあり"
  ],
  "description": "保護猫が暮らすオープンルームで他の客と遊ぶスタイルに加え、事前予約の個室で猫と1対1で過ごすプランもある。オープンルームは3部屋を自由に行き来できる。里親募集と猫の医療ケアを行う一般社団法人が運営している。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式サイト https://www.velcat-bashamichi.site/ のご利用料金(/ryokin)・店舗情報(/information)で確認。個室は事前予約制、オープンルームの予約の案内は記載なし。定休日の記載なし"
 },
 {
  "id": "kanagawa-cat-nekoshiki-mizonokuchi",
  "name": "猫式 溝の口保護猫カフェ",
  "animals": [
   "cat"
  ],
  "prefecture": "神奈川県",
  "area": "川崎・溝の口",
  "address": "神奈川県川崎市高津区溝口1-20-10 東方ビル3F",
  "access": "東急田園都市線 溝の口駅・JR南武線 武蔵溝ノ口駅から徒歩約8分",
  "url": "https://www.neko-shiki.net/",
  "price": "1時間1,300円／2時間2,200円／3時間2,700円（平日。土日祝は各+100円）／平日フリータイム3,100円",
  "price_level": 2,
  "hours": "12:00〜20:00（最終受付19:00）",
  "closed": "月曜・木曜（祝日は営業）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "時間無制限プランあり",
   "貸切可"
  ],
  "description": "里親募集型の保護猫カフェで、猫エリアとカフェエリアが分かれている。猫の体調によって営業時間の変更や臨時休業がある。団体貸切の相談も受けている。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式サイト https://www.neko-shiki.net/ のトップ（店舗のご案内）と猫エリアページ(cat-area.html)で確認。予約の案内は記載なし"
 },
 {
  "id": "kanagawa-cat-musubi",
  "name": "保護猫カフェ ムスビ",
  "animals": [
   "cat"
  ],
  "prefecture": "神奈川県",
  "area": "川崎・多摩区",
  "address": "神奈川県川崎市多摩区菅1-4-3",
  "access": "多摩区菅（最寄駅の記載なし。公式ページに記載なし）",
  "url": "https://welfare.child-land.co.jp/animal-cafe/cat-cafe-musubi/",
  "price": "1時間1,800円／30分1,000円／延長30分ごとに900円（猫のおやつ300円）",
  "price_level": 2,
  "hours": "11:00〜17:00（最終受付16:30）",
  "closed": "なし（変更時はお知らせ）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集"
  ],
  "description": "保護猫だった猫たちが暮らす川崎市多摩区のカフェだ。平日は障がいのある人たちが通い、猫グッズ作りなどをする福祉事業所を兼ねる。譲渡会も開いている。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式サイト（チャイルドランドグループ）https://welfare.child-land.co.jp/animal-cafe/cat-cafe-musubi/ で確認。15歳未満は約束を守れる子のみ可。予約の案内は記載なし"
 },
 {
  "id": "kanagawa-cat-nekoiro-oiso",
  "name": "保護猫カフェ ねこいろ",
  "animals": [
   "cat"
  ],
  "prefecture": "神奈川県",
  "area": "大磯",
  "address": "神奈川県中郡大磯町国府新宿491-1",
  "access": "大磯・二宮・平塚駅から神奈中バスで「国府新宿」または「天の杜」下車",
  "url": "https://nekoirooiso.wixsite.com/nekoiro",
  "price": "大人（中学生以上）30分500円／子ども（小学生・幼児）30分300円／1時間以降は15分ごとに大人250円・子ども150円",
  "price_level": 1,
  "hours": "11:00〜17:00（ラストオーダー16:30）",
  "closed": "水曜・木曜",
  "reservation": "必須",
  "features": [
   "保護動物",
   "里親募集",
   "予約制",
   "子ども可"
  ],
  "description": "大磯町の緑の多い場所にある譲渡型の保護猫カフェだ。完全電話予約制で、落ち着いた環境で猫と過ごせる。感染症対策で靴下の着用が必要だ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式サイト https://nekoirooiso.wixsite.com/nekoiro のトップ・料金ページ(/price)・アクセス(/contact)で確認（住所・バス停・営業時間・定休日・完全電話予約制は公式の記載）"
 },
 {
  "id": "kanagawa-cat-nyango-chigasaki",
  "name": "個室型猫カフェ にゃんご 茅ヶ崎店",
  "animals": [
   "cat"
  ],
  "prefecture": "神奈川県",
  "area": "茅ヶ崎",
  "address": "神奈川県茅ヶ崎市南湖4-2-30",
  "access": "JR茅ヶ崎駅南口から徒歩20分",
  "url": "https://www.nekocafenyango.com/",
  "price": "30分1,800円／60分3,000円（いずれも1組2名まで・1ドリンク込み。3名以上は追加料金）",
  "price_level": 2,
  "hours": "11:00〜17:00（最終受付16:30）。日曜・祝日は10:00から",
  "closed": "月ごとに異なる（公式の営業カレンダー・Instagramで案内）",
  "reservation": "必須",
  "features": [
   "貸切可",
   "ドリンク込み",
   "予約制"
  ],
  "description": "1組ずつ入る完全個室で猫と過ごす個室型の猫カフェだ。窓ごしに猫が行き来する様子も見られる。予約制で、利用時間は会計した時点から数える。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式サイト https://www.nekocafenyango.com/ のトップとご利用料金ページで確認（茅ヶ崎店分のみ。平塚店は別店舗のため未掲載）。要予約制と明記／検品⑥（2026-11-07）60分3,000円は1組2名までの料金。1人あたり1,500円と読み price_level 2"
 },
 {
  "id": "saitama-cat-hogoneco-sakura1",
  "name": "保護猫カフェさくら 1号店",
  "animals": [
   "cat"
  ],
  "prefecture": "埼玉県",
  "area": "越谷",
  "address": "埼玉県越谷市弥生町3-43 プラザシティ越谷4F",
  "access": "東武スカイツリーライン 越谷駅東口から徒歩2分",
  "url": "https://catcafesakura.inagakiah.com/aboutus/",
  "price": "1時間1,100円（フリータイム2,200円）",
  "price_level": 2,
  "hours": "月〜木・土日12:00〜19:00（最終入店18:30）／金12:00〜17:00（最終入店16:30）",
  "closed": "なし（月〜日営業、金曜は短縮）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "駅近",
   "時間無制限プランあり"
  ],
  "description": "越谷駅から近い保護猫カフェの1号店で、2019年に開店した。保護猫の譲渡を目的に、成猫の魅力を伝える活動をしている。同じ通りの別ビルに2号店がある。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式サイト https://catcafesakura.inagakiah.com/aboutus/ と ご利用案内 https://catcafesakura.inagakiah.com/shopguidance/ で確認。予約の必要はない旨の記載（イベント時を除く）。営業曜日・時間は ご利用案内 https://catcafesakura.inagakiah.com/shopguidance/ の店舗別の表で確認（2026-11-07）"
 },
 {
  "id": "saitama-cat-hogoneco-sakura2",
  "name": "保護猫カフェさくら 2号店",
  "animals": [
   "cat"
  ],
  "prefecture": "埼玉県",
  "area": "越谷",
  "address": "埼玉県越谷市越ケ谷1丁目16-8 桧山店舗2F",
  "access": "東武スカイツリーライン 越谷駅東口から徒歩2分",
  "url": "https://catcafesakura.inagakiah.com/aboutus2/",
  "price": "1時間1,100円（フリータイム2,200円）",
  "price_level": 2,
  "hours": "12:00〜19:00（最終入店18:30）",
  "closed": "なし（月〜日営業）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "時間無制限プランあり"
  ],
  "description": "2021年に開店した保護猫カフェさくらの2号店だ。1号店と基本料金が同じで、成猫の譲渡を進める活動を支えている。越谷駅東口側にあり、駐車場は両店の買い物で無料時間が延びる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式サイト https://catcafesakura.inagakiah.com/aboutus2/ と ご利用案内 https://catcafesakura.inagakiah.com/shopguidance/ で確認。営業曜日・時間は ご利用案内 https://catcafesakura.inagakiah.com/shopguidance/ の店舗別の表で確認（2026-11-07）／検品⑥（2026-11-07）徒歩分数は2号店ページの見出しで確認"
 },
 {
  "id": "saitama-cat-porta-kawaguchi",
  "name": "保護猫カフェ Porta（ポルタ）",
  "animals": [
   "cat"
  ],
  "prefecture": "埼玉県",
  "area": "川口・安行",
  "address": "埼玉県川口市安行藤八273",
  "access": "川口市安行藤八（最寄駅は公式ページに記載なし。来店前に確認を）",
  "url": "https://www.nekonocafe.com/",
  "price": "大人1時間1,500円／子ども（小学生以下）1時間1,200円／延長30分ごとに600円／平日フリータイム4,000円",
  "price_level": 2,
  "hours": "11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "子ども可",
   "時間無制限プランあり"
  ],
  "description": "2023年春に開店した川口市の保護猫カフェで、40匹以上の保護猫がいる。2026年11月から予約不要になり、未就学児も入れる。敷地にはドッグランもあり、こちらは予約制だ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式サイト https://www.nekonocafe.com/ のトップ・ご利用ガイドで確認（住所・料金・営業時間・年中無休・予約不要は公式の記載）。2026年11月より予約不要と記載。最寄駅は公式に記載なし"
 },
 {
  "id": "saitama-cat-nyancy-shiki",
  "name": "猫カフェ ニャンシー",
  "animals": [
   "cat"
  ],
  "prefecture": "埼玉県",
  "area": "志木",
  "address": "埼玉県志木市本町5-23-7 第5ナカタビル3F",
  "access": "東武東上線 志木駅東口から徒歩2分",
  "url": "https://nyancy.com/new/",
  "price": "60分1,500円（学生1,200円・小学生まで1,000円）／90分1,900円／120分2,300円（120分以降はフリータイム）",
  "price_level": 2,
  "hours": "13:00〜18:30（日曜・祝日・月曜は18:30、水〜土曜は19:00閉店の掲載あり。最終入店18:00）",
  "closed": "基本は火曜（祝日は営業し、月曜か水曜に振替）",
  "reservation": "不要",
  "features": [
   "駅近",
   "時間無制限プランあり",
   "子ども可"
  ],
  "description": "志木駅東口から近い猫カフェで、猫が室内で自由に暮らしている。120分を超えると何時間いても120分料金で済む。夕方のナイトコースもある。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式サイト https://nyancy.com/new/ のトップ・お店紹介・料金メニュー(/price/)・アクセスで確認。予約の案内は記載なし。営業時間の閉店時刻はページにより表記が異なる"
 },
 {
  "id": "niigata-cat-oppo",
  "name": "里親さがし猫カフェ おっぽ",
  "animals": [
   "cat"
  ],
  "prefecture": "新潟県",
  "area": "新潟・万代",
  "address": "新潟県新潟市中央区三和町1-27",
  "access": "新潟市中央区三和町（最寄駅は公式ページに記載なし。来店前に確認を）",
  "url": "https://satooyasagashinecocafe-oppo.com/",
  "price": "30分500円／60分1,000円／90分1,500円／フリータイム2,000円",
  "price_level": 1,
  "hours": "11:00〜18:00（最終入店16:45）。10〜4月の平日は18:30閉店の案内あり",
  "closed": "水曜・木曜（臨時休業あり）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "時間無制限プランあり"
  ],
  "description": "里親探しを目的にした新潟市の猫カフェで、2016年に開店した。小部屋に分かれ、15分ごとの入れ替え待機制のプランがある。料金は1時間1,000円と手頃だ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式サイト https://satooyasagashinecocafe-oppo.com/ のトップ・about(/about/)で確認。予約の案内は記載なし。最終更新の告知は2026-01"
 },
 {
  "id": "niigata-cat-nekomeikan",
  "name": "ねこカフェ 猫鳴館",
  "animals": [
   "cat"
  ],
  "prefecture": "新潟県",
  "area": "新潟・亀田",
  "address": "新潟県新潟市江南区亀田緑町1-1-6",
  "access": "信越本線 亀田駅から徒歩12分",
  "url": "https://nekomeikan.amebaownd.com/",
  "price": "平日60分1,200円／90分1,600円／120分2,000円／土日祝60分1,400円／90分1,900円／120分2,300円（中学生は平日60分900円）",
  "price_level": 2,
  "hours": "11:00〜20:00（最終入館19:00）",
  "closed": "水曜日（ほかに月ごとの休館日あり。公式の月別お知らせで案内）",
  "reservation": "不要",
  "features": [
   "子ども可"
  ],
  "description": "レトロで落ち着いた雰囲気の店内に、ブリティッシュショートヘアやミヌエット、ペルシャなど猫種の違う猫が暮らす猫カフェだ。貸切は平日限定で事前予約が必要だ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式サイト https://nekomeikan.amebaownd.com/ のトップと料金ページで確認。休館日は月ごとのお知らせ・カレンダーで案内。通常利用の予約の案内は記載なし／検品⑥（2026-11-07）休館日は公式の月別お知らせ（2026年5〜10月）で確認"
 },
 {
  "id": "nagano-cat-nekocafe-naru",
  "name": "ねこカフェなる",
  "animals": [
   "cat"
  ],
  "prefecture": "長野県",
  "area": "長野市・南長野",
  "address": "長野県長野市南長野新田町1464-3 しまんりょビル3F",
  "access": "長野市南長野新田町（最寄駅は公式ページに記載なし。来店前に確認を）",
  "url": "https://nekocafe76.amebaownd.com/",
  "price": "入店料1,640円（フリータイム）。別途ドリンク",
  "price_level": 3,
  "hours": "平日11:00〜18:00（最終入店17:00）／土日祝11:00〜19:00（最終入店18:00）",
  "closed": "木曜（祝日も含む）＋不定休",
  "reservation": "不要",
  "features": [
   "時間無制限プランあり"
  ],
  "description": "長野市中心部のビルにある猫カフェで、入店料を払えば時間を気にせず過ごせるフリータイム制だ。猫が複数種いて、靴下の着用が必要で、持ち合わせがなければ店頭で購入できる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式サイト https://nekocafe76.amebaownd.com/ のトップ・プロフィール・営業のご案内ページで確認（住所は公式ページの記載、入店料1,640円は公式トップの記載）。予約の案内は記載なし。頭数・最寄駅は公式に記載なし／検品⑥（2026-11-07）入店料1,640円＋ドリンク別で2,000円を超える見込みのため3"
 },
 {
  "id": "nagano-cat-nekocafe-mimi",
  "name": "ねこカフェ mimi",
  "animals": [
   "cat"
  ],
  "prefecture": "長野県",
  "area": "長野市・篠ノ井",
  "address": "長野県長野市合戦場1丁目129番地1",
  "access": "JR篠ノ井駅から徒歩約22分",
  "url": "https://catcafe-mimi.com/",
  "price": "1時間コース 大人1,200円（中高生1,000円）／2時間コース 大人1,400円（ポイントカード会員は割引あり）",
  "price_level": 2,
  "hours": "平日・祝日14:30〜18:00／土日11:00〜18:00",
  "closed": "月・水・金曜",
  "reservation": "不要",
  "features": [],
  "description": "11匹のシニア猫が暮らす長野市の猫カフェだ。ポイントカードの枚数で料金が下がる会員制度がある。予約制ではないが、臨時で営業時間が変わる日がある。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式サイト https://catcafe-mimi.com/ のトップ・料金＆メニュー(/menu)で確認（料金は一般会員の大人料金）。当店は予約制ではない旨の記載あり／検品⑥（2026-11-07）最長2時間コースのため「時間無制限プランあり」を外した"
 },
 {
  "id": "shizuoka-cat-nekoyadocho",
  "name": "保護猫カフェ 猫宿町",
  "animals": [
   "cat"
  ],
  "prefecture": "静岡県",
  "area": "静岡市・七間町",
  "address": "静岡県静岡市葵区七間町16-7 OMACHIビル3階",
  "access": "静岡市葵区七間町（最寄駅の記載なし。公式ページに記載なし）",
  "url": "https://an-an-hospital.com/neko-yado-cho/",
  "price": "平日 入店660円＋30分ごと770円（1時間2,200円。フリードリンク込み）／平日12〜17時フリータイム3,300円／土日祝は入店770円",
  "price_level": 3,
  "hours": "平日10:00〜18:00（最終17:00）／土日祝10:00〜14:00・15:00〜19:00の入れ替え制",
  "closed": "年中無休（臨時休業は公式のInstagram・HPで案内）",
  "reservation": "推奨",
  "features": [
   "保護動物",
   "里親募集",
   "ドリンク込み",
   "時間無制限プランあり"
  ],
  "description": "動物病院が運営する静岡市中心部の保護猫カフェだ。ドリンクは料金に含まれ、平日の午後にはフリータイムもある。予約優先の入店になるため、事前に電話するとよい。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式サイト https://an-an-hospital.com/neko-yado-cho/ とご利用方法・料金体系ページ(/price/)で確認。予約優先（電話予約を勧める）。診察券持参で110円引き"
 },
 {
  "id": "kanagawa-cat-cokkun-ebina",
  "name": "猫カフェ コックンの別荘 海老名ビナウォーク店",
  "animals": [
   "cat"
  ],
  "prefecture": "神奈川県",
  "area": "海老名",
  "address": "神奈川県海老名市中央1-4-1 海老名ビナウォーク5番館3階",
  "access": "小田急小田原線・相鉄線・JR相模線 海老名駅から徒歩1分",
  "url": "https://cokkun-cafe.com/shops/%E6%B5%B7%E8%80%81%E5%90%8D%E3%83%93%E3%83%8A%E3%82%A6%E3%82%A9%E3%83%BC%E3%82%AF%E5%BA%97",
  "price": "入園30分700円（以降10分250円）＋ドリンク380円（必須）。最大料金 平日 大人2,400円・子ども1,450円／土日祝 大人2,900円・子ども1,900円",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "ビナウォークの休館日に準ずる",
  "reservation": "不要",
  "features": [
   "駅近",
   "子ども可"
  ],
  "description": "海老名駅から徒歩1分の商業施設内にある猫カフェで、Moffグループが運営する。予約なしで入れ、3歳以下は入園無料だ。小学生以下は18歳以上の同伴者が必要になる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式（Moffグループ）の店舗ページ https://cokkun-cafe.com/shops/…海老名ビナウォーク店 で住所・料金・営業時間・予約不要を確認"
 },
 {
  "id": "tochigi-cat-nekobiyori-oyama",
  "name": "猫カフェ 猫日和",
  "animals": [
   "cat"
  ],
  "prefecture": "栃木県",
  "area": "小山",
  "address": "栃木県小山市犬塚4-16-8",
  "access": "小山市犬塚（最寄駅は公式ページに記載なし。来店前に確認を）。駐車場6台",
  "url": "https://neco-cafe.wixsite.com/necobiyori",
  "price": "最初の1時間1,200円（土日祝1,300円）／以降15分ごとに300円。ソフトドリンク100円〜",
  "price_level": 2,
  "hours": "水・土・祝12:00〜18:00／日曜11:00〜19:00（最終入店は閉店の1時間前）",
  "closed": "月・火・木・金曜（祝日は営業）",
  "reservation": "不要",
  "features": [
   "抱っこOK",
   "子ども可"
  ],
  "description": "マンチカンを中心に30匹以上の猫がおり、常に子猫がいる小山市の猫カフェだ。畳敷きの自宅風の空間でくつろげる。ブリーダー業を併設しており、子猫の販売も行う店である。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式サイト https://neco-cafe.wixsite.com/necobiyori のトップと料金システムページで確認。予約の案内は記載なし。ブリーダー併設のため掲載可否はリーダー判断（リーダー指示により採用）"
 },
 {
  "id": "tochigi-cat-hidamari-nekosabou",
  "name": "ひだまり猫茶房",
  "animals": [
   "cat"
  ],
  "prefecture": "栃木県",
  "area": "日光・土沢",
  "address": "栃木県日光市土沢1813-22",
  "access": "日光市土沢（最寄駅は公式ページに記載なし。来店前に確認を）",
  "url": "https://hidamarinekosabou.jimdofree.com/",
  "price": "60分1,200円（ワンドリンク付き）／延長30分600円",
  "price_level": 2,
  "hours": "11:00〜18:00（最終受付17:00）",
  "closed": "火曜・水曜",
  "reservation": "推奨",
  "features": [
   "ドリンク込み",
   "抱っこOK",
   "子ども可"
  ],
  "description": "日光市土沢の猫カフェで、ブリーダーが直営している。受付は60分単位で、ワンドリンクが付く。抱っこは自由だが、立ったまま移動するのは控えるよう案内されている。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式サイト https://hidamarinekosabou.jimdofree.com/ のトップと猫カフェページで確認。予約は電話で受付、必須ではない旨の記載。ブリーダー直営のため掲載可否はリーダー判断（リーダー指示により採用）"
 },
 {
  "id": "osaka-cat-cattail-shinsaibashi",
  "name": "猫カフェCat tail 大阪心斎橋本店",
  "animals": [
   "cat"
  ],
  "prefecture": "大阪府",
  "area": "心斎橋",
  "address": "大阪府大阪市中央区西心斎橋2丁目7-25 竹内ビル2F",
  "access": "地下鉄御堂筋線 心斎橋駅7番出口から徒歩5分／難波駅25番出口から徒歩5分",
  "url": "https://cattail.jp/",
  "price": "60分1,500円（会員1,400円）、90分1,900円、120分2,350円、180分3,050円",
  "price_level": 2,
  "hours": "11:30〜20:30（LO19:30）",
  "closed": "無休（公式の11月案内による）",
  "reservation": "推奨",
  "features": [
   "駅近",
   "写真OK"
  ],
  "description": "アメリカ村の近く、ビルの2階にある独立系の猫カフェ。玄関で靴を脱いで上がる家のような作りで、人なつこい猫が多いと店は案内している。8歳未満は入店できず、大人が落ち着いて過ごしたい人向けだ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "料金・営業時間 https://cattail.jp/ と https://cattail.jp/system/ 、住所・アクセス https://cattail.jp/shop/ で確認。予約なしでも入店可だが、土日祝・遠方・4名以上は予約を勧める旨の記載あり。税込表記・猫の頭数は公式ページに記載なし。"
 },
 {
  "id": "osaka-cat-gurugurudo-nakazakicho",
  "name": "猫カフェ ぐるぐる堂 中崎町店",
  "animals": [
   "cat"
  ],
  "prefecture": "大阪府",
  "area": "中崎町・梅田",
  "address": "大阪府大阪市北区中崎西1丁目6-25",
  "access": "大阪メトロ谷町線 中崎町駅4番出口から徒歩3分",
  "url": "https://www.umedacatcafe.com/",
  "price": "60分1,650円（税込・猫のおやつ付き）、平日限定の時間無制限2,750円（税込）",
  "price_level": 2,
  "hours": "11:00〜20:00",
  "closed": "年末年始（猫の体調により臨時休業あり）",
  "reservation": "不要",
  "features": [
   "駅近"
  ],
  "description": "中崎町の古い民家を改修した、エスニックな雰囲気の猫カフェ。料金に猫のおやつが付き、30分延長が無料になるカップル向けのデートプランなどもある。子ども向けの託児所風ではなく、大人がひとりでも過ごせる静かな空気を売りにしている。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "料金・営業時間・定休日 https://www.umedacatcafe.com/ 、住所・アクセス https://www.umedacatcafe.com/access/ で確認。営業時間は公式表記が「11am～20pm」。サイトの新着情報の最新は2025-07。猫の頭数は公式ページに記載なし。"
 },
 {
  "id": "osaka-cat-nearnya-umeda",
  "name": "猫カフェにあにゃあ",
  "animals": [
   "cat"
  ],
  "prefecture": "大阪府",
  "area": "梅田",
  "address": "大阪府大阪市北区芝田2丁目8-11 共栄ビル601",
  "access": "阪急大阪梅田駅から徒歩5分／JR大阪駅から徒歩7分",
  "url": "https://nearnya.com/",
  "price": "1時間1,700円〜（利用時間で変わる、現金のみ）",
  "price_level": 2,
  "hours": "11:00〜20:00（最終入店19:00）",
  "closed": "木曜",
  "reservation": "不要",
  "features": [
   "駅近"
  ],
  "description": "阪急梅田駅からすぐ、茶屋町口の近くにある猫カフェ。22匹ほどの猫がいて、以前は一人客専用の店だったこともあり今もひとりで来る客が多い。定員は10名と小さく、抱っこはできないが膝に乗ってきた猫は撫でられる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "料金 https://nearnya.com/qa （よくある質問に「1時間1,700円から」とあり）、営業時間・住所 https://nearnya.com/shop/ で確認。税込表記は公式ページに記載なし。未就学児は入店不可。1日フリーパスは公式オンラインショップで販売。"
 },
 {
  "id": "osaka-cat-catspace-nakazakicho",
  "name": "保護猫カフェ Cat Space",
  "animals": [
   "cat"
  ],
  "prefecture": "大阪府",
  "area": "中崎町・天神橋筋六丁目",
  "address": "大阪府大阪市北区黒崎町6-25",
  "access": "大阪メトロ谷町線 中崎町駅1番出口から徒歩6分／天神橋筋六丁目駅13番出口から徒歩5分",
  "url": "https://cat-space.com/",
  "price": "1時間2,000円（1ドリンク・猫のおやつ・おもちゃ付き）、30分延長は会員500円・一般1,000円",
  "price_level": 2,
  "hours": "12:00〜20:00（最終受付19:00）",
  "closed": "木曜（祝日は営業）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "ドリンク込み"
  ],
  "description": "中崎町寄りの住宅街にある、里親探しが目的の保護猫カフェ。保護された猫が店内で暮らし、公式サイトでは里親募集の猫や卒業した猫を毎週のように紹介している。料金にドリンクとおやつが含まれ、里親を考える人もゆっくり猫を見られる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "料金は公式の料金ページ https://cat-space.com/ryoukin/ の料金画像（2026年8月〜）を読み取り、営業時間・定休日・住所は https://cat-space.com/ で確認。公式ブログは2026-11-05更新。税込表記は記載なし。6歳未満は入店不可。予約はLINE、予約なしでも利用可と案内。"
 },
 {
  "id": "osaka-cat-savecatcafe-tenjinbashi",
  "name": "SAVE CAT CAFE",
  "animals": [
   "cat"
  ],
  "prefecture": "大阪府",
  "area": "天神橋",
  "address": "大阪府大阪市北区天神橋5丁目7-8 山田ビル2階",
  "access": "JR天満駅から徒歩3分／地下鉄堺筋線 扇町駅1番出口から徒歩5分／谷町線 天神橋筋六丁目駅12番出口から徒歩5分",
  "url": "https://www.savecatcafe.net/",
  "price": "ドリンク付きで90分1,800円（お試し60分1,600円、延長20分500円）",
  "price_level": 2,
  "hours": "火〜金 12:00〜21:00／土日祝 12:00〜20:00（最終入店19:00）",
  "closed": "月曜（祝日は変更の場合あり）",
  "reservation": "推奨",
  "features": [
   "保護動物",
   "里親募集",
   "ドリンク込み"
  ],
  "description": "2015年に始まった保護猫カフェで、標準が90分制なのが特徴だ。客ごとに飲食用の席があり、満席でも人数を絞るので猫と席取りで争わずに済む。ネコ型のカレーやケーキのセットも出す。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "料金は公式メニューページ https://www.savecatcafe.net/メニュー/ のメニュー画像を読み取り、営業時間・予約方法は https://www.savecatcafe.net/ と /カフェについて/ で確認。予約優先制（空きがあれば予約なしも可、LINE・電話）。10歳以上限定。住所の番地と最寄駅は公式本文に記載が見つからなかった。／検品⑥（2026-11-07）住所・最寄駅は公式の店舗詳細ページで確認"
 },
 {
  "id": "osaka-cat-morinonekoya-awaji",
  "name": "森のねこ舎",
  "animals": [
   "cat"
  ],
  "prefecture": "大阪府",
  "area": "淡路",
  "address": "大阪府大阪市東淀川区淡路3丁目20番16号",
  "access": "阪急淡路駅から徒歩5分",
  "url": "https://morinonekoya.com/",
  "price": "1時間1,200円（税込）、30分700円、延長30分500円。ドリンク+200円",
  "price_level": 2,
  "hours": "平日 13:00〜20:00／土日祝 11:00〜20:00（最終入店19:00）",
  "closed": "火曜・水曜",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "駅近",
   "貸切可"
  ],
  "description": "阪急淡路駅から商店街を抜けた先にある保護猫カフェで、2017年開店。野良や多頭崩壊から保護された猫が20匹前後暮らし、里親希望者の来店も歓迎している。平日は3時間2,500円（ワンドリンク付き）のパックがあり、団体貸切も受ける。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "料金 https://morinonekoya.com/fee02.html 、営業時間・住所・休み https://morinonekoya.com/fee02.html とトップ https://morinonekoya.com/ で確認。お知らせの最新は2026-10-30（9周年）。貸切は平日限定で団体は1週間前までの予約。"
 },
 {
  "id": "osaka-cat-neu-tanimachi6",
  "name": "保護猫とVeganカフェ neu.（ネウ）",
  "animals": [
   "cat"
  ],
  "prefecture": "大阪府",
  "area": "谷町六丁目",
  "address": "大阪府大阪市中央区谷町6丁目17-5",
  "access": "地下鉄長堀鶴見緑地線 松屋町駅から徒歩5分／谷町線 谷町六丁目駅から徒歩8分",
  "url": "https://neu-catcafe.com/",
  "price": "1時間1,800円（会員1,500円）、延長15分300円",
  "price_level": 2,
  "hours": "平日 12:00〜21:00／土日祝 12:00〜19:00（フードLO16:00）",
  "closed": "不定休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集"
  ],
  "description": "谷町六丁目の路地裏にある、保護猫とヴィーガン料理の店。猫の部屋は別料金で、入るときは靴下着用など衛生面の決まりが細かい。里親希望者には説明の時間を取るので、事前連絡があると助かるとのことだ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "料金 https://neu-catcafe.com/price 、住所・アクセス https://neu-catcafe.com/access 、営業時間はトップ https://neu-catcafe.com/ で確認。猫ルームは予約不可で直接来店。お知らせの最新は2026-04-22。税込表記は記載なし。"
 },
 {
  "id": "kyoto-cat-fluffys-cafe-kawaramachi",
  "name": "Fluffy's cafe（ふるふぃーずカフェ）",
  "animals": [
   "cat"
  ],
  "prefecture": "京都府",
  "area": "河原町・四条",
  "address": "京都府京都市中京区蛸薬師通り新京極東入る裏寺町595-3",
  "access": "京都河原町駅から徒歩5分",
  "url": "https://balu.jp/",
  "price": "平日60分1,800円・90分2,600円（税込・ドリンク別）、土日祝60分1,950円。ワンドリンク350円〜が別途必要",
  "price_level": 3,
  "hours": "平日 11:30〜19:00（LO18:20）／土日祝 11:30〜20:00（LO19:20）",
  "closed": "不定休（3か月に1回程度、事前告知）",
  "reservation": "不要",
  "features": [
   "駅近",
   "子ども可"
  ],
  "description": "新京極のそばにある2フロアの猫カフェで、マンチカンやスコティッシュ、メインクーンなど17匹ほどが猫スタッフとして在籍する。店は子猫の販売も併設しているが、入場料を払って猫と過ごすカフェ利用ができる。年齢制限はなく、12歳以下は保護者の同伴が必要だ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "料金は公式トップ https://balu.jp/ の料金プラン画像の説明文（alt）で確認、営業時間・住所は同トップ。ドリンクを頼まない場合も基本料金350円がかかる。土日祝は予約1組4名まで・混雑時は開始が遅れる旨の記載あり。予約の要否は公式ページに記載なし（予約は可）。お知らせの最新は2026-11-01。"
 },
 {
  "id": "kyoto-cat-catseye-kawaramachi-marutamachi",
  "name": "猫カフェギャラリー Cat's EYE（キャッツ・アイ）",
  "animals": [
   "cat"
  ],
  "prefecture": "京都府",
  "area": "河原町丸太町",
  "address": "京都府京都市上京区信富町325-2 吉成ビル3F",
  "access": "京阪神宮丸太町駅から徒歩約5分／市バス河原町丸太町バス停前",
  "url": "https://catseye-kyoto.com/index.html",
  "price": "1時間1,500円（1ドリンク付き）、以降30分500円、追加ドリンク100円",
  "price_level": 2,
  "hours": "13:00〜18:00",
  "closed": "火曜・水曜（祝日の場合は木曜）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "ドリンク込み",
   "写真OK"
  ],
  "description": "京都御所の東、河原町丸太町の角にある小さな猫カフェギャラリー。猫はすべて保護猫で人なつこい子が多く、壁には絵画などの美術品が並ぶ。南向きの大きな窓があり、冬は猫が日向ぼっこをする。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "料金 https://catseye-kyoto.com/system.html 、営業時間・住所・アクセス https://catseye-kyoto.com/index.html で確認（ページの更新日時ヘッダは猫スタッフ頁2026-11-06・料金頁2025-09）。予約の案内は公式ページに記載なし。お知らせ頁がサーバーエラーで読めず日付での確認は未実施。"
 },
 {
  "id": "hyogo-cat-caro-akashi",
  "name": "保護猫カフェ・カーロ",
  "animals": [
   "cat"
  ],
  "prefecture": "兵庫県",
  "area": "明石",
  "address": "兵庫県明石市本町2-5-14 浜谷ビル2F",
  "access": "公式ページに記載なし（来店前に確認を）",
  "url": "https://nekocafe-caro.com/",
  "price": "1.5時間1,500円（猫のおやつまたは1ドリンク付）、3時間2,800円。祝日は1時間1,000円（おやつなし）",
  "price_level": 2,
  "hours": "13:00〜20:30（最終入店19:00）／祝日は13:00〜19:00（最終入店18:00）",
  "closed": "火・水・木曜（祝日は営業）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "写真OK"
  ],
  "description": "明石市の雑居ビル2階にある保護猫カフェ。里親を探す保護猫が暮らす部屋で、時間制で過ごす。9歳未満は入店できず、小中学生だけの来店も不可という、猫の負担を優先した運営だ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "料金 https://nekocafe-caro.com/price/ ・店舗情報 https://nekocafe-caro.com/shop/ で確認（トップに11/8臨時休業のお知らせあり）。最寄駅・予約の案内は記載なし"
 },
 {
  "id": "hyogo-cat-calico-akashi",
  "name": "Cafe calico（カフェ カリコ）",
  "animals": [
   "cat"
  ],
  "prefecture": "兵庫県",
  "area": "明石・魚住",
  "address": "兵庫県明石市魚住町中尾277-9",
  "access": "山陽電車 西江井ヶ島駅から徒歩4分",
  "url": "https://cafecalico.net/",
  "price": "にゃんこルーム30分500円（税別）、延長30分ごとに500円、最大1時間まで",
  "price_level": 2,
  "hours": "10:00〜18:00",
  "closed": "火曜",
  "reservation": "推奨",
  "features": [
   "保護動物",
   "里親募集",
   "駅近"
  ],
  "description": "猫の部屋とカフェスペースをガラスで分けた保護猫カフェ。にゃんこルームの利用料は保護猫のためのチャリティとして払う形で、猫を迎えたい人の予約が優先される。小学生未満は入室できない。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "トップ https://cafecalico.net/ ・はじめての方へ https://cafecalico.net/guidance/ で確認（2026-09-22の営業のお知らせあり）。料金は税別表記"
 },
 {
  "id": "hyogo-cat-nyanyanomori-okamoto",
  "name": "保護猫カフェ ニャーニャの森",
  "animals": [
   "cat"
  ],
  "prefecture": "兵庫県",
  "area": "神戸・岡本",
  "address": "兵庫県神戸市東灘区岡本3丁目7-9 ラヴィール岡本B1",
  "access": "阪急岡本駅・JR摂津本山駅から徒歩10分",
  "url": "https://catcafekobeokamoto.fc2.net/",
  "price": "60分1,400円（30分1,000円、90分1,700円、120分2,000円）",
  "price_level": 2,
  "hours": "13:00〜20:00（最終入店19:30）／火曜は14:00〜19:00（最終入店18:30）",
  "closed": "月曜・金曜（火曜休みの日もあり）",
  "reservation": "推奨",
  "features": [
   "保護動物",
   "里親募集"
  ],
  "description": "神戸・岡本のビル地下にある、里親募集型の保護猫カフェ。お店のスタッフ猫と里親を探す猫がいて、時間制で過ごす。土日祝は混む時間帯があり、予約すると待たずに入れる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "営業案内 https://catcafekobeokamoto.fc2.net/blog-entry-113.html（2026-08-19更新）と店のブログ（2026-11-02投稿）で確認"
 },
 {
  "id": "hyogo-cat-nekonoya-oden-kobe",
  "name": "猫カフェ 猫の屋おでん",
  "animals": [
   "cat"
  ],
  "prefecture": "兵庫県",
  "area": "神戸・灘",
  "address": "兵庫県神戸市灘区（バス停「天城通2丁目」下車すぐ。番地は公式ページに記載なし）",
  "access": "阪急王子公園駅から徒歩10分／JR摩耶駅から徒歩15分",
  "url": "http://nekonoya-oden.com/",
  "price": "1時間1,430円（税込）、30分990円（平日のみ）、1時間30分1,980円、2時間2,530円、以降30分ごとに550円",
  "price_level": 2,
  "hours": "公式ページに記載なし（来店前に確認を）",
  "closed": "火曜・水曜（祝日は営業）",
  "reservation": "推奨",
  "features": [
   "保護動物",
   "里親募集"
  ],
  "description": "神戸の山手にある白い建物の2階がふれあいスペースの猫カフェ。時間制で店内の定員を絞っており、予約が優先される。保護猫の譲渡会や里親相談にも取り組み、中学生以上（保護者同伴）から入れる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "システム http://nekonoya-oden.com/system/（料金は公式の料金画像を読み取り）、トップ http://nekonoya-oden.com/（2026-08のお知らせあり）で確認。営業時間・番地は公式に記載なし"
 },
 {
  "id": "hyogo-cat-hinatabokko-nishinomiya",
  "name": "猫カフェ ひなたぼっこ",
  "animals": [
   "cat"
  ],
  "prefecture": "兵庫県",
  "area": "西宮・甲子園口",
  "address": "兵庫県西宮市甲子園口2丁目4-18",
  "access": "JR甲子園口駅（南出口）から",
  "url": "https://cafe.neko-hinata.com/",
  "price": "平日1時間1,500円・土日祝1時間1,800円（猫のおやつ付）、延長1時間1,200円、平日限定フリータイム2,500円",
  "price_level": 2,
  "hours": "平日13:00〜22:00／土日祝12:00〜22:00",
  "closed": "火曜（祝日は営業）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "時間無制限プランあり",
   "貸切可"
  ],
  "description": "ロシアンブルーを中心に約30頭の猫が暮らす、甲子園口の猫カフェ。平日限定のフリータイムや貸切の料金も用意されている。19時以降は予約制になる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "料金 https://cafe.neko-hinata.com/price ・アクセス https://cafe.neko-hinata.com/access で確認（トップに2026-10の更新あり）。駅からの徒歩分数は記載なし"
 },
 {
  "id": "hyogo-cat-lazonya-nishinomiya",
  "name": "保護猫カフェ ラゾーニャ",
  "animals": [
   "cat"
  ],
  "prefecture": "兵庫県",
  "area": "西宮北口",
  "address": "兵庫県西宮市高木西町1-4",
  "access": "阪急西宮北口駅 北東出口から徒歩5分",
  "url": "https://lazonya.shopinfo.jp/",
  "price": "30分1,000円（ミニおやつ付）、1時間1,500円、15分延長250円",
  "price_level": 2,
  "hours": "14:00〜21:00（キャットルームは前日までの予約で11:30から利用可、最終受付20:00）",
  "closed": "火曜・水曜・猫の体調による不定休",
  "reservation": "推奨",
  "features": [
   "保護動物",
   "里親募集",
   "駅近"
  ],
  "description": "完全入れ換え制の保護猫カフェで、ほかの客と同席せず猫と過ごせる。カフェルームとキャットルームは分かれており、カフェだけの利用もできる。里親は随時募集している。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店紹介 https://lazonya.shopinfo.jp/pages/3242403/static で確認（ブログ2026-09-29更新）。予約は優先扱い"
 },
 {
  "id": "nara-cat-cocone-nara",
  "name": "Cat cafe 心猫（ここね）",
  "animals": [
   "cat"
  ],
  "prefecture": "奈良県",
  "area": "奈良市・近鉄奈良",
  "address": "奈良県奈良市小西町5 アルテ館2F",
  "access": "近鉄奈良駅から徒歩4分",
  "url": "http://www.catcafe-cocone.com/",
  "price": "平日1時間1,650円（税込・ワンドリンク付）、土日祝1時間1,980円。30分のみなら平日800円・土日祝1,000円（税別・ドリンクなし）",
  "price_level": 2,
  "hours": "11:00〜19:00（最終受付18:00）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "駅近",
   "ドリンク込み",
   "写真OK"
  ],
  "description": "近鉄奈良駅の近く、商業ビル2階にある和の雰囲気の猫カフェ。20匹以上の猫が在籍し、1時間コースはドリンクを選べる。抱っこや追いかけは禁止で、8歳以上から入れる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "トップ・料金ページ http://www.catcafe-cocone.com/menu で確認（ページ更新日 2026-04）。税別価格と、よくある質問の税込目安を併記"
 },
 {
  "id": "nara-cat-hanagoromo-nara",
  "name": "猫喫茶 花衣（ハナゴロモ）",
  "animals": [
   "cat"
  ],
  "prefecture": "奈良県",
  "area": "奈良市・JR奈良",
  "address": "奈良県奈良市西木辻町37-5",
  "access": "JR奈良駅から徒歩約10分",
  "url": "https://www.nekohanagoromo.com/",
  "price": "60分1,500円（ドリンク付）、30分1,000円（ドリンクなし）、90分2,000円、120分2,500円、フリータイム3,000円。小学生以下は300円引",
  "price_level": 2,
  "hours": "平日11:00〜19:00（最終来店18:00）／土日祝11:00〜20:00（最終来店19:00）",
  "closed": "水曜",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "時間無制限プランあり",
   "子ども可"
  ],
  "description": "JR奈良駅から歩ける距離の、桜の木の下をイメージした猫カフェ。60分以上のコースはワンドリンク付きで、フリータイムもある。予約は電話で受け付けている。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "料金 https://www.nekohanagoromo.com/menu/ ・店舗情報 https://www.nekohanagoromo.com/information/ で確認（お知らせ2026-11-02）。税込表記は記載なし／検品⑥（2026-11-07）公式に「必ずしも予約が必要ではない。直接の来店も可能」とあり、勧める文言がないため不要"
 },
 {
  "id": "wakayama-cat-nekochan-no-ie-wakayama",
  "name": "ねこカフェ 猫ちゃんの家",
  "animals": [
   "cat"
  ],
  "prefecture": "和歌山県",
  "area": "和歌山市・関戸",
  "address": "和歌山県和歌山市関戸2-12-21",
  "access": "公式ページに記載なし（来店前に確認を）",
  "url": "https://nekocyannoie.amebaownd.com/",
  "price": "お一人様2時間1,000円（学生・子どもも同額）",
  "price_level": 1,
  "hours": "13:00〜15:00／15:30〜17:30（2部入れ替え制）",
  "closed": "不定休",
  "reservation": "推奨",
  "features": [
   "保護動物",
   "里親募集",
   "子ども可"
  ],
  "description": "行政施設から預かった猫の人馴れと譲渡に取り組む、和歌山市の猫カフェ。人の飲食物の提供はなく、2部の入れ替え制で猫と過ごす。営業日は不定休なので予約が勧められている。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "トップ https://nekocyannoie.amebaownd.com/（2026-07-14更新）で確認。最寄駅の記載なし"
 },
 {
  "id": "shiga-cat-nyanshouse-nagahama",
  "name": "里親探しの猫カフェ にゃんずはうす",
  "animals": [
   "cat"
  ],
  "prefecture": "滋賀県",
  "area": "長浜",
  "address": "滋賀県長浜市八幡中山町295 3階",
  "access": "JR長浜駅からバスで約7分、「長浜警察署前」下車",
  "url": "https://nyans-house.com/",
  "price": "大人1時間1,200円（1ドリンク付）、学生以下1時間1,000円、延長10分200円",
  "price_level": 2,
  "hours": "10:00〜18:00",
  "closed": "火・水・木曜",
  "reservation": "必須",
  "features": [
   "予約制",
   "保護動物",
   "里親募集",
   "ドリンク込み"
  ],
  "description": "ビル3階にある、保護猫の里親探しをする猫カフェ。1日の人数を5名までに絞った完全予約制で、膝に乗ってきた猫をなでるのはよいが、抱きかかえるのは控える決まりだ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "サービス https://nyans-house.com/service/ ・当店について https://nyans-house.com/about/ ・FAQ https://nyans-house.com/faq/ で確認（お知らせ2026-10-28）"
 },
 {
  "id": "shiga-cat-nicono-shippo-yasu",
  "name": "neko+cafe ニコノシッポ",
  "animals": [
   "cat"
  ],
  "prefecture": "滋賀県",
  "area": "野洲",
  "address": "滋賀県野洲市北櫻243-2",
  "access": "公式ページに記載なし（来店前に確認を）",
  "url": "https://nicono-shippo.studio.site/",
  "price": "ワンオーダー制（ドリンク650円〜、税込。入場料の記載なし）",
  "price_level": 1,
  "hours": "10:00〜17:00",
  "closed": "営業は金・土・日・祝のみ",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集"
  ],
  "description": "近江富士の麓にある、看板猫と保護猫がいる古民家カフェ。ワンオーダー制で売上の一部を保護猫活動に充て、予約は不要だ。混むと1時間半を目安に席を譲る仕組みで、支払いは現金のみである。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式サイト https://nicono-shippo.studio.site/（里親募集の掲載 2026-08-11）で確認。入場料の記載はなく、ワンオーダー制のドリンク価格を記載。最寄駅の記載なし"
 },
 {
  "id": "aichi-cat-hemingway-chikusa",
  "name": "保護猫カフェ Hemingway（ヘミングウェイ）",
  "animals": [
   "cat"
  ],
  "prefecture": "愛知県",
  "area": "千種・今池",
  "address": "愛知県名古屋市千種区今池4丁目16-27 くどうビル4F",
  "access": "地下鉄今池駅4番出口から徒歩3分",
  "url": "https://kurashisha.net/hemingway/what_hemingway/",
  "price": "1時間1,300円（税込・1ドリンク付き。18歳未満・学生は1,100円）、以後30分ごとに500円",
  "price_level": 2,
  "hours": "月・水・木 13:00〜18:00／土・日・祝 11:00〜18:00（最終受付17:30）",
  "closed": "火・金（祝日は営業）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "駅近",
   "ドリンク込み",
   "子ども可",
   "写真OK"
  ],
  "description": "今池のビル4階にある保護猫カフェで、NPO法人が保護している譲渡可能な猫たちと過ごせる。猫部屋は靴下着用とフラッシュ撮影禁止などのルールがあり、無理に抱っこしないよう案内されている。里親を探す猫を見に行く入口としても使える。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://kurashisha.net/hemingway/servies/ （料金・営業時間・定休日）、/access/ （住所・駅）、トップの2025年9月定休日変更のお知らせで確認。予約の案内なし→不要"
 },
 {
  "id": "aichi-cat-nekoya-midori",
  "name": "Cats House ねこや（アレルギーの出にくい猫カフェ）",
  "animals": [
   "cat"
  ],
  "prefecture": "愛知県",
  "area": "緑区・亀が洞",
  "address": "愛知県名古屋市緑区亀が洞1-404",
  "access": "地下鉄桜通線 徳重駅から徒歩8分",
  "url": "https://r.goope.jp/nekoya/",
  "price": "最初の30分1,000円（税込1,100円・フリードリンク付き）、以後10分220円。平日最大3,300円、土日祝指定日は最大3,850円",
  "price_level": 2,
  "hours": "11:30〜19:00（金・土は〜20:00、最終受付は閉店30分前）",
  "closed": "木曜（祝日の特定日は営業）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "子ども可",
   "写真OK"
  ],
  "description": "緑区にある、猫アレルギーが出にくいよう香料などに配慮した猫カフェ。フリードリンク付きの時間制で、手洗いと靴の履き替えをして入る。猫は人に慣れた子が多く、触れ合い方はスタッフが案内する。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://r.goope.jp/nekoya/info ・/about （住所・営業時間）、/free/menu の料金画像（nekoya-menu-2026.png）を読み取り。2026年9月に営業時間変更の告知あり（詳細は画像内で未確認）。最寄り駅の記載なし。受付終了間際・遠方・大人数は予約可→不要／検品⑥（2026-11-07）最寄駅は公式 about ページで確認"
 },
 {
  "id": "aichi-cat-nekomanma-showa",
  "name": "猫カフェ ねこまんま",
  "animals": [
   "cat"
  ],
  "prefecture": "愛知県",
  "area": "昭和区・御器所",
  "address": "愛知県名古屋市昭和区南分町2丁目14番地",
  "access": "地下鉄桜通線 御器所駅から徒歩10分",
  "url": "https://www.neko-manma.jp/",
  "price": "1時間1,980円（税込）、2時間3,960円、3時間5,940円、延長5分165円（店内ドリンク無料）",
  "price_level": 2,
  "hours": "14:00〜19:00（最終受付18:00）※土日のいずれかのみ営業、月ごとのお知らせで確認",
  "closed": "毎月の営業日お知らせ日以外は休み（木曜定休）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "子ども可",
   "写真OK"
  ],
  "description": "猫の預かりホテルと美容室を併設した、名古屋でも古株の猫カフェ。2階が猫カフェで、選んだ利用時間は途中で変更できない。営業は土日のどちらかに限られるので、毎月のお知らせで営業日を見てから行く。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://www.neko-manma.jp/service/ （料金）、/about/ （アクセス）、/category/info/ の2026年10月25日付「11月の猫カフェ営業日のお知らせ」で確認。予約の案内なし→不要／検品⑥（2026-11-07）1時間1,980円・店内ドリンク無料で2"
 },
 {
  "id": "aichi-cat-meomaruke-midori",
  "name": "保護猫カフェ めおまるけ",
  "animals": [
   "cat"
  ],
  "prefecture": "愛知県",
  "area": "緑区・鳴海",
  "address": "愛知県名古屋市緑区鳴海町前之輪149（ナビは前之輪148）",
  "access": "JR大高駅北口から徒歩8分（名鉄鳴海駅南口から徒歩12分）",
  "url": "https://meomaruke.com/",
  "price": "大人1時間1,000円＋1ドリンク（主に500円）。30分700円、以後15分200円。土日祝は1時間1,100円",
  "price_level": 2,
  "hours": "10:00〜20:00（ラストオーダー19:00）",
  "closed": "水・木",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "子ども可",
   "写真OK"
  ],
  "description": "住宅街の古い一軒家を改装した、縁側のある和室で過ごせる保護猫カフェ。里親募集型で、時間料金とドリンク代が保護活動の費用になる。小学生以下は保護者同伴で、子ども料金がある。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://meomaruke.com/price/ ・トップ（2026年9月26日更新を確認）。予約制ではないと明記。駅・バス停の記載なし／検品⑥（2026-11-07）最寄駅は公式アクセスページで確認"
 },
 {
  "id": "aichi-cat-nekoguruma-kanie",
  "name": "猫カフェ ねこぐるま",
  "animals": [
   "cat"
  ],
  "prefecture": "愛知県",
  "area": "蟹江町",
  "address": "愛知県海部郡蟹江町宝二丁目424番地",
  "access": "近鉄蟹江駅から徒歩約6分",
  "url": "https://www.nekoguruma.com/index.html",
  "price": "猫ルーム30分440円〜（30分入替制）、カフェのドリンク550円〜（最低990円〜）",
  "price_level": 2,
  "hours": "平日 11:30〜20:00／土日祝 8:30〜20:00",
  "closed": "月・火（祝日は営業、翌日休業）",
  "reservation": "不要",
  "features": [
   "子ども可",
   "写真OK",
   "駅近"
  ],
  "description": "カフェと猫ルームが別室に分かれた猫カフェ。猫ルームは30分入替制で、ガラス越しに猫を見ることもできる。猫の毛が飛ばないようカフェ側だけの利用も可能で、猫アレルギーの人や子連れでも使いやすい。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://www.nekoguruma.com/index.html ・/about.html で確認。猫ルームだけの営業時間・頭数・日付つきお知らせは公式に記載なし。予約なしOKと明記"
 },
 {
  "id": "aichi-cat-necolabo-anjo",
  "name": "保護猫ホーム＆カフェ ねこらぼ",
  "animals": [
   "cat"
  ],
  "prefecture": "愛知県",
  "area": "安城市",
  "address": "愛知県安城市二本木町長根85-2",
  "access": "JR三河安城駅から徒歩15分",
  "url": "https://necolabo.anjocity.net/",
  "price": "1時間1,000円（平日・フリードリンク付き）、土日祝・繁忙期は1,400円、以後30分ごとに1時間の半額",
  "price_level": 1,
  "hours": "11:00〜18:00（最終入場17:00）",
  "closed": "火・水（変更あり）",
  "reservation": "推奨",
  "features": [
   "保護動物",
   "里親募集",
   "ドリンク込み",
   "子ども可",
   "写真OK"
  ],
  "description": "保護猫を預かりながら運営しているカフェで、フリードリンク付きの時間制。カフェスペースにいる時間も入場時間に数える。土日は混むので予約が勧められている。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://necolabo.anjocity.net/ のトップ内の店舗情報表と /cafe/ で確認。土日は予約推奨と記載。日付つきお知らせは公式に記載なし"
 },
 {
  "id": "aichi-cat-hitoyasumi-nishiki",
  "name": "保護猫カフェ ひとやすみ",
  "animals": [
   "cat"
  ],
  "prefecture": "愛知県",
  "area": "中区・錦",
  "address": "愛知県名古屋市中区錦3-1-6 ソアービル錦2F",
  "access": "地下鉄丸の内駅から徒歩約5分（久屋大通駅も徒歩約5分）",
  "url": "http://www.nekocafe-hitoyasumi.com/",
  "price": "60分1,400円、90分1,900円、120分2,400円、150分2,900円、151分以上3,200円（税込表記なし）",
  "price_level": 2,
  "hours": "平日 13:00〜21:00／土日祝 12:00〜21:00（現在は20:30閉店、最終入場20:00）",
  "closed": "公式ページに固定の定休日の記載なし（臨時休業は公式ブログで案内）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "駅近"
  ],
  "description": "繁華街の錦にある保護猫カフェで、譲渡先を探す成猫や子猫が過ごしている。成猫の頭数によって閉店時刻が変わることがあり、直近も短縮営業の告知が出ている。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 http://www.nekocafe-hitoyasumi.com/shop.html （住所・時間・駅）、公式ブログ ameblo 料金改定記事（2024年4月）と2026年1月の閉店時刻変更記事で確認。料金は2024年の改定告知ベース、最新は要確認"
 },
 {
  "id": "aichi-cat-aelu-okazaki",
  "name": "保護猫カフェ Aelu（アエル）",
  "animals": [
   "cat"
  ],
  "prefecture": "愛知県",
  "area": "岡崎市・東大友町",
  "address": "愛知県岡崎市東大友町字郷東22-1",
  "access": "公式ページに記載なし（来店前に確認を）",
  "url": "https://mineko.boo-log.com/",
  "price": "最初の30分600円、以後15分ごとに200円（平日は1ドリンク無料、土日祝・繁忙期は1杯200円）",
  "price_level": 1,
  "hours": "12:00〜19:00（2026年内の平日は13:00から）",
  "closed": "営業日は日・月・水・金・第2/第4土曜（それ以外は休み）",
  "reservation": "推奨",
  "features": [
   "保護動物",
   "里親募集",
   "抱っこOK",
   "ドリンク込み",
   "子ども可",
   "写真OK"
  ],
  "description": "保護猫と里親希望者をつなぐ譲渡型の猫カフェ。猫の抱っこや撮影ができ、扱いが不安な人にはやり方を教えてもらえる。土日祝は混むので予約が勧められているが、飛び入りも可能。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式ブログ https://mineko.boo-log.com/ （2026年10月15日更新）の店舗情報で確認。最寄り駅の記載なし"
 },
 {
  "id": "gifu-cat-sanctuary-kakamigahara",
  "name": "こねこカフェ Sanctuary（サンクチュアリ）",
  "animals": [
   "cat"
  ],
  "prefecture": "岐阜県",
  "area": "各務原市・鵜沼",
  "address": "岐阜県各務原市鵜沼西町1-626",
  "access": "名鉄鵜沼宿駅（徒歩分数の記載なし）",
  "url": "https://konekocafe-sanctuary.net/",
  "price": "60分1,200円（税別・フリードリンク付き）、30分800円、90分1,600円、120分2,000円、以降30分300円。小学生未満は割引、0〜1歳は無料",
  "price_level": 2,
  "hours": "平日 13:00〜17:00／土日祝 11:00〜18:00（最終受付は閉店30分前）",
  "closed": "金曜",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "ドリンク込み",
   "子ども可",
   "写真OK"
  ],
  "description": "保健所に収容された猫を保護して里親を探す保護猫カフェで、全体では約100匹を保護している。メインフロアには30〜50匹の子猫と成猫が出ており、数の多さが特徴。月に20匹前後の里親が決まっているという。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://konekocafe-sanctuary.net/ のトップ・/info（2026年9月18日更新）で確認。料金は2025年2月改定の公式料金表画像（cdn.goope.jp 250131214555）を読み取り"
 },
 {
  "id": "gifu-cat-nekokage-gifu",
  "name": "忍者ねこカフェ 猫影",
  "animals": [
   "cat"
  ],
  "prefecture": "岐阜県",
  "area": "岐阜市・岩地",
  "address": "岐阜県岐阜市岩地2丁目20-20",
  "access": "公式ページに記載なし（来店前に確認を）",
  "url": "https://nekokage.org/",
  "price": "60分1,200円（1ドリンク付き）、30分800円、平日フリータイム2時間2,000円・4時間3,500円。学生・手帳提示で割引",
  "price_level": 2,
  "hours": "13:00〜17:00（ラストオーダー16:30）",
  "closed": "火曜（祝日は営業）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "子ども可",
   "写真OK"
  ],
  "description": "忍者をテーマにした猫カフェで、最大16匹ほどの猫がいる。譲渡や受け入れで頭数は変わる。60分から使える時間制で、未就学児は30分プランのみになる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://nekokage.org/ のトップ（2026年2月1日付の3周年お知らせまで確認）。予約不要、電話で混雑確認可と記載。2025年に臨時休業が続いた経緯があり、最新の営業状況は公式カレンダーで要確認"
 },
 {
  "id": "gifu-cat-gologne-hashima",
  "name": "猫カフェ ごろーにゃ",
  "animals": [
   "cat"
  ],
  "prefecture": "岐阜県",
  "area": "羽島市・竹鼻",
  "address": "岐阜県羽島市竹鼻町狐穴3191-3",
  "access": "名鉄竹鼻駅前（徒歩0分）",
  "url": "https://catcafe5628.wixsite.com/gologne",
  "price": "60分1,280円（1ドリンク付き）、30分880円、90分1,580円",
  "price_level": 2,
  "hours": "平日 12:00〜19:00／土日祝 10:00〜18:00（最終受付17:00）",
  "closed": "月・火・金（祝日は営業）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "保護動物",
   "子ども可",
   "写真OK"
  ],
  "description": "マンチカンやロシアンブルー、保護猫のミックスなど10匹ほどと過ごせる小さな猫カフェ。大人と子どもは同じ料金で、予約や貸切にも対応している。現在は食事の提供がない。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://catcafe5628.wixsite.com/gologne ・/price で確認（©2016-2026、動物取扱業の登録有効期間は令和13年）。予約は「承っております」の記載のみで不要扱い／検品⑥（2026-11-07）最寄駅は公式 contact ページで確認"
 },
 {
  "id": "gifu-cat-moffmoff-kani",
  "name": "保護猫カフェ moff moff（モフモフ）",
  "animals": [
   "cat"
  ],
  "prefecture": "岐阜県",
  "area": "可児市・下切",
  "address": "岐阜県可児市下切3809",
  "access": "太多線下切駅から40m",
  "url": "https://moffmoff.localinfo.jp/",
  "price": "1時間1,200円（税込1,320円・ワンドリンク付き）、30分880円、2時間1,980円、フリータイム2,640円",
  "price_level": 2,
  "hours": "13:00〜20:00（最終入店19:30。19時以降は30分コースのみ）",
  "closed": "木曜（隔週で他の曜日も休み）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "駅近",
   "ドリンク込み",
   "貸切可",
   "写真OK"
  ],
  "description": "JR太多線の駅から目の前にある保護猫カフェで、時間制のワンドリンク付き。猫の体調や祝日の振替で営業時間が急に変わることがあり、SNSでの確認が勧められている。貸切は6名から予約制で受けている。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://moffmoff.localinfo.jp/pages/3041752/static （サイトの更新日時は2026年10月17日）。名称の「Moff」は系列チェーンとは別の独立店。小学生未満は貸切時以外入店不可"
 },
 {
  "id": "gifu-cat-norara-ogaki",
  "name": "くつろぎ猫カフェ norara",
  "animals": [
   "cat"
  ],
  "prefecture": "岐阜県",
  "area": "大垣市・藤江町",
  "address": "岐阜県大垣市藤江町2-96",
  "access": "大垣駅から徒歩10分",
  "url": "https://norara.cafe/",
  "price": "最初の30分650円、以降30分500円、2時間超でフリータイム2,200円。学割あり（フード・ドリンクは別注文）",
  "price_level": 2,
  "hours": "〜18:00（ラストオーダー17:00。開店時刻は公式ページに記載なし）",
  "closed": "公式トップのカレンダー画像で案内（猫の具合で臨時休業あり）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "子ども可",
   "写真OK"
  ],
  "description": "大垣駅から歩ける、保護猫がくつろぐ猫カフェ。初回30分から延長できる時間制で、学生は学割料金になる。夏休みや春休みには予約入替制のイベント日が設けられる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://norara.cafe/ のトップ（2026年7月3日付お知らせ）、/menu （料金）、/access （住所・駅）で確認。営業時間はトップ（L.O.17:00 close18:00）とアクセスページ（11:00〜20:00）で食い違うため新しいトップを優先。猫の頭数・日付つき休業日は未確認"
 },
 {
  "id": "mie-cat-nekonomori-yokkaichi",
  "name": "保護猫カフェ 猫の森",
  "animals": [
   "cat"
  ],
  "prefecture": "三重県",
  "area": "四日市市・中川原",
  "address": "三重県四日市市中川原1-2-37",
  "access": "公式ページに記載なし（来店前に確認を）",
  "url": "https://koma1990-ah.wixsite.com/nekonomori",
  "price": "入室料1,000円（現金のみ。40分入替制・ウェルカムドリンク無料）",
  "price_level": 1,
  "hours": "10:00〜16:40（予約制・毎時00分から40分間の入替制。曜日により最終時刻が変わる）",
  "closed": "月・木（祝日は営業）",
  "reservation": "必須",
  "features": [
   "保護動物",
   "里親募集",
   "ドリンク込み",
   "予約制",
   "写真OK"
  ],
  "description": "動物病院が運営する、漆喰と天然木の保護猫カフェで、中央の檜がキャットタワーになっている。1回最大8人の40分入替制で完全予約制。猫を休ませるため1時間に20分の休息を取る。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://koma1990-ah.wixsite.com/nekonomori （2026年9月から小学生料金も大人と同額と告知）・/contact-3 （住所）で確認。最寄り駅の記載なし。小学校入学前は入室不可"
 },
 {
  "id": "mie-cat-nagontei-suzuka",
  "name": "猫カフェ 和ん亭（なごんてい）",
  "animals": [
   "cat"
  ],
  "prefecture": "三重県",
  "area": "鈴鹿市・道伯",
  "address": "三重県鈴鹿市道伯3丁目7-30",
  "access": "近鉄平田町駅から徒歩12〜15分",
  "url": "http://nagontei.blog47.fc2.com/",
  "price": "1時間1,000円（ワンドリンク付き）、延長30分300円",
  "price_level": 1,
  "hours": "11:00〜17:00（最終16:00入店）",
  "closed": "火・金",
  "reservation": "必須",
  "features": [
   "ドリンク込み",
   "予約制"
  ],
  "description": "三重県で初めてできたとされる猫カフェで、小さな家で猫とゆっくり過ごす形。予約制で営業している。公式ブログの最新記事は2025年12月で、年末年始の営業予定が出ている。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式ブログ http://nagontei.blog47.fc2.com/ の2025年12月8日付記事ほかで確認。最寄り駅の記載なし。更新頻度が低く最新状況は電話確認が確実／検品⑥（2026-11-07）最寄駅は公式ブログの交通アクセスで確認"
 },
 {
  "id": "mie-cat-shiawasenyanko-iga",
  "name": "譲渡型保護猫カフェ しあわせニャンコ",
  "animals": [
   "cat"
  ],
  "prefecture": "三重県",
  "area": "伊賀市・大野木",
  "address": "三重県伊賀市大野木1697",
  "access": "伊賀鉄道西大手駅から徒歩48分（タクシー約9分）。車は名阪国道大内ICから約2分",
  "url": "https://siawasenyanko.studio.site/",
  "price": "大人1時間1,200円、1.5時間1,800円、2時間2,400円、延長10分250円。別に1ドリンクオーダー制400円〜。未就学児は1時間600円",
  "price_level": 2,
  "hours": "カフェ 10:00〜19:00／ねこふれあい室 10:00〜12:00・13:00〜19:00（最終入店18:00）",
  "closed": "営業日は金・土・日（祝日は不定期開店）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "子ども可",
   "写真OK"
  ],
  "description": "伊賀市にある譲渡型の保護猫カフェで、カフェとは別にねこふれあい室がある。通常営業日は小学生未満は猫部屋に入れず、毎月第1・第3日曜の年齢制限解除日には入れる。里親募集の相談もできる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://siawasenyanko.studio.site/ ・/about （料金）をブラウザ描画で確認。トップに2026年10月3日付のカレンダー更新あり。予約の案内なし→不要"
 },
 {
  "id": "toyama-cat-paw-imizu",
  "name": "Dog Cat Cafe＆Shop パウ",
  "animals": [
   "cat",
   "dog"
  ],
  "prefecture": "富山県",
  "area": "射水（小杉）",
  "address": "富山県射水市黒河新4941-7",
  "access": "あいの風とやま鉄道 小杉駅から徒歩15分",
  "url": "https://r.goope.jp/dog-cat-paw/",
  "price": "1時間1,400円（大人）／小学生以下1,200円（ワンドリンク付き）",
  "price_level": 2,
  "hours": "11:00〜18:00（入店は17:00まで）",
  "closed": "営業は水・金・土・日。月・火・木は休み（公式の営業日案内より）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "子ども可",
   "複数の動物"
  ],
  "description": "ペットホテルやトリミング、ペット用品の販売も手がける店に併設された、猫と犬のカフェ。猫と犬の両方がいる店内で、ワンドリンク付きの1時間制で過ごせる。営業は水・金・土・日に限られるため、日程を確かめてから出かけたい。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "https://r.goope.jp/dog-cat-paw/free/nekocafe（営業日・料金）、/about（住所・アクセス）、/info（2026年9月のお知らせ更新あり）で確認。頭数は公式に記載なし。"
 },
 {
  "id": "toyama-cat-nekoyasumi-toyama",
  "name": "おうち猫カフェ ねこやすみ",
  "animals": [
   "cat"
  ],
  "prefecture": "富山県",
  "area": "富山市（堀川本郷）",
  "address": "富山県富山市堀川本郷15-157",
  "access": "公式ページに記載なし（来店前に確認を）",
  "url": "https://www.cherish-dog.com/blank-19",
  "price": "1時間1,500円＋ドリンク440円〜（税込、延長10分ごとに220円）",
  "price_level": 2,
  "hours": "11:00〜18:00（最終入店16:45）",
  "closed": "営業日は金・土・日・月（火〜木は休み）、不定休あり",
  "reservation": "必須",
  "features": [
   "保護動物",
   "里親募集",
   "予約制",
   "子ども可"
  ],
  "description": "自宅を開放した一軒家の保護猫カフェで、保護猫出身の9匹の猫が暮らしている。1組1時間の完全予約制で、猫を触りに行く場所というより、のんびり過ごしながら里親との出会いにつなげる店だ。未就学児は入れず、小学生以上は保護者同伴でルールを守れば入店できる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "https://www.cherish-dog.com/blank-19（営業日・予約制・頭数）、/blank-15（料金・予約の案内。1組1時間・当日2時間前まで）、/blank-12（ご利用案内）で確認。最寄り駅は公式に記載なし。公式ページに更新日の表示はなく、頭数の記載などから営業中と判断。"
 },
 {
  "id": "fukui-cat-fukuneko-fukui",
  "name": "猫カフェ 福ねこ",
  "animals": [
   "cat"
  ],
  "prefecture": "福井県",
  "area": "福井市（舟橋新）",
  "address": "福井県福井市舟橋新1-321-1",
  "access": "福井駅西口からバスで「舟橋新」下車して徒歩（最寄りバス停は舟橋新または灯明寺）。新田塚駅から徒歩約20分",
  "url": "https://fukuneko.wixsite.com/cats",
  "price": "30分800円／1時間1,500円／延長30分ごとに700円／1.5時間2,200円／2時間パック2,700円／フリータイム3,700円（2026年11月1日改定後。ドリンク別）",
  "price_level": 2,
  "hours": "平日12:00〜19:00／土日祝12:00〜18:00（受付は終了の1時間前まで）",
  "closed": "毎週火曜日",
  "reservation": "不要",
  "features": [
   "里親募集"
  ],
  "description": "猫のために一から建てた一軒家の猫カフェで、広いホールに猫用の螺旋階段や店内を一周するキャットウォーク、猫用の本棚が備わる。20匹を超える猫が暮らし、透明な通路から猫を見上げることもできる。未就学児と小学生は入れず、素足では入れないため靴下を買って履く。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "https://fukuneko.wixsite.com/cats/oshirase の料金表画像（2026年11月1日からの新料金）を読み取り。営業時間・定休日は /guide、住所・アクセスは /access、予約は /book-online（現在予約は受け付けていない）で確認。公式サイトは2026年10月に更新あり。"
 },
 {
  "id": "aomori-cat-ponporo",
  "name": "猫カフェぽんぽろ",
  "animals": [
   "cat"
  ],
  "prefecture": "青森県",
  "area": "青森市緑",
  "address": "青森県青森市緑3丁目1-4",
  "access": "サンロード青森近く（北斗燃料の向かい）",
  "url": "https://www.pekotama.com/ponporo/",
  "price": "30分550円、以降30分ごとに330円（3歳〜高校生は2割引）",
  "price_level": 1,
  "hours": "11:00〜17:00（最終受付16:30）",
  "closed": "金曜日",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "子ども可"
  ],
  "description": "青森市の住宅街にある、里親探しも行う猫カフェだ。お弁当の持ち込みができ、中学生までは保護者同伴で入店できる。料金が30分550円からと手頃で、ふらっと立ち寄りやすい。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://www.pekotama.com/ponporo/ で住所・営業時間・料金を確認。公式ブログ(ponporo.seesaa.net)に2026年10月の更新あり。猫の頭数は記載なし。予約の案内なし。"
 },
 {
  "id": "aomori-cat-matatabitei",
  "name": "猫処またたび亭",
  "animals": [
   "cat"
  ],
  "prefecture": "青森県",
  "area": "八戸市城下",
  "address": "青森県八戸市城下3丁目6-3",
  "access": "八戸市城下エリア（最寄り駅の記載なし）",
  "url": "https://neko-matatabitei.wixsite.com/neko-matatabitei",
  "price": "30分550円〜（フリードリンク付き）",
  "price_level": 2,
  "hours": "11:00〜20:00（最終入店19:30）",
  "closed": "火曜日（11月は金曜日も休み）",
  "reservation": "推奨",
  "features": [
   "ドリンク込み"
  ],
  "description": "八戸市にある猫カフェで、料金にはフリードリンクが付く。夜8時まで開いているので、仕事帰りにも寄れる。受付は電話か店頭で、SNSのDMは受け付けていない。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://neko-matatabitei.wixsite.com/neko-matatabitei で確認（トップに直近のお知らせあり）。60分料金・猫の頭数は記載なし（price_levelは30分550円からの目安）。予約の案内は電話受付のみで必須とはされていない。／検品⑥（2026-11-07）公式お知らせ（11月の営業について）に「事前予約をおススメ」とあり推奨"
 },
 {
  "id": "tottori-cat-waldbaden",
  "name": "Wald Baden（ヴァルトバーデン）",
  "animals": [
   "cat"
  ],
  "prefecture": "鳥取県",
  "area": "鳥取市富安",
  "address": "鳥取県鳥取市富安2丁目92-3（旧ローソン鳥取富安店の建物、auショップの隣）",
  "access": "鳥取駅から徒歩8分",
  "url": "https://waldbaden.amebaownd.com/",
  "price": "1時間 大人1,400円・中高生1,000円・4歳〜小学生800円（ドリンクバー無料）",
  "price_level": 2,
  "hours": "11:00〜19:00（18:00受付終了）",
  "closed": "定休日なし（不定休の記載あり）",
  "reservation": "推奨",
  "features": [
   "ドリンク込み",
   "駅近",
   "子ども可"
  ],
  "description": "鳥取駅から歩ける距離にある猫カフェで、ドリンクバーが無料で付く。年齢別の料金があり、子ども連れでも使いやすい。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://waldbaden.amebaownd.com/pages/7325216/shop (料金・時間)、/pages/7325284/page_202310121347 (住所・アクセス)で確認。4名以上は予約推奨と案内。猫の頭数は記載なし。／検品⑥（2026-11-07）公式に「週末は事前のご予約をおすすめ」「4名以上は事前予約を」とあり推奨"
 },
 {
  "id": "tottori-cat-kuro",
  "name": "NEKO CAFE Kuro",
  "animals": [
   "cat"
  ],
  "prefecture": "鳥取県",
  "area": "米子市皆生温泉",
  "address": "鳥取県米子市皆生温泉4丁目25-18 1F",
  "access": "米子市 皆生温泉エリア",
  "url": "https://kuronekocafekaike.wixsite.com/nekocafe-kuro",
  "price": "猫部屋1時間 平日1,320円・土日祝1,540円（ドリンク付き）／高校生以下 平日1,100円・土日祝1,320円／おためし20分550円",
  "price_level": 2,
  "hours": "10:00〜18:00",
  "closed": "木曜日",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "子ども可"
  ],
  "description": "皆生温泉の近くにある猫カフェだ。猫部屋はドリンク提供のみで、飲食はカフェスペースで楽しむ。20分550円のおためしコースがあり、初めてでも試しやすい。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://kuronekocafekaike.wixsite.com/nekocafe-kuro/blank (料金)、/blank-2 (住所・営業時間・定休日)で確認。サイト最終更新2026-01-14、鳥取県の動物取扱業登録は令和9年2月まで有効の表記。予約の案内なし。猫の頭数は記載なし。"
 },
 {
  "id": "kochi-cat-mocomoco",
  "name": "保護猫カフェ moco moco",
  "animals": [
   "cat"
  ],
  "prefecture": "高知県",
  "area": "高知市本町",
  "address": "高知県高知市本町1-2-1 白木ビル3F",
  "access": "とさでん交通 堀詰電停の北",
  "url": "https://mocomoco-cat-kochi.amebaownd.com/",
  "price": "1時間 大人1,100円・学生880円（ワンドリンク付き）、延長30分330円",
  "price_level": 2,
  "hours": "13:00〜17:00（最終受付16:00）",
  "closed": "月・木曜日（祝日は営業し翌日が振替休）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "ドリンク込み"
  ],
  "description": "高知市中心部のビルの3階にある保護猫カフェで、譲渡を前提にした猫たちと過ごせる。1時間制で、混雑時は待つことがある。入室は一度に8名までだ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://mocomoco-cat-kochi.amebaownd.com/ (住所・時間)と /pages/8458997/menu (料金・予約)で確認。予約は必須ではなく、時間が決まっていれば電話で可。猫の頭数は記載なし。"
 },
 {
  "id": "tokushima-cat-katbos",
  "name": "保護猫カフェ KAT BOS",
  "animals": [
   "cat"
  ],
  "prefecture": "徳島県",
  "area": "徳島市福島",
  "address": "徳島県徳島市福島2丁目2-10 1F",
  "access": "徳島市福島エリア（最寄り駅の記載なし）",
  "url": "https://kat-bos.com/",
  "price": "60分1,100円＋ドリンク1杯（15分330円〜、120分1,760円＋ドリンク1杯、平日フリータイム2,200円＋ドリンク2杯）",
  "price_level": 2,
  "hours": "11:00〜20:00（ランチL.O. 14:30）",
  "closed": "水曜日",
  "reservation": "不要",
  "features": [
   "保護動物",
   "ドリンク込み",
   "時間無制限プランあり"
  ],
  "description": "徳島市にある保護猫カフェで、猫スペースは15分から使える短時間プランがある。ランチやお酒も出し、平日限定のフリータイムもある。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://kat-bos.com/top/menu/ (料金)と https://kat-bos.com/ (住所・時間)で確認。予約の案内は電話・Instagramの連絡先のみ。猫の頭数は記載なし。"
 },
 {
  "id": "tokushima-cat-nova",
  "name": "ネコカフェ 猫nova",
  "animals": [
   "cat"
  ],
  "prefecture": "徳島県",
  "area": "板野郡北島町",
  "address": "徳島県板野郡北島町鯛浜字川久保16-10",
  "access": "北島町鯛浜エリア（最寄り駅の記載なし）",
  "url": "https://catnova1111.com/",
  "price": "30分550円／60分900円／90分1,200円（おやつ付き）／120分1,400円（おやつ付き）",
  "price_level": 1,
  "hours": "13:00〜20:00",
  "closed": "火曜日",
  "reservation": "必須",
  "features": [
   "予約制"
  ],
  "description": "猫15匹が暮らす猫カフェで、30分から120分まで細かく時間を選べる。会員制の予約制で、来店前に予約ページから申し込む。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://catnova1111.com/ で確認。予約は会員のみの予約制と記載。税込表記なし。"
 },
 {
  "id": "kagawa-cat-soramamenoie",
  "name": "古民家カフェ そらまめの家",
  "animals": [
   "cat"
  ],
  "prefecture": "香川県",
  "area": "三豊市高瀬町",
  "address": "香川県三豊市高瀬町比地2083",
  "access": "父母ヶ浜から車で約10分",
  "url": "https://soramamenoie.com/",
  "price": "ふれあいルーム 30分600円・1時間900円（カフェメニュー注文で800円）／保護ねこルーム 30分600円／猫と過ごせるレンタルーム 1時間1,200円",
  "price_level": 1,
  "hours": "11:00〜17:30（猫の部屋の最終入室17:00）",
  "closed": "火曜日・水曜日",
  "reservation": "不要",
  "features": [
   "保護動物",
   "ふれあいOK",
   "複数の動物"
  ],
  "description": "古民家を使った猫のふれあい施設で、部屋が目的別に分かれている。猫スタッフ5匹と保護猫が過ごすふれあいルーム、保護猫10〜20匹の保護ねこルーム、貸し切りのレンタルームがある。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://soramamenoie.com/neko-room/ (料金)、/syop-access/ (住所・時間)で確認。公式サイトに2026-11-04の投稿あり。レンタルームのみ予約優先。税込表記なし。"
 },
 {
  "id": "hokkaido-cat-nyanshouse-roro",
  "name": "にゃんずはうすロロ",
  "animals": [
   "cat"
  ],
  "prefecture": "北海道",
  "area": "旭川市神楽",
  "address": "北海道旭川市神楽4条10丁目4-26",
  "access": "旭川市神楽エリア（最寄り駅の記載なし）",
  "url": "https://www.nyans-house-roro.com/",
  "price": "30分770円／60分1,100円／90分1,650円／フリータイム(120分〜)2,200円（未就学児は割引、おやつ220円）",
  "price_level": 2,
  "hours": "12:00〜17:00（最終受付16:30）",
  "closed": "月曜日・年末年始ほか不定休（月曜が祝日の場合は火曜休）",
  "reservation": "不要",
  "features": [
   "子ども可",
   "時間無制限プランあり"
  ],
  "description": "旭川市の猫カフェで、30分から使え、2時間を超えるとフリータイム料金になる。予約は受け付けず来店順に案内する。猫スタッフの紹介ページがあり、2026年8月にも新入社員の投稿が出ている。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://www.nyans-house-roro.com/about/ (料金・時間・予約)と /access/ で確認。30分料金は2026-05-01に改定との告知(news-652)があり、aboutページ掲載額を採用。猫の頭数は記載なし。"
 },
 {
  "id": "fukushima-cat-ohana-salon",
  "name": "里親募集型保護猫ふれあいサロン Ohana",
  "animals": [
   "cat"
  ],
  "prefecture": "福島県",
  "area": "いわき市常磐湯本",
  "address": "福島県いわき市常磐湯本町天王崎1-56 2階",
  "access": "常磐湯本駅周辺（駅前の市営駐車場などを利用）",
  "url": "https://ohana-cat.com/",
  "price": "1時間1,200円、延長30分ごと500円、猫のおやつ500円",
  "price_level": 2,
  "hours": "10:30〜18:00（最終入場17:15）",
  "closed": "公式の営業日は金・土・日・月曜と祝日（カレンダーを確認）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "複数の動物"
  ],
  "description": "湯本にある里親募集型の保護猫ふれあいサロンで、約40匹の猫と過ごせる。運営団体はいわき市内に保護猫のシェルターも持つ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://ohana-cat.com/ で確認。お知らせの最新は2026-10-25。本文の営業日とカレンダーの表示が一致しないため定休日は要確認と記載。予約の案内なし。"
 },
 {
  "id": "fukushima-cat-ohana-shelter",
  "name": "保護猫ふれあいシェルター Ohana",
  "animals": [
   "cat"
  ],
  "prefecture": "福島県",
  "area": "いわき市内郷",
  "address": "福島県いわき市内郷綴町秋山7-12",
  "access": "いわき市内郷エリア（最寄り駅の記載なし）",
  "url": "https://ohana-cat.com/",
  "price": "1時間1,200円、延長30分ごと500円、猫のおやつ500円",
  "price_level": 2,
  "hours": "12:00〜16:00（最終入場15:15）",
  "closed": "土日のみ営業（平日休み）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "複数の動物"
  ],
  "description": "保護猫約100匹が暮らすシェルターを土日に開放しているふれあい施設だ。同じ運営のサロンとはしごすると2店舗目が割引になる（ポイントカードが必要）。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://ohana-cat.com/ で確認。お知らせの最新は2026-10-25。予約の案内なし。"
 },
 {
  "id": "okinawa-cat-nouvellevague",
  "name": "保護猫とつながるカフェ＆ショップ Nouvelle Vague（ヌーベルバーグ）",
  "animals": [
   "cat"
  ],
  "prefecture": "沖縄県",
  "area": "宜野湾市宇地泊",
  "address": "沖縄県宜野湾市宇地泊1-4-9 ビリーバービル4階",
  "access": "宜野湾市宇地泊エリア（最寄り駅の記載なし）",
  "url": "https://catcafe-nouvellevague.com/",
  "price": "平日 30分700円・60分1,000円・フリータイム2,000円／土日祝 30分800円・60分1,100円・フリータイム2,200円（ドリンク込み）",
  "price_level": 1,
  "hours": "月〜金13:00〜19:00／土日祝11:00〜19:00",
  "closed": "公式サイト上は祝日を除く火曜と隔週木曜（Instagramの表記と異なるため来店前に確認を）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "ドリンク込み",
   "時間無制限プランあり"
  ],
  "description": "宜野湾市のビルの4階にある保護猫カフェで、接客中の猫が12匹ほど、店で暮らす猫は20匹ほどだ。料金にドリンクが込みで、フリータイムや学割もある。譲渡の相談もできる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://catcafe-nouvellevague.com/ で確認。予約はお見合い予約と平日限定のWEB・LINE予約プランがあるが通常来店は予約不要の扱い。ニュースは2023年だが猫一覧に2026年9月の掲載あり。"
 },
 {
  "id": "saga-cat-myao-hyogominami",
  "name": "rescued cat cafe Myao 兵庫南店",
  "animals": [
   "cat"
  ],
  "prefecture": "佐賀県",
  "area": "佐賀市兵庫南",
  "address": "佐賀県佐賀市兵庫南3丁目3-13",
  "access": "佐賀市兵庫南エリア（最寄り駅の記載なし）",
  "url": "https://hogoneko-myao.jp/",
  "price": "協力金1,000円（平日は1時間・土日祝は40分、ドリンク1杯付き）",
  "price_level": 1,
  "hours": "10:00〜17:00（最終受付16:00）",
  "closed": "火・水曜日",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "ドリンク込み"
  ],
  "description": "譲渡ができる保護猫カフェで、佐賀市の兵庫南店は平日1時間、土日祝は40分制だ。入口の発券機で受付番号を取る方式で、事前予約は要らない。両店合わせて最大30頭ほどが在籍する。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://hogoneko-myao.jp/ (店舗・時間)と /howtouse/ (料金・受付)で確認。最新の投稿は11月6日（金）で2026年と判断。税込表記なし。"
 },
 {
  "id": "saga-cat-myao-takeo",
  "name": "rescued cat cafe Myao 武雄店",
  "animals": [
   "cat"
  ],
  "prefecture": "佐賀県",
  "area": "武雄市朝日町",
  "address": "佐賀県武雄市朝日町大字甘久1310-1",
  "access": "武雄市朝日町エリア（最寄り駅の記載なし）",
  "url": "https://hogoneko-myao.jp/",
  "price": "協力金1,000円（全日1時間、ドリンク1杯付き）",
  "price_level": 1,
  "hours": "10:00〜17:00（最終受付16:00）",
  "closed": "火・水曜日",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "ドリンク込み"
  ],
  "description": "譲渡ができる保護猫カフェの武雄店で、全日1時間制だ。ホットコーヒー・ジュース・ミネラルウォーターから1杯選べる。受付は入口の発券機で行う。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://hogoneko-myao.jp/ (店舗・時間)と /howtouse/ (料金・受付)で確認。最新の投稿は11月6日（金）で2026年と判断。"
 },
 {
  "id": "hyogo-cat-mocha-aeonkobekita",
  "name": "猫カフェMOCHA イオンモール神戸北店",
  "animals": [
   "cat"
  ],
  "prefecture": "兵庫県",
  "area": "神戸市北区",
  "address": "兵庫県神戸市北区上津台8-1-1 イオンモール神戸北2F",
  "access": "イオンモール神戸北 2F、Cレストラン街入口のエスカレーター左側（最寄り駅は公式ページに記載なし）",
  "url": "https://www.catmocha.jp/shop/aeonkobekita/",
  "price": "10分220円（平日・税込）、最大2,640円／土日祝・特定日は10分275円、最大2,970円。別途ドリンクバー385円",
  "price_level": 2,
  "hours": "10:00〜21:00（最終入店20:30）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "子ども可",
   "写真OK"
  ],
  "description": "神戸市北区のイオンモール2階にある猫カフェ。公式ページに約14匹が載っていて、MOCHAの中では10分あたりが安い料金設定になっている。ドリンクバーは別料金で、夜9時まで買い物ついでに寄れる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://www.catmocha.jp/shop/aeonkobekita/ で確認（営業時間・料金・住所。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）"
 },
 {
  "id": "saitama-cat-mocha-aeonlaketown",
  "name": "猫カフェMOCHA イオンレイクタウン店",
  "animals": [
   "cat"
  ],
  "prefecture": "埼玉県",
  "area": "越谷市",
  "address": "埼玉県越谷市レイクタウン3-1-1 イオンレイクタウンmori 1F",
  "access": "イオンレイクタウン mori 1F、G6入口噴水広場の前（最寄り駅は公式ページに記載なし）",
  "url": "https://www.catmocha.jp/shop/aeonlaketown/",
  "price": "10分297円（平日・税込）、最大3,960円／土日祝・特定日は10分385円、最大4,620円。ドリンクバーあり（別料金の記載なし）",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入店19:30）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "子ども可",
   "写真OK",
   "ドリンク込み"
  ],
  "description": "日本最大級のショッピングモール、レイクタウンの1階にある猫カフェ。公式ページに約24匹が載っていて、広場の噴水前から入れるので迷いにくい。家族での買い物の合間に、3歳から入れる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://www.catmocha.jp/shop/aeonlaketown/ で確認（営業時間・料金・住所。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）／検品⑥（2026-11-07）公式FAQ「お飲み物はドリンクバーをご用意」で、店舗ページの料金表にドリンクバー代の別記が無いため「ドリンク込み」を付けた（別途385円と明記する神戸北・岡山は除く）"
 },
 {
  "id": "saitama-cat-mocha-archeomiya",
  "name": "猫カフェMOCHA アルシェ大宮店",
  "animals": [
   "cat"
  ],
  "prefecture": "埼玉県",
  "area": "大宮",
  "address": "埼玉県さいたま市大宮区桜木町2-1-1 アルシェ5F",
  "access": "JR大宮駅西口から徒歩0分",
  "url": "https://www.catmocha.jp/shop/archeomiya/",
  "price": "10分297円（平日・税込）、最大3,960円／土日祝・特定日は10分385円、最大4,620円。ドリンクバーあり（別料金の記載なし）",
  "price_level": 2,
  "hours": "10:00〜21:00（最終入店20:30）",
  "closed": "施設の休館日に準ずる",
  "reservation": "不要",
  "features": [
   "駅近",
   "写真OK",
   "ドリンク込み"
  ],
  "description": "大宮駅西口にある商業ビル5階の猫カフェで、公式ページに約25匹が載っている。夜9時まで開いているため、仕事帰りにも寄りやすい。6歳から入場できる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://www.catmocha.jp/shop/archeomiya/ で確認（営業時間・料金・住所。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）／検品⑥（2026-11-07）公式FAQ「お飲み物はドリンクバーをご用意」で、店舗ページの料金表にドリンクバー代の別記が無いため「ドリンク込み」を付けた（別途385円と明記する神戸北・岡山は除く）"
 },
 {
  "id": "fukuoka-cat-mocha-fukutsu",
  "name": "猫カフェMOCHA イオンモール福津店",
  "animals": [
   "cat"
  ],
  "prefecture": "福岡県",
  "area": "福津市",
  "address": "福岡県福津市日蒔野6-16-1 イオンモール福津2F",
  "access": "JR福間駅からバスで8分",
  "url": "https://www.catmocha.jp/shop/fukutsu/",
  "price": "最初の30分1,045円（ドリンクバー込み・平日・税込）、延長10分220円、最大3,520円／土日祝・特定日は30分1,210円、最大3,850円",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入店19:30）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "子ども可",
   "写真OK"
  ],
  "description": "福津市のイオンモール2階にある猫カフェ。入場料にドリンクバーが含まれる料金体系で、公式ページに約20匹が載っている。年齢制限がなく、2歳以下は無料で入れる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://www.catmocha.jp/shop/fukutsu/ で確認（営業時間・料金・住所。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）"
 },
 {
  "id": "saitama-cat-mocha-hanyu",
  "name": "猫カフェMOCHA イオンモール羽生店",
  "animals": [
   "cat"
  ],
  "prefecture": "埼玉県",
  "area": "羽生市",
  "address": "埼玉県羽生市川崎2-281-3 イオンモール羽生 2F",
  "access": "東武伊勢崎線 羽生駅",
  "url": "https://www.catmocha.jp/shop/hanyu/",
  "price": "10分297円（平日・税込）、最大3,960円／土日祝・特定日は10分363円、最大4,290円。ドリンクバーあり（別料金の記載なし）",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入店19:30）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "子ども可",
   "写真OK",
   "ドリンク込み"
  ],
  "description": "埼玉県北部、羽生のイオンモール2階にある猫カフェ。公式ページに約25匹が載っており、郊外店らしく年齢制限がない。3歳以下は入場無料で、車で来る家族連れ向きだ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://www.catmocha.jp/shop/hanyu/ で確認（営業時間・料金・住所。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）／検品⑥（2026-11-07）公式FAQ「お飲み物はドリンクバーをご用意」で、店舗ページの料金表にドリンクバー代の別記が無いため「ドリンク込み」を付けた（別途385円と明記する神戸北・岡山は除く）"
 },
 {
  "id": "tokyo-cat-mocha-harajuku",
  "name": "猫カフェMOCHA 原宿店",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "原宿",
  "address": "東京都渋谷区神宮前1-14-25 クロスアベニュー原宿4F",
  "access": "JR原宿駅の目の前",
  "url": "https://www.catmocha.jp/shop/harajuku/",
  "price": "10分330円（平日・税込）、最大3,960円／土日祝・特定日は10分440円、最大4,620円。ドリンクバーあり（別料金の記載なし）",
  "price_level": 2,
  "hours": "10:00〜21:00（最終入店20:30）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "駅近",
   "子ども可",
   "写真OK",
   "ドリンク込み"
  ],
  "description": "原宿駅の目の前、クロスアベニュー原宿の4階にある猫カフェ。公式ページに約19匹が載っていて、MOCHAの中でも10分料金がやや高めの店だ。夜9時まで開いており、竹下通りの散策のあとにも寄れる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://www.catmocha.jp/shop/harajuku/ で確認（営業時間・料金・住所。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）／検品⑥（2026-11-07）公式FAQ「お飲み物はドリンクバーをご用意」で、店舗ページの料金表にドリンクバー代の別記が無いため「ドリンク込み」を付けた（別途385円と明記する神戸北・岡山は除く）"
 },
 {
  "id": "tokyo-cat-mocha-higashikurume",
  "name": "猫カフェMOCHA イオンモール東久留米店",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "東久留米市",
  "address": "東京都東久留米市南沢5-17-62 イオンモール東久留米3F",
  "access": "西武池袋線 ひばりヶ丘駅・東久留米駅",
  "url": "https://www.catmocha.jp/shop/higashikurume/",
  "price": "10分297円（平日・税込）、最大3,960円／土日祝・特定日は10分363円、最大4,290円。ドリンクバーあり（別料金の記載なし）",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入店19:30）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "子ども可",
   "写真OK",
   "ドリンク込み"
  ],
  "description": "東久留米のイオンモール3階にある猫カフェ。公式ページに約14匹が載っていて、MOCHAの都内店では小ぶりな部類になる。年齢制限がなく、3歳以下は無料なので、小さな子連れでも使いやすい。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://www.catmocha.jp/shop/higashikurume/ で確認（営業時間・料金・住所。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）／検品⑥（2026-11-07）公式FAQ「お飲み物はドリンクバーをご用意」で、店舗ページの料金表にドリンクバー代の別記が無いため「ドリンク込み」を付けた（別途385円と明記する神戸北・岡山は除く）"
 },
 {
  "id": "tokyo-cat-mocha-ikebukuro",
  "name": "猫カフェMOCHA 池袋本店",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "池袋",
  "address": "東京都豊島区西池袋1-15-6 豊島会館3F",
  "access": "JR池袋駅西口から徒歩1分",
  "url": "https://www.catmocha.jp/shop/ikebukuro/",
  "price": "10分297円（平日・税込）、最大3,960円／土日祝・特定日は10分385円、最大4,620円。ドリンクバーあり（別料金の記載なし）",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入店19:30）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "駅近",
   "写真OK",
   "ドリンク込み"
  ],
  "description": "池袋駅西口から1分の豊島会館3階にある、MOCHAの本店。公式ページに約18匹が載っている。6歳から入場でき、年中無休なので予定を立てやすい。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://www.catmocha.jp/shop/ikebukuro/ で確認（営業時間・料金・住所。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）／検品⑥（2026-11-07）公式FAQ「お飲み物はドリンクバーをご用意」で、店舗ページの料金表にドリンクバー代の別記が無いため「ドリンク込み」を付けた（別途385円と明記する神戸北・岡山は除く）"
 },
 {
  "id": "tokyo-cat-mocha-ikebukuro2",
  "name": "猫カフェ モカラウンジ 池袋東口店",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "池袋",
  "address": "東京都豊島区東池袋1-22-5 サンケエビル4F",
  "access": "JR池袋駅東口から徒歩3分",
  "url": "https://www.catmocha.jp/shop/ikebukuro2/",
  "price": "10分297円（平日・税込）、最大3,960円／土日祝・特定日は10分385円、最大4,620円。ドリンクバーあり（別料金の記載なし）",
  "price_level": 2,
  "hours": "10:00〜21:00（最終入店20:30）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "駅近",
   "写真OK",
   "ドリンク込み"
  ],
  "description": "池袋東口にあるモカラウンジ系列の猫カフェで、公式ページに約22匹が載っている。中学生以上が対象の落ち着いた店だ。夜9時まで開いているので、仕事や買い物のあとにゆっくり過ごしたい大人向け。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://www.catmocha.jp/shop/ikebukuro2/ で確認（営業時間・料金・住所。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）／検品⑥（2026-11-07）公式FAQ「お飲み物はドリンクバーをご用意」で、店舗ページの料金表にドリンクバー代の別記が無いため「ドリンク込み」を付けた（別途385円と明記する神戸北・岡山は除く）"
 },
 {
  "id": "yamanashi-cat-mocha-kofushowa",
  "name": "猫カフェMOCHA イオンモール甲府昭和店",
  "animals": [
   "cat"
  ],
  "prefecture": "山梨県",
  "area": "昭和町",
  "address": "山梨県中巨摩郡昭和町飯喰1505-1 イオンモール甲府昭和3F",
  "access": "JR甲府駅（最寄駅として公式に記載）",
  "url": "https://www.catmocha.jp/shop/kofushowa/",
  "price": "10分297円（平日・税込）、最大3,960円／土日祝・特定日は10分363円、最大4,290円。ドリンクバーあり（別料金の記載なし）",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入店19:30）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "子ども可",
   "写真OK",
   "ドリンク込み"
  ],
  "description": "山梨県で唯一のMOCHAで、昭和町のイオンモール3階にある。公式ページに約21匹が載っていて、年齢制限はなく3歳以下は無料。甲府周辺で気軽に猫と過ごせる場所として使える。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://www.catmocha.jp/shop/kofushowa/ で確認（営業時間・料金・住所。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）／検品⑥（2026-11-07）公式FAQ「お飲み物はドリンクバーをご用意」で、店舗ページの料金表にドリンクバー代の別記が無いため「ドリンク込み」を付けた（別途385円と明記する神戸北・岡山は除く）"
 },
 {
  "id": "tokyo-cat-mocha-machida",
  "name": "猫カフェMOCHA 町田ジョルナ店",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "町田",
  "address": "東京都町田市原町田6丁目6-14 町田ジョルナ4F",
  "access": "JR町田駅中央改札口から徒歩2分、小田急町田駅西口から徒歩5分",
  "url": "https://www.catmocha.jp/shop/machida/",
  "price": "10分297円（平日・税込）、最大3,960円／土日祝・特定日は10分385円、最大4,620円。ドリンクバーあり（別料金の記載なし）",
  "price_level": 2,
  "hours": "10:30〜20:00（最終入店19:30）",
  "closed": "施設の休館日に準ずる",
  "reservation": "不要",
  "features": [
   "駅近",
   "写真OK",
   "子ども可",
   "ドリンク込み"
  ],
  "description": "町田駅から近い町田ジョルナの4階にある猫カフェ。公式ページに約18匹が載っていて、開店は10時半と他店よりやや遅い。3歳から入場できる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://www.catmocha.jp/shop/machida/ で確認（営業時間・料金・住所。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）／検品⑥（2026-11-07）公式FAQ「お飲み物はドリンクバーをご用意」で、店舗ページの料金表にドリンクバー代の別記が無いため「ドリンク込み」を付けた（別途385円と明記する神戸北・岡山は除く）"
 },
 {
  "id": "chiba-cat-mocha-makuhari",
  "name": "猫カフェMOCHA イオンモール幕張新都心店",
  "animals": [
   "cat"
  ],
  "prefecture": "千葉県",
  "area": "千葉市美浜区",
  "address": "千葉県千葉市美浜区豊砂1-1 イオンモール幕張新都心 グランドモール1F",
  "access": "JR京葉線 幕張豊砂駅の目の前",
  "url": "https://www.catmocha.jp/shop/makuhari/",
  "price": "10分297円（平日・税込）、最大3,960円／土日祝・特定日は10分385円、最大4,620円。ドリンクバーあり（別料金の記載なし）",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入店19:30）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "駅近",
   "子ども可",
   "写真OK",
   "ドリンク込み"
  ],
  "description": "幕張豊砂駅の目の前、イオンモール1階にある猫カフェ。公式ページに約28匹が載っていて、千葉県内のMOCHAとしては頭数が多い。駅から屋根のある道でつながり、雨の日も行きやすい。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://www.catmocha.jp/shop/makuhari/ で確認（営業時間・料金・住所。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）／検品⑥（2026-11-07）公式FAQ「お飲み物はドリンクバーをご用意」で、店舗ページの料金表にドリンクバー代の別記が無いため「ドリンク込み」を付けた（別途385円と明記する神戸北・岡山は除く）"
 },
 {
  "id": "gunma-cat-mocha-ota",
  "name": "猫カフェMOCHA イオンモール太田店",
  "animals": [
   "cat"
  ],
  "prefecture": "群馬県",
  "area": "太田市",
  "address": "群馬県太田市石原町81番地 イオンモール太田1F",
  "access": "東武鉄道 太田駅",
  "url": "https://www.catmocha.jp/shop/ota/",
  "price": "10分297円（平日・税込）、最大3,960円／土日祝・特定日は10分363円、最大4,290円。ドリンクバーあり（別料金の記載なし）",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入店19:30）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "子ども可",
   "写真OK",
   "ドリンク込み"
  ],
  "description": "太田市のイオンモール1階にある猫カフェ。公式ページに約21匹が載っていて、年齢制限がなく3歳以下は無料。群馬東部で買い物ついでに猫と過ごしたい人向けだ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://www.catmocha.jp/shop/ota/ で確認（営業時間・料金・住所。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）／検品⑥（2026-11-07）公式FAQ「お飲み物はドリンクバーをご用意」で、店舗ページの料金表にドリンクバー代の別記が無いため「ドリンク込み」を付けた（別途385円と明記する神戸北・岡山は除く）"
 },
 {
  "id": "tokyo-cat-mocha-shibuya",
  "name": "猫カフェMOCHA 渋谷センター街店",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "渋谷",
  "address": "東京都渋谷区宇田川町32-12 アソルティ渋谷8F",
  "access": "JR渋谷駅ハチ公口から徒歩5分",
  "url": "https://www.catmocha.jp/shop/shibuya/",
  "price": "10分297円（平日・税込）、最大3,960円／土日祝・特定日は10分385円、最大4,620円。ドリンクバーあり（別料金の記載なし）",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入店19:30）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "子ども可",
   "写真OK",
   "ドリンク込み"
  ],
  "description": "渋谷センター街のビル8階にある猫カフェ。公式ページに約25匹が載っていて、年中無休で3歳から入れる。人混みの街中で、ビルの上に静かな時間を作れる場所だ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://www.catmocha.jp/shop/shibuya/ で確認（営業時間・料金・住所。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）／検品⑥（2026-11-07）公式FAQ「お飲み物はドリンクバーをご用意」で、店舗ページの料金表にドリンクバー代の別記が無いため「ドリンク込み」を付けた（別途385円と明記する神戸北・岡山は除く）"
 },
 {
  "id": "tokyo-cat-mocha-shibuyakoendori",
  "name": "猫カフェ モカラウンジ 渋谷公園通り店",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "渋谷",
  "address": "東京都渋谷区神南1-16-3 ブル・ヴァールビル5F",
  "access": "JR・東京メトロ渋谷駅から徒歩6分",
  "url": "https://www.catmocha.jp/shop/shibuyakoendori/",
  "price": "10分297円（平日・税込）、最大3,960円／土日祝・特定日は10分385円、最大4,620円。ドリンクバーあり（別料金の記載なし）",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入店19:30）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "写真OK",
   "ドリンク込み"
  ],
  "description": "公園通り沿いのビル5階にあるモカラウンジ系列の猫カフェで、公式ページに約26匹が載っている。中学生以上が対象のため静かに過ごせる。センター街の店より少し奥まった立地だ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://www.catmocha.jp/shop/shibuyakoendori/ で確認（営業時間・料金・住所。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）／検品⑥（2026-11-07）公式FAQ「お飲み物はドリンクバーをご用意」で、店舗ページの料金表にドリンクバー代の別記が無いため「ドリンク込み」を付けた（別途385円と明記する神戸北・岡山は除く）"
 },
 {
  "id": "tokyo-cat-mocha-shinjuku",
  "name": "猫カフェ モカラウンジ 新宿店",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "新宿",
  "address": "東京都新宿区新宿3-31-5 新宿ペガサス館6F",
  "access": "JR新宿駅東南口から徒歩2分、新宿三丁目駅E9出口から徒歩1分",
  "url": "https://www.catmocha.jp/shop/shinjuku/",
  "price": "10分297円（平日・税込）、最大3,960円／土日祝・特定日は10分385円、最大4,620円。ドリンクバーあり（別料金の記載なし）",
  "price_level": 2,
  "hours": "10:00〜21:00（最終入店20:30）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "駅近",
   "写真OK",
   "ドリンク込み"
  ],
  "description": "新宿三丁目駅のすぐそばにあるモカラウンジ系列の店で、公式ページに約36匹が載っている。MOCHAの中でも掲載頭数が多い部類。夜9時まで開き、中学生以上が入れる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://www.catmocha.jp/shop/shinjuku/ で確認（営業時間・料金・住所。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）／検品⑥（2026-11-07）公式FAQ「お飲み物はドリンクバーをご用意」で、店舗ページの料金表にドリンクバー代の別記が無いため「ドリンク込み」を付けた（別途385円と明記する神戸北・岡山は除く）"
 },
 {
  "id": "tokyo-cat-mocha-tachikawa",
  "name": "猫カフェMOCHA 立川店",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "立川",
  "address": "東京都立川市曙町2-11-2 フロム中武6F",
  "access": "JR立川駅北口から徒歩2分",
  "url": "https://www.catmocha.jp/shop/tachikawa/",
  "price": "10分297円（平日・税込）、最大3,960円／土日祝・特定日は10分385円、最大4,620円。ドリンクバーあり（別料金の記載なし）",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入店19:30）",
  "closed": "施設の休館日に準ずる",
  "reservation": "不要",
  "features": [
   "駅近",
   "子ども可",
   "写真OK",
   "ドリンク込み"
  ],
  "description": "立川駅北口の商業施設フロム中武6階にある猫カフェ。公式ページに約25匹が載っていて、年齢制限はなく2歳以下は無料。ビックカメラの隣で、駅前の買い物と組み合わせやすい。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://www.catmocha.jp/shop/tachikawa/ で確認（営業時間・料金・住所。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）／検品⑥（2026-11-07）公式FAQ「お飲み物はドリンクバーをご用意」で、店舗ページの料金表にドリンクバー代の別記が無いため「ドリンク込み」を付けた（別途385円と明記する神戸北・岡山は除く）"
 },
 {
  "id": "gunma-cat-mocha-takasaki",
  "name": "猫カフェMOCHA イオンモール高崎店",
  "animals": [
   "cat"
  ],
  "prefecture": "群馬県",
  "area": "高崎市",
  "address": "群馬県高崎市棟高町1400番地 イオンモール高崎3F",
  "access": "JR高崎駅・前橋駅（最寄駅として公式に記載）",
  "url": "https://www.catmocha.jp/shop/takasaki/",
  "price": "10分297円（平日・税込）、最大3,960円／土日祝・特定日は10分363円、最大4,290円。ドリンクバーあり（別料金の記載なし）",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入店19:30）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "子ども可",
   "写真OK",
   "ドリンク込み"
  ],
  "description": "高崎のイオンモール3階にある猫カフェ。公式ページに約24匹が載っていて、年齢制限がなく3歳以下は無料。年中無休で、家族の買い物の合間に使いやすい。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://www.catmocha.jp/shop/takasaki/ で確認（営業時間・料金・住所。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）／検品⑥（2026-11-07）公式FAQ「お飲み物はドリンクバーをご用意」で、店舗ページの料金表にドリンクバー代の別記が無いため「ドリンク込み」を付けた（別途385円と明記する神戸北・岡山は除く）"
 },
 {
  "id": "tokyo-cat-moff-akiba",
  "name": "Cat Café MOFF ヨドバシAkiba店",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "秋葉原",
  "address": "東京都千代田区神田花岡町1-1 ヨドバシAkiba1F 104区画",
  "access": "JR秋葉原駅に直結（ヨドバシAkiba1F）",
  "url": "https://moff-moff.jp/cat-cafe/shop/akiba/",
  "price": "入園2,000円／60分、60分以降10分250円（税込）、3歳以下無料",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "ヨドバシAkibaの定休日に準ずる",
  "reservation": "不要",
  "features": [
   "駅近",
   "子ども可"
  ],
  "description": "秋葉原駅に直結する大型店舗の1階にある猫カフェ。公式ページに約21匹が載っていて、アメリカンショートヘアやペルシャ、マンチカンなどがいる。60分2,000円の定額制で、買い物の途中に予約なしで寄れる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://moff-moff.jp/cat-cafe/shop/akiba/ で確認（料金・営業時間・住所・予約。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）"
 },
 {
  "id": "aichi-cat-moff-anjo-lalaport",
  "name": "Cat Café MOFF ららぽーと安城店",
  "animals": [
   "cat"
  ],
  "prefecture": "愛知県",
  "area": "安城市",
  "address": "愛知県安城市大東町9-30 ららぽーと安城2F",
  "access": "JR安城駅から徒歩10分、名鉄北安城駅から徒歩14分",
  "url": "https://moff-moff.jp/cat-cafe/shop/anjo-lalaport/",
  "price": "入園700円／30分（ワンドリンクオーダー制）、30分以降10分250円、最大 平日1,900円・土日祝2,900円（税込）、3歳以下無料",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "ららぽーと安城の定休日に準ずる",
  "reservation": "不要",
  "features": [
   "子ども可"
  ],
  "description": "ららぽーと安城の2階にある猫カフェ。公式ページに約22匹が載っていて、ラグドールやノルウェージャンフォレストキャット、サイベリアンなど大きめの猫種が多い。同じモールの1階には別の小動物のMoffもあり、猫だけを目当てにするなら2階だ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://moff-moff.jp/cat-cafe/shop/anjo-lalaport/ で確認（料金・営業時間・住所・予約。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）"
 },
 {
  "id": "tokyo-cat-moff-cokkun-hachioji",
  "name": "猫カフェ コックンの別荘 八王子オーパ店",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "八王子",
  "address": "東京都八王子市旭町1-12 八王子オーパ 5階",
  "access": "JR八王子駅南口デッキ直結",
  "url": "https://moff-moff.jp/cat-cafe/shop/cokkun-hachioji/",
  "price": "入園700円／30分、30分以降10分250円、ドリンク（必須）380円。最大 平日大人2,400円・子ども（4歳以上）1,450円、土日祝大人2,900円・子ども1,900円（税込）、3歳以下無料",
  "price_level": 2,
  "hours": "10:00〜21:00（最終入園20:30）",
  "closed": "八王子オーパの定休日に準ずる",
  "reservation": "不要",
  "features": [
   "駅近",
   "子ども可"
  ],
  "description": "八王子駅南口のデッキから入れる八王子オーパ5階の猫カフェで、Moffが運営する「コックンの別荘」の一店。公式ページに約17匹が載っていて、ベンガルやノルウェージャンフォレストキャットがいる。夜9時まで開いている。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://moff-moff.jp/cat-cafe/shop/cokkun-hachioji/ で確認（料金・営業時間・住所・予約。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）"
 },
 {
  "id": "shizuoka-cat-moff-hamamatsu",
  "name": "Cat Café MOFF イオンモール浜松志都呂店",
  "animals": [
   "cat"
  ],
  "prefecture": "静岡県",
  "area": "浜松市",
  "address": "静岡県浜松市中央区志都呂2-37-1 イオンモール浜松志都呂2F",
  "access": "JR舞阪駅・浜松駅から路線バスあり（公式表記）",
  "url": "https://moff-moff.jp/cat-cafe/shop/hamamatsu/",
  "price": "入園700円／30分（ワンドリンクオーダー制）、30分以降10分250円、最大 平日1,900円・土日祝2,900円（税込）、3歳以下無料",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "イオンモール浜松志都呂の定休日に準ずる",
  "reservation": "不要",
  "features": [
   "子ども可"
  ],
  "description": "浜松西部のイオンモール2階にある猫カフェ。公式ページに約19匹が載っていて、サイベリアンやメインクーンなど長毛の大型種が目立つ。車での来店が中心の郊外型の店だ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://moff-moff.jp/cat-cafe/shop/hamamatsu/ で確認（料金・営業時間・住所・予約。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）"
 },
 {
  "id": "tokyo-cat-moff-harajuku",
  "name": "Cat Café MOFF CUTE CUBE 原宿店",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "原宿",
  "address": "東京都渋谷区神宮前1-7-1 CUTE CUBE HARAJUKU 3F",
  "access": "CUTE CUBE HARAJUKU 3F（最寄り駅は公式ページに記載なし）",
  "url": "https://moff-moff.jp/cat-cafe/shop/harajuku/",
  "price": "入園2,000円／60分、60分以降10分250円（税込）、3歳以下無料",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "CUTE CUBE HARAJUKUの定休日に準ずる",
  "reservation": "不要",
  "features": [
   "子ども可"
  ],
  "description": "原宿のCUTE CUBE HARAJUKU 3階にある猫カフェ。公式ページに約25匹が載っていて、マンチカンやノルウェージャンフォレストキャット、サイベリアンがいる。同じビルには小動物のMoffもあるが、こちらは猫だけの店だ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://moff-moff.jp/cat-cafe/shop/harajuku/ で確認（料金・営業時間・住所・予約。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）"
 },
 {
  "id": "osaka-cat-moff-hirakata",
  "name": "Cat Café MOFF 枚方モール店",
  "animals": [
   "cat"
  ],
  "prefecture": "大阪府",
  "area": "枚方市",
  "address": "大阪府枚方市岡東町19-1 枚方モール4F",
  "access": "京阪電車 枚方市駅の東口改札に直結",
  "url": "https://moff-moff.jp/cat-cafe/shop/hirakata/",
  "price": "入園700円／30分、30分以降10分250円、最大 平日1,900円・土日祝2,900円（税込）、飲み放題ドリンク料380円が別に必須、3歳以下無料",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "枚方モールの定休日に準ずる",
  "reservation": "不要",
  "features": [
   "駅近",
   "子ども可"
  ],
  "description": "京阪枚方市駅の東口改札につながる枚方モール4階にある猫カフェ。公式ページに約21匹が載っていて、ラグドールやサイベリアン、マンチカンがいる。駅から濡れずに行けるので、買い物ついでに寄りやすい。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://moff-moff.jp/cat-cafe/shop/hirakata/ で確認（料金・営業時間・住所・予約。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）"
 },
 {
  "id": "hiroshima-cat-moff-hiroshimafuchu",
  "name": "Cat Café MOFF イオンモール広島府中店",
  "animals": [
   "cat"
  ],
  "prefecture": "広島県",
  "area": "府中町",
  "address": "広島県安芸郡府中町大須2-1-1 イオンモール広島府中3F",
  "access": "JR天神川駅・矢賀駅から徒歩5分（公式表記）",
  "url": "https://moff-moff.jp/cat-cafe/shop/hiroshimafuchu/",
  "price": "入園700円／30分（ワンドリンクオーダー制）、30分以降10分250円、最大 平日1,900円・土日祝2,900円（税込）、3歳以下無料",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "イオンモール広島府中の定休日に準ずる",
  "reservation": "不要",
  "features": [
   "子ども可"
  ],
  "description": "府中町のイオンモール3階にある猫カフェ。公式ページに約23匹が載っていて、アメリカンショートヘアやスコティッシュフォールド、ノルウェージャンフォレストキャットが多い。シャトルバスや路線バスで行ける。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://moff-moff.jp/cat-cafe/shop/hiroshimafuchu/ で確認（料金・営業時間・住所・予約。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）"
 },
 {
  "id": "aichi-cat-moff-kisogawa",
  "name": "Cat Café MOFF イオンモール木曽川店",
  "animals": [
   "cat"
  ],
  "prefecture": "愛知県",
  "area": "一宮市",
  "address": "愛知県一宮市木曽川町黒田字南八ツケ池25-1 イオンモール木曽川1F",
  "access": "名鉄一宮駅から名鉄バスで約30分（公式表記）",
  "url": "https://moff-moff.jp/cat-cafe/shop/kisogawa/",
  "price": "入園700円／30分、30分以降10分250円、最大 平日1,900円・土日祝2,900円（税込）、飲み放題ドリンク料380円が別に必須、3歳以下無料",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "イオンモール木曽川の定休日に準ずる",
  "reservation": "不要",
  "features": [
   "子ども可"
  ],
  "description": "一宮市木曽川のイオンモール1階にある猫カフェ。公式ページに約22匹が載っていて、メインクーンやミヌエット、ノルウェージャンフォレストキャットがいる。駅から遠く、車か路線バスでの来店が前提になる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://moff-moff.jp/cat-cafe/shop/kisogawa/ で確認（料金・営業時間・住所・予約。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）"
 },
 {
  "id": "hiroshima-cat-moff-minamoa",
  "name": "Cat Café MOFF minamoa広島店",
  "animals": [
   "cat"
  ],
  "prefecture": "広島県",
  "area": "広島市南区",
  "address": "広島県広島市南区松原町2-37 minamoa広島5F",
  "access": "JR広島駅に直結",
  "url": "https://moff-moff.jp/cat-cafe/shop/minamoa/",
  "price": "入園700円／30分（ワンドリンクオーダー制）、30分以降10分250円、最大 平日1,900円・土日祝2,900円（税込）、3歳以下無料",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "minamoa広島の定休日に準ずる",
  "reservation": "不要",
  "features": [
   "駅近",
   "子ども可"
  ],
  "description": "広島駅ビルminamoaの5階にある猫カフェ。公式ページに約25匹が載っていて、スコティッシュフォールドやラグドール、ラガマフィンなどがいる。新幹線の待ち時間にも使える駅直結の立地だ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://moff-moff.jp/cat-cafe/shop/minamoa/ で確認（料金・営業時間・住所・予約。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）"
 },
 {
  "id": "aichi-cat-moff-nagoya",
  "name": "Cat Café MOFF 名古屋PARCO店",
  "animals": [
   "cat"
  ],
  "prefecture": "愛知県",
  "area": "名古屋市中区",
  "address": "愛知県名古屋市中区栄3-29-11 名古屋PARCO midi3F",
  "access": "地下鉄名城線 矢場町駅から直結（名古屋PARCO東館B1Fへ）",
  "url": "https://moff-moff.jp/cat-cafe/shop/nagoya/",
  "price": "入園700円／30分（ワンドリンクオーダー制）、30分以降10分250円、最大 平日1,900円・土日祝2,900円（税込）、3歳以下無料",
  "price_level": 2,
  "hours": "11:00〜19:00（最終入園18:30）",
  "closed": "名古屋PARCOの定休日に準ずる",
  "reservation": "不要",
  "features": [
   "駅近",
   "子ども可"
  ],
  "description": "栄の名古屋PARCO midi3階にある猫カフェ。公式ページに約23匹が載っていて、スコティッシュフォールドやミヌエット、マンチカンがいる。営業は11時から19時までと短めなので、時間を確かめてから行きたい。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://moff-moff.jp/cat-cafe/shop/nagoya/ で確認（料金・営業時間・住所・予約。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）"
 },
 {
  "id": "aichi-cat-moff-nagoyadome",
  "name": "Cat Café MOFF イオンモールナゴヤドーム前店",
  "animals": [
   "cat"
  ],
  "prefecture": "愛知県",
  "area": "名古屋市東区",
  "address": "愛知県名古屋市東区矢田南4-102-3 イオンモールナゴヤドーム前1F",
  "access": "地下鉄名城線ナゴヤドーム前矢田駅から徒歩10分、JR大曽根駅から徒歩15分",
  "url": "https://moff-moff.jp/cat-cafe/shop/nagoyadome/",
  "price": "入園700円／30分、30分以降10分250円、最大 平日1,900円・土日祝2,900円（税込）、飲み放題ドリンク料380円が別に必須、3歳以下無料",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "イオンモールナゴヤドーム前の定休日に準ずる",
  "reservation": "不要",
  "features": [
   "子ども可"
  ],
  "description": "ナゴヤドーム前のイオンモール1階にある猫カフェ。公式ページに約19匹が載っていて、スコティッシュフォールドやノルウェージャンフォレストキャット、ラガマフィンがいる。ドーム前矢田駅から歩けるため、電車でも行ける。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://moff-moff.jp/cat-cafe/shop/nagoyadome/ で確認（料金・営業時間・住所・予約。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）"
 },
 {
  "id": "osaka-cat-moff-sennan",
  "name": "Cat Café MOFF イオンモールりんくう泉南店",
  "animals": [
   "cat"
  ],
  "prefecture": "大阪府",
  "area": "泉南市",
  "address": "大阪府泉南市りんくう南浜3-12 イオンモールりんくう泉南1F",
  "access": "南海・JRりんくうタウン駅ほかバスあり、南海本線樽井駅から徒歩15分（公式表記）",
  "url": "https://moff-moff.jp/cat-cafe/shop/sennan/",
  "price": "入園700円／30分、30分以降10分250円、最大 平日1,900円・土日祝2,900円（税込）、飲み放題ドリンク料380円が別に必須、3歳以下無料",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "イオンモールりんくう泉南の定休日に準ずる",
  "reservation": "不要",
  "features": [
   "子ども可"
  ],
  "description": "関西空港の近く、りんくう泉南のイオンモール1階にある猫カフェ。公式ページに約25匹が載っていて、サイベリアンやミヌエット、エキゾチックショートヘアがいる。旅行の前後に立ち寄る人にも向く。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://moff-moff.jp/cat-cafe/shop/sennan/ で確認（料金・営業時間・住所・予約。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）"
 },
 {
  "id": "hiroshima-cat-moff-shimint",
  "name": "Cat Café MOFF SHIMINT HIROSHIMA店",
  "animals": [
   "cat"
  ],
  "prefecture": "広島県",
  "area": "広島市中区",
  "address": "広島県広島市中区基町5-25 SHIMINT HIROSHIMA A棟2F",
  "access": "SHIMINT HIROSHIMA（広島市中区基町。最寄り駅は公式ページに記載なし）",
  "url": "https://moff-moff.jp/cat-cafe/shop/shimint/",
  "price": "入園700円／30分（ワンドリンクオーダー制）、30分以降10分250円、最大 平日1,900円・土日祝2,900円（税込）、3歳以下無料",
  "price_level": 2,
  "hours": "11:00〜20:00（最終入園19:30）",
  "closed": "SHIMINT HIROSHIMAの定休日に準ずる",
  "reservation": "不要",
  "features": [
   "子ども可"
  ],
  "description": "広島市中心部、基町のSHIMINT HIROSHIMA A棟2階にある猫カフェ。公式ページに約28匹が載っていて、スコティッシュフォールドが5匹、ラグドールとラガマフィンが各4匹と、MOFFの中でも頭数が多い。開店は11時から。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://moff-moff.jp/cat-cafe/shop/shimint/ で確認（料金・営業時間・住所・予約。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）"
 },
 {
  "id": "osaka-cat-moff-tennoji",
  "name": "Cat Café MOFF 天王寺ミオ店",
  "animals": [
   "cat"
  ],
  "prefecture": "大阪府",
  "area": "天王寺",
  "address": "大阪府大阪市天王寺区悲田院町10-39 天王寺ミオ本館6F",
  "access": "天王寺ミオ本館 6F（最寄り駅は公式ページに記載なし）",
  "url": "https://moff-moff.jp/cat-cafe/shop/tennoji/",
  "price": "入園900円／30分（ワンドリンクオーダー制）、30分以降10分250円、最大 平日2,100円・土日祝3,100円（税込）、3歳以下無料",
  "price_level": 3,
  "hours": "10:30〜20:00（最終入園19:30）",
  "closed": "天王寺ミオの定休日に準ずる",
  "reservation": "不要",
  "features": [
   "子ども可"
  ],
  "description": "天王寺ミオ本館の6階にある猫カフェ。公式ページに約23匹が載っていて、ラパーマやラガマフィン、サイベリアンなど毛質のめずらしい猫種が目立つ。入園料は他のMOFFより高く、最大料金も平日2,100円からになる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://moff-moff.jp/cat-cafe/shop/tennoji/ で確認（料金・営業時間・住所・予約。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）／検品⑥（2026-11-07）ワンドリンクの価格が公式に無いが、1時間1,650円＋1ドリンクで2,000円を超える見込みのため price_level 3（ドリンク必須の沖縄国際通り店と同じ扱い）"
 },
 {
  "id": "aichi-cat-moff-toyokawa",
  "name": "Cat Café MOFF イオンモール豊川店",
  "animals": [
   "cat"
  ],
  "prefecture": "愛知県",
  "area": "豊川市",
  "address": "愛知県豊川市白鳥町兎足1-16 イオンモール豊川3F",
  "access": "イオンモール豊川（豊川市白鳥町。最寄り駅は公式ページに記載なし）",
  "url": "https://moff-moff.jp/cat-cafe/shop/toyokawa/",
  "price": "入園700円／30分（ワンドリンクオーダー制）、30分以降10分250円、最大 平日1,900円・土日祝2,900円（税込）、3歳以下無料",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "イオンモール豊川の定休日に準ずる",
  "reservation": "不要",
  "features": [
   "子ども可"
  ],
  "description": "豊川市のイオンモール3階にある猫カフェ。公式ページに約25匹が載っていて、サイベリアンとマンチカンが各4匹、ラガマフィンが3匹いる。車で来る家族連れが中心の郊外型の店だ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://moff-moff.jp/cat-cafe/shop/toyokawa/ で確認（料金・営業時間・住所・予約。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）"
 },
 {
  "id": "okinawa-cat-moff-toyosaki",
  "name": "Cat Café MOFF イーアス沖縄豊崎店",
  "animals": [
   "cat"
  ],
  "prefecture": "沖縄県",
  "area": "豊見城市",
  "address": "沖縄県豊見城市豊崎3-35 イーアス沖縄豊崎2F",
  "access": "イーアス沖縄豊崎（豊見城市豊崎。最寄り駅は公式ページに記載なし）",
  "url": "https://moff-moff.jp/cat-cafe/shop/toyosaki/",
  "price": "入園700円／30分（ワンドリンクオーダー制）、30分以降10分250円、最大 平日1,900円・土日祝2,900円（税込）、3歳以下無料",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "イーアス沖縄豊崎の定休日に準ずる",
  "reservation": "不要",
  "features": [
   "子ども可"
  ],
  "description": "那覇空港に近い、イーアス沖縄豊崎の2階にある猫カフェ。公式ページに約29匹が載っていて、スコティッシュフォールドが4匹、ラグドールやサイベリアンが各3匹いる。同じモールには別系列の猫カフェもあるため、店名を確認して入りたい。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://moff-moff.jp/cat-cafe/shop/toyosaki/ で確認（料金・営業時間・住所・予約。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）"
 },
 {
  "id": "hyogo-cat-moff-tsukashin",
  "name": "Cat Café MOFF つかしん店",
  "animals": [
   "cat"
  ],
  "prefecture": "兵庫県",
  "area": "尼崎市",
  "address": "兵庫県尼崎市塚口本町4-8-1 グンゼタウンセンターつかしん にしまち1F",
  "access": "阪急伊丹線 稲野駅から約300m、JR宝塚線 猪名寺駅から約400m",
  "url": "https://moff-moff.jp/cat-cafe/shop/tsukashin/",
  "price": "入園700円／30分、30分以降10分250円、最大 平日1,900円・土日祝2,900円（税込）、飲み放題ドリンク料380円が別に必須、3歳以下無料",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "グンゼタウンセンターつかしんの定休日に準ずる",
  "reservation": "不要",
  "features": [
   "子ども可"
  ],
  "description": "尼崎のつかしんにある猫カフェ。公式ページに約26匹が載っていて、ラガマフィンが4匹、ラグドールやアメリカンショートヘアが各3匹いる。最寄駅から約300〜400mと歩ける距離だ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式店舗ページ https://moff-moff.jp/cat-cafe/shop/tsukashin/ で確認（料金・営業時間・住所・予約。猫の頭数は店舗ページの猫紹介の掲載数を数えた概数）"
 },
 {
  "id": "kanagawa-cat-leon-ishikawacho",
  "name": "猫カフェ れおん（石川町店）",
  "animals": [
   "cat"
  ],
  "prefecture": "神奈川県",
  "area": "横浜市中区",
  "address": "神奈川県横浜市中区松影町1-3-2 関山ビル2階",
  "access": "JR石川町駅北口（中華街口）から徒歩1分",
  "url": "https://www.nekocafe-leon.com/shop-list/leon",
  "price": "基本30分1,100円（フリードリンク付き）、以降10分220円、90分1,980円、120分2,200円（税込）。ドリンクなしプランあり",
  "price_level": 2,
  "hours": "11:00〜20:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "駅近",
   "保護動物",
   "里親募集",
   "ドリンク込み"
  ],
  "description": "2008年に開いた横浜初の猫カフェで、石川町駅から1分、中華街のそばにある。店内の猫はすべて里親を探している猫で、カフェスペースと猫の部屋が分かれている。抱き上げは禁止で、電話での来店予約も受け付けている。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://www.nekocafe-leon.com/shop-list/leon で確認。電話での事前予約も受け付けると公式に記載（予約なしで入れるかの明記なし）。11月8日は13時開店のお知らせあり（2026-11-04掲載）"
 },
 {
  "id": "kanagawa-cat-nyankuru-kawasaki",
  "name": "譲渡型猫カフェ にゃんくる川崎店",
  "animals": [
   "cat"
  ],
  "prefecture": "神奈川県",
  "area": "川崎市川崎区",
  "address": "神奈川県川崎市川崎区小川町13-21 セコロTステージ202",
  "access": "JR川崎駅東口から徒歩5分",
  "url": "https://www.nekocafe-leon.com/shop-list/kawasaki-nyankuru",
  "price": "最初の30分1,100円（ドリンク付き）、以降10分220円、90分1,980円、120分2,200円（いずれも税込）",
  "price_level": 2,
  "hours": "平日11:00〜13:00・14:00〜20:00／土日祝11:00〜20:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "駅近",
   "保護動物",
   "里親募集",
   "ドリンク込み"
  ],
  "description": "2013年開店の、れおんの姉妹店にあたる譲渡型の猫カフェ。約20匹の猫を預かっていて、猫エイズ陽性の猫のスタッフだけで運営する取り組みをしている。平日は13時から14時が休憩で、予約は不要。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://www.nekocafe-leon.com/shop-list/kawasaki-nyankuru と店舗情報 https://www.nekocafe-leon.com/shop-list で確認（2026-11-04のお知らせ時点）"
 },
 {
  "id": "kanagawa-cat-nyankuru-sakuragicho",
  "name": "譲渡型猫カフェ にゃんくる桜木町店",
  "animals": [
   "cat"
  ],
  "prefecture": "神奈川県",
  "area": "横浜市中区",
  "address": "神奈川県横浜市中区花咲町1-46 桜木町ビル3F",
  "access": "桜木町駅から徒歩5分",
  "url": "https://www.nekocafe-leon.com/shop-list/sakuragi-nyankuru",
  "price": "最初の30分1,100円（ドリンク付き）、以降10分220円、90分1,980円、120分2,200円（いずれも税込）",
  "price_level": 2,
  "hours": "平日11:00〜13:00・14:00〜20:00／土日祝11:00〜20:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "駅近",
   "保護動物",
   "里親募集",
   "ドリンク込み"
  ],
  "description": "2016年に開いた、桜木町駅から徒歩5分の譲渡型猫カフェ。猫のスタッフ全員が里親を探している。みなとみらい観光の途中に予約なしで寄れる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://www.nekocafe-leon.com/shop-list/sakuragi-nyankuru と店舗情報 https://www.nekocafe-leon.com/shop-list で確認（2026-11-04のお知らせ時点）。動物取扱業の表示に有効期限令和8年3月14日とあるが、お知らせは2026-09-30付まで更新されている"
 },
 {
  "id": "tokyo-cat-nyankuru-kamata",
  "name": "譲渡型猫カフェ にゃんくる蒲田店",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "蒲田",
  "address": "東京都大田区西蒲田7-4-6 シティ蒲田4F",
  "access": "JR蒲田駅西口から徒歩2分、京急蒲田駅から徒歩10分",
  "url": "https://www.nekocafe-leon.com/shop-list/kamata-nyankuru",
  "price": "最初の30分1,100円（ドリンク付き）、以降10分220円、90分1,980円、120分2,200円（いずれも税込）",
  "price_level": 2,
  "hours": "平日11:00〜13:00・14:00〜20:00／土日祝11:00〜20:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "駅近",
   "保護動物",
   "里親募集",
   "ドリンク込み"
  ],
  "description": "2016年に東京初進出として開いた、蒲田駅西口から徒歩2分の譲渡型猫カフェ。1階が居酒屋のビルの4階にあり、猫専用のペットホテルも併設する。2026年に開店10周年のキャンペーンを行った。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://www.nekocafe-leon.com/shop-list/kamata-nyankuru と店舗情報 https://www.nekocafe-leon.com/shop-list で確認（2026-11-04のお知らせ時点）"
 },
 {
  "id": "tokyo-cat-asakusa-nekoen",
  "name": "保護猫カフェ 浅草ねこ園",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "浅草",
  "address": "東京都台東区花川戸2-7-6 池田ビル3階",
  "access": "浅草駅から徒歩6分",
  "url": "http://www.asakusanekoen.com/",
  "price": "入場料1時間 大人1,000円・子ども900円（3歳〜中学生）、以降30分400円、平日限定3時間2,300円",
  "price_level": 1,
  "hours": "12:00〜20:00",
  "closed": "火曜（祝日の場合は翌日）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "子ども可",
   "写真OK"
  ],
  "description": "浅草駅から歩いて行ける保護猫カフェで、10匹以上の保護猫がいる。食事のカフェではなく自宅のようなくつろぎの空間で、飲み物は缶やボトルを販売する。靴下の着用が必要で、持っていなければ店で買える。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://www.asakusanekoen.com/index_2.html と https://www.asakusanekoen.com/ で確認（料金・時間・定休日・住所）。予約はメールまたは電話で受付と公式に記載（予約が必須かの明記なし）。公式ページの更新日は不明（フッターは2024年）、第三者の2026年記事で営業継続と移転後住所を確認／検品⑥（2026-11-07）1時間1,000円で飲み物は任意のため price_level 1。公式は予約の受け方を書くだけで勧めていないため不要"
 },
 {
  "id": "yamaguchi-cat-coorikuya-sunpark-ajisu",
  "name": "猫喫茶 空陸家 サンパークあじす店",
  "animals": [
   "cat"
  ],
  "prefecture": "山口県",
  "area": "山口市阿知須",
  "address": "山口県山口市阿知須4825-1 サンパークあじす内2F",
  "access": "宇部線 阿知須駅 徒歩8分",
  "url": "https://www.coorikuya.com/shop/%e3%82%b5%e3%83%b3%e3%83%91%e3%83%bc%e3%82%af%e3%81%82%e3%81%98%e3%81%99%e5%ba%97/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日10:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "山口市阿知須の複合施設サンパークあじすの2階にある猫カフェで、ペットショップに併設されている。買い物のついでに立ち寄れる場所で、阿知須駅からは徒歩8分ほどである。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/%e3%82%b5%e3%83%b3%e3%83%91%e3%83%bc%e3%82%af%e3%81%82%e3%81%98%e3%81%99%e5%ba%97/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "yamaguchi-cat-coorikuya-seamall-shimonoseki",
  "name": "猫喫茶 空陸家 シーモール下関店",
  "animals": [
   "cat"
  ],
  "prefecture": "山口県",
  "area": "下関市竹崎町",
  "address": "山口県下関市竹崎町4-4-8 シーモール3階",
  "access": "下関駅 徒歩4分",
  "url": "https://www.coorikuya.com/shop/%e3%82%b7%e3%83%bc%e3%83%a2%e3%83%bc%e3%83%ab%e4%b8%8b%e9%96%a2%e5%ba%97/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日10:00〜19:30／土日祝10:00〜19:30（最終受付19:00）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "下関駅から徒歩4分、商業施設シーモールの3階に入る猫カフェだ。ペットショップ併設で、平日も土日祝も19時半までの営業になっている。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/%e3%82%b7%e3%83%bc%e3%83%a2%e3%83%bc%e3%83%ab%e4%b8%8b%e9%96%a2%e5%ba%97/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "tokyo-cat-coorikuya-sangenjaya",
  "name": "猫喫茶 空陸家plus 三軒茶屋店",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "世田谷区三軒茶屋",
  "address": "東京都世田谷区三軒茶屋 2-14-8",
  "access": "三軒茶屋駅 徒歩4分",
  "url": "https://www.coorikuya.com/shop/%e4%b8%89%e8%bb%92%e8%8c%b6%e5%b1%8b%e5%ba%97/",
  "price": "30分880円（入場495円＋ドリンクバー385円）、延長10分165円、フリータイム1,980円（税込）（空陸家plusの案内。一部店舗は異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "2022年4月に開いた空陸家plusの三軒茶屋店で、世田谷区にある。入場料とドリンクバーを分けたplus形式の料金で、駅から徒歩4分である。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/%e4%b8%89%e8%bb%92%e8%8c%b6%e5%b1%8b%e5%ba%97/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "shiga-cat-coorikuya-higashiomi",
  "name": "猫喫茶 空陸家 東近江店",
  "animals": [
   "cat"
  ],
  "prefecture": "滋賀県",
  "area": "東近江市五個荘",
  "address": "滋賀県東近江市五個荘北町屋町241-2",
  "access": "JR能登川駅より車で10分",
  "url": "https://www.coorikuya.com/shop/%e6%9d%b1%e8%bf%91%e6%b1%9f%e5%ba%97/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "滋賀県東近江市の五個荘にある郊外型の猫カフェで、ペットショップに併設されている。能登川駅から車で10分ほどなので、車で行く人向けの店である。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/%e6%9d%b1%e8%bf%91%e6%b1%9f%e5%ba%97/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "kanagawa-cat-coorikuya-hadano",
  "name": "猫喫茶 空陸家 秦野店",
  "animals": [
   "cat"
  ],
  "prefecture": "神奈川県",
  "area": "秦野市落合",
  "address": "神奈川県秦野市落合361-6",
  "access": "秦野駅 車12分",
  "url": "https://www.coorikuya.com/shop/%e7%a7%a6%e9%87%8e%e5%ba%97/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "神奈川県秦野市の落合にあり、2022年3月に開いたペットショップ併設の猫カフェである。最寄りの秦野駅から車で12分かかるため、車での来店が前提になる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/%e7%a7%a6%e9%87%8e%e5%ba%97/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "tokyo-cat-coorikuya-akasaka-jungle",
  "name": "猫喫茶 空陸家 赤坂ジャングル店",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "港区赤坂",
  "address": "東京都港区赤坂3-20-2",
  "access": "東京メトロ赤坂見附駅から徒歩1分",
  "url": "https://www.coorikuya.com/shop/akasaka/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "駅近",
   "子ども可"
  ],
  "description": "赤坂見附駅から徒歩1分の猫カフェで、店のコンセプトはジャングルである。都心のオフィス街で猫と過ごす時間を作れる店で、ペットショップに併設されている。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/akasaka/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "akita-cat-coorikuya-akita",
  "name": "猫喫茶 空陸家 秋田店",
  "animals": [
   "cat"
  ],
  "prefecture": "秋田県",
  "area": "秋田市川元山下町",
  "address": "秋田県秋田市川元山下町4-17",
  "access": "JR秋田駅から徒歩29分",
  "url": "https://www.coorikuya.com/shop/akita/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "秋田市川元にある猫カフェで、内装は昔ながらの和の家をテーマにしている。ペットショップ併設で、駐車場があり、車で行きやすい。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/akita/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "hyogo-cat-coorikuya-amagasaki",
  "name": "猫喫茶 空陸家 尼崎店",
  "animals": [
   "cat"
  ],
  "prefecture": "兵庫県",
  "area": "尼崎市水堂町",
  "address": "兵庫県尼崎市水堂町3-19-50",
  "access": "阪急神戸線「武庫之荘駅」徒歩12分",
  "url": "https://www.coorikuya.com/shop/amagasaki/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "尼崎市水堂町のペットショップ併設の猫カフェだ。高い位置に通路が巡らされており、猫を見上げる時間が長い店である。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/amagasaki/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "aomori-cat-coorikuya-aomori",
  "name": "猫喫茶 空陸家 青森店",
  "animals": [
   "cat"
  ],
  "prefecture": "青森県",
  "area": "青森市浜田玉川",
  "address": "青森県青森市浜田玉川344",
  "access": "青い森鉄道筒井駅から徒歩20分",
  "url": "https://www.coorikuya.com/shop/aomori/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "2020年10月に開いた、青森県で最初の空陸家である。青森市浜田玉川にあり、筒井駅から徒歩20分ほど離れた郊外の店だ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/aomori/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "hokkaido-cat-coorikuya-asahikawa",
  "name": "猫喫茶 空陸家 旭川店",
  "animals": [
   "cat"
  ],
  "prefecture": "北海道",
  "area": "旭川市永山",
  "address": "北海道旭川市永山11条4丁目121-15(旭川パワーズ ペットショップCoo&RIKU旭川店内)",
  "access": "JR石北本線 南永山駅から徒歩6分",
  "url": "https://www.coorikuya.com/shop/asahikawa/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "旭川パワーズ内のペットショップCoo&RIKU旭川店の店内にある、小さめの猫カフェである。スペースがこぢんまりとしているぶん、猫との距離が近いのが特徴だ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/asahikawa/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "ibaraki-cat-coorikuya-chikusei",
  "name": "猫喫茶 空陸家 筑西店",
  "animals": [
   "cat"
  ],
  "prefecture": "茨城県",
  "area": "筑西市神分",
  "address": "茨城県筑西市神分43-1 2F",
  "access": "JR下館駅から車で約9分",
  "url": "https://www.coorikuya.com/shop/chikusei/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "茨城県筑西市にある、同県では日立店に続く2店舗目の空陸家である。ペットショップの2階に入り、下館駅から車で9分ほどの距離だ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/chikusei/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "chiba-cat-coorikuya-higashi-funabashi",
  "name": "猫喫茶 空陸家 東船橋店",
  "animals": [
   "cat"
  ],
  "prefecture": "千葉県",
  "area": "船橋市前原西",
  "address": "千葉県船橋市前原西1-13-1",
  "access": "JR津田沼駅・東船橋駅より徒歩13分",
  "url": "https://www.coorikuya.com/shop/e-funabashi/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "船橋市前原西にあるペットショップ併設の猫カフェで、内装は和のおうちをイメージしている。木の素材を使ったキャットウォークが壁面に並ぶ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/e-funabashi/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "kanagawa-cat-coorikuya-plus-enoshima",
  "name": "猫喫茶 空陸家plus 江の島店",
  "animals": [
   "cat"
  ],
  "prefecture": "神奈川県",
  "area": "藤沢市片瀬海岸",
  "address": "神奈川県藤沢市片瀬海岸3-22-17",
  "access": "小田急江ノ島線 片瀬江ノ島駅から徒歩7分",
  "url": "https://www.coorikuya.com/shop/enoshima/",
  "price": "入場30分495円＋延長10分165円（税込）に、ドリンクバーでなく1ドリンク（418円〜）を注文する1ドリンク制。公式の料金システムに江の島店だけ1ドリンク制の注記あり",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "写真OK",
   "子ども可"
  ],
  "description": "江の島観光の入口にあたる片瀬海岸にある空陸家plusで、片瀬江ノ島駅から徒歩7分である。ハリネズミパラダイス江の島店と同じ建物・同じ電話番号で、ペットショップ Coo&RIKU の一角にある。江の島店は料金が1ドリンク制で、車で来た客には店舗1階駐車場の2時間無料券が出る。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/enoshima/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）／検品⑥（2026-11-07）ハリネズミパラダイス江の島店（hedgehog.json）と住所・電話・営業時間・動物取扱業の登録日が同じ。公式はそれぞれ別の店舗ページを持つため別の店として掲載し、説明文で併設を明記。ドリンクバーでなく1ドリンク制のため「ドリンク込み」を外した"
 },
 {
  "id": "fukuoka-cat-coorikuya-plus-fukuoka-higashi",
  "name": "猫喫茶 空陸家plus 福岡東店",
  "animals": [
   "cat"
  ],
  "prefecture": "福岡県",
  "area": "福岡市東区東浜",
  "address": "福岡県福岡市東区東浜1-3-1",
  "access": "箱崎線「箱崎宮前駅」徒歩9分",
  "url": "https://www.coorikuya.com/shop/fukuoka-e/",
  "price": "30分880円（入場495円＋ドリンクバー385円）、延長10分165円、フリータイム1,980円（税込）（空陸家plusの案内。一部店舗は異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "福岡市東区の東浜にある空陸家plusで、木の温かみのある店内に大きなツリー型のキャットタワーがある。箱崎宮前駅から徒歩9分で、ペットショップに併設されている。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/fukuoka-e/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "fukuoka-cat-coorikuya-fukuoka-koga",
  "name": "猫喫茶 空陸家 福岡古賀店",
  "animals": [
   "cat"
  ],
  "prefecture": "福岡県",
  "area": "古賀市花見東",
  "address": "福岡県古賀市花見東1-10-12",
  "access": "古賀市花見東（最寄り駅は公式ページに記載なし）",
  "url": "https://www.coorikuya.com/shop/fukuoka-koga/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "福岡県古賀市の花見東にあるペットショップ併設の猫カフェだ。壁面にキャットウォークがめぐらされ、猫が上を移動する様子も見られる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/fukuoka-koga/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "fukuoka-cat-coorikuya-plus-fukuoka-nishi",
  "name": "猫喫茶 空陸家plus 福岡西店",
  "animals": [
   "cat"
  ],
  "prefecture": "福岡県",
  "area": "福岡市西区福重",
  "address": "福岡県福岡市西区福重4-1-18",
  "access": "JR筑肥線「姪浜駅」 徒歩24分",
  "url": "https://www.coorikuya.com/shop/fukuoka-w/",
  "price": "30分880円（入場495円＋ドリンクバー385円）、延長10分165円、フリータイム1,980円（税込）（空陸家plusの案内。一部店舗は異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "福岡市西区福重にある空陸家plusで、光をたっぷり取り入れた明るい店内が特徴である。姪浜駅から徒歩24分ほど離れており、ペットショップに併設されている。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/fukuoka-w/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "miyagi-cat-coorikuya-aeontown-furukawa",
  "name": "猫喫茶 空陸家 イオンタウン古川店",
  "animals": [
   "cat"
  ],
  "prefecture": "宮城県",
  "area": "大崎市古川",
  "address": "宮城県大崎市古川沢田筒場浦15",
  "access": "陸羽東線「古川駅」より徒歩48分",
  "url": "https://www.coorikuya.com/shop/furukawa/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "宮城県大崎市のイオンタウン古川にある猫カフェだ。段差の多い造りで猫がよく動き、午後遅くには日差しが入って猫がくつろぐ時間になる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/furukawa/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "gifu-cat-coorikuya-ginan",
  "name": "猫喫茶 空陸家 岐南店",
  "animals": [
   "cat"
  ],
  "prefecture": "岐阜県",
  "area": "羽島郡岐南町",
  "address": "岐阜県羽島郡岐南町上印食3丁目 169番",
  "access": "名鉄各務原線「細畑駅」徒歩6分",
  "url": "https://www.coorikuya.com/shop/ginan/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "岐阜県岐南町にある猫カフェで、大きな窓から光が入る木のぬくもりの店内になっている。壁や天井にキャットウォークがあり、細畑駅から徒歩6分である。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/ginan/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "ibaraki-cat-coorikuya-hitachi",
  "name": "猫喫茶 空陸家 日立店",
  "animals": [
   "cat"
  ],
  "prefecture": "茨城県",
  "area": "日立市日高町",
  "address": "茨城県日立市日高町4-13-32",
  "access": "（JR常磐線）小木津駅から徒歩16分",
  "url": "https://www.coorikuya.com/shop/hitachi/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "茨城県日立市日高町にある空陸家で、2022年12月にリニューアルオープンした。小木津駅から徒歩16分ほどの郊外の店舗だ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/hitachi/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "kanagawa-cat-coorikuya-hiyoshi",
  "name": "猫喫茶 空陸家 日吉店",
  "animals": [
   "cat"
  ],
  "prefecture": "神奈川県",
  "area": "横浜市港北区日吉本町",
  "address": "神奈川県横浜市港北区日吉本町1-1-10",
  "access": "東急東横線日吉駅から徒歩1分",
  "url": "https://www.coorikuya.com/shop/hiyoshi/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "駅近",
   "子ども可"
  ],
  "description": "東急東横線の日吉駅から徒歩1分、横浜市港北区の猫カフェである。駅前で通いやすく、長居したくなる居心地を店のねらいとしている。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/hiyoshi/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "aichi-cat-coorikuya-tokai-ichinomiya",
  "name": "猫喫茶 空陸家 東海一宮店",
  "animals": [
   "cat"
  ],
  "prefecture": "愛知県",
  "area": "一宮市平島",
  "address": "愛知県一宮市平島3-1-12",
  "access": "名神高速道路 一宮ICより車で約5分",
  "url": "https://www.coorikuya.com/shop/ichinomiya/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "愛知県一宮市にある猫カフェで、名神高速の一宮ICから車で約5分の距離だ。ペットショップ併設の路面店で、車での来店向きである。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/ichinomiya/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "fukuoka-cat-coorikuya-yumetown-iizuka",
  "name": "猫喫茶 空陸家 ゆめタウン飯塚店",
  "animals": [
   "cat"
  ],
  "prefecture": "福岡県",
  "area": "飯塚市菰田西",
  "address": "福岡県飯塚市菰田西3-6-1 ゆめタウン飯塚2階",
  "access": "飯塚駅 徒歩11分",
  "url": "https://www.coorikuya.com/shop/iizuka/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "全日10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "福岡県飯塚市のゆめタウン飯塚の2階にある猫カフェである。2023年7月に開いた新しい店で、全日10時から20時まで営業している。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/iizuka/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "tokyo-cat-coorikuya-ikebukuro-nishiguchi",
  "name": "猫喫茶 空陸家 池袋西口店",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "豊島区西池袋",
  "address": "東京都豊島区西池袋1-13-8 西池袋ビル5F（受付 2F）",
  "access": "池袋駅西口から徒歩1分",
  "url": "https://www.coorikuya.com/shop/ikebukuro/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "駅近",
   "子ども可"
  ],
  "description": "池袋駅西口から徒歩1分、西池袋ビルの5階にある猫カフェだ。受付は2階のレジカウンターで行い、2023年4月にリニューアルしている。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/ikebukuro/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "osaka-cat-coorikuya-izumi",
  "name": "猫喫茶 空陸家 和泉店",
  "animals": [
   "cat"
  ],
  "prefecture": "大阪府",
  "area": "和泉市池上町",
  "address": "大阪府和泉市池上町2-13-16 ミツワビル3F",
  "access": "JR阪和線信太山駅から徒歩8分",
  "url": "https://www.coorikuya.com/shop/izumi/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "大阪府和泉市のペットショップ3階にある猫カフェで、空陸家の中でもゆったりした間取りを取っているのが特徴だ。信太山駅から徒歩8分で、人と猫が適度な距離でくつろげる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/izumi/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "kagoshima-cat-coorikuya-kagoshima",
  "name": "猫喫茶 空陸家 鹿児島店",
  "animals": [
   "cat"
  ],
  "prefecture": "鹿児島県",
  "area": "鹿児島市宇宿",
  "address": "鹿児島県鹿児島市宇宿1-10-2",
  "access": "指宿枕崎線 二軒茶屋駅 徒歩4分",
  "url": "https://www.coorikuya.com/shop/kagoshima/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "鹿児島市宇宿にある猫カフェで、テーマは木のお家である。木目調の室内に木製のキャットウォークがあり、二軒茶屋駅から徒歩4分だ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/kagoshima/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "chiba-cat-coorikuya-plus-across-mall-shinkamagaya",
  "name": "猫喫茶 空陸家plus アクロスモール新鎌ケ谷店",
  "animals": [
   "cat"
  ],
  "prefecture": "千葉県",
  "area": "鎌ケ谷市新鎌ヶ谷",
  "address": "千葉県鎌ケ谷市新鎌ヶ谷2-12-1",
  "access": "京成成田空港線・北総鉄道線新鎌ヶ谷駅より徒歩3分",
  "url": "https://www.coorikuya.com/shop/kamagaya/",
  "price": "30分880円（入場495円＋ドリンクバー385円）、延長10分165円、フリータイム1,980円（税込）（空陸家plusの案内。一部店舗は異なる場合あり）",
  "price_level": 2,
  "hours": "全日10:00〜21:00（最終受付20:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "駅近",
   "子ども可"
  ],
  "description": "千葉県鎌ケ谷市のアクロスモール新鎌ケ谷にある空陸家plusで、新鎌ケ谷駅から徒歩3分である。白を基調にした可愛らしい内装で、全日21時まで営業している。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/kamagaya/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "aichi-cat-coorikuya-kasugai",
  "name": "猫喫茶 空陸家 春日井店",
  "animals": [
   "cat"
  ],
  "prefecture": "愛知県",
  "area": "春日井市岩野",
  "address": "愛知県春日井市岩野2-13-13",
  "access": "JR中央本線「春日井駅」より車12分",
  "url": "https://www.coorikuya.com/shop/kasugai/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "愛知県春日井市にある猫カフェで、店内の中央に大きなキャットタワーが立っている。ペットショップ併設で、春日井駅からは車で12分ほどだ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/kasugai/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "tokyo-cat-coorikuya-plus-kichijoji",
  "name": "猫喫茶 空陸家plus 吉祥寺店",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "武蔵野市吉祥寺本町",
  "address": "東京都武蔵野市吉祥寺本町1丁目8-21 こあふうーるエスビル2階",
  "access": "JR中央本線 吉祥寺駅から徒歩2分",
  "url": "https://www.coorikuya.com/shop/kichijyoji/",
  "price": "30分880円（入場495円＋ドリンクバー385円）、延長10分165円、フリータイム1,980円（税込）（空陸家plusの案内。一部店舗は異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "駅近",
   "子ども可"
  ],
  "description": "吉祥寺駅から徒歩2分、こあふうーるエスビルの2階にある空陸家plusである。入場料とドリンクバーを分けたplus形式の料金で、駅近の猫カフェを探す人に向く。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/kichijyoji/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "saitama-cat-coorikuya-nitto-mall-kumagaya",
  "name": "猫喫茶 空陸家 熊谷ニットーモール店",
  "animals": [
   "cat"
  ],
  "prefecture": "埼玉県",
  "area": "熊谷市銀座",
  "address": "埼玉県熊谷市銀座2-245 ニットーモール本館4階",
  "access": "JR高崎線「熊谷駅」より徒歩3分",
  "url": "https://www.coorikuya.com/shop/kumagaya/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "全日10:00〜20:30（最終受付20:00）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "駅近",
   "子ども可"
  ],
  "description": "埼玉県熊谷市のニットーモール本館4階にある猫カフェだ。熊谷駅から徒歩3分で、立体的な内装の広い店内を猫が走り回る。全日20時半まで営業している。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/kumagaya/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "gunma-cat-coorikuya-maebashi",
  "name": "猫喫茶 空陸家 前橋店",
  "animals": [
   "cat"
  ],
  "prefecture": "群馬県",
  "area": "前橋市元総社町",
  "address": "群馬県前橋市元総社町1-2-8",
  "access": "JR両毛線 新前橋駅（徒歩18分）",
  "url": "https://www.coorikuya.com/shop/maebashi/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "群馬県前橋市元総社町にある猫カフェで、昔ながらの和の茶の間がコンセプトである。国道17号線から入ってすぐで、新前橋駅からは徒歩18分ほどだ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/maebashi/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "kyoto-cat-coorikuya-maizuru",
  "name": "猫喫茶 空陸家 舞鶴店",
  "animals": [
   "cat"
  ],
  "prefecture": "京都府",
  "area": "舞鶴市上安",
  "address": "京都府舞鶴市字上安小字糖ヶ坪44-1",
  "access": "JR舞鶴線「西舞鶴駅」より徒歩19分",
  "url": "https://www.coorikuya.com/shop/maizuru/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "京都府舞鶴市にある猫カフェで、落ち着いた店内に大きなキャットタワーがある。ソファでくつろぎながら、いろいろな角度から猫を眺められる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/maizuru/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "nagano-cat-coorikuya-matsumoto",
  "name": "猫喫茶 空陸家 松本店",
  "animals": [
   "cat"
  ],
  "prefecture": "長野県",
  "area": "松本市村井町北",
  "address": "長野県松本市村井町北1丁目15-18（ペットショップCoo&RIKU松本店 2F）",
  "access": "長野自動車道・塩尻北インターから車で約7分",
  "url": "https://www.coorikuya.com/shop/matsumoto-2/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "長野県松本市村井町にあるペットショップ2階の猫カフェで、2022年8月にリニューアルした。最寄り駅からは遠く、塩尻北ICから車で7分ほどの郊外型の店だ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/matsumoto-2/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "iwate-cat-coorikuya-iwate-morioka",
  "name": "猫喫茶 空陸家 岩手盛岡店",
  "animals": [
   "cat"
  ],
  "prefecture": "岩手県",
  "area": "盛岡市東仙北",
  "address": "岩手県盛岡市東仙北2-1-38",
  "access": "東北本線 仙北町駅 徒歩15分",
  "url": "https://www.coorikuya.com/shop/morioka/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "盛岡市東仙北にある猫カフェで、自宅で猫とくつろぐ感覚を目指した作りである。座布団に座って本を読むと、膝の上で猫が眠ることもあるという。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/morioka/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "tokyo-cat-coorikuya-musashikoyama",
  "name": "猫喫茶 空陸家 武蔵小山店",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "品川区小山",
  "address": "東京都品川区小山3-21-13 （ペットショップCoo&RIKU武蔵小山店2F）",
  "access": "武蔵小山駅（東急目黒線）から徒歩2分",
  "url": "https://www.coorikuya.com/shop/musashikoyama/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "駅近",
   "子ども可"
  ],
  "description": "武蔵小山駅から徒歩2分、ペットショップの2階にある猫カフェだ。店内をほぼ一周する渡り廊下と、空陸家では数少ない吊り橋が見どころである。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/musashikoyama/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "nagano-cat-coorikuya-nagano",
  "name": "猫喫茶 空陸家 長野店",
  "animals": [
   "cat"
  ],
  "prefecture": "長野県",
  "area": "長野市北尾張部",
  "address": "長野県長野市北尾張部686-1",
  "access": "しなの鉄道北しなの線「北長野駅」より徒歩27分",
  "url": "https://www.coorikuya.com/shop/nagano/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "長野市北尾張部にある猫カフェで、アスレチックエリアで遊ぶ猫を観察できる。ソファエリアでは猫とまったり過ごせる、二つの空間に分かれた店だ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/nagano/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "niigata-cat-coorikuya-nagaoka",
  "name": "猫喫茶 空陸家 長岡店",
  "animals": [
   "cat"
  ],
  "prefecture": "新潟県",
  "area": "長岡市喜多町",
  "address": "新潟県長岡市喜多町1044-1",
  "access": "JR信越本線 長岡駅 車15分",
  "url": "https://www.coorikuya.com/shop/nagaoka/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "2022年4月に開いた、長岡市喜多町の猫カフェである。長岡駅から車で15分ほどで、ペットショップに併設されている。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/nagaoka/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "nagasaki-cat-coorikuya-nagasaki-hamamachi",
  "name": "猫喫茶 空陸家 長崎浜町店",
  "animals": [
   "cat"
  ],
  "prefecture": "長崎県",
  "area": "長崎市浜町",
  "address": "長崎県長崎市浜町11-15-2F(浜町アーケード内)",
  "access": "思案橋駅から徒歩1分",
  "url": "https://www.coorikuya.com/shop/nagasaki/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "駅近",
   "子ども可"
  ],
  "description": "長崎市の浜町アーケード内、ビルの2階にある猫カフェだ。思案橋駅から徒歩1分で、繁華街の買い物や食事の合間に寄りやすい。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/nagasaki/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "kanagawa-cat-coorikuya-nagatsuta",
  "name": "猫喫茶 空陸家 長津田店",
  "animals": [
   "cat"
  ],
  "prefecture": "神奈川県",
  "area": "横浜市緑区長津田みなみ台",
  "address": "神奈川県横浜市緑区長津田みなみ台1-38-1",
  "access": "東急田園都市線・JR横浜線 長津田駅南口より徒歩15分",
  "url": "https://www.coorikuya.com/shop/nagatsuta/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "横浜市緑区長津田みなみ台にある猫カフェで、ウッド調に水色を合わせた爽やかな内装である。高さの違う足場が並び、猫が上り下りする様子を眺められる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/nagatsuta/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "tokyo-cat-coorikuya-plus-nakano-sunmall",
  "name": "猫喫茶 空陸家plus 中野サンモール店",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "中野区中野",
  "address": "東京都中野区中野5-67-10",
  "access": "JR中央線「中野駅」徒歩3分",
  "url": "https://www.coorikuya.com/shop/nakano/",
  "price": "30分880円（入場495円＋ドリンクバー385円）、延長10分165円、フリータイム1,980円（税込）（空陸家plusの案内。一部店舗は異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "駅近",
   "子ども可"
  ],
  "description": "中野駅から徒歩3分の空陸家plusで、広い店内に多くのキャットタワーがある。机と無線LANがあり、作業をしながら長く滞在する使い方に向く。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/nakano/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "niigata-cat-coorikuya-niigata-nishi",
  "name": "猫喫茶 空陸家 新潟西店",
  "animals": [
   "cat"
  ],
  "prefecture": "新潟県",
  "area": "新潟市西区青山",
  "address": "新潟県新潟市西区青山2-4-1（イオン 新潟青山店すぐ側）",
  "access": "JR越後線 青山駅から徒歩9分",
  "url": "https://www.coorikuya.com/shop/niigata-w/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "新潟市西区青山のイオン新潟青山店のすぐ近くにある猫カフェだ。青山駅から徒歩9分で、何時間でも居られる居心地を店のねらいとしている。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/niigata-w/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "hokkaido-cat-coorikuya-obihiro",
  "name": "猫喫茶 空陸家 帯広店",
  "animals": [
   "cat"
  ],
  "prefecture": "北海道",
  "area": "河東郡音更町",
  "address": "北海道河東郡音更町木野大通西14-1-3",
  "access": "道東自動車道『音更帯広IC』から車で約9分。大型駐車場完備。",
  "url": "https://www.coorikuya.com/shop/obihiro/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "北海道音更町にある猫カフェで、旭川店に次ぐ道内2店舗目にあたる。音更帯広ICから車で約9分、大型駐車場があるため、車で行く人に向く。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/obihiro/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "kanagawa-cat-coorikuya-odawara",
  "name": "猫喫茶 空陸家 小田原店",
  "animals": [
   "cat"
  ],
  "prefecture": "神奈川県",
  "area": "小田原市成田",
  "address": "神奈川県小田原市成田466-3",
  "access": "小田原東ICから車で2分",
  "url": "https://www.coorikuya.com/shop/odawara/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "小田原市成田にある猫カフェで、和をテーマに落ち着いた空間を作っている。小田原東ICから車で2分ほどの距離である。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/odawara/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "tokyo-cat-coorikuya-plus-okubo",
  "name": "猫喫茶 空陸家plus 大久保店",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "新宿区百人町",
  "address": "東京都新宿区百人町1-18-11",
  "access": "JR中央本線 大久保駅から徒歩1分",
  "url": "https://www.coorikuya.com/shop/okubo/",
  "price": "30分880円（入場495円＋ドリンクバー385円）、延長10分165円、フリータイム1,980円（税込）（空陸家plusの案内。一部店舗は異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）（13:30〜14:00は猫の休憩のため一時閉店）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "駅近",
   "子ども可"
  ],
  "description": "2018年7月に開いた空陸家plusの大久保店で、大久保駅から徒歩1分である。猫の休憩のため、13時半から14時は一時閉店する。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/okubo/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "hiroshima-cat-coorikuya-yumetown-otake",
  "name": "猫喫茶 空陸家 ゆめタウン大竹店",
  "animals": [
   "cat"
  ],
  "prefecture": "広島県",
  "area": "大竹市晴美",
  "address": "広島県大竹市晴美1-6-1（ゆめタウン大竹店様 駐車場敷地内）",
  "access": "山陽自動車道/広島岩国道路 大竹ICから車で2分",
  "url": "https://www.coorikuya.com/shop/ootake/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "広島県大竹市のゆめタウン大竹の駐車場敷地内にある猫カフェだ。2023年3月にリニューアルしており、大竹ICから車で2分で着く。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/ootake/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "tochigi-cat-coorikuya-oyama",
  "name": "猫喫茶 空陸家 小山店",
  "animals": [
   "cat"
  ],
  "prefecture": "栃木県",
  "area": "小山市駅南町",
  "address": "栃木県小山市駅南町4-30-2（国道50号線沿い）",
  "access": "国道50号線沿い 電気のコジマさんすぐそば",
  "url": "https://www.coorikuya.com/shop/oyama/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "全日11:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "栃木県小山市の国道50号線沿いにある猫カフェで、ほっこりした和の空間がコンセプトである。営業時間は全日11時から20時で、ドライブ途中にも寄りやすい。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/oyama/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "chiba-cat-coorikuya-plus-minami-kashiwa",
  "name": "猫喫茶 空陸家plus 南柏店",
  "animals": [
   "cat"
  ],
  "prefecture": "千葉県",
  "area": "柏市南柏",
  "address": "千葉県柏市南柏2-11-5",
  "access": "JR常磐線「南柏駅」 徒歩8分",
  "url": "https://www.coorikuya.com/shop/s-kashiwa/",
  "price": "30分880円（入場495円＋ドリンクバー385円）、延長10分165円、フリータイム1,980円（税込）（空陸家plusの案内。一部店舗は異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "千葉県柏市の南柏駅から徒歩8分にある空陸家plusだ。ゆったり過ごせるよう工夫した店内で、入場料とドリンクバーが別立ての料金である。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/s-kashiwa/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "kanagawa-cat-coorikuya-sagamihara",
  "name": "猫喫茶 空陸家 相模原店",
  "animals": [
   "cat"
  ],
  "prefecture": "神奈川県",
  "area": "相模原市南区古淵",
  "address": "神奈川県相模原市南区古淵3-13-33",
  "access": "JR横浜線古淵駅から徒歩4分",
  "url": "https://www.coorikuya.com/shop/sagamihara/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "駅近",
   "子ども可"
  ],
  "description": "古淵駅から徒歩4分、相模原市南区の猫カフェである。2022年12月にリニューアルした。建物の性質上、夏は室内が高温になりやすく、営業時間が変わることがある。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/sagamihara/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "yamagata-cat-coorikuya-aeontown-sakata",
  "name": "猫喫茶 空陸家 イオンタウン酒田店",
  "animals": [
   "cat"
  ],
  "prefecture": "山形県",
  "area": "酒田市泉町",
  "address": "山形県酒田市泉町214（イオンタウン酒田敷地内）",
  "access": "国道7号線そば イオンタウン酒田敷地内",
  "url": "https://www.coorikuya.com/shop/sakata/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "全日11:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "山形県酒田市のイオンタウン酒田の敷地内にある猫カフェだ。国道7号線のそばで、全日11時から20時まで営業している。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/sakata/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "tochigi-cat-coorikuya-aeontown-sano",
  "name": "猫喫茶 空陸家 イオンタウン佐野店",
  "animals": [
   "cat"
  ],
  "prefecture": "栃木県",
  "area": "佐野市浅沼町",
  "address": "栃木県佐野市浅沼町719",
  "access": "JR両毛線佐野駅から徒歩20分",
  "url": "https://www.coorikuya.com/shop/sano/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "栃木県佐野市のイオンタウン佐野にある猫カフェで、木の質感を生かした山小屋風の内装になっている。佐野駅からは徒歩20分ほどである。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/sano/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "niigata-cat-coorikuya-aeonmall-shibata",
  "name": "猫喫茶 空陸家 イオンモール新発田店",
  "animals": [
   "cat"
  ],
  "prefecture": "新潟県",
  "area": "新発田市住吉町",
  "address": "新潟県新発田市住吉町5-11-5 イオンモール新発田1階",
  "access": "西新発田駅（北口）から徒歩5分",
  "url": "https://www.coorikuya.com/shop/shibata/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日10:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "新潟県新発田市のイオンモール新発田1階にある猫カフェだ。西新発田駅の北口から徒歩5分で、平日も土日祝も10時から営業している。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/shibata/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "tokyo-cat-coorikuya-shimokitazawa",
  "name": "猫喫茶 空陸家 下北沢店",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "世田谷区北沢",
  "address": "東京都世田谷区北沢2-31-3 エペビル2F",
  "access": "京王井の頭線 下北沢駅から徒歩1分",
  "url": "https://www.coorikuya.com/shop/shimokitazaw/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "駅近",
   "子ども可"
  ],
  "description": "京王井の頭線の下北沢駅から徒歩1分、エペビル2階の猫カフェである。駅からすぐで、街歩きの合間に立ち寄りやすい。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/shimokitazaw/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "tokyo-cat-coorikuya-shinjuku-sanchome",
  "name": "猫喫茶 空陸家 新宿三丁目店",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "新宿区新宿",
  "address": "東京都新宿区新宿3-1-30 3,4階",
  "access": "地下鉄新宿三丁目駅(C1出口)から徒歩1分",
  "url": "https://www.coorikuya.com/shop/shinjuku/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "駅近",
   "子ども可"
  ],
  "description": "新宿三丁目駅のC1出口から徒歩1分、ビルの3階と4階にある猫カフェだ。新宿の繁華街の中心にあり、買い物の合間にも使いやすい。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/shinjuku/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "tokyo-cat-coorikuya-shinkoiwa",
  "name": "猫喫茶 空陸家 新小岩店",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "葛飾区新小岩",
  "address": "東京都葛飾区新小岩1-40-7",
  "access": "JR新小岩駅から徒歩3分",
  "url": "https://www.coorikuya.com/shop/shinkoiwa/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "駅近",
   "子ども可"
  ],
  "description": "JR新小岩駅から徒歩3分、ルミエール商店街にある猫カフェである。コンセプトは和を基調にした昔ながらの親しみやすい家だ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/shinkoiwa/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "shizuoka-cat-coorikuya-shizuoka-sbs-dori",
  "name": "猫喫茶 空陸家 静岡SBS通り店",
  "animals": [
   "cat"
  ],
  "prefecture": "静岡県",
  "area": "静岡市駿河区豊田",
  "address": "静岡県静岡市駿河区豊田3丁目9-10",
  "access": "静岡清水線春日町駅から徒歩26分 / 静岡SBS通り沿い(駿河総合高校前交差点付近)",
  "url": "https://www.coorikuya.com/shop/shizuoka-sbs/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "静岡県に初めて開いた空陸家で、静岡SBS通り沿いの駿河総合高校前交差点付近にある。内装は昔ながらの和の家で、春日町駅から徒歩26分ほど離れているため車向きだ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/shizuoka-sbs/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "osaka-cat-coorikuya-takatsuki",
  "name": "猫喫茶 空陸家 高槻店",
  "animals": [
   "cat"
  ],
  "prefecture": "大阪府",
  "area": "高槻市萩之庄",
  "address": "大阪府高槻市萩之庄4-1-1",
  "access": "新名神高速道路 高槻インターから車で6分",
  "url": "https://www.coorikuya.com/shop/takatsuki/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "大阪府高槻市萩之庄にある猫カフェで、新名神高速の高槻ICから車で6分である。ペットショップに併設されている。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/takatsuki/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "tottori-cat-coorikuya-tottori-higashi",
  "name": "猫喫茶 空陸家 ラ・ムー鳥取東店",
  "animals": [
   "cat"
  ],
  "prefecture": "鳥取県",
  "area": "鳥取市立川町",
  "address": "鳥取県鳥取市立川町5-267-1",
  "access": "鳥取市立川町（最寄り駅は公式ページに記載なし）",
  "url": "https://www.coorikuya.com/shop/tottori-e/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "鳥取市立川町のラ・ムー鳥取東店に入る猫カフェで、テーマは木のお家である。木目調の室内に木製のキャットウォークを組んである。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/tottori-e/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）。公式の最寄り駅欄が兵庫県の駅名になっており誤記と判断して不採用"
 },
 {
  "id": "okinawa-cat-coorikuya-plus-eas-okinawa-toyosaki",
  "name": "猫喫茶 空陸家plus イーアス沖縄豊崎店",
  "animals": [
   "cat"
  ],
  "prefecture": "沖縄県",
  "area": "豊見城市豊崎",
  "address": "沖縄県豊見城市字豊崎3-35 イーアス沖縄豊崎店 3Ｆ（3040区画） ※共用駐車場あり",
  "access": "豊見城市豊崎（最寄り駅は公式ページに記載なし）",
  "url": "https://www.coorikuya.com/shop/toyosaki/",
  "price": "30分880円（入場495円＋ドリンクバー385円）、延長10分165円、フリータイム1,980円（税込）（空陸家plusの案内。一部店舗は異なる場合あり）",
  "price_level": 2,
  "hours": "全日10:00〜20:00（最終受付19:45）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "沖縄県豊見城市のイーアス沖縄豊崎の3階にある空陸家plusで、2025年5月に動物取扱業の登録を受けた新しい店である。ウッド調の洋風な店内で、共用駐車場が使える。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/toyosaki/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "mie-cat-coorikuya-tsu-takachaya",
  "name": "猫喫茶 空陸家 津高茶屋店",
  "animals": [
   "cat"
  ],
  "prefecture": "三重県",
  "area": "津市高茶屋小森町",
  "address": "三重県津市高茶屋小森町335-1-1（国道23号線沿い）",
  "access": "国道23号線沿い ラウンドワンさんすぐそば",
  "url": "https://www.coorikuya.com/shop/tsu/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "三重県津市の国道23号線沿いにある猫カフェで、ほっこりした和の空間をコンセプトにしている。ラウンドワンのすぐそばで、車で行きやすい。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/tsu/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "okinawa-cat-coorikuya-urazoe",
  "name": "猫喫茶 空陸家 沖縄浦添店",
  "animals": [
   "cat"
  ],
  "prefecture": "沖縄県",
  "area": "浦添市港川",
  "address": "沖縄県浦添市港川2-22-1-2F",
  "access": "国道58号線沿い・港川バス停近く",
  "url": "https://www.coorikuya.com/shop/urazoe/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "沖縄県浦添市港川の国道58号線沿いにある、ペットショップ併設の猫カフェだ。大きな窓から光が入る明るい店内に畳間がある。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/urazoe/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "nagano-cat-coorikuya-watahan-gondo",
  "name": "猫喫茶 空陸家 綿半権堂店",
  "animals": [
   "cat"
  ],
  "prefecture": "長野県",
  "area": "長野市権堂町",
  "address": "長野県長野市権堂町2196-1 綿半スーパーセンター権堂店1階",
  "access": "長野電鉄長野線 権堂駅 徒歩2分",
  "url": "https://www.coorikuya.com/shop/watahan-gondo/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日10:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "駅近",
   "子ども可"
  ],
  "description": "長野電鉄の権堂駅から徒歩2分、綿半スーパーセンター権堂店の1階にある猫カフェである。2022年9月に開いた店で、平日も10時から営業している。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/watahan-gondo/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "mie-cat-coorikuya-yokkaichi",
  "name": "猫喫茶 空陸家 四日市店",
  "animals": [
   "cat"
  ],
  "prefecture": "三重県",
  "area": "四日市市日永",
  "address": "三重県四日市市日永2-1-4",
  "access": "四日市あすなろう鉄道内部線日永駅から徒歩9分",
  "url": "https://www.coorikuya.com/shop/yokkaichi/",
  "price": "30分715円／60分1,320円／フリータイム1,980円（いずれもドリンクバー込み・税込）（全店共通の案内。店舗により異なる場合あり）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終受付19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "写真OK",
   "子ども可"
  ],
  "description": "三重県四日市市日永にある猫カフェで、ペットショップの買い物ついでに寄れる。和を基調にした昔ながらの雰囲気の店内である。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.coorikuya.com/shop/yokkaichi/ と料金・利用方法ページ https://www.coorikuya.com/system/ で確認（料金は全店共通の案内で、一部店舗は異なる場合があると公式に記載。定休日の記載なし）"
 },
 {
  "id": "tokyo-cat-necorepublic-ikebukuro",
  "name": "保護猫カフェ ネコリパブリック東京池袋店",
  "animals": [
   "cat"
  ],
  "prefecture": "東京都",
  "area": "池袋",
  "address": "東京都豊島区西池袋3-27-3 中根ビル4F",
  "access": "池袋駅西口から徒歩5分",
  "url": "https://www.neco-republic.jp/shop/shop-necorepublic-ikebukuro/",
  "price": "平日30分1,430円／60分1,760円／120分2,750円、土日祝30分1,650円／60分1,980円（延長30分ごとに660円、税込。子ども料金なし）",
  "price_level": 2,
  "hours": "11:00〜22:00（最終受付21:00）",
  "closed": "木曜日（祝日の場合は営業）",
  "reservation": "推奨",
  "features": [
   "保護動物",
   "里親募集",
   "駅近",
   "子ども可"
  ],
  "description": "池袋駅西口の雑居ビル4階にある保護猫カフェで、モノトーンでまとめた落ち着いた内装になっている。営業が22時までなので、仕事帰りに立ち寄れる。入店時には透けない素材の靴下が必要で、店内でも買える。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://www.neco-republic.jp/shop/shop-necorepublic-ikebukuro/ と店舗一覧 https://www.neco-republic.jp/shop/ で確認。公式FAQに「予約なしでも入れるが混雑時は入れない場合あり、予約が確実」とあり推奨とした。動物取扱登録の有効期限表記が令和8年8月29日で過ぎているが、公式一覧に営業中として掲載され、2026年の紹介記事もあるため掲載（更新表記が未反映の可能性）。猫の頭数は記載なし"
 },
 {
  "id": "osaka-cat-nyanpuccino-sumiyoshi",
  "name": "保護猫カフェ にゃんプチーノ",
  "animals": [
   "cat"
  ],
  "prefecture": "大阪府",
  "area": "住吉区・帝塚山",
  "address": "大阪府大阪市住吉区帝塚山東1-3-25",
  "access": "阪堺電車 姫松駅から徒歩1分",
  "url": "https://nyanpuccino.com/",
  "price": "平日 大人（中学生以上）1時間1,430円（1ドリンク付き）、延長30分550円。土日祝1時間1,650円。子供（3歳以下無料）平日880円／土日祝1,100円。靴下110円",
  "price_level": 2,
  "hours": "平日13:30〜18:00、土日祝10:00〜18:00（最終入店17:00）。土日祝は12:00〜13:00が猫の休憩時間で入室不可",
  "closed": "年中無休（年末年始12/30〜1/4は不定休）",
  "reservation": "不要",
  "features": [
   "保護動物",
   "里親募集",
   "駅近",
   "ドリンク込み",
   "子ども可"
  ],
  "description": "就労継続支援B型を併設した、住吉区帝塚山の保護猫カフェ。定員は1回最大6名の小さな店で、1階のカフェに10頭ほどの猫が暮らし、里親募集も行っている。路面電車の姫松駅から近く、障がいのあるスタッフが専門指導員と一緒に働く店でもある。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "料金・営業時間・定休日・住所・アクセス https://nyanpuccino.com/ で確認（2025年4月改定後の料金、2025-26年末年始の営業案内あり）。予約フォームと電話予約の案内はあるが予約必須の記載は無く、公式が予約を案内しているため「推奨」とした。／検品⑥（2026-11-07）公式は予約の受け方を案内するだけで勧める文言がないため不要"
 },
 {
  "id": "osaka-cat-momiji-sennan",
  "name": "猫カフェ紅葉",
  "animals": [
   "cat"
  ],
  "prefecture": "大阪府",
  "area": "泉南市・岡田浦",
  "address": "大阪府泉南市岡田5-8-31",
  "access": "南海本線 岡田浦駅（和歌山側出口）から徒歩2分",
  "url": "https://nekocafemomiji.wixsite.com/nekokafemomiji",
  "price": "貸切60分 1名3,000円／2名2,500円（1名あたり）／3名2,000円（同）／4名以上1,500円（同）。土日祝は1割増。飲み物・お菓子・お土産付き。年齢にかかわらず同額",
  "price_level": 3,
  "hours": "11:00〜19:00（最終受付17:00）",
  "closed": "火曜日・水曜日",
  "reservation": "推奨",
  "features": [
   "貸切可",
   "ドリンク込み",
   "子ども可",
   "写真OK"
  ],
  "description": "1組だけを案内する一組貸切制の猫カフェ。11頭の猫がいて、スフィンクスやソマリ、ラグドールなど種類が多く、広い部屋を独占して過ごせる。漫画約400冊やマッサージ機も用意され、ひとり利用から家族まで使える。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "料金・営業時間・定休日 https://nekocafemomiji.wixsite.com/nekokafemomiji 、住所・アクセスは同サイトのアクセス欄で確認。予約は利用の1か月前からLINE・電話で受付と公式に記載（予約必須とは明記なし、一組貸切制のため事前予約が前提になりやすい）。更新日の表示は無いが、料金表に2026年1〜6月の予約履歴の記載あり。"
 },
 {
  "id": "aichi-cat-catgarden-ichinomiya",
  "name": "保護猫カフェ CatGarden（キャットガーデン）",
  "animals": [
   "cat"
  ],
  "prefecture": "愛知県",
  "area": "一宮市・木曽川町",
  "address": "愛知県一宮市木曽川町玉ノ井蓮池117",
  "access": "玉ノ井駅から徒歩10分（駐車場は店から1分の念敬寺北側に8台）",
  "url": "https://cat-garden138.crayonsite.net/",
  "price": "30分900円、60分1,400円、90分1,900円、120分2,400円、フリー3,000円（いずれもワンドリンク付き）",
  "price_level": 2,
  "hours": "11:00〜18:00（公式の営業日表では12:00〜18:00の記載もあり）",
  "closed": "水曜日・木曜日（祝日は営業）",
  "reservation": "推奨",
  "features": [
   "保護動物",
   "里親募集",
   "ドリンク込み",
   "子ども可"
  ],
  "description": "一宮市木曽川町にある、店内の猫がすべて里親募集中の保護猫カフェ。2024年11月に動物取扱業の登録を受けた新しい店で、コースにはワンドリンクが付く。パンケーキなどのカフェスペースは土日のみで、週末は予約優先となっている。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "営業日・住所・アクセス https://cat-garden138.crayonsite.net/ 、料金 https://cat-garden138.crayonsite.net/p/2/ で確認（トップの「今週営業日」は2026-11-03〜08の週の表示）。週末は予約優先と公式に記載のため「推奨」。営業時間はトップの文章（11:00〜18:00）と表（12:00〜18:00）で食い違い。"
 },
 {
  "id": "osaka-dog-samoyed-cafe-moffu-shinsaibashi",
  "name": "サモエドカフェ moffu 大阪心斎橋店",
  "animals": [
   "dog"
  ],
  "prefecture": "大阪府",
  "area": "心斎橋・アメ村",
  "address": "大阪府大阪市中央区西心斎橋1-15-13 心斎橋アーバンコート2階",
  "access": "心斎橋駅・四ツ橋駅から徒歩3分",
  "url": "https://samoyedmoffu.com/shop_shinsaibashi",
  "price": "1時間 平日3,600円／土日祝3,800円（事前予約・税込）、当日来店は各+100円",
  "price_level": 4,
  "hours": "平日11:00〜19:00／土日祝10:00〜20:00（最終入店19:00）",
  "closed": "なし（年末年始を除く）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "貸切可",
   "子ども可",
   "写真OK",
   "駅近"
  ],
  "description": "大型の白いサモエド犬12頭と1時間遊べる、予約中心の犬カフェ。おやつや抱っこ撮影などのオプションがあり、個室プランもある。値段は高めだが、サモエドが目当ての人には満足度が高い。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://samoyedmoffu.com/shop_shinsaibashi で確認"
 },
 {
  "id": "hokkaido-dog-samoyed-cafe-al-sapporo",
  "name": "サモエドカフェ アル 札幌店",
  "animals": [
   "dog"
  ],
  "prefecture": "北海道",
  "area": "中島公園",
  "address": "北海道札幌市中央区南8条西7丁目1036-1 ダイアパレス中島公園1階",
  "access": "中島公園エリア",
  "url": "https://samoyed.jp/sapporo",
  "price": "50分 平日2,500円／土日祝2,900円（事前予約・事前決済）、予約なしは平日2,800円",
  "price_level": 3,
  "hours": "10:00〜19:00",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "貸切可"
  ],
  "description": "白くて大きなサモエド犬と、50分間ふれあう犬カフェ。事前予約だと料金が安くなり、予約なしだと割高になる。スタッフ同伴でサモエドと歩くお散歩コース（30分3,000円）も当日申し込みで選べる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://samoyed.jp/sapporo で確認（定休日の記載は確認できず）"
 },
 {
  "id": "miyagi-dog-samoyed-cafe-al-sendai",
  "name": "サモエドカフェ アル 仙台店",
  "animals": [
   "dog"
  ],
  "prefecture": "宮城県",
  "area": "一番町",
  "address": "宮城県仙台市青葉区一番町4-2-10 仙台東映プラザビル204",
  "access": "仙台中心部・一番町",
  "url": "https://samoyed.jp/sendai",
  "price": "50分 平日2,500円／土日祝2,900円（事前予約・事前決済）、予約なしは平日2,800円",
  "price_level": 3,
  "hours": "10:00〜19:00",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "貸切可"
  ],
  "description": "仙台の一番町にある、サモエド犬と過ごす犬カフェ。全国展開しているアルの一店舗で、料金は50分の入れ替えに近い形式。予約時に事前決済すると安くなる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://samoyed.jp/sendai で確認（定休日の記載は確認できず）"
 },
 {
  "id": "hyogo-dog-samoyed-cafe-al-kobe",
  "name": "サモエドカフェ アル 神戸店",
  "animals": [
   "dog"
  ],
  "prefecture": "兵庫県",
  "area": "元町",
  "address": "兵庫県神戸市中央区北長狭通3丁目3-8 元町UNSHOビル1階",
  "access": "神戸・元町エリア",
  "url": "https://samoyed.jp/kobe",
  "price": "50分 平日2,200円／土日祝2,600円（事前予約・事前決済）、予約なしは平日2,600円",
  "price_level": 3,
  "hours": "10:00〜19:00",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "貸切可"
  ],
  "description": "神戸・元町にあるサモエド犬のふれあいカフェで、同じ系列の中では料金がやや控えめ。50分制で、予約すると安く入れる。お散歩コースもあり、犬と歩く体験も選べる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://samoyed.jp/kobe で確認（定休日の記載は確認できず）"
 },
 {
  "id": "kyoto-dog-mameshiba-cafe-kyoto",
  "name": "京都豆柴CAFE",
  "animals": [
   "dog"
  ],
  "prefecture": "京都府",
  "area": "新京極・河原町",
  "address": "京都府京都市中京区寺町通東大文字町380番地",
  "access": "新京極通りから徒歩1分",
  "url": "https://owls-cats-forest.com/free/mameshiba-kyoto",
  "price": "大人（13歳以上）1,300円／小人（4〜12歳）800円（ワンドリンク付き）",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:30〜18:30（最終入場は閉店30分前）",
  "closed": "公式ページに記載なし",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "ふれあいOK",
   "子ども可",
   "写真OK"
  ],
  "description": "京都の繁華街・新京極にある、小さな豆柴と触れ合えるカフェ。チケットは当日分を店頭で販売するのみで、予約はできない。完売すると入れないので、観光客は早めの来店が安心。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://owls-cats-forest.com/free/mameshiba-kyoto で確認。2026-07-06 の公式お知らせ（https://owls-cats-forest.com/info/6830176 ）で移転後の住所を確認（店舗ページの住所欄は旧表記のまま）"
 },
 {
  "id": "okayama-dog-mameshiba-cafe-kurashiki",
  "name": "倉敷豆柴カフェ",
  "animals": [
   "dog"
  ],
  "prefecture": "岡山県",
  "area": "倉敷美観地区",
  "address": "岡山県倉敷市中央1-1-7 2F",
  "access": "倉敷・美観地区",
  "url": "https://owls-cats-forest.com/free/mameshiba-kurashiki",
  "price": "大人（13歳以上）1,100円／小人（4〜12歳）800円（ワンドリンク付き）",
  "price_level": 2,
  "hours": "3〜11月 平日10:15〜17:00／土日祝10:00〜17:30（12〜2月は短縮、最終入場は閉店30分前）",
  "closed": "公式ページに記載なし",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "ふれあいOK",
   "子ども可",
   "写真OK"
  ],
  "description": "白壁の街並みで知られる倉敷・美観地区にある豆柴カフェで、リニューアル後に再開した店。予約は受け付けておらず、当日店頭でチケットを買う。観光の合間に立ち寄る使い方に合う。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://owls-cats-forest.com/free/mameshiba-kurashiki で確認"
 },
 {
  "id": "oita-dog-mameshiba-cafe-yufuin",
  "name": "由布院豆柴カフェ",
  "animals": [
   "dog"
  ],
  "prefecture": "大分県",
  "area": "湯布院・金鱗湖",
  "address": "大分県由布市湯布院町川上1507-2",
  "access": "金鱗湖のすぐ近く",
  "url": "https://owls-cats-forest.com/free/mameshiba-yufuin",
  "price": "大人（13歳以上）1,100円／小人（4〜12歳）800円（ワンドリンク付き）",
  "price_level": 2,
  "hours": "3〜11月 平日9:30〜17:00／土日祝9:30〜17:30（12〜2月は短縮、最終入場は閉店30分前）",
  "closed": "公式ページに記載なし",
  "reservation": "不要",
  "features": [
   "ドリンク込み",
   "ふれあいOK",
   "子ども可",
   "写真OK"
  ],
  "description": "人気の温泉観光地・湯布院の、金鱗湖のそばにある豆柴カフェ。散策の途中に寄れる気軽さが魅力。チケットは当日店頭のみで、電話やネットの予約はできない。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://owls-cats-forest.com/free/mameshiba-yufuin で確認"
 },
 {
  "id": "fukuoka-dog-samoyed-park-fukuoka-tenjin",
  "name": "サモエドカフェ SAMOYED PARK 福岡天神店",
  "animals": [
   "dog"
  ],
  "prefecture": "福岡県",
  "area": "天神・今泉",
  "address": "福岡県福岡市中央区今泉2-5-23 南天神Yビル2F",
  "access": "天神・今泉エリア",
  "url": "https://samoyedcafe.net/shop/samoyed-park-fukuoka-tenjin/",
  "price": "1時間利用 平日2,500円／土日祝2,750円（事前予約価格、当日はやや高い）",
  "price_level": 3,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終入店19:00）",
  "closed": "定休日なし（サモエドの体調により不定休あり）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "写真OK",
   "貸切可"
  ],
  "description": "天神・今泉エリアにあるサモエド専門のふれあいカフェ。真っ白でふわふわの大型犬と1時間過ごせて、おやつやチェキなどのオプションもある。事前予約のほうが安いので、行く日が決まっている人向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://samoyedcafe.net/shop/samoyed-park-fukuoka-tenjin/ で確認"
 },
 {
  "id": "hiroshima-dog-samoedos-hiroshima",
  "name": "サモエドカフェ SAMOEDO'S 広島店",
  "animals": [
   "dog"
  ],
  "prefecture": "広島県",
  "area": "広島・紙屋町",
  "address": "広島県広島市中区紙屋町1-5-11 Dolce101",
  "access": "広島・紙屋町エリア",
  "url": "https://samoyedcafe.net/shop/samoedos-hiroshima/",
  "price": "1時間利用 平日2,500円／土日祝2,750円（事前予約価格）",
  "price_level": 3,
  "hours": "公式ページに記載なし（来店前に確認を）",
  "closed": "定休日なし（サモエドの体調により不定休あり）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "写真OK"
  ],
  "description": "広島市中心部の紙屋町にあるサモエドのふれあいカフェ。笑顔で知られる白い大型犬と1時間過ごせる。事前予約がすすめられているので、予約サイトで枠を押さえて行きたい人向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://samoyedcafe.net/shop/samoedos-hiroshima/ で確認（営業時間は掲載なし）"
 },
 {
  "id": "tokyo-dog-harajuku-mameshiba-cafe",
  "name": "原宿乃豆柴カフェ",
  "animals": [
   "dog"
  ],
  "prefecture": "東京都",
  "area": "原宿",
  "address": "東京都渋谷区神宮前1-6-10 3F",
  "access": "原宿エリア",
  "url": "https://owls-cats-forest.com/free/mameshiba-harajuku",
  "price": "大人（13歳以上）1,300円、小人（4〜12歳）800円（ワンドリンク付）",
  "price_level": 2,
  "hours": "平日11:00〜18:00／土日祝11:00〜18:40（最終入場は閉店40分前）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "ドリンク込み",
   "子ども可",
   "写真OK"
  ],
  "description": "原宿にある、豆柴とふれあえるカフェ。ドリンク付きの入場料で、フラッシュなしなら撮影もできる。電話やネットでの予約はできず、当日の店頭チケット制なので、売り切れの前に早めに行きたい。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式ページ https://owls-cats-forest.com/free/mameshiba-harajuku で確認（平日の閉店時刻は表記ゆれがあり、午後6時と判断）"
 },
 {
  "id": "fukuoka-dog-anella-cafe-fukuoka-ohori",
  "name": "ANELLA CAFE 福岡大濠店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "福岡県",
  "area": "大濠公園",
  "address": "福岡県福岡市中央区大手門3-14-21",
  "access": "福岡市地下鉄空港線 大濠公園駅から徒歩4分",
  "url": "https://wan-time.jp/store/anella-cafe-fukuoka-ohori/",
  "price": "一般30分800円（延長15分400円）、小学生30分400円、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可",
   "駅近"
  ],
  "description": "保護犬と保護猫がいる福祉型のふれあいカフェで、大濠公園の散歩とあわせやすい。30分800円からと、今回の中では入りやすい料金。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-fukuoka-ohori/ で確認／公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」とあり、2026-11-07 に reservation を不要に修正"
 },
 {
  "id": "hiroshima-dog-anella-cafe-hiroshima-midorii",
  "name": "ANELLA CAFE 広島緑井店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "広島県",
  "area": "広島市安佐南区・緑井",
  "address": "広島県広島市安佐南区緑井6丁目2-23 太陽社ビル",
  "access": "JR可部線 七軒茶屋駅・梅林駅から徒歩13分",
  "url": "https://wan-time.jp/store/anella-cafe-hiroshimamidorii/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "保護犬と保護猫がいる福祉型のふれあいカフェで、広島市の北部、安佐南区にある。犬も猫もいるので、どちらも好きな人や家族連れ向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-hiroshimamidorii/ で確認／公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」とあり、2026-11-07 に reservation を不要に修正"
 },
 {
  "id": "okayama-dog-samoyed-park-okayama",
  "name": "サモエドパーク岡山店",
  "animals": [
   "dog"
  ],
  "prefecture": "岡山県",
  "area": "岡山市北区・幸町",
  "address": "岡山県岡山市北区幸町8-26 L'AVON 1F",
  "access": "岡山市北区幸町（公式ページに最寄駅の記載なし）",
  "url": "https://samoyedcafe.net/shop/samoyed-park-okayama/",
  "price": "1時間 平日2,200円／土日祝2,600円（事前予約・税込）",
  "price_level": 3,
  "hours": "公式ページに記載なし（来店前に確認を）",
  "closed": "なし（サモエドの体調により不定休あり）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK"
  ],
  "description": "白いサモエド犬と過ごせる犬カフェで、岡山市の中心部にある。料金は事前予約が前提なので、来店前にネット予約するのが基本。不定期で、サモエドと街を歩く散歩企画も開かれる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://samoyedcafe.net/shop/samoyed-park-okayama/ で確認。営業時間は同ページに記載なし"
 },
 {
  "id": "hokkaido-dog-samoedos-sapporo",
  "name": "サモエドカフェ SAMOEDO'S 札幌店",
  "animals": [
   "dog"
  ],
  "prefecture": "北海道",
  "area": "札幌・すすきの周辺",
  "address": "北海道札幌市中央区南三条西4-12-1 4階",
  "access": "札幌市中央区南3条西4丁目（公式ページに最寄駅の記載なし）",
  "url": "https://samoyedcafe.net/shop/samoedos-sapporo/",
  "price": "1時間 平日2,200円／土日祝2,600円（事前予約・税込）、1時間貸切プランあり",
  "price_level": 3,
  "hours": "平日11:00〜19:00／土日祝10:00〜19:00（最終入店18:00）",
  "closed": "なし（サモエドの体調により不定休あり）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "貸切可"
  ],
  "description": "札幌中心部のビルの4階にあるサモエド犬のカフェ。店のサモエドが複数頭いて、1時間のチケット制で過ごす。大きくて白い犬が好きな人や、冬の札幌で屋内で動物と遊びたい人に向く。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://samoyedcafe.net/shop/samoedos-sapporo/ で確認"
 },
 {
  "id": "miyagi-dog-samos-cafe-sendai",
  "name": "サモエドカフェ SAMOS CAFE 仙台店",
  "animals": [
   "dog"
  ],
  "prefecture": "宮城県",
  "area": "仙台・一番町",
  "address": "宮城県仙台市青葉区一番町3-6-10 Foresta大町102",
  "access": "仙台市青葉区一番町（公式ページに最寄駅の記載なし）",
  "url": "https://samoyedcafe.net/shop/%e3%82%b5%e3%83%a2%e3%82%a8%e3%83%89%e3%82%ab%e3%83%95%e3%82%a7-samos-cafe-%e4%bb%99%e5%8f%b0%e5%ba%97/",
  "price": "1時間 平日2,500円／土日祝2,900円（事前予約・税込）、1時間貸切プランあり",
  "price_level": 3,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終入店19:00）",
  "closed": "なし（サモエドの体調により不定休あり）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "抱っこOK",
   "貸切可",
   "写真OK"
  ],
  "description": "仙台の一番町にあるサモエド犬のカフェ。おやつや抱っこ、チェキ撮影のオプションがあり、スマホでの撮影もできる。貸切プランもあるので、仲間で過ごしたい人にも向く。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://samoyedcafe.net/shop/%e3%82%b5%e3%83%a2%e3%82%a8%e3%83%89%e3%82%ab%e3%83%95%e3%82%a7-samos-cafe-%e4%bb%99%e5%8f%b0%e5%ba%97/ で確認"
 },
 {
  "id": "osaka-dog-samoedos-osaka-shinsaibashi",
  "name": "サモエドカフェ SAMOEDO'S 大阪心斎橋店",
  "animals": [
   "dog"
  ],
  "prefecture": "大阪府",
  "area": "心斎橋・アメリカ村",
  "address": "大阪府大阪市中央区西心斎橋2-10-31 ASUKAアメリカ村ビル 1階",
  "access": "大阪市中央区西心斎橋（公式ページに最寄駅の記載なし）",
  "url": "https://samoyedcafe.net/shop/samoedoscafe-osaka/",
  "price": "1時間 平日2,500円／土日祝2,750円（事前予約・税込）、1時間貸切プランあり",
  "price_level": 3,
  "hours": "平日11:00〜20:00／土日祝10:00〜20:00（最終入店19:00）",
  "closed": "なし（サモエドの体調により不定休あり）",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "抱っこOK",
   "貸切可",
   "写真OK",
   "予約制"
  ],
  "description": "アメリカ村にあるサモエド犬のカフェで、同じ心斎橋でも別系列のmoffuとは別の店。おやつ、抱っこ、チェキなどのオプションがあり、スマホ撮影もできる。予約が前提の作りになっている。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://samoyedcafe.net/shop/samoedoscafe-osaka/ で確認"
 },
 {
  "id": "kanagawa-dog-kamakura-mameshiba-cafe",
  "name": "鎌倉乃豆柴カフェ",
  "animals": [
   "dog"
  ],
  "prefecture": "神奈川県",
  "area": "鎌倉・小町通り",
  "address": "神奈川県鎌倉市小町2-10-4 東洋ビル2階",
  "access": "鎌倉駅東口から、鶴岡八幡宮へ向かう小町通り沿い",
  "url": "https://owls-cats-forest.com/free/mameshiba-kamakura",
  "price": "大人（13歳以上）1,200円／30分、小人（4〜12歳）800円（ワンドリンク付き）",
  "price_level": 2,
  "hours": "平日11:00〜17:30／土日祝11:00〜18:00（最終入場は閉店30分前）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "ドリンク込み",
   "子ども可"
  ],
  "description": "小町通り沿いのビルにある豆柴のカフェで、入場は原則30分、ドリンクが付く。予約は受けず当日券を店頭で買う方式で、完売することもある。0〜3歳は入れない。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://owls-cats-forest.com/free/mameshiba-kamakura で確認（予約不可、当日券のみと記載）"
 },
 {
  "id": "shizuoka-dog-anella-cafe-hamamatsu-chuo",
  "name": "ANELLA CAFE 浜松中央店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "静岡県",
  "area": "浜松・中央",
  "address": "静岡県浜松市中央区中央1丁目16-9 シュテルンバウ東田町1F",
  "access": "JR浜松駅から徒歩10分",
  "url": "https://wan-time.jp/store/anella-cafe-hamamatsuchuo/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円、未就学児無料",
  "price_level": 2,
  "hours": "平日・土日祝とも12:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "浜松駅から歩ける場所にある、保護犬と保護猫のふれあいカフェ。公式には保護犬・保護猫の一覧ページがあり、どんな子がいるか事前に見られる。30分から気軽に入れる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-hamamatsuchuo/ で確認。予約の記載はなし／公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」とあり、2026-11-07 に reservation を不要に修正"
 },
 {
  "id": "kyoto-dog-anella-cafe-kyoto-karasuma",
  "name": "ANELLA CAFE 京都烏丸店",
  "animals": [
   "dog"
  ],
  "prefecture": "京都府",
  "area": "烏丸御池",
  "address": "京都府京都市中京区両替町通姉小路上ル龍池町448番地4",
  "access": "京都市営地下鉄 烏丸御池駅2番出口から徒歩1分",
  "url": "https://wan-time.jp/store/anella-cafe-kyotokarasuma/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円、未就学児無料",
  "price_level": 2,
  "hours": "12:00〜18:00（平日・土日祝とも）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "ふれあいOK",
   "子ども可",
   "駅近"
  ],
  "description": "烏丸御池駅からすぐの、保護犬がいるふれあいカフェ（保護猫は時期によって不在）。観光や買い物の合間に30分だけ立ち寄るような使い方がしやすい。譲渡活動を行う団体のカフェとして運営されている。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-kyotokarasuma/ で確認。予約の記載はなし／公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」とあり、2026-11-07 に reservation を不要に修正"
 },
 {
  "id": "oita-dog-anella-cafe-oita",
  "name": "ANELLA CAFE 大分店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "大分県",
  "area": "大分市・毛井",
  "address": "大分県大分市毛井553-1",
  "access": "大分バス 毛井バス停から徒歩1分",
  "url": "https://wan-time.jp/store/anella-cafe-oita/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "大分市の郊外にある保護犬・保護猫のふれあいカフェ。最寄りは鉄道駅ではなくバス停で、車で行くほうが現実的。保護された犬猫と30分から過ごせる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-oita/ で確認。予約の記載はなし／公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」とあり、2026-11-07 に reservation を不要に修正"
 },
 {
  "id": "hokkaido-dog-anella-cafe-hakodate",
  "name": "ANELLA CAFE 函館店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "北海道",
  "area": "函館・花園町",
  "address": "北海道函館市花園町23-3",
  "access": "函館市電 湯の川線 深堀町駅から徒歩14分",
  "url": "https://wan-time.jp/store/anella-cafe-hakodate/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜18:30／土日祝11:00〜18:30",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "函館市電の沿線にある保護犬・保護猫のふれあいカフェ。閉店が18:30と、この系列の中ではやや遅め。旅行中に動物とふれあいたい人にも寄りやすい。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-hakodate/ で確認。予約の記載はなし／公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」とあり、2026-11-07 に reservation を不要に修正"
 },
 {
  "id": "aichi-dog-anella-cafe-aichi-ama",
  "name": "ANELLA CAFE 愛知海部店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "愛知県",
  "area": "海部郡・大治町",
  "address": "愛知県海部郡大治町西條柳原82-2",
  "access": "名鉄津島線 七宝駅から徒歩20分",
  "url": "https://wan-time.jp/store/anella-cafe-aichiama/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "名古屋の西、大治町にある保護犬・保護猫のふれあいカフェ。駅から徒歩20分ほどかかるので、車での来店が向く。名古屋近郊で保護動物と会いたい人に。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-aichiama/ で確認。予約の記載はなし／公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」とあり、2026-11-07 に reservation を不要に修正"
 },
 {
  "id": "saga-dog-anella-cafe-saga",
  "name": "ANELLA CAFE 佐賀店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "佐賀県",
  "area": "佐賀市・中の小路",
  "address": "佐賀県佐賀市中の小路6番26号 佐嘉栄ビル1階",
  "access": "JR佐賀駅から徒歩24分",
  "url": "https://wan-time.jp/store/anella-cafe-saga/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円、未就学児無料",
  "price_level": 2,
  "hours": "11:00〜17:00（平日・土日祝とも）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "佐賀市の中心部にある保護犬・保護猫のふれあいカフェ。営業は17:00までと早めに閉まるので、午後の早い時間に行くとよい。30分1,000円から。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-saga/ で確認。予約の記載はなし／公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」とあり、2026-11-07 に reservation を不要に修正"
 },
 {
  "id": "chiba-dog-anella-cafe-narashino",
  "name": "ANELLA CAFE 習志野店",
  "animals": [
   "dog"
  ],
  "prefecture": "千葉県",
  "area": "習志野・大久保",
  "address": "千葉県習志野市大久保1-25-18 1階",
  "access": "京成本線 京成大久保駅から徒歩1分",
  "url": "https://wan-time.jp/store/anella-cafe-narashino/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "ふれあいOK",
   "子ども可",
   "駅近"
  ],
  "description": "京成大久保駅の目の前にある、保護犬のふれあいカフェ（保護猫は時期によって不在）。現金のほかカードや電子マネーも使える。千葉県西部で保護動物とふれあいたい人向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-narashino/ で確認。予約の記載はなし／公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」とあり、2026-11-07 に reservation を不要に修正"
 },
 {
  "id": "okayama-dog-anella-cafe-okayama-senoo",
  "name": "ANELLA CAFE 岡山妹尾店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "岡山県",
  "area": "岡山市南区・妹尾",
  "address": "岡山県岡山市南区妹尾3390-7",
  "access": "JR宇野線 妹尾駅から徒歩21分",
  "url": "https://wan-time.jp/store/anella-cafe-okayamasenoo/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "保護犬と保護猫がいる福祉型のふれあいカフェで、猫と犬の両方に会える。2026年6月に開いた新しい店で、未就学児は無料、小学生は半額なので家族連れにも向く。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-okayamasenoo/ で確認／公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」とあり、2026-11-07 に reservation を不要に修正"
 },
 {
  "id": "kanagawa-dog-anella-cafe-yokohama-chukagai",
  "name": "ANELLA CAFE 横浜中華街店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "神奈川県",
  "area": "横浜・中華街",
  "address": "神奈川県横浜市中区山下町200-1 ボヌール山下町1F・2F",
  "access": "みなとみらい線 日本大通り駅から徒歩6分",
  "url": "https://wan-time.jp/store/anella-cafe-yokohamachukagai/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円、未就学児無料",
  "price_level": 2,
  "hours": "11:00〜18:00（平日・土日祝とも）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可",
   "駅近"
  ],
  "description": "保護犬と保護猫がいる福祉型のふれあいカフェで、中華街観光のあいまに寄りやすい。1階と2階の二層で、猫にも犬にも会える。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-yokohamachukagai/ で確認／公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」とあり、2026-11-07 に reservation を不要に修正"
 },
 {
  "id": "hokkaido-dog-anella-cafe-sapporo-kiyota",
  "name": "ANELLA CAFE 札幌清田店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "北海道",
  "area": "札幌・清田区",
  "address": "北海道札幌市清田区平岡6条1丁目5-26",
  "access": "中央バス（平岡ニュータウン線）北野4条5丁目から徒歩1分",
  "url": "https://wan-time.jp/store/anella-cafe-sapporo-kiyota/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円、未就学児無料",
  "price_level": 2,
  "hours": "12:00〜18:00（平日・土日祝とも）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "保護犬と保護猫がいる福祉型のふれあいカフェで、札幌市の郊外、清田区にある。駐車場があり、車で家族と立ち寄りやすい。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-sapporo-kiyota/ で確認／公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」とあり、2026-11-07 に reservation を不要に修正"
 },
 {
  "id": "saitama-dog-anella-cafe-koshigaya",
  "name": "ANELLA CAFE 越谷店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "埼玉県",
  "area": "越谷市",
  "address": "埼玉県越谷市越ヶ谷5-2-5",
  "access": "東武スカイツリーライン 越谷駅から徒歩8分",
  "url": "https://wan-time.jp/store/anella-cafe-koshigaya/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "保護犬と保護猫に会える福祉型のふれあいカフェで、2026年10月に開いたばかりの店。未就学児は無料、小学生は半額で、家族連れにも向く。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-koshigaya/ で確認。猫の頭数は公式ページに記載なし／公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」とあり、2026-11-07 に reservation を不要に修正"
 },
 {
  "id": "niigata-dog-anella-cafe-shibata",
  "name": "ANELLA CAFE 新潟新発田店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "新潟県",
  "area": "新発田市",
  "address": "新潟県新発田市豊町2-6-21",
  "access": "JR新発田駅から徒歩10分",
  "url": "https://wan-time.jp/store/anella-cafe-shibata/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円、未就学児無料",
  "price_level": 2,
  "hours": "平日・祝日12:00〜18:00／土日11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "保護犬と保護猫に会える福祉型のふれあいカフェ。ドリンク飲み放題（300円）のオプションがある。新潟県北部で動物とふれあえる数少ない場所。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-shibata/ で確認。猫の頭数は公式ページに記載なし／公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」とあり、2026-11-07 に reservation を不要に修正"
 },
 {
  "id": "kagawa-dog-anella-cafe-takamatsu-chuo",
  "name": "ANELLA CAFE 高松中央店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "香川県",
  "area": "高松市・松縄町",
  "address": "香川県高松市松縄町50-14",
  "access": "琴電琴平線 三条駅から徒歩17分",
  "url": "https://wan-time.jp/store/anella-cafe-takamatsuchuo/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "保護犬と保護猫に会える福祉型のふれあいカフェで、犬の部屋と猫の部屋が分かれている。未就学児は無料、小学生は半額で家族連れにも向く。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-takamatsuchuo/ で確認。猫の頭数は公式ページに記載なし／公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」とあり、2026-11-07 に reservation を不要に修正"
 },
 {
  "id": "wakayama-dog-anella-cafe-wakayama-hashimoto",
  "name": "ANELLA CAFE 和歌山橋本駅前店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "和歌山県",
  "area": "橋本市",
  "address": "和歌山県橋本市古佐田1-3-13",
  "access": "JR和歌山線 橋本駅から徒歩1分",
  "url": "https://wan-time.jp/store/anella-cafe-wakayamahashimoto/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "ふれあいOK",
   "子ども可",
   "駅近"
  ],
  "description": "保護猫と触れ合える福祉型のカフェで、橋本駅から歩いてすぐ。未就学児は無料、小学生は半額。高野山方面への行き帰りにも寄れる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-wakayamahashimoto/ で確認。猫の頭数は公式ページに記載なし／公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」とあり、2026-11-07 に reservation を不要に修正"
 },
 {
  "id": "tochigi-dog-anella-cafe-ashikaga",
  "name": "ANELLA CAFE 足利店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "栃木県",
  "area": "足利市",
  "address": "栃木県足利市朝倉町2-1-11",
  "access": "東武伊勢崎線 東武和泉駅から徒歩12分（駐車場あり）",
  "url": "https://wan-time.jp/store/anella-cafe-ashikaga/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "保護猫と触れ合える福祉型のカフェで、足利市の郊外にある。駐車場があり、車で出かけやすい。未就学児は無料、小学生は半額。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-ashikaga/ で確認。猫の頭数は公式ページに記載なし／公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」とあり、2026-11-07 に reservation を不要に修正"
 },
 {
  "id": "ibaraki-dog-anella-cafe-hitachi",
  "name": "ANELLA CAFE 日立店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "茨城県",
  "area": "日立市",
  "address": "茨城県日立市大沼町3-17-26",
  "access": "JR常磐線 大甕駅から車で5分（駐車場あり）",
  "url": "https://wan-time.jp/store/anella-cafe-hitachi/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "保護猫と触れ合える福祉型のカフェで、日立市にある。現金のほかクレジットカードや電子マネー、QR決済が使える。未就学児は無料、小学生は半額。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-hitachi/ で確認。猫の頭数は公式ページに記載なし／公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」とあり、2026-11-07 に reservation を不要に修正"
 },
 {
  "id": "osaka-dog-mameshiba-cafe-osaka",
  "name": "豆柴カフェ 大阪店",
  "animals": [
   "dog"
  ],
  "prefecture": "大阪府",
  "area": "道頓堀",
  "address": "大阪府大阪市中央区道頓堀1丁目6-13 雛ビル（受付2階、豆柴カフェは4階）",
  "access": "道頓堀エリア",
  "url": "https://owls-cats-forest.com/free/mameshiba-osaka",
  "price": "大人（13歳以上）1,300円、小人（4〜12歳）800円（ワンドリンク付）。フクロウの森との共通券あり",
  "price_level": 2,
  "hours": "11:30〜17:30（最終入場は閉店30分前。変動あり）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "ドリンク込み",
   "子ども可",
   "写真OK"
  ],
  "description": "道頓堀のビル4階にある、豆柴とふれあえるカフェ。入場料にドリンクが付き、フラッシュなしなら撮影もできる。予約はなく当日の店頭チケット制で売り切れると入れず、4歳未満は入場不可。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式ページ https://owls-cats-forest.com/free/mameshiba-osaka で確認"
 },
 {
  "id": "tokyo-dog-asakusa-mameshiba-cafe",
  "name": "浅草の豆柴カフェ",
  "animals": [
   "dog"
  ],
  "prefecture": "東京都",
  "area": "浅草",
  "address": "東京都台東区浅草1-29-3",
  "access": "浅草エリア",
  "url": "https://owls-cats-forest.com/free/mameshiba-asakusa",
  "price": "大人（13歳以上）1,300円、小人（4〜12歳）800円（ワンドリンク付）",
  "price_level": 2,
  "hours": "平日11:00〜18:00／土日祝11:00〜18:40（最終入場は閉店40分前。変動あり）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "ドリンク込み",
   "子ども可",
   "写真OK"
  ],
  "description": "浅草寺の近くにある豆柴カフェで、原宿店より広いつくりだという。ドリンク付きの入場料で、当日の店頭チケットのみ。観光の途中に立ち寄る人が多く、4歳未満は入場できない。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式ページ https://owls-cats-forest.com/free/mameshiba-asakusa で確認"
 },
 {
  "id": "osaka-dog-dog-cafe-moff-lalaport-sakai",
  "name": "Dog Café MOFF ららぽーと堺店",
  "animals": [
   "dog"
  ],
  "prefecture": "大阪府",
  "area": "堺市美原区",
  "address": "大阪府堺市美原区黒山22番1 ららぽーと堺 1F",
  "access": "南海高野線 初芝駅からバスで約20分",
  "url": "https://moff-moff.jp/dog-cafe/sakai-lalaport/",
  "price": "入園料30分700円、延長10分250円（最大 平日1,900円／土日祝2,900円）。ドリンクバー380円が別に必要（税込）。3歳以下は無料",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30。混雑時は完全入れ替え制）",
  "closed": "ららぽーと堺の定休日に準ずる",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "子ども可"
  ],
  "description": "2026年7月に開いた、Dog Café MOFFの第1号店。ガラス張りの明るい屋内パークで、コーギーやプードル、ラブラドルなど約20頭が紹介されている。予約は不要で、抱っこはできない。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://moff-moff.jp/dog-cafe/sakai-lalaport/ で確認（2026-07-16 開店の告知あり）"
 },
 {
  "id": "aichi-dog-samoyed-cafe-al-nagoya-sakae",
  "name": "サモエドカフェ アル 名古屋栄店",
  "animals": [
   "dog"
  ],
  "prefecture": "愛知県",
  "area": "栄",
  "address": "愛知県名古屋市中区栄2丁目15-9 モリシマビル1階",
  "access": "栄エリア",
  "url": "https://samoyed.jp/nagoyasakae",
  "price": "50分 平日2,600円（事前予約・事前決済）／3,200円（予約なし）、土日祝3,600円／3,900円（税込）",
  "price_level": 3,
  "hours": "10:00〜19:00",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "貸切可",
   "写真OK"
  ],
  "description": "名古屋の栄にある、白いサモエドとふれあえる犬カフェ。事前予約・事前決済のほうが安く、予約なしだと割高になる。支払いはカード類が中心で、現金は使えない。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://samoyed.jp/nagoyasakae で確認（表示は描画後の本文）"
 },
 {
  "id": "tokyo-dog-cho-samoyed-harajuku",
  "name": "超！サモエド 原宿店",
  "animals": [
   "dog"
  ],
  "prefecture": "東京都",
  "area": "原宿",
  "address": "東京都渋谷区神宮前1-16-2 竹下館高松ビル2F",
  "access": "原宿エリア",
  "url": "https://cho-samoyed.jp/harajuku",
  "price": "50分 平日3,200円（事前予約）／3,500円（予約なし）、土日祝3,800円／4,200円（税込。チェキかおやつと交換できるコイン2枚付き）",
  "price_level": 4,
  "hours": "10:00〜19:00",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "貸切可",
   "写真OK"
  ],
  "description": "原宿の竹下通り近くにあるサモエドカフェ。ふれあいのほか、竹下通りや代々木公園を犬と歩く散歩プランがある。抱っこは不可で、入店条件は公式サイトで確認したい。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://cho-samoyed.jp/harajuku で確認（表示は描画後の本文）"
 },
 {
  "id": "osaka-dog-cho-samoyed-tsutenkaku",
  "name": "超！サモエド 通天閣店",
  "animals": [
   "dog"
  ],
  "prefecture": "大阪府",
  "area": "新世界・通天閣",
  "address": "大阪府大阪市浪速区恵美須東1-13-12 通天閣ビル2・3階",
  "access": "通天閣エリア",
  "url": "https://cho-samoyed.jp/tsutenkaku",
  "price": "50分 平日2,500円（事前予約）／2,900円（予約なし）、土日祝2,900円／3,200円（税込。チェキかおやつと交換できるコイン1枚付き）",
  "price_level": 3,
  "hours": "10:00〜19:00",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "写真OK"
  ],
  "description": "通天閣のビル内にあるサモエドカフェ。ふれあいのほかに、お揃いのはっぴで犬と歩く散歩プランや、冬期を除く人力車の特別プランがある。大阪観光とあわせて寄る人向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://cho-samoyed.jp/tsutenkaku で確認（表示は描画後の本文）"
 },
 {
  "id": "aichi-dog-smileland-osu",
  "name": "大型犬SMILELAND",
  "animals": [
   "dog"
  ],
  "prefecture": "愛知県",
  "area": "大須",
  "address": "愛知県名古屋市中区大須3丁目24番43号 大須セントラルスクエア2階",
  "access": "地下鉄名城線・鶴舞線 上前津駅から徒歩約4〜7分／鶴舞線 大須観音駅から徒歩約5〜7分",
  "url": "https://smile-samoyed.com/",
  "price": "45分 平日2,600円／土日祝3,000円（事前予約の料金・税込）",
  "price_level": 3,
  "hours": "月〜金10:00〜20:00／土日9:00〜20:00",
  "closed": "なし（年末年始を除く）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "写真OK"
  ],
  "description": "大須にある、サモエドを中心に20頭以上の大型犬が暮らす犬カフェ。おもちゃで遊んだり写真を撮ったり、散歩に出たりして過ごせる。料金は事前予約が前提で、土日は朝9時から開く。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://smile-samoyed.com/ と料金ページ https://smile-samoyed.com/about で確認（表示は描画後の本文）。2026-02登録の新しい店"
 },
 {
  "id": "aichi-dog-rio-tokoname",
  "name": "いぬカフェRio 常滑店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "愛知県",
  "area": "常滑市",
  "address": "愛知県常滑市りんくう町2丁目20番3 イオンモール常滑1階",
  "access": "名鉄空港線 りんくう常滑駅から徒歩5分",
  "url": "https://rio-corp.jp/shops/tokoname/",
  "price": "平日10分220円／土日祝10分250円（税込）。ドリンク飲み放題は425円（別料金）",
  "price_level": 2,
  "hours": "10:00〜20:00",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "複数の動物",
   "駅近"
  ],
  "description": "常滑市のイオンモール1階にある、小型犬と猫がいるふれあいカフェ。マルチーズやチワワ、プードルなど犬は約20頭、猫もいる。10分から入れて予約は要らない。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://rio-corp.jp/shops/tokoname/ で確認。店舗ページのお知らせ欄に「予約無しで最短10分から」との記載があり、予約は不要とした"
 },
 {
  "id": "miyagi-dog-rio-sendai",
  "name": "いぬカフェRio 仙台店",
  "animals": [
   "dog"
  ],
  "prefecture": "宮城県",
  "area": "仙台市青葉区・一番町",
  "address": "宮城県仙台市青葉区一番町3-1-24 山一商店ビル地下1階",
  "access": "JR仙台駅西口から徒歩8分",
  "url": "https://rio-corp.jp/shops/sendai/",
  "price": "平日10分220円／土日祝10分250円（税込）。ドリンク飲み放題は385円（別料金）",
  "price_level": 2,
  "hours": "11:00〜20:00",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ふれあいOK"
  ],
  "description": "仙台の一番町、ビルの地下1階にある小型犬中心のふれあいカフェ。10分単位の料金で、予約不要でふらりと入れる。仙台駅から歩ける距離だ。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://rio-corp.jp/shops/sendai/ で確認。店舗ページのお知らせ欄に「予約不要」との記載があり、不要とした"
 },
 {
  "id": "kyoto-dog-rio-kyoto",
  "name": "いぬカフェRio 京都店",
  "animals": [
   "dog"
  ],
  "prefecture": "京都府",
  "area": "京都河原町",
  "address": "京都府京都市中京区新京極通三条下る桜之町398 SMJ三条共同ビル2階",
  "access": "京都河原町駅9番出口から徒歩7分",
  "url": "https://rio-corp.jp/shops/kyoto/",
  "price": "平日10分250円／土日祝10分300円（税込）。ドリンク飲み放題は425円（別料金）",
  "price_level": 2,
  "hours": "11:00〜20:00",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ふれあいOK"
  ],
  "description": "新京極の近く、ビル2階にある小型犬のふれあいカフェ。10分から利用でき、予約不要で入れる。観光の合間に短く犬と遊びたい人に向く。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://rio-corp.jp/shops/kyoto/ で確認。店舗ページのお知らせ欄に「予約不要」との記載があり、不要とした"
 },
 {
  "id": "osaka-dog-rio-chayamachi",
  "name": "いぬカフェRio 茶屋町店",
  "animals": [
   "dog"
  ],
  "prefecture": "大阪府",
  "area": "梅田・茶屋町",
  "address": "大阪府大阪市北区茶屋町4-13",
  "access": "阪急大阪梅田駅から徒歩5分",
  "url": "https://rio-corp.jp/shops/chayamachi/",
  "price": "平日10分250円／土日祝10分300円（税込）。ドリンク飲み放題は425円（別料金）",
  "price_level": 2,
  "hours": "11:00〜20:00",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "駅近"
  ],
  "description": "梅田の茶屋町にある、小型犬のふれあいカフェ。10分単位で時間を決められ、ドリンクは飲み放題を追加できる。梅田での買い物の合間にも寄れる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://rio-corp.jp/shops/chayamachi/ で確認。予約の記載はなく推奨とした"
 },
 {
  "id": "hiroshima-dog-rio-hiroshima",
  "name": "いぬカフェRio 広島店",
  "animals": [
   "dog"
  ],
  "prefecture": "広島県",
  "area": "広島市南区・皆実町",
  "address": "広島県広島市南区皆実町2丁目8-17 ゆめタウン広島1階",
  "access": "広島電鉄 皆実町六丁目駅から徒歩5分",
  "url": "https://rio-corp.jp/shops/hiroshima/",
  "price": "平日10分220円／土日祝10分250円（税込）。ドリンク飲み放題は385円（別料金）",
  "price_level": 2,
  "hours": "10:00〜20:00",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "駅近"
  ],
  "description": "ゆめタウン広島1階にある、小型犬を中心としたふれあいカフェ。10分から使え、買い物のついでに犬とふれあえる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://rio-corp.jp/shops/hiroshima/ で確認。予約の記載はなく推奨とした"
 },
 {
  "id": "fukuoka-dog-rio-fukuoka",
  "name": "いぬカフェRio 福岡店",
  "animals": [
   "dog"
  ],
  "prefecture": "福岡県",
  "area": "糟屋郡粕屋町",
  "address": "福岡県糟屋郡粕屋町大字酒殿字老ノ木192-1 イオンモール福岡1階",
  "access": "酒殿駅から徒歩12分",
  "url": "https://rio-corp.jp/shops/fukuoka/",
  "price": "平日10分220円／土日祝10分250円（税込）。ドリンク飲み放題は385円（別料金）",
  "price_level": 2,
  "hours": "10:00〜20:00",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ふれあいOK"
  ],
  "description": "福岡市の東隣、粕屋町のイオンモール1階にある小型犬のふれあいカフェ。10分から入れる時間制で、車で来る家族連れにも合う。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://rio-corp.jp/shops/fukuoka/ で確認。予約の記載はなく推奨とした"
 },
 {
  "id": "miyazaki-dog-rio-miyazaki",
  "name": "いぬカフェRio 宮崎店",
  "animals": [
   "dog"
  ],
  "prefecture": "宮崎県",
  "area": "宮崎市",
  "address": "宮崎県宮崎市新別府町江口862-1 イオンモール宮崎サウスモール2階",
  "access": "宮崎駅大和口・イオンモール北口からバスで12分",
  "url": "https://rio-corp.jp/shops/miyazaki/",
  "price": "平日10分220円／土日祝10分250円（税込）。ドリンク飲み放題は385円（別料金）",
  "price_level": 2,
  "hours": "10:00〜20:00",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ふれあいOK"
  ],
  "description": "宮崎市のイオンモール2階にある、小型犬のふれあいカフェ。10分単位で使えるので、買い物の合間に犬と遊ぶ使い方ができる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://rio-corp.jp/shops/miyazaki/ で確認。予約の記載はなく推奨とした"
 },
 {
  "id": "kumamoto-dog-rio-yumetown-hikarinomori",
  "name": "いぬねこカフェRio ゆめタウン光の森店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "熊本県",
  "area": "菊陽町・光の森",
  "address": "熊本県菊池郡菊陽町光の森7丁目33番地1 ゆめタウン光の森 南館1階",
  "access": "光の森駅から徒歩5分",
  "url": "https://rio-corp.jp/shops/kumamoto/",
  "price": "平日10分220円／土日祝10分250円（税込）。ドリンク飲み放題は385円（別料金）",
  "price_level": 2,
  "hours": "10:00〜20:00",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "複数の動物",
   "駅近"
  ],
  "description": "ゆめタウン光の森の南館1階にある、犬と猫の両方がいるふれあいカフェ。公式のキャスト一覧には犬のほか多くの猫が載っている。10分単位で使え、どちらも好きな人向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://rio-corp.jp/shops/kumamoto/ で確認。予約の記載はなく推奨とした"
 },
 {
  "id": "oita-dog-rio-oita",
  "name": "いぬカフェRio 大分店",
  "animals": [
   "dog"
  ],
  "prefecture": "大分県",
  "area": "大分市",
  "address": "大分県大分市公園通り西2丁目1 パークプレイス大分 ガーデンウォーク3階",
  "access": "大分駅から車で20分",
  "url": "https://rio-corp.jp/shops/oita/",
  "price": "平日10分220円／土日祝10分220円（税込）。ドリンク飲み放題は385円（別料金）",
  "price_level": 2,
  "hours": "10:00〜20:00",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ふれあいOK"
  ],
  "description": "大分市のパークプレイス大分、ガーデンウォーク3階にある小型犬のふれあいカフェ。平日と土日祝で10分の料金が同じなのが特徴。車での来店が中心になる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://rio-corp.jp/shops/oita/ で確認。予約の記載はなく推奨とした"
 },
 {
  "id": "tokyo-dog-rio-harajuku",
  "name": "いぬカフェRio 原宿店",
  "animals": [
   "dog"
  ],
  "prefecture": "東京都",
  "area": "原宿",
  "address": "東京都渋谷区神宮前1-16-1 原宿関口ビル2F",
  "access": "JR原宿駅 竹下口から徒歩2分",
  "url": "https://rio-corp.jp/shops/harajuku/",
  "price": "平日10分270円／土日祝10分370円（税込）。ドリンク飲み放題は425円（別料金）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／休日10:00〜20:00",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "駅近"
  ],
  "description": "原宿駅の竹下口から歩いてすぐの、ビル2階にある小型犬のふれあいカフェ。豆柴やシャルティーなど若い犬もいる。10分単位で使えるので、竹下通りの散策の合間に寄りやすい。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://rio-corp.jp/shops/harajuku/ で確認。予約の記載はなく推奨とした"
 },
 {
  "id": "tokyo-dog-rio-akihabara",
  "name": "いぬカフェRio 秋葉原店",
  "animals": [
   "dog"
  ],
  "prefecture": "東京都",
  "area": "秋葉原",
  "address": "東京都千代田区外神田4丁目4番2号 HULIC&New AKIHABARA 3階",
  "access": "JR秋葉原駅 電気街口から徒歩5分",
  "url": "https://rio-corp.jp/shops/akihabara/",
  "price": "平日10分270円／土日祝10分370円（税込）。ドリンク飲み放題は425円（別料金）",
  "price_level": 2,
  "hours": "11:00〜20:00",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "駅近"
  ],
  "description": "秋葉原の複合ビル3階にある、小型犬を中心としたふれあいカフェ。10分から入れる時間制で、ドリンク飲み放題を追加できる。街歩きの途中に犬と遊びたい人向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://rio-corp.jp/shops/akihabara/ で確認。予約の記載はなく推奨とした"
 },
 {
  "id": "tokyo-dog-rio-shin-okubo",
  "name": "いぬカフェRio 新大久保店",
  "animals": [
   "dog"
  ],
  "prefecture": "東京都",
  "area": "新大久保",
  "address": "東京都新宿区大久保2-32-4 貴志ビル3F・4F",
  "access": "JR新大久保駅から徒歩5分",
  "url": "https://rio-corp.jp/shops/shin-okubo/",
  "price": "平日10分270円／土日祝10分370円（税込）。ドリンク飲み放題は425円（別料金）",
  "price_level": 2,
  "hours": "平日11:00〜20:00／休日10:00〜20:00",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "駅近"
  ],
  "description": "新大久保の街なか、ビルの3・4階にあるふれあいカフェ。10分単位の料金で、短時間だけの利用もできる。コリアンタウン歩きとあわせて立ち寄る人にも合う。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://rio-corp.jp/shops/shin-okubo/ で確認。予約の記載はなく推奨とした"
 },
 {
  "id": "tokyo-dog-rio-shimokitazawa",
  "name": "いぬカフェRio 下北沢店",
  "animals": [
   "dog"
  ],
  "prefecture": "東京都",
  "area": "下北沢",
  "address": "東京都世田谷区北沢2-15-16 シャイン北沢ビル3F",
  "access": "下北沢駅 南西口から徒歩3分",
  "url": "https://rio-corp.jp/shops/shimokitazawa/",
  "price": "平日10分250円／土日祝10分300円（税込）。ドリンク飲み放題は425円（別料金）",
  "price_level": 2,
  "hours": "11:00〜20:00",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "駅近"
  ],
  "description": "下北沢駅の南西口から近い、ビル3階の小型犬ふれあいカフェ。古着屋や喫茶店を回る合間に、10分から犬と過ごせる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://rio-corp.jp/shops/shimokitazawa/ で確認。予約の記載はなく推奨とした"
 },
 {
  "id": "tokyo-dog-rio-kichijoji",
  "name": "いぬカフェRio 吉祥寺店",
  "animals": [
   "dog"
  ],
  "prefecture": "東京都",
  "area": "吉祥寺",
  "address": "東京都武蔵野市吉祥寺本町1丁目14-3 地下1階",
  "access": "JR吉祥寺駅 北口から徒歩2分",
  "url": "https://rio-corp.jp/shops/kichijoji/",
  "price": "平日10分250円／土日祝10分300円（税込）。ドリンク飲み放題は425円（別料金）",
  "price_level": 2,
  "hours": "11:00〜20:00",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "駅近"
  ],
  "description": "吉祥寺駅の北口すぐ、地下1階にある小型犬のふれあいカフェ。10分単位で使え、散歩や買い物の途中に寄りやすい。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://rio-corp.jp/shops/kichijoji/ で確認。予約の記載はなく推奨とした"
 },
 {
  "id": "tokyo-dog-rio-shinjuku",
  "name": "いぬカフェRio 新宿店",
  "animals": [
   "dog"
  ],
  "prefecture": "東京都",
  "area": "新宿・歌舞伎町",
  "address": "東京都新宿区歌舞伎町1丁目15-5 地下1階",
  "access": "JR新宿駅 東口から徒歩5分",
  "url": "https://rio-corp.jp/shops/shinjyuku/",
  "price": "平日10分270円／土日祝10分370円（税込）。ドリンク飲み放題は425円（別料金）",
  "price_level": 2,
  "hours": "11:00〜20:00",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "駅近"
  ],
  "description": "新宿東口から歩ける、歌舞伎町の地下1階にある小型犬ふれあいカフェ。10分から使える時間制で、ドリンク飲み放題も追加できる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://rio-corp.jp/shops/shinjyuku/ で確認。予約の記載はなく推奨とした"
 },
 {
  "id": "tokyo-dog-rio-asakusa",
  "name": "いぬカフェRio 浅草店",
  "animals": [
   "dog"
  ],
  "prefecture": "東京都",
  "area": "浅草",
  "address": "東京都台東区浅草1丁目21-8 シャローグラス 地下1階",
  "access": "浅草駅（浅草線A4出口／銀座線1番出口）から徒歩5分",
  "url": "https://rio-corp.jp/shops/asakusa/",
  "price": "平日10分270円／土日祝10分370円（税込）。ドリンク飲み放題は425円（別料金）",
  "price_level": 2,
  "hours": "11:00〜20:00",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "駅近"
  ],
  "description": "浅草の地下1階にある小型犬のふれあいカフェ。観光の途中に10分単位で立ち寄れる。浅草寺周辺を歩く人の休憩にも使える。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://rio-corp.jp/shops/asakusa/ で確認。予約の記載はなく推奨とした"
 },
 {
  "id": "tokyo-dog-rio-ikebukuro",
  "name": "いぬカフェRio 池袋店",
  "animals": [
   "dog"
  ],
  "prefecture": "東京都",
  "area": "池袋・東池袋",
  "address": "東京都豊島区東池袋1-12-11 OGSビル 地下1階",
  "access": "池袋駅 サンシャイン口から徒歩2分",
  "url": "https://rio-corp.jp/shops/ikebukuro/",
  "price": "平日10分270円／土日祝10分370円（税込）。ドリンク飲み放題は425円（別料金）",
  "price_level": 2,
  "hours": "11:00〜20:00",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "駅近"
  ],
  "description": "池袋のサンシャイン口側、ビル地下1階にある小型犬ふれあいカフェ。トイプードルなど2歳前後の犬も紹介されている。10分から使える。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://rio-corp.jp/shops/ikebukuro/ で確認。予約の記載はなく推奨とした"
 },
 {
  "id": "kanagawa-dog-rio-kamakura-komachi",
  "name": "いぬカフェRio 鎌倉小町通り店",
  "animals": [
   "dog"
  ],
  "prefecture": "神奈川県",
  "area": "鎌倉・小町通り",
  "address": "神奈川県鎌倉市小町2丁目10-1 松喜屋小町ビル1階",
  "access": "JR鎌倉駅 東口から徒歩2分",
  "url": "https://rio-corp.jp/shops/kamakura/",
  "price": "平日10分250円／土日祝10分300円（税込）。ドリンク飲み放題は385円（別料金）",
  "price_level": 2,
  "hours": "10:00〜19:00",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "駅近"
  ],
  "description": "鎌倉駅の東口から小町通りへ入ってすぐの1階にある、小型犬のふれあいカフェ。閉店は19時と早めなので、観光の予定に合わせて早めに行きたい。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://rio-corp.jp/shops/kamakura/ で確認。予約の記載はなく推奨とした"
 },
 {
  "id": "saitama-dog-rio-lalaport-fujimi",
  "name": "いぬカフェRio 富士見店",
  "animals": [
   "dog"
  ],
  "prefecture": "埼玉県",
  "area": "富士見市",
  "address": "埼玉県富士見市山室1-1313 ららぽーと富士見2F",
  "access": "東武東上線 鶴瀬駅東口からバス5分（徒歩20分）",
  "url": "https://rio-corp.jp/shops/fujimi/",
  "price": "平日10分220円／土日祝10分250円（税込）。ドリンク飲み放題は385円（別料金）",
  "price_level": 2,
  "hours": "10:00〜20:00",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ふれあいOK"
  ],
  "description": "ららぽーと富士見の2階にある、小型犬のふれあいカフェ。10分単位で使え、モールでの買い物や食事のあとに寄れる。駅からはバスが便利だ。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://rio-corp.jp/shops/fujimi/ で確認。予約の記載はなく推奨とした"
 },
 {
  "id": "hiroshima-dog-rio-yumetown-hatsukaichi",
  "name": "いぬカフェRio 廿日市店",
  "animals": [
   "dog"
  ],
  "prefecture": "広島県",
  "area": "廿日市市",
  "address": "広島県廿日市市下平良2丁目2-1 ゆめタウン廿日市2階",
  "access": "広電廿日市市役所駅・JR宮内串戸駅から徒歩10分（直通バス13分）",
  "url": "https://rio-corp.jp/shops/hatsukaichi/",
  "price": "平日10分220円／土日祝10分220円（税込）。ドリンク飲み放題は385円（別料金）",
  "price_level": 2,
  "hours": "10:00〜20:00",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ふれあいOK"
  ],
  "description": "ゆめタウン廿日市の2階にある小型犬ふれあいカフェで、チワワなど小柄な犬も紹介されている。平日と土日祝で10分の料金が同じ。宮島へ行く途中にも寄れる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://rio-corp.jp/shops/hatsukaichi/ で確認。予約の記載はなく推奨とした"
 },
 {
  "id": "saga-dog-rio-yumetown-saga",
  "name": "いぬカフェRio 佐賀店",
  "animals": [
   "dog"
  ],
  "prefecture": "佐賀県",
  "area": "佐賀市",
  "address": "佐賀県佐賀市兵庫北5丁目14-1 ゆめタウン佐賀1階",
  "access": "JR佐賀駅から佐賀市営バス（ゆめタウン佐賀行き）15分",
  "url": "https://rio-corp.jp/shops/saga/",
  "price": "平日10分220円／土日祝10分220円（税込）。ドリンク飲み放題は385円（別料金）",
  "price_level": 2,
  "hours": "10:00〜20:00",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ふれあいOK"
  ],
  "description": "ゆめタウン佐賀の1階にある、小型犬のふれあいカフェ。10分から利用でき、平日・土日祝とも料金は同じ。車での来店が中心になる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://rio-corp.jp/shops/saga/ で確認。予約の記載はなく推奨とした"
 },
 {
  "id": "fukuoka-dog-rio-yumetown-kurume",
  "name": "いぬカフェRio 久留米店",
  "animals": [
   "dog"
  ],
  "prefecture": "福岡県",
  "area": "久留米市",
  "address": "福岡県久留米市新合川1丁目2-1 ゆめタウン久留米2階",
  "access": "西鉄久留米駅からバス15分",
  "url": "https://rio-corp.jp/shops/kurume/",
  "price": "平日10分220円／土日祝10分250円（税込）。ドリンク飲み放題は385円（別料金）",
  "price_level": 2,
  "hours": "10:00〜20:00",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ふれあいOK"
  ],
  "description": "ゆめタウン久留米の2階にある、小型犬のふれあいカフェ。マルチーズやダックスなどがいて、10分単位で使える。モールの買い物と合わせやすい。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://rio-corp.jp/shops/kurume/ で確認。店舗ページに「予約不要」の記載があり不要とした"
 },
 {
  "id": "okinawa-dog-rio-chatan",
  "name": "いぬカフェRio 沖縄北谷店",
  "animals": [
   "dog"
  ],
  "prefecture": "沖縄県",
  "area": "北谷町・美浜",
  "address": "沖縄県中頭郡北谷町美浜9-8 シーサイドスクエア2階",
  "access": "北谷町美浜エリア",
  "url": "https://rio-corp.jp/shops/%e6%b2%96%e7%b8%84%e5%8c%97%e8%b0%b7%e5%ba%97/",
  "price": "平日10分220円／土日祝10分250円（税込）",
  "price_level": 2,
  "hours": "11:00〜20:00",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ふれあいOK"
  ],
  "description": "北谷の美浜エリア、シーサイドスクエア2階にある小型犬のふれあいカフェ。10分から使える時間制。観光で美浜を訪れた際に立ち寄れる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://rio-corp.jp/shops/%e6%b2%96%e7%b8%84%e5%8c%97%e8%b0%b7%e5%ba%97/ で確認。ドリンクと最寄駅の記載はなく、予約の記載もなく推奨とした"
 },
 {
  "id": "tokyo-dog-husky-cafe-tokyo",
  "name": "HUSKY CAFE TOKYO",
  "animals": [
   "dog"
  ],
  "prefecture": "東京都",
  "area": "白金高輪",
  "address": "東京都港区白金3丁目11-8 白金レーベル1F・B1",
  "access": "東京メトロ南北線・都営三田線 白金高輪駅3番出口から徒歩5分",
  "url": "https://huskycafetokyo.com/",
  "price": "平日50分3,500円／土日祝50分3,800円（税込・フリードリンク付き）",
  "price_level": 4,
  "hours": "公式ページに記載なし（50分の入れ替え制の予約枠）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "予約制",
   "ドリンク込み",
   "写真OK",
   "貸切可"
  ],
  "description": "日本でここだけとうたうシベリアンハスキー専門の犬カフェ。ハスキーのほかアラスカンマラミュートやハスキーMIXなど、大柄な犬が複数いて、50分の入れ替え制でたっぷり遊べる。完全予約制で、12歳以下と妊娠中の人は入れない。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://huskycafetokyo.com/ と料金ページ https://huskycafetokyo.com/price/ ・予約ページ https://www.tablecheck.com/ja/shops/huskycafe/reserve で確認。営業時間・定休日の記載なし。頭数は公式に明記なし"
 },
 {
  "id": "chiba-dog-grandmou-kisarazu",
  "name": "大型犬カフェ GRAND MOU（ぐらんむー）",
  "animals": [
   "dog"
  ],
  "prefecture": "千葉県",
  "area": "木更津",
  "address": "千葉県木更津市中里2-2-4",
  "access": "JR木更津駅から約1.6km（駅からの送迎プランあり）",
  "url": "https://grandmou.com/",
  "price": "ふれあいプラン 平日60分4,500円（スペシャルドリンク付き）／土日祝はパーティービュッフェ付き8,900円（税込）",
  "price_level": 4,
  "hours": "平日1部12:00〜／土日祝1部12:00〜・2部13:30〜（ふれあいは1日1〜3時間）",
  "closed": "火・水・金（祝日は営業）",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "予約制",
   "ドリンク込み",
   "写真OK",
   "貸切可"
  ],
  "description": "木更津の一軒家で、セントバーナード、ゴールデンレトリバー、バーニーズ、グレートピレニーズ、ニューファンドランド、サモエドなど十数頭の大型犬と過ごせる。犬を最優先にした営業で、開く日も時間も短めに絞ってある。平日はふれあいのみ、土日祝は食事つきのパーティープランになる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://grandmou.com/（プラン＆ご予約、ご入店の流れ、FAQ）で確認。ふれあいは60分。「当店は予約制です」とあり reservation は必須（当日は空きがあれば店頭・電話で可）。定休日は火・水・金"
 },
 {
  "id": "shizuoka-dog-milimili-yoshida",
  "name": "大型犬ふれあいカフェ MiliMili（ミリミリ）",
  "animals": [
   "dog"
  ],
  "prefecture": "静岡県",
  "area": "吉田町",
  "address": "静岡県榛原郡吉田町川尻359-9",
  "access": "東名吉田ICから車で約15分",
  "url": "https://milimili.info/",
  "price": "平日1時間2,000円／土日祝1時間2,500円（税込・フリードリンク付き）",
  "price_level": 2,
  "hours": "11:00〜17:00（土日は18:00まで。13:00〜14:00は犬の休憩）",
  "closed": "月曜",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "予約制",
   "ドリンク込み"
  ],
  "description": "静岡県中部で初の大型犬ふれあいカフェ。ゴールデンレトリバー、フラットコーテッドレトリバー、グレートピレニーズなど約6種類の大型犬がいて、1時間ごとの枠で触れ合える。予約は3週間前から訪問1時間前まで。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://milimili.info/ で確認（2026-01改定後の料金）。最寄駅の記載なし。小学4年生未満と妊娠中の人は入れない"
 },
 {
  "id": "fukuoka-dog-moffle-tenjin",
  "name": "モフれる大型犬たちのカフェ moffle 福岡天神店",
  "animals": [
   "dog"
  ],
  "prefecture": "福岡県",
  "area": "天神",
  "address": "福岡県福岡市中央区天神3丁目16-15 サンヨービル1-2階",
  "access": "福岡市地下鉄空港線 天神駅西1番口から徒歩2分",
  "url": "https://bigdogs-moffle.com/",
  "price": "60分 平日2,500円／土日祝2,900円（Web予約・1ドリンク付き）。電話予約・予約なしは平日2,800円／土日祝3,200円（税込）",
  "price_level": 3,
  "hours": "公式ページに記載なし（来店前に確認を）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "ドリンク込み",
   "写真OK"
  ],
  "description": "福岡県で初めての大型犬ふれあいカフェで、7頭ほどの大型犬がいる。60分制でドリンクが付き、有料でおやつ、チェキ、10分の散歩も選べる。小学生以下と妊娠中の人は入れない。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://bigdogs-moffle.com/ ・料金表 https://bigdogs-moffle.com/fee/ ・店舗一覧 https://bigdogs-moffle.com/access/ で確認。営業時間・定休日は公式サイトに記載なし。7頭は公式Instagramの紹介文。予約なしでも入れるため推奨"
 },
 {
  "id": "hyogo-dog-moffle-kobe-sannomiya",
  "name": "モフれる大型犬たちのカフェ moffle 神戸三ノ宮店",
  "animals": [
   "dog"
  ],
  "prefecture": "兵庫県",
  "area": "三宮",
  "address": "兵庫県神戸市中央区下山手通1-1-1 東新ビル5階",
  "access": "神戸市営地下鉄 三宮駅西出口3から徒歩1分",
  "url": "https://bigdogs-moffle.com/",
  "price": "60分 平日2,500円／土日祝2,900円（Web予約・1ドリンク付き）。電話予約・予約なしは平日2,800円／土日祝3,200円（税込）",
  "price_level": 3,
  "hours": "公式ページに記載なし（来店前に確認を）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "ドリンク込み",
   "写真OK",
   "駅近"
  ],
  "description": "2025年10月に開いた、三宮駅から徒歩1分の大型犬カフェ。ビルの5階にふれあい広場があり、大型犬と60分遊べてドリンクも付く。階段のみのため車椅子の人は断られることがある。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://bigdogs-moffle.com/ ・料金表 https://bigdogs-moffle.com/fee/ ・店舗一覧 https://bigdogs-moffle.com/access/ で確認（2025-10-07 開店のお知らせあり）。営業時間・定休日・頭数の記載なし"
 },
 {
  "id": "osaka-dog-moffleplus-shinsaibashi",
  "name": "モフれる大型犬たちのカフェ moffle+（もっふるぷらす）大阪心斎橋店",
  "animals": [
   "dog"
  ],
  "prefecture": "大阪府",
  "area": "心斎橋・本町",
  "address": "大阪府大阪市中央区北久宝寺町3丁目5-2 北久宝寺町ビル",
  "access": "大阪メトロ 本町駅12出口から徒歩約4分／心斎橋駅2番出口から徒歩8分",
  "url": "https://bigdogs-moffle.com/",
  "price": "60分 平日2,500円／土日祝2,900円（Web予約・1ドリンク付き）。電話予約・予約なしは平日2,800円／土日祝3,200円（税込）",
  "price_level": 3,
  "hours": "公式ページに記載なし（来店前に確認を）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "ドリンク込み",
   "写真OK"
  ],
  "description": "2026年3月に開いた、moffle系列の大阪の店。大型犬のふれあい広場と、犬を眺めて過ごすフリースペースがあり、60分制。ドリンク付きで、おやつやチェキも選べる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://bigdogs-moffle.com/ ・料金表 https://bigdogs-moffle.com/fee/ ・店舗一覧 https://bigdogs-moffle.com/access/ で確認（2026-03 オープンのお知らせあり）。営業時間・定休日・頭数の記載なし"
 },
 {
  "id": "hokkaido-dog-share-hapi-shiroishi",
  "name": "大型犬カフェ Share Hapi",
  "animals": [
   "dog"
  ],
  "prefecture": "北海道",
  "area": "白石",
  "address": "北海道札幌市白石区南郷通1丁目北2-1",
  "access": "札幌市営地下鉄 白石駅から約150m",
  "url": "https://share-hapi.com/",
  "price": "平日1時間 大人2,200円・学生2,000円・小学生1,500円／土日祝 大人2,500円・学生2,300円・小学生1,500円（税込）",
  "price_level": 3,
  "hours": "10:00〜16:00（最終入店15:00）",
  "closed": "不定休（公式表記は「わんちゃんの気分次第」）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "子ども可",
   "写真OK"
  ],
  "description": "札幌の白石駅近くにある大型犬カフェ。看板犬を含む7頭ほどの大型犬が暮らし、ボールやフリスビーで遊べる。1時間制で小学生以上が触れ合え、未就学児は柵つきの小上がりで過ごす。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://share-hapi.com/ （料金・店舗情報・よくある質問）と予約ページ https://www.tablecheck.com/ja/sharehapi-largedog で確認。犬種の記載は名前と性格のみで、頭数は紹介ページの7頭から。予約は基本予約制で空きがあれば当日も可のため推奨"
 },
 {
  "id": "hokkaido-dog-happy-bernard-sapporo",
  "name": "超大型犬ふれあいHOUSE HAPPY BERNARD（ハッピーバーナード）",
  "animals": [
   "dog"
  ],
  "prefecture": "北海道",
  "area": "中島公園",
  "address": "北海道札幌市中央区南9条西6丁目421-15 ナインスアベニュー1F",
  "access": "札幌市営地下鉄南北線 中島公園駅2番出口から徒歩5分",
  "url": "https://happybernard.namara.jp/",
  "price": "大人（中学生以上）30分2,500円／60分3,500円（税込・ドリンク飲み放題）",
  "price_level": 4,
  "hours": "10:00〜19:00",
  "closed": "不定休",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "ドリンク込み",
   "写真OK",
   "貸切可"
  ],
  "description": "超大型犬のセント・バーナードとふれあえる、札幌の店。ドッグショーでチャンピオンになった犬が迎えてくれ、ドリンクは飲み放題。予約は電話かフォームで、予約なしや当日の来店も受け付けている。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://happybernard.namara.jp/ で確認。頭数の記載なし（セント・バーナードがいる旨のみ）。2026年8月の夏季キャンペーン告知あり。予約なしでも入れるため推奨"
 },
 {
  "id": "tokyo-dog-hotto-hitoken-mizue",
  "name": "大型犬カフェ ほっとひと犬",
  "animals": [
   "dog"
  ],
  "prefecture": "東京都",
  "area": "瑞江",
  "address": "東京都江戸川区瑞江4-42-9",
  "access": "都営新宿線 瑞江駅から徒歩4分",
  "url": "https://www.hottooneone.com/",
  "price": "入場券 平日3,000円／土日祝3,500円（予約ページの表示・税込。平日2時間連続は5,000円）",
  "price_level": 3,
  "hours": "平日11:00〜18:00（最終受付17:00）／土日祝10:30〜18:00（最終受付17:00）。金曜は11:00〜13:00の短縮営業",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "写真OK",
   "貸切可"
  ],
  "description": "オーナーの一軒家で暮らす大型犬6頭と過ごせる、動物介在活動の考えを取り入れたカフェ。セントバーナード、バーニーズ、ゴールデン、グレートピレニーズ、ニューファンドランド×セントバーナードなどがいる。予約優先制で、予約なしでも満席でなければ入れる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://www.hottooneone.com/ ・ワンちゃん紹介 https://www.hottooneone.com/dog/ ・予約ページ https://www.tablecheck.com/ja/shops/hottooneone/reserve で確認。公式の料金ページは画像表示のため、金額は予約ページの入場券表示から（時間の長さは1時間と推定、変動あり）。定休日の記載なし"
 },
 {
  "id": "akita-dog-akitainu-cafe-odate",
  "name": "秋田犬cafe",
  "animals": [
   "dog"
  ],
  "prefecture": "秋田県",
  "area": "大館",
  "address": "秋田県大館市大町9 MARUWWA ニコメ",
  "access": "公式ページに記載なし（来店前に確認を）",
  "url": "https://mofumofu-akitainu.com/",
  "price": "30分（ふれあい10分）＋1ドリンク 大人2,000円・子ども1,000円／ふれあい10分のみ 大人1,500円・子ども1,000円（税込）",
  "price_level": 2,
  "hours": "11:00〜18:00（LO17:00）",
  "closed": "火・水・木（営業日は月・金・土・日・祝）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "子ども可",
   "写真OK"
  ],
  "description": "忠犬ハチ公のふるさと・大館にある、日本初をうたう秋田犬のふれあいカフェ。7頭ほどの秋田犬がいて毛色は赤・虎・白と多彩で、長毛の子もいる。当日の出勤犬は公式ページで分かり、ふれあい付きと眺めるだけのカフェ利用の2種類がある。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://mofumofu-akitainu.com/ ・ご利用案内 https://mofumofu-akitainu.com/content1.html ・秋田犬紹介 https://mofumofu-akitainu.com/content2.html で確認。予約の案内は「cafeご予約」リンクのみで必須の記載なく不要とした。定休日は営業日（月・金・土・日・祝）の裏返し。2025-05開店"
 },
 {
  "id": "aichi-dog-therapymate-shinshiro",
  "name": "大型犬ふれあいカフェ セラピーMate 愛知新城店",
  "animals": [
   "dog"
  ],
  "prefecture": "愛知県",
  "area": "新城",
  "address": "愛知県新城市豊岡字田ノ島52-9 サーブアイランド内",
  "access": "新東名 新城ICから車で約15分",
  "url": "https://therapycafemate.jp.net/shinshiro",
  "price": "平日45分2,000円／土日祝45分2,500円（税込・ワンドリンク付き）",
  "price_level": 2,
  "hours": "10:00〜16:00（土日祝は17:00まで。12/16〜2/28は平日11:00〜16:00、休日10:00〜17:00）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "予約制",
   "ドリンク込み",
   "子ども可"
  ],
  "description": "セラピードッグとして活動する大型犬と触れ合える、新城市のカフェ。45分制で、1枠最大8人、公式LINE経由の予約が必要。毎月第2・第4土曜はファミリーDAYで子ども料金が安くなる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://therapycafemate.jp.net/shinshiro で確認（トップ https://therapycafemate.jp.net/ ）。犬種・頭数の記載なし。定休日の記載なし。2024-09開店"
 },
 {
  "id": "tokyo-dog-therapymate-setagaya",
  "name": "大型犬ふれあいカフェ セラピーMate 世田谷店",
  "animals": [
   "dog"
  ],
  "prefecture": "東京都",
  "area": "世田谷・給田",
  "address": "東京都世田谷区給田5-9-5 千歳敬心苑 地域ふれあいホール内",
  "access": "千歳烏山駅・仙川駅から徒歩約20分（千歳烏山駅から関東バス「北給田」下車徒歩約3分）",
  "url": "https://therapycafemate.jp.net/setagaya/",
  "price": "大人（中学生以上）45分2,500円、小人（4歳〜小学生）2,000円、0〜3歳無料（税込・ワンドリンク付き。4名以上で500円引き）",
  "price_level": 3,
  "hours": "土日祝のみ 10:00〜17:00（土は11:00から。冬期は11:00〜16:00）",
  "closed": "平日（土日祝のみ営業）",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "予約制",
   "ドリンク込み",
   "子ども可"
  ],
  "description": "介護施設に併設された、土日祝だけ開くセラピードッグの大型犬カフェ。45分制で最大12人、公式LINEから予約する。0〜3歳は無料で、家族連れや4人以上のグループは割引がある。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://therapycafemate.jp.net/setagaya/ で確認（2026-08-01 料金・定員改定後）。犬種・頭数の記載なし。2026-04-25 開店。11/8(日)は施設の祭りで休み"
 },
 {
  "id": "nagasaki-dog-cafe-dog-hill-higashisonogi",
  "name": "Cafe DOG HILL（ドッグヒル）",
  "animals": [
   "dog"
  ],
  "prefecture": "長崎県",
  "area": "東彼杵・大村湾沿い",
  "address": "長崎県東彼杵郡東彼杵町小音琴郷2303-1",
  "access": "最寄駅の記載は公式ページになし（国道205号沿い）",
  "url": "https://www.dog-hill.net/cafe.html",
  "price": "入場料・施設利用料は食事代に含まれるワンオーダー制（軽食1,320円〜、セットドリンク+440円）",
  "price_level": 2,
  "hours": "平日11:30〜17:00（OS16:30）／土日祝11:30〜18:00（OS17:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "features": [
   "ふれあいOK",
   "子ども可"
  ],
  "description": "ウェルシュ・コーギー専門の犬舎が営むカフェで、店のコーギーたちと同じ空間で遊べる。入場料はなく食事代に含まれる形で、1人1品の注文が決まりだ。愛犬連れの客やドッグラン利用も多いので、犬が苦手な人には向かない。",
  "source_note": "公式 https://www.dog-hill.net/cafe.html の営業時間とメニュー画像（weekdays.jpg、drink.png）で確認。定休日・予約の記載なし（電話0957-46-0256）。",
  "image": null,
  "checked": "2026-11-06",
  "reservation": "不要"
 },
 {
  "id": "osaka-dog-dolbom-uehonmachi",
  "name": "犬猫ふれあいカフェ ドルボム 上本町店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "大阪府",
  "area": "上本町・谷町九丁目",
  "address": "大阪府大阪市中央区上本町西5-3-8",
  "access": "近鉄上本町駅・地下鉄谷町九丁目駅8番出口から徒歩1分",
  "url": "https://petdolbom.jp/",
  "price": "犬猫ふれあい 大人2,500円（1ドリンク・犬猫おやつ付き。未就学児1,000円、1歳未満無料）",
  "price_level": 3,
  "hours": "11:00〜19:00",
  "closed": "水曜",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "保護動物",
   "里親募集",
   "駅近",
   "ドリンク込み",
   "時間無制限プランあり",
   "子ども可",
   "複数の動物"
  ],
  "description": "新しい家族を探している保護犬・保護猫に会えるカフェで、3階が犬、2階が猫のフロアだ。スタッフが犬の人慣れを進めたうえで譲渡しているので、里親を考えていない人も気軽に遊べる。平日は時間制限がなく、土日祝は90分制になる。",
  "source_note": "公式 https://petdolbom.jp/bbs/content.php?co_id=sub01 で料金・時間・定休日を確認（以前は料金が文字でなく見送り、今回公式の文字で確認）。予約は電話で案内あり。",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "osaka-dog-tansoku-home-juso",
  "name": "短足Home（たんそくホーム）",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "大阪府",
  "area": "十三",
  "address": "大阪府大阪市淀川区十三本町1-9-14",
  "access": "阪急十三駅 西出口から徒歩5分",
  "url": "https://www.tansokuhome.com/",
  "price": "60分1,250円／30分650円（ドリンク飲み放題付き。4〜12歳は時間無制限600円）",
  "price_level": 2,
  "hours": "12:00〜20:00（最終入店19:30）",
  "closed": "火曜・水曜",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "抱っこOK",
   "写真OK",
   "ドリンク込み",
   "子ども可",
   "駅近",
   "複数の動物"
  ],
  "description": "足の短い犬と猫に会える、十三の路地裏にある小さな触れ合いカフェ。ドリンクは飲み放題で、座った状態での抱っこや撮影もできる。学生証の提示で割引があり、1人でも入りやすい。",
  "source_note": "公式 https://www.tansokuhome.com/ の「サービス」「アクセス」欄（1ページ構成）で料金・営業時間・定休日を確認。予約は可能と案内あり（以前は料金が見当たらず見送り）。",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "fukuoka-dog-shushu-wanwanroom-nakama",
  "name": "わんわんるーむ シュシュ",
  "animals": [
   "dog"
  ],
  "prefecture": "福岡県",
  "area": "中間市（北九州市に隣接）",
  "address": "福岡県中間市岩瀬1丁目8-1 東海倶楽部201号",
  "access": "最寄駅の記載は公式ページになし",
  "url": "https://shushu-wanwanroom.jimdofree.com/",
  "price": "看板犬とのふれあい60分 大人1,760円（小学生以下1,430円）、90分2,310円（ソフトドリンク付き）",
  "price_level": 2,
  "hours": "11:00〜18:00（最終受付17:00。土日祝は前日までの予約で19:00まで）",
  "closed": "火曜・水曜（祝日は営業）",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "子ども可",
   "予約制"
  ],
  "description": "トイプードル、ポメラニアン、キャバリア、パピヨン、マルチーズなど小型の看板犬と遊べる犬カフェ。時間制のふれあいプランにおやつやり体験や散歩体験を足せる。公式サイトは完全予約制と案内している。",
  "source_note": "公式 https://shushu-wanwanroom.jimdofree.com/ のトップ・料金表・店舗情報・看板犬紹介で確認。トップに「6月から完全予約制」の記載あり（年の記載なし）。",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "fukuoka-dog-wanko-cafe-katanoda-kokura",
  "name": "わんこカフェ Katanoda（かたのだ）小倉店",
  "animals": [
   "dog"
  ],
  "prefecture": "福岡県",
  "area": "北九州・小倉北区片野",
  "address": "福岡県北九州市小倉北区片野3丁目14-1 パディアビル2F",
  "access": "北九州モノレール片野駅から徒歩0分",
  "url": "https://www.paddya.jp/katanoda/",
  "price": "60分1,800円（おやつ体験500円、散歩体験20分500円は別。2025年4月改定）",
  "price_level": 2,
  "hours": "土日12:00〜17:00（平日は公式ページに記載なし。来店前に確認を）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "駅近",
   "子ども可"
  ],
  "description": "モノレール片野駅の目の前にある、店の犬と過ごす犬カフェ。トイプードル、スタンダードプードル、ゴールデンレトリバーなど多くの犬スタッフがいて、その日の出勤犬は公式Facebookで告知される。飲み物は蓋つきなら持ち込み可だ。",
  "source_note": "公式 https://www.paddya.jp/katanoda/system.html で料金、https://www.dtj.or.jp/katanodaplus/service_dogcafe.html で土日営業12:00〜17:00を確認。かたのだ自身の営業時間は2025年4月に変更の告知のみで具体値なし。",
  "image": null,
  "checked": "2026-11-06",
  "reservation": "不要"
 },
 {
  "id": "fukuoka-dog-katanoda-plus-kurate",
  "name": "カタノダプラス 犬カフェ",
  "animals": [
   "dog"
  ],
  "prefecture": "福岡県",
  "area": "鞍手町上木月",
  "address": "福岡県鞍手郡鞍手町上木月1037-3",
  "access": "最寄駅の記載は公式ページになし（九州自動車道 鞍手ICから車で約7分）",
  "url": "https://www.dtj.or.jp/katanodaplus/service_dogcafe.html",
  "price": "60分1,800円（おやつあげ体験500円、お散歩体験500円は別）。入場料フリータイムは2,800円（飲食持ち込みOK）",
  "price_level": 2,
  "hours": "11:00〜17:00",
  "closed": "年末年始",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "子ども可"
  ],
  "description": "セラピードッグの育成施設に併設された犬カフェで、人に慣れた犬と店内でのんびり過ごせる。お散歩体験やおやつあげ体験があり、犬を飼う前に触れ合ってみたい人向け。ドッグランやショップも同じ敷地にある。",
  "source_note": "公式 https://www.dtj.or.jp/katanodaplus/service_dogcafe.html で料金・営業時間・定休日を確認。予約の記載なし。",
  "image": null,
  "checked": "2026-11-06",
  "reservation": "不要"
 },
 {
  "id": "miyagi-dog-withdog-asahigaoka-sendai",
  "name": "犬カフェ with DOG 旭ヶ丘店",
  "animals": [
   "dog"
  ],
  "prefecture": "宮城県",
  "area": "仙台・旭ヶ丘",
  "address": "宮城県仙台市青葉区旭ヶ丘2-4-14 SQビル1F",
  "access": "最寄駅の記載は公式ページになし",
  "url": "https://withdog-sendai.jp/inucafe/",
  "price": "ドリンク60分1,600円（ドリンクバー・看板犬用おやつ付き）、30分1,000円、フード付き100分2,100円",
  "price_level": 2,
  "hours": "11:00〜17:00",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "features": [
   "ふれあいOK",
   "ドリンク込み"
  ],
  "description": "トリミングサロンやペットホテルを併設した店の中にある犬カフェで、小型の看板犬と遊べる。自分の犬を連れて入ることもできるが、連れていなくても利用できる。料金は前払い・時間制・セルフサービスだ。",
  "source_note": "公式 https://withdog-sendai.jp/inucafe/（メニュー画像 2026年2月版）と店舗一覧 https://withdog-sendai.jp/店舗一覧/ で確認。定休日・予約の記載なし。",
  "image": null,
  "checked": "2026-11-06",
  "reservation": "不要"
 },
 {
  "id": "miyagi-dog-withdog-nakanosakae-sendai",
  "name": "犬カフェ with DOG 中野栄駅前店",
  "animals": [
   "dog"
  ],
  "prefecture": "宮城県",
  "area": "仙台・中野栄",
  "address": "宮城県仙台市宮城野区出花2-68-1",
  "access": "中野栄駅前（徒歩分数は公式ページに記載なし）",
  "url": "https://withdog-inu.cafe/dogcafe/",
  "price": "ドリンク60分1,600円（ドリンクバー・看板犬用おやつ付き）、30分1,000円、フード付き100分2,100円",
  "price_level": 2,
  "hours": "11:00〜18:00（最終受付17:00）",
  "closed": "なし",
  "features": [
   "ふれあいOK",
   "ドリンク込み",
   "駅近"
  ],
  "description": "仙台・中野栄駅前にある、色々な犬種の看板犬に会える犬カフェ。キャンプ風の内装で、宮城県産の木材を使っているという。ペットショップとトリミングサロンが同じ建物にある。",
  "source_note": "公式 https://withdog-inu.cafe/ と https://withdog-inu.cafe/dogcafe/、料金は https://withdog-sendai.jp/inucafe/ のメニュー画像（2026年2月版）で確認。予約の記載なし。",
  "image": null,
  "checked": "2026-11-06",
  "reservation": "不要"
 },
 {
  "id": "osaka-dog-onlywan-yao",
  "name": "里親カフェ オンリーわん",
  "animals": [
   "dog"
  ],
  "prefecture": "大阪府",
  "area": "八尾・恩智",
  "address": "大阪府八尾市曙川東1-13 レジデンスタカラ1F",
  "access": "近鉄恩智駅から徒歩1分",
  "url": "https://onlywan1.wixsite.com/onlywan",
  "price": "入場料1人990円（税込、ドリンク付き）",
  "price_level": 1,
  "hours": "12:00〜17:00（譲渡契約は16:00まで）",
  "closed": "不定休（公式ブログ・Instagramで告知）",
  "features": [
   "ふれあいOK",
   "保護動物",
   "里親募集",
   "駅近",
   "ドリンク込み"
  ],
  "description": "保護犬の里親探しをするカフェで、里親希望でなくてもふれあい目的で入れる。里親募集中の犬のほか、看板犬やふれあい犬もいる。小学生未満は入店できず、犬同伴のドッグカフェでもない点に注意。",
  "source_note": "公式 https://onlywan1.wixsite.com/onlywan とご案内ページ（/ご案内）で確認。サイトの表記は © 2023 で、最新の営業状況の告知は公式ブログ・Instagram（未確認）。",
  "image": null,
  "checked": "2026-11-06",
  "reservation": "不要"
 },
 {
  "id": "okayama-dog-cody-no-isu-okayama",
  "name": "ふれあいスペース Codyのいす",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "岡山県",
  "area": "岡山・表町",
  "address": "岡山県岡山市北区表町3-7-15 表町ファミリービル2F",
  "access": "最寄駅の記載は公式ページになし（表町エリア）",
  "url": "https://codynoisu.wixsite.com/codynoisu",
  "price": "1時間2,000円（延長30分900円）",
  "price_level": 2,
  "hours": "14:00〜17:00（最終入店16:10）",
  "closed": "月・水・金・第4日曜",
  "features": [
   "ふれあいOK",
   "複数の動物"
  ],
  "description": "小型犬から大型犬まで、人なつこい若い犬たちと猫が同じ空間にいる犬猫カフェ。靴下の着用が必要で、子どもは原則10歳以上。犬が苦手な人は楽しみにくいと公式が正直に書いているほど、犬との距離は近い。",
  "source_note": "公式 https://codynoisu.wixsite.com/codynoisu と /blank（システム）で料金・時間・定休日を確認。夏期は電話予約のみの注記あり、通常時の予約の記載なし。保護犬とは明記されていない。",
  "image": null,
  "checked": "2026-11-06",
  "reservation": "不要"
 },
 {
  "id": "kanagawa-dog-kizuna-tamaplaza",
  "name": "保護アニマルカフェ キズナ（保護ドッグカフェ）",
  "animals": [
   "dog",
   "cat",
   "reptile"
  ],
  "prefecture": "神奈川県",
  "area": "たまプラーザ",
  "address": "神奈川県横浜市青葉区新石川2-3-11",
  "access": "たまプラーザ駅南口から徒歩3分",
  "url": "https://welfare.child-land.co.jp/animal-cafe/animal-cafe-kizuna/",
  "price": "1時間2,000円（ペットボトルドリンク付き、延長30分1,000円）",
  "price_level": 2,
  "hours": "平日11:00〜16:00（最終15:00）／土日祝11:00〜17:00（最終16:00）",
  "closed": "なし",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "保護動物",
   "里親募集",
   "駅近",
   "ドリンク込み",
   "貸切可",
   "複数の動物"
  ],
  "description": "チワワ系やダックスの保護犬と遊べる譲渡型のドッグカフェで、保護猫カフェ、爬虫類カフェと並んだ福祉事業所の施設。大人も子どもも同じ料金で、犬連れの来店は休止中だ。土日祝は混むため予約を勧めている。",
  "source_note": "公式 https://welfare.child-land.co.jp/animal-cafe/animal-cafe-kizuna/ で確認（以前は到達できず見送り、今回開けた）。犬の営業時間・料金を採用。猫・爬虫類カフェの時間は別記載。",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "tokyo-dog-dog-heart-yoyogipark",
  "name": "DOG HEART from アクアマリン 代々木公園店",
  "animals": [
   "dog"
  ],
  "prefecture": "東京都",
  "area": "代々木公園・富ヶ谷",
  "address": "東京都渋谷区富ヶ谷1丁目45-2 Y'sパークビル 2F",
  "access": "最寄駅の記載は公式ページになし（代々木公園エリア）",
  "url": "https://dog-heart.ico.bz/",
  "price": "ふれあい広場60分 平日2,200円／土日祝2,300円、30分 平日1,400円／土日祝1,500円（2026年8月改定後。13歳未満は別料金）",
  "price_level": 3,
  "hours": "公式ページに記載なし（来店前に確認を）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "features": [
   "ふれあいOK",
   "抱っこOK",
   "写真OK",
   "子ども可",
   "里親募集"
  ],
  "description": "トイプードルやビーグル、狆、キャバリアなどの犬と遊べるふれあい広場。2階と3階にあり、順番に案内されるので待ち時間は短めだ。ゴールデンレトリバーなどを借りる散歩レンタルもできる。",
  "source_note": "公式 https://dog-heart.ico.bz/ の Price List（company1.html）と料金改訂のお知らせ（company4.html）で確認。価格表は旧料金で、2026年8月改定の増額（平日+100円、土日祝+200円）を足した金額を記載。営業時間・定休日の記載なし。ふれあい広場は予約不可（来店順）。",
  "image": null,
  "checked": "2026-11-06",
  "reservation": "不要"
 },
 {
  "id": "tokyo-dog-mameshiba-one-room-ota",
  "name": "豆柴体験カフェ one room（ワンルーム）",
  "animals": [
   "dog"
  ],
  "prefecture": "東京都",
  "area": "大田区・千鳥町",
  "address": "東京都大田区千鳥2-12-15 アヴェニュー本多2A",
  "access": "東急多摩川線 武蔵新田駅から徒歩6分",
  "url": "https://oneroom-cozycozy.com/",
  "price": "50分 おひとり様4,000円（平日限定）／ペア8,000円（平日）・9,000円（土日祝）",
  "price_level": 4,
  "hours": "10:00〜13:00（火・木・土・日の10:00〜10:50、11:00〜11:50の枠。時期により変動）",
  "closed": "月・水・金（祝日は不定期）",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "予約制",
   "貸切可",
   "子ども可"
  ],
  "description": "完全予約・1組貸切で、豆柴と散歩やご飯、膝の上での歯磨きなどの暮らしを体験できる。大勢の客に囲まれる豆柴カフェと違い、スタッフが1組に付き添う。料金は高めだが、犬を飼う前に試してみたい人向け。",
  "source_note": "公式 https://oneroom-cozycozy.com/ で確認（予約は約1か月前から開放、2026年11月分の開放告知あり）。豆柴は2頭と記載。お子様は小学3年生から。",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "tokyo-dog-ahbase-ryogoku",
  "name": "AHBASE（エーエイチベース）ふれあいスペース DOGGIES ROOM",
  "animals": [
   "dog"
  ],
  "prefecture": "東京都",
  "area": "両国",
  "address": "東京都墨田区横網1丁目9番2号 NTTドコモ墨田ビル低層棟",
  "access": "都営大江戸線 両国駅A1出口から徒歩3分、JR両国駅西口から徒歩5分",
  "url": "https://ah-base.com/service/walk/",
  "price": "ふれあい1時間 大人1,800円（小学生900円）。お散歩体験は15分1,000円（1頭）",
  "price_level": 2,
  "hours": "平日11:00〜18:00／土日祝10:00〜18:00（平日の最終受付16:30、土日祝17:30）",
  "closed": "公式SNSで告知（公式ページに固定の定休日の記載なし）",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "駅近",
   "子ども可",
   "里親募集"
  ],
  "description": "繁殖犬を卒業した犬やハンディキャップのある犬が暮らす、両国のドッグパーク内のふれあい部屋。犬を飼っていなくても利用でき、気に入れば家族として迎えるサポートがある。犬の休憩のため、混雑時は入室まで少し待つことがある。",
  "source_note": "公式 https://ah-base.com/service/walk/ と /access/ で確認。予約の記載なし（犬の休憩時間で待つ場合あり）。Rcafe192（飲食）の飲み物は部屋に持ち込み可。",
  "image": null,
  "checked": "2026-11-06",
  "reservation": "不要"
 },
 {
  "id": "kyoto-dog-pug-cafe-living-room-katsura",
  "name": "パグカフェ Living Room（リビングルーム）",
  "animals": [
   "dog"
  ],
  "prefecture": "京都府",
  "area": "桂",
  "address": "京都府京都市西京区桂河田町151 1F",
  "access": "阪急京都線 桂駅東口から徒歩10分",
  "url": "https://kyotopug.com/",
  "price": "平日70分3,500円（1ドリンク・犬用おやつ付き、延長30分1,000円）。土日祝スペシャルDayはフリータイム5,000円",
  "price_level": 4,
  "hours": "11:00〜16:00（公式アクセスページの記載。営業日は公式カレンダーで告知）",
  "closed": "営業日カレンダーで告知（固定の定休日の記載なし）",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "保護動物",
   "里親募集",
   "写真OK",
   "子ども可",
   "時間無制限プランあり"
  ],
  "description": "オーナーの飼い犬のパグ20頭以上と過ごせる、パグ専門の犬カフェ。親子数世代のパグ一家や白パグ、保護犬もいて、おやつやり体験や撮影ができる。海外からの客も多く、料金は高めだが滞在してじっくり遊べる。",
  "source_note": "公式 https://kyotopug.com/ の料金システム（/plan/）、アクセス（/access/）、予約（/contact/）で確認。基本は予約制ではない。営業時間は asoview 等で12:30〜17:00との記載もあり公式ページ間で食い違い。",
  "image": null,
  "checked": "2026-11-06",
  "reservation": "不要"
 },
 {
  "id": "kyoto-dog-teacup-club-kawaramachi",
  "name": "Teacup Club（ティーカップクラブ）",
  "animals": [
   "dog"
  ],
  "prefecture": "京都府",
  "area": "京都河原町・新京極",
  "address": "京都府京都市中京区新京極通四条上る中之町546-5",
  "access": "最寄駅の記載は公式ページになし（新京極通・四条上る）",
  "url": "https://www.t-cup.club/dogcafe",
  "price": "最初の30分1,300円、以降15分ごと600円（フリードリンク・犬用おやつ付き）",
  "price_level": 3,
  "hours": "12:00〜19:00（最終受付18:30）",
  "closed": "不定休",
  "features": [
   "ふれあいOK",
   "ドリンク込み",
   "写真OK"
  ],
  "description": "ティーカッププードルとポメラニアンなど、とても小さな犬と触れ合える犬カフェ。900gほどのマイクロサイズの子もいる。フリードリンクと犬用おやつ付きで、入場は8歳以上（公式で6歳と書く箇所もある）。",
  "source_note": "公式 https://www.t-cup.club/dogcafe、/access、トップページで確認。トップに「予約不可」の表記あり。入場年齢の記載がページ間で異なる（6歳／8歳）。",
  "image": null,
  "checked": "2026-11-06",
  "reservation": "不要"
 },
 {
  "id": "kyoto-dog-tsuki-to-taiyo-uji",
  "name": "Dogs&Cats Cafe 月と太陽",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "京都府",
  "area": "宇治・木幡",
  "address": "京都府宇治市木幡熊小路38-51",
  "access": "最寄駅の記載は公式ページになし",
  "url": "https://tukitotaiyou.jp/cafe/",
  "price": "犬と遊ぶコース1,320円〜（平日90分／土日祝60分）、犬猫両方1,980円〜（犬60分＋猫30分）、猫のみ30分1,100円〜",
  "price_level": 2,
  "hours": "平日12:00〜19:00／土日祝10:00〜19:00",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "抱っこOK",
   "えさやり体験",
   "複数の動物"
  ],
  "description": "犬と遊ぶコース、猫と過ごすコース、両方のコースから選べる宇治の犬猫カフェ。犬は抱っこやおやつあげができ、猫は個室で過ごす。土日祝は混んで1時間以上待つことがあり、犬コースは電話予約を勧めている。",
  "source_note": "公式 https://tukitotaiyou.jp/ と /cafe/ で確認。靴下着用（110円で販売）。犬猫の種類の詳細は公式に記載なし。",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "kyoto-dog-busakawa-cafe-kawaramachi",
  "name": "ぶさかわcafe 京都河原町店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "京都府",
  "area": "京都河原町",
  "address": "京都府京都市中京区河原町通三条下ル2丁目山崎町256番地 リジョーネビル4階",
  "access": "京都河原町エリア（最寄駅の記載は公式ページになし）",
  "url": "https://dogcat-cafe.com/",
  "price": "30分1,240円（ドリンクセット）、以降10分ごと250円",
  "price_level": 2,
  "hours": "11:00〜20:00（LO19:45）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "features": [
   "ふれあいOK",
   "ドリンク込み",
   "写真OK",
   "子ども可",
   "複数の動物"
  ],
  "description": "パグやフレンチブルドッグ、豆柴とポメラニアンのミックスなど、少し不細工でかわいい犬と猫が集まるカフェ。抱っこはできないが、撫でたり遊んだりして楽しむ。おやつは店で買ったものだけ与えられる。",
  "source_note": "公式 https://dogcat-cafe.com/ の料金ページ、FAQ、プロフィールで確認。最新のお知らせは2026-03-24（営業再開）。定休日・予約の記載なし。",
  "image": null,
  "checked": "2026-11-06",
  "reservation": "不要"
 },
 {
  "id": "kyoto-dog-chin-peki-cafe-okazaki",
  "name": "狆ペキカフェ",
  "animals": [
   "dog"
  ],
  "prefecture": "京都府",
  "area": "岡崎・東山",
  "address": "京都府京都市左京区岡崎徳成町7番8号",
  "access": "京阪本線 三条駅から徒歩約13分",
  "url": "https://chinpeki-cafe.com/",
  "price": "60分2,500円〜（公式ページの平均予算の記載。細かい料金表は確認できず）",
  "price_level": 3,
  "hours": "12:00〜17:00",
  "closed": "日曜・月曜",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "写真OK"
  ],
  "description": "日本原産の狆と、マイペースなペキニーズに会える京都・岡崎の犬カフェ。スタッフは和装で、おやつをあげる仕掛けや撮影の時間など、短い滞在でも楽しめる工夫がある。京都観光の合間に立ち寄りやすい。",
  "source_note": "公式 https://chinpeki-cafe.com/ の店舗情報で確認。料金は「平均予算 60h 2,500円〜」の表記のみで、予約の記載なし。",
  "image": null,
  "checked": "2026-11-06",
  "reservation": "不要"
 },
 {
  "id": "chiba-dog-pet-it-maison-chiba",
  "name": "Pet it maison（ペットイットメゾン）",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "千葉県",
  "area": "千葉市中央区・仁戸名町",
  "address": "千葉県千葉市中央区仁戸名町720-56",
  "access": "最寄駅の記載は公式ページになし",
  "url": "https://pet-it-maison.com/cat-cafe/",
  "price": "犬カフェ 全日900円／猫カフェ 平日900円・土日祝1,000円（予告なく変わる場合あり）",
  "price_level": 1,
  "hours": "10:00〜18:00（入場受付17:00まで）",
  "closed": "水曜日",
  "features": [
   "ふれあいOK",
   "複数の動物"
  ],
  "description": "イングリッシュコッカー4頭のいる犬カフェと、猫カフェを併設した小さな店。猫カフェの客は犬も触れる。犬との接触は10歳以下の子ども連れ不可で、飲み物や平日のカレーなども注文できる。",
  "source_note": "公式 https://pet-it-maison.com/cat-cafe/ と トップページで確認。最新のお知らせは2025-12-18で、その後の更新なし。",
  "image": null,
  "checked": "2026-11-06",
  "reservation": "不要"
 },
 {
  "id": "osaka-dog-hogoken-cafe-tenjinbashi",
  "name": "HOGOKEN CAFE 保護犬＆保護猫カフェ 天神橋店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "大阪府",
  "area": "天神橋・扇町",
  "address": "大阪府大阪市北区天神橋3丁目10-30 コープ野村扇町1F",
  "access": "公式ページに記載なし（来店前に確認を）",
  "url": "https://www.hogokencafe.com/shop",
  "price": "施設利用料1名990円（1ドリンク付き）",
  "price_level": 1,
  "hours": "12:00〜20:00（土日祝は11:00〜20:00）",
  "closed": "年中無休",
  "features": [
   "ふれあいOK",
   "保護動物",
   "里親募集",
   "ドリンク込み",
   "複数の動物"
  ],
  "description": "天神橋筋の商店街に近い、HOGOKEN CAFE の中心的な店だ。行政や繁殖業者の閉鎖などで保護された犬と猫が里親を待ちながら暮らし、施設利用料990円でドリンクを飲みながら過ごせる。公式ブログの更新もこの店が担っている。",
  "source_note": "公式 https://www.hogokencafe.com/shop の店舗案内（住所・営業時間・定休日）と /staff の施設利用料990円（1ドリンク付き）で確認。990円は公式サイト共通の表記で、店舗別の料金表記はなし。公式ブログの更新は天神橋店のみ（2026-11-03）。前回はInstagramのみで見送りだったが、公式サイトを発見。",
  "image": null,
  "checked": "2026-11-06",
  "reservation": "不要"
 },
 {
  "id": "osaka-dog-hogoken-cafe-tsuruhashi",
  "name": "HOGOKEN CAFE 鶴橋店（保護犬＆保護猫カフェ）",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "大阪府",
  "area": "鶴橋",
  "address": "大阪府大阪市東成区東小橋3-14-29 ラッキープラザビル",
  "access": "公式ページに記載なし（来店前に確認を）",
  "url": "https://www.hogokencafe.com/shop",
  "price": "施設利用料1名990円（1ドリンク付き）",
  "price_level": 1,
  "hours": "12:00〜20:00（保護犬のふれあいは19:30まで）",
  "closed": "年中無休",
  "features": [
   "ふれあいOK",
   "保護動物",
   "里親募集",
   "ドリンク込み",
   "複数の動物"
  ],
  "description": "鶴橋駅のそばにある保護犬・保護猫のふれあいカフェだ。里親希望でなくても施設利用料990円で入れ、保護犬とのふれあいは19時30分まで。チワワやトイプードルなど小型の犬が中心である。",
  "source_note": "公式 https://www.hogokencafe.com/shop の店舗案内（住所・営業時間・定休日）と /staff の施設利用料990円（1ドリンク付き）で確認。990円は公式サイト共通の表記で、店舗別の料金表記はなし。公式ブログの更新は天神橋店のみ（2026-11-03）。前回はInstagramのみで見送りだったが、公式サイトを発見。",
  "image": null,
  "checked": "2026-11-06",
  "reservation": "不要"
 },
 {
  "id": "osaka-dog-hogoken-cafe-sakai",
  "name": "HOGOKEN CAFE 堺店",
  "animals": [
   "dog"
  ],
  "prefecture": "大阪府",
  "area": "堺・北区東雲東町",
  "address": "大阪府堺市北区東雲東町3-6-20",
  "access": "公式ページに記載なし（来店前に確認を）",
  "url": "https://www.hogokencafe.com/shop",
  "price": "施設利用料1名990円（1ドリンク付き）",
  "price_level": 1,
  "hours": "12:00〜20:00（ふれあいは19:30まで）",
  "closed": "年中無休",
  "features": [
   "ふれあいOK",
   "保護動物",
   "里親募集",
   "ドリンク込み"
  ],
  "description": "堺市にある、保護犬だけの HOGOKEN CAFE だ。繁殖引退や飼育放棄で保護された小型犬が多く、新しい家族を探している。1ドリンク付きの利用料で、犬とのふれあいは19時30分まで。",
  "source_note": "公式 https://www.hogokencafe.com/shop の店舗案内（住所・営業時間・定休日）と /staff の施設利用料990円（1ドリンク付き）で確認。990円は公式サイト共通の表記で、店舗別の料金表記はなし。公式ブログの更新は天神橋店のみ（2026-11-03）。前回はInstagramのみで見送りだったが、公式サイトを発見。",
  "image": null,
  "checked": "2026-11-06",
  "reservation": "不要"
 },
 {
  "id": "osaka-dog-hogoken-cafe-teradacho",
  "name": "保護犬カフェ＆保護猫カフェ HOGOKEN CAFE 寺田町店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "大阪府",
  "area": "寺田町",
  "address": "大阪府大阪市生野区生野西2-1-30",
  "access": "公式ページに記載なし（来店前に確認を）",
  "url": "https://www.hogokencafe.com/shop",
  "price": "施設利用料1名990円（1ドリンク付き）",
  "price_level": 1,
  "hours": "12:00〜20:00（ふれあいは19:30まで）",
  "closed": "年中無休",
  "features": [
   "ふれあいOK",
   "保護動物",
   "里親募集",
   "ドリンク込み",
   "複数の動物"
  ],
  "description": "寺田町駅近くの、保護犬と保護猫がいっしょにいる店だ。保護された経緯の異なる犬猫が里親を待ちながら暮らし、施設利用料990円で会いに行ける。年中無休でふれあいは19時30分までである。",
  "source_note": "公式 https://www.hogokencafe.com/shop の店舗案内（住所・営業時間・定休日）と /staff の施設利用料990円（1ドリンク付き）で確認。990円は公式サイト共通の表記で、店舗別の料金表記はなし。公式ブログの更新は天神橋店のみ（2026-11-03）。前回はInstagramのみで見送りだったが、公式サイトを発見。",
  "image": null,
  "checked": "2026-11-06",
  "reservation": "不要"
 },
 {
  "id": "hyogo-dog-hogoken-cafe-kawanishi",
  "name": "保護犬保護猫カフェ HOGOKEN CAFE 川西店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "兵庫県",
  "area": "川西",
  "address": "兵庫県川西市中央町3-3 川西中央ビル1-D",
  "access": "公式ページに記載なし（来店前に確認を）",
  "url": "https://www.hogokencafe.com/shop",
  "price": "施設利用料1名990円（1ドリンク付き）",
  "price_level": 1,
  "hours": "12:00〜18:00",
  "closed": "毎週火曜日",
  "features": [
   "ふれあいOK",
   "保護動物",
   "里親募集",
   "ドリンク込み",
   "複数の動物"
  ],
  "description": "兵庫県川西市にある、関西郊外の HOGOKEN CAFE だ。保護犬と保護猫の両方がいて、営業は18時までと他店より短い。火曜が定休で、ゆっくり犬猫と過ごしたい人向け。",
  "source_note": "公式 https://www.hogokencafe.com/shop の店舗案内（住所・営業時間・定休日）と /staff の施設利用料990円（1ドリンク付き）で確認。990円は公式サイト共通の表記で、店舗別の料金表記はなし。公式ブログの更新は天神橋店のみ（2026-11-03）。前回はInstagramのみで見送りだったが、公式サイトを発見。",
  "image": null,
  "checked": "2026-11-06",
  "reservation": "不要"
 },
 {
  "id": "chiba-dog-hogoken-cafe-inzai",
  "name": "HOGOKEN CAFE 印西店",
  "animals": [
   "dog"
  ],
  "prefecture": "千葉県",
  "area": "印西・BIGHOPガーデンモール",
  "address": "千葉県印西市原1-2 BIGHOPガーデンモール印西",
  "access": "公式ページに記載なし（来店前に確認を）",
  "url": "https://www.hogokencafe.com/shop",
  "price": "施設利用料1名990円（1ドリンク付き）",
  "price_level": 1,
  "hours": "平日12:00〜19:00／土日祝11:00〜19:00",
  "closed": "元旦",
  "features": [
   "ふれあいOK",
   "保護動物",
   "里親募集",
   "ドリンク込み"
  ],
  "description": "BIGHOPガーデンモール印西の中にある、保護犬だけの店だ。買い物の途中に施設利用料990円で寄れ、保護された小型犬と遊びながら里親募集の様子も見られる。休みは元旦のみ。",
  "source_note": "公式 https://www.hogokencafe.com/shop の店舗案内（住所・営業時間・定休日）と /staff の施設利用料990円（1ドリンク付き）で確認。990円は公式サイト共通の表記で、店舗別の料金表記はなし。公式ブログの更新は天神橋店のみ（2026-11-03）。前回はInstagramのみで見送りだったが、公式サイトを発見。",
  "image": null,
  "checked": "2026-11-06",
  "reservation": "不要"
 },
 {
  "id": "tokyo-dog-hogoken-cafe-tachikawa",
  "name": "保護犬カフェ HOGOKEN CAFE 立川店",
  "animals": [
   "dog"
  ],
  "prefecture": "東京都",
  "area": "立川・富士見町",
  "address": "東京都立川市富士見町2-12-7 フェイズ立川101",
  "access": "公式ページに記載なし（来店前に確認を）",
  "url": "https://www.hogokencafe.com/shop",
  "price": "施設利用料1名990円（1ドリンク付き）",
  "price_level": 1,
  "hours": "平日12:00〜19:00／土日祝11:00〜19:00",
  "closed": "年中無休",
  "features": [
   "ふれあいOK",
   "保護動物",
   "里親募集",
   "ドリンク込み"
  ],
  "description": "立川にある、東京で唯一の HOGOKEN CAFE だ。保護犬だけの店で、土日祝は11時から開く。年中無休で、保護犬の里親探しを続けている。",
  "source_note": "公式 https://www.hogokencafe.com/shop の店舗案内（住所・営業時間・定休日）と /staff の施設利用料990円（1ドリンク付き）で確認。990円は公式サイト共通の表記で、店舗別の料金表記はなし。公式ブログの更新は天神橋店のみ（2026-11-03）。前回はInstagramのみで見送りだったが、公式サイトを発見。",
  "image": null,
  "checked": "2026-11-06",
  "reservation": "不要"
 },
 {
  "id": "tokyo-dog-dalmatian-cafe-101",
  "name": "DALMATIAN CAFE 101（ダルメシアンカフェ101）",
  "animals": [
   "dog"
  ],
  "prefecture": "東京都",
  "area": "大田区・石川台",
  "address": "東京都大田区東雪谷2-25-7",
  "access": "東急池上線 石川台駅から徒歩1分",
  "url": "https://dalmatiancafe101.com/",
  "price": "平日50分3,500円／土日祝50分3,800円（税込・1ドリンク付き。事前予約・カード払いのみ）",
  "price_level": 4,
  "hours": "公式ページに記載なし（50分の入れ替え制の予約枠）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "予約制",
   "貸切可",
   "写真OK",
   "ドリンク込み",
   "駅近"
  ],
  "description": "日本初をうたうダルメシアン専門の犬カフェで、2025年1月に開いた。兄妹の6頭が暮らし、50分の完全入れ替え制で撫でたりおやつをあげたりできる。身長130cm以下の子どもと妊娠中の人は入れず、支払いは事前予約のカードのみ。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://dalmatiancafe101.com/price/ と トップページで確認。営業時間と定休日の記載なし。おやつ500円は現金のみ"
 },
 {
  "id": "osaka-dog-fairy-room-nishishinsaibashi",
  "name": "Animal Cafe 妖精のお部屋",
  "animals": [
   "dog",
   "cat",
   "other"
  ],
  "prefecture": "大阪府",
  "area": "西心斎橋",
  "address": "大阪府大阪市中央区西心斎橋2丁目4-6 おおきに花月久左衛門町ビル1号 4F 401",
  "access": "なんば駅北東改札から徒歩5分",
  "url": "https://fairy-room.net/",
  "price": "60分2,100円（平日・税込、ドリンクなし・ワンオーダー制）／土日祝2,300円。90分ドリンクセット2,800円、120分3,300円、180分3,800円（平日）。延長15分500円",
  "price_level": 3,
  "hours": "平日12:00〜20:00／土日祝11:00〜20:00",
  "closed": "なし",
  "reservation": "不要",
  "features": [
   "抱っこOK",
   "ふれあいOK",
   "えさやり体験",
   "写真OK",
   "英語対応",
   "複数の動物"
  ],
  "description": "道頓堀の近くのビルにある、犬と猫に加えてジェネットやフェネックなど珍しい動物にも会えるアニマルカフェ。抱っこはスタッフを呼んで行う決まりで、動物の体調や性格によっては断られる子もいる。専用のおやつを買って与える体験もできる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://fairy-room.net/menu（料金）・/access（住所・営業時間・定休日）・/rules（抱っこ等）で確認。Web予約の受付ありと表示されるが予約必須の記載は確認できず（不要とした）。動物の頭数は公式ページに記載なし。トップのメタ説明に犬・猫・ジェネット・フェネックとあり。サイトに更新日の表示なし"
 },
 {
  "id": "aichi-dog-basset-basset-toyohashi",
  "name": "バセットハウンドふれあいカフェ Basset×Basset",
  "animals": [
   "dog"
  ],
  "prefecture": "愛知県",
  "area": "豊橋",
  "address": "愛知県豊橋市牟呂町字一本木60 牟呂一本木ビルA",
  "access": "豊橋駅西口（西駅前）から車で約10分（公式記載）",
  "url": "https://bassetxbasset.com/",
  "price": "ふれあい60分3,000円（税込・ワンドリンク付き、大人子ども同額）。実際のふれあいは45〜50分程度",
  "price_level": 3,
  "hours": "平日11:00〜14:30／土日祝10:00〜16:00",
  "closed": "水曜・木曜",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "ドリンク込み",
   "予約制",
   "子ども可",
   "写真OK"
  ],
  "description": "バセットハウンド3頭とだけ過ごす、犬種を絞った小さなふれあいカフェ。ふれあいは1組ずつの入れ替え制で、他の客を気にせず寄り添える。体が重い犬種のため抱っこはできず、よだれやにおいが付くので汚れてよい服で行きたい。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式サイト https://bassetxbasset.com/ とPR TIMES掲載の運営者リリースで確認。2026年7月にふれあいスペースを開始。ふれあいは予約制（前日までネット、当日は電話かInstagram DM）。カフェのみの利用は予約不要。"
 },
 {
  "id": "hokkaido-dog-anella-cafe-ebetsu-nopporo",
  "name": "ANELLA CAFE 江別野幌店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "北海道",
  "area": "江別市野幌町",
  "address": "北海道江別市野幌町81-1",
  "access": "JR函館本線 野幌駅から徒歩11分",
  "url": "https://wan-time.jp/store/anella-cafe-ebetsunopporo/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円（延長15分200円）、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "江別市野幌町にある保護犬・保護猫のふれあいカフェで、野幌駅から徒歩11分である。共用の駐車場があり、札幌近郊から車で通いやすい。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-ebetsunopporo/ で確認。公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」の記載あり。犬猫それぞれの頭数は公式ページに記載なし（在籍は日々変動と公式に記載）"
 },
 {
  "id": "kanagawa-dog-anella-cafe-fuchinobe",
  "name": "ANELLA CAFE 淵野辺店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "神奈川県",
  "area": "相模原市中央区鹿沼台",
  "address": "神奈川県相模原市中央区鹿沼台1-11-6 ＳＴビル2階",
  "access": "JR横浜線 淵野辺駅から徒歩1分",
  "url": "https://wan-time.jp/store/anella-cafe-fuchinobe/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円（延長15分200円）、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可",
   "駅近"
  ],
  "description": "JR横浜線の淵野辺駅から徒歩1分、STビル2階にある保護犬・保護猫のふれあいカフェだ。駅前で、相模原市中心部の買い物のついでに立ち寄れる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-fuchinobe/ で確認。公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」の記載あり。犬猫それぞれの頭数は公式ページに記載なし（在籍は日々変動と公式に記載）"
 },
 {
  "id": "saitama-dog-anella-cafe-fujimino",
  "name": "ANELLA CAFE ふじみ野店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "埼玉県",
  "area": "富士見市ふじみ野東",
  "address": "埼玉県富士見市ふじみ野東2-1-1 グリーンテラスふじみ野 1F",
  "access": "東武東上線 ふじみ野駅から徒歩5分",
  "url": "https://wan-time.jp/store/anella-cafe-fujimino/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円（延長15分200円）、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "埼玉県富士見市のグリーンテラスふじみ野1階にある、保護犬・保護猫のふれあいカフェである。ふじみ野駅から徒歩5分で、駐車は近隣のコインパーキングを使う。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-fujimino/ で確認。公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」の記載あり。犬猫それぞれの頭数は公式ページに記載なし（在籍は日々変動と公式に記載）"
 },
 {
  "id": "fukui-dog-anella-cafe-fukui",
  "name": "ANELLA CAFE 福井店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "福井県",
  "area": "福井市今市町",
  "address": "福井県福井市今市町58-10-1 河原ビル",
  "access": "福井鉄道福武線 清明駅から徒歩4分",
  "url": "https://wan-time.jp/store/anella-cafe-fukui/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円（延長15分200円）、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜17:00／土日祝11:00〜17:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "福井市今市町にある保護犬・保護猫のふれあいカフェで、清明駅から徒歩4分である。この系列では閉店が17時と早めなので、午後の早い時間に行くのがよい。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-fukui/ で確認。公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」の記載あり。犬猫それぞれの頭数は公式ページに記載なし（在籍は日々変動と公式に記載）"
 },
 {
  "id": "gifu-dog-anella-cafe-gifu-toki",
  "name": "ANELLA CAFE 岐阜土岐店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "岐阜県",
  "area": "土岐市肥田浅野朝日町",
  "address": "岐阜県土岐市肥田浅野朝日町1-16",
  "access": "JR中央本線 土岐市駅から徒歩21分",
  "url": "https://wan-time.jp/store/anella-cafe-gifutoki/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円（延長15分200円）、未就学児無料",
  "price_level": 2,
  "hours": "全日11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "岐阜県土岐市にある保護犬・保護猫のふれあいカフェで、平日も土日祝も11時に開く。土岐市駅から徒歩21分と離れており、駐車場がある車向きの店だ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-gifutoki/ で確認。公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」の記載あり。犬猫それぞれの頭数は公式ページに記載なし（在籍は日々変動と公式に記載）"
 },
 {
  "id": "fukuoka-dog-anella-cafe-hakozaki",
  "name": "ANELLA CAFE 箱崎店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "福岡県",
  "area": "福岡市東区原田",
  "address": "福岡県福岡市東区原田3-6-19",
  "access": "JR鹿児島本線 箱崎駅から徒歩19分",
  "url": "https://wan-time.jp/store/anella-cafe-hakozaki/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円（延長15分200円）、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "福岡市東区原田にある保護犬・保護猫のふれあいカフェだ。箱崎駅から徒歩19分ほどで、5台分の駐車場がある。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-hakozaki/ で確認。公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」の記載あり。犬猫それぞれの頭数は公式ページに記載なし（在籍は日々変動と公式に記載）"
 },
 {
  "id": "shizuoka-dog-anella-cafe-hamakita-kibune",
  "name": "ANELLA CAFE 浜北 貴布祢店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "静岡県",
  "area": "浜松市浜名区貴布祢",
  "address": "静岡県浜松市浜名区貴布祢600-5",
  "access": "遠州鉄道鉄道線 美薗中央公園駅から徒歩4分",
  "url": "https://wan-time.jp/store/anella-cafe-hamakitakibune/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円（延長15分200円）、未就学児無料",
  "price_level": 2,
  "hours": "全日11:00〜17:30",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "浜松市浜名区の貴布祢にある、保護犬・保護猫のふれあいカフェである。遠州鉄道の美薗中央公園駅から徒歩4分で、営業は17時半までと少し早めに終わる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-hamakitakibune/ で確認。公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」の記載あり。犬猫それぞれの頭数は公式ページに記載なし（在籍は日々変動と公式に記載）"
 },
 {
  "id": "shizuoka-dog-anella-cafe-aeon-hamamatsu-nishi",
  "name": "ANELLA CAFE イオン浜松西店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "静岡県",
  "area": "浜松市中央区入野町",
  "address": "静岡県浜松市中央区入野町6244-1 イオン浜松西店1階",
  "access": "JR東海道本線 高塚駅から徒歩19分",
  "url": "https://wan-time.jp/store/anella-cafe-hamamatsunishi/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円（延長15分200円）、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "浜松市中央区のイオン浜松西店の1階にある保護犬・保護猫のふれあいカフェだ。モール内の店のため、共用駐車場を使って買い物と組み合わせやすい。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-hamamatsunishi/ で確認。公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」の記載あり。犬猫それぞれの頭数は公式ページに記載なし（在籍は日々変動と公式に記載）"
 },
 {
  "id": "kanagawa-dog-anella-cafe-keio-inadazutsumi",
  "name": "ANELLA CAFE 京王稲田堤店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "神奈川県",
  "area": "川崎市多摩区菅",
  "address": "神奈川県川崎市多摩区菅4-4-17 グレイスコート稲田堤1階",
  "access": "京王電鉄相模原線 京王稲田堤駅から徒歩2分",
  "url": "https://wan-time.jp/store/anella-cafe-inadadutsumi/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円（延長15分200円）、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可",
   "駅近"
  ],
  "description": "京王稲田堤駅から徒歩2分、グレイスコート稲田堤1階の保護犬・保護猫のふれあいカフェである。JR南武線の稲田堤駅からも徒歩5分で、2路線から行ける。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-inadadutsumi/ で確認。公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」の記載あり。犬猫それぞれの頭数は公式ページに記載なし（在籍は日々変動と公式に記載）"
 },
 {
  "id": "kanagawa-dog-anella-cafe-isezakicho",
  "name": "ANELLA CAFE 伊勢佐木町店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "神奈川県",
  "area": "横浜市中区若葉町",
  "address": "神奈川県横浜市中区若葉町2-23-1 パークアクシス伊勢佐木町通り2号室",
  "access": "横浜市営地下鉄ブルーライン 伊勢佐木町駅から徒歩5分",
  "url": "https://wan-time.jp/store/anella-cafe-isezakicho/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円（延長15分200円）、未就学児無料",
  "price_level": 2,
  "hours": "全日11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "横浜市中区若葉町にある保護犬・保護猫のふれあいカフェで、伊勢佐木町駅から徒歩5分である。平日も土日祝も11時に開く。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-isezakicho/ で確認。公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」の記載あり。犬猫それぞれの頭数は公式ページに記載なし（在籍は日々変動と公式に記載）"
 },
 {
  "id": "kanagawa-dog-anella-cafe-kawasaki-ekimae",
  "name": "ANELLA CAFE 川崎駅前店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "神奈川県",
  "area": "川崎市川崎区貝塚",
  "address": "神奈川県川崎市川崎区貝塚2-2-1 ディザイアパレス 1F",
  "access": "JR南武支線 川崎新町駅から徒歩11分",
  "url": "https://wan-time.jp/store/anella-cafe-kawasakiekimae/",
  "price": "平日30分1,100円（延長15分440円）／土日祝30分1,320円（延長15分550円）、小学生は半額、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "川崎市川崎区貝塚のディザイアパレス1階にある保護犬・保護猫のふれあいカフェで、2026年1月に動物取扱業の登録を受けた。料金は平日と土日祝で異なる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-kawasakiekimae/ で確認。公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」の記載あり。犬猫それぞれの頭数は公式ページに記載なし（在籍は日々変動と公式に記載）"
 },
 {
  "id": "okayama-dog-anella-cafe-branch-okayama-kitanagase",
  "name": "ANELLA CAFE ブランチ岡山北長瀬店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "岡山県",
  "area": "岡山市北区北長瀬表町",
  "address": "岡山県岡山市北区北長瀬表町2-17-80",
  "access": "JR山陽本線 北長瀬駅から徒歩11分",
  "url": "https://wan-time.jp/store/anella-cafe-kitanagase/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円（延長15分200円）、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "岡山市北区にある「ブランチ」名義の保護犬・保護猫のふれあいカフェで、北長瀬駅から徒歩11分である。商業施設ブランチ岡山北長瀬の中にあり、買い物のついでに立ち寄れる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-kitanagase/ で確認。公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」の記載あり。犬猫それぞれの頭数は公式ページに記載なし（在籍は日々変動と公式に記載）"
 },
 {
  "id": "yamanashi-dog-anella-cafe-kofu",
  "name": "ANELLA CAFE 甲府店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "山梨県",
  "area": "甲府市住吉",
  "address": "山梨県甲府市住吉2-3-30",
  "access": "JR中央本線 甲府駅から車で5分",
  "url": "https://wan-time.jp/store/anella-cafe-kofu/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円（延長15分200円）、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "甲府市住吉にある保護犬・保護猫のふれあいカフェだ。甲府駅から車で5分ほどで、5台分の駐車場がある。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-kofu/ で確認。公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」の記載あり。犬猫それぞれの頭数は公式ページに記載なし（在籍は日々変動と公式に記載）"
 },
 {
  "id": "okayama-dog-anella-cafe-kurashiki",
  "name": "ANELLA CAFE 倉敷店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "岡山県",
  "area": "倉敷市酒津",
  "address": "岡山県倉敷市酒津2710-1",
  "access": "水島臨海鉄道水島本線 球場前駅から徒歩18分（イオンモール倉敷の目の前）",
  "url": "https://wan-time.jp/store/anella-cafe-kurashiki/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円（延長15分200円）、未就学児無料",
  "price_level": 2,
  "hours": "全日12:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "倉敷市酒津にある保護犬・保護猫のふれあいカフェで、イオンモール倉敷の目の前である。駐車場が3台分あり、平日も土日祝も12時から営業する。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-kurashiki/ で確認。公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」の記載あり。犬猫それぞれの頭数は公式ページに記載なし（在籍は日々変動と公式に記載）"
 },
 {
  "id": "shiga-dog-anella-cafe-kusatsu-ritto",
  "name": "ANELLA CAFE 草津栗東店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "滋賀県",
  "area": "栗東市小柿",
  "address": "滋賀県栗東市小柿7-9-11 滋賀中央ビル1F",
  "access": "JR草津線 草津駅から徒歩11分",
  "url": "https://wan-time.jp/store/anella-cafe-kusatsuritto/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円（延長15分200円）、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "滋賀県栗東市小柿の滋賀中央ビル1階にある保護犬・保護猫のふれあいカフェである。草津駅から徒歩11分で、駐車場もある。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-kusatsuritto/ で確認。公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」の記載あり。犬猫それぞれの頭数は公式ページに記載なし（在籍は日々変動と公式に記載）"
 },
 {
  "id": "kagawa-dog-anella-cafe-marugame",
  "name": "ANELLA CAFE 丸亀店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "香川県",
  "area": "丸亀市土器町東",
  "address": "香川県丸亀市土器町東8-464",
  "access": "予讃線 丸亀駅から車で6分",
  "url": "https://wan-time.jp/store/anella-cafe-marugame/",
  "price": "一般30分1,000円（延長15分300円）、小学生30分500円（延長15分150円）、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "香川県丸亀市にある保護犬・保護猫のふれあいカフェで、丸亀駅から車で6分ほどである。駐車場があり、車で行きやすい。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-marugame/ で確認。公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」の記載あり。犬猫それぞれの頭数は公式ページに記載なし（在籍は日々変動と公式に記載）／検品⑥（2026-11-07）延長料金を公式店舗ページの300円／150円に修正"
 },
 {
  "id": "saitama-dog-anella-cafe-minami-urawa",
  "name": "ANELLA CAFE 南浦和店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "埼玉県",
  "area": "さいたま市南区南浦和",
  "address": "埼玉県さいたま市南区南浦和2-28-16 ハイグレード南浦和1F",
  "access": "JR武蔵野線 南浦和駅から徒歩3分",
  "url": "https://wan-time.jp/store/anella-cafe-minamiurawa/",
  "price": "平日30分1,000円（延長15分400円）／土日祝30分1,200円（延長15分500円）、小学生は半額、未就学児無料",
  "price_level": 2,
  "hours": "平日・祝日12:00〜18:00／土日11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可",
   "駅近"
  ],
  "description": "南浦和駅から徒歩3分、ハイグレード南浦和1階の保護犬・保護猫のふれあいカフェだ。2026年5月に登録を受けた新しい店で、料金は平日と土日祝で異なる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-minamiurawa/ で確認。公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」の記載あり。犬猫それぞれの頭数は公式ページに記載なし（在籍は日々変動と公式に記載）"
 },
 {
  "id": "chiba-dog-anella-cafe-naruto-mega-donki",
  "name": "ANELLA CAFE MEGAドン・キホーテ成東店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "千葉県",
  "area": "山武市成東",
  "address": "千葉県山武市成東1808-1 MEGAドン・キホーテ成東店 A棟1階",
  "access": "総武本線成東駅から徒歩25分",
  "url": "https://wan-time.jp/store/anella-cafe-naruto/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円（延長15分200円）、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "千葉県山武市のMEGAドン・キホーテ成東店A棟1階にある保護犬・保護猫のふれあいカフェである。共用駐車場が使え、買い物のついでに立ち寄れる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-naruto/ で確認。公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」の記載あり。犬猫それぞれの頭数は公式ページに記載なし（在籍は日々変動と公式に記載）"
 },
 {
  "id": "hyogo-dog-anella-cafe-nishinomiya",
  "name": "ANELLA CAFE 西宮店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "兵庫県",
  "area": "西宮市鳴尾町",
  "address": "兵庫県西宮市鳴尾町1-3-21 エイチ・ツーオー鳴尾ビル1階",
  "access": "阪神本線 鳴尾・武庫川女子大前駅から徒歩5分",
  "url": "https://wan-time.jp/store/anella-cafe-nishinomiya/",
  "price": "一般30分1,000円（延長30分500円）、小学生30分500円（延長30分300円）、未就学児無料",
  "price_level": 2,
  "hours": "全日11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "兵庫県西宮市鳴尾町にある保護犬・保護猫のふれあいカフェで、阪神の鳴尾・武庫川女子大前駅から徒歩5分だ。延長は30分単位で、系列の他店より区切りが長い。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-nishinomiya/ で確認。公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」の記載あり。犬猫それぞれの頭数は公式ページに記載なし（在籍は日々変動と公式に記載）"
 },
 {
  "id": "osaka-dog-anella-cafe-osaka-matsubara",
  "name": "ANELLA CAFE 大阪松原店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "大阪府",
  "area": "松原市田井城",
  "address": "大阪府松原市田井城1丁目1-18",
  "access": "近鉄南大阪線 高見ノ里駅から徒歩7分",
  "url": "https://wan-time.jp/store/anella-cafe-osakamatsubara/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円（延長15分200円）、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "大阪府松原市田井城にある保護犬・保護猫のふれあいカフェである。近鉄南大阪線の高見ノ里駅から徒歩7分で、最寄りが複数あり行きやすい。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-osakamatsubara/ で確認。公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」の記載あり。犬猫それぞれの頭数は公式ページに記載なし（在籍は日々変動と公式に記載）"
 },
 {
  "id": "osaka-dog-anella-cafe-osaka-sakai",
  "name": "ANELLA CAFE 大阪堺店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "大阪府",
  "area": "堺市堺区市之町東",
  "address": "大阪府堺市堺区市之町東6-2-6",
  "access": "南海高野線 堺東駅から徒歩10分",
  "url": "https://wan-time.jp/store/anella-cafe-osakasakai/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円（延長15分200円）、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "堺市堺区市之町東にある保護犬・保護猫のふれあいカフェで、堺東駅から徒歩10分である。系列の中でも大阪府内に複数ある店の一つで、保護された犬猫と時間制で過ごせる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-osakasakai/ で確認。公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」の記載あり。犬猫それぞれの頭数は公式ページに記載なし（在籍は日々変動と公式に記載）"
 },
 {
  "id": "osaka-dog-anella-cafe-osaka-tsurumi-ryokuchi",
  "name": "ANELLA CAFE 大阪鶴見緑地店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "大阪府",
  "area": "大阪市鶴見区諸口",
  "address": "大阪府大阪市鶴見区諸口5丁目浜6-9 池田ビル2階",
  "access": "大阪メトロ 横堤駅から徒歩12分",
  "url": "https://wan-time.jp/store/anella-cafe-osakatsurumi/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円（延長15分200円）、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "大阪市鶴見区の池田ビル2階にある保護犬・保護猫のふれあいカフェだ。横堤駅から徒歩12分、鶴見緑地駅からも徒歩14分で、公園の散歩と合わせやすい。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-osakatsurumi/ で確認。公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」の記載あり。犬猫それぞれの頭数は公式ページに記載なし（在籍は日々変動と公式に記載）"
 },
 {
  "id": "kanagawa-dog-anella-cafe-sotetsu-life-ryokuentoshi",
  "name": "ANELLA CAFE 相鉄ライフ緑園都市店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "神奈川県",
  "area": "横浜市泉区緑園",
  "address": "神奈川県横浜市泉区緑園4-1-2",
  "access": "相鉄いずみ野線 緑園都市駅から徒歩5分",
  "url": "https://wan-time.jp/store/anella-cafe-ryokuentoshi/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円（延長15分200円）、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "横浜市泉区の相鉄ライフ緑園都市店にある保護犬・保護猫のふれあいカフェである。緑園都市駅から徒歩5分で、共用の駐車場を使える。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-ryokuentoshi/ で確認。公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」の記載あり。犬猫それぞれの頭数は公式ページに記載なし（在籍は日々変動と公式に記載）"
 },
 {
  "id": "kanagawa-dog-anella-cafe-sagamihara-hashimoto",
  "name": "ANELLA CAFE 相模原橋本店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "神奈川県",
  "area": "相模原市緑区相原",
  "address": "神奈川県相模原市緑区相原4-1-30 川誠ビル1F",
  "access": "JR横浜線 相原駅から徒歩20分",
  "url": "https://wan-time.jp/store/anella-cafe-sagamiharahashimoto/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円（延長15分200円）、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "相模原市緑区相原の川誠ビル1階にある保護犬・保護猫のふれあいカフェだ。店名は橋本だが最寄りの相原駅から徒歩20分あり、駐車場を使う来店が現実的である。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-sagamiharahashimoto/ で確認。公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」の記載あり。犬猫それぞれの頭数は公式ページに記載なし（在籍は日々変動と公式に記載）"
 },
 {
  "id": "saitama-dog-anella-cafe-saitama-fukaya",
  "name": "ANELLA CAFE 埼玉深谷店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "埼玉県",
  "area": "深谷市西島町",
  "address": "埼玉県深谷市西島町3-1-2 スカイハイツ101",
  "access": "JR高崎線 深谷駅から徒歩1分",
  "url": "https://wan-time.jp/store/anella-cafe-saitamafukaya/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円（延長15分200円）、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可",
   "駅近"
  ],
  "description": "JR高崎線の深谷駅から徒歩1分、スカイハイツ101にある保護犬・保護猫のふれあいカフェである。駅前のうえ8台分の駐車場もあり、電車でも車でも行ける。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-saitamafukaya/ で確認。公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」の記載あり。犬猫それぞれの頭数は公式ページに記載なし（在籍は日々変動と公式に記載）"
 },
 {
  "id": "tokyo-dog-anella-cafe-shinjuku-yotsuya",
  "name": "ANELLA CAFE 新宿四ツ谷店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "東京都",
  "area": "新宿区四谷坂町",
  "address": "東京都新宿区四谷坂町9-9 三廣ビル1F・2F",
  "access": "都営新宿線 曙橋駅から徒歩7分",
  "url": "https://wan-time.jp/store/anella-cafe-shinjukuyostuya/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円（延長15分200円）、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "2026年10月に新宿店から移転して開いた、四谷坂町の保護犬・保護猫のふれあいカフェである。三廣ビルの1階と2階を使い、曙橋駅から徒歩7分、市ケ谷駅からも徒歩8分だ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-shinjukuyostuya/ で確認。公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」の記載あり。犬猫それぞれの頭数は公式ページに記載なし（在籍は日々変動と公式に記載）"
 },
 {
  "id": "ibaraki-dog-anella-cafe-tsuchiura",
  "name": "ANELLA CAFE 土浦店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "茨城県",
  "area": "土浦市東都和",
  "address": "茨城県土浦市東都和1-4",
  "access": "JR常磐線 土浦駅から車で11分",
  "url": "https://wan-time.jp/store/anella-cafe-tsuchiura/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円（延長15分200円）、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "茨城県土浦市東都和にある保護犬・保護猫のふれあいカフェである。土浦駅から車で11分ほどで、駐車場があり車向きの店だ。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-tsuchiura/ で確認。公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」の記載あり。犬猫それぞれの頭数は公式ページに記載なし（在籍は日々変動と公式に記載）"
 },
 {
  "id": "shizuoka-dog-anella-cafe-fuji-utogawa-higashicho",
  "name": "ANELLA CAFE 富士宇東川東町店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "静岡県",
  "area": "富士市宇東川東町",
  "address": "静岡県富士市宇東川東町4-16-1階",
  "access": "岳南鉄道線 岳南原田駅から徒歩2分",
  "url": "https://wan-time.jp/store/anella-cafe-utogawahigashicho/",
  "price": "一般30分1,000円（延長15分400円）、小学生30分500円（延長15分200円）、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可",
   "駅近"
  ],
  "description": "静岡県富士市宇東川東町にある保護犬・保護猫のふれあいカフェで、岳南鉄道の岳南原田駅から徒歩2分である。20台分の駐車場があり、車でも行きやすい。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-utogawahigashicho/ で確認。公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」の記載あり。犬猫それぞれの頭数は公式ページに記載なし（在籍は日々変動と公式に記載）"
 },
 {
  "id": "saitama-dog-anella-cafe-soka-yatsuka",
  "name": "ANELLA CAFE 草加谷塚店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "埼玉県",
  "area": "草加市谷塚",
  "address": "埼玉県草加市谷塚1-6-43 1階",
  "access": "東武スカイツリーライン 谷塚駅から徒歩2分",
  "url": "https://wan-time.jp/store/anella-cafe-yatsuka/",
  "price": "一般30分800円／1時間1,200円（延長15分400円）、2時間1,600円のお得プランあり、小学生・障がいのある方は半額、未就学児無料",
  "price_level": 2,
  "hours": "全日12:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可",
   "駅近"
  ],
  "description": "東武スカイツリーラインの谷塚駅から徒歩2分、草加市の保護犬・保護猫のふれあいカフェだ。料金は30分800円、1時間1,200円と系列の中で安く、2時間1,600円のお得プランもある。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-yatsuka/ で確認。公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」の記載あり。犬猫それぞれの頭数は公式ページに記載なし（在籍は日々変動と公式に記載）"
 },
 {
  "id": "chiba-dog-anella-cafe-minami-nagareyama",
  "name": "ANELLA CAFE 南流山店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "千葉県",
  "area": "流山市南流山",
  "address": "千葉県流山市南流山2-24-12 1階",
  "access": "つくばエクスプレス・武蔵野線 南流山駅から徒歩6分",
  "url": "https://wan-time.jp/store/anellacafe-nagareyama/",
  "price": "一般30分1,000円（延長15分300円）、小学生30分500円（延長15分150円）、未就学児無料",
  "price_level": 2,
  "hours": "平日12:00〜18:00／土日祝11:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "千葉県流山市南流山にある保護犬・保護猫のふれあいカフェで、南流山駅から徒歩6分である。つくばエクスプレスと武蔵野線が使える。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://wan-time.jp/store/anellacafe-nagareyama/ で確認。公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」の記載あり。犬猫それぞれの頭数は公式ページに記載なし（在籍は日々変動と公式に記載）／検品⑥（2026-11-07）延長料金を公式店舗ページの300円／150円に修正"
 },
 {
  "id": "chiba-dog-anella-cafe-sakura",
  "name": "ANELLA CAFE 佐倉店",
  "animals": [
   "dog",
   "cat"
  ],
  "prefecture": "千葉県",
  "area": "佐倉市大崎台",
  "address": "千葉県佐倉市大崎台1-3-4 第一岩井ビル B号室",
  "access": "総武本線 佐倉駅から徒歩3分",
  "url": "https://wan-time.jp/store/anellacafe-sakura/",
  "price": "一般30分1,000円（延長15分300円）、小学生30分500円（延長15分150円）、未就学児無料",
  "price_level": 2,
  "hours": "全日12:00〜18:00",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可",
   "駅近"
  ],
  "description": "総武本線の佐倉駅から徒歩3分、佐倉市大崎台にある保護犬・保護猫のふれあいカフェである。営業は12時から18時で、延長は15分300円である。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "店舗ページ https://wan-time.jp/store/anellacafe-sakura/ で確認。公式FAQ https://wan-time.jp/faq/ に「各施設予約不要」の記載あり。犬猫それぞれの頭数は公式ページに記載なし（在籍は日々変動と公式に記載）"
 },
 {
  "id": "osaka-dog-hogoken-park-nagai",
  "name": "HOGOKEN PARK 長居店",
  "animals": [
   "dog"
  ],
  "prefecture": "大阪府",
  "area": "大阪市住吉区長居東",
  "address": "大阪府大阪市住吉区長居東4-11-5",
  "access": "地下鉄御堂筋線 長居駅6番出口からすぐ／JR阪和線 長居駅から徒歩5分",
  "url": "https://www.hogokencafe.com/shop",
  "price": "施設利用料1名990円（1ドリンク付き）",
  "price_level": 1,
  "hours": "12:00〜20:00（ふれあいは19:30まで）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "保護動物",
   "里親募集",
   "ドリンク込み"
  ],
  "description": "大阪市住吉区の長居にある、保護犬の HOGOKEN の店だ。系列では「PARK」の名を冠した店で、里親を探す犬と過ごせる。利用料は系列共通の1ドリンク付き990円で、ふれあいは19時30分までである。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://www.hogokencafe.com/shop の店舗案内（住所・営業時間・定休日）と /staff の施設利用料990円（1ドリンク付き）で確認。990円は公式サイト共通の表記で店舗別の料金表記はなし。展示の動物取扱業の有効期限表記が2026年9月30日で過ぎているが、公式ブログは2026-11-03まで更新されている（更新表記が未反映の可能性）。最寄り駅の記載なし／検品⑥（2026-11-07）アクセスは公式サイトに無く、公式サイトから案内されている運営の公式X（@WanWanWan8611）の投稿で確認"
 },
 {
  "id": "tokyo-rabbit-usabibi-ikebukuro",
  "name": "うさぎカフェ うさびび",
  "animals": [
   "rabbit"
  ],
  "prefecture": "東京都",
  "area": "池袋",
  "address": "東京都豊島区池袋2-42-9 中川ビル5F",
  "access": "池袋駅周辺",
  "url": "https://usabibi.net",
  "price": "1時間1,200円（ドリンク1本付き）、30分800円、延長30分600円",
  "price_level": 2,
  "hours": "平日13:00〜20:00／土日祝11:00〜20:00（最終19:30入店）",
  "closed": "水曜（祝日を除く）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "ドリンク込み",
   "貸切可",
   "子ども可"
  ],
  "description": "池袋のビル5階にあるうさぎカフェで、うさぎが自由に過ごす家のような雰囲気を目指している。抱っこは骨折の恐れがあるため原則禁止で、なでて楽しむスタイル。予約制ではないが予約優先なので、日程が決まっているなら電話予約が安心。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://usabibi.net と https://usabibi.net/fee-guide/ で確認"
 },
 {
  "id": "tokyo-rabbit-moffrell-akihabara",
  "name": "うさぎカフェ もふれる",
  "animals": [
   "rabbit"
  ],
  "prefecture": "東京都",
  "area": "秋葉原・末広町",
  "address": "東京都千代田区外神田5-2-3 アソルティ末広町 B1階",
  "access": "秋葉原・末広町エリア",
  "url": "https://moff-rell.com/ja/",
  "price": "30分1,600円／60分2,300円（税込、うさぎのおやつ付き）",
  "price_level": 2,
  "hours": "平日12:00〜21:00（最終入店19:00）／土日祝11:00〜21:00（最終入店18:00）※同ページに19:00閉店の古い告知も残る",
  "closed": "公式サイトで月ごとに休館日を告知",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "えさやり体験"
  ],
  "description": "5つのブースを10〜12分ずつ移動しながら、1組ずつ貸し切りの個室でうさぎと過ごす形式のうさぎカフェ。10羽以上のうさぎとマンツーマンに近い距離で触れ合える。入館は10歳からで、ドリンク提供はなくペットボトルの持ち込みが可能。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://moff-rell.com/ja/ で確認。営業時間表記が同ページ内で一部不統一のため要確認"
 },
 {
  "id": "aichi-rabbit-usagi-to-cafe-nagoya",
  "name": "うさぎのワンダーランド うさぎとCafe",
  "animals": [
   "rabbit"
  ],
  "prefecture": "愛知県",
  "area": "大須・矢場町",
  "address": "愛知県名古屋市中区大須4-1-71 矢場町中駒ビル3階",
  "access": "矢場町駅から徒歩5分、上前津駅から徒歩6分",
  "url": "https://usagito-cafe.com/usagicafe/play/",
  "price": "30分1,430円／1時間1,980円（税込）、特典付きフリータイム2,800円",
  "price_level": 2,
  "hours": "平日13:00〜20:00／土日祝11:00〜20:00",
  "closed": "なし",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "子ども可",
   "写真OK",
   "駅近"
  ],
  "description": "うさぎ専門店に併設された、名古屋・大須のうさぎカフェ。ふれあい専用のコースがあり、クレープなどの食事付きコースも選べる。12歳以下は保護者同伴で、立ったままの抱っこは禁止。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://usagito-cafe.com/usagicafe/play/（料金表は画像）で確認。予約は電話か公式LINE"
 },
 {
  "id": "osaka-rabbit-mimi-lapin-kyobashi",
  "name": "ミミラパン",
  "animals": [
   "rabbit"
  ],
  "prefecture": "大阪府",
  "area": "京橋",
  "address": "大阪府大阪市都島区東野田町2-8-7 サオコマビル7F",
  "access": "京橋駅から徒歩3分",
  "url": "https://mimilapin1965.com/cafe/",
  "price": "1時間 大人1,500円／中学生未満800円、延長30分750円",
  "price_level": 2,
  "hours": "火〜金13:00〜19:00／土日祝11:00〜19:00",
  "closed": "月曜（祝日の場合は営業、翌火曜休）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "抱っこOK",
   "駅近",
   "子ども可",
   "写真OK"
  ],
  "description": "うさぎのブリーダーが直接運営する、京橋駅近くのうさぎカフェ。ネザーランドドワーフやホーランドロップなど、種類の違ううさぎに会える。抱っこはスタッフに声をかければできる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://mimilapin1965.com/cafe/ と /access/ で確認。予約の規定は記載が見当たらず、念のため電話確認推奨"
 },
 {
  "id": "fukuoka-rabbit-creme-chantilly-kasuga",
  "name": "猫うさぎカフェ クリームシャンティ",
  "animals": [
   "rabbit",
   "cat"
  ],
  "prefecture": "福岡県",
  "area": "春日",
  "address": "福岡県春日市岡本2-11 レジデンス春日1F",
  "access": "JR南福岡駅から徒歩約15分、西鉄大牟田線 大橋方面からバス約7分（岡本バス停）",
  "url": "https://ameblo.jp/bunnycatn/",
  "price": "大人1時間1,200円（1ドリンク制）、就学前600円、延長15分300円",
  "price_level": 2,
  "hours": "平日11:00〜17:00／土日祝11:00〜18:00（うさぎ部屋の最終入室は閉店の1時間30分前）",
  "closed": "不定休（臨時休業あり）",
  "reservation": "推奨",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "保護された猫とうさぎがいる、福岡県春日市の小さなカフェ。猫の部屋とうさぎの部屋が分かれていて、1時間単位で利用する。平日は完全予約制になっているので、電話での予約が前提。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式ブログ https://ameblo.jp/bunnycatn/ で確認（平日は2026/5/21から完全予約制の告知、11月に臨時休業の告知あり）。公式サイトは未確認のため公式ブログが正本"
 },
 {
  "id": "hyogo-rabbit-rin-marcy-rokko-island",
  "name": "ウサギカフェ Rin&Marcy",
  "animals": [
   "rabbit"
  ],
  "prefecture": "兵庫県",
  "area": "神戸・六甲アイランド",
  "address": "兵庫県神戸市東灘区向洋町中1-4-125-108 イーストコート4番街-5番館",
  "access": "六甲ライナー アイランド北口駅・アイランドセンター駅から徒歩7分",
  "url": "https://rinmarcy.com/",
  "price": "うさぎスペース20分 大人600円・小学生以下400円（おやつ付）、延長10分300円／200円",
  "price_level": 1,
  "hours": "12:00〜18:00",
  "closed": "水曜・木曜・第1／第3金曜（臨時休業あり）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "子ども可"
  ],
  "description": "神戸の六甲アイランドにある、うさぎスペース併設のカフェ。スタッフがうさぎを出して、ひざの上のブランケットにのせてくれる形のふれあい。20分600円と入りやすく、カフェ利用だけでも入れる。休みの日が多めなので、営業カレンダーを見て行きたい。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://rinmarcy.com/ 、https://rinmarcy.com/plan/ 、https://rinmarcy.com/access/ で確認"
 },
 {
  "id": "hokkaido-rabbit-shiawase-usagi-kitahiroshima",
  "name": "うさぎホテル&カフェ しあわせうさぎ",
  "animals": [
   "rabbit"
  ],
  "prefecture": "北海道",
  "area": "北広島（札幌近郊）",
  "address": "北海道北広島市大曲南ケ丘4丁目13-9",
  "access": "札幌近郊・北広島市大曲（駐車場4台）",
  "url": "https://happyrabbit.amebaownd.com/",
  "price": "ラビットルーム 1人15分900円（延長5分300円）",
  "price_level": 1,
  "hours": "12:00〜17:00（カフェのラストオーダー15:00）",
  "closed": "月曜・金曜（臨時休業あり）",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "予約制"
  ],
  "description": "札幌近郊の北広島にある、うさぎ専門ホテルを併設したカフェ。9羽ほどのうさぎがいて、ふれあえるのは予約制のラビットルームで、1日1組のみ。カフェ席ではふれあえないので、ふれあい目当てなら平日は3日前、土日は前日までに予約する。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://happyrabbit.amebaownd.com/ 、https://happyrabbit.amebaownd.com/pages/6197949/STATIC で確認"
 },
 {
  "id": "hokkaido-rabbit-monlapin-sapporo",
  "name": "うさぎカフェ モンラパン",
  "animals": [
   "rabbit"
  ],
  "prefecture": "北海道",
  "area": "札幌・大通",
  "address": "北海道札幌市中央区南1条西1丁目15 丸美ビル1F",
  "access": "地下鉄大通駅から徒歩5分",
  "url": "https://www.usagi-monlapin.com/",
  "price": "おとな30分2,500円（ドリンク込み）、中学生以下1,500円、延長15分700円",
  "price_level": 4,
  "hours": "平日15:00〜20:00／土日祝13:00〜19:00（臨時休業あり）",
  "closed": "毎週月曜日（祝日の場合は翌日が休み）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "ドリンク込み",
   "子ども可",
   "駅近"
  ],
  "description": "札幌のうさぎ専門店に併設されたカフェで、好きなうさぎを選んでドリンクを飲みながら過ごす。うさぎの種類は多いが、頭数は公式に書かれていない。予約客が優先で、混むと待つことがある。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "料金ページ https://www.usagi-monlapin.com/information/ で確認。予約は優先と記載"
 },
 {
  "id": "kanagawa-rabbit-rabbit-house-sunny-yokosuka",
  "name": "ラビットハウスサニー",
  "animals": [
   "rabbit"
  ],
  "prefecture": "神奈川県",
  "area": "横須賀・県立大学駅",
  "address": "神奈川県横須賀市安浦町2-27 アットマーク1階",
  "access": "京急線 県立大学駅から徒歩1分",
  "url": "https://rabbithousesunny.com/",
  "price": "スタッフうさぎと遊ぶ遊び場 30分1,100円・60分1,650円、ふれあい体験は約10分330円。初回に会員登録550円（SNS投稿で無料）",
  "price_level": 2,
  "hours": "11:00〜17:30（時短営業の日あり）",
  "closed": "火曜・水曜",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "抱っこOK",
   "子ども可",
   "駅近"
  ],
  "description": "横須賀のうさぎ専門店で、店のうさぎを膝に乗せるふれあい体験ができる。10歳未満の子どもはこの体験が中心。カフェではなく専門店のふれあいコーナーなので、短時間で気軽に立ち寄る使い方に向く。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "サービスページ https://rabbithousesunny.com/menu とアクセスページで確認。公式のお知らせは2025-12に更新あり。予約の記載はなし"
 },
 {
  "id": "osaka-rabbit-usagi-house-daniel-sakuranomiya",
  "name": "うさぎハウスDaniel",
  "animals": [
   "rabbit"
  ],
  "prefecture": "大阪府",
  "area": "桜ノ宮・都島",
  "address": "大阪府大阪市都島区中野町5-9-3",
  "access": "JR環状線 桜ノ宮駅から徒歩3分",
  "url": "https://usapecodaniel.square.site/",
  "price": "入場500円／20分（エサやり付き）、延長20分300円",
  "price_level": 1,
  "hours": "土日祝のみ 13:00〜18:00（変更・臨時休業あり）",
  "closed": "平日",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "子ども可",
   "駅近"
  ],
  "description": "桜ノ宮駅近くの小さなうさぎ専門店で、看板うさぎや子うさぎとふれあえる。20分500円と安く、全年齢が入れる。営業は土日祝のみなので、行く前に最新の営業時間を確認したい。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://usapecodaniel.square.site/ と旧サイト https://usagihousedaniel.simdif.com/ で確認。予約の要否は記載なし"
 },
 {
  "id": "okinawa-rabbit-healing-bunny-naha",
  "name": "うさぎと癒しの遊び場 Healing Bunny",
  "animals": [
   "rabbit"
  ],
  "prefecture": "沖縄県",
  "area": "那覇・壷川",
  "address": "沖縄県那覇市壷川3丁目4-1 田崎ビル3F",
  "access": "ゆいレール 壷川駅から徒歩4分",
  "url": "https://healing-bunny.com/",
  "price": "大人30分1,200円／60分1,600円（フリードリンク付き）、中高生30分900円、12歳未満30分600円",
  "price_level": 2,
  "hours": "平日13:00〜20:00（最終入場19:00）／土日祝11:00〜19:00（最終入場18:00）",
  "closed": "月曜・火曜（祝日は営業）、12/30〜1/3",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "ドリンク込み",
   "子ども可",
   "駅近"
  ],
  "description": "2023年10月に開いた、沖縄初のうさぎ専門の動物カフェ。ふれあい広場でうさぎと過ごし、フリードリンクが付く。予約が優先で、12歳未満だけでの入店はできない。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "料金ページ https://www4.hp-ez.com/hp/healingbunny/page5 と店舗紹介ページで確認。新サイト https://healing-bunny.com/ も公開あり"
 },
 {
  "id": "ishikawa-rabbit-tsuki-usagi-no-sato-kaga",
  "name": "月うさぎの里",
  "animals": [
   "rabbit"
  ],
  "prefecture": "石川県",
  "area": "加賀",
  "address": "石川県加賀市永井町43-41",
  "access": "JR加賀温泉駅から車で約15分",
  "url": "https://www.tsukiusaginosato.com/play",
  "price": "うさぎ広場入場 大人（中学生以上）500円・小学生以下300円（3歳以下無料）、おひざタイム200円",
  "price_level": 1,
  "hours": "9:00〜16:00（うさぎ広場の最終入場15:40）",
  "closed": "年中無休（臨時休業あり）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "抱っこOK",
   "えさやり体験",
   "子ども可",
   "写真OK"
  ],
  "description": "約50匹のうさぎが広場で自由に過ごす施設で、カフェではなくふれあいの広場。決まった時間にうさぎを膝に乗せられる「おひざタイム」があり、予約は不要。屋根付きのエリアがあり雨の日も行きやすい。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "ふれあいページ https://www.tsukiusaginosato.com/play と施設情報 https://www.tsukiusaginosato.com/facility で確認"
 },
 {
  "id": "hyogo-rabbit-mofu-no-ie-akashi",
  "name": "うさぎ専門店とかふぇ もふのいえ",
  "animals": [
   "rabbit"
  ],
  "prefecture": "兵庫県",
  "area": "明石・大久保",
  "address": "兵庫県明石市大久保町駅前1丁目3-12",
  "access": "明石市大久保町の駅前エリア（公式ページに最寄駅名の記載なし）",
  "url": "https://mofunoie.com/",
  "price": "ふれあい30分1,100円／60分1,650円（ワンドリンク付き）、小学生以下30分770円、延長15分275円",
  "price_level": 2,
  "hours": "13:00〜18:00",
  "closed": "水曜・木曜",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "ドリンク込み",
   "子ども可"
  ],
  "description": "うさぎ専門店にカフェが併設された店で、ワンドリンク付きの時間制でうさぎとふれあう。45分や60分のコースもあり、小学生以下は割安。予約は外部の予約サイトで受け付けている。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "カフェページ https://mofunoie.com/%E3%81%8B%E3%81%B5%E3%81%87/ で確認。公式の更新は2026-10-26"
 },
 {
  "id": "kagoshima-rabbit-usa-cafe-ribi",
  "name": "うさカフェりび",
  "animals": [
   "rabbit",
   "smallanimal"
  ],
  "prefecture": "鹿児島県",
  "area": "鹿児島市・西田",
  "address": "鹿児島県鹿児島市西田2丁目6-21 井上ビル201",
  "access": "西田エリア",
  "url": "https://usacafe-ribi.com/",
  "price": "25分 平日800円／土日祝1,000円、50分 平日1,200円／土日祝1,400円（大人・税込。0〜2歳は無料）",
  "price_level": 2,
  "hours": "10:00〜19:00",
  "closed": "不定休（営業日は公式の予約カレンダーで確認）",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "予約制",
   "子ども可",
   "複数の動物"
  ],
  "description": "うさぎ、ハムスター、モルモットから好きな子を選んでふれあえる、鹿児島市の予約制カフェ。25分で1匹、50分で2匹のように時間を区切り、1日に入れる組数も限られる。うさぎ好きの友達同士や、ひとりでも周りを気にせず過ごせる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイトのふれあいシステム https://usacafe-ribi.com/ribi/system/ 、予約ページ https://usacafe-ribi.com/reserve/ （2026-11の営業予定を掲載）、店舗情報 https://usacafe-ribi.com/ribi/access/ で確認。料金は公式ページに掲載された料金表の画像（2026-03-19改定版）から読み取った"
 },
 {
  "id": "tokyo-owl-toricafe-yanaka",
  "name": "鳥のいるカフェ 谷中本店",
  "animals": [
   "owl"
  ],
  "prefecture": "東京都",
  "area": "谷中・根津",
  "address": "東京都台東区谷中2-3-16 1F",
  "access": "東京メトロ千代田線 根津駅1番出口から徒歩5分",
  "url": "https://toricafe.co.jp/yanaka",
  "price": "入場＋1ドリンクで2,200円（後払い。3歳まで無料）",
  "price_level": 3,
  "hours": "13:00〜20:00",
  "closed": "無休",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "ドリンク込み",
   "子ども可"
  ],
  "description": "フクロウやタカなどの猛禽類と、放鳥ルームで触れ合えるカフェ。看板フクロウが出迎えてくれて、基本はフリータイムで、混み合う時だけ1時間制になる。フードはなくドリンクのみで、猛禽に会うことが目的の人向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "営業時間・料金 https://toricafe.co.jp/yanaka/system 、住所 https://toricafe.co.jp/yanaka/access 、予約案内 https://toricafe.co.jp/yanaka/yanaka-reservation で確認（予約なしでも入店可、事前予約を勧める旨の記載）"
 },
 {
  "id": "osaka-owl-chouette-shinsaibashi",
  "name": "幸せのフクロウカフェ chouette（シュエット）",
  "animals": [
   "owl"
  ],
  "prefecture": "大阪府",
  "area": "心斎橋",
  "address": "大阪府大阪市中央区東心斎橋1丁目9-21 1921ビル 2F",
  "access": "地下鉄 長堀橋駅クリスタ長堀南3番出口から約100m／心斎橋駅南5番出口から約150m",
  "url": "https://chouette1.jp/",
  "price": "60分：ふれあいプラン大人2,300円＋ワンオーダー500〜1,000円（入場料にオーダーは含まれない）",
  "price_level": 3,
  "hours": "平日12:00〜19:30／土日祝11:00〜19:30（最終入店18:30）",
  "closed": "月曜を中心に不定休（11月は2・9・16・30日が休み。公式トップのカレンダーで確認）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "子ども可",
   "写真OK",
   "駅近"
  ],
  "description": "心斎橋の繁華街にある、種類の多いフクロウたちと触れ合えるカフェ。ふれあい体験が基本で、頭をなでたり、プランによっては腕に乗せたりできる。60分または80分制で、カフェスペースとふれあいスペースは行き来できる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "料金・利用方法 https://chouette1.jp/use/ 、住所 https://chouette1.jp/access/ 、閉店時刻 https://chouette1.jp/blog/2025/05/23309/ で確認。開店時刻は公式に記載がなく、大阪観光局の紹介 https://osaka-info.jp/spot/happy-owl-caf-chouette/ を参照（要再確認）。予約はTableCheckで受付。2026/09/09の10周年告知あり"
 },
 {
  "id": "kyoto-owl-kyoto-no-fukurou-no-mori",
  "name": "京都のフクロウの森",
  "animals": [
   "owl"
  ],
  "prefecture": "京都府",
  "area": "新京極・四条",
  "address": "京都府京都市中京区新京極通四条上る中之町561番地 2F",
  "access": "新京極商店街内（四条通を上った先）",
  "url": "https://owls-cats-forest.com/free/owls-kyoto",
  "price": "入場料1,000円（5歳以上。学割・レシート提示で100円引き）",
  "price_level": 1,
  "hours": "平日12:00〜18:00／土日祝11:30〜18:30（変動あり。最終入場は閉店30分前）",
  "closed": "公式に定休日の記載なし（営業時間は変動あり）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "写真OK",
   "子ども可"
  ],
  "description": "京都の新京極にある、フクロウとのふれあいに絞った小さな施設で、シロフクロウやメンフクロウなど十数羽が暮らしている。当日分のチケットを店頭で買う方式で予約は不可。買い物や食事の合間に気軽に寄りたい人向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "https://owls-cats-forest.com/free/owls-kyoto で住所・営業時間・入場料・予約不可・年齢制限を確認（動物取扱業登録の有効期間が令和12年まで記載）"
 },
 {
  "id": "fukuoka-owl-fukurou-no-iru-cafe-tenjin",
  "name": "ふくろうのいるカフェ天神",
  "animals": [
   "owl",
   "hedgehog"
  ],
  "prefecture": "福岡県",
  "area": "天神・今泉",
  "address": "福岡県福岡市中央区今泉1-13-31 プロスペリタ今泉テラス3階",
  "access": "西鉄天神駅南口から徒歩2分",
  "url": "https://www.owlscafetenjin.com/",
  "price": "50分制 ふれあい＋ソフトドリンク：大人2,480円（中高生1,980円、子供1,780円）",
  "price_level": 3,
  "hours": "平日13:00〜17:00／土日祝11:00〜17:00（最終入店16:15）",
  "closed": "公式に定休日の記載なし（急な営業時間変更あり）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "ドリンク込み",
   "子ども可",
   "駅近",
   "複数の動物"
  ],
  "description": "放鳥室でフクロウが放し飼いになっていて、ハリネズミやキンカジューとも一緒に触れ合える福岡のカフェ。入場料にソフトドリンクが付いた50分制で、ハリネズミのえさやりは別料金。香水など強い匂いは控えるルール。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "https://www.owlscafetenjin.com/ と /access で住所・料金・営業時間・アクセスを確認。動物取扱業登録は2028年まで有効。ブログは2019年で止まっているためSNSでの営業確認は未実施（要再確認）"
 },
 {
  "id": "oita-owl-yufuin-no-fukurou-no-mori",
  "name": "湯布院のフクロウの森",
  "animals": [
   "owl"
  ],
  "prefecture": "大分県",
  "area": "湯布院",
  "address": "大分県由布市湯布院町川上1503-3 YUFUIN FLORAL VILLAGE",
  "access": "YUFUIN FLORAL VILLAGE内",
  "url": "https://owls-cats-forest.com/free/owls-yufuin",
  "price": "入場料 大人900円／小人（4〜12歳）600円",
  "price_level": 1,
  "hours": "9:30〜17:30（12〜2月は17:00まで。変動あり）",
  "closed": "公式に定休日の記載なし",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "写真OK",
   "子ども可"
  ],
  "description": "湯布院の観光施設の中にある、屋外でフクロウを見て触れ合える施設。自然に囲まれた雰囲気で、のんびり眺めたい人や家族連れに合う。チケットは当日分のみ店頭販売で、予約は受け付けていない。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "https://owls-cats-forest.com/free/owls-yufuin で住所・営業時間・料金・予約不可を確認"
 },
 {
  "id": "kanagawa-owl-kamakura-no-fukurou-no-mori",
  "name": "鎌倉乃フクロウの森",
  "animals": [
   "owl"
  ],
  "prefecture": "神奈川県",
  "area": "鎌倉",
  "address": "神奈川県鎌倉市小町2-10-4 東洋ビル3F",
  "access": "鎌倉・小町エリア",
  "url": "https://owls-cats-forest.com/free/owls-kamakura",
  "price": "入場料 時間無制限：大人800円／小人（4〜12歳）500円",
  "price_level": 1,
  "hours": "平日11:00〜17:00／土日祝11:00〜18:00（変動あり）",
  "closed": "公式に定休日の記載なし",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "写真OK",
   "時間無制限プランあり",
   "子ども可"
  ],
  "description": "鎌倉の小町にあるビルの3階で、さまざまな種類のフクロウに会えるふれあい施設。時間制限がなく、安い入場料でゆっくり過ごせるのが特徴。予約は不可で、当日店頭でチケットを買う。散策の合間に寄る人向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "https://owls-cats-forest.com/free/owls-kamakura で住所・営業時間・料金・予約不可を確認"
 },
 {
  "id": "hiroshima-owl-owl-de-base",
  "name": "オウルドベース（OWL DE BASE）",
  "animals": [
   "owl",
   "hedgehog"
  ],
  "prefecture": "広島県",
  "area": "袋町",
  "address": "広島県広島市中区袋町1-33 沖田ビル4F",
  "access": "広島電鉄「本通」電停から徒歩約5分",
  "url": "https://www.owl-de-base.com/",
  "price": "入場1,980円（平日はフリータイム／土日祝は1時間、フリードリンク付き）。エサやり+330円、2羽目以降のふれあい+550円",
  "price_level": 2,
  "hours": "11:00〜19:00（最終受付18:00）",
  "closed": "木曜",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "ドリンク込み",
   "写真OK",
   "子ども可",
   "時間無制限プランあり",
   "複数の動物"
  ],
  "description": "広島の街なかにあるフクロウカフェで、20〜30羽ほどのフクロウやタカ・ハヤブサ、ハリネズミに会える。入場料に1羽目のふれあいとフリードリンクが含まれ、平日は時間を気にせず過ごせる。子ども割引がないので、家族で行くときは人数分の料金を見ておきたい。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "料金・システム https://www.owl-de-base.com/experience/cafe 、住所・営業時間・定休日 https://www.owl-de-base.com/ で確認（予約不要の記載、2026/11/3付の日記あり）"
 },
 {
  "id": "tokyo-owl-owlvillage-harajuku",
  "name": "ふくろうの里 原宿店（OWL VILLAGE HARAJUKU）",
  "animals": [
   "owl"
  ],
  "prefecture": "東京都",
  "area": "原宿",
  "address": "東京都渋谷区神宮前1丁目21-15 原宿ATMビル4F",
  "access": "JR原宿駅 竹下口から徒歩2分",
  "url": "https://www.owlvillage.jp/",
  "price": "60分制 スタンダードコース3,800円（事前決済は2,500円）。ドリンク・ふれあい・記念品付き。エサやり1皿500円",
  "price_level": 4,
  "hours": "12:00〜19:00（最終入店18:00）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "ドリンク込み",
   "写真OK",
   "子ども可",
   "貸切可",
   "駅近"
  ],
  "description": "竹下通りのそばにある小さなフクロウカフェ。60分制で、ドリンクとふれあい、記念品がセットになっている。手乗りを頼めばスタッフが案内してくれ、空いていれば予約なしでも入れるが、混む日は予約が安心。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "料金・営業時間・住所・FAQ（予約なしでも空席があれば案内可）を https://www.owlvillage.jp/ で確認。ブログは2026/11/1更新。定休日の記載は見つからず"
 },
 {
  "id": "tokyo-owl-owlpark-ikebukuro",
  "name": "あうるぱーく フクロウカフェ池袋西口（Owlpark）",
  "animals": [
   "owl",
   "hedgehog",
   "reptile"
  ],
  "prefecture": "東京都",
  "area": "池袋",
  "address": "東京都豊島区西池袋3-30-11 泰共フラットビル2F",
  "access": "池袋駅西口から徒歩3分",
  "url": "https://www.owlpark.tokyo/",
  "price": "入場1,700円（高校生以下1,200円）、時間無制限・ふれあい体験料込み。現金・一部QR決済のみ",
  "price_level": 2,
  "hours": "11:00〜18:00（最終入店17:20）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "時間無制限プランあり",
   "子ども可",
   "駅近",
   "複数の動物"
  ],
  "description": "池袋駅の西口近くで、26種30羽ほどのフクロウに加え、ハリネズミやヘビ、イグアナにも触れ合えるカフェ。入場料だけで時間制限なく、エサやりやフライト体験まで込み。土日祝や5人以上の団体は予約をすすめている。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "料金・営業時間・住所・予約案内 https://www.owlpark.tokyo/ で確認。ブログ https://ameblo.jp/owlpark/ は2026/03/31更新。ブログ見出しの旧料金表記（1,200円）と差があり、公式トップの1,700円を採用"
 },
 {
  "id": "osaka-owl-osaka-fukurou-no-mori",
  "name": "大阪フクロウの森",
  "animals": [
   "owl"
  ],
  "prefecture": "大阪府",
  "area": "道頓堀",
  "address": "大阪府大阪市中央区道頓堀1丁目6-13 雛ビル（受付2階／フクロウの森3階）",
  "access": "道頓堀エリア（雛ビル内）",
  "url": "https://owls-cats-forest.com/free/owls-osaka",
  "price": "入場料 大人（13歳以上）1,000円／小人（4〜12歳）800円、3歳以下無料。豆柴カフェとの共通券あり（大人2,000円）",
  "price_level": 1,
  "hours": "11:30〜17:30（変動あり。最終入場は閉店30分前）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "写真OK",
   "子ども可"
  ],
  "description": "道頓堀のビルの3階にある、フクロウとのふれあいに絞った施設。コキンメフクロウやシロフクロウ、ワシミミズクなど十数種類が暮らしている。チケットは当日分を店頭で買う方式で、電話やネットの予約はできない。同じビルの豆柴カフェと合わせて回る人にも向く。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "https://owls-cats-forest.com/free/owls-osaka で住所・営業時間・入場料・予約不可・共通券を確認（動物取扱業登録は令和10年10月まで有効）"
 },
 {
  "id": "aichi-owl-moonlight-garden",
  "name": "ムーンライトガーデン（ふくろう＆エキゾチックアニマルカフェ）",
  "animals": [
   "owl",
   "reptile"
  ],
  "prefecture": "愛知県",
  "area": "名古屋・守山区",
  "address": "愛知県名古屋市守山区四軒家2丁目503番地 クイール四軒家1-C",
  "access": "名古屋市守山区四軒家（最寄り駅は公式ページに記載なし。来店前に確認を）",
  "url": "https://www.moonlightgarden.jp/",
  "price": "30分 平日1,000円／土日祝1,200円（大人）、1時間2,000円（土日祝のみ）、フリー平日2,000円／土日祝3,500円",
  "price_level": 2,
  "hours": "平日15:00〜20:00／土日祝12:00〜20:00（最終受付19:00）",
  "closed": "火・木・金（祝日は営業）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "複数の動物",
   "子ども可"
  ],
  "description": "ワシミミズク類やモリフクロウ類などのフクロウに加えて、レオパードゲッコーなどの爬虫類やリクガメもいる小さな店。時間制で、フクロウとのふれあいのほか、土日祝は決まった時間にえさやり体験がある。予約なしで入れるので、ふらっと立ち寄りたい人向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式サイト https://www.moonlightgarden.jp/ （料金・営業時間・定休日。お知らせの最終更新 2026-09-13）で確認"
 },
 {
  "id": "saitama-owl-raptorland-rala",
  "name": "Raptor Land（ふくろうカフェ RaLa）",
  "animals": [
   "owl"
  ],
  "prefecture": "埼玉県",
  "area": "草加",
  "address": "埼玉県草加市松原5-7-10",
  "access": "草加市松原（最寄り駅は公式ページに記載なし。専用駐車場2台）",
  "url": "https://rala-raptorland.com/",
  "price": "1時間1,400円（ドリンク込み）、3〜5歳700円、0〜2歳無料。えさやり体験は+500円",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入店19:00）",
  "closed": "木曜",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "写真OK",
   "ドリンク込み",
   "子ども可",
   "複数の動物"
  ],
  "description": "フクロウやタカなどの猛禽類を、腕に乗せたり撫でたりして楽しめるカフェ。スタッフが付き添うので、小さな子ども連れでも入りやすい。追加料金で小動物とのふれあいやえさやりもできる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://rala-raptorland.com/guide （料金）、トップページ（営業時間・定休日。お知らせ最新 2026-10-30）で確認。予約の要否は公式に記載がなく、推奨とした"
 },
 {
  "id": "toyama-owl-aqua-forest-mizunomori",
  "name": "ふくろうカフェ富山 アクアフォレスト水の森",
  "animals": [
   "owl"
  ],
  "prefecture": "富山県",
  "area": "高岡",
  "address": "富山県高岡市木津991-5",
  "access": "高岡市木津（最寄り駅は公式ページに記載なし。地図の誤表示があるため、カーナビには住所を入力するよう公式が案内）",
  "url": "https://www.2960toyama.com/",
  "price": "大人2,000円（ドリンク1杯付き）、小学生以下1,500円、3歳以下無料",
  "price_level": 2,
  "hours": "ふれあいは1時間の入替制（土日祝 14:30〜・16:00〜／平日 14:45〜、木曜は15:00〜）。限定営業中",
  "closed": "火・水（臨時休業あり）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "ドリンク込み",
   "子ども可",
   "写真OK"
  ],
  "description": "ベンガルワシミミズクやメンフクロウなどが暮らす、富山県で数少ないフクロウカフェ。大きな水槽のある店内で、決まった時間の入替制でふれあう。時間が限られるので、来店前に予約の電話かフォームを使いたい。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://www.2960toyama.com/ （料金・時間・定休日。11月の営業予定が掲載）で確認。予約は電話・フォームで受付と案内、必須かは記載なし"
 },
 {
  "id": "ibaraki-owl-fukurou-no-ie",
  "name": "ふくろうの家（House of Owl）",
  "animals": [
   "owl"
  ],
  "prefecture": "茨城県",
  "area": "つくば",
  "address": "茨城県つくば市館野459-2",
  "access": "JR土浦駅西口から関東鉄道バス「館野」下車（つくばエクスプレス みどりの駅からもバスあり）。無料駐車場7台",
  "url": "https://houseofowl.stars.ne.jp/",
  "price": "60分1,200円（中学生以上）・800円（歩ける子ども）、90分1,500円・1,000円",
  "price_level": 2,
  "hours": "受付12:00〜16:00（土日祝のみ営業）",
  "closed": "平日（土日祝のみ営業）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "子ども可",
   "貸切可",
   "ドリンク込み"
  ],
  "description": "店では27羽ほどのフクロウを飼っていて、メンフクロウやワシミミズクなどに会える。営業は土日祝のみで、店内は同時に8名までなので、公式サイトのネット予約を使うと安心。貸切プランもある。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://houseofowl.stars.ne.jp/ および /access で確認（ブログ最新 2026-10-02）。予約は公式のネット予約があるが必須とは書かれておらず、推奨とした"
 },
 {
  "id": "saitama-owl-fukaya-kacho-cafe",
  "name": "深谷花鳥カフェ",
  "animals": [
   "owl",
   "bird"
  ],
  "prefecture": "埼玉県",
  "area": "深谷",
  "address": "埼玉県深谷市永田442-1",
  "access": "秩父鉄道 ふかや花園駅から徒歩15分。店舗横に駐車場",
  "url": "https://fukayakachocafe.com/",
  "price": "入店料 大人1,500円（中学生以上）・小人700円（小学生以下）、3歳以下無料。フクロウ・タカの腕のせ1回300円",
  "price_level": 2,
  "hours": "10:00〜17:00（最終受付16:30）",
  "closed": "木曜",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "子ども可",
   "複数の動物"
  ],
  "description": "フクロウやタカなどの猛禽類を眺めたり、腕に乗せたりできる、広めの敷地のカフェ。猛禽類のフライトショーが1日2回あるほか、アヒルやインコ、ペンギンのえさやりもできる。子どもだけの入場はできず、保護者同伴になる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://fukayakachocafe.com/price.html （料金・イベント。サイト更新 2026-07）と公式X @FukayaKachoCafe のプロフィール（営業時間・定休日）で確認。予約の要否は記載なし"
 },
 {
  "id": "tokyo-owl-mohumohu-ginza",
  "name": "フクロウカフェ もふもふ 銀座店",
  "animals": [
   "owl"
  ],
  "prefecture": "東京都",
  "area": "銀座",
  "address": "東京都中央区銀座6-9-16 ロシュビル4F",
  "access": "東京メトロ銀座駅から徒歩1分（公式Instagramの案内）",
  "url": "http://mohumohu77.jp/",
  "price": "1時間 平日2,000円＋税／土日祝2,200円＋税（現金のみ）。えさやり体験+300円",
  "price_level": 3,
  "hours": "12:00〜最大20:00（曜日により異なる。公式はGoogleマップでの確認を案内）",
  "closed": "不定休（営業日は公式の案内を確認）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "駅近",
   "貸切可"
  ],
  "description": "少人数・1時間入替制で、ブリーディングされた人に慣れたフクロウとふれあえる店。カフェというより小さなふれあい施設で、飲み物は限られる。予約が優先されるので、日時が決まっているなら先に予約したい。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 http://mohumohu77.jp/ （料金・システム）と公式Instagram（最終投稿 2026-11-05）で確認。住所は掲載サイトの情報で補った"
 },
 {
  "id": "yamaguchi-owl-owl-no-shiro",
  "name": "フクロウカフェ アウルの城",
  "animals": [
   "owl"
  ],
  "prefecture": "山口県",
  "area": "宇部",
  "address": "山口県宇部市則貞6丁目4-5",
  "access": "宇部市則貞（最寄り駅は公式ページに記載なし。一軒家で駐車スペースに限りあり）",
  "url": "https://ubeowl.jimdofree.com/",
  "price": "ふれあい1,500円（60分入替制）。毎月29日は1,300円",
  "price_level": 2,
  "hours": "11:00〜17:00（ふれあいは前日までの予約制）",
  "closed": "水曜（予約のない日は休み）",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "予約制",
   "えさやり体験"
  ],
  "description": "2025年7月に宇部市内で移転リニューアルした、山口県唯一のフクロウカフェ。ふれあいは4歳から、60分の入替制で、前日までの電話予約が必要。天気がよければ公園での散歩も相談できる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://ubeowl.jimdofree.com/ 、/ふれあいシステム/ （料金・予約）、公式Instagram @owlnosiro（最終投稿 2026-11-05）で確認"
 },
 {
  "id": "osaka-owl-raptorland-shovel-namba",
  "name": "猛禽類カフェ raptorland Shovel（ラプターランド シャベル）",
  "animals": [
   "owl",
   "bird"
  ],
  "prefecture": "大阪府",
  "area": "難波",
  "address": "大阪府大阪市浪速区幸町1-1-10 リバーサイド難波105号",
  "access": "地下鉄四ツ橋線「なんば」駅26-B出口から徒歩3分",
  "url": "https://www.raptorland-shovel.com/",
  "price": "お一人様2,000円〜（時間制限なし。腕乗せ・おやつ・ゼロ距離体験など5種から1つ選択込み）、ドリンク別途400円〜",
  "price_level": 3,
  "hours": "2026年11月：平日12:00〜17:00／土日祝12:00〜18:00",
  "closed": "水曜・木曜（メンテナンス日。前日までの連絡で対応の場合あり）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "時間無制限プランあり",
   "駅近",
   "子ども可",
   "貸切可",
   "写真OK"
  ],
  "description": "フクロウだけでなくハリスホークなどの猛禽類、大型インコがいる店。時間制限はなく、腕乗せやおやつ、ゼロ距離体験から選べる。キッズルームとおむつ交換台があり、子連れでも行きやすい。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://www.raptorland-shovel.com/about_cafe 、トップ（お知らせ 2026-09-24、営業時間は11月分）で確認。予約制ではない（予約のみの日はカレンダーに表示）"
 },
 {
  "id": "chiba-owl-fukurou-no-shiro-kimitsu",
  "name": "しあわせをよぶふくろうの城 君津店",
  "animals": [
   "owl"
  ],
  "prefecture": "千葉県",
  "area": "君津",
  "address": "千葉県君津市山本549",
  "access": "公式ページに記載なし（来店前に確認を）",
  "url": "https://fukurounoshiro.info/cafe/",
  "price": "入場1時間制 大人（中学生以上）1,100円／小学生770円／未就学児550円（3歳以下無料）、帰りにドリンク付き",
  "price_level": 2,
  "hours": "11:00〜17:00（2026年11月は祝日を除く月・木・金はふれあい休み、その他の日は11:00〜16:00・最終受付15:00の時短）",
  "closed": "なし（突発的な休みは公式ブログ等で案内。11月は月・木・金のふれあい休みあり）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "ドリンク込み",
   "子ども可"
  ],
  "description": "人に慣れたフクロウと過ごせる店で、写真を撮ったり、腕に乗せたりできる。フクロウの販売も行っている。月によって営業日が変わるので、公式のお知らせを見てから行きたい。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://fukurounoshiro.info/cafe/ 、お知らせ https://fukurounoshiro.info/information/detail.php?seq=1517 （2026-10-30）、公式ブログ（2026-11-03）で確認。予約の要否は公式に記載なし"
 },
 {
  "id": "shizuoka-owl-fukumori",
  "name": "ふくもり（ぬくもりの森内）",
  "animals": [
   "owl",
   "smallanimal"
  ],
  "prefecture": "静岡県",
  "area": "浜松・舘山寺",
  "address": "静岡県浜松市西区和地町4765-1（ぬくもりの森内）",
  "access": "遠鉄バス「すじかいばし」下車徒歩5分（JR浜松駅北口から約40分）",
  "url": "https://www.nukumori.jp/shops/%e3%81%b5%e3%81%8f%e3%82%82%e3%82%8a",
  "price": "入場料1人1,100円（5歳以上）",
  "price_level": 2,
  "hours": "土日祝10:00〜17:00（最終入場16:30）／平日11:00〜16:00（最終入場15:30）",
  "closed": "木曜・第2水曜",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "写真OK",
   "複数の動物"
  ],
  "description": "フクロウとチンチラに触れられる、浜松市の施設ぬくもりの森の中の小さな部屋だ。スタッフの補助のもとで安全に触れ、写真や動画も撮れる。入場料を払えば時間を気にせず過ごせる。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式 https://www.nukumori.jp/shops/ふくもり（ショップ情報）・アクセスページで確認。予約の案内は記載なし。動物の体調で営業時間が変わる旨の記載あり"
 },
 {
  "id": "aichi-owl-fukashigi-ichinomiya",
  "name": "アニマルカフェ不可思議",
  "animals": [
   "owl",
   "capybara",
   "reptile",
   "smallanimal",
   "farm",
   "other"
  ],
  "prefecture": "愛知県",
  "area": "一宮",
  "address": "愛知県一宮市大和町戸塚字宮崎西17-3",
  "access": "県道65号沿い。駐車場6台（最寄駅は公式ページに記載なし）",
  "url": "https://fukashigi.net/",
  "price": "入場1時間 1,800円〜（税込・ドリンク付き）。延長30分500円、エサ100〜300円",
  "price_level": 2,
  "hours": "平日13:00〜17:00／土曜・祝日11:00〜17:00（最終入店16:30）",
  "closed": "金曜・日曜",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "ドリンク込み",
   "子ども可",
   "写真OK",
   "複数の動物"
  ],
  "description": "フクロウ、カピバラ、ナマケモノ、キンカジュー、ミーアキャット、トカラヤギ、ミニブタ、爬虫類などを素手で触れる、田畑に囲まれた一軒家の動物カフェ。1時間ドリンク付きの分かりやすい料金で、エサやりもできる。土曜はケープペンギンの散歩体験（1組1,000円）が出ることがある。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式サイト https://fukashigi.net/menu/ と /shop/ /message/ で確認（お知らせ最終2026-04-01、動物取扱業の更新は令和8年9月）。予約は可だが飛び込みも可と公式FAQに記載。公式内に入場料1,400円の古い記載が残るが、料金ページの1,800円〜を採用。"
 },
 {
  "id": "osaka-hedgehog-harrywood-namba",
  "name": "ハリネズミ専門Cafe HARRY WOOD（ハリーウッド）なんば店",
  "animals": [
   "hedgehog"
  ],
  "prefecture": "大阪府",
  "area": "なんば・千日前",
  "address": "大阪府大阪市中央区千日前2丁目8-4 きよ美ビル3F",
  "access": "地下鉄なんば駅から徒歩6分（千日前商店街の通りを入る）",
  "url": "http://www.cafeharrywood.com/namba/",
  "price": "入場30分1,400円／1時間1,980円（大人）。3歳以下無料",
  "price_level": 2,
  "hours": "11:00〜20:00",
  "closed": "1月1日を除き無休",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "写真OK",
   "子ども可"
  ],
  "description": "ハリネズミ専門のカフェで、ふれあい、おやつやり、撮影など過ごし方は自由。小学生以下は保護者同伴で、予約すると待たずに入りやすい。2026年11月から料金改定が入っている。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "料金・営業時間・アクセス http://www.cafeharrywood.com/namba/ 、価格改定告知 http://www.cafeharrywood.com/namba/news-detail.php?id=15 で確認（総合トップの時間表記とは差があり、店舗ページの11:00〜20:00を採用）"
 },
 {
  "id": "aichi-hedgehog-harrywood-sakae",
  "name": "ハリネズミ専門Cafe HARRY WOOD（ハリーウッド）名古屋栄店",
  "animals": [
   "hedgehog"
  ],
  "prefecture": "愛知県",
  "area": "栄",
  "address": "愛知県名古屋市中区栄3-13-1 南呉服町ビル3F",
  "access": "地下鉄栄駅8番出口から徒歩7分",
  "url": "http://www.cafeharrywood.com/sakae/",
  "price": "入場30分1,400円／1時間2,000円（大人）、高校生以下は1時間1,400円",
  "price_level": 2,
  "hours": "平日13:00〜18:00／土日祝11:00〜18:00（11月は変動の告知あり）",
  "closed": "年末年始を除き無休",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "写真OK",
   "子ども可"
  ],
  "description": "名古屋の栄にあるハリネズミ専門カフェ。中学生以上2名につきハリネズミ1匹を案内する方式で、落ち着いて触れ合える。1時間の予約でガチャガチャとステッカーの特典が付く。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "料金・営業時間・住所 http://www.cafeharrywood.com/sakae/ で確認（総合トップ http://www.cafeharrywood.com/ の営業時間表記とは異なるため店舗ページを採用）"
 },
 {
  "id": "tokyo-hedgehog-harry-harajuku-station",
  "name": "HARRY 原宿駅前店（ハリネズミカフェ）",
  "animals": [
   "hedgehog",
   "smallanimal",
   "other",
   "owl"
  ],
  "prefecture": "東京都",
  "area": "原宿",
  "address": "東京都渋谷区神宮前1-13-21 シャンゼール原宿2号館4F",
  "access": "JR原宿駅から徒歩1分",
  "url": "https://harinezumi-cafe.com/store/harajuku/",
  "price": "大人45分2,310円〜／小人2,090円〜",
  "price_level": 3,
  "hours": "11:00〜19:00（ラストオーダー18:30）",
  "closed": "無休（11/24〜11/30はリニューアル工事のため臨時休業）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "駅近",
   "子ども可",
   "複数の動物",
   "写真OK"
  ],
  "description": "ハリネズミを中心に、ハムスター、ミーアキャット、フクロウ、モルモットにも会える駅前の店舗。予約なしでも入れるが混雑時は待つので、予約が安心。気に入った子をお迎えすることもできる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "https://harinezumi-cafe.com/store/harajuku/ と https://harinezumi-cafe.com/news/ で営業時間・料金・工事告知（2026.11.03）を確認"
 },
 {
  "id": "kanagawa-hedgehog-harry-yokohama-chukagai",
  "name": "HARRY 横浜中華街店（ハリネズミカフェ）",
  "animals": [
   "hedgehog",
   "other"
  ],
  "prefecture": "神奈川県",
  "area": "横浜中華街",
  "address": "神奈川県横浜市中区山下町103-3 M'sPort 2F",
  "access": "横浜中華街エリア",
  "url": "https://harinezumi-cafe.com/store/yokohama-chukagai/",
  "price": "大人45分2,090円〜／子供1,650円〜",
  "price_level": 3,
  "hours": "平日12:00〜18:00／土日祝11:00〜18:00（ラストオーダー17:30）",
  "closed": "無休",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "写真OK",
   "子ども可",
   "複数の動物"
  ],
  "description": "中華街の散策ついでに寄れる、ハリネズミとフェネックなどに会える店舗。小学生までは保護者同伴で、3歳以下は予約不可なので直接来店する。観光と合わせたい人向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "https://harinezumi-cafe.com/store/yokohama-chukagai/ と 店舗ルール https://harinezumi-cafe.com/ で確認"
 },
 {
  "id": "tokyo-hedgehog-chikuchiku-cafe-shibuya",
  "name": "ハリネズミ専門カフェ ちくちくCAFE",
  "animals": [
   "hedgehog"
  ],
  "prefecture": "東京都",
  "area": "渋谷",
  "address": "東京都渋谷区渋谷1-13-5 大協渋谷ビル2F",
  "access": "渋谷駅から徒歩2分（宮益坂）",
  "url": "https://hedgehoghome.cafe/",
  "price": "30分1,430円／60分2,640円（税込）。おやつ440円",
  "price_level": 3,
  "hours": "11:00〜18:00（カフェの受付は17:30まで）",
  "closed": "公式に定休日の記載なし（NEWSで告知）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "駅近",
   "貸切可",
   "子ども可",
   "写真OK"
  ],
  "description": "キッチンやベッドルームなど、ドールハウス風の部屋で暮らすハリネズミたちに会えるカフェ。手に乗せたりおやつをあげたりでき、60分は入れ替え制の予約、30分は当日受付のみ。貸切プランもある。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "https://hedgehoghome.cafe/ で住所・料金・営業時間を確認（2026.08.05 お知らせ更新あり）"
 },
 {
  "id": "tokyo-hedgehog-potta-iidabashi",
  "name": "はりねずみ屋ぽった",
  "animals": [
   "hedgehog"
  ],
  "prefecture": "東京都",
  "area": "飯田橋・神楽坂",
  "address": "東京都千代田区飯田橋1丁目11-4 Potta店内2F",
  "access": "東京メトロ飯田橋駅A5番出口から徒歩3分",
  "url": "https://pottachick.jimdofree.com/",
  "price": "30分 大人1,900円／4歳〜小学生1,400円（ワンドリンク付き）。延長15分ごとに500円、3歳以下無料",
  "price_level": 3,
  "hours": "土日 14:00〜19:00／月・金・木は夜営業（曜日と時間は変動。公式の営業スケジュールで確認を）",
  "closed": "火曜・水曜",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "ドリンク込み",
   "子ども可",
   "貸切可",
   "駅近"
  ],
  "description": "1階がカフェ＆バー、2階がハリネズミとのふれあいスペースになっている店。土日と木曜は予約なしで入れ、月・金は当日16時までの連絡が必要。ドリンク付きの30分制で、自家繁殖の子ハリも見られる。同時に案内するのは3組までで、静かに触れ合いたい人向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "https://pottachick.jimdofree.com/ （営業案内・住所・アクセス）と料金表 https://pottachick.jimdofree.com/%E3%81%B5%E3%82%8C%E3%81%82%E3%81%84%E4%BD%93%E9%A8%93/%E6%96%99%E9%87%91%E8%A1%A8/ で確認。2026年のシルバーウィーク営業告知あり"
 },
 {
  "id": "tokyo-hedgehog-haripara-akihabara",
  "name": "ハリネズミパラダイス 秋葉原店",
  "animals": [
   "hedgehog"
  ],
  "prefecture": "東京都",
  "area": "秋葉原",
  "address": "東京都千代田区外神田4-4-10 Mビル秋葉原2",
  "access": "秋葉原駅から徒歩3分",
  "url": "http://hari-para.com/",
  "price": "チャージ10分220円＋フリードリンク385円（税込）",
  "price_level": 2,
  "hours": "平日11:00〜20:00（L.O.19:30）／土日祝10:00〜20:00（L.O.19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "ドリンク込み"
  ],
  "description": "ハリネズミとふれあえるペットカフェで、店名のとおり「ハリネズミのいるカフェ」としてコーヒーやドリンクにも力を入れている。秋葉原駅から歩ける立地で、買い物のついでに寄りやすい。チャージは10分単位の時間制で、Wi-Fiと充電が自由に使える。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 http://hari-para.com/ （PRICE・店舗情報。ページ更新は2024-05）で確認。運営会社 https://www.pet-coo.com/88957-2/ （最新ニュース 2026-10-31）が現行の店として掲載。予約の要否は公式に記載なし"
 },
 {
  "id": "tokyo-hedgehog-haripara-asakusa",
  "name": "ハリネズミパラダイス 浅草店",
  "animals": [
   "hedgehog"
  ],
  "prefecture": "東京都",
  "area": "浅草",
  "address": "東京都台東区浅草1-23-7 浅草一丁目ビル",
  "access": "TX浅草駅から徒歩3分",
  "url": "http://hari-para.com/",
  "price": "チャージ10分330円＋フリードリンク385円（税込）",
  "price_level": 3,
  "hours": "全日11:00〜20:00（L.O.19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "ドリンク込み"
  ],
  "description": "ハリネズミとふれあえるペットカフェで、店名のとおり「ハリネズミのいるカフェ」としてコーヒーやドリンクにも力を入れている。浅草観光のあとに立ち寄れる場所にある。チャージは10分単位の時間制で、Wi-Fiと充電が自由に使える。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 http://hari-para.com/ （PRICE・店舗情報。ページ更新は2024-05）で確認。運営会社 https://www.pet-coo.com/88957-2/ （最新ニュース 2026-10-31）が現行の店として掲載。予約の要否は公式に記載なし"
 },
 {
  "id": "kanagawa-hedgehog-haripara-enoshima",
  "name": "ハリネズミパラダイス 江の島店",
  "animals": [
   "hedgehog"
  ],
  "prefecture": "神奈川県",
  "area": "江の島・片瀬",
  "address": "神奈川県藤沢市片瀬海岸3-22-17",
  "access": "片瀬江ノ島駅から徒歩7分",
  "url": "http://hari-para.com/",
  "price": "チャージ10分220円＋1オーダー制（ドリンク418円〜、税込）",
  "price_level": 2,
  "hours": "平日11:00〜20:00（L.O.19:30）／土日祝10:00〜20:00（L.O.19:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK"
  ],
  "description": "ハリネズミとふれあえるペットカフェで、店名のとおり「ハリネズミのいるカフェ」としてコーヒーやドリンクにも力を入れている。猫喫茶 空陸家plus 江の島店と同じ建物にあり、江の島観光の合間に寄れる。チャージは10分単位の時間制で、Wi-Fiと充電が自由に使える。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 http://hari-para.com/ （PRICE・店舗情報。ページ更新は2024-05）で確認。運営会社 https://www.pet-coo.com/88957-2/ （最新ニュース 2026-10-31）が現行の店として掲載。予約の要否は公式に記載なし／検品⑥（2026-11-07）空陸家plus 江の島店と同じ建物のため説明文に併記"
 },
 {
  "id": "tokyo-bird-toricafe-sendagi",
  "name": "鳥のいるカフェ 千駄木店",
  "animals": [
   "bird"
  ],
  "prefecture": "東京都",
  "area": "千駄木・谷中",
  "address": "東京都文京区千駄木3-42-16-1F",
  "access": "東京メトロ千代田線 千駄木駅から徒歩3分／JR日暮里駅から徒歩約7分",
  "url": "https://toricafe.co.jp/sendagi",
  "price": "入場料2,200円（先払い・3歳まで無料）",
  "price_level": 3,
  "hours": "11:00〜19:00",
  "closed": "無休",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "子ども可",
   "駅近"
  ],
  "description": "インコやオウムなど100羽以上が暮らす、放鳥エリアで遊べるふれあい型の店。飲食スペースのある普通のカフェではない点に注意。基本1時間制だが、空いていればフリータイムになる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "https://toricafe.co.jp/sendagi/system と /sendagi/access で料金・営業時間・住所を確認（予約案内ページあり）"
 },
 {
  "id": "osaka-bird-oasis-higashishinsaibashi",
  "name": "バードカフェ オアシス",
  "animals": [
   "bird"
  ],
  "prefecture": "大阪府",
  "area": "東心斎橋",
  "address": "大阪府大阪市中央区東心斎橋1丁目6番9号 アモールしまのうち2階",
  "access": "地下鉄 長堀橋駅から徒歩3分／心斎橋駅から徒歩7分",
  "url": "https://birdcafe-oasis.com/",
  "price": "60分1,700円（フリードリンク付）。30分1,400円〜150分3,200円",
  "price_level": 2,
  "hours": "13:00〜17:00（最終入店16:30）",
  "closed": "火・水曜",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "ドリンク込み",
   "えさやり体験",
   "子ども可",
   "駅近"
  ],
  "description": "鳥が飛び回る部屋で自由にふれあえる、ふれあい重視の鳥カフェ。おやつは無料で、おしゃべり上手なオウムや肩に乗ってくるインコがいる。短時間でも長居でも選べる時間制。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "https://birdcafe-oasis.com/oasis/ で料金（2024年1月〜）・営業時間、/access/ で住所・アクセスを確認。予約の要否は公式に記載なしのため「推奨」とした（要再確認）"
 },
 {
  "id": "osaka-bird-kotorismile",
  "name": "ことりすまいる",
  "animals": [
   "bird"
  ],
  "prefecture": "大阪府",
  "area": "南船場",
  "address": "大阪府大阪市中央区南船場4-14-1 南船場BRICK 3F",
  "access": "心斎橋駅から徒歩約8分",
  "url": "https://www.kotorismile.com/",
  "price": "ふれあい体験15分550円。カフェのドリンクは880円〜",
  "price_level": 2,
  "hours": "11:00〜19:00（ラストオーダー18:30）",
  "closed": "定休日なし（不定休日あり）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "子ども可",
   "写真OK"
  ],
  "description": "小鳥を眺めながらスイーツやお茶を楽しむコンセプトカフェで、有料のふれあいルームもある。セキセイインコやオカメインコから大型のオウムまでいて、期間限定メニューが定期的に変わる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "https://www.kotorismile.com/ と /experience で料金・予約方法を確認。営業時間と定休日は https://kdup300.gorp.jp/ の店舗情報（公式サイトから案内されているページではないため要再確認）と いこーよニュース https://report.iko-yo.net/articles/25831 を参照"
 },
 {
  "id": "tokyo-bird-kotoricafe-ueno",
  "name": "ことりカフェ上野本店",
  "animals": [
   "bird"
  ],
  "prefecture": "東京都",
  "area": "上野桜木・谷中",
  "address": "東京都台東区上野桜木1-8-6",
  "access": "東京メトロ千代田線 根津駅から徒歩約8分",
  "url": "http://ueno.kotoricafe.jp/",
  "price": "ふれあい体験5分550円（2名まで）。ドリンク770円〜、ドーナツセット1,540円〜",
  "price_level": 2,
  "hours": "11:00〜18:00（ふれあい体験の受付は16時まで）",
  "closed": "不定休（11月は4・10・17・24日、12月は1・8・15・31日）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "写真OK"
  ],
  "description": "インコや文鳥を眺めながら、小鳥モチーフのスイーツとお茶を楽しむカフェで、有料のふれあい部屋もある。ホームページから予約でき、混雑時は1時間制になる。鳥グッズの売り場も併設。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "http://ueno.kotoricafe.jp/ で料金・営業時間・定休日・予約を確認、運営サイト https://kotoricafe.jp/ のニュース（2026.11.05）も確認"
 },
 {
  "id": "yamaguchi-bird-flap-bird",
  "name": "Flap-bird（鳥カフェ）",
  "animals": [
   "bird"
  ],
  "prefecture": "山口県",
  "area": "岩国・周東",
  "address": "山口県岩国市周東町西長野266-1 2F",
  "access": "周防高森駅から徒歩15分／玖珂ICから車10分。駐車場あり",
  "url": "https://flap-bird.jp/",
  "price": "40分1,200円（フリードリンク付。小学生まで800円）。ガラス越しのみなら40分500円",
  "price_level": 2,
  "hours": "12:00〜18:00",
  "closed": "月曜・年末年始（鳥カフェは木曜も休み）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "ドリンク込み",
   "子ども可"
  ],
  "description": "インコやオウムの専門店に併設された、ふれあいが主役の鳥カフェ。専用ルームで中型から大型の鳥と触れ合え、1日5組までの予約優先。カフェはおまけ程度で、鳥好き向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "https://flap-bird.jp/birdcafe/ で料金・予約方法、トップ https://flap-bird.jp/ で営業時間・住所・最新お知らせ（2026.11.05更新）を確認"
 },
 {
  "id": "shizuoka-bird-mofumofu-happy",
  "name": "もふもふ 羽っぴー",
  "animals": [
   "bird"
  ],
  "prefecture": "静岡県",
  "area": "浜松・舘山寺",
  "address": "静岡県浜松市中央区舘山寺町2309-1",
  "access": "最寄り駅は浜松駅、最寄りバス停は「舘山寺温泉前」",
  "url": "https://happybird.crayonsite.net/",
  "price": "もふもふエリア15分600円（小人300円）／30分900円／45分1,100円。もふもふ＆カフェ60分1,200円＋ドリンク代",
  "price_level": 2,
  "hours": "9:00〜18:00（平日は17:00までの案内あり）",
  "closed": "不定休（来店前に電話かInstagramで確認を）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "子ども可"
  ],
  "description": "舘山寺温泉の門前通りにあるコンパニオンバードのカフェで、ルリコンゴウやコザクラ、オカメ、モモイロなどのインコ・オウムと触れ合える。ホットサンドやパスタなどの軽食があり、お弁当の持ち込みもできる。観光の合間に寄りたい人向けで、子どもだけの入店は不可。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "https://happybird.crayonsite.net/ で料金・営業時間・住所・定休日を確認（動物取扱業登録は令和11年まで有効）。予約の要否は公式に記載がなく、営業日が不定休のため「推奨」とした"
 },
 {
  "id": "akita-bird-fureai-torikago",
  "name": "cafe ふれあい torikago",
  "animals": [
   "bird",
   "owl"
  ],
  "prefecture": "秋田県",
  "area": "小坂町",
  "address": "秋田県鹿角郡小坂町荒谷字妻ノ神5-2",
  "access": "秋田県小坂町内（店舗裏手に駐車場あり）",
  "url": "https://torikago.shopinfo.jp/",
  "price": "大人1,600円（平日1,500円）、13〜17歳1,100円（平日1,000円）、4〜12歳900円。いずれもワンドリンク付き",
  "price_level": 2,
  "hours": "4〜9月 11:00〜18:00／10〜3月 12:00〜17:00（ラストオーダーは閉店1時間前）",
  "closed": "水曜（祝日は営業する日あり。諸事情で休む日も多いので電話で確認を）",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "ドリンク込み",
   "子ども可",
   "予約制",
   "複数の動物"
  ],
  "description": "フクロウとインコ類に触れ合える、定員12名の小さなカフェ。大きなフクロウの部屋があり、鳥にも人にも優しい店を目指しているという。2026年1月から予約制で、飲食だけの利用でも予約が必要。子どもだけの来店は不可。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "料金・定休日・営業時間 https://torikago.shopinfo.jp/pages/1153499/profile 、お知らせ（2026年1月から予約制、2026/8/18価格改定、2026/9/13の記事あり）https://torikago.shopinfo.jp/pages/1347596/page_201710151311 で確認。最寄り駅の記載なし"
 },
 {
  "id": "saitama-bird-parrot-freak",
  "name": "オウムのカフェ FREAK",
  "animals": [
   "bird"
  ],
  "prefecture": "埼玉県",
  "area": "川口・東川口",
  "address": "埼玉県川口市戸塚2-26-18 103",
  "access": "JR武蔵野線・埼玉高速鉄道 東川口駅南口から徒歩4分",
  "url": "https://www.parrot-freak.com/",
  "price": "ふれあい 5分400円／10分650円、ドリンク650円〜（税込）",
  "price_level": 2,
  "hours": "12:00〜18:00",
  "closed": "火・水・木（祝日は営業）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "写真OK",
   "駅近",
   "子ども可"
  ],
  "description": "中型から大型のインコやオウムが中心の鳥カフェ。飲み物を頼んで鳥を眺めるほか、別料金で5分または10分のふれあいができ、腕に乗せてもらえる。中学生未満は保護者同伴で、フラッシュ撮影は不可。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://www.parrot-freak.com/menu/ ・/concept/ ・/shop/ で確認（お知らせ最新 2026-10-31）。予約の要否は公式に記載なし"
 },
 {
  "id": "aichi-bird-torikoya",
  "name": "鳥茶かふぇ TORIKOYA",
  "animals": [
   "bird"
  ],
  "prefecture": "愛知県",
  "area": "豊田",
  "address": "愛知県豊田市住吉町前邸10",
  "access": "豊田市住吉町（最寄り駅は公式ページに記載なし。店舗前に駐車場）",
  "url": "http://torikoya.net/",
  "price": "30分1,100円／1時間1,300円／フリータイム1,700円（延長30分500円）",
  "price_level": 2,
  "hours": "13:00〜18:00（4〜9月）／13:00〜17:30（10〜3月）",
  "closed": "火・金・祝日（臨時休業あり。公式ブログで案内）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "貸切可",
   "時間無制限プランあり",
   "子ども可"
  ],
  "description": "鳥を眺めながらお茶ができ、食事のあとに鳥とのふれあいもできるカフェ。小さなスペースで鳥の販売も行っている。来店前に一度連絡してほしいと公式が案内しており、臨時休業も多めなのでブログの確認が安心。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 http://torikoya.net/menu ・/store で確認（お知らせ最新 2026-10-26）。予約制ではなく来店前の連絡を案内、推奨とした"
 },
 {
  "id": "niigata-bird-torinchi",
  "name": "バードカフェ とりん家",
  "animals": [
   "bird"
  ],
  "prefecture": "新潟県",
  "area": "新潟市西区・寺尾",
  "address": "新潟県新潟市西区寺尾上3丁目2-2",
  "access": "JR寺尾駅の近く",
  "url": "https://torinti.amebaownd.com/",
  "price": "ふれあい30分500円（10分200円コースも）、ドリンク440円〜",
  "price_level": 1,
  "hours": "11:30〜17:00",
  "closed": "不定休（公式サイトに月ごとの休業日を掲載）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "子ども可"
  ],
  "description": "ガラス越しに小鳥を眺めながら、自家焙煎のコーヒーやケーキを楽しめる、新潟初のバードカフェ。別室のふれあいコーナーでは人に慣れたインコと遊べ、おやつやりもできる。小学生未満は保護者同伴。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://torinti.amebaownd.com/ （料金・時間）と公式Instagram @birdcafe.torinchi（最終投稿 2026-11-05）で確認。予約の要否は記載なし。最寄り駅は掲載サイトの情報"
 },
 {
  "id": "kanagawa-bird-chorakuen",
  "name": "鳥の遊び場 鳥楽園",
  "animals": [
   "bird"
  ],
  "prefecture": "神奈川県",
  "area": "茅ヶ崎",
  "address": "神奈川県茅ヶ崎市浜之郷551-1",
  "access": "茅ヶ崎市浜之郷（最寄り駅は公式ページに記載なし。無料駐車場6台）",
  "url": "https://www.chorakuen.com/",
  "price": "1時間 大人1,100円・小学生以下550円、延長30分550円、フリータイム2,200円",
  "price_level": 2,
  "hours": "水・金 13:00〜17:00／土日 13:00〜18:00／木曜は前日16時までの予約制（13:00〜17:00）",
  "closed": "月・火",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "時間無制限プランあり",
   "子ども可"
  ],
  "description": "放し飼いのインコたちと過ごせる、鳥の遊び場。1時間の入場料のみで鳥と存分にふれあえ、えさやりは100円。鳥が噛んだり服を傷つけたりすることがあるため、気をつけて過ごしたい。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://www.chorakuen.com/ （料金・時間。サイト表記は2023年）と公式Instagram @torino_asobiba（最終投稿 2026-10-31）で確認。3名以上や木曜は予約が必要と案内"
 },
 {
  "id": "aichi-reptile-oozoo-osu",
  "name": "大須モンスター/OOZOO",
  "animals": [
   "reptile"
  ],
  "prefecture": "愛知県",
  "area": "大須",
  "address": "愛知県名古屋市中区大須2丁目30-14 櫻井ビル 3階",
  "access": "大須エリア",
  "url": "https://oozoo.zooai.co.jp/",
  "price": "30分1,500円／60分2,500円／平日限定フリータイム2,500円（土日祝は30分500円で延長）",
  "price_level": 3,
  "hours": "平日13:00〜20:00、土日祝11:30〜20:00（受付終了は案内により18:00〜19:00と記載差あり）",
  "closed": "公式に定休日の明記なし（営業スケジュールはお知らせで案内）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "時間無制限プランあり"
  ],
  "description": "ヘビ、トカゲ、ヤモリなどを、スタッフの説明を受けながら手に乗せて楽しめる大須の爬虫類カフェ。時間制のほか平日はフリータイムもあり、じっくり付き合いたい人向き。電話かインスタのDMで予約でき、初めてでも安全な触り方を教えてもらえる。",
  "source_note": "トップ https://oozoo.zooai.co.jp/ 、ご利用案内 https://oozoo.zooai.co.jp/%e3%81%94%e5%88%a9%e7%94%a8%e6%a1%88%e5%86%85/ 、店舗情報 https://oozoo.zooai.co.jp/%e5%ba%97%e8%88%97%e6%83%85%e5%a0%b1/ で確認。予約要否の記載が「予約可」と「不要」で食い違うため推奨とした",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "kyoto-reptile-funny-creatures-forest-arashiyama",
  "name": "爬虫類カフェ Funny Creatures Forest（ふぁにくり）嵐山店",
  "animals": [
   "reptile"
  ],
  "prefecture": "京都府",
  "area": "嵐山・嵯峨",
  "address": "京都府京都市右京区嵯峨明星町18-4 ヴィラトリアン101",
  "access": "嵐電「車折神社駅」から徒歩5分",
  "url": "https://f-c-f-arashiyama.ocnk.me/",
  "price": "1時間＋1ドリンクで大人2,000円（小児1,500円／幼児1,000円、延長30分500円）",
  "price_level": 2,
  "hours": "10:00〜19:00",
  "closed": "不定休（公式サイト・SNSで案内）",
  "reservation": "推奨",
  "features": [
   "駅近",
   "ドリンク込み",
   "子ども可"
  ],
  "description": "トカゲやヤモリ、ヘビ、カエルなどの爬虫類・両生類を間近で眺めるカフェ。小学生未満から入れる子ども料金があり、家族連れでも使いやすい。嵐山観光の合間に寄れる場所にあり、予約フォームと空き状況カレンダーが用意されている。",
  "source_note": "料金・店舗情報 https://f-c-f-arashiyama.ocnk.me/info 、トップ https://f-c-f-arashiyama.ocnk.me/ で確認（直近の告知は2026年5〜6月）。ふれあいの範囲はページに記載なし",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "tokyo-reptile-hachucafe-kichijoji",
  "name": "はちゅカフェ",
  "animals": [
   "reptile"
  ],
  "prefecture": "東京都",
  "area": "吉祥寺",
  "address": "東京都武蔵野市吉祥寺本町4-6-3 starlight,starbright Bldg. 2F-B",
  "access": "吉祥寺駅から徒歩8分ほど（掲載サイトの目安）",
  "url": "https://turboreptiles.co.jp/",
  "price": "席料880円（小学生まで660円）＋ふれあい1匹660円、ドリンク550円〜",
  "price_level": 2,
  "hours": "12:00〜20:00",
  "closed": "不定休（公式スケジュールで確認。貸切日あり）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "えさやり体験"
  ],
  "description": "イグアナ、カメレオン、フトアゴヒゲトカゲ、ヘビ、リクガメなどを「キャスト」として連れてきてもらい、膝や腕に乗せて過ごせる吉祥寺の爬虫類カフェ。ふれあいは1匹ずつ追加する仕組みで、ペースを選びやすい。予約は電話のみ。",
  "source_note": "公式 https://turboreptiles.co.jp/ で確認。税込・税別の表記がページ内で混在、徒歩分数は公式に記載なしのため外部掲載の目安",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "fukuoka-reptile-chorochoro-kokura",
  "name": "れぷたいるずかふぇ ちょろちょろ",
  "animals": [
   "reptile",
   "smallanimal"
  ],
  "prefecture": "福岡県",
  "area": "北九州・小倉",
  "address": "福岡県北九州市小倉北区砂津1丁目9-1 A2ビル2階",
  "access": "JR小倉駅から徒歩15分、西鉄バス砂津から徒歩5分",
  "url": "https://reptilescafe-chorochoro.com/",
  "price": "1時間1,500円（ワンドリンク込み、小学生以下1,200円）、以降30分ごとに750円",
  "price_level": 2,
  "hours": "平日11:00〜20:00（ふれあいカフェは19:00まで）、休日11:00〜18:00（同17:00まで）",
  "closed": "月曜・木曜",
  "reservation": "推奨",
  "features": [
   "ドリンク込み",
   "ふれあいOK",
   "子ども可",
   "複数の動物"
  ],
  "description": "レオパやフトアゴ、リクガメ、イグアナに加え、フェレットやモルモットとも過ごせる北九州の爬虫類ショップ併設カフェ。小学生以下の料金もあり子どもが一人では入れない代わりに家族で楽しみやすい。生体の販売も行っていて、飼い方を相談したい人にも合う。",
  "source_note": "公式 https://reptilescafe-chorochoro.com/ 、料金ページ https://reptilescafe-chorochoro.com/?page_id=11 で確認。本文の日付は2021〜2023年だが画像更新は2025年12月。臨時休業はSNSで案内とあり、予約の記載はないため推奨とした",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "tokyo-reptile-vespa-machida",
  "name": "Reptile Cafe Vespa（爬虫類カフェ ヴェスパ）",
  "animals": [
   "reptile"
  ],
  "prefecture": "東京都",
  "area": "町田",
  "address": "東京都町田市原町田2-3-4 サニーサイド町田1F",
  "access": "JR町田駅から徒歩約5分",
  "url": "https://reptilecafe-vespa.jp/",
  "price": "1時間1,650円（ドリンク1杯込み・ふれあいは1グループ3匹まで）",
  "price_level": 2,
  "hours": "平日13:00〜20:00／土日祝11:00〜18:00（最終入店は閉店1時間前）",
  "closed": "月曜（金曜に不定休あり。月ごとの営業予定は公式のお知らせで案内）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "ドリンク込み",
   "駅近",
   "子ども可"
  ],
  "description": "グリーンイグアナやフトアゴヒゲトカゲ、ヒョウモントカゲモドキ、各種のヘビなどを、ガラスケースに囲まれた店内で選んで触れる爬虫類カフェ。基本料金に3匹分のふれあいが含まれ、触り放題の追加プランもある。混雑時は入店できないことがあるため、事前に電話で確認すると安心。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "トップページ https://reptilecafe-vespa.jp/ で料金・営業時間・定休日・動物・注意事項を確認（お知らせは2026-10-27付の11月営業予定が最新）"
 },
 {
  "id": "tokyo-reptile-piccolo-zoo-asakusa",
  "name": "Piccolo Zoo（ピッコロズー）",
  "animals": [
   "reptile"
  ],
  "prefecture": "東京都",
  "area": "浅草",
  "address": "東京都台東区西浅草1-1-16 升宏ビル3階",
  "access": "浅草エリア（西浅草）",
  "url": "https://piccolozoo.biz/",
  "price": "入場1,500円（高校生以上）／1,200円（3歳以上）",
  "price_level": 2,
  "hours": "12:00〜20:00",
  "closed": "金曜（臨時休業は公式のお知らせで案内）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "抱っこOK",
   "子ども可",
   "写真OK"
  ],
  "description": "トカゲやヘビを中心に、プレーリードッグなどのエキゾチックアニマルとも触れ合える浅草のお店。入場料のみで入れて、平日は180分制と長めに過ごせる（土日祝は90分制）。動物と同じ目線で、低い姿勢で抱っこするのが決まり。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "システム案内 https://piccolozoo.biz/system/ 、コンセプト https://piccolozoo.biz/concept/ 、お知らせ https://piccolozoo.biz/news/2346/ （2026-09-02付）で確認。ネット予約窓口はあるが必須の記載なし。ドリンク付きかの記載なし"
 },
 {
  "id": "kanagawa-reptile-reptiles-resort-honmoku",
  "name": "レプタイルズリゾート",
  "animals": [
   "reptile"
  ],
  "prefecture": "神奈川県",
  "area": "横浜・本牧",
  "address": "神奈川県横浜市中区本牧原32-8-2",
  "access": "横浜市営バス「本牧原」バス停から徒歩約3分",
  "url": "https://reptiles-resort.com/",
  "price": "60分 大人2,200円・中学生未満1,600円（ドリンク無料）。えさやり込みのCコースは＋500円",
  "price_level": 3,
  "hours": "月ごとの営業カレンダーを公式サイトで案内（ふれあい最終受付は18:30）",
  "closed": "火曜（営業日に変える月あり）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "抱っこOK",
   "えさやり体験",
   "ドリンク込み",
   "子ども可",
   "写真OK"
  ],
  "description": "イグアナやオオトカゲ、カメ、大小のヘビ、カエルまで、数多くの生きものとふれあえる横浜の爬虫類カフェ。Cコースなら匹数の制限なくふれあえ、ヘビを腕や首に巻く体験や膝の上での抱っこもできる。土日祝は混むので予約がおすすめ。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "料金画像 https://reptiles-resort.com/料金/ 、アクセス https://reptiles-resort.com/access/ 、営業案内 https://reptiles-resort.com/information/ で確認（2026-11-04付の営業予定が最新）。予約は必須ではないと公式投稿に記載"
 },
 {
  "id": "tokyo-reptile-tokyo-snake-center-harajuku",
  "name": "東京スネークセンター（cafe & snake）",
  "animals": [
   "reptile"
  ],
  "prefecture": "東京都",
  "area": "原宿",
  "address": "東京都渋谷区神宮前6-5-6 サンポウ綜合ビル8F",
  "access": "明治通り沿い。1階カラオケ館の入口横のエレベーターで8階へ",
  "url": "https://snakecenter.jp/",
  "price": "入場1,980円（ドリンク付・時間制限なし）、ヘビとのふれあい2匹770円〜",
  "price_level": 2,
  "hours": "11:00〜20:00",
  "closed": "火曜（祝日の場合は営業）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "ドリンク込み",
   "時間無制限プランあり",
   "子ども可",
   "写真OK"
  ],
  "description": "ヘビ専門のカフェで、100匹以上のヘビがいるとされる。席にヘビのケースを持ってきてもらい、追加料金でふれあいやエサやり体験もできる。ヘビが好きな人にも、まず見てみたい人にも向く。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://snakecenter.jp/?page_id=231 （Cafe service：料金）、https://snakecenter.jp/?page_id=222 （住所・営業時間）で確認。予約の要否はQ&Aの本文が読めず、予約ページがあるため推奨とした"
 },
 {
  "id": "saitama-reptile-fukaya-reptile-house",
  "name": "深谷爬虫類館",
  "animals": [
   "reptile"
  ],
  "prefecture": "埼玉県",
  "area": "深谷",
  "address": "埼玉県深谷市荒川13-1",
  "access": "JR高崎線ふかや花園駅から徒歩約25分（タクシー約10分）、関越道 花園ICから車で約5分",
  "url": "https://gustavewani.wixsite.com/fukayahachu",
  "price": "大人90分2,000円（ドリンク付）、小学生まで1,000円、ふれあい2分500円・エサやり300〜500円（現金のみ）",
  "price_level": 3,
  "hours": "10:00〜17:00",
  "closed": "不定休（営業日は公式Xで案内）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "ドリンク込み",
   "子ども可"
  ],
  "description": "トカゲ・ヘビ・カメ・ワニなど100種類以上の爬虫類・両生類を展示する小さな爬虫類館。入館料にドリンクがつき、有料でふれあいやエサやりができる。車で行ける郊外で、じっくり見て回りたい人向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://gustavewani.wixsite.com/fukayahachu で住所・料金・営業時間を確認。公式X（2026-11-04の投稿）で「予約不要」と営業日程の案内を確認。定休日は不定休のため記載なし"
 },
 {
  "id": "niigata-reptile-tokage-kissa-life-murakami",
  "name": "蜥蜴喫茶LIFE",
  "animals": [
   "reptile"
  ],
  "prefecture": "新潟県",
  "area": "村上",
  "address": "新潟県村上市藤沢32-6",
  "access": "公式ページに最寄駅の記載なし（来店前に地図で確認を）",
  "url": "https://tokagelife.com/",
  "price": "大人1,500円（会員1,000円）、小〜高校生500円（ドリンク1杯・爬虫類とのふれあい5分付き）",
  "price_level": 2,
  "hours": "14:00〜18:00（ラストオーダー17:30）",
  "closed": "隔週の主に水曜（営業カレンダーで案内）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "ドリンク込み",
   "子ども可",
   "写真OK"
  ],
  "description": "NPO法人が運営する、フトアゴヒゲトカゲを中心にヘビ・カメレオン・ヤモリなどがいる喫茶店。入場料にドリンクと短いふれあい時間が含まれ、触れる子は限られる。村上を訪れる際に、のんびり爬虫類を見たい人向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://tokagelife.com/ で料金・営業時間・定休日・住所を確認（お知らせ最新は2026-10-28）。予約の要否は公式に記載なしのため推奨とした"
 },
 {
  "id": "kagawa-reptile-locus-elle-fureai-cafe-takamatsu",
  "name": "Locus ELLE ふれあいカフェ（爬虫類カフェ）",
  "animals": [
   "reptile",
   "smallanimal"
  ],
  "prefecture": "香川県",
  "area": "高松",
  "address": "香川県高松市檀紙町1629-2",
  "access": "公式ページに最寄駅の記載なし（来店前に地図で確認を）",
  "url": "https://locuselle.net/cafe/",
  "price": "60分 大人1,600円／子ども850円（ドリンク付・ふれあい制限なし）",
  "price_level": 2,
  "hours": "土日祝のみ 12:00〜18:00（最終入店17:00）",
  "closed": "平日（ショップの定休は火・水）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "ドリンク込み",
   "子ども可",
   "複数の動物"
  ],
  "description": "爬虫類ショップに併設されたふれあいカフェで、レオパ・フトアゴ・ヘビのほか、フクロモモンガやハリネズミ、ウサギ、ハムスターなどにも触れる。営業は土日祝のみで、電話での予約が案内されている。四国で爬虫類や小動物と触れ合いたい人向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://locuselle.net/cafe/ で料金・予約方法、https://locuselle.net/reptile-cafe/ で営業日を確認（お知らせ最新は2025-04-25）。営業時間は2ページで開始時刻が異なり、ふれあいカフェのページの12:00を採用"
 },
 {
  "id": "wakayama-reptile-country-owl-plus-iwade",
  "name": "カントリーオウルぷらす",
  "animals": [
   "reptile",
   "owl"
  ],
  "prefecture": "和歌山県",
  "area": "岩出",
  "address": "和歌山県岩出市備前42 プチツール2F",
  "access": "JR和歌山線 岩出駅から徒歩約20分（車なら京和道 岩出根来ICから約5分、無料駐車場あり）",
  "url": "https://www.countryowl.co/",
  "price": "ドリンク付1,250円〜（60分。フクロウ・爬虫類とふれあい可）、延長30分500円",
  "price_level": 2,
  "hours": "平日11:00〜19:00（最終入店18:00）、土日祝11:00〜20:00（最終入店19:00）",
  "closed": "月曜・金曜（月曜が祝日の場合は営業し翌火曜休み）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "ドリンク込み",
   "子ども可",
   "複数の動物"
  ],
  "description": "フクロウと爬虫類が同じお店にいるカフェで、トカゲ・カメレオン・ヤモリ・カメ・ヘビなどを手に乗せて楽しめる。料金プランにドリンクがつき、フクロウのえさやりなどのオプションもある。和歌山で両方に触れたい人向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://www.countryowl.co/ 、料金 https://www.countryowl.co/blank-1 、アクセス https://www.countryowl.co/blank-6 で確認。予約は電話などで受付、必須の記載はないため推奨とした。公式サイトのお知らせに2026年4月の更新あり（営業中の根拠）"
 },
 {
  "id": "hiroshima-reptile-repl-yagi",
  "name": "爬虫類＆アクアリウムカフェ RePL（レプル）",
  "animals": [
   "reptile"
  ],
  "prefecture": "広島県",
  "area": "安佐南（八木）",
  "address": "広島県広島市安佐南区八木8丁目13-1 コンビデンス西本102",
  "access": "JR可部線「上八木駅」の目の前",
  "url": "https://repl-tea.shop/",
  "price": "ふれあい30分 大人1,600円／子ども1,200円、60分 大人2,700円／子ども2,100円（ドリンクは持ち込み可で店内販売なし）",
  "price_level": 3,
  "hours": "公式ページに時間帯の記載なし（昼・夜の営業、夜は予約制）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "駅近",
   "子ども可",
   "写真OK"
  ],
  "description": "ヘビ、トカゲ、ヤモリなど約40匹から好きな子を選んで触れ合える爬虫類カフェで、ヘビを首に巻いての撮影やエサやり体験もできる。時間制で、ドリンクは持ち込む形になる。2026年に移転して再開した。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://repl-tea.shop/ （2026-11-03更新）、料金 https://repl-tea.shop/?page_id=680 （画像の料金表を目視で転記）、アクセス https://repl-tea.shop/?page_id=38 で確認"
 },
 {
  "id": "tokyo-capybara-cafe-capyba-hikifune",
  "name": "cafe capyba 曳舟店",
  "animals": [
   "capybara"
  ],
  "prefecture": "東京都",
  "area": "曳舟・東向島",
  "address": "東京都墨田区東向島1-31-3",
  "access": "東武スカイツリーライン・亀戸線 曳舟駅西口から徒歩5分",
  "url": "https://cspace.co.jp/",
  "price": "最初の30分2,300円（ワンドリンク込み）、以降10分ごとに440円、カピバラのおやつ330円",
  "price_level": 4,
  "hours": "平日11:00〜17:30／土日祝10:00〜17:30（公式に18:00の表記もあり。来店前に確認を）",
  "closed": "水曜・木曜（祝日と重なる週は振替）",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "ドリンク込み",
   "駅近",
   "子ども可",
   "予約制"
  ],
  "description": "カピバラが店内を自由に歩き回り、野菜のおやつをあげたり隣でのんびり過ごしたりできる曳舟のカフェ。曳舟店には2頭が暮らす。ウェブ予約のみで、6歳以上が対象という決まりがあるので、落ち着いてカピバラを観察したい人向け。",
  "source_note": "トップ https://cspace.co.jp/ 、店舗案内 https://cspace.co.jp/en/our-shop_english/ で確認（2026年10月31日付の予約開始日変更の告知あり）。終了時刻の記載ゆれあり",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "tokyo-capybara-capyneko-kichijoji",
  "name": "カピねこカフェ 吉祥寺店",
  "animals": [
   "capybara",
   "cat"
  ],
  "prefecture": "東京都",
  "area": "吉祥寺",
  "address": "東京都武蔵野市吉祥寺南町1-5-10 PLATANO 2階",
  "access": "吉祥寺エリア",
  "url": "https://capyneko.cafe/",
  "price": "40分2,800円（1歳未満無料）、カピバラ・猫のおやつ550円",
  "price_level": 3,
  "hours": "10:00〜20:00（日ごとの時間は予約ページで確認）",
  "closed": "公式に定休日の記載なし（動物の健康状態で臨時休業あり）",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "複数の動物",
   "予約制"
  ],
  "description": "カピバラと猫を同じ空間で楽しめる珍しいカフェで、40分制でふれあえる。おやつをあげる体験も用意されている。オンライン予約が基本で空きがあれば当日も入れるため、カピバラも猫も両方好きな人や、短時間で試したい人に向く。",
  "source_note": "公式 https://capyneko.cafe/ で確認（電話 0422-26-9388）。頭数・アクセスは公式に記載なし",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "osaka-capybara-moff-lalaport-sakai",
  "name": "Moff animal cafe ららぽーと堺店",
  "animals": [
   "capybara",
   "hedgehog",
   "owl",
   "rabbit",
   "smallanimal",
   "reptile",
   "bird"
  ],
  "prefecture": "大阪府",
  "area": "堺・美原",
  "address": "大阪府堺市美原区黒山22-1 ららぽーと堺3F",
  "access": "ららぽーと堺内",
  "url": "https://moff-moff.jp/animal-cafe/shop/sakai-lalaport/",
  "price": "中学生以上1,450円（時間無制限）＋ドリンクバー380円（必須）",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "ららぽーと堺の休館日に準ずる",
  "reservation": "不要",
  "features": [
   "時間無制限プランあり",
   "ふれあいOK",
   "子ども可",
   "複数の動物",
   "写真OK"
  ],
  "description": "カピバラをはじめ、ハリネズミ、フクロウ、うさぎ、モルモット、爬虫類など約40種類の動物がいるショッピングモール内の動物カフェ。入園後は時間制限がなく、買い物のついでに立ち寄れる。抱っこは禁止で、見守りながら触れ合うスタイル。",
  "source_note": "店舗ページ https://moff-moff.jp/animal-cafe/shop/sakai-lalaport/ で確認。カピバラの在籍は同ページの動物一覧による",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "fukuoka-capybara-moff-lalaport-fukuoka",
  "name": "Moff animal cafe ららぽーと福岡店",
  "animals": [
   "capybara",
   "owl",
   "reptile",
   "bird",
   "smallanimal"
  ],
  "prefecture": "福岡県",
  "area": "福岡市博多区",
  "address": "福岡県福岡市博多区那珂6-23-1 ららぽーと福岡4F",
  "access": "JR鹿児島本線「竹下」駅から徒歩約9分",
  "url": "https://moff-moff.jp/animal-cafe/shop/fukuoka-lalaport/",
  "price": "中学生以上1,450円（時間無制限）＋ドリンクバー380円（必須）",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "ららぽーと福岡の休館日に準ずる",
  "reservation": "不要",
  "features": [
   "時間無制限プランあり",
   "ふれあいOK",
   "子ども可",
   "複数の動物",
   "写真OK"
  ],
  "description": "カピバラのほか、フクロウ、爬虫類、鳥、小動物などが暮らす複合型の動物カフェ。一度入れば時間を気にせず過ごせ、予約も不要なので福岡観光や買い物の合間に寄りやすい。動物を抱っこしない決まりがあり、子どもと一緒に動物の様子を見て回りたい人向け。",
  "source_note": "店舗ページ https://moff-moff.jp/animal-cafe/shop/fukuoka-lalaport/ で確認。カピバラ在籍は同ページ記載",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "aichi-capybara-moff-lalaport-aichi-togo",
  "name": "Moff animal cafe ららぽーと愛知東郷店",
  "animals": [
   "capybara",
   "reptile",
   "bird",
   "owl",
   "hedgehog",
   "rabbit",
   "smallanimal"
  ],
  "prefecture": "愛知県",
  "area": "東郷（名古屋近郊）",
  "address": "愛知県愛知郡東郷町東郷中央土地区画整理事業62街区1・3 ららぽーと愛知東郷3階",
  "access": "ららぽーと愛知東郷内",
  "url": "https://moff-moff.jp/animal-cafe/shop/aichi-togo-lalaport/",
  "price": "中学生以上1,450円（時間無制限）＋ドリンクバー380円（必須）",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "ららぽーと愛知東郷の休館日に準ずる",
  "reservation": "不要",
  "features": [
   "時間無制限プランあり",
   "ふれあいOK",
   "子ども可",
   "複数の動物",
   "写真OK"
  ],
  "description": "カピバラのほか、フタユビナマケモノ、フラミンゴ、オオハシ、インコ、フクロウ、ハリネズミなどが暮らす、ショッピングモール内の動物カフェ。入園後は時間無制限で、買い物ついでに寄れる。抱っこはできず、見守りながら触れ合うスタイル。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://moff-moff.jp/animal-cafe/shop/aichi-togo-lalaport/ で確認。カピバラの在籍は同ページの動物一覧による（頭数は不明）"
 },
 {
  "id": "tokyo-capybara-cafe-capyba-asakusa",
  "name": "cafe capyba ASAKUSA（カピバラカフェ 浅草店）",
  "animals": [
   "capybara"
  ],
  "prefecture": "東京都",
  "area": "浅草",
  "address": "東京都台東区千束1-1-4 アメニティ舟橋1階",
  "access": "つくばエクスプレス浅草駅から徒歩約5分",
  "url": "https://cspace.co.jp/",
  "price": "最初の30分2,300円（ワンドリンク込み）、以降10分ごと440円",
  "price_level": 4,
  "hours": "平日11:00〜17:30／土日祝10:00〜17:30（公式に18:00の表記もあり。来店前に確認を）",
  "closed": "水曜・木曜（祝日と重なる週は祝日営業・次の平日が休み）",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "ドリンク込み",
   "駅近",
   "子ども可",
   "予約制"
  ],
  "description": "2頭のカピバラ（麦とぴーかん）が店内で自由に過ごす、2025年開業の浅草のカフェ。ドリンクを飲みながらのんびり眺め、野菜のおやつ（330円）をあげられる。Web予約のみの事前予約制で、6歳以上から入店できる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "トップ https://cspace.co.jp/ 、店舗案内 https://cspace.co.jp/our-shop/ で確認（お知らせは2026-10-31付）。閉店時刻は店舗案内内で17:30と18:00の表記ゆれがあり17:30を採用"
 },
 {
  "id": "tokyo-capybara-capybara-cafe-moffu-harajuku",
  "name": "カピバラカフェ moffu（原宿）",
  "animals": [
   "capybara"
  ],
  "prefecture": "東京都",
  "area": "原宿",
  "address": "東京都渋谷区神宮前1-6-9 Om169ビル",
  "access": "JR原宿駅から徒歩約3分、東京メトロ明治神宮前駅から徒歩約6分",
  "url": "https://capybaracafemoffu.com/",
  "price": "カピバラとのふれあい30分＋フリードリンク 4,000円（おやつは別料金）",
  "price_level": 4,
  "hours": "10:00〜20:00（料金表の受付時間は10:00〜19:00）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "ドリンク込み",
   "駅近",
   "写真OK"
  ],
  "description": "3頭のカピバラが店内で過ごす原宿のカフェで、30分間、撫でたりおやつをあげたりできる。当日来店も可だが予約すると進みがスムーズ。短時間でも駅近でカピバラに会いたい人向けで、料金は高め。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://capybaracafemoffu.com/ で料金・アクセス・予約案内を確認（2026年表記）。定休日は公式に記載なし"
 },
 {
  "id": "tokyo-capybara-capyvillage-sendagaya",
  "name": "カピヴィレッジ（Capyvillage）",
  "animals": [
   "capybara",
   "smallanimal",
   "hedgehog"
  ],
  "prefecture": "東京都",
  "area": "千駄ヶ谷・代々木",
  "address": "東京都渋谷区千駄ヶ谷5-20-7 Gran class yoyogi 1F",
  "access": "公式ページに最寄駅の記載なし（来店前に地図で確認を）",
  "url": "https://capyvillage.com/",
  "price": "30分1,800円（カピバラまたはハムスター）／45分2,500円／60分3,200円（カピバラ・ハムスター・ハリネズミ・プレーリードッグ）",
  "price_level": 3,
  "hours": "11:00〜17:00（13:30〜14:30は休憩）",
  "closed": "月ごとに公式のお知らせで案内",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "複数の動物"
  ],
  "description": "お風呂につかるカピバラが主役で、ハムスターやハリネズミ、プレーリードッグ、ヒメハリテンレックにも会える店。カピバラにおやつをあげたりマッサージしたりもできる。時間制で、カピバラと小動物の両方を楽しみたい人向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://capyvillage.com/ で料金・営業時間・予約導線（TableCheckまたは電話）を確認（お知らせ最新は2026-10-06）。45分・60分の対象動物はページ表記がややあいまい"
 },
 {
  "animals": [
   "capybara"
  ],
  "prefecture": "東京都",
  "price": "4,000円／40分（カピバラのおやつ込み、全年齢同額）",
  "price_level": 4,
  "hours": "10:15〜13:00／15:00〜17:30（予約制の入れ替え枠）",
  "closed": "無休",
  "reservation": "必須",
  "url": "https://cappiness.jp/",
  "id": "tokyo-capybara-cappiness-oshiage",
  "name": "CAPPINESS 押上店",
  "area": "押上・向島",
  "address": "東京都墨田区向島3-43-10 JU SKYTOWER MUKOJIMA 5F",
  "access": "押上駅から徒歩約6分、とうきょうスカイツリー駅から徒歩約3分",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "駅近",
   "予約制",
   "英語対応",
   "子ども可"
  ],
  "description": "カピバラ3頭と40分間、少人数で触れたり餌をあげたりできる専門店だ。内装は明るく広めで、案内は英語で行われる。オンライン予約のみで当日の飛び込みはできないため、旅行の予定に組み込みたい人に向く。",
  "source_note": "公式 https://cappiness.jp/capybara_cafe/cappiness_oshiage で料金・営業時間・予約方式を確認（予約はTableCheckのみ、5〜12歳は保護者同伴）",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "animals": [
   "capybara"
  ],
  "prefecture": "東京都",
  "price": "4,000円／40分（カピバラのおやつ込み、全年齢同額）",
  "price_level": 4,
  "hours": "10:15〜13:00／15:00〜17:30（予約制の入れ替え枠）",
  "closed": "無休",
  "reservation": "必須",
  "url": "https://cappiness.jp/",
  "id": "tokyo-capybara-cappiness-shinjuku",
  "name": "CAPPINESS 新宿店（高田馬場）",
  "area": "高田馬場",
  "address": "東京都新宿区高田馬場4-40-12 9F",
  "access": "東京メトロ東西線 落合駅から徒歩10分／高田馬場駅から徒歩12分",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "予約制",
   "英語対応",
   "子ども可"
  ],
  "description": "高田馬場にあるカピバラ専門店で、3頭と40分間ふれあえる。和風の落ち着いた室内と広いバルコニーが特徴で、家庭的な雰囲気だ。オンライン予約のみの少人数制で、じっくり触れたい人向けである。",
  "source_note": "公式 https://cappiness.jp/capybara_cafe/cappiness_shinjuku で料金・営業時間・予約方式を確認（予約はTableCheckのみ、5〜12歳は保護者同伴）",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "mie-capybara-fuu-suzuka",
  "name": "ふれあい動物カフェ fuu",
  "animals": [
   "capybara",
   "owl",
   "bird",
   "farm",
   "cat",
   "other"
  ],
  "prefecture": "三重県",
  "area": "鈴鹿",
  "address": "三重県鈴鹿市住吉1-14-28",
  "access": "近鉄平田町駅からバスで東住吉バス停下車（公式記載）",
  "url": "https://wanslife.jp/fuku-fuku/",
  "price": "入場1時間 大人1,200円／小人770円（税込）。エサ体験110円〜。混雑していなければ時間無制限",
  "price_level": 2,
  "hours": "平日12:00〜17:00／土日祝11:00〜17:00",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "子ども可",
   "複数の動物"
  ],
  "description": "カピバラ、フラミンゴ、フクロウ、インコ、キンカジュー、ヤギ、アヒル、チャボ、猫など、動物園で見るような種類をまとめて触れる動物カフェ。料金は入場だけのシンプルな1時間制で、エサやりは別料金。ペット店を営む会社が運営し、家族連れで1時間ほど回るのに向く。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "運営会社の公式ページ https://wanslife.jp/fuku-fuku/ と料金ページ https://wanslife.jp/fuku-fuku/fee/ で確認（フッターは2026年表記）。定休日と予約の案内は公式ページに記載なし。以前の見送り（料金記載なし）を訂正。"
 },
 {
  "id": "kyoto-otter-loutre-kyoto",
  "name": "LOUTRE（ルートル）京都店",
  "animals": [
   "otter"
  ],
  "prefecture": "京都府",
  "area": "河原町・寺町",
  "address": "京都府京都市中京区寺町通六角下ル式部町259-1 舟木ビル2F",
  "access": "阪急京都線 河原町駅から徒歩約5分",
  "url": "https://www.loutre-kyoto.com/",
  "price": "50分3,000円（現金のみ）",
  "price_level": 3,
  "hours": "13:00〜19:00（最終受付18:00）",
  "closed": "定休日の記載なし（カワウソの体調で急に休むことあり）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "写真OK",
   "駅近"
  ],
  "description": "飼われていた経緯を持つカワウソと、専用の部屋で50分間触れ合える寺町通のお店。抱っこはできず、そっと撫でる決まり。予約を受け付けておらず、15歳未満は入店できないため、大人がカワウソを落ち着いて観察したい時に向く。",
  "source_note": "トップ https://www.loutre-kyoto.com/ 、アクセス https://www.loutre-kyoto.com/アクセス/ 、FAQ https://www.loutre-kyoto.com/よくあるご質問/ で確認。2026年6月1日付の営業時間変更を反映。カワウソは全店で4匹とされる",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "osaka-otter-loutre-namba",
  "name": "LOUTRE（ルートル）大阪店",
  "animals": [
   "otter"
  ],
  "prefecture": "大阪府",
  "area": "なんば",
  "address": "大阪府大阪市浪速区難波中2-3-9 島本スリムビル2F",
  "access": "南海本線 なんば駅南口から徒歩約2分",
  "url": "https://www.loutre-kyoto.com/",
  "price": "50分3,000円（現金のみ）",
  "price_level": 3,
  "hours": "13:00〜19:00（最終受付18:00）",
  "closed": "定休日の記載なし（カワウソの体調で急に休むことあり）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "写真OK",
   "駅近"
  ],
  "description": "なんば駅から歩いてすぐの場所で、カワウソと部屋の中でふれあえる大阪店。50分制で追加料金なし、抱っこは不可。予約不可で混雑具合は日による。15歳未満は入れないので、大人の観光や仕事帰りに合う。",
  "source_note": "アクセス https://www.loutre-kyoto.com/アクセス/ 、トップ https://www.loutre-kyoto.com/ で確認（同系列に千日前の別店舗あり）",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "tokyo-otter-harry-harajuku-terrace",
  "name": "カワウソカフェ HARRY 原宿テラス店",
  "animals": [
   "otter",
   "hedgehog",
   "smallanimal"
  ],
  "prefecture": "東京都",
  "area": "原宿",
  "address": "東京都渋谷区神宮前4-26-5 神宮前426ビル3F",
  "access": "原宿・表参道エリア",
  "url": "https://harinezumi-cafe.com/store/harajuku-terrace/",
  "price": "大人30分1,650円〜（子ども30分1,430円〜）",
  "price_level": 4,
  "hours": "平日13:00〜18:00、土日祝11:00〜18:00（ラストオーダー17:30）",
  "closed": "無休",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "子ども可",
   "複数の動物"
  ],
  "description": "カワウソにハリネズミ、チンチラも加わる原宿の小さな動物カフェ。入場料にカワウソとの握手が含まれ、予約すれば追加でさわる体験もできる。予約なしでも入れるが混雑時は待つため、60分以上のウェブ予約がおすすめ。",
  "source_note": "公式 https://harinezumi-cafe.com/store/harajuku-terrace/ で確認（2026年10月22日に予約再開の告知）。price_levelは30分料金の2倍で換算",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "tokyo-otter-harry-asakusa",
  "name": "カワウソカフェ HARRY 浅草店",
  "animals": [
   "otter",
   "hedgehog",
   "owl"
  ],
  "prefecture": "東京都",
  "area": "浅草",
  "address": "東京都台東区浅草1-1-17 増田ビル5F",
  "access": "浅草駅の目の前（公式表記）",
  "url": "https://harinezumi-cafe.com/store/asakusa/",
  "price": "大人30分1,600円〜（子ども30分1,300円〜）",
  "price_level": 4,
  "hours": "11:00〜18:00（ラストオーダー17:30）",
  "closed": "無休",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "子ども可",
   "複数の動物",
   "駅近"
  ],
  "description": "カワウソを中心に、ハリネズミやフクロウなども暮らす浅草駅前のカフェ。観光の途中に寄りやすく、海外向けの案内ページも用意されている。予約は60分以上から、当日キャンセルは返金不可なので日程が決まっている人向け。",
  "source_note": "公式 https://harinezumi-cafe.com/store/asakusa/ で確認（2026年11月2日付で外国人向け案内の告知）",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "tokyo-otter-kotsumate-ikebukuro",
  "name": "コツメイト 池袋店",
  "animals": [
   "otter",
   "hedgehog",
   "smallanimal"
  ],
  "prefecture": "東京都",
  "area": "池袋",
  "address": "東京都豊島区東池袋1-29-4 成田ビル5階",
  "access": "JR池袋駅 東口（地下35番出口）からサンシャイン60通り沿い",
  "url": "https://ktm-kawaii.com/",
  "price": "30分1,500円／60分2,700円（中学生以下は1,000円／2,000円）",
  "price_level": 3,
  "hours": "11:00〜19:00（動物の体調で変更あり）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "子ども可",
   "複数の動物"
  ],
  "description": "コツメカワウソを中心に、フクロモモンガやハリネズミも間近で見て触れて、おやつをあげられる池袋のどうぶつ広場。30分から入れ、60分は予約が基本。土日は予約がおすすめで、中学生以下は保護者同伴。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "トップ https://ktm-kawaii.com/ 、池袋店 https://ktm-kawaii.com/s/ikebukuro 、料金表画像 https://ktm-kawaii.com/images/top-price-20240614.jpg で確認（お知らせは2026-10-21付）。料金表画像の作成日は2024年6月。福岡大名店は公式の店舗一覧に見当たらず"
 },
 {
  "id": "tokyo-otter-wakabayashi-no-ie-harajuku",
  "name": "カワウソ 若林の家 in 原宿",
  "animals": [
   "otter"
  ],
  "prefecture": "東京都",
  "area": "原宿",
  "address": "東京都渋谷区神宮前1-6-8 ローリエビル 地下1階",
  "access": "JR原宿駅 竹下口から徒歩約3分",
  "url": "https://otter.tokyo/",
  "price": "一般 25分2,700円／50分4,700円、12歳以下 25分1,000円／50分2,000円",
  "price_level": 4,
  "hours": "10:45〜19:00（最終入場は閉店30分前。月ごとに変わるため公式で確認）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "駅近",
   "子ども可"
  ],
  "description": "原宿の地下にあるカワウソの店で、予約は受け付けず順番に入る。4歳以上から入場でき、混雑時は25分に区切られることがある。短い時間でカワウソと遊びたい人向けで、料金は高め。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://otter.tokyo/ で料金・営業時間・予約不可・年齢条件を確認（お知らせ最新は2026-06-19の料金改定告知）"
 },
 {
  "id": "kanagawa-otter-kawauso-to-fukurou-no-ouchi-kamakura",
  "name": "かわうそとふくろうのおうち（OWL OTTER CAFE）鎌倉",
  "animals": [
   "otter",
   "owl"
  ],
  "prefecture": "神奈川県",
  "area": "鎌倉・長谷",
  "address": "神奈川県鎌倉市長谷2-14-12",
  "access": "江ノ電「長谷駅」から徒歩すぐ",
  "url": "https://www.owlottercafe.com/",
  "price": "大人（13歳以上）2,000円、4〜12歳1,000円、3歳以下無料（ドリンク飲み放題・時間制限なし）",
  "price_level": 3,
  "hours": "10:00〜19:00",
  "closed": "無休",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "ドリンク込み",
   "時間無制限プランあり",
   "駅近",
   "子ども可",
   "複数の動物"
  ],
  "description": "1階でコツメカワウソと握手やエサやりができ、2階には放し飼いのフクロウの部屋がある。ドリンク飲み放題で時間の制限がなく、同じ日なら再入場もできる。鎌倉観光のついでに、カワウソとフクロウをゆっくり楽しみたい人向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://www.owlottercafe.com/ で料金（画像）・営業時間・無休・再入場を確認。予約の要否は公式に記載なしのため推奨とした。カワウソは約15頭とする公式Instagramの投稿あり"
 },
 {
  "id": "osaka-otter-loutre-sennichimae",
  "name": "LOUTRE（ルートル）大阪千日前店",
  "animals": [
   "otter"
  ],
  "prefecture": "大阪府",
  "area": "なんば・千日前",
  "address": "大阪府大阪市中央区難波1-2-3 e-bld 3階東",
  "access": "大阪メトロ御堂筋線・千日前線 なんば駅15番出口から徒歩約3分",
  "url": "https://www.loutre-kyoto.com/",
  "price": "50分3,000円（現金のみ）",
  "price_level": 3,
  "hours": "13:00〜19:00（最終受付18:00）",
  "closed": "公式ページに記載なし（11月は休みなしの告知。カワウソの体調で急に休むことあり）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "写真OK",
   "駅近"
  ],
  "description": "なんば駅から歩いて数分のビルにある、LOUTREの大阪2店舗目だ。ペットとして育ったカワウソとふれあえ、50分制で抱っこはできない。予約は受け付けず、15歳未満は入れないため、大人が混雑の少ない時間に訪れたい店である。",
  "source_note": "アクセス https://www.loutre-kyoto.com/アクセス/ で住所を、トップ https://www.loutre-kyoto.com/ で料金・営業時間・予約不可・年齢制限を確認",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "osaka-smallanimal-rockstar-namba-parks",
  "name": "小動物カフェ ロックスター なんばパークス前店",
  "animals": [
   "smallanimal"
  ],
  "prefecture": "大阪府",
  "area": "難波",
  "address": "大阪府大阪市浪速区難波中2丁目8-91 中川ビル 中1階",
  "access": "なんばパークス前（南海なんば駅周辺）",
  "url": "http://smallanimal2.rock-star.xyz",
  "price": "大人2,280円／60分、4〜12歳1,580円、3歳以下無料",
  "price_level": 3,
  "hours": "11:00〜20:00",
  "closed": "毎週火曜",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "子ども可",
   "複数の動物"
  ],
  "description": "小さな動物たちと、1時間制で順番に触れ合えるお店です。触れる動物は一度に1種類というルールがあり、落ち着いて向き合えます。小さな子連れや、いろいろな小動物をまとめて見たい人に向きます。",
  "source_note": "公式 http://smallanimal2.rock-star.xyz で住所・営業時間・定休日・料金・予約導線を確認。動物の種類は公式ページに明記がないため、animals は smallanimal のみとし、description でも種類を書いていない（2026-11-06 検品で修正）",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "tokyo-smallanimal-harry-mogumogu-harajuku",
  "name": "HARRY mogumogu（HARRYモグモグ店）",
  "animals": [
   "smallanimal",
   "other"
  ],
  "prefecture": "東京都",
  "area": "原宿",
  "address": "東京都渋谷区神宮前1-13-21 シャングリラ原宿第2ビル 4F",
  "access": "JR原宿駅から徒歩1分",
  "url": "https://harinezumi-cafe.com/store/mogu-mogu/",
  "price": "大人1,650円／30分〜（Web予約は60分以上）",
  "price_level": 4,
  "hours": "11:00〜19:00（L.O.18:30）",
  "closed": "無休",
  "reservation": "推奨",
  "features": [
   "駅近",
   "ふれあいOK"
  ],
  "description": "ハムスターとミーアキャットに会える、原宿駅すぐのビルの4階にあるお店です。ハリネズミのHARRYグループが運営する一軒で、予約なしでも入れますが混む時間は待つことがあります。駅から近く、短時間で小動物を堪能したい人向けです。",
  "source_note": "公式 https://harinezumi-cafe.com/store/mogu-mogu/ で住所・営業時間・料金・予約・動物を確認",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "fukuoka-smallanimal-moff-animal-cafe-markis-momochi",
  "name": "Moff animal cafe マークイズ福岡ももち店",
  "animals": [
   "smallanimal",
   "owl",
   "bird",
   "reptile",
   "rabbit",
   "hedgehog"
  ],
  "prefecture": "福岡県",
  "area": "百道",
  "address": "福岡県福岡市中央区地行浜2-2-1 MARKIS福岡ももち 3F",
  "access": "福岡市営地下鉄「唐人町駅」から徒歩約10分",
  "url": "https://moff-moff.jp/animal-cafe/shop/fukuoka-momochi/",
  "price": "中学生以上1,200円（時間無制限）＋ドリンクバー380円",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:00）",
  "closed": "MARKIS福岡ももちの定休日に準ずる",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "時間無制限プランあり",
   "子ども可",
   "複数の動物"
  ],
  "description": "チンチラやモルモット、ハリネズミなどの小動物のほか、フクロウ、インコ、爬虫類まで集まった商業施設内のお店です。入場料で時間を気にせず過ごせ、予約もいりません。買い物のついでに立ち寄りたい家族連れや、いろいろな動物を一度に見たい人に向きます。",
  "source_note": "公式店舗ページ https://moff-moff.jp/animal-cafe/shop/fukuoka-momochi/ で確認",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "miyagi-smallanimal-moff-animal-cafe-aeon-natori",
  "name": "Moff animal cafe イオンモール名取店",
  "animals": [
   "smallanimal",
   "owl",
   "bird",
   "reptile",
   "rabbit",
   "hedgehog",
   "other"
  ],
  "prefecture": "宮城県",
  "area": "名取",
  "address": "宮城県名取市杜せきのした5-3-1 イオンモール名取 3F",
  "access": "仙台空港アクセス線「杜せきのした駅」直結",
  "url": "https://moff-moff.jp/animal-cafe/shop/natori/",
  "price": "中学生以上1,200円（時間無制限）＋ドリンクバー380円",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "イオンモール名取の休館日に準ずる",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "時間無制限プランあり",
   "駅近",
   "子ども可",
   "複数の動物"
  ],
  "description": "ハムスターやチンチラ、ハリネズミ、モルモットに、フクロウやインコ、爬虫類、フタユビナマケモノまで暮らす東北では数少ない店です。駅直結のモール内にあり、入場料だけで長居できます。予約なしで行けるので、仙台周辺で気軽に動物と過ごしたい人向けです。",
  "source_note": "公式店舗ページ https://moff-moff.jp/animal-cafe/shop/natori/ で確認",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "tokyo-smallanimal-harry-harajuku-kawaii-zoo",
  "name": "HARRY 原宿かわいい動物園店",
  "animals": [
   "smallanimal",
   "hedgehog",
   "capybara",
   "other"
  ],
  "prefecture": "東京都",
  "area": "原宿",
  "address": "東京都渋谷区神宮前1-6-12 ITOビル 3F",
  "access": "JR原宿駅から徒歩3分",
  "url": "https://harinezumi-cafe.com/store/harajuku-kawaii-zoo/",
  "price": "大人30分1,650円〜、子ども30分1,430円〜（予約は60分以上から）",
  "price_level": 4,
  "hours": "平日12:00〜18:00、土日祝11:00〜18:00（最終入店17:30）",
  "closed": "無休",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "駅近",
   "子ども可",
   "複数の動物"
  ],
  "description": "フェレットやミーアキャット、ハリネズミ、フェネック、カピバラなどが集まる小さな動物園のようなお店です。飲み物はセルフで、持ち込みもできます（アルコールは不可）。原宿で動物をいろいろ見比べたい人に向きます。予約なしでも入れますが、混むと待つことがあります。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://harinezumi-cafe.com/store/harajuku-kawaii-zoo/ で住所・営業時間・料金・予約を確認"
 },
 {
  "id": "hiroshima-smallanimal-moff-animal-cafe-alpark",
  "name": "Moff animal cafe アルパーク店",
  "animals": [
   "smallanimal",
   "owl",
   "bird",
   "reptile",
   "hedgehog",
   "other"
  ],
  "prefecture": "広島県",
  "area": "井口（広島市西区）",
  "address": "広島県広島市西区井口明神1-16-1 アルパーク西棟2F",
  "access": "JR山陽本線「新井口駅」から徒歩約3分",
  "url": "https://moff-moff.jp/animal-cafe/shop/alpark/",
  "price": "中学生以上1,200円（時間無制限）＋ドリンクバー380円",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "アルパークの定休日に準ずる",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "時間無制限プランあり",
   "駅近",
   "子ども可",
   "複数の動物"
  ],
  "description": "チンチラやハムスター、モルモット、ハリネズミなどの小動物に加え、フクロウ、インコ、爬虫類、フタユビナマケモノがいる商業施設型のお店です。入園料は時間無制限で、予約も要りません。動物を抱っこすることはできないので、見て触れて過ごしたい人向けです。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://moff-moff.jp/animal-cafe/shop/alpark/ で確認"
 },
 {
  "id": "aichi-smallanimal-moff-animal-cafe-lalaport-anjo",
  "name": "Moff animal cafe ららぽーと安城店",
  "animals": [
   "smallanimal",
   "owl",
   "bird",
   "reptile",
   "rabbit",
   "hedgehog",
   "other"
  ],
  "prefecture": "愛知県",
  "area": "安城",
  "address": "愛知県安城市大東町9-30 ららぽーと安城 1F",
  "access": "JR東海道本線「安城駅」から徒歩10分",
  "url": "https://moff-moff.jp/animal-cafe/shop/anjo-lalaport/",
  "price": "中学生以上1,450円（時間無制限）＋ドリンクバー380円",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "ららぽーと安城の休館日に準ずる",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "時間無制限プランあり",
   "子ども可",
   "複数の動物"
  ],
  "description": "チンチラ、ハリネズミ、ハムスター、モルモット、ウサギといった小動物のほか、フクロウやオウム、フトアゴヒゲトカゲ、ナマケモノがいる複合型のお店です。名古屋から足を延ばして、買い物のついでに動物と過ごしたい人に向きます。動物の抱っこはできません。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://moff-moff.jp/animal-cafe/shop/anjo-lalaport/ で確認"
 },
 {
  "id": "saitama-smallanimal-chillas-land-kawagoe",
  "name": "Chilla's Land（チラズランド）",
  "animals": [
   "smallanimal"
  ],
  "prefecture": "埼玉県",
  "area": "川越",
  "address": "埼玉県川越市連雀町10-3",
  "access": "川越エリア（公式ページに最寄駅の記載なし）",
  "url": "https://www.chillasland.net/",
  "price": "ふれあい体験 15分1,100円（2名まで。3名以上は1人につき550円加算）＋ドリンク注文",
  "price_level": 3,
  "hours": "平日13:00〜18:00、土日祝11:00〜18:00",
  "closed": "月曜",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "子ども可"
  ],
  "description": "チンチラ専門店にカフェが併設された店で、予約すればチンチラとふれあえる。予約なしでも入れるが予約が優先される。チンチラだけをじっくり見たい人向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://www.chillasland.net/ 、料金改定のお知らせ https://www.chillasland.net/news/147391.html （2026-08-10）で確認。予約は公式の予約カレンダー（当日来店も可と案内）"
 },
 {
  "id": "ibaraki-smallanimal-moff-animal-cafe-iias-tsukuba",
  "name": "Moff animal cafe イーアスつくば店",
  "animals": [
   "smallanimal",
   "reptile",
   "owl",
   "bird",
   "cat",
   "other",
   "hedgehog"
  ],
  "prefecture": "茨城県",
  "area": "研究学園",
  "address": "茨城県つくば市研究学園5-19 イーアスつくばアウトモール1F",
  "access": "つくばエクスプレス「研究学園駅」から徒歩約5分",
  "url": "https://moff-moff.jp/animal-cafe/shop/tsukuba/",
  "price": "中学生以上1,200円（時間無制限）＋ドリンクバー380円（必須）",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:00）",
  "closed": "イーアスつくばの定休日に準ずる",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "時間無制限プランあり",
   "子ども可",
   "駅近",
   "複数の動物"
  ],
  "description": "ハムスター、モルモット、チンチラ、ハリネズミなどの小動物のほか、爬虫類、フクロウ、インコ、猫まで集まる商業施設内の店。入場料は時間無制限で予約もいらない。買い物のついでに家族で立ち寄りたい人向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://moff-moff.jp/animal-cafe/shop/tsukuba/ で確認"
 },
 {
  "id": "chiba-smallanimal-moff-animal-cafe-aeon-makuhari-shintoshin",
  "name": "Moff animal cafe イオンモール幕張新都心店",
  "animals": [
   "smallanimal",
   "reptile",
   "owl",
   "bird",
   "rabbit",
   "other",
   "hedgehog"
  ],
  "prefecture": "千葉県",
  "area": "幕張新都心",
  "address": "千葉県千葉市美浜区豊砂1-5 イオンモール幕張新都心 エキマエ3F",
  "access": "JR京葉線「幕張豊砂駅」が最寄り（バスの路線もあり）",
  "url": "https://moff-moff.jp/animal-cafe/shop/makuhari/",
  "price": "中学生以上1,200円（時間無制限）＋ドリンクバー380円（必須）",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:00）",
  "closed": "イオンモール幕張新都心の定休日に準ずる",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "時間無制限プランあり",
   "子ども可",
   "複数の動物",
   "駅近"
  ],
  "description": "チンチラ、ハムスター、モルモット、ハリネズミ、ウサギなどの小動物に加え、爬虫類やフクロウ、インコがいるショッピングモール内の店。時間を気にせず過ごせ、予約もいらない。モールでの買い物とあわせて動物に会いたい人向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://moff-moff.jp/animal-cafe/shop/makuhari/ で確認"
 },
 {
  "id": "miyagi-smallanimal-moff-animal-cafe-aeon-shinrifu",
  "name": "Moff animal cafe イオンモール新利府店",
  "animals": [
   "smallanimal",
   "reptile",
   "owl",
   "bird",
   "rabbit",
   "other",
   "hedgehog"
  ],
  "prefecture": "宮城県",
  "area": "利府",
  "address": "宮城県宮城郡利府町新中道3-1-1 イオンモール新利府南館3F",
  "access": "JR利府線「利府駅」「新利府駅」から徒歩約16分（車の利用が中心）",
  "url": "https://moff-moff.jp/animal-cafe/shop/shinrifu/",
  "price": "中学生以上1,200円（時間無制限）＋ドリンクバー380円（必須）",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "イオンモール新利府の定休日に準ずる",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "時間無制限プランあり",
   "子ども可",
   "複数の動物"
  ],
  "description": "フタユビナマケモノやフクロウ、インコ、爬虫類、小動物がいる、仙台近郊のモール南館3階の店。入園料で時間無制限、予約もいらない。名取店とは別に、仙台の北側で動物カフェに行きたい人が選べる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://moff-moff.jp/animal-cafe/shop/shinrifu/ で確認"
 },
 {
  "id": "kanagawa-smallanimal-moff-animal-cafe-ebina-vinawalk",
  "name": "Moff animal cafe 海老名ビナウォーク店",
  "animals": [
   "smallanimal",
   "reptile",
   "owl",
   "bird",
   "rabbit",
   "other",
   "hedgehog"
  ],
  "prefecture": "神奈川県",
  "area": "海老名",
  "address": "神奈川県海老名市中央1-4-1 海老名ビナウォーク5番館3F",
  "access": "小田急線・相鉄線・JR相模線「海老名駅」から徒歩約1分",
  "url": "https://moff-moff.jp/animal-cafe/shop/ebina/",
  "price": "中学生以上1,200円（時間無制限）",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "ビナウォークの定休日に準ずる",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "時間無制限プランあり",
   "子ども可",
   "駅近",
   "複数の動物"
  ],
  "description": "ヨツユビハリネズミ、チンチラ、ハムスター、モルモット、ウサギなどの小動物と、爬虫類・フクロウ・インコがいる海老名駅前の店。入場料は時間無制限で予約もいらず、駅から近い。買い物帰りに小さな子どもと立ち寄りたい人向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://moff-moff.jp/animal-cafe/shop/ebina/ で確認"
 },
 {
  "id": "kanagawa-smallanimal-moff-animal-cafe-odawara-dynacity",
  "name": "Moff animal cafe 小田原ダイナシティ店",
  "animals": [
   "smallanimal",
   "reptile",
   "owl",
   "bird",
   "rabbit",
   "other",
   "hedgehog"
  ],
  "prefecture": "神奈川県",
  "area": "小田原",
  "address": "神奈川県小田原市中里208 ダイナシティWEST 4F",
  "access": "JR東海道線「鴨宮駅」からバスで約10分",
  "url": "https://moff-moff.jp/animal-cafe/shop/odawara/",
  "price": "中学生以上1,200円（時間無制限）＋ドリンクバー380円（必須）",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:00）",
  "closed": "ダイナシティの定休日に準ずる",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "時間無制限プランあり",
   "子ども可",
   "複数の動物"
  ],
  "description": "フクロウ、インコ、ヘビやトカゲ、リクガメ、ハムスターやウサギなどに会えるモール4階の店。入園料で時間無制限、予約も不要。駅から少し離れているので、車やバスで小田原方面に出かけるときに向く。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://moff-moff.jp/animal-cafe/shop/odawara/ で確認"
 },
 {
  "id": "tokyo-smallanimal-moff-animal-cafe-iias-takao",
  "name": "Moff animal cafe イーアス高尾店",
  "animals": [
   "smallanimal",
   "reptile",
   "owl",
   "bird",
   "cat",
   "dog",
   "rabbit"
  ],
  "prefecture": "東京都",
  "area": "高尾",
  "address": "東京都八王子市東浅川町550-1 イーアス高尾 1F",
  "access": "JR中央線・京王高尾線「高尾駅」から徒歩約6分、京王高尾線「狭間駅」から徒歩約5分",
  "url": "https://moff-moff.jp/animal-cafe/shop/takao/",
  "price": "中学生以上1,200円（時間無制限）＋ドリンクバー380円（必須）",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:00）",
  "closed": "イーアス高尾の定休日に準ずる",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "時間無制限プランあり",
   "子ども可",
   "複数の動物"
  ],
  "description": "ハムスター、モルモット、ウサギ、ハリネズミ、プレーリードッグなどの小動物に、爬虫類・フクロウ・インコ、猫や犬までそろう郊外のモール内の店。入場は時間無制限で予約不要。多摩エリアで家族連れが半日楽しみたい人向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://moff-moff.jp/animal-cafe/shop/takao/ で確認"
 },
 {
  "id": "tokyo-smallanimal-mamomura-kichijoji",
  "name": "マーモット村 東京・吉祥寺（MaMo Terrace）",
  "prefecture": "東京都",
  "area": "吉祥寺",
  "address": "東京都武蔵野市吉祥寺本町2-28-7 マモテラス3F",
  "access": "JR吉祥寺駅から徒歩8分",
  "price": "満喫プラン60分 2,800円（税込、1Fカフェのワンドリンク券・お土産付き）",
  "hours": "10:00〜18:00（12:00〜13:00は休憩、入場は10:00〜12:00／13:00〜18:00の枠）",
  "closed": "公式ページに記載なし（予約カレンダーで営業日を確認）",
  "features": [
   "予約制",
   "ドリンク込み",
   "写真OK"
  ],
  "description": "マーモットを見て過ごす60分制の施設で、公式サイトには6頭のプロフィールが載っている。ふれあいは行わず、寝る・食べる・立ち上がるといった自由な姿を眺めるスタイルだ。同じ建物の1階カフェでドリンク券が使え、2階ではマーモットをテーマにしたアート展示もある。",
  "source_note": "料金 https://mamomura.com/products/1-hour-kichijoji 、住所・営業 https://mamomura.com/pages/access 、館内案内 https://mamomura.com/pages/mamomura-tokyo で確認（2026-11-06）。ふれあいは行わないと公式に明記",
  "animals": [
   "smallanimal"
  ],
  "url": "https://mamomura.com/",
  "price_level": 3,
  "reservation": "必須",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "tokyo-smallanimal-mamomura-nakano",
  "name": "マーモット村 東京・中野（野方）",
  "prefecture": "東京都",
  "area": "中野・野方",
  "address": "東京都中野区野方4-46-10",
  "access": "西武新宿線野方駅から約500m",
  "price": "満喫プラン60分 2,800円（税込、ワンドリンク・お土産付き）",
  "hours": "予約枠による（営業は土日祝のみ）",
  "closed": "平日（土日祝のみ営業）",
  "features": [
   "予約制",
   "ドリンク込み"
  ],
  "description": "保護と日々のケアを軸にした拠点で、土日祝だけ予約制で公開している。公式によると、現在会えるのは人馴れトレーニング中のヒマラヤマーモットだ。ふれあいはなく、落ち着いて見守りたい人に向く。",
  "source_note": "料金・営業日 https://mamomura.com/products/1-hour 、住所・最寄駅 https://mamomura.com/pages/access で確認（2026-11-06）。時間帯は予約画面で選ぶ形式で、公式ページに具体的な営業時間の記載なし",
  "animals": [
   "smallanimal"
  ],
  "url": "https://mamomura.com/",
  "price_level": 3,
  "reservation": "必須",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "osaka-smallanimal-mamomura-moriguchi",
  "name": "マーモット村 大阪（守口）",
  "prefecture": "大阪府",
  "area": "守口",
  "address": "大阪府守口市浜町2-1-21 2階",
  "access": "大阪メトロ谷町線守口駅から徒歩5分／京阪本線守口市駅から徒歩9分",
  "price": "満喫プラン60分 2,800円（税込、ワンドリンク・お土産付き）",
  "hours": "10:00〜18:00（12:00〜13:00は休憩）",
  "closed": "公式ページに記載なし（予約カレンダーで営業日を確認）",
  "features": [
   "予約制",
   "ドリンク込み",
   "写真OK",
   "駅近"
  ],
  "description": "大阪で唯一のマーモット村で、60分の予約制だ。窓辺や切り株など思い思いの場所で過ごす姿を眺める形で、ふれあいは行っていない。入口は建物の外階段を上がった2階で、6歳未満は専用のファミリーデーの日に入れる。",
  "source_note": "料金 https://mamomura.com/products/1-hour-osaka 、住所・営業 https://mamomura.com/pages/access 、https://mamomura.com/pages/mamomura-osaka で確認（2026-11-06）",
  "animals": [
   "smallanimal"
  ],
  "url": "https://mamomura.com/",
  "price_level": 3,
  "reservation": "必須",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "tokyo-smallanimal-moff-animal-cafe-lalaport-tachikawa-tachihi",
  "name": "Moff animal cafe ららぽーと立川立飛店",
  "animals": [
   "smallanimal",
   "owl",
   "bird",
   "reptile",
   "hedgehog",
   "dog",
   "other"
  ],
  "prefecture": "東京都",
  "area": "立川",
  "address": "東京都立川市泉町935-1 ららぽーと立川立飛2F",
  "access": "多摩モノレール「立飛」駅直結",
  "url": "https://moff-moff.jp/animal-cafe/shop/tachikawa-lalaport/",
  "price": "中学生以上1,450円（時間無制限）＋ドリンクバー380円（必須）",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "ららぽーと立川立飛の定休日に準ずる",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "時間無制限プランあり",
   "駅近",
   "子ども可",
   "複数の動物"
  ],
  "description": "フタユビナマケモノやフクロウ、インコ、爬虫類、チンチラやハムスターなどの小動物、犬までそろう商業施設型の店。入園料で時間無制限、予約も要らない。動物の抱っこはできないので、見て触れて過ごしたい人向けだ。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://moff-moff.jp/animal-cafe/shop/tachikawa-lalaport/ で確認"
 },
 {
  "id": "tokyo-smallanimal-moff-animal-cafe-cute-cube-harajuku",
  "name": "Moff animal cafe CUTE CUBE 原宿店",
  "animals": [
   "smallanimal",
   "owl",
   "bird",
   "reptile",
   "hedgehog",
   "rabbit",
   "other"
  ],
  "prefecture": "東京都",
  "area": "原宿",
  "address": "東京都渋谷区神宮前1-7-1 CUTE CUBE HARAJUKU 3F",
  "access": "原宿エリア（公式ページに最寄駅の記載なし）",
  "url": "https://moff-moff.jp/animal-cafe/shop/harajuku/",
  "price": "中学生以上3,500円（時間無制限、ドリンクバー込み）",
  "price_level": 4,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "CUTE CUBE 原宿の定休日に準ずる",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "時間無制限プランあり",
   "ドリンク込み",
   "子ども可",
   "複数の動物"
  ],
  "description": "原宿の商業施設内にある店で、フタユビナマケモノ、フクロウ、インコ、ハリネズミ、ウサギ、チンチラなどがいる。料金は他のMoffより高めだがドリンクバー込みで、予約は要らない。動物の抱っこはできない。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式店舗ページ https://moff-moff.jp/animal-cafe/shop/harajuku/ で確認"
 },
 {
  "id": "okayama-smallanimal-garamomo-cafe-kurashiki",
  "name": "GaraMomoCAFE（ガラモモカフェ）",
  "animals": [
   "smallanimal",
   "hedgehog"
  ],
  "prefecture": "岡山県",
  "area": "倉敷・美観地区",
  "address": "岡山県倉敷市中央1-1-7 2F",
  "access": "倉敷・美観地区（公式ページに最寄駅の記載なし）",
  "url": "https://owls-cats-forest.com/free/garamomo",
  "price": "大人（13歳以上）900円／小人（6〜12歳）700円（ワンドリンク付き）",
  "price_level": 1,
  "hours": "3〜11月 平日10:15〜16:30・土日祝10:00〜17:00／12〜2月 平日10:30〜16:30・土日祝10:30〜17:00（最終入場は閉店30分前）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "ドリンク込み"
  ],
  "description": "ショウガラゴ、フクロモモンガ、ハリネズミなど夜行性の動物が暮らす店で、昼夜逆転の部屋で活動する姿を間近に見て触れられる。当日分のチケットを店頭で売る方式で、予約はできず、完売なら入れない。6歳以上が対象だ。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://owls-cats-forest.com/free/garamomo （店舗登録 令和8年4月、サイト表記2026年）で確認"
 },
 {
  "id": "tokyo-smallanimal-chipmunk-cafe-kameido",
  "name": "シマリスカフェ アースのおみせ",
  "animals": [
   "smallanimal"
  ],
  "prefecture": "東京都",
  "area": "亀戸",
  "address": "東京都江東区亀戸6-57-22 平塚ビル3F",
  "access": "JR亀戸駅東口から徒歩1分",
  "url": "https://chipmunk-cafe.com/",
  "price": "2時間制 平日2,750円／土日祝3,190円（税込）＋ワンオーダー。手のり体験605円・おやつ体験440円は別",
  "price_level": 4,
  "hours": "10:00〜18:00（最終入店16:00）",
  "closed": "毎週月・火曜（祝日を除く）",
  "reservation": "推奨",
  "features": [
   "駅近",
   "えさやり体験"
  ],
  "description": "シマリスだけを飼う日本初のシマリスカフェで、公式は「ふれあい施設ではない」と明記している。見て過ごすほか、手のり体験やおやつ体験を有料で選べる。シマリスをゆっくり眺めたい人向けだ。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://chipmunk-cafe.com/ （お知らせ 2026-11-02）で確認。Web予約は前日19時まで、当日は電話で空席確認"
 },
 {
  "id": "gunma-smallanimal-marshmallow-panda-maebashi",
  "name": "アニマルカフェ＆ショップ マシュマロパンダ",
  "animals": [
   "smallanimal",
   "hedgehog",
   "owl",
   "reptile",
   "dog",
   "cat",
   "rabbit"
  ],
  "prefecture": "群馬県",
  "area": "前橋",
  "address": "群馬県前橋市川原町2丁目35-5",
  "access": "JR上越線「群馬総社駅」からタクシー約7分（駐車場16台あり、車での来店が中心）",
  "url": "https://love.gunma.jp/",
  "price": "1時間制 大人（中学生以上）1,400円／子供（3歳以上）900円（税込）",
  "price_level": 2,
  "hours": "平日13:00〜18:00（最終入店17:00）／土日祝11:00〜19:00（最終入店18:00）",
  "closed": "水曜（祝日は営業）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "子ども可",
   "複数の動物"
  ],
  "description": "犬・猫からハリネズミ、ウサギ、フェレット、フクロウ、爬虫類までふれあえる総合型のアニマルカフェで、ペットショップと動物病院を併設する。部屋ごとに動物が分かれていて、子犬や子猫とも触れられる。家族連れで多くの動物を回りたい人向けだ。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://love.gunma.jp/ 、店舗案内 https://love.gunma.jp/access/ （お知らせ 2026-10-12）で確認。予約の要否は公式に記載なし（予約限定プランはあり）"
 },
 {
  "id": "nara-smallanimal-hanahana-nara",
  "name": "小動物カフェ はなはな",
  "animals": [
   "smallanimal",
   "dog",
   "owl",
   "bird",
   "reptile",
   "rabbit"
  ],
  "prefecture": "奈良県",
  "area": "奈良市",
  "address": "奈良県奈良市角振町12 三条会館ビル2階",
  "access": "近鉄奈良駅から徒歩圏の三条通り沿い（公式ページに最寄駅の記載なし）",
  "url": "https://www.hanahana-nara.com/",
  "price": "1時間 大人1,800円／子ども1,300円（1ドリンク付き、2歳以下無料）",
  "price_level": 2,
  "hours": "12:00〜19:00（最終入店18:00）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "ドリンク込み",
   "子ども可",
   "複数の動物"
  ],
  "description": "フクロウ、爬虫類、インコ、ウサギなど約60匹がいる奈良の小動物カフェ。1時間料金に1ドリンクが付き、延長もできる。完全予約制ではないが、予約すると待たずに入れる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://www.hanahana-nara.com/ 、料金 https://www.hanahana-nara.com/menu/ で確認（お知らせの最新は2025-12-23）"
 },
 {
  "id": "hyogo-smallanimal-anipon-world-suma",
  "name": "アニPONワールド",
  "animals": [
   "smallanimal",
   "owl",
   "reptile"
  ],
  "prefecture": "兵庫県",
  "area": "神戸・須磨（妙法寺）",
  "address": "兵庫県神戸市須磨区妙法寺字乗越200番地の6",
  "access": "地下鉄妙法寺駅から徒歩4分",
  "url": "https://aniponworld.com/",
  "price": "50分制 大人2,800円／中学生以下2,200円（ふれあい・ほとんどの動物の餌やり込み）。2026年10月20日に価格改定の告知があり、改定後の額は公式に未掲載のため来店前に確認を",
  "price_level": 3,
  "hours": "平日・土曜13:30〜21:30（平日は予約のみ）／日・祝12:30〜19:30（最終受付18:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "駅近",
   "複数の動物"
  ],
  "description": "リスザル、キンカジュー、ミーアキャット、ショウガラゴ、ハリネズミ、ハリスホーク、爬虫類など多くの種類にふれあえる50分制の施設。餌やりも料金に含まれる。平日は予約が必要で、日曜・祝日は予約優先だ。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://aniponworld.com/ （お知らせ 2026-10-11）で確認。営業日は公式カレンダー"
 },
 {
  "id": "osaka-smallanimal-animalcafe-fuleca-fukushima",
  "name": "animalcafe fuleca 福島店",
  "animals": [
   "smallanimal",
   "owl",
   "bird",
   "reptile",
   "hedgehog",
   "rabbit"
  ],
  "prefecture": "大阪府",
  "area": "福島",
  "address": "大阪府大阪市福島区福島7-5-7 StoRK BLDG 2F",
  "access": "JR福島駅から徒歩約3分",
  "url": "https://animal-fuleca.studio.site/",
  "price": "1時間 大人1,800円／小人（2〜12歳）1,000円＋ワンオーダー（2026-01-01改定）",
  "price_level": 3,
  "hours": "10:00〜20:00（最終受付19:00。18:30に閉店する場合あり）",
  "closed": "不定休",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "駅近",
   "子ども可",
   "貸切可",
   "複数の動物"
  ],
  "description": "サル、ショウガラゴ、フェネック、チンチラ、ハリネズミ、フクロウ、インコ、爬虫類まで30種類以上と触れ合える店。触れたい動物をスタッフに指名する方式で、フクロウの腕乗せなどは有料オプションだ。入場料に加えてワンオーダーが必要になる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://animal-fuleca.studio.site/ （お知らせ 2026-06-20、料金改定 2025-12-15）で確認。予約は公式LINE、席の確保はできないが優先案内"
 },
 {
  "id": "tokyo-smallanimal-kawaii-land-kyunkyun-harajuku",
  "name": "原宿かわいいランド キュンキュン",
  "animals": [
   "smallanimal",
   "hedgehog"
  ],
  "prefecture": "東京都",
  "area": "原宿",
  "address": "東京都渋谷区神宮前1-9-30 FLEG原宿B1F",
  "access": "原宿・竹下通りエリア（公式ページに最寄駅の記載なし）",
  "url": "https://harajukukawaiiland-kyunkyun.com/",
  "price": "フリータイム 13歳以上2,500円／4〜12歳1,500円（3歳以下無料。混雑時は1時間まで）",
  "price_level": 3,
  "hours": "10:00〜19:00（公式サイト内に18:00までの表記もあり。来店前に確認を）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "抱っこOK",
   "ふれあいOK",
   "時間無制限プランあり",
   "子ども可"
  ],
  "description": "ハリネズミ、モルモット、ハムスター、チンチラの4種類とふれあえる原宿の小さな店。料金はフリータイム制だが、混雑時は1時間までとなる。気に入った動物はお迎えの相談もできる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://harajukukawaiiland-kyunkyun.com/ で確認（公式サイトに日付付きのお知らせなし、お盆期間の料金注記あり）。公式Instagram @kyunkyun_harajuku。予約の要否は公式に記載なし"
 },
 {
  "id": "kyoto-farm-mipig-cafe-kyoto",
  "name": "mipig cafe 京都店",
  "animals": [
   "farm"
  ],
  "prefecture": "京都府",
  "area": "河原町",
  "address": "京都府京都市中京区新京極通四条上る中之町560-2 七宝新京極ビル",
  "access": "京都河原町駅9番出口から徒歩3分",
  "url": "https://mipig.cafe/locations/kyoto/",
  "price": "4歳以上2,200円／25分、3,300円／55分（3歳以下1,100円）",
  "price_level": 4,
  "hours": "10:00〜20:00",
  "closed": "公式ページに記載なし（予約枠で確認）",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "子ども可",
   "駅近",
   "貸切可",
   "予約制"
  ],
  "description": "手のひらサイズのマイクロブタと触れ合えるお店で、新京極の商店街ビルの2〜3階にあります。Web予約のみで、電話予約は受け付けていません。観光ついでに寄れる立地で、ブタを抱っこしたい人や子連れに向きます。",
  "source_note": "公式 https://mipig.cafe/locations/kyoto/ で住所・営業時間・料金・予約を確認（店舗一覧 https://mipig.cafe/ ）",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "osaka-farm-mipig-cafe-osaka",
  "name": "mipig cafe 大阪店",
  "animals": [
   "farm"
  ],
  "prefecture": "大阪府",
  "area": "心斎橋",
  "address": "大阪府大阪市中央区西心斎橋2-10-32 TRN心斎橋 2階",
  "access": "心斎橋駅7番出口から徒歩5分、四ツ橋駅5番出口から徒歩3分",
  "url": "https://mipig.cafe/locations/osaka/",
  "price": "4歳以上1,870円／25分、2,970円／55分（3歳以下770円）",
  "price_level": 3,
  "hours": "10:00〜20:00",
  "closed": "公式ページに記載なし（予約枠で確認）",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "子ども可",
   "貸切可",
   "予約制"
  ],
  "description": "心斎橋エリアでマイクロブタとふれあえる、予約制のお店です。25分と55分の2つの時間枠があり、個室プランも選べます。買い物や観光の合間に動物と触れたい人向けです。",
  "source_note": "公式 https://mipig.cafe/locations/osaka/ で住所・営業時間・料金・予約を確認（店舗一覧 https://mipig.cafe/ ）",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "aichi-farm-mipig-cafe-mozo-nagoya",
  "name": "mipig cafe モゾ名古屋店",
  "animals": [
   "farm"
  ],
  "prefecture": "愛知県",
  "area": "上小田井",
  "address": "愛知県名古屋市西区二方町40番 mozoワンダーシティ 2階",
  "access": "上小田井駅北口から徒歩約5分",
  "url": "https://mipig.cafe/locations/mozonagoya/",
  "price": "一般1,760円／25分、2,310円／55分（小学生1,210円〜、未就学児660円）",
  "price_level": 3,
  "hours": "10:30〜20:00",
  "closed": "公式ページに記載なし（予約枠で確認）",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "子ども可",
   "駅近",
   "貸切可",
   "予約制"
  ],
  "description": "大型商業施設の2階で、マイクロブタと過ごせるお店です。年齢ごとに料金が分かれていて、家族でも使いやすい作りです。名古屋近郊でショッピングのついでにブタと触れ合いたい人向けです。",
  "source_note": "公式 https://mipig.cafe/locations/mozonagoya/ で住所・営業時間・料金・予約を確認（店舗一覧 https://mipig.cafe/ ）",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "fukuoka-farm-mipig-cafe-tenjin",
  "name": "mipig cafe 福岡天神店",
  "animals": [
   "farm"
  ],
  "prefecture": "福岡県",
  "area": "天神・大名",
  "address": "福岡県福岡市中央区大名2-1-18 BROOM福岡 5F-C",
  "access": "西鉄福岡（天神）駅から徒歩7分",
  "url": "https://mipig.cafe/locations/fukuoka/",
  "price": "一般1,760円／25分、2,310円／55分（小学生1,210円〜、未就学児660円）",
  "price_level": 3,
  "hours": "10:00〜18:00",
  "closed": "公式ページに記載なし（予約枠で確認）",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "子ども可",
   "貸切可",
   "予約制"
  ],
  "description": "天神・大名エリアのビル5階にある、マイクロブタのふれあいカフェです。閉まるのが18時と早めなので、昼間の予定に組み込むのがおすすめです。九州でブタに会いたい人や、子ども連れに向きます。",
  "source_note": "公式 https://mipig.cafe/locations/fukuoka/ で住所・営業時間・料金・予約を確認（店舗一覧 https://mipig.cafe/ ）",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "hokkaido-farm-mipig-cafe-aeon-sapporo-hassamu",
  "name": "mipig cafe イオンモール札幌発寒店",
  "animals": [
   "farm"
  ],
  "prefecture": "北海道",
  "area": "発寒",
  "address": "北海道札幌市西区発寒8条12-1-1 イオンモール札幌発寒 3F（327区画）",
  "access": "イオンモール札幌発寒内",
  "url": "https://mipig.cafe/locations/sapporohassamu/",
  "price": "一般1,760円／25分、2,310円／55分（小学生1,210円〜、未就学児660円）",
  "price_level": 3,
  "hours": "10:00〜20:00",
  "closed": "公式ページに記載なし（予約枠で確認）",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "子ども可",
   "貸切可",
   "予約制"
  ],
  "description": "大型モールの3階にある、札幌では貴重なマイクロブタのふれあいカフェです。予約はWebのみで、個室プランもあります。雪の日でも屋内で動物と遊びたい家族連れに向きます。",
  "source_note": "公式 https://mipig.cafe/locations/sapporohassamu/ で住所・営業時間・料金・予約を確認（店舗一覧 https://mipig.cafe/ ）",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "chiba-farm-narita-yume-bokujo",
  "name": "成田ゆめ牧場",
  "animals": [
   "farm",
   "rabbit",
   "smallanimal"
  ],
  "prefecture": "千葉県",
  "area": "成田",
  "address": "千葉県成田市名木730-3",
  "access": "JR成田駅・JR滑河駅から無料送迎バスあり（公式に時刻表）",
  "url": "https://www.yumebokujo.com/",
  "price": "大人（中学生以上）平日1,600円・土日祝1,800円、4歳以上800円〜（駐車料金別）",
  "price_level": 2,
  "hours": "平日9:30〜16:30、土日祝9:30〜17:00（冬期は変動）",
  "closed": "不定休（年に数日の休園日を公式に掲載）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "子ども可",
   "複数の動物"
  ],
  "description": "ヤギやヒツジ、ウマ、ウサギ、モルモットなどにえさをあげたり触れたりできる観光牧場です。園内にはファームカフェのほか、ピザやソフトクリームのお店もあり、一日のんびり過ごせます。家族連れ向けで、ヤギを散歩させる体験（有料）もあります。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://www.yumebokujo.com/access.html（料金・営業時間）、/fureau.html（動物・えさ代）、/taberu.html（ファームカフェ）で確認"
 },
 {
  "id": "tochigi-farm-nasu-senbonmatsu-bokujo",
  "name": "那須千本松牧場",
  "animals": [
   "farm",
   "rabbit",
   "smallanimal"
  ],
  "prefecture": "栃木県",
  "area": "那須塩原",
  "address": "栃木県那須塩原市千本松799",
  "access": "JR西那須野駅から路線バス約15分「千本松」下車",
  "url": "https://www.senbonmatsu.com/",
  "price": "牧場の入場・駐車は無料。どうぶつふれあい広場は小学生以上500円、3歳〜未就学児200円",
  "price_level": 1,
  "hours": "どうぶつふれあい広場 9:00〜17:00（ファームレストラン・オープンカフェは時間が異なる）",
  "closed": "ふれあい広場は無休（雨天・動物の体調で休止あり）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "子ども可",
   "複数の動物"
  ],
  "description": "ヒツジ、ヤギ、ウサギ、モルモット、子牛、エミューなど約100頭に会える広場があり、えさやりやヤギ・ヒツジの散歩（有料）ができます。園内にはファームレストランや週末営業のオープンカフェ、ソフトクリーム店があります。入場無料で立ち寄りやすく、車で行く家族連れ向けです。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://www.senbonmatsu.com/animal/（動物・料金）、/schedule/（営業時間・飲食）、/info/（住所・アクセス）で確認"
 },
 {
  "id": "hyogo-farm-rokkosan-bokujo",
  "name": "神戸市立六甲山牧場（ゆめまきば）",
  "animals": [
   "farm"
  ],
  "prefecture": "兵庫県",
  "area": "六甲山",
  "address": "兵庫県神戸市灘区六甲山町中一里山1-1",
  "access": "神戸・三宮から公共交通で約1時間20分（車で約35分）",
  "url": "https://rokkosan.jp/",
  "price": "大人600円（12〜2月は400円）、小・中学生200円、幼児無料（駐車料金別）",
  "price_level": 1,
  "hours": "9:00〜17:00（最終入場16:30）",
  "closed": "火曜（祝日は営業）、年末年始、臨時休業あり",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "子ども可"
  ],
  "description": "ヒツジやヤギが敷地内を歩く六甲山上の牧場で、ヤギへのえさやりや子牛の授乳体験、引き馬ができます。園内には神戸チーズのレストランや、パンのあるベーカリー＆カフェがあり、食事も楽しめます。景色の良い場所でゆっくり動物を眺めたい家族連れ向けです。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://rokkosan.jp/（料金・営業時間・アクセス）、/animal/（ふれあい）、/eatbuy/（レストラン・カフェ）で確認。ウサギ・モルモットは公式で「ふれあいできません」のため animals は farm のみ（2026-11-06 検品②で修正）"
 },
 {
  "id": "miyazaki-farm-takachiho-bokujo",
  "name": "高千穂牧場",
  "animals": [
   "farm",
   "rabbit"
  ],
  "prefecture": "宮崎県",
  "area": "都城（霧島高原）",
  "address": "宮崎県都城市吉之元町5265番地103",
  "access": "JR霧島神宮駅からタクシー約10分",
  "url": "https://www.takachiho-bokujou.co.jp/",
  "price": "入場無料・駐車場無料。どうぶつのおやつ1個200円",
  "price_level": 1,
  "hours": "9:00〜17:00（まきばのレストランは10:30〜16:30）",
  "closed": "営業カレンダーに準ずる（公式サイトに掲載）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "子ども可"
  ],
  "description": "白い顔のコリデールと黒い顔のサフォークの2種類のヒツジ、ヤギ、ウサギにふれあえる、入場無料の牧場です。ヒツジには手渡しでおやつをあげられます。園内の「まきばのレストラン」では焼肉やジンギスカンなどが食べられ、九州で家族連れの外出先を探す人に向きます。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://www.takachiho-bokujou.co.jp/oneday/fureai/（動物・おやつ）、/oneday/restaurant/（レストラン）、/access/（住所・営業時間）で確認。小動物（モルモット等）は公式で確認できないため smallanimal を外した（2026-11-06）"
 },
 {
  "id": "toyama-farm-mipig-cafe-aeon-takaoka",
  "name": "mipig cafe イオンモール高岡店",
  "animals": [
   "farm"
  ],
  "prefecture": "富山県",
  "area": "高岡",
  "address": "富山県高岡市下伏間江383 イオンモール高岡 西館2F",
  "access": "イオンモール高岡 西館2階",
  "url": "https://mipig.cafe/locations/toyama-takaoka/",
  "price": "一般1,760円／25分、2,310円／55分（小学生1,210円〜、未就学児660円）",
  "price_level": 3,
  "hours": "10:30〜20:00",
  "closed": "公式ページに記載なし（予約枠で確認）",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "子ども可",
   "予約制"
  ],
  "description": "2026年4月に北陸で初めて開いたマイクロブタのカフェで、モールの西館2階にある。予約はWebのみで、25分と55分から選ぶ。北陸でブタと触れ合いたい家族連れや、買い物ついでの人向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://mipig.cafe/locations/toyama-takaoka/ で住所・営業時間・料金・予約を確認（店舗一覧 https://mipig.cafe/ ）"
 },
 {
  "id": "hyogo-farm-mipig-cafe-kobe-sannomiya",
  "name": "mipig cafe 神戸三宮店",
  "animals": [
   "farm"
  ],
  "prefecture": "兵庫県",
  "area": "三宮",
  "address": "兵庫県神戸市中央区三宮町3-9-8",
  "access": "三宮エリア",
  "url": "https://mipig.cafe/locations/kobe-sannomiya/",
  "price": "一般1,760円／25分、2,310円／55分（小学生1,210円〜、未就学児660円）",
  "price_level": 3,
  "hours": "11:00〜19:00",
  "closed": "公式ページに記載なし（予約枠で確認）",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "子ども可",
   "予約制"
  ],
  "description": "三宮の路面の建物で、1階と2階を使ってマイクロブタと過ごせる店。モール内の店舗と違い、営業は11時から19時までと短め。自転車での来店は断られるので、徒歩か公共交通で行く。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://mipig.cafe/locations/kobe-sannomiya/ で住所・営業時間・料金・予約を確認（店舗一覧 https://mipig.cafe/ ）"
 },
 {
  "id": "tochigi-farm-mipig-cafe-utsunomiya-interpark",
  "name": "mipig cafe 宇都宮インターパークビレッジ店",
  "animals": [
   "farm"
  ],
  "prefecture": "栃木県",
  "area": "宇都宮",
  "address": "栃木県宇都宮市インターパーク4-1-3 IPSビレッジ",
  "access": "IPSビレッジ内（インターパーク）",
  "url": "https://mipig.cafe/locations/utsunomiya/",
  "price": "一般1,760円／25分、2,310円／55分（小学生1,210円〜、未就学児660円）",
  "price_level": 3,
  "hours": "10:00〜20:00",
  "closed": "公式ページに記載なし（予約枠で確認）",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "子ども可",
   "貸切可",
   "予約制"
  ],
  "description": "宇都宮のショッピングエリア内にあるマイクロブタのカフェで、2025年秋に開業した。フロア全体が見渡せる作りで、個室プランもある。車で出かける家族や、栃木で小さなブタに会いたい人向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://mipig.cafe/locations/utsunomiya/ で住所・営業時間・料金・予約を確認（店舗一覧 https://mipig.cafe/ ）"
 },
 {
  "id": "miyagi-farm-mipig-cafe-aeon-natori",
  "name": "mipig cafe イオンモール名取店",
  "animals": [
   "farm"
  ],
  "prefecture": "宮城県",
  "area": "名取",
  "address": "宮城県名取市杜せきのした5-3-1 イオンモール名取 1F",
  "access": "イオンモール名取 1階",
  "url": "https://mipig.cafe/locations/sendai-natori/",
  "price": "一般1,760円／25分、2,310円／55分（小学生1,210円〜、未就学児660円）",
  "price_level": 3,
  "hours": "10:00〜20:00",
  "closed": "公式ページに記載なし（予約枠で確認）",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "子ども可",
   "貸切可",
   "予約制"
  ],
  "description": "仙台空港に近い大型モールの1階にある、マイクロブタのふれあいカフェ。予約はWebのみで、個室プランもある。東北でブタと触れ合える数少ない場所なので、仙台周辺の家族連れに向く。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://mipig.cafe/locations/sendai-natori/ で住所・営業時間・料金・予約を確認（店舗一覧 https://mipig.cafe/ ）"
 },
 {
  "id": "saitama-farm-mipig-cafe-mallage-shobu",
  "name": "mipig cafe モラージュ菖蒲店",
  "animals": [
   "farm"
  ],
  "prefecture": "埼玉県",
  "area": "久喜・菖蒲",
  "address": "埼玉県久喜市菖蒲町菖蒲6005番地1 モラージュ菖蒲 1F",
  "access": "モラージュ菖蒲 1階",
  "url": "https://mipig.cafe/locations/mallage-shobu/",
  "price": "一般1,760円／25分、2,310円／55分（小学生1,210円〜、未就学児660円）",
  "price_level": 3,
  "hours": "10:30〜20:00",
  "closed": "公式ページに記載なし（予約枠で確認）",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "子ども可",
   "貸切可",
   "予約制"
  ],
  "description": "埼玉北東部のモール1階にあるマイクロブタのカフェで、25分か55分を事前にWebで予約する。個室プランもあるので、小さな子どもと落ち着いて過ごしたい人に向く。自転車での来店は不可。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://mipig.cafe/locations/mallage-shobu/ で住所・営業時間・料金・予約を確認（店舗一覧 https://mipig.cafe/ ）"
 },
 {
  "id": "fukuoka-farm-mipig-cafe-aeon-fukuoka",
  "name": "mipig cafe イオンモール福岡店",
  "animals": [
   "farm"
  ],
  "prefecture": "福岡県",
  "area": "粕屋",
  "address": "福岡県糟屋郡粕屋町大字酒殿字老ノ木192-1 イオンモール福岡 2階",
  "access": "イオンモール福岡 2階",
  "url": "https://mipig.cafe/locations/aeon-fukuoka/",
  "price": "一般1,760円／25分、2,310円／55分（小学生1,210円〜、未就学児660円）（個室は別途25分550円）",
  "price_level": 3,
  "hours": "10:30〜20:00",
  "closed": "公式ページに記載なし（予約枠で確認）",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "子ども可",
   "貸切可",
   "予約制"
  ],
  "description": "福岡市の東隣、粕屋町のモール2階にあるマイクロブタのカフェ。個室プランは通常料金に25分あたり550円が加わる。天神店とは別の場所なので、福岡東部や郊外に住む人が行きやすい。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://mipig.cafe/locations/aeon-fukuoka/ で住所・営業時間・料金・予約を確認（店舗一覧 https://mipig.cafe/ ）"
 },
 {
  "id": "chiba-farm-mipig-cafe-aeon-makuhari",
  "name": "mipig cafe イオンモール幕張新都心店",
  "animals": [
   "farm"
  ],
  "prefecture": "千葉県",
  "area": "幕張新都心",
  "address": "千葉県千葉市美浜区豊砂1-5 イオンモール幕張新都心 エキマエモール2階",
  "access": "イオンモール幕張新都心 エキマエモール2階",
  "url": "https://mipig.cafe/locations/makuharinewcity/",
  "price": "一般1,760円／25分、2,310円／55分（小学生1,210円〜、未就学児660円）",
  "price_level": 3,
  "hours": "10:30〜20:00",
  "closed": "公式ページに記載なし（予約枠で確認）",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "子ども可",
   "貸切可",
   "予約制"
  ],
  "description": "幕張新都心のモール、エキマエモールの2階にあるマイクロブタのカフェ。受付とフロア全体のスペースがあり、個室プランも選べる。都内から京葉線で行ける距離なので、買い物と組み合わせたい人向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://mipig.cafe/locations/makuharinewcity/ で住所・営業時間・料金・予約を確認（店舗一覧 https://mipig.cafe/ ）"
 },
 {
  "id": "saitama-farm-mipig-cafe-aeon-laketown",
  "name": "mipig cafe イオンレイクタウン店",
  "animals": [
   "farm"
  ],
  "prefecture": "埼玉県",
  "area": "越谷レイクタウン",
  "address": "埼玉県越谷市レイクタウン4-2-2 イオンレイクタウン KAZE 1F 100",
  "access": "JR武蔵野線 越谷レイクタウン駅（駐車場からは距離があるためレイクタウンゲートが目安）",
  "url": "https://mipig.cafe/locations/aeonlaketown/",
  "price": "一般1,760円／25分、2,310円／55分（小学生1,210円〜、未就学児660円）",
  "price_level": 3,
  "hours": "10:00〜20:00",
  "closed": "公式ページに記載なし（予約枠で確認）",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "子ども可",
   "駅近",
   "予約制"
  ],
  "description": "日本最大級のモール、レイクタウンのKAZE棟1階にあるマイクロブタのカフェ。10時開店の時間帯は立体駐車場の出入口が閉まっているため、公式が案内する経路で向かう。埼玉南部で家族連れにちょうどよい店。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://mipig.cafe/locations/aeonlaketown/ で住所・営業時間・料金・予約を確認（店舗一覧 https://mipig.cafe/ ）"
 },
 {
  "id": "tokyo-farm-alpaca-fureai-land-kagurazaka",
  "name": "アルパカふれあいランド",
  "animals": [
   "farm",
   "rabbit",
   "smallanimal"
  ],
  "prefecture": "東京都",
  "area": "神楽坂",
  "address": "東京都新宿区岩戸町19番地 一五屋ビル102",
  "access": "都営大江戸線 牛込神楽坂駅A3出口から徒歩1分",
  "url": "https://alpacaland.tokyo/",
  "price": "大人1,500円／30分（土日祝1,700円）、子ども700円（土日祝800円）、えさ500円〜別売",
  "price_level": 2,
  "hours": "10:00〜18:00（最終入店17:30、30分ごとの入れ替え枠）",
  "closed": "月曜（祝日の場合は翌日）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "駅近",
   "子ども可",
   "複数の動物",
   "貸切可"
  ],
  "description": "神楽坂の街なかでアルパカ2頭にえさをあげたり触れたりできる専門施設だ。ウサギやチンチラもおり、有料で散歩体験や記念撮影もできる。飲食店ではなく店内での食事は不可で、アルパカを目当てに短時間立ち寄りたい人に向く。",
  "source_note": "公式 https://alpacaland.tokyo/ で料金・営業時間・定休日・アクセスを確認。予約は専用ページか電話で、30分枠ごとに定員10名",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "hokkaido-farm-heidi-bokujo",
  "name": "ハイジ牧場",
  "animals": [
   "farm",
   "rabbit",
   "smallanimal"
  ],
  "prefecture": "北海道",
  "area": "長沼町",
  "address": "北海道夕張郡長沼町東9線南2番地",
  "access": "公式ページに記載なし（来店前に確認を）。駐車場無料（約150台）",
  "url": "https://www.heidi-farm.com/",
  "price": "大人（中学生以上）1,200円、小人（3歳〜小学生）550円。えさやり200円、仔ヤギ哺乳600円",
  "price_level": 2,
  "hours": "10:00〜16:00（4月は16:00、5〜9月は17:00まで。営業期間は2026年4月11日〜11月8日）",
  "closed": "毎週水曜（祝日は営業）。冬期は休業（2026年の営業は11月8日まで。再開は公式で確認を）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "子ども可",
   "複数の動物"
  ],
  "description": "羊やヤギ、ウシ、アルパカ、ウサギ、モルモットなどと触れ合える北海道長沼町の観光牧場だ。仔ヤギの哺乳や乳しぼり、バター作りなど体験が多い。営業は雪のない時期が中心なので、冬期の営業は公式で確認してから行きたい。",
  "source_note": "公式 https://www.heidi-farm.com/pages/2333006/profile で営業期間・料金・定休日、/pages/2333105/page_201810191411 で住所を確認。11月9日以降の営業は公式に記載なし",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "tokyo-farm-mipig-cafe-asakusa",
  "name": "mipig cafe 浅草店",
  "animals": [
   "farm"
  ],
  "prefecture": "東京都",
  "area": "浅草",
  "address": "東京都台東区浅草1-36-11 シャトーアモール2F",
  "access": "公式ページに記載なし（来店前に確認を）",
  "url": "https://mipig.cafe/locations/asakusa/",
  "price": "4歳以上2,200円／25分、3,300円／55分（3歳以下1,100円）",
  "price_level": 4,
  "hours": "9:00〜19:00",
  "closed": "公式ページに記載なし（予約枠で確認）",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "子ども可",
   "予約制"
  ],
  "description": "浅草にあるマイクロブタのカフェで、事前予約制だ。25分と55分の時間枠があり、ブタをなでたり抱いたりして過ごす。観光の合間に小さなブタと触れ合いたい人向けで、3歳以下は半額で入れる。",
  "source_note": "公式 https://mipig.cafe/locations/asakusa/ で住所・営業時間・料金・予約を確認（店舗一覧 https://mipig.cafe/locations/ ）",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "tokyo-farm-mipig-cafe-harajuku",
  "name": "mipig cafe 原宿店",
  "animals": [
   "farm"
  ],
  "prefecture": "東京都",
  "area": "原宿",
  "address": "東京都渋谷区神宮前1-15-4",
  "access": "原宿駅・明治神宮前駅から徒歩約5分",
  "url": "https://mipig.cafe/locations/harajuku/",
  "price": "4歳以上3,300円／25分、4,950円／55分（3歳以下1,100円）。個室プランは別途550円／25分",
  "price_level": 4,
  "hours": "10:00〜20:00",
  "closed": "公式ページに記載なし（予約枠で確認）",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "子ども可",
   "貸切可",
   "予約制",
   "駅近"
  ],
  "description": "原宿エリアにあるマイクロブタのカフェで、完全予約制だ。25分または55分の枠で、ブタと間近にふれあえる。グループで使える個室プランがあり、友人同士や家族で静かに過ごしたい人に向く。",
  "source_note": "公式 https://mipig.cafe/locations/harajuku/ で住所・営業時間・料金・予約を確認（店舗一覧 https://mipig.cafe/locations/ ）",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "tokyo-farm-mipig-cafe-harajuku-takeshita",
  "name": "mipig cafe 原宿竹下通り店",
  "animals": [
   "farm"
  ],
  "prefecture": "東京都",
  "area": "原宿・竹下通り",
  "address": "東京都渋谷区神宮前1-6-10 DEAR LIFE原宿竹下通り 1階",
  "access": "公式ページに記載なし（竹下通り内。来店前に確認を）",
  "url": "https://mipig.cafe/locations/harajuku-takeshita/",
  "price": "4歳以上3,300円／25分、4,950円／55分（3歳以下1,100円）",
  "price_level": 4,
  "hours": "10:00〜20:00",
  "closed": "公式ページに記載なし（予約枠で確認）",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "子ども可",
   "予約制"
  ],
  "description": "竹下通りの商業ビル1階にあるマイクロブタのカフェで、事前予約制だ。25分と55分の枠があり、観光や買い物の合間に立ち寄りやすい。ブタと間近で過ごしたい人向けである。",
  "source_note": "公式 https://mipig.cafe/locations/harajuku-takeshita/ で住所・営業時間・料金・予約を確認（店舗一覧 https://mipig.cafe/locations/ ）",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "tokyo-farm-mipig-cafe-ikebukuro-sunshine",
  "name": "mipig cafe 池袋サンシャインシティ店",
  "animals": [
   "farm"
  ],
  "prefecture": "東京都",
  "area": "池袋",
  "address": "東京都豊島区東池袋3-1-1 サンシャインシティ専門店街アルパ地下1階",
  "access": "サンシャインシティ専門店街アルパ地下1階",
  "url": "https://mipig.cafe/locations/ikebukuro/",
  "price": "4歳以上1,870円／25分、2,970円／55分（3歳以下770円）。個室プランは別途",
  "price_level": 3,
  "hours": "10:00〜20:00",
  "closed": "公式ページに記載なし（予約枠で確認）",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "子ども可",
   "貸切可",
   "予約制"
  ],
  "description": "サンシャインシティ内にあるマイクロブタのカフェで、事前予約制だ。25分と55分の枠があり、個室プランも選べる。池袋での買い物や水族館めぐりの合間に、ブタとゆっくり触れ合いたい家族連れに向く。",
  "source_note": "公式 https://mipig.cafe/locations/ikebukuro/ で住所・営業時間・料金・予約を確認（店舗一覧 https://mipig.cafe/locations/ ）",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "tokyo-farm-mipig-cafe-meguro",
  "name": "mipig cafe 目黒店",
  "animals": [
   "farm"
  ],
  "prefecture": "東京都",
  "area": "目黒",
  "address": "東京都目黒区目黒4-11-3",
  "access": "目黒駅から徒歩約15分（東急バス「元競馬場前」から徒歩1分）",
  "url": "https://mipig.cafe/locations/meguro/",
  "price": "4歳以上1,870円／25分、2,970円／55分（3歳以下770円）",
  "price_level": 3,
  "hours": "10:00〜18:00",
  "closed": "公式ページに記載なし（予約枠で確認）",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "子ども可",
   "予約制"
  ],
  "description": "目黒駅から少し離れた住宅街にあるマイクロブタのカフェで、事前予約制だ。公式は駅からバスでの来店を勧めている。観光地の店より落ち着いており、時間をかけてブタと触れ合いたい人向けである。",
  "source_note": "公式 https://mipig.cafe/locations/meguro/ で住所・営業時間・料金・予約を確認（店舗一覧 https://mipig.cafe/locations/ ）",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "aichi-farm-aichi-bokujo",
  "name": "愛知牧場（どうぶつ広場）",
  "animals": [
   "farm",
   "rabbit",
   "smallanimal"
  ],
  "prefecture": "愛知県",
  "area": "日進",
  "address": "愛知県日進市米野木町南山977",
  "access": "公式サイトに最寄駅の記載なし（車でのアクセスが中心。来店前に確認を）",
  "url": "https://aiboku.com/",
  "price": "どうぶつ広場入場300円（2歳以下無料）、えさ200円〜（牧場自体の入場は無料）",
  "price_level": 1,
  "hours": "どうぶつ広場 10:00〜16:00（16:30閉園。牧場全体は9:00〜17:00）",
  "closed": "火曜日",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "子ども可",
   "複数の動物"
  ],
  "description": "名古屋近郊の牧場で、有料のどうぶつ広場ではヒツジやヤギ、ウサギ、モルモット、マーラなどにえさをあげられる。小さな子ども連れで、手軽に動物とふれあいたい人に向く。牧場には駐車料金がかかる日がある。",
  "source_note": "公式 https://aiboku.com/activity/animal-feeding で入場料・えさ料金、https://aiboku.com/about/hours-of-operation で営業時間・定休日・住所を確認。駐車料金は土日月祝などに有料",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "osaka-farm-butagoya-joto",
  "name": "マイクロブタとのふれあい体験 豚小屋",
  "animals": [
   "farm"
  ],
  "prefecture": "大阪府",
  "area": "城東区・今福西",
  "address": "大阪府大阪市城東区今福西3-11-5",
  "access": "蒲生四丁目駅から徒歩約4分",
  "url": "https://butagoya.jp/",
  "price": "30分1,650円・45分2,000円・60分2,500円（事前予約料金・税込）。小学生未満は30分1,000円。おやつ330円、ドリンク550円は別料金",
  "price_level": 3,
  "hours": "10:00〜12:00／13:00〜17:00（月ごとに変わるため公式のお知らせを確認）",
  "closed": "水曜",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "子ども可"
  ],
  "description": "2025年7月に開いた、マイクロブタ10匹とふれあえる大阪の体験カフェだ。一頭ずつ名前と性格が公式に載っていて、おやつをあげながらのんびり過ごせる。30分・45分・60分から選べ、事前予約だと割引になる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://butagoya.jp/ のトップ（料金・営業時間・定休日・住所・予約なしでも来店可・事前予約で割引（FAQ）・NEWS 2026-11-06）で確認。最寄駅の徒歩分数は同サイトの概要文による。支払いはキャッシュレスのみ。ドリンク注文は必須ではない"
 },
 {
  "id": "ehime-farm-pspo-pigcafe-matsuyama",
  "name": "P・SPO Pig Cafe（ピースポ ピッグカフェ）",
  "animals": [
   "farm"
  ],
  "prefecture": "愛媛県",
  "area": "松山・銀天街",
  "address": "愛媛県松山市湊町4-6-16 1F",
  "access": "松山市中心部の銀天街エリア（最寄駅は公式ページに記載なし）",
  "url": "https://pspo.jp/pigcafe/",
  "price": "30分1,000円（小学生500円・未就学児無料、税込）。延長も30分ごとに同額。P・SPO会員は1日1回30分無料",
  "price_level": 2,
  "hours": "10:00〜19:00（最終受付18:20）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "子ども可"
  ],
  "description": "フィットネスジムのP・SPOが松山の商店街エリアで開いたマイクロブタカフェだ。30分単位の料金で、スタッフに誘導されてブタをひざに乗せるふれあいができる。小学生と未就学児の料金が別に決まっていて、買い物の合間に寄れる気軽さがある。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://pspo.jp/pigcafe/ で料金・営業時間・予約（事前予約をおすすめ）・住所（動物取扱業の表示は2026-06-12登録）を確認。2026-07オープンの運営会社プレスリリースとも一致。定休日・最寄駅の記載なし。1歳未満は入店不可"
 },
 {
  "id": "tokyo-other-meerkat-cafe-googoo",
  "name": "ミーアキャットカフェ googoo",
  "animals": [
   "other"
  ],
  "prefecture": "東京都",
  "area": "吉祥寺",
  "address": "東京都武蔵野市吉祥寺南町1-5-4 大庄吉祥寺ビル 3F",
  "access": "JR吉祥寺駅 公園口（南口）から徒歩1分",
  "url": "https://www.meer.cafe/",
  "price": "30分1,650円〜＋ワンドリンク550円〜",
  "price_level": 3,
  "hours": "11:00〜19:00（最終入店18:30）",
  "closed": "無休",
  "reservation": "推奨",
  "features": [
   "駅近",
   "ふれあいOK",
   "貸切可"
  ],
  "description": "ミーアキャットだけに絞った、めずらしいふれあいカフェです。群れで暮らす様子や、立ち上がってこちらを見る姿を近くで眺められます。夕方は比較的空いているとのことで、ミーアキャットだけをじっくり見たい人に向きます。",
  "source_note": "公式 https://www.meer.cafe/ で住所・営業時間・定休日・料金・予約導線を確認",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "aichi-other-anitouch-lalaport-nagoya-minato-aqls",
  "name": "アニタッチ ららぽーと名古屋みなとアクルス",
  "animals": [
   "other",
   "capybara",
   "smallanimal",
   "owl",
   "reptile",
   "bird",
   "hedgehog"
  ],
  "prefecture": "愛知県",
  "area": "名古屋港・港区",
  "address": "愛知県名古屋市港区港明2-3-2 ららぽーと名古屋みなとアクルス 3F",
  "access": "地下鉄名港線「港区役所駅」2番出口から徒歩約2分",
  "url": "https://www.nagoya.anitouch.com/",
  "price": "平日大人1,200円（時間無制限）、休日1,500円、4歳〜小学生700円〜",
  "price_level": 2,
  "hours": "平日10:00〜19:00、土日祝10:00〜20:00（最終入場は閉店30分前）",
  "closed": "不定休（ららぽーとの休館日に準ずる）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "時間無制限プランあり",
   "子ども可",
   "駅近",
   "複数の動物"
  ],
  "description": "カピバラやワオキツネザル、ミーアキャット、ナマケモノ、ハムスターなど約38種類がいる屋内型のふれあい動物園です。入場料で時間無制限、予約も不要なので、買い物の合間に立ち寄れます。動物は種類が多く、家族連れや「いろいろ見たい」人向けです。触れない動物もいます。",
  "source_note": "公式 https://www.nagoya.anitouch.com/ で確認",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "hyogo-other-moff-animal-cafe-lalaport-koshien",
  "name": "Moff animal cafe ららぽーと甲子園店",
  "animals": [
   "other",
   "capybara",
   "owl",
   "bird",
   "reptile",
   "smallanimal",
   "hedgehog",
   "rabbit"
  ],
  "prefecture": "兵庫県",
  "area": "甲子園",
  "address": "兵庫県西宮市甲子園八番町1-100 ららぽーと甲子園 1F",
  "access": "阪神甲子園駅から徒歩約5分",
  "url": "https://moff-moff.jp/animal-cafe/shop/koshien-lalaport/",
  "price": "中学生以上1,450円（時間無制限）＋ドリンクバー380円",
  "price_level": 2,
  "hours": "10:00〜20:00（最終入園19:30）",
  "closed": "ららぽーと甲子園の休館日に準ずる",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "時間無制限プランあり",
   "駅近",
   "子ども可",
   "複数の動物"
  ],
  "description": "フタユビナマケモノやカピバラ、アルマジロなど約40種類に会える商業施設内のお店です。フクロウ、インコ、爬虫類、ハムスターなども一緒にいます。入場料で時間無制限、予約不要なので、ナマケモノが目当ての人や家族連れに向きます。",
  "source_note": "公式店舗ページ https://moff-moff.jp/animal-cafe/shop/koshien-lalaport/ で確認",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "osaka-other-noahs-ark-tenjinbashisuji",
  "name": "Cat & Animal Cafe Noah's Ark 天神橋筋3丁目店",
  "animals": [
   "other",
   "cat",
   "smallanimal",
   "reptile",
   "farm"
  ],
  "prefecture": "大阪府",
  "area": "天神橋筋",
  "address": "大阪府大阪市北区天神橋3丁目9-12",
  "access": "JR天満駅から徒歩約5分、大阪メトロ堺筋線扇町駅から徒歩約2分",
  "url": "https://www.purrcat.co.jp/%E5%A4%A9%E7%A5%9E%E6%A9%8B%E7%AD%8B3%E4%B8%81%E7%9B%AE%E5%BA%97",
  "price": "平日30分1,100円＋10分ごと330円、ドリンク385円〜（2階で触れるにはおやつ購入が必要）",
  "price_level": 3,
  "hours": "10:00〜20:00（最終入店19:30）",
  "closed": "無休",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "複数の動物"
  ],
  "description": "1階が猫、2階がタヌキやワラビー、マーラ、コモンマーモセット、マイクロブタなど変わった動物のフロアになっている店です。2階の動物に触れるには別途おやつの購入が必要ですが、見るだけなら追加料金はかかりません。猫と珍獣の両方を楽しみたい人に向きます。",
  "source_note": "公式 https://www.purrcat.co.jp/天神橋筋3丁目店 と料金 https://www.purrcat.co.jp/system で確認。予約不要は公式トップの記載による",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "osaka-other-animeal-shinsaibashi",
  "name": "動物たちが暮らす森 アニミル 心斎橋店",
  "animals": [
   "other",
   "farm",
   "capybara",
   "rabbit",
   "owl",
   "bird",
   "reptile",
   "hedgehog",
   "smallanimal",
   "dog",
   "cat"
  ],
  "prefecture": "大阪府",
  "area": "心斎橋",
  "address": "大阪府大阪市中央区西心斎橋1-8-11",
  "access": "大阪メトロ御堂筋線心斎橋駅7番出口から徒歩約3分",
  "url": "https://animeal.jp/shinsaibashi/",
  "price": "大人2,200円／60分（おやつ付き、ドリンク別）、4〜12歳990円",
  "price_level": 3,
  "hours": "12:00〜19:00（最終入店18:00）",
  "closed": "毎週火曜（祝日は営業）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "駅近",
   "子ども可",
   "複数の動物"
  ],
  "description": "アルパカやカピバラ、ビントロング、フクロウ、ウサギ、大型犬など幅広い動物に会える都市型のふれあい動物園です。時間帯によって会える動物が入れ替わる仕組みです。週末や祝日は混んで入れないことがあり、電話で確認すると安心です。家族連れや珍しい動物好きに向きます。",
  "source_note": "公式 https://animeal.jp/shinsaibashi/ と料金 https://animeal.jp/shinsaibashi/system.html で確認。予約方法の記載はなく電話06-4708-6614のみ（要確認）",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "kanagawa-other-anitouch-minatomirai",
  "name": "アニタッチ みなとみらい",
  "animals": [
   "other",
   "capybara"
  ],
  "prefecture": "神奈川県",
  "area": "みなとみらい",
  "address": "神奈川県横浜市中区新港2-2-1 横浜ワールドポーターズ2F 外側デッキストリート",
  "access": "みなとみらい線「みなとみらい」駅・「馬車道」駅から徒歩約5分",
  "url": "https://anitouch.jp/",
  "price": "平日大人1,800円（時間無制限）、土日祝2,000円、4歳〜小学生1,000円〜",
  "price_level": 2,
  "hours": "平日10:30〜19:00、土日祝10:30〜20:00（最終受付は閉店30分前）",
  "closed": "無休",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "時間無制限プランあり",
   "子ども可",
   "駅近",
   "複数の動物"
  ],
  "description": "カピバラやワオキツネザル、ミーアキャット、フェネックなど約20種以上が暮らす屋内型のふれあい動物園です。入場料で時間無制限、予約も不要で、観光や買い物の途中に寄れます。触れない動物や、車いすで入れない部屋もあるので、家族連れは事前に公式ページで確認を。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://anitouch.jp/ で住所・営業時間・料金・予約を確認"
 },
 {
  "id": "tokyo-other-anitouch-odaiba-aquacity",
  "name": "アニタッチ アクアシティお台場",
  "animals": [
   "other",
   "capybara",
   "smallanimal",
   "owl",
   "bird",
   "reptile",
   "hedgehog",
   "rabbit"
  ],
  "prefecture": "東京都",
  "area": "お台場",
  "address": "東京都港区台場1-7-1 アクアシティお台場 3F",
  "access": "アクアシティお台場 3階",
  "url": "https://odaiba.anitouch.com/",
  "price": "平日大人1,500円（時間無制限）、休日1,800円、4歳〜小学生800円〜",
  "price_level": 2,
  "hours": "平日11:00〜19:00、土日祝11:00〜21:00（最終受付は平日18:30、土日祝20:00）",
  "closed": "不定休（アクアシティお台場の営業日に準ずる）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "時間無制限プランあり",
   "子ども可",
   "複数の動物"
  ],
  "description": "フタユビナマケモノ、ミーアキャット、カピバラ、リスザル、フクロウ、ウーパールーパーなど約30種がいる屋内型のふれあい動物園です。入場料で時間無制限、予約は受け付けていません。夜は21時まで開く日があり、ショッピング帰りに立ち寄りたい人向けです。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://odaiba.anitouch.com/ で住所・営業時間・料金・予約を確認"
 },
 {
  "id": "shizuoka-other-anitouch-mark-is-shizuoka",
  "name": "アニタッチ MARK IS 静岡",
  "animals": [
   "other",
   "capybara",
   "owl",
   "bird",
   "reptile",
   "smallanimal"
  ],
  "prefecture": "静岡県",
  "area": "東静岡",
  "address": "静岡県静岡市葵区柚木1026 MARK IS 静岡 1F",
  "access": "JR東静岡駅北口から徒歩3分",
  "url": "https://shizuoka.anitouch.com/",
  "price": "平日大人1,200円（時間無制限）、休日1,500円、4歳〜小学生700円〜",
  "price_level": 2,
  "hours": "平日11:00〜19:00、土日祝10:00〜20:00（最終受付は閉店30分前）",
  "closed": "不定休（MARK IS 静岡の休館日に準ずる）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "時間無制限プランあり",
   "子ども可",
   "駅近",
   "複数の動物"
  ],
  "description": "アルマジロやパルマワラビー、パンダヤギ、フェネック、カピバラなど、ほかのお店では珍しい動物も含む約30種に会える屋内型の動物園です。入場料は時間無制限、予約不要。静岡駅周辺で動物と過ごしたい家族連れ向けです。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://shizuoka.anitouch.com/ で住所・営業時間・料金・予約を確認"
 },
 {
  "id": "gunma-other-anitouch-park-aeon-ota",
  "name": "アニタッチPARK イオンモール太田",
  "animals": [
   "other",
   "capybara",
   "farm",
   "otter",
   "owl",
   "bird",
   "reptile",
   "smallanimal",
   "hedgehog",
   "rabbit"
  ],
  "prefecture": "群馬県",
  "area": "太田",
  "address": "群馬県太田市石原町81 イオンモール太田 WEST MALL 1階",
  "access": "東武伊勢崎線「太田駅」南口からシャトルバス約10分",
  "url": "https://ota.anitouch.com/",
  "price": "平日大人1,300円（時間無制限）、休日1,600円、4歳〜小学生800円〜（3歳以下無料）",
  "price_level": 2,
  "hours": "10:00〜19:00（最終受付18:30）",
  "closed": "イオンモール太田の営業日に準ずる",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "時間無制限プランあり",
   "子ども可",
   "複数の動物"
  ],
  "description": "カピバラやナマケモノ、ミーアキャット、コツメカワウソ、パンダヤギなど約45種が暮らす屋内のふれあい動物園で、ボールプールなどの遊具もある。入園料で時間無制限、予約はできない。群馬で子どもと一日遊びたい人向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://ota.anitouch.com/ で住所・営業時間・料金・予約・動物を確認"
 },
 {
  "id": "hyogo-other-mofiina-kobe-konan",
  "name": "ふれあいカフェ MOFiiNA（モフィーナ）",
  "animals": [
   "other",
   "capybara",
   "owl",
   "smallanimal",
   "reptile",
   "hedgehog",
   "rabbit"
  ],
  "prefecture": "兵庫県",
  "area": "東灘・甲南",
  "address": "兵庫県神戸市東灘区甲南町3-7-22",
  "access": "JR東海道線「摂津本山駅」から徒歩10分",
  "url": "https://mofiina.cafe/",
  "price": "30分2,200円、60分2,750円（おやつあげ体験とワンオーダー付き、小学生以下は少し安い）",
  "price_level": 3,
  "hours": "11:00〜18:00（最終受付17:30、不定休。最新はInstagramで告知）",
  "closed": "不定休",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "子ども可",
   "複数の動物"
  ],
  "description": "1階がカフェ、2階がふれあい広場になっていて、フェネックやカピバラ、ミーアキャット、フクロウ、フクロモモンガなど幅広い動物に会える店。予約は電話が最優先で、席の確保にはならないと案内されている。神戸で珍しい動物とゆっくり触れ合いたい人向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://mofiina.cafe/ 、料金 https://mofiina.cafe/料金＆ルール 、アクセス https://mofiina.cafe/アクセス/ で確認。営業日は公式がInstagramで告知"
 },
 {
  "id": "chiba-other-moff-animal-world-inzai",
  "name": "Moff animal world BIGHOPガーデンモール印西店",
  "animals": [
   "other",
   "farm",
   "cat",
   "owl",
   "bird",
   "reptile",
   "smallanimal",
   "capybara",
   "dog"
  ],
  "prefecture": "千葉県",
  "area": "印西牧の原",
  "address": "千葉県印西市原1-2 BIGHOPガーデンモール印西 2F",
  "access": "北総線「印西牧の原駅」から徒歩10分",
  "url": "https://moff-moff.jp/animal-cafe/shop/moff-animal-world/",
  "price": "中学生以上1,450円／時間無制限、4歳〜小学生950円（3歳以下無料）",
  "price_level": 2,
  "hours": "平日11:00〜18:00／土日祝10:00〜18:00（最終入園17:30）",
  "closed": "年中無休（BIGHOPの営業に準ずる）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "時間無制限プランあり",
   "子ども可",
   "複数の動物"
  ],
  "description": "ヤギ・ヒツジ・アルパカのほか、ケープペンギン、カピバラ、ミーアキャット、フクロウ、猫まで暮らす大型の屋内ふれあい施設。入園料で時間無制限、予約も不要。アルパカやヤギに会える屋内の店は少ないので、家族で一日過ごしたい人に向く。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 https://moff-moff.jp/animal-cafe/shop/moff-animal-world/ で住所・営業時間・料金・動物を確認（一覧 https://moff-moff.jp/animal-cafe/shop ）"
 },
 {
  "id": "tokyo-other-fennec-house-shinokubo",
  "name": "Fennec House 新大久保店（フェネックハウス）",
  "prefecture": "東京都",
  "area": "新大久保",
  "address": "東京都新宿区百人町2-11-2 新戸山アネックス 2階",
  "access": "公式ページに記載なし（来店前に確認を）",
  "hours": "平日 11:00〜19:00／土日祝 10:00〜19:00",
  "description": "フェネックと同じ部屋で過ごす小さな施設で、公式によると6匹が在籍している。無理のない範囲で触れ合えて、一緒に写真も撮れる。入退場は毎時の決まった時刻に限られ、完全キャッシュレスなので注意したい。",
  "source_note": "公式 https://fennechouse.com/home/ で料金・営業時間・住所・予約（なしでも入店可、予約推奨）・頭数を確認（2026-11-06）",
  "animals": [
   "other"
  ],
  "url": "https://fennechouse.com/home/",
  "price": "フリータイム制 大人3,500円・高校生以下2,000円（未就学児は入場不可）、おやつ1,000円",
  "price_level": 4,
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "写真OK"
  ],
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "tokyo-other-fennec-house-harajuku",
  "name": "Fennec House 原宿店（フェネックハウス）",
  "prefecture": "東京都",
  "area": "原宿",
  "address": "東京都渋谷区神宮前1-9-30 FLEG原宿 B1F",
  "access": "公式ページに記載なし（来店前に確認を）",
  "hours": "10:00〜18:00",
  "description": "新大久保店と同じ運営のフェネックのふれあい店で、原宿の地下にある。料金は両店共通で、触れ合いは無理のない範囲に限られる。写真撮影ができ、未就学児は入れない。",
  "source_note": "公式 https://fennechouse.com/home/ の店舗一覧と料金表で確認（2026-11-06）。同住所に併設の「原宿かわいいランド キュンキュン」は別施設のため未収録",
  "animals": [
   "other"
  ],
  "url": "https://fennechouse.com/home/",
  "price": "フリータイム制 大人3,500円・高校生以下2,000円（未就学児は入場不可）、おやつ1,000円",
  "price_level": 4,
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "写真OK"
  ],
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "aichi-other-penguin-cafe-tail",
  "name": "ペンギンカフェ TAIL（テイル）",
  "animals": [
   "other"
  ],
  "prefecture": "愛知県",
  "area": "高畑",
  "address": "愛知県名古屋市中川区高畑2丁目330",
  "access": "名古屋市営地下鉄東山線高畑駅5番出口から徒歩1分",
  "url": "https://www.instagram.com/penguincafe.tail/",
  "price": "入場40分 2,500円（税込、ドリンク付き。高校生以上も中学生以下も同額）",
  "price_level": 3,
  "hours": "10:00〜18:00（最終受付17:00）",
  "closed": "火曜・金曜",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "ドリンク込み",
   "子ども可",
   "駅近"
  ],
  "description": "名古屋市で本物のペンギンに触れられる小さなカフェだ。公式SNSでは数羽のペンギンの名前と、触り方の紹介が発信されている。入場は40分制で、予約はDM・じゃらん・電話で受け付けている。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式Instagram @penguincafe.tail【公式】（最終投稿 2026-11-04）で営業時間・定休日・予約方法を確認。料金は同アカウントの価格改定のお知らせ（2026-07-31、2026-08-01改定）で確認。住所は公式SNSに記載がなく、じゃらん等の掲載による。別アカウント @penguincafetail は2025-08で更新停止で旧情報（火・水休）のため不採用"
 },
 {
  "id": "tokyo-other-animeal-odaiba",
  "name": "動物たちが暮らす森 アニミル お台場店",
  "animals": [
   "other",
   "capybara",
   "rabbit",
   "owl",
   "bird",
   "reptile",
   "hedgehog",
   "smallanimal",
   "dog",
   "cat"
  ],
  "prefecture": "東京都",
  "area": "お台場",
  "address": "東京都港区台場1-6-1 デックス東京ビーチ シーサイドモール5F",
  "access": "デックス東京ビーチ シーサイドモール5F（最寄駅は公式ページに記載なし）",
  "url": "https://animeal.jp/odaiba/",
  "price": "大人2,200円／45分、2,800円／90分（おやつガチャ2回付き、ドリンク別）、4〜12歳990円",
  "price_level": 3,
  "hours": "平日12:00〜19:00／休日11:00〜19:00（最終受付18:15）",
  "closed": "毎週木曜日",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "子ども可",
   "複数の動物"
  ],
  "description": "カピバラやウサギ、ミーアキャット、フクロウ、ハリネズミ、犬猫など多くの動物に会える都市型のふれあい動物園だ。昼の時間帯と夕方以降で会える動物が入れ替わる。海を望むテラスエリアもあり、家族連れや珍しい動物が好きな人に向く。",
  "source_note": "公式 https://animeal.jp/odaiba/ と料金 https://animeal.jp/odaiba/system.html で確認。予約方法の記載は公式になく電話03-6457-1215のみ",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "tokyo-other-anitouch-kichijoji",
  "name": "アニタッチ 吉祥寺",
  "animals": [
   "other",
   "capybara",
   "smallanimal",
   "owl",
   "bird",
   "reptile",
   "hedgehog",
   "rabbit"
  ],
  "prefecture": "東京都",
  "area": "吉祥寺",
  "address": "東京都武蔵野市吉祥寺本町1丁目8番23号 河田ビル1-3階",
  "access": "JR中央線・総武線、京王井の頭線の吉祥寺駅から（公式に徒歩分数の記載なし）",
  "url": "https://kichijoji.anitouch.com/",
  "price": "平日大人1,600円・休日1,800円（オープン記念価格、時間無制限）、4歳〜小学生800円〜",
  "price_level": 2,
  "hours": "平日11:00〜19:00（最終受付18:30）、休日11:00〜20:00（最終受付19:30）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "時間無制限プランあり",
   "子ども可",
   "複数の動物",
   "駅近"
  ],
  "description": "2026年10月に開業した屋内型のふれあい動物園で、カピバラの岩風呂が目玉だ。ナマケモノやミーアキャット、フェネック、ケープペンギンなど30種ほどの動物がいる。入場料で時間無制限のため、家族連れや動物好きがゆっくり過ごすのに向く。",
  "source_note": "公式 https://kichijoji.anitouch.com/ で住所・営業時間・定休日・料金を確認（料金はオープン記念価格）",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "tokyo-other-anitouch-tokyo-dome-city",
  "name": "アニタッチ 東京ドームシティ",
  "animals": [
   "other",
   "capybara",
   "smallanimal",
   "owl",
   "bird",
   "reptile",
   "hedgehog",
   "rabbit"
  ],
  "prefecture": "東京都",
  "area": "後楽園・水道橋",
  "address": "東京都文京区後楽1-3-61 黄色いビル1階",
  "access": "JR水道橋駅東口・西口、都営三田線水道橋駅A2出口、丸ノ内線・南北線後楽園駅2番出口などから（公式に徒歩分数の記載なし）",
  "url": "https://www.tokyodomecity.anitouch.com/",
  "price": "平日大人2,000円・休日2,200円（時間無制限）、4歳〜小学生1,200円〜",
  "price_level": 3,
  "hours": "平日10:30〜19:00（最終受付18:30）、休日10:30〜20:00（最終受付19:30）",
  "closed": "年中無休",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "時間無制限プランあり",
   "子ども可",
   "複数の動物",
   "駅近"
  ],
  "description": "東京ドームシティ近くにある屋内型のふれあい動物園で、カピバラやミーアキャット専用の迷路、ショウガラゴなどの夜行性動物エリアがある。入場料で滞在時間は無制限、おやつ券を買えばえさやりもできる。駅から近く、遊園地や買い物のついでに寄りたい家族連れに向く。",
  "source_note": "公式 https://www.tokyodomecity.anitouch.com/ で住所・営業時間・定休日・料金を確認",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "fukuoka-other-torius-fureai-zoo",
  "name": "トリアスふれあい動物園",
  "animals": [
   "other",
   "capybara",
   "smallanimal"
  ],
  "prefecture": "福岡県",
  "area": "久山町",
  "address": "福岡県糟屋郡久山町大字山田1111 トリアス久山 EASTゾーン E21",
  "access": "福岡ICから車で約5分（ショッピングモール内、公共交通は公式で確認を）",
  "url": "https://www.biopark.co.jp/toriuszoo/",
  "price": "入園500円（大人も子どもも同額、3歳未満無料）、えさ100〜200円",
  "price_level": 1,
  "hours": "10:00〜17:00（入園締切16:30）",
  "closed": "1月1日",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "子ども可",
   "複数の動物"
  ],
  "description": "ショッピングモールの中にある、長崎バイオパークが運営する小さなふれあい動物園だ。カピバラやビーバーなど30種類ほどの動物に、えさをあげながら近づける。再入場もできるので、買い物や映画の合間に立ち寄る使い方に向く。",
  "source_note": "公式 https://www.biopark.co.jp/toriuszoo/info.html で営業時間・料金・定休日を、モール公式 https://torius.com/shop_guide/424/ で営業中（10:00〜17:00）と住所を確認。料金は2022年改定後の公式表記で、公式ページの更新は古い",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "aichi-other-champagne-house-toyokawa",
  "name": "シャンパンハウス",
  "animals": [
   "other"
  ],
  "prefecture": "愛知県",
  "area": "豊川",
  "address": "愛知県豊川市小田渕町四丁目73番地",
  "access": "公式ページに記載なし（来店前に確認を）",
  "url": "https://champagnehouse.net/",
  "price": "大人（中学生以上）2,800円、小学生以下1,400円（各ワンドリンク付）",
  "price_level": 3,
  "hours": "11:00〜18:00",
  "closed": "水曜・木曜",
  "reservation": "必須",
  "features": [
   "ふれあいOK",
   "ドリンク込み",
   "予約制",
   "子ども可"
  ],
  "description": "キンカジューやフェネックなど珍しい動物と触れ合える、2026年3月開業の愛知県豊川市のカフェだ。ふれあいルームは人数を絞った完全予約制で、クレープなどの軽食だけの利用もできる。一部の動物は休止中の場合があるため、予約時に確認すると安心だ。",
  "source_note": "公式 https://champagnehouse.net/shop/ で住所・営業時間・定休日、https://champagnehouse.net/reserve/ で料金・予約を確認（ビントロングは一時休止中の表示）",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "osaka-other-tempozan-anipa",
  "name": "天保山アニパ",
  "animals": [
   "other",
   "dog",
   "cat",
   "rabbit",
   "smallanimal",
   "reptile"
  ],
  "prefecture": "大阪府",
  "area": "天保山",
  "address": "大阪府大阪市港区海岸通1-1-10 天保山マーケットプレース3F",
  "access": "Osaka Metro中央線 大阪港駅1番出口から徒歩約5分",
  "url": "https://tenpozan-anipa.com/",
  "price": "大人（中学生以上）平日1,200円・土日祝1,500円、4歳〜小学生 平日800円・土日祝1,000円（おやつ200円別）",
  "price_level": 2,
  "hours": "11:00〜19:30（最終受付18:30）",
  "closed": "毎週木曜（祝日・繁忙期は営業の場合あり）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "駅近",
   "子ども可",
   "複数の動物"
  ],
  "description": "海遊館のとなりの商業施設内にある屋内型のふれあい動物園だ。犬と猫のリビング、ウサギとモルモットのガーデン、リクガメの森の3エリアに分かれ、滞在は45〜60分が目安である。以前いたカピバラなどは現在おらず、雨の日の家族連れやデートに向く。",
  "source_note": "公式 https://tenpozan-anipa.com/ で料金・営業時間・休園日・アクセスを確認。公式にカピバラ・カンガルー・アルパカは現在いないと明記",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "kyoto-other-luff-kyotanabe",
  "name": "動物ふれあい Luff（ラフ）",
  "animals": [
   "other",
   "smallanimal",
   "rabbit",
   "bird",
   "dog",
   "hedgehog"
  ],
  "prefecture": "京都府",
  "area": "京田辺",
  "address": "京都府京田辺市河原受田43-8 ルーブルビル本館 2A",
  "access": "近鉄新田辺駅から徒歩2分、JR京田辺駅から徒歩6分",
  "url": "https://luff-safamily.com/",
  "price": "大人2,800円／90分（リニューアル記念価格・全日同額、おやつ体験付き）、7〜12歳1,500円、1〜6歳1,000円",
  "price_level": 3,
  "hours": "13:00〜18:00",
  "closed": "営業カレンダーによる（公式サイトで確認）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "駅近",
   "子ども可",
   "複数の動物"
  ],
  "description": "ミーアキャットやチンチラ、ハリネズミ、ショウガラゴ、インコなど30種ほどの動物がいる京田辺市のふれあい施設だ。90分の体験で小動物のほか犬とも触れ合える。ゆっくり過ごしたい家族連れや珍しい動物が好きな人に向き、混雑時は予約が優先される。",
  "source_note": "公式 https://luff-safamily.com/ と https://luff-safamily.com/reservation で料金・営業時間・予約・アクセスを確認（料金はリニューアル記念価格）",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "osaka-other-rare-zoo-shinsaibashi",
  "name": "Rare ZOO（レアズー）心斎橋",
  "animals": [
   "other",
   "owl",
   "smallanimal",
   "bird",
   "reptile",
   "rabbit",
   "farm"
  ],
  "prefecture": "大阪府",
  "area": "心斎橋",
  "address": "大阪府大阪市中央区西心斎橋2丁目10-31 2F",
  "access": "御堂筋線 心斎橋駅から徒歩6分、四つ橋線 四ツ橋駅から徒歩6分",
  "url": "https://owl-wan.com/rarezoo/",
  "price": "13歳以上3,500円／60分・3,000円／30分（えさやり付き）、7〜12歳3,000円／60分",
  "price_level": 4,
  "hours": "12:00〜19:00（最終受付18:45）",
  "closed": "不定休",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "子ども可",
   "複数の動物"
  ],
  "description": "ナマケモノやビントロング、フェネック、キンカジュー、フクロウ類などに会える心斎橋の小さな動物園だ。コースにえさやりが付き、追加料金でフクロウの手乗せや抱っこ体験もできる。珍しい動物を近くで見たい人向けで、予約が優先される。",
  "source_note": "公式 https://owl-wan.com/rarezoo/ で料金・営業時間・定休日・アクセスを確認。オプション体験は別料金",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "chiba-other-kabazoo-kashiwa",
  "name": "KABAZOO（カバズー）セブンパークアリオ柏店",
  "animals": [
   "other",
   "capybara",
   "otter",
   "owl",
   "bird",
   "smallanimal",
   "reptile",
   "dog",
   "cat",
   "rabbit"
  ],
  "prefecture": "千葉県",
  "area": "柏",
  "address": "千葉県柏市大島田1丁目6番地1 セブンパークアリオ柏 アリオモール2F",
  "access": "柏駅東口から東武バスで約25分、セブンパークアリオ柏前下車徒歩約3分",
  "url": "https://kabazoo-kashiwa.amebaownd.com/",
  "price": "土日祝は大人（高校生以上）1,350円、中学生1,000円、小学生930円（再入場可）。平日料金は公式ページに記載なし（来店前に確認を）",
  "price_level": 2,
  "hours": "平日11:00〜17:00（最終入場16:30）、土日祝10:00〜19:00（最終入場18:30）",
  "closed": "公式ページに記載なし（月ごとの営業カレンダーで確認を）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "子ども可",
   "複数の動物"
  ],
  "description": "ショッピングモール内にある屋内のふれあい動物園で、カピバラやコツメカワウソ、ミーアキャット、フクロウ、ウサギ、犬猫などがいる。カピバラの散歩の時間があり、えさやりもできる。雨の日でも使え、子ども連れが買い物ついでに立ち寄りやすい。",
  "source_note": "公式 https://kabazoo-kashiwa.amebaownd.com/ の動物紹介ページと、料金画像（土日祝分）、モール公式 https://sevenpark-kashiwa.ario.jp/shop/2300000037/ の営業時間・住所で確認",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "ibaraki-other-kasumigaura-doubutsu-to-minna-no-ie",
  "name": "霞ケ浦 どうぶつとみんなのいえ",
  "animals": [
   "other",
   "capybara",
   "farm",
   "owl",
   "smallanimal",
   "bird",
   "reptile"
  ],
  "prefecture": "茨城県",
  "area": "行方",
  "address": "茨城県行方市玉造甲1234",
  "access": "JR常磐線土浦駅から車またはバスで約50分",
  "url": "https://doubutsutominna.jp/",
  "price": "大人（高校生以上）1,650円、小人（4歳〜中学生）1,100円、3歳以下無料（税込）",
  "price_level": 2,
  "hours": "10:00〜16:00",
  "closed": "水曜日",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "子ども可",
   "複数の動物"
  ],
  "description": "旧水の科学館を改装した霞ケ浦湖畔の施設で、ケープペンギンやカピバラ、ミーアキャット、ビントロング、ナマケモノ、ヤギ、アルパカなど多くの動物に会える。種類によっておやつあげなどの体験ができる。車で行く家族連れ向きで、入館は予約不要である。",
  "source_note": "公式 https://doubutsutominna.jp/ で営業時間・定休日・アクセス、/price-p で料金、/life/animal-list で動物、/faq で予約不要を確認",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "ishikawa-other-animal-cafe-hyakki-yako",
  "name": "Animal Café 百奇夜行",
  "animals": [
   "other",
   "dog",
   "reptile",
   "smallanimal"
  ],
  "prefecture": "石川県",
  "area": "金沢・東山",
  "address": "石川県金沢市東山3-4-4",
  "access": "公式ページに記載なし（来店前に確認を）。駐車場なし",
  "url": "https://100kiya50.my.canva.site/",
  "price": "カフェタイム 入場1,320円／60分（小学生以下880円。土日祝・特別期間は小人も大人料金）、1ドリンク以上の注文が必要（550円〜）、延長660円／30分。バータイムはテーブルチャージ1,650円",
  "price_level": 2,
  "hours": "カフェタイム11:00〜18:00、バータイム19:00〜22:00",
  "closed": "不定休（詳細は公式SNSで確認）",
  "reservation": "不要",
  "features": [
   "写真OK",
   "子ども可",
   "複数の動物"
  ],
  "description": "金沢のひがし茶屋街に近い店で、フタユビナマケモノやスンダスローロリス、ケヅメリクガメ、ジェネット、犬などの変わった生き物がいる。多くの種類は見るだけで、ふれあいは店の状況しだいで案内される。夜はバータイムになり、ゆっくり動物を眺めたい人に向く。",
  "source_note": "公式サイト https://100kiya50.my.canva.site/ （Playwrightで表示のみ確認）で住所・料金・営業時間・定休日を確認。ふれあいは多くの種類で不可、混雑時は断る旨の記載あり",
  "image": null,
  "checked": "2026-11-06"
 },
 {
  "id": "kanagawa-other-ikimono-tankentai-shonan",
  "name": "いきもの探検隊 OSC湘南シティ店",
  "animals": [
   "other"
  ],
  "prefecture": "神奈川県",
  "area": "平塚",
  "address": "神奈川県平塚市代官町33-1 OSC湘南シティ 2F",
  "access": "平塚市代官町のOSC湘南シティ内（最寄駅は公式ページに記載なし）",
  "url": "https://shonan-city.com/shopguide/ikimono",
  "price": "入場800円で当日は出入り自由（2歳以下無料）。おやつは別料金",
  "price_level": 1,
  "hours": "10:00〜19:00",
  "closed": "毎月第3水曜（祝日や夏・冬休みにあたる場合は営業）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "子ども可",
   "複数の動物"
  ],
  "description": "ショッピングモールの中にある、約30種類の生き物とふれあえる施設だ。一度入れば当日は出入り自由で、買い物の合間に何度でも戻れる。おやつをあげる体験は別料金になる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "モール公式 https://shonan-city.com/shopguide/ikimono （店舗案内ページ）で営業時間・定休日・料金・住所を確認。店の公式Instagram @ikimonotankentai.shounan はあるが未ログインでは投稿日が読めず、料金はモール公式の記載による。種名一覧の記載なし、おやつ料金は別サイトの口コミで1個100円とされるが公式未確認"
 },
 {
  "id": "chiba-other-ikimono-tankentai-inage",
  "name": "いきもの探検隊 フレスポ稲毛店",
  "animals": [
   "other"
  ],
  "prefecture": "千葉県",
  "area": "稲毛区・長沼原町",
  "address": "千葉県千葉市稲毛区長沼原町731-17 フレスポ稲毛 1F",
  "access": "フレスポ稲毛内（最寄駅は公式ページに記載なし）",
  "url": "https://www.e-frespo.com/inage/shop/index.jsp?bf=1&fmt=1&shopid=2046",
  "price": "入場800円（2歳以下無料）。おやつは1つ100円",
  "price_level": 1,
  "hours": "10:00〜19:00（最終受付18:30）",
  "closed": "公式ページに記載なし（来店前に確認を）",
  "reservation": "不要",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "子ども可",
   "複数の動物"
  ],
  "description": "ショッピングセンター1階にある、水の生き物から鳥や小さな哺乳類まで30種類ほどに会えるふれあい施設だ。おやつをあげる体験ができ、入場料が低めなので家族でふらりと入る使い方に合う。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "施設公式 https://www.e-frespo.com/inage/shop/index.jsp?bf=1&fmt=1&shopid=2046 の店舗ページで営業時間・料金・住所を確認。店の公式Instagram @ikimonotankentai_inage はあるが未ログインでは投稿日が読めない。定休日・種名一覧の記載なし"
 },
 {
  "id": "aichi-other-doubutsu-tokidoki-iyashi",
  "name": "どうぶつ♡ときどき癒し",
  "animals": [
   "other",
   "otter",
   "smallanimal",
   "reptile",
   "bird"
  ],
  "prefecture": "愛知県",
  "area": "名古屋・南区",
  "address": "愛知県名古屋市南区石元町3-45",
  "access": "名鉄本星崎駅から徒歩10分以内（公式記載）。店舗前に駐車場約20台",
  "url": "https://iyashi.zooai.co.jp/",
  "price": "見学1時間1,650円／ふれあい1時間2,500円／ふれあい時間無制限3,600円（ドリンク付きは各550円増し）。エサやり330円・1,100円",
  "price_level": 3,
  "hours": "平日11:30〜18:00／土日祝11:30〜20:00",
  "closed": "水曜",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "子ども可",
   "時間無制限プランあり",
   "複数の動物"
  ],
  "description": "33種60頭以上というカフェ最大級の品ぞろえで、コツメカワウソ、サーバルキャット、ベニコウゴウインコ、ミーアキャット、リクガメ、ハリネズミなどに会える。見学のみ、ふれあい、時間無制限の3コースから選べ、無制限コースはカフェと行き来できる。カワウソとの体験や爬虫類のコーナーは追加オプション。",
  "image": null,
  "checked": "2026-11-07",
  "source_note": "公式サイト https://iyashi.zooai.co.jp/ と https://iyashi.zooai.co.jp/contact/ で確認（2026年10月の更新あり）。予約は公式にInstagram DMまたは電話と案内。以前に見送りだった大須カワウソ系列店とは別の店（南区へ移転・統合後）。"
 }
];
