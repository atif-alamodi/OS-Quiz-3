// =========================================
// HARD OS QUIZ (Based ONLY on your 3 lectures)
// Features:
// - Instant correction (coloring) + explanation after answer
// - Final score + percent + level
// - Anonymous Tester ID (no name)
// Requirements in HTML: #question, #answers, #result, #nextBtn
// =========================================

// ---------- Anonymous tester id ----------
function getOrCreateTesterId() {
  const key = "os_lecture_quiz_tester_id";
  let id = localStorage.getItem(key);
  if (!id) {
    const rand = Math.random().toString(16).slice(2, 10).toUpperCase();
    id = `Tester-${rand}`;
    localStorage.setItem(key, id);
  }
  return id;
}
const testerId = getOrCreateTesterId();

// ---------- Questions (lecture-based, analytical) ----------
const questions = [
  {
    question:
      "س1) (سيناريو) أثناء تنفيذ عملية حدث: (System Call) ثم (Interrupt). ما الإجراء الأقرب للصواب وفق المحاضرة حول التبديل؟",
    answers: [
      "يحفظ النظام حالة العملية الحالية في PCB ثم يحمّل حالة عملية أخرى من PCB الخاص بها",
      "يحذف النظام PCB فورًا لتوفير الذاكرة",
      "يتم إيقاف كل العمليات ولا يتم حفظ أي سجلات",
      "يتم نقل العملية مباشرة إلى Heap"
    ],
    correct: 0,
    explanation:
      "وفق المحاضرة: عند Interrupt أو System Call يقوم النظام بحفظ حالة العملية في PCB ثم تحميل حالة عملية أخرى من PCB لإكمال التبديل."
  },
  {
    question:
      "س2) (تحليل) إذا لم يتم حفظ (Program Counter) داخل PCB، ما النتيجة الأكثر منطقية على استئناف التنفيذ؟",
    answers: [
      "ستستأنف العملية من حيث توقفت بدقة",
      "قد تعود العملية لبداية البرنامج دائمًا",
      "لن يضمن النظام العودة للتعليمة التالية الصحيحة بعد التبديل",
      "لن تؤثر لأن PC ليس جزءًا من الحالة"
    ],
    correct: 2,
    explanation:
      "المحاضرة تذكر أن الـ Program Counter جزء من الحالة/النشاط الحالي. بدونه يصبح الاستئناف من مكان التوقف غير مضمون."
  },
  {
    question:
      "س3) (سيناريو) عملية كانت Running ثم طلبت I/O. أين ينبغي أن تُوضع وفق قوائم الانتظار المذكورة؟",
    answers: [
      "Job Queue",
      "Ready Queue",
      "Device/Waiting Queue",
      "Heap"
    ],
    correct: 2,
    explanation:
      "عمليات I/O تُخزن في قوائم الأجهزة/الانتظار (Waiting/Device Queues) حتى انتهاء الإدخال/الإخراج."
  },
  {
    question:
      "س4) (تحليل) ما العبارة الأدق: لماذا يهدف Scheduler إلى إدارة القوائم؟",
    answers: [
      "لمنع تشغيل أكثر من عملية في النظام نهائيًا",
      "لزيادة استخدام CPU وتحقيق تبديل سريع بين العمليات عبر إدارة Ready/Waiting/Job",
      "لجعل كل العمليات تعمل بالتوازي داخل نفس العملية",
      "لإلغاء دور PCB"
    ],
    correct: 1,
    explanation:
      "حسب المحاضرة: هدف الجدولة هو زيادة استخدام CPU والتبديل السريع عبر إدارة قوائم الانتظار وتنقل العمليات بينها."
  },
  {
    question:
      "س5) (تحليل دقيق) أي عنصر في PCB مرتبط مباشرة بإعادة العملية من حيث توقفت؟",
    answers: [
      "اسم المستخدم فقط",
      "Counter Program + Registers Processor",
      "GUI Icons",
      "Dalvik VM"
    ],
    correct: 1,
    explanation:
      "المحاضرة تذكر أن PCB يحتوي على موقع التعليمة التالية (Program Counter) ومحتويات سجلات المعالج."
  },
  {
    question:
      "س6) (صح/خطأ) المحاضرة تعرف العملية بأنها: برنامج قيد التنفيذ، ويجب أن يتم التنفيذ بشكل متسلسل لعملية واحدة.",
    answers: ["صح", "خطأ"],
    correct: 0,
    explanation:
      "صحيح: ورد أن العملية برنامج قيد التنفيذ ويُنفّذ بطريقة متسلسلة (لا تُنفذ تعليمات العملية الواحدة بالتوازي)."
  },
  {
    question:
      "س7) (سيناريو) عند وقوع Interrupt، ما الآلية التي تُستخدم لتوجيه التحكم لروتين الخدمة المناسب؟",
    answers: [
      "Polling دائمًا بدون أي جدول",
      "Vector Interrupt / Interrupt Vector Table الذي يحتوي عناوين روتينات الخدمة",
      "Heap allocation",
      "Stack overflow"
    ],
    correct: 1,
    explanation:
      "المحاضرة تتحدث عن vector interrupt: جدول يحتوي عناوين ISR لتحديد الروتين المناسب بسرعة."
  },
  {
    question:
      "س8) (تحليل) لماذا يعد حفظ حالة CPU (Registers + PC) خطوة أساسية عند معالجة المقاطعة؟",
    answers: [
      "لأن المعالج لا يستطيع تنفيذ ISR بدون طابعة",
      "لأن النظام يحتاج العودة بعد ISR لاستكمال التنفيذ من نقطة صحيحة",
      "لأنها تزيد من عدد العمليات في Job Queue",
      "لأنها تمنع استخدام CLI"
    ],
    correct: 1,
    explanation:
      "المحاضرة تذكر أن النظام يحفظ حالة CPU عبر registers و program counter لضمان العودة لإكمال التنفيذ بعد ISR."
  },
  {
    question:
      "س9) (مقارنة) ما الفرق التحليلي بين Ready Queue و Job Queue وفق التعريف؟",
    answers: [
      "Job Queue: عمليات موجودة في الذاكرة الرئيسية جاهزة للتنفيذ، Ready: كل العمليات في النظام",
      "Ready Queue: عمليات في الذاكرة الرئيسية جاهزة وتنتظر التنفيذ، Job Queue: جميع العمليات في النظام",
      "كلاهما نفس الشيء تمامًا",
      "Ready Queue خاصة بعمليات I/O فقط"
    ],
    correct: 1,
    explanation:
      "المحاضرة: Job Queue تضم جميع العمليات في النظام، وReady Queue تضم العمليات الموجودة في الذاكرة الرئيسية وجاهزة للتنفيذ."
  },
  {
    question:
      "س10) (سيناريو) إذا كانت عملية في Device Queue، ما سبب وجودها هناك غالبًا؟",
    answers: [
      "تنتظر جهاز إدخال/إخراج (I/O)",
      "تنتظر تحميل Kernel",
      "تنتظر تحويلها إلى نص في Text Section",
      "تنتظر حذف PCB"
    ],
    correct: 0,
    explanation:
      "Device/Waiting Queues مخصصة للعمليات التي تنتظر I/O."
  },
  {
    question:
      "س11) (تحليل) أي مكوّن من مكونات العملية داخل الذاكرة هو الأنسب لتخزين المتغيرات العالمية حسب المحاضرة؟",
    answers: [
      "Stack",
      "Heap",
      "Data Section",
      "Program Counter"
    ],
    correct: 2,
    explanation:
      "حسب المحاضرة: Data Section يحتوي على المتغيرات العالمية."
  },
  {
    question:
      "س12) (تحليل) أي مكوّن يُخزّن البيانات المؤقتة مثل معاملات الدوال وعناوين العودة والمتغيرات المحلية؟",
    answers: [
      "Text/Code Section",
      "Stack",
      "Heap",
      "Data Section"
    ],
    correct: 1,
    explanation:
      "المحاضرة: Stack يحتوي على البيانات المؤقتة مثل معاملات الدوال، عناوين العودة، والمتغيرات المحلية."
  },
  {
    question:
      "س13) (سيناريو) عملية تحتاج تخصيص ذاكرة ديناميكيًا أثناء التنفيذ. أين تُخزَّن هذه الذاكرة غالبًا؟",
    answers: [
      "Heap",
      "Text Section",
      "Job Queue",
      "ISR"
    ],
    correct: 0,
    explanation:
      "المحاضرة: Heap تحتوي على الذاكرة المخصصة ديناميكيًا أثناء وقت التنفيذ."
  },
  {
    question:
      "س14) (تحليل معماري) في هيكل UNIX بالمحاضرة: Kernel يُوصف بأنه:",
    answers: [
      "مجرد واجهة رسومية",
      "قلب النظام، يتحكم بالموارد الأساسية مثل إدارة الملفات وجدولة المعالجة وإدارة الذاكرة ويقع بين برامج النظام والعتاد",
      "برنامج واحد فقط لعرض الأيقونات",
      "جزء خاص بالـ Android فقط"
    ],
    correct: 1,
    explanation:
      "المحاضرة: Kernel هو قلب النظام، يدير الموارد (ملفات/جدولة/ذاكرة) ويعمل كوسيط مع العتاد."
  },
  {
    question:
      "س15) (تحليل) في نفس محاضرة الواجهات: CLI قد يُنفذ أحيانًا ضمن Kernel أو بواسطة System Programs. ما الفهم الأدق؟",
    answers: [
      "CLI لا يتفاعل مع النظام إطلاقًا",
      "CLI قناة أوامر؛ تنفيذها قد يكون عبر مكونات مختلفة حسب التصميم (Kernel أو System Programs/Shell)",
      "CLI يعمل فقط عبر GUI",
      "CLI يعني دائمًا أن كل شيء داخل Text Section"
    ],
    correct: 1,
    explanation:
      "المحاضرة تذكر أن CLI يتيح إدخال الأوامر وقد يُنفذ ضمن Kernel أو بواسطة برامج النظام (مثل الـ Shell)."
  },
  {
    question:
      "س16) (صح/خطأ) وفق المحاضرة: GUI تعتمد على النوافذ والأيقونات والقوائم وتسهّل التحكم بالموارد وتشغيل البرامج.",
    answers: ["صح", "خطأ"],
    correct: 0,
    explanation:
      "صحيح: ورد توصيف GUI بأنها نوافذ/أيقونات/قوائم وأدوات بصرية لتسهيل التحكم بالموارد وتشغيل البرامج."
  },
  {
    question:
      "س17) (تحليل ارتباط) لماذا وجود PCB لكل عملية يساعد على ‘التبديل السريع’ بين العمليات؟",
    answers: [
      "لأنه يكرر نفس التعليمات في Text Section",
      "لأنه يجمع معلومات الحالة (PC/Registers/Memory limits/Files/…)، فيمكن حفظ/استرجاع التنفيذ بسرعة من حيث توقف",
      "لأنه يمنع وجود Ready Queue",
      "لأنه يحذف Waiting Queue"
    ],
    correct: 1,
    explanation:
      "المحاضرة: PCB يحتوي كل المعلومات التي يحتاجها النظام لإدارة العملية واستئنافها، مما يسهّل التبديل والاستئناف."
  },
  {
    question:
      "س18) (سيناريو دقيق) عندما يحدث Interrupt: ما التسلسل الأقرب للمحاضرة؟",
    answers: [
      "استئناف البرنامج ثم حفظ الحالة ثم ISR",
      "حفظ عنوان التعليمات/حالة CPU ثم الانتقال إلى ISR عبر vector interrupt ثم العودة لاستكمال التنفيذ",
      "الانتقال للـ Heap ثم تشغيل برنامج جديد",
      "نقل كل العمليات إلى Waiting ثم حذفها"
    ],
    correct: 1,
    explanation:
      "المحاضرة: يتم حفظ حالة CPU (registers + PC/عنوان التعليمة) ثم الانتقال لـ ISR عبر vector interrupt ثم العودة لاستكمال التنفيذ."
  },
  {
    question:
      "س19) (تحليل) أي مجموعة معلومات من التالية هي الأقرب لما ذكرته المحاضرة ضمن PCB؟",
    answers: [
      "الحالة الحالية + PC + Registers + حدود الذاكرة + الأولويات + الملفات المفتوحة + وقت التشغيل",
      "اسم المستخدم فقط + GUI settings",
      "Text section فقط",
      "heap pointers فقط"
    ],
    correct: 0,
    explanation:
      "المحاضرة عدّدت عناصر PCB: الحالة، PC، السجلات، حدود الذاكرة، الأولويات، الملفات المفتوحة، ومعلومات محاسبية مثل وقت التشغيل."
  },
  {
    question:
      "س20) (تحليل ختامي) أي تفسير أدق لعبارة: 'العمليات تنتقل بين القوائم المختلفة حسب حالة تنفيذها'؟",
    answers: [
      "العمليات لا تتغير حالتها أبدًا",
      "العملية يمكن أن تكون Ready أو Waiting أو غيرها وتتحرك بين Job/Ready/Device Queues بناءً على أحداث مثل CPU و I/O",
      "كل عملية تبقى دائمًا في Ready Queue",
      "كل عملية تبقى دائمًا في Device Queue"
    ],
    correct: 1,
    explanation:
      "المحاضرة: العمليات تتحرك بين القوائم وفق حالتها (جاهزة/منتظرة…)، مثل دخول I/O ينقلها للانتظار ثم تعود للجاهزة."
  }
];

// ---------- State ----------
let currentQuestion = 0;
let score = 0;
let answered = false;

// ---------- DOM ----------
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

// ---------- Helpers ----------
function headerHTML(extraText) {
  return `
    <div style="text-align:right; opacity:.9; margin-bottom:10px;">
      <strong>معرّف المختبر:</strong> <span id="tid">${testerId}</span>
      <button id="copyBtn"
        style="margin-right:10px; background:#334155; color:#fff; border:none; padding:6px 10px; border-radius:8px; cursor:pointer;">
        نسخ المعرّف
      </button>
    </div>
    <div style="text-align:right;">${extraText}</div>
  `;
}

function wireCopyButton() {
  const btn = document.getElementById("copyBtn");
  if (!btn) return;
  btn.onclick = async () => {
    try {
      await navigator.clipboard.writeText(testerId);
      btn.innerText = "تم النسخ ✅";
      setTimeout(() => (btn.innerText = "نسخ المعرّف"), 1200);
    } catch {
      alert("لم يتم النسخ تلقائيًا. انسخ المعرّف يدويًا.");
    }
  };
}

// ---------- Render ----------
function loadQuestion() {
  answered = false;
  nextBtn.disabled = true;
  answersEl.innerHTML = "";

  const q = questions[currentQuestion];
  questionEl.innerText = q.question;

  resultEl.innerHTML = headerHTML(`التقدم: ${currentQuestion + 1} / ${questions.length} — اختر إجابة لعرض التصحيح والشرح.`);
  wireCopyButton();

  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.innerText = answer;
    button.classList.add("answer-btn");
    button.onclick = () => checkAnswer(index);
    answersEl.appendChild(button);
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

  resultEl.innerHTML = headerHTML(`
    <div style="font-size:18px; margin-bottom:6px;">
      ${isCorrect ? "إجابة صحيحة ✅" : "إجابة خاطئة ❌"}
    </div>
    <div><strong>الإجابة الصحيحة:</strong> ${q.answers[correctIndex]}</div>
    <div style="margin-top:6px;"><strong>الشرح:</strong> ${q.explanation}</div>
  `);
  wireCopyButton();

  nextBtn.disabled = false;
}

// ---------- Next / Final ----------
nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showFinalResult();
  }
};

function showFinalResult() {
  const total = questions.length;
  const percent = Math.round((score / total) * 100);

  let level = "يحتاج مراجعة قوية";
  if (percent >= 90) level = "ممتاز جدًا";
  else if (percent >= 80) level = "ممتاز";
  else if (percent >= 70) level = "جيد جدًا";
  else if (percent >= 60) level = "جيد";
  else if (percent >= 50) level = "مقبول";

  questionEl.innerText = "انتهى الاختبار 🎉";
  answersEl.innerHTML = "";
  nextBtn.style.display = "none";

  resultEl.innerHTML = headerHTML(`
    <h2 style="text-align:center; margin:10px 0;">النتيجة النهائية</h2>
    <div style="text-align:center; font-size:28px; font-weight:700;">${score} / ${total}</div>
    <div style="text-align:center; margin-top:6px;">${percent}% — ${level}</div>
    <div style="text-align:center; margin-top:12px;">
      <button id="restartBtn"
        style="background:#16a34a; color:#fff; padding:10px 16px; border-radius:8px; border:none; cursor:pointer;">
        إعادة الاختبار
      </button>
    </div>
  `);
  wireCopyButton();

  document.getElementById("restartBtn").onclick = () => {
    currentQuestion = 0;
    score = 0;
    nextBtn.style.display = "inline-block";
    loadQuestion();
  };
}

// ---------- Start ----------
loadQuestion();
