"use strict";

/* ==========================================================
   STA104 Quiz — 40 Questions
   ✅ Self-Diagnostic version (shows if script loaded or errors)
   Requires: #question #answers #result #nextBtn
   ========================================================== */

(function () {
  // ✅ رسالة فورية تثبت أن الملف تحمّل (حتى قبل DOMContentLoaded)
  // إذا ما شفتها في الصفحة -> الملف ما ينقرأ أصلًا
  function showBootMessage(msg) {
    try {
      var box = document.getElementById("result");
      if (box) {
        box.innerHTML =
          '<div style="direction:rtl;text-align:right;padding:12px;border-radius:12px;' +
          'border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.06);line-height:1.9">' +
          msg +
          "</div>";
      }
    } catch (e) {}
  }

  // 👇 إذا اشتغل السكربت ستظهر هذه الرسالة مباشرة
  showBootMessage("✅ تم تحميل السكربت بنجاح... جارٍ تجهيز الاختبار");

  // ✅ أي خطأ JavaScript سيظهر داخل الصفحة بدل ما يختفي
  window.addEventListener("error", function (ev) {
    var msg =
      "❌ حدث خطأ في JavaScript<br>" +
      "<strong>الرسالة:</strong> " + (ev && ev.message ? ev.message : "غير معروف") +
      "<br><strong>الملف:</strong> " + (ev && ev.filename ? ev.filename : "-") +
      "<br><strong>السطر:</strong> " + (ev && ev.lineno ? ev.lineno : "-");
    showBootMessage(msg);
  });

  document.addEventListener("DOMContentLoaded", function () {
    try {
      var elQuestion = document.getElementById("question");
      var elAnswers = document.getElementById("answers");
      var elResult = document.getElementById("result");
      var btnNext = document.getElementById("nextBtn");

      if (!elQuestion || !elAnswers || !elResult || !btnNext) {
        document.body.innerHTML =
          '<div style="direction:rtl;font-family:Arial;padding:16px;line-height:1.8">' +
          "<h2>❌ خطأ: عناصر الصفحة غير موجودة</h2>" +
          "<p>لازم تكون العناصر موجودة بهذه الـ IDs:</p>" +
          '<pre style="background:#111;color:#fff;padding:12px;border-radius:10px">' +
          "#question\n#answers\n#result\n#nextBtn" +
          "</pre></div>";
        return;
      }

      // رمز جلسة بدون اسم
      var sessionCode = "S-" + Math.random().toString(36).slice(2, 8).toUpperCase();

      // ====== 40 سؤال (MCQ + T/F فقط) ======
      var questions = [
        // 1–20 MCQ
        { q: "علم الإحصاء هو العلم الذي يهتم بـ:", choices: ["تصميم المواقع", "جمع وتنظيم وتحليل البيانات", "البرمجة فقط", "إدارة المشاريع"], correct: 1, explain: "الإحصاء يهتم بجمع البيانات وتنظيمها وتحليلها وتفسيرها." },
        { q: "من وظائف علم الإحصاء:", choices: ["نشر النتائج", "تفسير النتائج", "تحليل البيانات", "جميع ما سبق"], correct: 3, explain: "يشمل الإحصاء تحليل البيانات وتفسير النتائج وعرضها." },
        { q: "المجتمع الإحصائي يتميز بـ:", choices: ["عدد غير محدد من الأفراد", "عدد معروف من الأفراد N", "لا يحتوي على صفات", "لا يستخدم في الدراسات"], correct: 1, explain: "المجتمع الإحصائي عادة يُرمز لحجمه بـ N." },
        { q: "العينة هي:", choices: ["جميع أفراد المجتمع", "جزء من المجتمع", "أكبر من المجتمع", "لا علاقة لها بالمجتمع"], correct: 1, explain: "العينة جزء من المجتمع." },
        { q: "أي مما يلي يعد متغيرًا كميًا؟", choices: ["اللون", "الجنس", "الطول", "المهنة"], correct: 2, explain: "الطول متغير كمي لأنه يقاس رقمياً." },
        { q: "أي مما يلي يعد متغيرًا نوعيًا؟", choices: ["الوزن", "عدد الطلاب", "درجة الحرارة", "المهنة"], correct: 3, explain: "المهنة تصنيف (نوعي)." },
        { q: "المتوسط الحسابي يُحسب عن طريق:", choices: ["أكبر قيمة ناقص أصغر قيمة", "مجموع القيم ÷ عددها", "القيمة الأكثر تكرارًا", "القيمة الوسطى"], correct: 1, explain: "المتوسط = مجموع القيم / عددها." },
        { q: "الوسيط هو:", choices: ["القيمة الأكثر تكرارًا", "القيمة المتوسطة بعد ترتيب البيانات", "مجموع القيم", "أصغر قيمة"], correct: 1, explain: "الوسيط هو القيمة الوسطى بعد ترتيب البيانات." },
        { q: "المنوال هو:", choices: ["القيمة المتوسطة", "القيمة الأكثر تكرارًا", "الفرق بين القيم", "مجموع الانحرافات"], correct: 1, explain: "المنوال هو الأكثر تكراراً." },
        { q: "من عيوب المتوسط الحسابي:", choices: ["لا يتأثر بالقيم الشاذة", "يتأثر بالقيم المتطرفة", "لا يمكن حسابه", "لا يستخدم في المقارنات"], correct: 1, explain: "المتوسط يتأثر بالقيم المتطرفة." },
        { q: "المدى يساوي:", choices: ["المتوسط × العدد", "أكبر قيمة – أصغر قيمة", "مجموع القيم", "الجذر التربيعي للمتوسط"], correct: 1, explain: "المدى = Max - Min." },
        { q: "التباين يقيس:", choices: ["موقع البيانات", "تشتت البيانات حول المتوسط", "أكبر قيمة", "أصغر قيمة"], correct: 1, explain: "التباين يقيس التشتت حول المتوسط." },
        { q: "الانحراف المعياري هو:", choices: ["مربع التباين", "نصف التباين", "الجذر التربيعي للتباين", "ضعف المتوسط"], correct: 2, explain: "الانحراف المعياري = √التباين." },
        { q: "إذا كانت قيمة Z موجبة فهذا يعني أن القيمة:", choices: ["أقل من المتوسط", "تساوي المتوسط", "أكبر من المتوسط", "سالبة"], correct: 2, explain: "Z موجبة تعني أعلى من المتوسط." },
        { q: "المدرج التكراري يستخدم لعرض:", choices: ["البيانات النوعية", "البيانات الكمية المستمرة", "النصوص", "الصور"], correct: 1, explain: "Histogram للبيانات الكمية المستمرة." },
        { q: "في المدرج التكراري تكون الأعمدة:", choices: ["منفصلة", "متباعدة", "متلاصقة", "عشوائية"], correct: 2, explain: "الأعمدة متلاصقة." },
        { q: "المخطط الشريطي يستخدم غالبًا لعرض:", choices: ["البيانات النوعية", "البيانات المستمرة فقط", "العلاقة بين متغيرين كميين", "الانحراف المعياري"], correct: 0, explain: "Bar chart عادة للفئات/النوعي." },
        { q: "مخطط التشتت يستخدم لبيان:", choices: ["المتوسط", "العلاقة بين متغيرين", "التكرار", "المنوال"], correct: 1, explain: "Scatter يوضح العلاقة بين متغيرين." },
        { q: "إذا كانت النقاط تتجه من أسفل اليسار إلى أعلى اليمين فالعلاقة:", choices: ["عكسية", "طردية", "لا توجد علاقة", "دائرية"], correct: 1, explain: "هذا يعني علاقة طردية." },
        { q: "إذا كان الانحراف المعياري صغيرًا فهذا يدل على:", choices: ["تشتت كبير", "عدم وجود بيانات", "تجانس البيانات", "خطأ في الحساب"], correct: 2, explain: "صغير → البيانات متقاربة." },

        // 21–30 T/F
        { q: "جميع العلوم تحتاج إلى الإحصاء لتحليل البيانات.", choices: ["صح", "خطأ"], correct: 0, explain: "الإحصاء أداة تحليل في أغلب العلوم." },
        { q: "المتوسط الحسابي لا يتأثر بالقيم الشاذة.", choices: ["صح", "خطأ"], correct: 1, explain: "خطأ: يتأثر بالقيم المتطرفة." },
        { q: "الوسيط مناسب عند وجود قيم متطرفة.", choices: ["صح", "خطأ"], correct: 0, explain: "صح: أقل تأثرًا بالقيم المتطرفة." },
        { q: "المدى يعتمد فقط على أكبر وأصغر قيمة.", choices: ["صح", "خطأ"], correct: 0, explain: "صح." },
        { q: "التباين وحدته نفس وحدة البيانات الأصلية.", choices: ["صح", "خطأ"], correct: 1, explain: "خطأ: وحدة مربعة." },
        { q: "الانحراف المعياري أسهل في التفسير من التباين.", choices: ["صح", "خطأ"], correct: 0, explain: "صح: لأنه بنفس وحدة البيانات." },
        { q: "في المخطط الشريطي توجد مسافات بين الأعمدة.", choices: ["صح", "خطأ"], correct: 0, explain: "صح." },
        { q: "المدرج التكراري يستخدم للبيانات الكمية المستمرة.", choices: ["صح", "خطأ"], correct: 0, explain: "صح." },
        { q: "قيمة Z = 0 تعني أن القيمة تساوي المتوسط.", choices: ["صح", "خطأ"], correct: 0, explain: "صح." },
        { q: "إذا كان التباين كبيرًا فإن البيانات متقاربة.", choices: ["صح", "خطأ"], correct: 1, explain: "خطأ: التباين الكبير يعني تشتت أكبر." },

        // 31–40 (كلها اختيارات)
        { q: "أفضل تعريف مختصر لعلم الإحصاء هو:", choices: ["علم تصميم المواقع", "علم جمع وتنظيم وتحليل وتفسير البيانات", "علم البرمجة", "علم الصور"], correct: 1, explain: "التعريف الأشمل للإحصاء." },
        { q: "أي خيار يمثل مصدرين شائعين للبيانات؟", choices: ["التجارب والمسوحات", "الطابعة والسماعات", "الألوان والأشكال", "المدى والمنوال"], correct: 0, explain: "من طرق جمع البيانات: المسوح/التجارب/السجلات." },
        { q: "أي زوج يُعد من أنواع العينات العشوائية؟", choices: ["العشوائية البسيطة والطبقية", "القصدية والمريحة", "اليدوية والعشوائية", "النصية والرقمية"], correct: 0, explain: "هذان نوعان من العينات العشوائية." },
        { q: "الفرق الصحيح بين المجتمع والعينة هو:", choices: ["العينة أكبر من المجتمع", "المجتمع جزء من العينة", "المجتمع كل الأفراد والعينة جزء ممثل منه", "لا فرق"], correct: 2, explain: "هذا هو الفرق الأساسي." },
        { q: "إذا كانت القيم: 5،7،9 فإن المتوسط الحسابي يساوي:", choices: ["7", "8", "6", "9"], correct: 0, explain: "(5+7+9)/3 = 7." },
        { q: "إذا كانت القيم: 2،4،6،8 فإن الوسيط يساوي:", choices: ["4", "6", "5", "8"], correct: 2, explain: "(4+6)/2 = 5." },
        { q: "إذا كانت القيم: 3،3،5،7 فإن المنوال يساوي:", choices: ["3", "5", "7", "لا يوجد"], correct: 0, explain: "3 هي الأكثر تكرارًا." },
        { q: "إذا كانت أصغر قيمة=10 وأكبر قيمة=25 فإن المدى يساوي:", choices: ["15", "35", "25", "10"], correct: 0, explain: "25-10=15." },
        { q: "الهدف من مخطط التشتت هو:", choices: ["إيجاد المنوال", "بيان العلاقة بين متغيرين", "حساب الانحراف المعياري", "عرض بيانات نوعية فقط"], correct: 1, explain: "يوضح اتجاه/قوة العلاقة." },
        { q: "أي خيار يمثل شكلين شائعين للتوزيعات؟", choices: ["متماثل ومنحرف", "مربع ومثلث", "أحمر وأزرق", "طابعة وماوس"], correct: 0, explain: "متماثل/منحرف من أشكال التوزيع." }
      ];

      // ===== State =====
      var currentIndex = 0;
      var score = 0;
      var answered = false;

      function escapeHtml(s) {
        return String(s).replace(/[&<>"']/g, function (ch) {
          if (ch === "&") return "&amp;";
          if (ch === "<") return "&lt;";
          if (ch === ">") return "&gt;";
          if (ch === '"') return "&quot;";
          if (ch === "'") return "&#039;";
          return ch;
        });
      }

      function styleBtn(btn, state) {
        btn.style.borderRadius = "10px";
        btn.style.border = "1px solid rgba(255,255,255,.18)";
        btn.style.background = "rgba(255,255,255,.06)";
        btn.style.color = "#fff";
        btn.style.padding = "12px 14px";
        btn.style.margin = "10px 0";
        btn.style.width = "100%";
        btn.style.textAlign = "right";
        btn.style.cursor = "pointer";
        btn.style.fontSize = "1rem";
        btn.style.transition = "all .15s ease";

        if (state === "correct") {
          btn.style.background = "rgba(46, 204, 113, .25)";
          btn.style.border = "1px solid rgba(46, 204, 113, .75)";
        } else if (state === "wrong") {
          btn.style.background = "rgba(231, 76, 60, .25)";
          btn.style.border = "1px solid rgba(231, 76, 60, .75)";
        }
      }

      function renderQuestion() {
        answered = false;
        btnNext.disabled = true;

        var q = questions[currentIndex];
        elAnswers.innerHTML = "";

        elQuestion.innerHTML =
          '<div style="direction:rtl;text-align:right;line-height:1.8;">' +
          "<strong>سؤال " + (currentIndex + 1) + " من " + questions.length + ":</strong> " +
          escapeHtml(q.q) +
          "</div>";

        elResult.innerHTML =
          '<div style="direction:rtl;text-align:right;line-height:1.9;padding:12px;border-radius:12px;' +
          'border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.06)">' +
          '<div style="font-size:18px;"><strong>الدرجة:</strong> ' + score + " / " + questions.length + "</div>" +
          '<div style="opacity:.85;margin-top:6px;">رمز الجلسة: <strong>' + sessionCode + "</strong></div>" +
          "</div>";

        for (var i = 0; i < q.choices.length; i++) {
          (function (idx) {
            var btn = document.createElement("button");
            btn.type = "button";
            btn.textContent = q.choices[idx];
            styleBtn(btn, "neutral");
            btn.addEventListener("click", function () {
              handleAnswer(idx);
            });
            elAnswers.appendChild(btn);
          })(i);
        }

        btnNext.textContent = (currentIndex === questions.length - 1) ? "عرض النتيجة النهائية" : "السؤال التالي";
      }

      function handleAnswer(selectedIdx) {
        if (answered) return;
        answered = true;

        var q = questions[currentIndex];
        var correctIdx = q.correct;

        var buttons = elAnswers.querySelectorAll("button");
        for (var i = 0; i < buttons.length; i++) {
          buttons[i].disabled = true;
          styleBtn(buttons[i], "neutral");
          if (i === correctIdx) styleBtn(buttons[i], "correct");
          if (i === selectedIdx && i !== correctIdx) styleBtn(buttons[i], "wrong");
        }

        var isCorrect = (selectedIdx === correctIdx);
        if (isCorrect) score++;

        elResult.innerHTML =
          '<div style="direction:rtl;text-align:right;line-height:1.95;padding:12px;border-radius:12px;' +
          'border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.06)">' +
          '<div style="font-size:18px;"><strong>الدرجة:</strong> ' + score + " / " + questions.length + "</div>" +
          '<div style="margin-top:6px;"><strong>النتيجة:</strong> ' + (isCorrect ? "✅ صحيحة" : "❌ خاطئة") + "</div>" +
          '<div style="margin-top:10px;"><strong>الإجابة الصحيحة:</strong> ' + escapeHtml(q.choices[correctIdx]) + "</div>" +
          '<div style="margin-top:10px;"><strong>الشرح:</strong> ' + escapeHtml(q.explain) + "</div>" +
          '<div style="margin-top:8px;opacity:.85;"><strong>رمز الجلسة:</strong> ' + sessionCode + "</div>" +
          "</div>";

        btnNext.disabled = false;
      }

      function showFinal() {
        elQuestion.innerHTML = "<strong>انتهى الاختبار 🎉</strong>";
        elAnswers.innerHTML = "";
        btnNext.style.display = "none";

        var percent = Math.round((score / questions.length) * 100);

        elResult.innerHTML =
          '<div style="direction:rtl;text-align:center;line-height:2;padding:14px;border-radius:12px;' +
          'border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.06)">' +
          '<div style="font-size:20px;"><strong>الدرجة النهائية</strong></div>' +
          '<div style="font-size:34px;margin:6px 0;"><strong>' + score + " / " + questions.length + "</strong></div>" +
          '<div style="font-size:18px;">' + percent + "%</div>" +
          '<div style="margin-top:10px;opacity:.9;">رمز الجلسة: <strong>' + sessionCode + "</strong></div>" +
          "</div>";
      }

      btnNext.addEventListener("click", function () {
        if (!answered) return;
        if (currentIndex === questions.length - 1) return showFinal();
        currentIndex++;
        renderQuestion();
      });

      // ✅ الآن نثبت أنه بدأ فعليًا
      elResult.innerHTML =
        '<div style="direction:rtl;text-align:right;padding:12px;border-radius:12px;border:1px solid rgba(255,255,255,.18);background:rgba(46,204,113,.12)">' +
        "✅ تم تجهيز الاختبار بنجاح — عدد الأسئلة: <strong>" + questions.length + "</strong>" +
        "<br>رمز الجلسة: <strong>" + sessionCode + "</strong>" +
        "</div>";

      btnNext.disabled = true;
      renderQuestion();
    } catch (e) {
      showBootMessage("❌ خطأ داخل DOMContentLoaded: " + (e && e.message ? e.message : e));
    }
  });
})();
