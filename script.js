const questions = [
  // ===== 勢いで判断するタイプ =====

  {
    text: "レストランでは最初に目に入ったメニューを選びがち？",
    riskYes: 8,
    riskNo: 0,
    typeYes: "impulse",
    typeNo: "careless"
  },
  {
    text: "買い物中に『残り1個』を見ると欲しくなる？",
    riskYes: 12,
    riskNo: 0,
    typeYes: "impulse",
    typeNo: "careless"
  },
  {
    text: "動画を最後まで見ずに次へ進むことが多い？",
    riskYes: 8,
    riskNo: 0,
    typeYes: "impulse",
    typeNo: "kind"
  },
  {
    text: "計画より直感を優先することが多い？",
    riskYes: 10,
    riskNo: 0,
    typeYes: "impulse",
    typeNo: "careless"
  },

  // ===== 優しすぎるタイプ =====

  {
    text: "道で困っている人を見ると声をかけたくなる？",
    riskYes: 10,
    riskNo: 0,
    typeYes: "kind",
    typeNo: "careless"
  },
  {
    text: "友達の頼みは断りづらい？",
    riskYes: 12,
    riskNo: 0,
    typeYes: "kind",
    typeNo: "impulse"
  },
  {
    text: "自分より相手を優先することが多い？",
    riskYes: 10,
    riskNo: 0,
    typeYes: "kind",
    typeNo: "greed"
  },
  {
    text: "相談されると最後まで聞いてしまう？",
    riskYes: 8,
    riskNo: 0,
    typeYes: "kind",
    typeNo: "careless"
  },

  // ===== うまい話に弱いタイプ =====

  {
    text: "宝くじで高額当選を想像することがある？",
    riskYes: 10,
    riskNo: 0,
    typeYes: "greed",
    typeNo: "impulse"
  },
  {
    text: "お得という言葉に弱い？",
    riskYes: 10,
    riskNo: 0,
    typeYes: "greed",
    typeNo: "careless"
  },
  {
    text: "無料プレゼントを見ると応募したくなる？",
    riskYes: 10,
    riskNo: 0,
    typeYes: "greed",
    typeNo: "kind"
  },
  {
    text: "少ない努力で大きな成果を期待する方だ？",
    riskYes: 15,
    riskNo: 0,
    typeYes: "greed",
    typeNo: "impulse"
  },

  // ===== 警戒心が薄いタイプ =====

  {
    text: "初対面の人ともすぐ仲良くなれる？",
    riskYes: 10,
    riskNo: 0,
    typeYes: "careless",
    typeNo: "kind"
  },
  {
    text: "利用規約を読まずに同意することが多い？",
    riskYes: 15,
    riskNo: 0,
    typeYes: "careless",
    typeNo: "impulse"
  },
  {
    text: "人を疑うのは良くないと思う？",
    riskYes: 12,
    riskNo: 0,
    typeYes: "careless",
    typeNo: "kind"
  },
  {
    text: "ネットの情報をすぐ信じる方だ？",
    riskYes: 15,
    riskNo: 0,
    typeYes: "careless",
    typeNo: "impulse"
  },

  // ===== 心理ゲーム風 =====

  {
    text: "無人島に持っていくなら食料よりスマホだ？",
    riskYes: 6,
    riskNo: 0,
    typeYes: "impulse",
    typeNo: "careless"
  },
  {
    text: "信号待ちで誰もいなければ渡りたくなる？",
    riskYes: 12,
    riskNo: 0,
    typeYes: "impulse",
    typeNo: "careless"
  },
  {
    text: "占いは結構当たると思う？",
    riskYes: 10,
    riskNo: 0,
    typeYes: "careless",
    typeNo: "impulse"
  },
  {
    text: "突然100万円もらえるなら理由は気にしない？",
    riskYes: 20,
    riskNo: 0,
    typeYes: "greed",
    typeNo: "careless"
  },

  // ===== 詐欺との関連が強い質問も少し残す =====

  {
    text: "人に頼まれると断れないことが多い？",
    riskYes: 15,
    riskNo: 0,
    typeYes: "kind",
    typeNo: "impulse"
  },
  {
    text: "急なセール情報に飛びつくことがある？",
    riskYes: 15,
    riskNo: 0,
    typeYes: "impulse",
    typeNo: "careless"
  },
  {
    text: "人の話を信じやすい方だと思う？",
    riskYes: 15,
    riskNo: 0,
    typeYes: "careless",
    typeNo: "kind"
  },
  {
    text: "秘密の話を聞くとワクワクする？",
    riskYes: 15,
    riskNo: 0,
    typeYes: "impulse",
    typeNo: "careless"
  }
];
