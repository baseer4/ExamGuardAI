import React from "react";

const faqs = [
  {
    q: "Is ExamGuardAI really free?",
    a: "Yes. ExamGuardAI is completely free and open source. You can run unlimited exams without paying anything.",
  },
  {
    q: "Can I run it on my own server?",
    a: "Yes. ExamGuardAI can be self-hosted so you fully control your exams and student data.",
  },
  {
    q: "Do students need to install anything?",
    a: "No. Everything runs directly in the browser. Students just need a webcam and a modern browser.",
  },
  {
    q: "What does it monitor during exams?",
    a: "It tracks head pose, eye gaze, multiple faces, absence of face, tab switching, copy-paste actions, fullscreen exits, and other suspicious behaviors.",
  },
  {
    q: "Is any video or personal data sent to a server?",
    a: "No. All analysis happens locally in the student's browser memory. Video never leaves the device unless you explicitly choose to store it.",
  },
  {
    q: "Can I modify ExamGuardAI?",
    a: "Yes. It’s fully open source. You can customize features, add new checks, or integrate it with your own systems.",
  },
  {
    q: "Which exam types are supported?",
    a: "Multiple choice, assignments, essays, and hybrid exams—all monitored in real time.",
  },
  {
    q: "Does it work offline?",
    a: "Partially. Core proctoring requires a live browser session, but no continuous internet streaming is needed for privacy.",
  },
];


const FAQSection = () => {
  return (
    <section id="faq" className="py-6 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-semibold">
            Frequently Asked
            <span className="text-accent"> Questions</span>
          </h2>
          <p className="mt-6 sm:text-md text-lg text-foreground/60 max-w-2xl mx-auto">
            Everything you need to know before getting started with ExamGuardAI.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="max-w-2xl collapse collapse-plus rounded-2xl border border-border/50 bg-base-100"
            >
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-semibold">
                {faq.q}
              </div>
              <div className="collapse-content text-foreground/70 leading-relaxed">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
