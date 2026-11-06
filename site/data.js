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
  "address": "京都府京都市中京区東大文字町308番地 ゑり正ビル1階",
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
  "source_note": "公式店舗ページ https://owls-cats-forest.com/free/cats-kyoto で確認"
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
  "id": "okayama-cat-anella-cafe-okayama-senoo",
  "name": "ANELLA CAFE 岡山妹尾店",
  "animals": [
   "cat",
   "dog"
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
  "reservation": "推奨",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "保護犬と保護猫がいる福祉型のふれあいカフェで、猫と犬の両方に会える。2026年6月に開いた新しい店で、未就学児は無料、小学生は半額なので家族連れにも向く。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-okayamasenoo/ で確認"
 },
 {
  "id": "kanagawa-cat-anella-cafe-yokohama-chukagai",
  "name": "ANELLA CAFE 横浜中華街店",
  "animals": [
   "cat",
   "dog"
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
  "reservation": "推奨",
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
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-yokohamachukagai/ で確認"
 },
 {
  "id": "hokkaido-cat-anella-cafe-sapporo-kiyota",
  "name": "ANELLA CAFE 札幌清田店",
  "animals": [
   "cat",
   "dog"
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
  "reservation": "推奨",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "保護犬と保護猫がいる福祉型のふれあいカフェで、札幌市の郊外、清田区にある。駐車場があり、車で家族と立ち寄りやすい。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-sapporo-kiyota/ で確認"
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
  "address": "京都府京都市中京区東大文字町308番地 ゑり正ビル1階",
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
  "source_note": "公式店舗ページ https://owls-cats-forest.com/free/mameshiba-kyoto で確認"
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
  "reservation": "推奨",
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
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-fukuoka-ohori/ で確認"
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
  "reservation": "推奨",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "保護犬と保護猫がいる福祉型のふれあいカフェで、広島市の北部、安佐南区にある。犬も猫もいるので、どちらも好きな人や家族連れ向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-hiroshimamidorii/ で確認"
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
  "id": "kyoto-smallanimal-luff-kyotanabe",
  "name": "動物ふれあい Luff（Luff s.a.family）",
  "animals": [
   "smallanimal",
   "hedgehog",
   "rabbit",
   "bird",
   "other"
  ],
  "prefecture": "京都府",
  "area": "京田辺",
  "address": "京都府京田辺市河原受田43-8 ルーブルビル本館 2A",
  "access": "近鉄新田辺駅から徒歩2分、JR京田辺駅から徒歩6分",
  "url": "https://luff-safamily.com/",
  "price": "大人2,800円／90分（おやつあげ込み）、7〜12歳1,500円",
  "price_level": 3,
  "hours": "13:00〜18:00",
  "closed": "不定休（営業カレンダーで確認）",
  "reservation": "推奨",
  "features": [
   "ふれあいOK",
   "えさやり体験",
   "子ども可",
   "駅近",
   "複数の動物"
  ],
  "description": "ミーアキャットやチンチラ、ハリネズミ、ハムスター、モルモットなど30種類以上と、90分かけてふれあえる施設です。おやつをあげる体験も料金に含まれ、スタッフが付き添ってくれます。週末や祝日は予約しておくと安心で、子ども連れにも向きます。",
  "source_note": "公式 https://luff-safamily.com/ で住所・料金・営業時間・予約・動物を確認",
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
  "url": "https://www.purrcat.co.jp/天神橋筋3丁目店",
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
 }
];
