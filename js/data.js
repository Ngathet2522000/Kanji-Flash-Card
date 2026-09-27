/**
 * Kanji Flashcard Data Model
 * 
 * Supports:
 * - Japanese UTF-8 (Kanji, Katakana Onyomi, Hiragana Kunyomi, Furigana Ruby)
 * - Myanmar Unicode (Pyidaungsu / Padauk accurate typography & translations)
 * 
 * Levels included: JLPT N5 & N4 foundational essentials with vocabulary and example sentences.
 */

export const KANJI_DATA = [
  {
    id: 1,
    kanji: "日",
    jlpt: "N5",
    strokeCount: 4,
    radicals: "日 (Sun/Day)",
    onyomi: [
      { kana: "ニチ", romaji: "nichi" },
      { kana: "ジツ", romaji: "jitsu" }
    ],
    kunyomi: [
      { kana: "ひ", romaji: "hi" },
      { kana: "-び", romaji: "-bi" },
      { kana: "-か", romaji: "-ka" }
    ],
    myanmarMeaning: "နေ၊ နေ့၊ ဂျပန်နိုင်ငံ",
    myanmarDetail: "နေမင်းကြီး (သို့) နေ့ရက်၊ အချိန်ကာလကို ဖော်ပြရာတွင် အသုံးပြုသော အခြေခံ ကန်ဂျီ ဖြစ်ပါသည်။",
    mnemonic: "ပြတင်းပေါက်မှတစ်ဆင့် ထွက်ပေါ်လာသော နေမင်း၏ ပုံသဏ္ဌာန်မှ ဆင်းသက်လာပါသည်။",
    vocabulary: [
      { word: "日本", reading: "にほん", romaji: "nihon", myanmar: "ဂျပန်နိုင်ငံ" },
      { word: "毎日", reading: "まいにち", romaji: "mainichi", myanmar: "နေ့တိုင်း" },
      { word: "日曜日", reading: "にちようび", romaji: "nichiyoubi", myanmar: "တနင်္ဂနွေနေ့" },
      { word: "休日", reading: "きゅうじつ", romaji: "kyuujitsu", myanmar: "ရုံးပိတ်ရက် / အားလပ်ရက်" }
    ],
    examples: [
      {
        japanese: "毎日日本語を勉強します。",
        ruby: "<ruby>毎日<rt>まいにち</rt></ruby><ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>します。",
        romaji: "Mainichi nihongo o benkyou shimasu.",
        myanmar: "နေ့တိုင်း ဂျပန်စာကို လေ့လာသင်ယူပါတယ်။"
      },
      {
        japanese: "日曜日に友達と会います。",
        ruby: "<ruby>日曜日<rt>にちようび</rt></ruby>に<ruby>友達<rt>ともだち</rt></ruby>と<ruby>会<rt>あ</rt></ruby>います。",
        romaji: "Nichiyoubi ni tomodachi to aimasu.",
        myanmar: "တနင်္ဂနွေနေ့မှာ သူငယ်ချင်းနဲ့ တွေ့ဆုံပါမယ်။"
      }
    ]
  },
  {
    id: 2,
    kanji: "本",
    jlpt: "N5",
    strokeCount: 5,
    radicals: "木 (Tree) + 一 (Base line)",
    onyomi: [
      { kana: "ホン", romaji: "hon" }
    ],
    kunyomi: [
      { kana: "もと", romaji: "moto" }
    ],
    myanmarMeaning: "စာအုပ်၊ မူလ၊ အရင်းအမြစ်",
    myanmarDetail: "စာအုပ်စာပေ (သို့) အရာဝတ္ထုတစ်ခု၏ မူလအစ၊ အရင်းအမြစ်ကို ဖော်ပြပါသည်။ ချောင်းရေတွက်ရာတွင်လည်းသုံးသည်။",
    mnemonic: "သစ်ပင် (木) ၏ အောက်ခြေမြစ်ရင်းတွင် မျဉ်းတားပြီး အရင်းအမြစ်ကို ဖော်ပြရာမှ ဖြစ်ပေါ်လာသည်။",
    vocabulary: [
      { word: "本", reading: "ほん", romaji: "hon", myanmar: "စာအုပ်" },
      { word: "本屋", reading: "ほんや", romaji: "honya", myanmar: "စာအုပ်ဆိုင်" },
      { word: "山本", reading: "やまもと", romaji: "yamamoto", myanmar: "ယာမာမိုတို (ဂျပန်မျိုးရိုးအမည်)" },
      { word: "一本", reading: "いっぽん", romaji: "ippon", myanmar: "တစ်ချောင်း / တစ်ခု (ပုလင်း၊ သစ်ပင်စသည်)" }
    ],
    examples: [
      {
        japanese: "図書館で面白い本を借りました。",
        ruby: "<ruby>図書館<rt>としょかん</rt></ruby>で<ruby>面白<rt>おもしろ</rt></ruby>い<ruby>本<rt>ほん</rt></ruby>を<ruby>借<rt>か</rt></ruby>りました。",
        romaji: "Toshokan de omoshiroi hon o karimashita.",
        myanmar: "စာကြည့်တိုက်ကနေ စိတ်ဝင်စားစရာကောင်းတဲ့ စာအုပ်ကို ငှားခဲ့ပါတယ်။"
      }
    ]
  },
  {
    id: 3,
    kanji: "人",
    jlpt: "N5",
    strokeCount: 2,
    radicals: "人 (Person)",
    onyomi: [
      { kana: "ジン", romaji: "jin" },
      { kana: "ニン", romaji: "nin" }
    ],
    kunyomi: [
      { kana: "ひと", romaji: "hito" }
    ],
    myanmarMeaning: "လူ၊ ပုဂ္ဂိုလ်၊ လူမျိုး",
    myanmarDetail: "လူသား၊ လူမျိုး (သို့) လူအရေအတွက်ကို ရေတွက်ဖော်ပြသော အခြေခံ ကန်ဂျီ ဖြစ်ပါသည်။",
    mnemonic: "ခြေထောက်နှစ်ချောင်းဖြင့် မတ်တတ်ရပ်နေသော လူတစ်ဦး၏ ပုံစံကို ရေးဆွဲထားခြင်း ဖြစ်သည်။",
    vocabulary: [
      { word: "日本人", reading: "にほんじん", romaji: "nihonjin", myanmar: "ဂျပန်လူမျိုး" },
      { word: "ミャンマー人", reading: "みゃんまーじん", romaji: "myanma-jin", myanmar: "မြန်မာလူမျိုး" },
      { word: "一人", reading: "ひとり", romaji: "hitori", myanmar: "တစ်ယောက်တည်း" },
      { word: "三人", reading: "さんにん", romaji: "sannin", myanmar: "သုံးယောက်" }
    ],
    examples: [
      {
        japanese: "あの人はとても親切な人です。",
        ruby: "あの<ruby>人<rt>ひと</rt></ruby>はとても<ruby>親切<rt>しんせつ</rt></ruby>な<ruby>人<rt>ひと</rt></ruby>です。",
        romaji: "Ano hito wa totemo shinsetsu na hito desu.",
        myanmar: "ဟိုလူက အရမ်းသဘောကောင်းပြီး ကြင်နာတတ်တဲ့လူ ဖြစ်ပါတယ်။"
      }
    ]
  },
  {
    id: 4,
    kanji: "月",
    jlpt: "N5",
    strokeCount: 4,
    radicals: "月 (Moon)",
    onyomi: [
      { kana: "ゲツ", romaji: "getsu" },
      { kana: "ガツ", romaji: "gatsu" }
    ],
    kunyomi: [
      { kana: "つき", romaji: "tsuki" }
    ],
    myanmarMeaning: "လ၊ လမင်း၊ တနင်္လာနေ့",
    myanmarDetail: "ကောင်းကင်ယံရှိ လမင်း သို့မဟုတ် တစ်နှစ်အတွင်းရှိ လများ (ဥပမာ- ဇန်နဝါရီလ) ကို ဖော်ပြပါသည်။",
    mnemonic: "ကောင်းကင်ထက်တွင် တောက်ပနေသော လခြမ်းကွေးပုံသဏ္ဌာန် ဖြစ်ပါသည်။",
    vocabulary: [
      { word: "今月", reading: "こんげつ", romaji: "kongetsu", myanmar: "ဒီလ" },
      { word: "月曜日", reading: "げつようび", romaji: "getsuyoubi", myanmar: "တနင်္လာနေ့" },
      { word: "一月", reading: "いちがつ", romaji: "ichigatsu", myanmar: "ဇန်နဝါရီလ" },
      { word: "毎月", reading: "まいつき / まいげつ", romaji: "maitsuki / maigetsu", myanmar: "လစဉ် / လတိုင်း" }
    ],
    examples: [
      {
        japanese: "今夜は月がとても綺麗ですね。",
        ruby: "<ruby>今夜<rt>こんや</rt></ruby>は<ruby>月<rt>つき</rt></ruby>がとても<ruby>綺麗<rt>きれい</rt></ruby>ですね。",
        romaji: "Konya wa tsuki ga totemo kirei desu ne.",
        myanmar: "ဒီည လမင်းကြီးက သိပ်လှတာပဲနော်။"
      }
    ]
  },
  {
    id: 5,
    kanji: "火",
    jlpt: "N5",
    strokeCount: 4,
    radicals: "火 (Fire)",
    onyomi: [
      { kana: "カ", romaji: "ka" }
    ],
    kunyomi: [
      { kana: "ひ", romaji: "hi" },
      { kana: "ほ-", romaji: "ho-" }
    ],
    myanmarMeaning: "မီး၊ အင်္ဂါနေ့",
    myanmarDetail: "မီးတောက်မီးလျှံ သို့မဟုတ် ရက်သတ္တပတ်၏ အင်္ဂါနေ့ကို ညွှန်းဆိုပါသည်။",
    mnemonic: "တောက်လောင်နေသော မီးတောက်နှင့် မီးပွားများ လွင့်ပျံနေသည့် ပုံသဏ္ဌာန် ဖြစ်ပါသည်။",
    vocabulary: [
      { word: "火曜日", reading: "かようび", romaji: "kayoubi", myanmar: "အင်္ဂါနေ့" },
      { word: "火事", reading: "かじ", romaji: "kaji", myanmar: "မီးလောင်မှု / မီးဘေး" },
      { word: "花火", reading: "はなび", romaji: "hanabi", myanmar: "မီးရှူးမီးပန်း" },
      { word: "火星", reading: "かせい", romaji: "kasei", myanmar: "အင်္ဂါဂြိုဟ်" }
    ],
    examples: [
      {
        japanese: "火曜日に日本語のテストがあります。",
        ruby: "<ruby>火曜日<rt>かようび</rt></ruby>に<ruby>日本語<rt>にほんご</rt></ruby>のテストがあります。",
        romaji: "Kayoubi ni nihongo no tesuto ga arimasu.",
        myanmar: "အင်္ဂါနေ့မှာ ဂျပန်စာ စာမေးပွဲ ရှိပါတယ်။"
      }
    ]
  },
  {
    id: 6,
    kanji: "水",
    jlpt: "N5",
    strokeCount: 4,
    radicals: "水 (Water)",
    onyomi: [
      { kana: "スイ", romaji: "sui" }
    ],
    kunyomi: [
      { kana: "みず", romaji: "mizu" }
    ],
    myanmarMeaning: "ရေ၊ ဗုဒ္ဓဟူးနေ့",
    myanmarDetail: "သောက်သုံးရေ၊ အရည် သို့မဟုတ် ဗုဒ္ဓဟူးနေ့ကို ကိုယ်စားပြုသော ကန်ဂျီ ဖြစ်ပါသည်။",
    mnemonic: "စီးဆင်းနေသော မြစ်ရေလှိုင်းတွန့် ပုံသဏ္ဌာန်မှ ဆင်းသက်လာခြင်း ဖြစ်သည်။",
    vocabulary: [
      { word: "お水", reading: "おみず", romaji: "omizu", myanmar: "ရေ / သောက်ရေ" },
      { word: "水曜日", reading: "すいようび", romaji: "suiyoubi", myanmar: "ဗုဒ္ဓဟူးနေ့" },
      { word: "水泳", reading: "すいえい", romaji: "suiei", myanmar: "ရေကူးခြင်း" },
      { word: "水道", reading: "すいどう", romaji: "suidou", myanmar: "ရေပိုက်လိုင်း / ရေပေးဝေရေး" }
    ],
    examples: [
      {
        japanese: "冷たい水を一杯ください。",
        ruby: "<ruby>冷<rt>つめ</rt></ruby>たい<ruby>水<rt>みず</rt></ruby>を<ruby>一杯<rt>いっぱい</rt></ruby>ください。",
        romaji: "Tsumetai mizu o ippai kudasai.",
        myanmar: "ရေအေးတစ်ခွက်လောက် ပေးပါ။"
      }
    ]
  },
  {
    id: 7,
    kanji: "木",
    jlpt: "N5",
    strokeCount: 4,
    radicals: "木 (Tree)",
    onyomi: [
      { kana: "ボク", romaji: "boku" },
      { kana: "モク", romaji: "moku" }
    ],
    kunyomi: [
      { kana: "き", romaji: "ki" },
      { kana: "こ-", romaji: "ko-" }
    ],
    myanmarMeaning: "သစ်ပင်၊ သစ်သား၊ ကြာသပတေးနေ့",
    myanmarDetail: "သဘာဝပေါက်ပင် သစ်ပင်၊ သစ်သားထည် သို့မဟုတ် ကြာသပတေးနေ့ကို ညွှန်းဆိုပါသည်။",
    mnemonic: "ပင်စည်၊ အကိုင်းအခက်နှင့် အမြစ်များပါရှိသော သစ်ပင်ပုံသဏ္ဌာန် ဖြစ်ပါသည်။",
    vocabulary: [
      { word: "木", reading: "き", romaji: "ki", myanmar: "သစ်ပင် / သစ်သား" },
      { word: "木曜日", reading: "もくようび", romaji: "mokuyoubi", myanmar: "ကြာသပတေးနေ့" },
      { word: "木材", reading: "もくざい", romaji: "mokuzai", myanmar: "သစ်သားကုန်ကြမ်း" },
      { word: "大木", reading: "たいぼく", romaji: "taiboku", myanmar: "သစ်ပင်ကြီး" }
    ],
    examples: [
      {
        japanese: "公園に大きな木がたくさんあります。",
        ruby: "<ruby>公園<rt>こうえん</rt></ruby>に<ruby>大<rt>おお</rt></ruby>きな<ruby>木<rt>き</rt></ruby>がたくさんあります。",
        romaji: "Kouen ni ookina ki ga takusan arimasu.",
        myanmar: "ပန်းခြံထဲမှာ သစ်ပင်ကြီးတွေ အများကြီး ရှိပါတယ်။"
      }
    ]
  },
  {
    id: 8,
    kanji: "金",
    jlpt: "N5",
    strokeCount: 8,
    radicals: "金 (Gold/Metal)",
    onyomi: [
      { kana: "キン", romaji: "kin" },
      { kana: "コン", romaji: "kon" }
    ],
    kunyomi: [
      { kana: "かね", romaji: "kane" },
      { kana: "かな-", romaji: "kana-" }
    ],
    myanmarMeaning: "ရွှေ၊ ပိုက်ဆံ၊ သောကြာနေ့",
    myanmarDetail: "ရွှေရတနာ၊ သတ္တု၊ ငွေကြေး သို့မဟုတ် သောကြာနေ့ကို ဖော်ပြပါသည်။",
    mnemonic: "မြေကြီးအောက်တွင် မြှုပ်နှံထားသော အဖိုးတန် ရွှေတုံးများ ပုံသဏ္ဌာန် ဖြစ်ပါသည်။",
    vocabulary: [
      { word: "お金", reading: "おかね", romaji: "okane", myanmar: "ပိုက်ဆံ / ငွေကြေး" },
      { word: "金曜日", reading: "きんようび", romaji: "kinyoubi", myanmar: "သောကြာနေ့" },
      { word: "料金", reading: "りょうきん", romaji: "ryoukin", myanmar: "အခကြေးငွေ / ကုန်ကျစရိတ်" },
      { word: "金色", reading: "きんいろ", romaji: "kin'iro", myanmar: "ရွှေရောင်" }
    ],
    examples: [
      {
        japanese: "金曜日の夜に映画を見ます。",
        ruby: "<ruby>金曜日<rt>きんようび</rt></ruby>の<ruby>夜<rt>よる</rt></ruby>に<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>ます。",
        romaji: "Kinyoubi no yoru ni eiga o mimasu.",
        myanmar: "သောကြာနေ့ညမှာ ရုပ်ရှင်ကြည့်ပါမယ်။"
      }
    ]
  },
  {
    id: 9,
    kanji: "土",
    jlpt: "N5",
    strokeCount: 3,
    radicals: "土 (Earth/Soil)",
    onyomi: [
      { kana: "ド", romaji: "do" },
      { kana: "ト", romaji: "to" }
    ],
    kunyomi: [
      { kana: "つち", romaji: "tsuchi" }
    ],
    myanmarMeaning: "မြေကြီး၊ စနေနေ့",
    myanmarDetail: "မြေဆီလွှာ၊ ကမ္ဘာမြေပြင် သို့မဟုတ် ရက်သတ္တပတ်၏ စနေနေ့ကို ကိုယ်စားပြုပါသည်။",
    mnemonic: "မြေပြင် (一) မှ အညှောင့်ထွက်ပေါ်လာသော အပင်ငယ် (十) ပုံစံ ဖြစ်ပါသည်။",
    vocabulary: [
      { word: "土曜日", reading: "どようび", romaji: "doyoubi", myanmar: "စနေနေ့" },
      { word: "土地", reading: "とち", romaji: "tochi", myanmar: "မြေနေရာ / မြေကွက်" },
      { word: "お土産", reading: "おみやげ", romaji: "omiyage", myanmar: "လက်ဆောင် / ဒေသထွက်ပစ္စည်း" },
      { word: "粘土", reading: "ねんど", romaji: "nendo", myanmar: "ရွှံ့စေး" }
    ],
    examples: [
      {
        japanese: "土曜日はデパートで買い物をします。",
        ruby: "<ruby>土曜日<rt>どようび</rt></ruby>はデパートで<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>をします。",
        romaji: "Doyoubi wa depaato de kaimono o shimasu.",
        myanmar: "စနေနေ့မှာ ကုန်တိုက်ကြီးထဲ ဈေးဝယ်ထွက်ပါမယ်။"
      }
    ]
  },
  {
    id: 10,
    kanji: "学",
    jlpt: "N5",
    strokeCount: 8,
    radicals: "子 (Child) + 宀 (Roof/Crown)",
    onyomi: [
      { kana: "ガク", romaji: "gaku" }
    ],
    kunyomi: [
      { kana: "まな・ぶ", romaji: "mana-bu" }
    ],
    myanmarMeaning: "ပညာသင်ကြားခြင်း၊ ကျောင်း",
    myanmarDetail: "ပညာဗဟုသုတ လေ့လာဆည်းပူးခြင်း၊ ကျောင်းတော်နှင့် သက်ဆိုင်သော အရာများကို ဖော်ပြပါသည်။",
    mnemonic: "အမိုးအကာ (宀) အောက်တွင် ကလေးငယ် (子) တစ်ဦး စာသင်ကြားနေသော ပုံစံ ဖြစ်ပါသည်။",
    vocabulary: [
      { word: "学生", reading: "がくせい", romaji: "gakusei", myanmar: "ကျောင်းသား / ကျောင်းသူ" },
      { word: "大学", reading: "だいがく", romaji: "daigaku", myanmar: "တက္ကသိုလ်" },
      { word: "学校", reading: "がっこう", romaji: "gakkou", myanmar: "ကျောင်း" },
      { word: "学ぶ", reading: "まなぶ", romaji: "manabu", myanmar: "လေ့လာသင်ယူသည်" }
    ],
    examples: [
      {
        japanese: "私はヤンゴン大学の学生です。",
        ruby: "<ruby>私<rt>わたし</rt></ruby>はヤンゴン<ruby>大学<rt>だいがく</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>です。",
        romaji: "Watashi wa yangon daigaku no gakusei desu.",
        myanmar: "ကျွန်တော်/မ သည် ရန်ကုန်တက္ကသိုလ်မှ ကျောင်းသား/သူ ဖြစ်ပါသည်။"
      }
    ]
  },
  {
    id: 11,
    kanji: "校",
    jlpt: "N5",
    strokeCount: 10,
    radicals: "木 (Tree) + 交 (Mix/Exchange)",
    onyomi: [
      { kana: "コウ", romaji: "kou" }
    ],
    kunyomi: [],
    myanmarMeaning: "ကျောင်း၊ အဆောက်အအုံ",
    myanmarDetail: "ကျောင်းတိုက်၊ စာသင်ကျောင်း အဆောက်အအုံကို ကိုယ်စားပြုသော ကန်ဂျီ ဖြစ်ပါသည်။",
    mnemonic: "သစ်သား (木) ဖြင့် တည်ဆောက်ထားပြီး လူအများ တွေ့ဆုံဖလှယ်ရာ (交) နေရာ ဖြစ်သော 'ကျောင်း' ဖြစ်သည်။",
    vocabulary: [
      { word: "学校", reading: "がっこう", romaji: "gakkou", myanmar: "ကျောင်း" },
      { word: "小学校", reading: "しょうがっこう", romaji: "shougakkou", myanmar: "မူလတန်းကျောင်း" },
      { word: "中学校", reading: "ちゅうがっこう", romaji: "chuugakkou", myanmar: "အလယ်တန်းကျောင်း" },
      { word: "高校", reading: "こうこう", romaji: "koukou", myanmar: "အထက်တန်းကျောင်း" }
    ],
    examples: [
      {
        japanese: "毎朝８時に学校へ行きます。",
        ruby: "<ruby>毎朝<rt>まいあさ</rt></ruby><ruby>８時<rt>はちじ</rt></ruby>に<ruby>学校<rt>がっこう</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きます。",
        romaji: "Maiasa hachiji ni gakkou e ikimasu.",
        myanmar: "မနက်တိုင်း ၈ နာရီမှာ ကျောင်းကို သွားပါတယ်။"
      }
    ]
  },
  {
    id: 12,
    kanji: "先",
    jlpt: "N5",
    strokeCount: 6,
    radicals: "儿 (Legs)",
    onyomi: [
      { kana: "セン", romaji: "sen" }
    ],
    kunyomi: [
      { kana: "さき", romaji: "saki" },
      { kana: "ま・ず", romaji: "ma-zu" }
    ],
    myanmarMeaning: "ရှေ့၊ အရင်၊ ဦးစွာ",
    myanmarDetail: "အချိန်ကာလ သို့မဟုတ် နေရာအားဖြင့် ရှေ့ဦးစွာကျခြင်း၊ ဦးဆောင်ခြင်းကို ဖော်ပြပါသည်။",
    mnemonic: "ခြေလှမ်း (儿) ကို အရင်ဦးဆုံး လှမ်းတက်သွားသော ပုံသဏ္ဌာန် ဖြစ်ပါသည်။",
    vocabulary: [
      { word: "先生", reading: "せんせい", romaji: "sensei", myanmar: "ဆရာ / ဆရာမ" },
      { word: "先週", reading: "せんしゅう", romaji: "senshuu", myanmar: "ပြီးခဲ့သည့်အပတ်" },
      { word: "先月", reading: "せんげつ", romaji: "sengetsu", myanmar: "ပြီးခဲ့သည့်လ" },
      { word: "お先に", reading: "おさきに", romaji: "osakini", myanmar: "အရင်ဦးစွာ (ပြန်ပါရစေ)" }
    ],
    examples: [
      {
        japanese: "田中先生はとても分かりやすく教えます。",
        ruby: "<ruby>田中<rt>たなか</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>はとても<ruby>分<rt>わ</rt></ruby>かりやすく<ruby>教<rt>おし</rt></ruby>えます。",
        romaji: "Tanaka sensei wa totemo wakariyasuku oshiemasu.",
        myanmar: "တာနာကာဆရာသည် နားလည်လွယ်အောင် အလွန်ကောင်းမွန်စွာ သင်ကြားပေးပါသည်။"
      }
    ]
  },
  {
    id: 13,
    kanji: "生",
    jlpt: "N5",
    strokeCount: 5,
    radicals: "生 (Life/Birth)",
    onyomi: [
      { kana: "セイ", romaji: "sei" },
      { kana: "ショウ", romaji: "shou" }
    ],
    kunyomi: [
      { kana: "い・きる", romaji: "i-kiru" },
      { kana: "う・まれる", romaji: "u-mareru" },
      { kana: "なま", romaji: "nama" }
    ],
    myanmarMeaning: "အသက်ရှင်ခြင်း၊ မွေးဖွားခြင်း၊ အစိမ်း",
    myanmarDetail: "ဇီဝအသက်ရှင်ခြင်း၊ မွေးဖွားဖြစ်တည်ခြင်း သို့မဟုတ် မချက်ပြုတ်ရသေးသော အစိမ်းကို ဖော်ပြပါသည်။",
    mnemonic: "မြေကြီးထဲမှ အညှောင့်ထွက်ပေါက်လာသော သက်ရှိပင်ပေါက်ကလေး ပုံသဏ္ဌာန် ဖြစ်ပါသည်။",
    vocabulary: [
      { word: "生きる", reading: "いきる", romaji: "ikiru", myanmar: "အသက်ရှင်သည်" },
      { word: "生まれる", reading: "うまれる", romaji: "umareru", myanmar: "မွေးဖွားသည်" },
      { word: "生ビール", reading: "なまびーる", romaji: "namabiiru", myanmar: "စည်ဘီယာ (လတ်လတ်ဆတ်ဆတ်)" },
      { word: "誕生日", reading: "たんじょうび", romaji: "tanjoubi", myanmar: "မွေးနေ့" }
    ],
    examples: [
      {
        japanese: "私の誕生日は１０月１５日です。",
        ruby: "<ruby>私<rt>わたし</rt></ruby>の<ruby>誕生日<rt>たんじょうび</rt></ruby>は<ruby>１０月<rt>じゅうがつ</rt></ruby><ruby>１５日<rt>じゅうごにち</rt></ruby>です。",
        romaji: "Watashi no tanjoubi wa juugatsu juugonichi desu.",
        myanmar: "ကျွန်တော်/မ၏ မွေးနေ့သည် အောက်တိုဘာလ ၁၅ ရက် ဖြစ်ပါသည်။"
      }
    ]
  },
  {
    id: 14,
    kanji: "食",
    jlpt: "N5",
    strokeCount: 9,
    radicals: "食 (Eat/Food)",
    onyomi: [
      { kana: "ショク", romaji: "shoku" },
      { kana: "ジキ", romaji: "jiki" }
    ],
    kunyomi: [
      { kana: "た・べる", romaji: "ta-beru" },
      { kana: "く・う", romaji: "ku-u" }
    ],
    myanmarMeaning: "စားသောက်ခြင်း၊ အစားအစာ",
    myanmarDetail: "အစားအသောက် စားသုံးခြင်းနှင့် စားဖွယ်ရာ ဟင်းလျာများကို ညွှန်းဆိုပါသည်။",
    mnemonic: "အဖုံးပါသော ပန်းကန်လုံး (亼) ထဲမှ ကောက်နှံအစားအစာ (良) ပုံသဏ္ဌာန် ဖြစ်ပါသည်။",
    vocabulary: [
      { word: "食べる", reading: "たべる", romaji: "taberu", myanmar: "စားသည်" },
      { word: "食べ物", reading: "たべもの", romaji: "tabemono", myanmar: "အစားအစာ" },
      { word: "食事", reading: "しょくじ", romaji: "shokuji", myanmar: "အစားအသောက် / ထမင်းစားခြင်း" },
      { word: "朝食", reading: "ちょうしょく", romaji: "choushoku", myanmar: "မနက်စာ" }
    ],
    examples: [
      {
        japanese: "日本料理を一度食べてみたいです。",
        ruby: "<ruby>日本料理<rt>にほんりょうり</rt></ruby>を<ruby>一度<rt>いちど</rt></ruby><ruby>食<rt>た</rt></ruby>べてみたいです。",
        romaji: "Nihon ryouri o ichido tabete mitai desu.",
        myanmar: "ဂျပန်အစားအစာကို တစ်ကြိမ်လောက် စားကြည့်ချင်ပါတယ်။"
      }
    ]
  },
  {
    id: 15,
    kanji: "飲",
    jlpt: "N5",
    strokeCount: 12,
    radicals: "食 (Food) + 欠 (Yawn/Lack)",
    onyomi: [
      { kana: "イン", romaji: "in" }
    ],
    kunyomi: [
      { kana: "の・む", romaji: "no-mu" }
    ],
    myanmarMeaning: "သောက်ခြင်း၊ သောက်စရာ",
    myanmarDetail: "ရေ၊ လက်ဖက်ရည် စသော အရည်များကို သောက်သုံးခြင်း (သို့) ဆေးသောက်ခြင်းကို ဖော်ပြပါသည်။",
    mnemonic: "အစားအသောက် (飠) ကို ပါးစပ်ဟပြီး မျိုချသောက်သုံးနေသော (欠) ပုံသဏ္ဌာန် ဖြစ်ပါသည်။",
    vocabulary: [
      { word: "飲む", reading: "のむ", romaji: "nomu", myanmar: "သောက်သည်" },
      { word: "飲み物", reading: "のみもの", romaji: "nomimono", myanmar: "သောက်စရာ" },
      { word: "飲食店", reading: "いんしょくてん", romaji: "inshokuten", myanmar: "စားသောက်ဆိုင်" },
      { word: "飲み薬", reading: "のみぐすり", romaji: "nomigusuri", myanmar: "သောက်ဆေး" }
    ],
    examples: [
      {
        japanese: "温かいお茶を飲みましょう。",
        ruby: "<ruby>温<rt>あたた</rt></ruby>かいお<ruby>茶<rt>ちゃ</rt></ruby>を<ruby>飲<rt>の</rt></ruby>みましょう。",
        romaji: "Atatakai ocha o nomimashou.",
        myanmar: "နွေးထွေးတဲ့ ရေနွေးကြမ်းလေး သောက်ကြရအောင်။"
      }
    ]
  },
  {
    id: 16,
    kanji: "車",
    jlpt: "N5",
    strokeCount: 7,
    radicals: "車 (Cart/Vehicle)",
    onyomi: [
      { kana: "シャ", romaji: "sha" }
    ],
    kunyomi: [
      { kana: "くるま", romaji: "kuruma" }
    ],
    myanmarMeaning: "ကား၊ ယာဉ်၊ ဘီး",
    myanmarDetail: "ဘီးတပ်ယာဉ်များ၊ မော်တော်ကား၊ ရထား စသော သယ်ယူပို့ဆောင်ရေး ယာဉ်များကို ဖော်ပြပါသည်။",
    mnemonic: "ရှေးခေတ် ဘီးနှစ်ဘီးတပ် ရထားလုံးကို အထက်မှ အောက်သို့ ငုံ့ကြည့်ထားသော ပုံသဏ္ဌာန် ဖြစ်သည်။",
    vocabulary: [
      { word: "車", reading: "くるま", romaji: "kuruma", myanmar: "ကား / မော်တော်ကား" },
      { word: "電車", reading: "でんしゃ", romaji: "densha", myanmar: "ရထား / ဓာတ်ရထား" },
      { word: "自転車", reading: "じてんしゃ", romaji: "jitensha", myanmar: "စက်ဘီး" },
      { word: "自動車", reading: "じどうしゃ", romaji: "jidousha", myanmar: "မော်တော်ကားကြီး" }
    ],
    examples: [
      {
        japanese: "電車で会社へ通っています。",
        ruby: "<ruby>電車<rt>でんしゃ</rt></ruby>で<ruby>会社<rt>かいしゃ</rt></ruby>へ<ruby>通<rt>か通</rt></ruby>っています。",
        romaji: "Densha de kaisha e kayotte imasu.",
        myanmar: "ရထားဖြင့် ကုမ္ပဏီသို့ အသွားအပြန် လုပ်နေပါတယ်။"
      }
    ]
  },
  {
    id: 17,
    kanji: "語",
    jlpt: "N5",
    strokeCount: 14,
    radicals: "言 (Words) + 吾 (I/Myself)",
    onyomi: [
      { kana: "ゴ", romaji: "go" }
    ],
    kunyomi: [
      { kana: "かた・る", romaji: "kata-ru" },
      { kana: "かた・らう", romaji: "kata-rau" }
    ],
    myanmarMeaning: "ဘာသာစကား၊ စကားလုံး၊ စကားပြောခြင်း",
    myanmarDetail: "လူမျိုးတစ်မျိုး၏ ပြောဆိုသုံးစွဲသော ဘာသာစကား သို့မဟုတ် ဝေါဟာရစကားလုံးများကို ညွှန်းဆိုပါသည်။",
    mnemonic: "စကားပြောဆိုခြင်း (言) ဖြင့် ငါ (吾) ၏ အတွေးအမြင်များကို ဖော်ပြရာမှ 'ဘာသာစကား' ဖြစ်လာသည်။",
    vocabulary: [
      { word: "日本語", reading: "にほんご", romaji: "nihongo", myanmar: "ဂျပန်ဘာသာစကား" },
      { word: "英語", reading: "えいご", romaji: "eigo", myanmar: "အင်္ဂလိပ်ဘာသာစကား" },
      { word: "ミャンマー語", reading: "みゃんまーご", romaji: "myanma-go", myanmar: "မြန်မာဘာသာစကား" },
      { word: "単語", reading: "たんご", romaji: "tango", myanmar: "ဝေါဟာရ / စကားလုံး" }
    ],
    examples: [
      {
        japanese: "私は日本語と英語を話すことができます。",
        ruby: "<ruby>私<rt>わたし</rt></ruby>は<ruby>日本語<rt>にほんご</rt></ruby>と<ruby>英語<rt>えいご</rt></ruby>を<ruby>話<rt>はな</rt></ruby>すことができます。",
        romaji: "Watashi wa nihongo to eigo o hanasu koto ga dekimasu.",
        myanmar: "ကျွန်တော်/မသည် ဂျပန်စကားနှင့် အင်္ဂလိပ်စကားကို ပြောဆိုနိုင်ပါသည်။"
      }
    ]
  },
  {
    id: 18,
    kanji: "友",
    jlpt: "N5",
    strokeCount: 4,
    radicals: "又 (Again/Right hand)",
    onyomi: [
      { kana: "ユウ", romaji: "yuu" }
    ],
    kunyomi: [
      { kana: "とも", romaji: "tomo" }
    ],
    myanmarMeaning: "သူငယ်ချင်း၊ မိတ်ဆွေ",
    myanmarDetail: "ရင်းနှီးချစ်ခင်ရသော မိတ်ဆွေ အပေါင်းအသင်း သူငယ်ချင်းကို ရည်ညွှန်းပါသည်။",
    mnemonic: "လက်ဆွဲနှုတ်ဆက်ကာ အချင်းချင်း ကူညီဖေးမနေသော မိတ်ဆွေနှစ်ဦး၏ လက်နှစ်ဖက် ပုံစံ ဖြစ်ပါသည်။",
    vocabulary: [
      { word: "友達", reading: "ともだち", romaji: "tomodachi", myanmar: "သူငယ်ချင်း / မိတ်ဆွေ" },
      { word: "親友", reading: "しんゆう", romaji: "shin'yuu", myanmar: "အရင်းနှီးဆုံး သူငယ်ချင်း" },
      { word: "友人", reading: "ゆうじん", romaji: "yuujin", myanmar: "မိတ်ဆွေအပေါင်းအသင်း" },
      { word: "友好", reading: "ゆうこう", romaji: "yuukou", myanmar: "ချစ်ကြည်ရင်းနှီးမှု" }
    ],
    examples: [
      {
        japanese: "高校の時からの親友と旅行に行きました。",
        ruby: "<ruby>高校<rt>こうこう</rt></ruby>の<ruby>時<rt>とき</rt></ruby>からの<ruby>親友<rt>しんゆう</rt></ruby>と<ruby>旅行<rt>りょこう</rt></ruby>に<ruby>行<rt>い</rt></ruby>きました。",
        romaji: "Koukou no toki kara no shin'yuu to ryokou ni ikimashita.",
        myanmar: "အထက်တန်းကျောင်းသားဘဝကတည်းက အရင်းနှီးဆုံးသူငယ်ချင်းနဲ့ ခရီးသွားခဲ့ပါတယ်။"
      }
    ]
  },
  {
    id: 19,
    kanji: "何",
    jlpt: "N5",
    strokeCount: 7,
    radicals: "亻 (Person) + 可 (Can/Possible)",
    onyomi: [
      { kana: "カ", romaji: "ka" }
    ],
    kunyomi: [
      { kana: "なに", romaji: "nani" },
      { kana: "なん", romaji: "nan" }
    ],
    myanmarMeaning: "ဘာလဲ၊ အဘယ်အရာ",
    myanmarDetail: "မေးခွန်းထုတ်ရာတွင် သုံးသော 'ဘာလဲ'၊ 'မည်သည့်အရာ' ဟု အဓိပ္ပာယ်ရသည့် အမေးပုဒ် ဖြစ်ပါသည်။",
    mnemonic: "လူတစ်ဦး (亻) က ထမ်းပိုးပေါ်တွင် မည်သည့်ပစ္စည်းကို သယ်ဆောင်လာသနည်း (可) ဟု မေးမြန်းနေပုံ ဖြစ်သည်။",
    vocabulary: [
      { word: "何", reading: "なに / なん", romaji: "nani / nan", myanmar: "ဘာလဲ" },
      { word: "何時", reading: "なんじ", romaji: "nanji", myanmar: "ဘယ်နှစ်နာရီလဲ" },
      { word: "何人", reading: "なんにん", romaji: "nannin", myanmar: "လူဘယ်နှစ်ယောက်လဲ" },
      { word: "何か", reading: "なにか", romaji: "nanika", myanmar: "တစ်ခုခု" }
    ],
    examples: [
      {
        japanese: "今、何時何分ですか。",
        ruby: "<ruby>今<rt>いま</rt></ruby>、<ruby>何時<rt>なんじ</rt></ruby><ruby>何分<rt>なんぷん</rt></ruby>ですか。",
        romaji: "Ima, nanji nanpun desu ka.",
        myanmar: "အခု ဘယ်နှစ်နာရီ ဘယ်နှစ်မိနစ် ရှိပြီလဲ ခင်ဗျာ/ရှင်။"
      }
    ]
  },
  {
    id: 20,
    kanji: "山",
    jlpt: "N5",
    strokeCount: 3,
    radicals: "山 (Mountain)",
    onyomi: [
      { kana: "サン", romaji: "san" },
      { kana: "セン", romaji: "sen" }
    ],
    kunyomi: [
      { kana: "やま", romaji: "yama" }
    ],
    myanmarMeaning: "တောင်၊ တောင်ကုန်း",
    myanmarDetail: "မြင့်မားသော တောင်တန်းကြီးများ၊ သဘာဝတောင်ကုန်းများကို ကိုယ်စားပြုသော ကန်ဂျီ ဖြစ်ပါသည်။",
    mnemonic: "တောင်ထွတ်သုံးခု စီတန်းနေသော တောင်တန်း၏ ပုံသဏ္ဌာန် ဖြစ်ပါသည်။",
    vocabulary: [
      { word: "山", reading: "やま", romaji: "yama", myanmar: "တောင် / တောင်ကုန်း" },
      { word: "富士山", reading: "ふじさん", romaji: "fujisan", myanmar: "ဖူဂျီတောင်" },
      { word: "火山", reading: "かざん", romaji: "kazan", myanmar: "မီးတောင်" },
      { word: "山登り", reading: "やまのぼり", romaji: "yamanobori", myanmar: "တောင်တက်ခြင်း" }
    ],
    examples: [
      {
        japanese: "日本で一番高い山は富士山です。",
        ruby: "<ruby>日本<rt>にほん</rt></ruby>で<ruby>一番<rt>いちばん</rt></ruby><ruby>高<rt>たか</rt></ruby>い<ruby>山<rt>やま</rt></ruby>は<ruby>富士山<rt>ふじさん</rt></ruby>です。",
        romaji: "Nihon de ichiban takai yama wa fujisan desu.",
        myanmar: "ဂျပန်နိုင်ငံတွင် အမြင့်ဆုံးတောင်မှာ ဖူဂျီတောင် ဖြစ်ပါသည်။"
      }
    ]
  },
  {
    id: 21,
    kanji: "雨",
    jlpt: "N4",
    strokeCount: 8,
    radicals: "雨 (Rain)",
    onyomi: [
      { kana: "ウ", romaji: "u" }
    ],
    kunyomi: [
      { kana: "あめ", romaji: "ame" },
      { kana: "あま-", romaji: "ama-" }
    ],
    myanmarMeaning: "မိုး၊ မိုးရေ",
    myanmarDetail: "မိုးကောင်းကင်မှ ရွာချသော မိုးရေ၊ မိုးရာသီကို ဖော်ပြပါသည်။",
    mnemonic: "မိုးတိမ်အောက်မှ မိုးရေစက်များ တဖွဲဖွဲ ကျဆင်းနေသော ပုံသဏ္ဌာန် ဖြစ်ပါသည်။",
    vocabulary: [
      { word: "雨", reading: "あめ", romaji: "ame", myanmar: "မိုး" },
      { word: "大雨", reading: "おおあめ", romaji: "ooame", myanmar: "မိုးသည်းထန်စွာရွာခြင်း" },
      { word: "雨季", reading: "うき", romaji: "uki", myanmar: "မိုးရာသီ" },
      { word: "雨傘", reading: "あまがさ", romaji: "amagasa", myanmar: "မိုးကာထီး" }
    ],
    examples: [
      {
        japanese: "午後は強い雨が降るそうです。",
        ruby: "<ruby>午後<rt>ごご</rt></ruby>は<ruby>強<rt>つよ</rt></ruby>い<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>るそうです。",
        romaji: "Gogo wa tsuyoi ame ga furu sou desu.",
        myanmar: "မွန်းလွဲပိုင်းမှာ မိုးသည်းထန်စွာ ရွာသွန်းနိုင်တယ်လို့ သိရပါတယ်။"
      }
    ]
  },
  {
    id: 22,
    kanji: "電",
    jlpt: "N4",
    strokeCount: 13,
    radicals: "雨 (Rain) + 申 (Lightning)",
    onyomi: [
      { kana: "デン", romaji: "den" }
    ],
    kunyomi: [],
    myanmarMeaning: "လျှပ်စစ်၊ ဓာတ်အား",
    myanmarDetail: "လျှပ်စစ်စွမ်းအင်၊ မိုးကြိုးလျှပ်စီး သို့မဟုတ် အီလက်ထရွန်းနစ် ပစ္စည်းများနှင့် ဆက်စပ်သောအရာများကို ဖော်ပြပါသည်။",
    mnemonic: "မိုးတိမ် (雨) များကြားမှ ဖြာထွက်လာသော မိုးကြိုးလျှပ်စီး (申) ပုံသဏ္ဌာန် ဖြစ်ပါသည်။",
    vocabulary: [
      { word: "電気", reading: "でんき", romaji: "denki", myanmar: "မီး / လျှပ်စစ်ဓာတ်အား" },
      { word: "電話", reading: "でんわ", romaji: "denwa", myanmar: "တယ်လီဖုန်း" },
      { word: "電車", reading: "でんしゃ", romaji: "densha", myanmar: "လျှပ်စစ်ရထား" },
      { word: "電力", reading: "でんりょく", romaji: "denryoku", myanmar: "လျှပ်စစ်စွမ်းအား" }
    ],
    examples: [
      {
        japanese: "部屋を出る時は電気を消してください。",
        ruby: "<ruby>部屋<rt>へや</rt></ruby>を<ruby>出<rt>で</rt></ruby>る<ruby>時<rt>とき</rt></ruby>は<ruby>電気<rt>でんき</rt></ruby>を<ruby>消<rt>け</rt></ruby>してください。",
        romaji: "Heya o deru toki wa denki o keshite kudasai.",
        myanmar: "အခန်းထဲက ထွက်တဲ့အခါ မီးပိတ်ပေးပါ။"
      }
    ]
  },
  {
    id: 23,
    kanji: "話",
    jlpt: "N4",
    strokeCount: 13,
    radicals: "言 (Words) + 舌 (Tongue)",
    onyomi: [
      { kana: "ワ", romaji: "wa" }
    ],
    kunyomi: [
      { kana: "はな・す", romaji: "hana-su" },
      { kana: "はなし", romaji: "hanashi" }
    ],
    myanmarMeaning: "စကားပြောခြင်း၊ ပုံပြင်၊ အကြောင်းအရာ",
    myanmarDetail: "နှုတ်ဖြင့် စကားပြောဆို ဆွေးနွေးခြင်း သို့မဟုတ် ပုံပြင်၊ အဖြစ်အပျက် ဇာတ်လမ်းကို ဖော်ပြပါသည်။",
    mnemonic: "လျှာ (舌) ဖြင့် စကားလုံး (言) များကို စီကုံးပြောဆိုနေသော ပုံသဏ္ဌာန် ဖြစ်ပါသည်။",
    vocabulary: [
      { word: "話す", reading: "はなす", romaji: "hanasu", myanmar: "စကားပြောသည်" },
      { word: "話", reading: "はなし", romaji: "hanashi", myanmar: "စကား / ပုံပြင် / ဇာတ်လမ်း" },
      { word: "会話", reading: "かいわ", romaji: "kaiwa", myanmar: "စကားပြောဆိုခြင်း / အပြန်အလှန်စကားပြော" },
      { word: "世話", reading: "せわ", romaji: "sewa", myanmar: "ဂရုစိုက်ပြုစုခြင်း" }
    ],
    examples: [
      {
        japanese: "ゆっくり日本語で話してください。",
        ruby: "ゆっくり<ruby>日本語<rt>にほんご</rt></ruby>で<ruby>話<rt>はな</rt></ruby>してください。",
        romaji: "Yukkuri nihongo de hanashite kudasai.",
        myanmar: "ကျေးဇူးပြု၍ ဂျပန်လို ဖြည်းဖြည်းချင်း ပြောပေးပါ။"
      }
    ]
  },
  {
    id: 24,
    kanji: "買",
    jlpt: "N4",
    strokeCount: 12,
    radicals: "貝 (Shell/Money) + 网 (Net)",
    onyomi: [
      { kana: "バイ", romaji: "bai" }
    ],
    kunyomi: [
      { kana: "か・う", romaji: "ka-u" }
    ],
    myanmarMeaning: "ဝယ်ယူခြင်း၊ ဝယ်သည်",
    myanmarDetail: "ငွေပေးချေ၍ ပစ္စည်းဝယ်ယူခြင်း၊ ကုန်ပစ္စည်း အရောင်းအဝယ်ကို ဖော်ပြပါသည်။",
    mnemonic: "ရှေးခေတ် ငွေကြေးအဖြစ် သုံးသော ခရုခွံ (貝) များကို ကွန်ပိုက် (网) ဖြင့် ဖမ်းယူသိမ်းဆည်းရာမှ 'ဝယ်ယူခြင်း' ဖြစ်လာသည်။",
    vocabulary: [
      { word: "買う", reading: "かう", romaji: "kau", myanmar: "ဝယ်သည်" },
      { word: "買い物", reading: "かいもの", romaji: "kaimono", myanmar: "ဈေးဝယ်ခြင်း" },
      { word: "売買", reading: "ばいばい", romaji: "baibai", myanmar: "အရောင်းအဝယ်ပြုလုပ်ခြင်း" },
      { word: "買い手", reading: "かいて", romaji: "kaite", myanmar: "ဝယ်ယူသူ / အဝယ်တော်" }
    ],
    examples: [
      {
        japanese: "スーパーで新鮮な野菜を買いました。",
        ruby: "スーパーで<ruby>新鮮<rt>しんせん</rt></ruby>な<ruby>野菜<rt>やさい</rt></ruby>を<ruby>買<rt>か</rt></ruby>いました。",
        romaji: "Suupaa de shinsen na yasai o kaimashita.",
        myanmar: "စူပါမားကတ်မှာ လတ်ဆတ်တဲ့ ဟင်းသီးဟင်းရွက်တွေကို ဝယ်ခဲ့ပါတယ်။"
      }
    ]
  }
];

/**
 * Filter Kanji list by JLPT level.
 * @param {string} level - 'ALL', 'N5', 'N4', etc.
 * @returns {Array} Filtered array of Kanji objects.
 */
export function getKanjiByLevel(level = "ALL") {
  if (!level || level === "ALL") {
    return [...KANJI_DATA];
  }
  return KANJI_DATA.filter(item => item.jlpt.toUpperCase() === level.toUpperCase());
}

/**
 * Search Kanji list across multiple fields:
 * - Kanji character
 * - Onyomi / Kunyomi Kana & Romaji
 * - Myanmar meaning & detail
 * - Vocabulary words
 * 
 * @param {string} query - The search keyword.
 * @param {string} level - Current active JLPT filter.
 * @returns {Array} Matching Kanji objects.
 */
export function searchKanji(query = "", level = "ALL") {
  let deck = getKanjiByLevel(level);
  const trimmed = query.trim().toLowerCase();
  
  if (!trimmed) {
    return deck;
  }
  
  return deck.filter(item => {
    // 1. Direct Kanji match
    if (item.kanji.includes(trimmed)) return true;
    
    // 2. Myanmar meaning or detail match
    if (item.myanmarMeaning.includes(trimmed) || item.myanmarDetail.includes(trimmed)) return true;
    
    // 3. Onyomi match (kana & romaji)
    const onMatch = item.onyomi.some(o => 
      o.kana.toLowerCase().includes(trimmed) || o.romaji.toLowerCase().includes(trimmed)
    );
    if (onMatch) return true;
    
    // 4. Kunyomi match (kana & romaji)
    const kunMatch = item.kunyomi.some(k => 
      k.kana.toLowerCase().includes(trimmed) || k.romaji.toLowerCase().includes(trimmed)
    );
    if (kunMatch) return true;
    
    // 5. Vocabulary match (word, reading, myanmar)
    const vocabMatch = item.vocabulary.some(v => 
      v.word.includes(trimmed) || 
      v.reading.includes(trimmed) || 
      v.romaji.toLowerCase().includes(trimmed) || 
      v.myanmar.includes(trimmed)
    );
    if (vocabMatch) return true;
    
    return false;
  });
}
