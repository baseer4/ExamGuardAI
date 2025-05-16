import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";  // Success icon
import { FiClock } from "react-icons/fi";               // Clock icon

export default function SubmissionSuccessPage() {
  const navigate = useNavigate();

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white rounded-xl shadow-lg p-8 text-center space-y-6">
        <AiOutlineCheckCircle className="mx-auto text-green-500 text-8xl" />

        <h1 className="text-3xl font-bold text-gray-800">Submission Successful!</h1>
        <p className="text-gray-600">
          Your test has been submitted successfully. Thank you for completing the exam.
        </p>

        <div className="bg-base-100 border border-green-300 rounded-lg p-4 flex flex-col items-center space-y-2">
          <p className="font-medium flex items-center gap-2 text-green-600">
            Status: <AiOutlineCheckCircle />
            Submitted
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <FiClock />
            Submitted at: {new Date().toLocaleString()}
          </p>
        </div>

        <div className="flex justify-center pt-4">
          <button className="btn btn-primary btn-wide" onClick={handleDashboard}>
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
