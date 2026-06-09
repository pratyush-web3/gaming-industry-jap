export const NAV_LINKS = [
  { to: "/", label: "ホーム" },
  { to: "/studio", label: "スタジオ" },
  { to: "/games", label: "ゲーム作品" },
  { to: "/behind", label: "開発の舞台裏" },
  { to: "/community", label: "コミュニティ" },
  { to: "/news", label: "ニュース" },
  { to: "/careers", label: "採用情報" },
  { to: "/contact", label: "お問い合わせ" },
] as const;

export type Game = {
  slug: string;
  title: string;
  reading: string;
  tagline: string;
  genre: string;
  platforms: string[];
  status: string;
  year: string;
  color: string;
  image: string;
  story: string;
  world: string;
  gameplay: string;
  features: string[];
  characters: { name: string; role: string; bio: string }[];
};

export const GAMES: Game[] = [
  {
    slug: "hoshikage",
    title: "星影クロニクル",
    reading: "Hoshikage Chronicle",
    tagline: "失われた星の記憶を、君の手で紡ぎ直せ。",
    genre: "SF RPG",
    platforms: ["PlayStation 5", "Xbox Series X|S", "Steam"],
    status: "好評発売中",
    year: "2024",
    color: "from-[#00D4FF] via-[#7B61FF] to-[#FF4FD8]",
    image:
      "https://images.unsplash.com/photo-1580617971627-cffa74e39d1d?w=1600&auto=format&fit=crop&q=80",
    story:
      "千年前に消失した恒星「アマツ」の記憶を継承する少女・燈花は、宇宙を漂う記憶の欠片を巡る旅へと出る。失われた文明、語られなかった想い、そして星そのものの最期の願い——プレイヤーの選択が、銀河の歴史を再構築していく。",
    world:
      "舞台は崩壊後の天ノ川銀河。漂流する記憶結晶〈ホシキセキ〉を求め、数多の探索者が宙を渡る。コロニー国家・浮遊都市・廃艦群落といった多層的なロケーションが、緻密な世界観の中で結びつく。",
    gameplay:
      "リアルタイム指揮型バトル、星座を組み替えるスキルツリー、記憶結晶による分岐ナラティブを軸にした、約60時間のシングルプレイ体験。",
    features: [
      "プレイヤーの選択で分岐する3つの結末",
      "オーケストラ全曲書き下ろしの劇伴",
      "12言語フルローカライズ対応",
      "フォトモード／ボイスログ収集要素",
    ],
    characters: [
      {
        name: "燈花 (とうか)",
        role: "主人公／記憶継承者",
        bio: "幼くして星の声を聴く力を授かった少女。失われた家族の記憶を求めて旅を続ける。",
      },
      {
        name: "シリウス・ヴェイン",
        role: "傭兵船〈紫煙〉船長",
        bio: "銀河で名を馳せた元帝国軍人。皮肉屋だが仲間想い。",
      },
      { name: "アマツ", role: "消えた恒星の意志", bio: "燈花の心に語りかける、星そのものの残響。" },
    ],
  },
  {
    slug: "danso",
    title: "断層の記憶",
    reading: "Dansou no Kioku",
    tagline: "君が忘れた一日が、世界の鍵だった。",
    genre: "ナラティブ・アドベンチャー",
    platforms: ["PlayStation 5", "Nintendo Switch", "Steam"],
    status: "2025年春 発売予定",
    year: "2025",
    color: "from-[#7B61FF] via-[#FF4FD8] to-[#00D4FF]",
    image:
      "https://media.gettyimages.com/id/1036415402/photo/chiba-japan-attendees-play-video-games-during-the-tokyo-game-show-2018-on-september-20-2018.jpg?s=612x612&w=0&k=20&c=cd1txNcnMXiw_J_CH4jvuiiXu6igslg_C3uKfpa1qs0=",
    story:
      "記憶を売買する近未来の地下都市〈千層街〉。記憶調律士の青年・湊は、ある女性の失われた一日を再構成する依頼を受ける。そこに広がるのは、街そのものに仕掛けられた巨大な嘘だった。",
    world:
      "雨の絶えない多層都市。ネオン看板に滲む漢字、湿った石畳、改造された電脳街——日本的サイバーパンクの新解釈。",
    gameplay:
      "記憶を時系列で並べ替える独自パズル、対話分岐、心象風景に潜るシーケンスを織り交ぜたナラティブ体験。約15時間。",
    features: [
      "完全フルボイス",
      "プレイヤーの推理で物語が変化",
      "実写ロケに基づく東京モチーフ",
      "サウンドノベル収録",
    ],
    characters: [
      {
        name: "湊 (みなと)",
        role: "記憶調律士",
        bio: "他人の記憶を再構成する若き専門家。自身の過去だけは思い出せない。",
      },
      { name: "黎 (れい)", role: "依頼人", bio: "失った一日を取り戻したいと願う、無口な女性。" },
    ],
  },
  {
    slug: "reikai",
    title: "零界機兵",
    reading: "Reikai Kihei",
    tagline: "鋼の身体に宿る、人の魂。",
    genre: "アクション RPG",
    platforms: ["PlayStation 5", "Xbox Series X|S", "Steam"],
    status: "好評発売中",
    year: "2022",
    color: "from-[#34F5C5] via-[#00D4FF] to-[#7B61FF]",
    image:
      "https://media.gettyimages.com/id/1442290022/photo/pedestrians-in-the-akihabara-district-of-tokyo-japan.jpg?s=612x612&w=0&k=20&c=m059Yz9ue6f_ypIGqAMBQ190AK-IIUsuBfWS5-V1uYw=",
    story:
      "人類が肉体を捨て機兵に魂を移植した時代。最古の機体〈零号〉に宿った少女の魂が、忘れられた戦争の記録を辿る。",
    world:
      "天空に浮かぶ機兵都市〈雲鋼〉と、その下に広がる廃墟の地表。重機械と侘び寂びが同居する独自の美学。",
    gameplay:
      "60fps高速近接アクション、機兵パーツのカスタマイズ、ボス毎に異なるギミック攻略。約40時間。",
    features: [
      "シームレスな空中戦闘",
      "200種以上のパーツ",
      "ニューゲーム＋",
      "オンライン協力ミッション",
    ],
    characters: [
      {
        name: "零号 (れいごう)",
        role: "プレイヤー機体",
        bio: "意識を持つ最古の機兵。少女の声で語りかける。",
      },
      { name: "玄武司令", role: "雲鋼防衛軍", bio: "古参の指揮官。零号の真実を知る数少ない人物。" },
    ],
  },
  {
    slug: "soukyu",
    title: "蒼穹ノ境界",
    reading: "Soukyuu no Kyoukai",
    tagline: "空の果てに、まだ誰も見ぬ国がある。",
    genre: "オープンワールド・ファンタジー",
    platforms: ["PlayStation 5", "Xbox Series X|S", "Steam"],
    status: "2026年 発売予定",
    year: "2026",
    color: "from-[#FF4FD8] via-[#7B61FF] to-[#34F5C5]",
    image:
      "https://media.gettyimages.com/id/2237711857/photo/chiba-city-chiba-japan-visitors-play-battlefield-6-ahead-of-its-release-at-the-tokyo-game.jpg?s=612x612&w=0&k=20&c=00MmHtuPy7OCmyJLX2PCE7XMGrz0fvLrTusfO4EPqgU=",
    story: "空中に浮かぶ無数の島々〈蒼穹群島〉を舞台に、若き測量士が世界の縁を目指す壮大な航海譚。",
    world: "雲海に浮かぶ巨大な浮島群、風に乗る飛行艇文化、忘れられた古代王朝の遺跡。",
    gameplay:
      "シームレスな空中探索、飛行艇の改造、村の発展、150を超えるサブクエスト。約100時間級ボリューム。",
    features: [
      "完全シームレス・オープンワールド",
      "天候・季節システム",
      "コミュニティ参加型イベント",
      "クロスプレイ対応",
    ],
    characters: [
      { name: "凪 (なぎ)", role: "若き測量士", bio: "地図にない島を探し続ける夢追い人。" },
      { name: "羽風", role: "相棒の飛竜", bio: "言葉を理解する希少種。" },
    ],
  },
  {
    slug: "shinen",
    title: "深淵コード",
    reading: "Shin'en Code",
    tagline: "ログインした瞬間、君は記録され始める。",
    genre: "サイバーパンク・スリラー",
    platforms: ["PlayStation 5", "Steam"],
    status: "早期アクセス中",
    year: "2025",
    color: "from-[#00D4FF] via-[#34F5C5] to-[#7B61FF]",
    image:
      "https://media.gettyimages.com/id/677263733/photo/man-using-virtual-reality-headset-with-black-light.jpg?s=612x612&w=0&k=20&c=6M8YXU_H3PdIVR4Np4pmfusM_ciC2LdDNPGB-nVVvZI=",
    story:
      "電脳網〈深淵〉に潜む匿名のハッカー集団〈鴉〉。一人の少女のIDが書き換えられた事件から、国家規模の陰謀が露わになる。",
    world: "監視社会化した近未来東京。物理層と電脳層を行き来する独自のレイヤー構造。",
    gameplay:
      "ハッキングミニゲーム、潜入アクション、評価システムによる多重エンディング。約25時間。",
    features: [
      "匿名性をテーマにした分岐",
      "リアルタイム評判システム",
      "プレイヤー間で結末が異なる",
      "シーズン制ストーリー追加",
    ],
    characters: [
      {
        name: "夜雀 (よすずめ)",
        role: "ハッカー",
        bio: "正体不明の凄腕。理想に殉じる覚悟を持つ。",
      },
      { name: "白鷺刑事", role: "電脳犯罪課", bio: "古いタイプの捜査官。新時代の犯罪に挑む。" },
    ],
  },
  // ----- 新しく追加したゲーム -----
  {
    slug: "genei-no-legacy",
    title: "幻影のレガシー",
    reading: "Genei no Regashī",
    tagline: "失われた記憶と、偽りの楽園。",
    genre: "ミステリーRPG",
    platforms: ["PlayStation 5", "Steam"],
    status: "2026年夏 発売予定",
    year: "2026",
    color: "from-[#FF4FD8] via-[#00D4FF] to-[#34F5C5]",
    image:
      "https://media.gettyimages.com/id/850543264/photo/chiba-japan-visitors-play-the-biohazard-revelations-2-video-game-on-nintendo-co-s-switch-game.jpg?s=612x612&w=0&k=20&c=WV5RShdce-7zLUK6Ywgz2scjG9emqn0nuv3EIYfMGuw=",
    story:
      "記憶を奪われた主人公は、謎の図書館で目を覚ます。そこには「幻影の書」と呼ばれる禁断の文献が眠り、読んだ者の記憶を書き換える力を持つという。",
    world:
      "現実と幻想が交錯する都市〈エクリプス〉。石畳の路地裏にはネオンが輝き、空には常に満月が浮かぶ。",
    gameplay:
      "記憶をキーワードに謎を解く「メモリクラフト」システム。選択肢によって物語が大きく分岐する、約20時間の探索型アドベンチャー。",
    features: ["記憶パズル", "マルチエンディング", "フルボイス", "印象的なサウンドトラック"],
    characters: [
      {
        name: "ユウ",
        role: "主人公",
        bio: "記憶を失った青年。図書館の司書に導かれ、自分の過去を探る。",
      },
      {
        name: "アリス",
        role: "謎の司書",
        bio: "幻影の書を守る女性。どこか悲しげな微笑みをたたえる。",
      },
    ],
  },
];

export const NEWS = [
  {
    date: "2026.05.28",
    category: "ゲーム発表",
    title: "新作『蒼穹ノ境界』ティザートレーラー公開のお知らせ",
    summary: "東京ゲームショウ2026に向けた最新ティザー映像を公式チャンネルで公開しました。",
  },
  {
    date: "2026.05.14",
    category: "アップデート",
    title: "『零界機兵』Ver.2.4 大型アップデート配信開始",
    summary: "新ボス〈雷迅〉、新パーツ24種、バランス調整を含む無料アップデートを実施。",
  },
  {
    date: "2026.05.02",
    category: "受賞情報",
    title: "『星影クロニクル』Japan Game Awards 2026 ナラティブ部門 最優秀賞 受賞",
    summary: "シナリオと演出が高く評価され、最優秀賞を受賞いたしました。",
  },
  {
    date: "2026.04.20",
    category: "コミュニティ",
    title: "公式ファンアート企画「光の記憶」開催決定",
    summary: "テーマに沿った作品を募集します。優秀作品は公式画集に掲載予定。",
  },
  {
    date: "2026.04.09",
    category: "採用情報",
    title: "2026年度 新卒採用エントリー受付開始",
    summary: "ゲームプログラマー、アーティスト、シナリオライターを若干名募集します。",
  },
  {
    date: "2026.03.30",
    category: "パートナーシップ",
    title: "イラストレーター 月詠 朔 氏とのコラボレーション発表",
    summary: "新作のキャラクターデザインに参加していただきます。",
  },
  {
    date: "2026.03.15",
    category: "イベント",
    title: "BitSummit Drift 2026 出展のお知らせ",
    summary: "京都で開催されるインディーゲームイベントに大型ブースを構えます。",
  },
  {
    date: "2026.03.01",
    category: "アップデート",
    title: "『深淵コード』シーズン2 シナリオ追加",
    summary: "新章「沈黙の塔」を追加。プレイ時間 約8時間相当。",
  },
  {
    date: "2026.02.18",
    category: "スタジオ",
    title: "京都サテライトスタジオ開設のお知らせ",
    summary: "新スタジオでは主にナラティブ開発を行います。",
  },
  {
    date: "2026.02.05",
    category: "コミュニティ",
    title: "公式Discordサーバー 会員数10万人突破",
    summary: "ご支援いただいているプレイヤーの皆様に心より御礼申し上げます。",
  },
  {
    date: "2026.01.22",
    category: "受賞情報",
    title: "『断層の記憶』Tokyo Game Show Future Division ノミネート",
    summary: "発売前作品としては異例の評価を受けました。",
  },
  {
    date: "2026.01.10",
    category: "ゲーム発表",
    title: "新規IPプロジェクト「Project: Aoi」始動",
    summary: "詳細は2026年夏に発表予定。",
  },
  {
    date: "2025.12.20",
    category: "スタジオ",
    title: "年末年始休業のお知らせ",
    summary: "12月29日より1月4日まで休業させていただきます。",
  },
  {
    date: "2025.12.05",
    category: "アップデート",
    title: "『星影クロニクル』追加DLC「黎明の章」配信開始",
    summary: "新たな結末と20時間の追加シナリオ。",
  },
  {
    date: "2025.11.18",
    category: "コミュニティ",
    title: "プレイヤー投票による次回作テーマ募集",
    summary: "公式サイトより投票フォームを公開しました。",
  },
  {
    date: "2025.11.02",
    category: "イベント",
    title: "公式オーケストラコンサート東京公演完売御礼",
    summary: "全国ツアーの追加公演を検討しております。",
  },
  {
    date: "2025.10.20",
    category: "採用情報",
    title: "中途採用 通年エントリー再開",
    summary: "経験豊富なクリエイターのご応募をお待ちしております。",
  },
  {
    date: "2025.10.04",
    category: "ゲーム発表",
    title: "新作『深淵コード』早期アクセス配信開始",
    summary: "Steamにて早期アクセス版を配信開始しました。",
  },
  {
    date: "2025.09.15",
    category: "パートナーシップ",
    title: "音楽家 久遠寺アズミ氏が主題歌を担当",
    summary: "新作の主題歌制作にご参加いただきます。",
  },
  {
    date: "2025.09.01",
    category: "受賞情報",
    title: "BitSummit 2025 Audio Excellence Award 受賞",
    summary: "『零界機兵』のサウンドデザインが評価されました。",
  },
];

export const TEAM = [
  {
    name: "葛城 凛",
    role: "クリエイティブディレクター",
    bio: "格闘ゲーム業界から転身。物語に宿る感情の温度を信条とする。代表作『星影クロニクル』『蒼穹ノ境界』。",
    focus: "全作品の方向性／物語監修",
  },
  {
    name: "九条 蓮",
    role: "アートディレクター",
    bio: "日本画と3DCGの融合を追求。墨と粒子を同じレイヤーで語る独自のビジュアル言語を確立。",
    focus: "コンセプトアート／世界観設計",
  },
  {
    name: "瀬戸 蛍",
    role: "リードシナリオライター",
    bio: "演劇・小説の出身。長編RPGから短編アドベンチャーまで多彩なナラティブを手掛ける。",
    focus: "脚本／キャラクター造形",
  },
  {
    name: "高槻 怜司",
    role: "テクニカルディレクター",
    bio: "自社製エンジン〈Genkai-Forge〉の設計者。レンダリングとAIシステムを統括。",
    focus: "技術基盤／パフォーマンス",
  },
  {
    name: "東雲 真琴",
    role: "コミュニティディレクター",
    bio: "プレイヤーとスタジオを繋ぐ橋渡し役。イベント設計と公式配信を主導。",
    focus: "コミュニティ運営／イベント",
  },
];

export const AWARDS = [
  { year: "2026", title: "Japan Game Awards 最優秀ナラティブ賞", work: "星影クロニクル" },
  { year: "2025", title: "BitSummit Audio Excellence Award", work: "零界機兵" },
  { year: "2024", title: "PlayStation Partner Awards Grand Prize", work: "星影クロニクル" },
  { year: "2023", title: "Famitsu Awards 優秀賞", work: "零界機兵" },
  { year: "2020", title: "CEDEC AWARDS ビジュアルアーツ部門 最優秀賞", work: "蒼穹プロトタイプ" },
];

export const TESTIMONIALS = [
  {
    name: "T. ハルナ",
    role: "プレイヤー",
    quote: "夜明けまで一気にプレイした。物語が終わっても、しばらく現実に戻れなかった。",
  },
  {
    name: "ゲーム批評誌《白虎》",
    role: "メディア",
    quote: "近年稀に見る、芸術性と娯楽性の両立。日本産RPGの新たな指標。",
  },
  { name: "K. ユウキ", role: "ストリーマー", quote: "視聴者と一緒に泣いた配信は初めてでした。" },
];

export const POSITIONS = [
  {
    title: "ゲームプログラマー",
    type: "正社員 / 東京",
    duties: ["自社エンジン〈Genkai-Forge〉の機能拡張", "ゲームプレイ実装", "パフォーマンス最適化"],
    requirements: ["C++ または Rust 実務3年以上", "コンソール開発経験"],
    nice: ["レンダリングパイプラインの知見", "OSS活動経験"],
  },
  {
    title: "シナリオライター",
    type: "正社員 / 東京・京都",
    duties: ["長編RPGの脚本執筆", "キャラクター設計", "ローカライズ監修"],
    requirements: ["商業作品の執筆実績", "ゲームシナリオ経験"],
    nice: ["小説／戯曲の発表経験", "英語での会話可"],
  },
  {
    title: "3Dアーティスト",
    type: "正社員 / 東京",
    duties: ["キャラクター・背景モデリング", "テクスチャ制作", "ライティング設計"],
    requirements: ["Maya / Blender 実務3年以上", "コンソール作品参加実績"],
    nice: ["ZBrush熟練者", "アニメ調表現の経験"],
  },
  {
    title: "UIデザイナー",
    type: "正社員 / 東京",
    duties: ["ゲーム内UI/UX設計", "プロトタイピング", "アクセシビリティ対応"],
    requirements: ["Figma 実務経験", "ゲームUI制作経験"],
    nice: ["モーション設計の知見", "多言語UI設計経験"],
  },
  {
    title: "サウンドデザイナー",
    type: "正社員 / 東京",
    duties: ["効果音制作", "インタラクティブ音響設計", "音声収録ディレクション"],
    requirements: ["Wwise または FMOD 実務経験", "商業作品参加実績"],
    nice: ["フィールドレコーディング経験", "楽曲制作スキル"],
  },
  {
    title: "QAエンジニア",
    type: "正社員 / 東京",
    duties: ["自動テスト設計", "リリース前検証", "バグトラッキング運用"],
    requirements: ["Python / TypeScript 実務経験", "ゲームQA経験"],
    nice: ["CI/CD 構築経験", "海外QAチームとの協業経験"],
  },
];

export const TIMELINE = [
  {
    year: "2014",
    title: "渋谷アトリエ創業",
    desc: "葛城凛、九条蓮ら5名で設立。最初の試作『蒼穹プロトタイプ』を着手。",
  },
  {
    year: "2016",
    title: "初タイトル『黎明ノ刻』発売",
    desc: "PC向けナラティブADV。国内インディー賞 銀賞を受賞。",
  },
  {
    year: "2018",
    title: "自社エンジン〈Genkai-Forge〉発表",
    desc: "CEDEC基調講演で技術論文を公開。社員数 35名に拡大。",
  },
  {
    year: "2020",
    title: "『零界機兵』電撃発表",
    desc: "PS5ローンチ時期に合わせた発表トレーラーが全世界視聴1,200万回突破。",
  },
  {
    year: "2022",
    title: "『零界機兵』全世界同時発売",
    desc: "発売8週で250万本セールス。Famitsu誌で殿堂入りプラチナ。",
  },
  {
    year: "2023",
    title: "京都サテライト開設",
    desc: "ナラティブ部門と古典文化リサーチ拠点を烏丸御池に開所。",
  },
  {
    year: "2024",
    title: "『星影クロニクル』発売",
    desc: "PlayStation Partner Awards Grand Prize 受賞。社員180名体制へ。",
  },
  {
    year: "2025",
    title: "『深淵コード』早期アクセス開始",
    desc: "プレイヤー参加型のシーズン制ナラティブ運営を開始。",
  },
  {
    year: "2026",
    title: "二作品同時開発体制へ",
    desc: "『断層の記憶』『蒼穹ノ境界』の並行開発を発表。",
  },
];

export const ROADMAP = [
  {
    quarter: "2026 Q2",
    phase: "発表",
    item: "『蒼穹ノ境界』ゲームプレイトレーラー初公開",
    tag: "MARKETING",
  },
  {
    quarter: "2026 Q3",
    phase: "βテスト",
    item: "『断層の記憶』クローズドベータ募集（先着3万名）",
    tag: "QA",
  },
  {
    quarter: "2026 Q4",
    phase: "発売",
    item: "『断層の記憶』全世界同時ローンチ（11作目）",
    tag: "LAUNCH",
  },
  {
    quarter: "2027 Q1",
    phase: "拡張",
    item: "『星影クロニクル』追加章「終曲の星」配信",
    tag: "DLC",
  },
  {
    quarter: "2027 Q2",
    phase: "発表",
    item: "新規IP「Project: Aoi」コンセプト公開",
    tag: "REVEAL",
  },
  { quarter: "2027 Q4", phase: "発売", item: "『蒼穹ノ境界』全世界同時ローンチ", tag: "LAUNCH" },
];

export const PRESS = [
  { outlet: "Famitsu", quote: "日本産RPGの新たな指標を打ち立てた。", score: "39/40" },
  {
    outlet: "4Gamer",
    quote: "緻密な世界観と硬派なゲームデザインが共存する稀有な作品。",
    score: "★★★★★",
  },
  { outlet: "Dengeki Online", quote: "プレイ後の余韻が、何日も心に残る。", score: "94/100" },
  {
    outlet: "IGN Japan",
    quote: "アートとシステムが完全に一致した、現代日本の代表作。",
    score: "9.5/10",
  },
  {
    outlet: "Game*Spark",
    quote: "選択の重みを、ここまで誠実に描いた作品は稀。",
    score: "Editor's Pick",
  },
  {
    outlet: "電ファミニコゲーマー",
    quote: "物語の温度を知るスタジオが、また一歩を進めた。",
    score: "特集掲載",
  },
];

export const SOUNDTRACKS = [
  {
    title: "星影クロニクル オリジナルサウンドトラック",
    composer: "蒼山 朔 / 久遠寺 アズミ",
    tracks: 64,
    length: "3時間42分",
    year: "2024",
  },
  {
    title: "零界機兵 OST 完全版",
    composer: "蒼山 朔",
    tracks: 48,
    length: "2時間51分",
    year: "2022",
  },
  {
    title: "断層の記憶 ピアノ録音集",
    composer: "白井 詩織",
    tracks: 18,
    length: "1時間07分",
    year: "2025",
  },
  {
    title: "蒼穹ノ境界 プレリュード EP",
    composer: "蒼山 朔",
    tracks: 6,
    length: "28分",
    year: "2026",
  },
];

export const EVENTS = [
  {
    date: "2026.06.20",
    name: "BitSummit Drift 2026",
    city: "京都",
    booth: "S-12",
    note: "新作試遊・開発者トーク",
  },
  {
    date: "2026.09.24",
    name: "東京ゲームショウ 2026",
    city: "幕張",
    booth: "Hall 8 W-04",
    note: "『蒼穹ノ境界』初試遊出展",
  },
  {
    date: "2026.10.11",
    name: "公式オーケストラ秋公演",
    city: "東京・サントリーホール",
    booth: "—",
    note: "蒼山朔指揮／70名編成",
  },
  {
    date: "2026.11.02",
    name: "Genkai Creators Talk Vol.04",
    city: "京都・烏丸",
    booth: "—",
    note: "美術部門公開セッション",
  },
];

export const PARTNERS = [
  "PlayStation Studios",
  "Xbox Game Studios",
  "Steam",
  "Nintendo",
  "Epic Games",
  "Square Enix Music",
  "Bandai Namco Live",
  "Wwise",
  "Unreal Engine",
  "Cygames Pictures",
  "ProductionI.G",
  "AnimeJapan",
];

export const OFFICES = [
  {
    city: "東京 本社",
    address: "〒150-0002 東京都渋谷区渋谷3-12-18 幻界タワー 11–14F",
    team: "全部門（開発・運営・ビジネス）",
    hours: "平日 10:00 – 19:00",
  },
  {
    city: "京都 サテライト",
    address: "〒604-8161 京都市中京区烏丸通六角下ル七観音町 632",
    team: "ナラティブ・古典文化リサーチ",
    hours: "平日 10:00 – 18:30",
  },
  {
    city: "福岡 ラボ",
    address: "〒810-0001 福岡市中央区天神2-3-10 SkyLab 6F",
    team: "QA・ローカライズ",
    hours: "平日 10:00 – 19:00",
  },
];

export const FAQ = [
  {
    q: "ゲームの言語対応について教えてください。",
    a: "原則として12言語（日本語・英語・繁体中国語・簡体中国語・韓国語・フランス語・ドイツ語・スペイン語・伊語・ポーランド語・ブラジルポルトガル語・露語）に対応します。フルボイスは作品により対応範囲が異なります。",
  },
  {
    q: "中途採用は通年で行っていますか？",
    a: "はい。経験者採用は通年実施しております。採用ページからエントリー、または所属プロジェクトを指定してのご応募が可能です。",
  },
  {
    q: "開発タイトルへのフィードバックは反映されますか？",
    a: "プレイヤーフィードバックは公式Discord・X・サポート窓口で日々確認し、開発チームと共有しています。早期アクセス作品では月次パッチに反映する例も多くあります。",
  },
  {
    q: "ファンアート・二次創作のガイドラインはありますか？",
    a: "非営利かつ公序良俗に反しない範囲での創作を歓迎しています。詳しくは「コミュニティ」ページのガイドラインをご確認ください。",
  },
  {
    q: "コンソール体験版の配信予定は？",
    a: "発売前タイトルは原則として体験版を配信します。配信時期は公式ニュースおよびニュースレターでご案内します。",
  },
  {
    q: "サウンドトラックは購入できますか？",
    a: "主要ストリーミングサービス、ならびにバンドル版CD/LPを公式ストアで販売しております。",
  },
];

export const PRINCIPLES = [
  { num: "00", title: "感情の温度", desc: "技術ではなく、誰かの心に届く温度から始める。" },
  { num: "01", title: "境界の越境", desc: "ジャンル・国・媒体の境界を、物語のために越えていく。" },
  {
    num: "02",
    title: "工芸としての開発",
    desc: "ゲームは量産品ではなく、手で磨き上げる工芸である。",
  },
  {
    num: "03",
    title: "プレイヤーは共著者",
    desc: "私たちは物語を始める。終わらせるのはプレイヤー。",
  },
];

export const NUMBERS = [
  { n: "800万", l: "全世界販売本数", note: "2014–2026累計" },
  { n: "180", l: "クリエイター", note: "東京 / 京都 / 福岡" },
  { n: "24", l: "国際受賞歴", note: "国内外 アワード" },
  { n: "35", l: "対応 国・地域", note: "ローカル販売拠点" },
  { n: "120K+", l: "Discord 会員数", note: "公式コミュニティ" },
  { n: "12", l: "ローカライズ言語", note: "テキスト基準" },
];

export type Region = {
  id: string;
  name: string;
  reading: string;
  climate: string;
  population: string;
  capital: string;
  faction: string;
  lore: string;
  landmarks: string[];
  image: string;
  color: string;
};

export const WORLD_REGIONS: Region[] = [
  {
    id: "amatsu",
    name: "天津環礁",
    reading: "Amatsu Atoll",
    climate: "温暖湿潤・常夜霧",
    population: "約 240 万人",
    capital: "白霧都 シラギリ",
    faction: "霧灯評議会",
    lore: "千年前に消失した恒星〈アマツ〉の名を継ぐ、宙に浮かぶ環状の群島。常に薄い霧に包まれ、街灯の光が霧の中で滲み、夜と昼の境界を曖昧にする。住民は「光は記憶を運ぶ」と信じ、毎夜灯篭を空へ流す習わしを今も守っている。",
    landmarks: ["旧アマツ天文台跡", "霧灯橋", "記憶結晶採掘場 第七坑"],
    image: "https://images.unsplash.com/photo-1531315396756-905d68d21b56?w=1400&q=80",
    color: "from-[#00D4FF] via-[#3aa8ff] to-[#7B61FF]",
  },
  {
    id: "kasou",
    name: "下層 K-9",
    reading: "Kasou Block K-9",
    climate: "人工照明・降酸性雨",
    population: "推定 80 万人（非公式）",
    capital: "なし（自治区）",
    faction: "黒蝶シンジケート",
    lore: "超高層都市〈新東京帝都〉の地表近く、太陽光の届かない最下層。違法義体の改造工房と海賊サーバーが軒を連ね、ネオン看板が雨に滲む。ここでは法より義理が、貨幣より秘密が流通する。",
    landmarks: ["闇市 第八路地", "電脳神社", "義体解体場 〈紅〉"],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1400&q=80",
    color: "from-[#FF4FD8] via-[#c44569] to-[#7B61FF]",
  },
  {
    id: "sokyu",
    name: "蒼穹高原",
    reading: "Soukyuu Highlands",
    climate: "高地寒冷・強風",
    population: "約 12 万人",
    capital: "風読みの集落 ナギ",
    faction: "白翼の守人",
    lore: "雲海の上、年中強風が吹き抜ける高原地帯。竜と人が同じ風を読み、同じ星を仰いで生きる。集落同士は地上の道ではなく、竜の翼でのみ結ばれる。",
    landmarks: ["竜舎ナギ", "風読みの鐘塔", "断崖の祭壇"],
    image:
      "https://plus.unsplash.com/premium_photo-1683141331949-64810cfc4ca3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D", // 日本の高山・雲海の自然風景
    color: "from-[#34F5C5] via-[#00D4FF] to-[#7B61FF]",
  },
  {
    id: "shin-en",
    name: "深淵区画",
    reading: "Shin'en Sector",
    climate: "深層海底・無光",
    population: "不明",
    capital: "封鎖済",
    faction: "白衣の観測者",
    lore: "海溝の底に沈んだ旧研究施設。20年前のある実験以降、外部との通信は完全に途絶している。送り込まれた調査隊は誰一人帰還していない。最新の音響観測は、底から人の歌声らしきものを捉えたという。",
    landmarks: ["第三観測ドーム", "封鎖隔壁 No.404", "歌の聞こえる回廊"],
    image:
      "https://images.unsplash.com/photo-1665041982909-8a86864a1e49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D", // 深海・水中洞窟の神秘的な自然
    color: "from-[#0a0a1a] via-[#1e1e5a] to-[#4f46e5]",
  },
];
