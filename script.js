// =========================================
// Python Quiz (From Uploaded File)
// 20 Questions - Auto Graded
// =========================================

const questions = [
  {
    question: "1) ما المكون الذي يعتبر قلب تنفيذ الأوامر؟",
    answers: ["RAM", "CPU", "الذاكرة الثانوية", "أجهزة الإدخال"],
    correct: 1,
    explanation: "وحدة المعالجة المركزية CPU هي المسؤولة عن تنفيذ الأوامر."
  },
  {
    question: "2) ما رمز كتابة التعليقات في بايثون؟",
    answers: ["//", "/*", "#", "@"],
    correct: 2,
    explanation: "رمز التعليق في بايثون هو #."
  },
  {
    question: "3) الفرق بين المفسر والمترجم:",
    answers: [
      "المفسر يترجم كاملاً",
      "المفسر ينفذ سطرًا سطرًا",
      "لا يوجد فرق",
      "المترجم لا يحول للآلة"
    ],
    correct: 1,
    explanation: "Interpreter ينفذ سطرًا سطرًا، Compiler يترجم البرنامج كاملًا."
  },
  {
    question: "4) لكتابة أكثر من أمر في نفس السطر نستخدم:",
    answers: [":", ";", ",", "!"],
    correct: 1,
    explanation: "الفاصلة المنقوطة ; تستخدم للفصل بين الأوامر."
  },
  {
    question: "5) مثال على خطأ دلالي:",
    answers: [
      "primt بدل print",
      "متغير غير معرف",
      "البرنامج يعمل لكن النتيجة غير صحيحة",
      "نسيان قوس"
    ],
    correct: 2,
    explanation: "الخطأ الدلالي يعني أن البرنامج يعمل لكن النتيجة غير مقصودة."
  },
  {
    question: "6) هل Note و note نفس المتغير في بايثون؟",
    answers: ["صح", "خطأ"],
    correct: 1,
    explanation: "بايثون تفرق بين الأحرف الكبيرة والصغيرة."
  },
  {
    question: "7) الدالة input() تعيد:",
    answers: ["Integer", "String", "Boolean", "لا شيء"],
    correct: 1,
    explanation: "input() تعيد نص String افتراضياً."
  },
  {
    question: "8) وحدة تنفيذ التعليمات هي:",
    answers: ["RAM", "CPU", "الشاشة", "لوحة المفاتيح"],
    correct: 1,
    explanation: "CPU هي المسؤولة عن التنفيذ."
  },
  {
    question: "9) من أجهزة الإدخال:",
    answers: ["الطابعة", "الشاشة", "لوحة المفاتيح", "السماعات"],
    correct: 2,
    explanation: "لوحة المفاتيح جهاز إدخال."
  },
  {
    question: "10) وظيفة print():",
    answers: [
      "قراءة إدخال",
      "حساب",
      "طباعة مخرجات",
      "تخزين بيانات"
    ],
    correct: 2,
    explanation: "print() تستخدم لطباعة المخرجات."
  },
  {
    question: "11) الدالة المستخدمة لقراءة الإدخال:",
    answers: ["print()", "read()", "input()", "write()"],
    correct: 2,
    explanation: "input() لقراءة الإدخال."
  },
  {
    question: "12) لغة الآلة تتكون من:",
    answers: ["حروف", "رموز", "0 و 1", "كلمات"],
    correct: 2,
    explanation: "لغة الآلة ثنائية."
  },
  {
    question: "13) الذاكرة الرئيسية RAM:",
    answers: [
      "دائمة",
      "مؤقتة",
      "دائمة ومؤقتة",
      "لا تخزن بيانات"
    ],
    correct: 1,
    explanation: "RAM تفقد محتواها عند انقطاع الكهرباء."
  },
  {
    question: "14) المقصود بالخوارزمية:",
    answers: [
      "جهاز",
      "لغة",
      "خطوات لحل مشكلة",
      "ذاكرة"
    ],
    correct: 2,
    explanation: "الخوارزمية سلسلة خطوات لحل مشكلة."
  },
  {
    question: "15) لغة عالية المستوى:",
    answers: [
      "لغة الآلة",
      "التجميع",
      "بايثون",
      "الثنائي"
    ],
    correct: 2,
    explanation: "بايثون لغة عالية المستوى."
  },
  {
    question: "16) المفسر يقوم بـ:",
    answers: [
      "ترجمة كاملة",
      "تنفيذ سطر بسطر",
      "تخزين البرنامج",
      "حذف الأخطاء"
    ],
    correct: 1,
    explanation: "Interpreter ينفذ مباشرة سطرًا بسطر."
  },
  {
    question: "17) من أنماط بناء البرامج:",
    answers: [
      "التسلسل",
      "الشرط",
      "التكرار",
      "جميع ما سبق"
    ],
    correct: 3,
    explanation: "الأنماط الأساسية الثلاثة."
  },
  {
    question: "18) استخدام متغير قبل تعريفه يؤدي إلى:",
    answers: ["NameError", "SyntaxError", "LogicalError", "TypeError"],
    correct: 0,
    explanation: "سيظهر NameError."
  },
  {
    question: "19) عند انقطاع الكهرباء RAM:",
    answers: ["تبقى", "تحذف", "تنتقل للقرص", "تتحول"],
    correct: 1,
    explanation: "RAM مؤقتة."
  },
  {
    question: "20) امتداد ملف بايثون هو:",
    answers: [".txt", ".doc", ".py", ".exe"],
    correct: 2,
    explanation: "ملفات بايثون تنتهي بـ .py"
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

  resultEl.innerHTML = `
    <div style="text-align:right;">
      <strong>الدرجة:</strong> ${score} / ${questions.length}
    </div>
    <div style="margin-top:6px;">اختر إجابة لعرض التصحيح.</div>
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
    if (idx === selectedIndex && idx !== correctIndex) btn.classList.add("wrong");
  });

  if (selectedIndex === correctIndex) score++;

  resultEl.innerHTML = `
    <div style="line-height:1.8;">
      <strong>الدرجة:</strong> ${score} / ${questions.length}<br>
      ${selectedIndex === correctIndex ? "إجابة صحيحة ✅" : "إجابة خاطئة ❌"}<br>
      <strong>الشرح:</strong> ${q.explanation}
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
    <h2>الدرجة النهائية</h2>
    <h1>${score} / ${questions.length}</h1>
    <h3>${percent}%</h3>
  `;
}

loadQuestion();    question: "5) مثال على خطأ دلالي:",
    answers: [
      "primt بدل print",
      "متغير غير معرف",
      "البرنامج يعمل لكن النتيجة غير صحيحة",
      "نسيان قوس"
    ],
    correct: 2,
    explanation: "الخطأ الدلالي يعني أن البرنامج يعمل لكن النتيجة غير مقصودة."
  },
  {
    question: "6) هل Note و note نفس المتغير في بايثون؟",
    answers: ["صح", "خطأ"],
    correct: 1,
    explanation: "بايثون تفرق بين الأحرف الكبيرة والصغيرة."
  },
  {
    question: "7) الدالة input() تعيد:",
    answers: ["Integer", "String", "Boolean", "لا شيء"],
    correct: 1,
    explanation: "input() تعيد نص String افتراضياً."
  },
  {
    question: "8) وحدة تنفيذ التعليمات هي:",
    answers: ["RAM", "CPU", "الشاشة", "لوحة المفاتيح"],
    correct: 1,
    explanation: "CPU هي المسؤولة عن التنفيذ."
  },
  {
    question: "9) من أجهزة الإدخال:",
    answers: ["الطابعة", "الشاشة", "لوحة المفاتيح", "السماعات"],
    correct: 2,
    explanation: "لوحة المفاتيح جهاز إدخال."
  },
  {
    question: "10) وظيفة print():",
    answers: [
      "قراءة إدخال",
      "حساب",
      "طباعة مخرجات",
      "تخزين بيانات"
    ],
    correct: 2,
    explanation: "print() تستخدم لطباعة المخرجات."
  },
  {
    question: "11) الدالة المستخدمة لقراءة الإدخال:",
    answers: ["print()", "read()", "input()", "write()"],
    correct: 2,
    explanation: "input() لقراءة الإدخال."
  },
  {
    question: "12) لغة الآلة تتكون من:",
    answers: ["حروف", "رموز", "0 و 1", "كلمات"],
    correct: 2,
    explanation: "لغة الآلة ثنائية."
  },
  {
    question: "13) الذاكرة الرئيسية RAM:",
    answers: [
      "دائمة",
      "مؤقتة",
      "دائمة ومؤقتة",
      "لا تخزن بيانات"
    ],
    correct: 1,
    explanation: "RAM تفقد محتواها عند انقطاع الكهرباء."
  },
  {
    question: "14) المقصود بالخوارزمية:",
    answers: [
      "جهاز",
      "لغة",
      "خطوات لحل مشكلة",
      "ذاكرة"
    ],
    correct: 2,
    explanation: "الخوارزمية سلسلة خطوات لحل مشكلة."
  },
  {
    question: "15) لغة عالية المستوى:",
    answers: [
      "لغة الآلة",
      "التجميع",
      "بايثون",
      "الثنائي"
    ],
    correct: 2,
    explanation: "بايثون لغة عالية المستوى."
  },
  {
    question: "16) المفسر يقوم بـ:",
    answers: [
      "ترجمة كاملة",
      "تنفيذ سطر بسطر",
      "تخزين البرنامج",
      "حذف الأخطاء"
    ],
    correct: 1,
    explanation: "Interpreter ينفذ مباشرة سطرًا بسطر."
  },
  {
    question: "17) من أنماط بناء البرامج:",
    answers: [
      "التسلسل",
      "الشرط",
      "التكرار",
      "جميع ما سبق"
    ],
    correct: 3,
    explanation: "الأنماط الأساسية الثلاثة."
  },
  {
    question: "18) استخدام متغير قبل تعريفه يؤدي إلى:",
    answers: ["NameError", "SyntaxError", "LogicalError", "TypeError"],
    correct: 0,
    explanation: "سيظهر NameError."
  },
  {
    question: "19) عند انقطاع الكهرباء RAM:",
    answers: ["تبقى", "تحذف", "تنتقل للقرص", "تتحول"],
    correct: 1,
    explanation: "RAM مؤقتة."
  },
  {
    question: "20) امتداد ملف بايثون هو:",
    answers: [".txt", ".doc", ".py", ".exe"],
    correct: 2,
    explanation: "ملفات بايثون تنتهي بـ .py"
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

  resultEl.innerHTML = `
    <div style="text-align:right;">
      <strong>الدرجة:</strong> ${score} / ${questions.length}
    </div>
    <div style="margin-top:6px;">اختر إجابة لعرض التصحيح.</div>
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
    if (idx === selectedIndex && idx !== correctIndex) btn.classList.add("wrong");
  });

  if (selectedIndex === correctIndex) score++;

  resultEl.innerHTML = `
    <div style="line-height:1.8;">
      <strong>الدرجة:</strong> ${score} / ${questions.length}<br>
      ${selectedIndex === correctIndex ? "إجابة صحيحة ✅" : "إجابة خاطئة ❌"}<br>
      <strong>الشرح:</strong> ${q.explanation}
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
    <h2>الدرجة النهائية</h2>
    <h1>${score} / ${questions.length}</h1>
    <h3>${percent}%</h3>
  `;
}

loadQuestion();    answers: [
      "المترجم يترجم البرنامج كاملاً ثم ينفذه",
      "المفسّر يترجم البرنامج كاملاً دفعة واحدة",
      "لا يوجد فرق بينهما",
      "المفسّر لا يحول إلى لغة الآلة"
    ],
    correct: 0,
    explanation: "Compiler يترجم البرنامج كاملاً، Interpreter ينفذ سطرًا سطرًا."
  },
  {
    question: "السؤال الخامس:\nأي من التالي يُعد من أنماط بناء البرامج الأساسية؟",
    answers: [
      "التسلسل",
      "الشرط",
      "التكرار",
      "جميع ما سبق"
    ],
    correct: 3,
    explanation: "أنماط بناء البرامج: التسلسل والشرط والتكرار."
  },
  {
    question: "السؤال السادس:\nأي من الأخطاء التالية يحدث عند كتابة print بهذه الطريقة: primt ؟",
    answers: [
      "NameError",
      "SyntaxError",
      "Logical Error",
      "TypeError"
    ],
    correct: 1,
    explanation: "كتابة primt بدل print يُعد خطأ نحوي SyntaxError."
  },
  {
    question: "السؤال السابع (صح أو خطأ):\nبايثون تميز بين الأحرف الكبيرة والصغيرة في أسماء المتغيرات.",
    answers: ["صح", "خطأ"],
    correct: 0,
    explanation: "Python حساسة لحالة الأحرف (Case-sensitive)."
  },
  {
    question: "السؤال الثامن:\nأي سطر صحيح لطباعة عبارة في بايثون؟",
    answers: [
      "echo(\"مرحبا\")",
      "print(\"مرحبا\")",
      "write(\"مرحبا\")",
      "output(\"مرحبا\")"
    ],
    correct: 1,
    explanation: "الدالة الصحيحة للطباعة في بايثون هي print()."
  },
  {
    question: "السؤال التاسع:\nأي سطر يُستخدم لقراءة إدخال المستخدم في بايثون؟",
    answers: [
      "read()",
      "input()",
      "scan()",
      "get()"
    ],
    correct: 1,
    explanation: "input() تُستخدم لقراءة إدخال المستخدم."
  },
  {
    question: "السؤال العاشر:\nمن أسباب انتشار لغة بايثون:",
    answers: [
      "صعوبة تعلمها",
      "قلة استخدامها",
      "بساطة قواعدها",
      "تعمل على نظام واحد فقط"
    ],
    correct: 2,
    explanation: "من أسباب انتشارها بساطة قواعدها وسهولة تعلمها."
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
