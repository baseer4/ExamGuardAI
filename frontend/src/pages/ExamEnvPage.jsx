import React, { useState, useEffect } from "react";
import Assignment from "../components/Assignment";
import Mcq from "../components/Mcq";
import { useExamStore } from "../store/useExamStore";
import { useParams } from "react-router-dom";

const ExamEnvPage = () => {
  const { id } = useParams();
  const [started, setStarted] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const [violations, setViolations] = useState([]);

  const { fetchTestQuestions, testQuestions } = useExamStore();

  useEffect(() => {
    if (id) fetchTestQuestions(id);
  }, [id, fetchTestQuestions]);

  const handleSubmitExam = () => {
    console.log("Auto-submitting due to violations...");
    alert("You violated exam rules too many times. Submitting your exam.");
    setStarted(false);
    document.exitFullscreen?.();
  };

  const recordViolation = (message, type = "general") => {
    const timestamp = new Date().toISOString();
    const newViolation = { message, type, timestamp };

    setViolations(prev => {
      const updated = [...prev, newViolation];
      if (updated.length >= 3) {
        handleSubmitExam(); // auto-submit after 3 violations
      } else {
        setWarningMessage(message);
      }
      return updated;
    });
  };

  useEffect(() => {
    const handleRestrictedAction = (e) => {
      e.preventDefault();
      recordViolation("Copy, paste, or cut actions are disabled.", "clipboard");
    };

    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();

      if ((e.ctrlKey || e.metaKey) && ["c", "v", "x", "u"].includes(key)) {
        e.preventDefault();
        recordViolation("This keyboard shortcut is disabled.", "clipboard");
      }

      // if (
      //   key === "f12" ||
      //   (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(key))
      // ) {
      //   e.preventDefault();
      //   recordViolation("Opening developer tools is not allowed.", "devtools");
      // }

      if (key === "escape" && started) {
        e.preventDefault();
        recordViolation("You cannot exit fullscreen using Escape during the exam.", "fullscreen");
      }
    };

    const handleContextMenu = (e) => {
      e.preventDefault();
      recordViolation("Right-click is disabled during the exam.", "contextmenu");
    };

    const disableSelection = () => {
      document.body.style.userSelect = "none";
    };
    const enableSelection = () => {
      document.body.style.userSelect = "auto";
    };

    document.addEventListener("copy", handleRestrictedAction);
    document.addEventListener("paste", handleRestrictedAction);
    document.addEventListener("cut", handleRestrictedAction);
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    disableSelection();

    return () => {
      document.removeEventListener("copy", handleRestrictedAction);
      document.removeEventListener("paste", handleRestrictedAction);
      document.removeEventListener("cut", handleRestrictedAction);
      document.removeEventListener("contextmenu", handleContextMenu);
      // document.removeEventListener("keydown", handleKeyDown);
      enableSelection();
    };
  }, [started]);

  const handleStartExam = async () => {
    const elem = document.documentElement;
    try {
      if (elem.requestFullscreen) await elem.requestFullscreen();
      else if (elem.webkitRequestFullscreen) await elem.webkitRequestFullscreen();
      else if (elem.msRequestFullscreen) await elem.msRequestFullscreen();

      setStarted(true);
    } catch (error) {
      alert("Fullscreen permission denied. Please allow fullscreen to continue.", error);
    }
  };

  const handleFullscreenChange = () => {
    if (!document.fullscreenElement && started) {
      recordViolation("You exited fullscreen. Please click 'Resume Exam' to continue.", "fullscreen-exit");
      setStarted(false);
    }
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [started]);

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Start/Resume overlay */}
      {!started && (
        <div className="fixed inset-0 bg-base-300 bg-opacity-70 flex items-center justify-center z-50">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-6">Ready to Start Your Exam?</h1>
            <button
              onClick={handleStartExam}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-xl shadow-lg transition duration-200"
            >
              {document.fullscreenElement ? "Resume Exam" : "Start Exam"}
            </button>
          </div>
        </div>
      )}

      {/* Warning overlay */}
      {warningMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 animate-fade-in">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center max-w-md w-full">
            <h2 className="text-lg font-semibold text-red-600 mb-4">⚠️ Exam Violation</h2>
            <p className="text-gray-800 mb-4">{warningMessage}</p>
            <button
              onClick={() => setWarningMessage("")}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Resume Exam
            </button>
          </div>
        </div>
      )}

      {/* Exam content */}
      {started && (
        testQuestions.type === "Assignment" ? (
          <Assignment />
        ) : testQuestions.type === "MCQ" ? (
          <Mcq />
        ) : null
      )}
    </div>
  );
};

export default ExamEnvPage;
