import React from "react";

const AboutPage = () => {
  return (
    <section className="bg-base-200 h-[calc(100vh-6rem)] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-bold text-primary">
          About ExamGuardAI
        </h2>

        <p className="text-base-content text-lg">
          ExamGuardAI is a lightweight, AI-powered proctoring solution that runs right in your browser.
          No extensions, no downloads — just smart monitoring for online exams.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left mt-15">
          <div>
            <h3 className="font-semibold text-base-content mb-2">🎯 Real-Time Face Tracking</h3>
            <p className="text-md text-base-content">
              Detects head pose, gaze direction, and face presence during the exam — all in the browser.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base-content mb-2">👀 Multi-Person Detection</h3>
            <p className="text-md text-base-content">
              Flags multiple people in frame or suspicious side glances that might indicate cheating.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base-content mb-2">🔒 Privacy-First</h3>
            <p className="text-md text-base-content">
              Analyzes locally, sends only metadata to the backend. No video uploads, no heavy tracking.
            </p>
          </div>
        </div>

        <div className="pt-6 mt-32">
          <a href="/" className="btn btn-primary btn-wide">
            Get Started
          </a>
        </div>

        <p className="text-sm italic text-base-content/70">
          "Modern exams deserve modern protection — ExamGuardAI is the silent invigilator you can trust."
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
