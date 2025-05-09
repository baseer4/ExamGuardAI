import { useState, useEffect } from 'react';
import { FiClock } from 'react-icons/fi';
import { useExamStore } from '../store/useExamStore';
import { useParams } from 'react-router-dom';
import formatTime from '../lib/formatTime';

export default function Assignment() {
  const { id } = useParams();
  const { fetchTestQuestions, testQuestions, testQuestionsError } = useExamStore();

  const [timeLeft, setTimeLeft] = useState(null);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    if (id) fetchTestQuestions(id);
  }, [id]);

  useEffect(() => {
    if (testQuestions?.duration) {
      setTimeLeft(testQuestions.duration * 60);
    }
  }, [testQuestions]);

  useEffect(() => {
    if (timeLeft === null || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  
  const handleChange = (index, value) => {
    setAnswers((prev) => ({ ...prev, [index]: value }));
  };

  const handleSubmit = () => {
    console.log("Submitted Answers:", answers);
    alert("Assignment submitted!");
  };

  if (testQuestionsError) {
    return <div className="p-4 text-red-500">Error: {testQuestionsError}</div>;
  }

  if (!testQuestions) {
    return <div className="p-4 text-gray-600">Loading assignment...</div>;
  }

  return (
    <div className="flex flex-col h-screen w-full bg-gray-50">
      <header className="bg-white shadow-md p-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">{testQuestions.testTitle}</h1>
          <div className="flex items-center gap-2 text-red-500 font-medium">
            <FiClock className="w-5 h-5" />
            <span>{formatTime(timeLeft || 0)}</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 max-w-4xl mx-auto mt-1">Type: {testQuestions.type}</p>
      </header>

      <main className="flex-1 overflow-y-auto px-4">
        <div className="max-w-4xl mx-auto py-6">
          {testQuestions.questions && testQuestions.questions.length > 0 ? (
            testQuestions.questions.map((q, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-4">
                <h2 className="text-lg font-semibold mb-2">Question {q.title}</h2>
                <p className="text-gray-700 mb-4">{q.question}</p>
                <textarea
                  value={answers[index] || ''}
                  onChange={(e) => handleChange(index, e.target.value)}
                  placeholder="Type your answer here..."
                  className="w-full border border-gray-300 rounded-md p-3 min-h-[100px]"
                />
              </div>
            ))
          ) : (
            <p className="text-gray-500">No questions found.</p>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-md p-4 sticky bottom-0 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            Submit Assignment
          </button>
        </div>
      </footer>
    </div>
  );
}
