// =========================================
// Quiz (17 MCQ) - Programming Basics
// Instant correction + SCORE FIRST
// =========================================

const questions = [
  {
    question: "1) ما المقصود بلغات البرمجة؟",
    answers: [
      "لغة يفهمها الإنسان فقط",
      "لغة للتواصل بين المبرمج والحاسب",
      "لغة خاصة بالأجهزة فقط",
      "لغة لتخزين البيانات فقط"
    ],
    correct: 1,
    explanation: "لغات البرمجة وسيلة تواصل بين المبرمج والحاسب لكتابة الأوامر وتنفيذها."
  },
  {
    question: "2) ما هي اللغة التي يفهمها الحاسب مباشرة؟",
    answers: ["لغة التجميع", "لغة الآلة", "اللغة عالية المستوى", "لغة بايثون"],
    correct: 1,
    explanation: "الحاسب يفهم لغة الآلة مباشرة."
  },
  {
    question: "3) تتكون لغة الآلة من:",
    answers: ["حروف وأرقام", "رموز خاصة", "0 و 1", "أوامر إنجليزية"],
    correct: 2,
    explanation: "لغة الآلة ثنائية (0/1)."
  },
  {
    question: "4) أي من التالي يُعد من لغات البرمجة عالية المستوى؟",
    answers: ["Assembly", "Machine Language", "Python", "Binary"],
    correct: 2,
    explanation: "بايثون لغة عالية المستوى."
  },
  {
    question: "5) أي أداة تُستخدم لترجمة البرنامج كاملًا دفعة واحدة؟",
    answers: ["Interpreter", "Compiler", "Assembler", "Debugger"],
    correct: 1,
    explanation: "Compiler يترجم البرنامج كاملًا دفعة واحدة."
  },
  {
    question: "6) أي أداة تقوم بتنفيذ البرنامج سطرًا سطرًا؟",
    answers: ["Compiler", "Assembler", "Interpreter", "Linker"],
    correct: 2,
    explanation: "Interpreter ينفذ ويترجم سطرًا سطرًا."
  },
  {
    question: "7) لغة التجميع (Assembly) تتميز بأنها:",
    answers: ["قريبة من لغة الإنسان", "قريبة من لغة الآلة", "لا تحتاج مترجم", "لا تستخدم أوامر"],
    correct: 1,
    explanation: "Assembly أقرب للآلة من اللغات عالية المستوى."
  },
  {
    question: "8) من مكونات الحاسب الأساسية:",
    answers: ["المعالج فقط", "الذاكرة فقط", "الإدخال والمعالجة والإخراج", "البرامج فقط"],
    correct: 2,
    explanation: "من الوظائف الأساسية: إدخال ومعالجة وإخراج (ومعها غالبًا التخزين)."
  },
  {
    question: "9) أي مما يلي يُعد من وحدات الإدخال؟",
    answers: ["الشاشة", "الطابعة", "لوحة المفاتيح", "السماعات"],
    correct: 2,
    explanation: "لوحة المفاتيح جهاز إدخال."
  },
  {
    question: "10) وظيفة وحدة المعالجة المركزية (CPU) هي:",
    answers: ["إدخال البيانات", "تخزين البيانات", "تنفيذ الأوامر", "عرض النتائج"],
    correct: 2,
    explanation: "CPU ينفذ التعليمات والأوامر."
  },
  {
    question: "11) الذاكرة التي تفقد محتواها عند انقطاع الكهرباء هي:",
    answers: ["ROM", "RAM", "Hard Disk", "USB"],
    correct: 1,
    explanation: "RAM ذاكرة مؤقتة (Volatile) تفقد البيانات بانقطاع الكهرباء."
  },
  {
    question: "12) من مهام الحاسب:",
    answers: ["المعالجة فقط", "التخزين فقط", "الإدخال فقط", "الإدخال والمعالجة والتخزين"],
    correct: 3,
    explanation: "الحاسب يقوم بالإدخال والمعالجة والتخزين (وغالبًا الإخراج أيضًا)."
  },
  {
    question: "13) ما المقصود بالخوارزمية؟",
    answers: ["لغة برمجة", "جهاز حاسب", "سلسلة خطوات لحل مشكلة", "برنامج جاهز"],
    correct: 2,
    explanation: "الخوارزمية خطوات مرتبة لحل مشكلة."
  },
  {
    question: "14) أي من التالي يُعد من المكونات الأساسية للبرامج؟",
    answers: ["الشرط", "التكرار", "المدخلات والمخرجات", "جميع ما سبق"],
    correct: 3,
    explanation: "الشرط والتكرار والمدخلات/المخرجات كلها عناصر أساسية."
  },
  {
    question: "15) من أسباب اختيار لغة بايثون:",
    answers: ["صعوبة تعلمها", "قلة استخدامها", "بساطة قواعدها", "تعمل على نظام واحد"],
    correct: 2,
    explanation: "بايثون مشهورة ببساطة قواعدها وسهولة تعلمها."
  },
  {
    question: "16) تعمل لغة بايثون على أنظمة التشغيل:",
    answers: ["ويندوز فقط", "لينكس فقط", "ماك فقط", "جميع أنظمة التشغيل"],
    correct: 3,
    explanation: "بايثون تعمل على Windows وLinux وmacOS وغيرها."
  },
  {
    question: "17) من أشهر الشركات التي تستخدم بايثون:",
    answers: ["Google", "NASA", "Microsoft", "جميع ما سبق"],
    correct: 3,
    explanation: "عدة شركات/جهات كبيرة تستخدم بايثون، ومنها المذكور."
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  answered = false;
  nextBtn.disabled = true;
  answersEl.innerHTML = "";

  const q = questions[currentQuestion];
  questionEl.innerText = q.question;

  // قبل الإجابة: عرض الدرجة الحالية (اختياري)
  resultEl.innerHTML = `
    <div style="text-align:right;">
      <strong>الدرجة:</strong> ${score} / ${questions.length}
    </div>
    <div style="text-align:right; margin-top:6px;">
      اختر إجابة لعرض التصحيح.
    </div>
  `;

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.innerText = answer;
    btn.classList.add("answer-btn");
    btn.onclick = () => checkAnswer(index);
    answersEl.appendChild(btn);
  });
}

function checkAnswer(selectedIndex) {
  if (answered) return;
  answered = true;

  const q = questions[currentQuestion];
  const correctIndex = q.correct;

  const buttons = document.querySelectorAll(".answer-btn");
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === correctIndex) btn.classList.add("correct");
    if (idx === selectedIndex && selectedIndex !== correctIndex) btn.classList.add("wrong");
  });

  const isCorrect = selectedIndex === correctIndex;
  if (isCorrect) score++;

  // ✅ المطلوب: الدرجة أولًا عند التصحيح
  resultEl.innerHTML = `
    <div style="text-align:right; line-height:1.9;">
      <div style="font-size:18px; margin-bottom:8px;">
        <strong>الدرجة:</strong> ${score} / ${questions.length}
      </div>
      <div style="margin-bottom:6px;">
        ${isCorrect ? "إجابة صحيحة ✅" : "إجابة خاطئة ❌"}
      </div>
      <div><strong>الإجابة الصحيحة:</strong> ${q.answers[correctIndex]}</div>
      <div style="margin-top:6px;"><strong>الشرح:</strong> ${q.explanation}</div>
    </div>
  `;

  nextBtn.disabled = false;
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showFinalResult();
  }
};

function showFinalResult() {
  questionEl.innerText = "انتهى الاختبار 🎉";
  answersEl.innerHTML = "";
  nextBtn.style.display = "none";

  const percent = Math.round((score / questions.length) * 100);

  resultEl.innerHTML = `
    <div style="text-align:center; line-height:2;">
      <h2>الدرجة النهائية</h2>
      <h1>${score} / ${questions.length}</h1>
      <h3>${percent}%</h3>
      <button id="restartBtn"
        style="background:#16a34a; color:#fff; padding:10px 16px; border-radius:8px; border:none; cursor:pointer;">
        إعادة الاختبار
      </button>
    </div>
  `;

  document.getElementById("restartBtn").onclick = () => {
    currentQuestion = 0;
    score = 0;
    nextBtn.style.display = "inline-block";
    loadQuestion();
  };
}

loadQuestion();
