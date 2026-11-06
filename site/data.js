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
  "reservation": "推奨",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "浜松駅から歩ける場所にある、保護犬と保護猫のふれあいカフェ。公式には保護犬・保護猫の一覧ページがあり、どんな子がいるか事前に見られる。30分から気軽に入れる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-hamamatsuchuo/ で確認。予約の記載はなし"
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
  "reservation": "推奨",
  "features": [
   "保護動物",
   "ふれあいOK",
   "子ども可",
   "駅近"
  ],
  "description": "烏丸御池駅からすぐの、保護犬がいるふれあいカフェ（保護猫は時期によって不在）。観光や買い物の合間に30分だけ立ち寄るような使い方がしやすい。譲渡活動を行う団体のカフェとして運営されている。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-kyotokarasuma/ で確認。予約の記載はなし"
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
  "reservation": "推奨",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "大分市の郊外にある保護犬・保護猫のふれあいカフェ。最寄りは鉄道駅ではなくバス停で、車で行くほうが現実的。保護された犬猫と30分から過ごせる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-oita/ で確認。予約の記載はなし"
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
  "reservation": "推奨",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "函館市電の沿線にある保護犬・保護猫のふれあいカフェ。閉店が18:30と、この系列の中ではやや遅め。旅行中に動物とふれあいたい人にも寄りやすい。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-hakodate/ で確認。予約の記載はなし"
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
  "reservation": "推奨",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "名古屋の西、大治町にある保護犬・保護猫のふれあいカフェ。駅から徒歩20分ほどかかるので、車での来店が向く。名古屋近郊で保護動物と会いたい人に。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-aichiama/ で確認。予約の記載はなし"
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
  "reservation": "推奨",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "佐賀市の中心部にある保護犬・保護猫のふれあいカフェ。営業は17:00までと早めに閉まるので、午後の早い時間に行くとよい。30分1,000円から。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-saga/ で確認。予約の記載はなし"
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
  "reservation": "推奨",
  "features": [
   "保護動物",
   "ふれあいOK",
   "子ども可",
   "駅近"
  ],
  "description": "京成大久保駅の目の前にある、保護犬のふれあいカフェ（保護猫は時期によって不在）。現金のほかカードや電子マネーも使える。千葉県西部で保護動物とふれあいたい人向け。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-narashino/ で確認。予約の記載はなし"
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
  "reservation": "推奨",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "保護犬と保護猫に会える福祉型のふれあいカフェで、2026年10月に開いたばかりの店。未就学児は無料、小学生は半額で、家族連れにも向く。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-koshigaya/ で確認。猫の頭数は公式ページに記載なし"
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
  "reservation": "推奨",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "保護犬と保護猫に会える福祉型のふれあいカフェ。ドリンク飲み放題（300円）のオプションがある。新潟県北部で動物とふれあえる数少ない場所。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-shibata/ で確認。猫の頭数は公式ページに記載なし"
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
  "reservation": "推奨",
  "features": [
   "保護動物",
   "複数の動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "保護犬と保護猫に会える福祉型のふれあいカフェで、犬の部屋と猫の部屋が分かれている。未就学児は無料、小学生は半額で家族連れにも向く。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-takamatsuchuo/ で確認。猫の頭数は公式ページに記載なし"
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
  "reservation": "推奨",
  "features": [
   "保護動物",
   "ふれあいOK",
   "子ども可",
   "駅近"
  ],
  "description": "保護猫と触れ合える福祉型のカフェで、橋本駅から歩いてすぐ。未就学児は無料、小学生は半額。高野山方面への行き帰りにも寄れる。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-wakayamahashimoto/ で確認。猫の頭数は公式ページに記載なし"
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
  "reservation": "推奨",
  "features": [
   "保護動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "保護猫と触れ合える福祉型のカフェで、足利市の郊外にある。駐車場があり、車で出かけやすい。未就学児は無料、小学生は半額。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-ashikaga/ で確認。猫の頭数は公式ページに記載なし"
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
  "reservation": "推奨",
  "features": [
   "保護動物",
   "ふれあいOK",
   "子ども可"
  ],
  "description": "保護猫と触れ合える福祉型のカフェで、日立市にある。現金のほかクレジットカードや電子マネー、QR決済が使える。未就学児は無料、小学生は半額。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "店舗ページ https://wan-time.jp/store/anella-cafe-hitachi/ で確認。猫の頭数は公式ページに記載なし"
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
  "description": "ハリネズミとふれあえるペットカフェで、店名のとおり「ハリネズミのいるカフェ」としてコーヒーやドリンクにも力を入れている。江の島観光の合間に寄れる。チャージは10分単位の時間制で、Wi-Fiと充電が自由に使える。",
  "image": null,
  "checked": "2026-11-06",
  "source_note": "公式 http://hari-para.com/ （PRICE・店舗情報。ページ更新は2024-05）で確認。運営会社 https://www.pet-coo.com/88957-2/ （最新ニュース 2026-10-31）が現行の店として掲載。予約の要否は公式に記載なし"
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
 }
];
