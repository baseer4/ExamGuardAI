import React, { useState, useEffect } from "react";
import Assignment from "../components/Assignment";
import Mcq from "../components/Mcq";
import { useExamStore } from "../store/useExamStore";
import { useParams } from "react-router-dom";

const ExamEnvPage = () => {
  const {id} = useParams()
  const [started, setStarted] = useState(false);
  const {fetchTestQuestions,testQuestions} = useExamStore();

   useEffect(() => {
    if (id) {
      fetchTestQuestions(id);
    }
  }, [id, fetchTestQuestions]);

  const handleStartExam = async () => {
    const elem = document.documentElement;
    try {
      if (elem.requestFullscreen) {
        await elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        await elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        await elem.msRequestFullscreen();
      }
      setStarted(true);
    } catch (error) {
      
      alert("Fullscreen permission denied. Please allow fullscreen to continue.",error);
    }
  };

  const handleFullscreenChange = () => {
    if (!document.fullscreenElement && started) {
      alert("You exited fullscreen. Please click 'Resume Exam' to continue.");
      setStarted(false);
    }
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [started]);

  // const renderWhichComponent = (testQuestions) =>{
  //   if(testQuestions.type === "Assignment") return <Assignment/>;
  //   if (testQuestions.type === "MCQ") return <Mcq/>;
  //   console.log(testQuestions)
  // }

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Overlay for starting the exam */}
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

      {/* ref renderWhichComponent */}
{started &&  (
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
