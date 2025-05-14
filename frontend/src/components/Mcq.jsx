import { useState, useEffect } from 'react';
import { FiClock } from 'react-icons/fi';
import { useExamStore } from '../store/useExamStore';
import { useParams } from 'react-router-dom';
import formatTime from '../lib/formatTime';
import EndButton from './EndButton';

export default function Mcq() {
  const { id } = useParams();
  const { fetchTestQuestions, testQuestions, testQuestionsError } = useExamStore();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    if (id) {
      fetchTestQuestions(id);
    }
  }, [id, fetchTestQuestions]);

  useEffect(() => {
    if (testQuestions && testQuestions.duration) {
      setTimeLeft(testQuestions.duration * 60);
    }
  }, [testQuestions]);

  useEffect(() => {
    if (timeLeft === null || timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  

  const handleOptionSelect = (optionIndex) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: optionIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestion < testQuestions.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    alert('Test submitted!');
    console.log('Submitted answers:', answers);
  };

  if (!testQuestions) {
    return <div className="p-4 text-gray-700">Loading test...</div>;
  }

  if (testQuestionsError) {
    return <div className="text-red-500 p-4">Error: {testQuestionsError.toString()}</div>;
  }

  const isLastQuestion = currentQuestion === testQuestions.questions.length - 1;
  const questionData = testQuestions.questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm p-4 border-b">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">{testQuestions.testTitle}</h1>
          <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-md">
            <FiClock className="text-blue-600 w-4 h-4" />
            <span className="font-mono font-medium text-blue-600">{formatTime(timeLeft)}</span>
          </div>
         <EndButton onClick={handleSubmit} />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          {/* Question Navigation */}
          <div className="mb-6 flex flex-wrap gap-2">
            {testQuestions.questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  index === currentQuestion
                    ? 'bg-blue-600 text-white'
                    : answers[index] !== undefined
                    ? 'bg-green-100 text-green-800 border border-green-300'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* Question */}
          <div className="mb-8">
            <p className="text-gray-700 mb-6 font-semibold text-lg">{questionData.question}</p>

            {/* Options */}
            <div className="space-y-3">
              {questionData.options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                    answers[currentQuestion] === index
                      ? 'bg-blue-50 border-blue-300'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border ${
                        answers[currentQuestion] === index
                          ? 'border-blue-600 bg-blue-600'
                          : 'border-gray-300'
                      } flex items-center justify-center`}
                    >
                      {answers[currentQuestion] === index && (
                        <div className="w-2 h-2 rounded-full bg-white" />
                      )}
                    </div>
                    <span>{option}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrev}
              disabled={currentQuestion === 0}
              className={`px-4 py-2 rounded-md ${
                currentQuestion === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Previous
            </button>

            <div className="flex gap-3">
              {isLastQuestion ? (
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 font-medium"
                >
                  Submit Test
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium"
                >
                  Next Question
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
