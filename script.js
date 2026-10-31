// 消費者庁の中間報告に掲載された9項目を基礎にした試作セルフチェック。
// 配点は公式の採点基準ではなく、ゲーム用の暫定方式です。
// Q2は「詐欺を避ける行動」を尋ねるため、他項目と点数の方向を反転します。

const answerOptions = [
  { label: "ほとんどあてはまる", value: 4 },
  { label: "だいたいあてはまる", value: 3 },
  { label: "少しあてはまる", value: 2 },
  { label: "あてはまらない", value: 1 }
];

const questions = [
  {
    text: "自分は、詐欺にあわない自信がある",
    reverse: false,
    tip: "自信があっても、相手の説明だけで判断しないことが大切です。いったん連絡を切り、公式サイトなど自分で調べた連絡先から確認しましょう。"
  },
  {
    text: "知らない人が訪ねてきたら、彼らの話を聞かないようにしている",
    reverse: true,
    tip: "訪問者が名乗った組織をすぐに信用せず、身分証だけで判断しないようにしましょう。必要ならドアを開けず、公式窓口へ自分で確認してください。"
  },
  {
    text: "不満があっても、相手に押し切られてしまう",
    reverse: false,
    tip: "その場で返事をする必要はありません。「確認してから返答します」と伝え、いったん会話を終えて信頼できる人や公的窓口に相談しましょう。"
  },
  {
    text: "電話がなったら、すぐに受話器を取る",
    reverse: false,
    tip: "電話に出ること自体で詐欺に遭うと決まるわけではありません。知らない番号や不審な内容なら、急いで答えず、個人情報やお金の話はその場で進めないようにしましょう。"
  },
  {
    text: "うまい話に興味がある",
    reverse: false,
    tip: "「必ず儲かる」「簡単に稼げる」などの話は、相手の説明だけで信じず、契約や送金をする前に条件や事業者情報を独立して確認しましょう。"
  },
  {
    text: "相手の話を怪しいと思っても、良い方向に考える",
    reverse: false,
    tip: "少しでも不審に感じたら、その違和感を無視しないでください。相手の指定した番号やリンクではなく、公式の連絡先から確かめましょう。"
  },
  {
    text: "知らない人に強い口調で言われると、おびえてしまう",
    reverse: false,
    tip: "警察や役所を名乗る相手でも、強い口調で急がせる要求に従う必要はありません。いったん通話を終え、自分で調べた公式窓口に確認してください。"
  },
  {
    text: "自分だけ褒められたり、特別な待遇を受けるとうれしくなる",
    reverse: false,
    tip: "「あなただけ」「特別に選ばれた」などと言われても、すぐに個人情報やお金を渡さず、条件を第三者と一緒に確認しましょう。"
  },
  {
    text: "お金に関する相談をすることは、家族や友人の信用を失いそうで不安である",
    reverse: false,
    tip: "お金の不安や不審な連絡は、一人で抱え込まなくて大丈夫です。家族や友人、公的な相談窓口など、話しやすい相手に早めに相談しましょう。"
  }
];

let currentQuestion = 0;
let answers = [];
let totalScore = 0;

const card = document.getElementById("card");
const progressArea = document.getElementById("progressArea");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");

document.getElementById("startBtn").addEventListener("click", startGame);

function startGame() {
  currentQuestion = 0;
  answers = [];
  totalScore = 0;
  progressArea.classList.remove("hidden");
  showQuestion();
}

function animateCard() {
  card.classList.remove("fade");
  void card.offsetWidth;
  card.classList.add("fade");
}

function showQuestion() {
  const q = questions[currentQuestion];
  progressText.textContent = `${currentQuestion + 1} / ${questions.length}`;
  progressFill.style.width = `${(currentQuestion / questions.length) * 100}%`;

  card.innerHTML = `
    <div class="question-number">QUESTION ${currentQuestion + 1} / ${questions.length}</div>
    <h2 class="question-text"></h2>
    <p class="scale-hint">自分にどのくらいあてはまるか選んでね</p>
    <div class="answer-list" id="answerList"></div>
  `;
  card.querySelector(".question-text").textContent = q.text;

  const list = document.getElementById("answerList");
  answerOptions.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-btn";
    button.textContent = option.label;
    button.addEventListener("click", () => answerQuestion(option));
    list.appendChild(button);
  });
  animateCard();
}

function answerQuestion(option) {
  const q = questions[currentQuestion];
  const points = q.reverse ? 5 - option.value : option.value;
  answers.push({
    question: q.text,
    label: option.label,
    points,
    tip: q.tip,
    reverse: q.reverse
  });
  totalScore += points;
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  progressText.textContent = `${questions.length} / ${questions.length}`;
  progressFill.style.width = "100%";

  const attention = [...answers]
    .filter(a => a.points >= 3)
    .sort((a, b) => b.points - a.points);

  const attentionHtml = attention.length
    ? attention.map(a => `
      <article class="tip-item">
        <div class="tip-question">${escapeHtml(a.question)}</div>
        <div class="tip-score">今回の回答：${escapeHtml(a.label)}</div>
        <p>${escapeHtml(a.tip)}</p>
      </article>
    `).join("")
    : `<p class="no-attention">今回の回答では、点数上の注意ポイントは多くありませんでした。それでも、不審な連絡は必ず別の方法で確認しましょう。</p>`;

  card.innerHTML = `
    <div class="result-kicker">YOUR CHECK RESULT</div>
    <h1 class="result-title">セルフチェック結果</h1>
    <div class="score-number">${totalScore}<span> / 36 点</span></div>
    <p class="score-caption">詐欺対策セルフチェック得点（試作）</p>
    <p class="result-message">この点数は、9項目への回答傾向を振り返るための目安です。被害に遭う確率や、あなた個人の危険度を示すものではありません。</p>
    <h2 class="section-title">見直しておきたいポイント</h2>
    ${attentionHtml}
    <div class="important-note">
      <strong>覚えておこう</strong>
      <p>急かされても、その場で決めない。連絡をいったん止め、公式窓口など自分で確認した連絡先から確かめ、必要なら誰かに相談しよう。</p>
    </div>
    <p class="method-note">配点はゲーム用の暫定方式です。消費者庁が公式に定めた採点基準ではなく、合計点と被害発生確率の関係も検証されていません。</p>
    <div class="result-buttons">
      <button class="primary-btn" id="retryBtn" type="button">🔄 もう一度診断する</button>
      <a class="secondary-btn" href="https://www.police.pref.osaka.lg.jp/seikatsu/tokusyusagi/8083.html" target="_blank" rel="noopener noreferrer">🚨 詐欺について学ぶ</a>
    </div>
  `;
  document.getElementById("retryBtn").addEventListener("click", startGame);
  animateCard();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}
