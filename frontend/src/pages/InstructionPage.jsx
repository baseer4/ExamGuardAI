import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useExamStore } from "../store/useExamStore";
import PermissionsRequest from "../components/PermissionsRequest";

const InstructionPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isTestValid, isTestLoading, testError, checkTestValid } = useExamStore();
  const [permissionsGranted, setPermissionsGranted] = useState(false);

  useEffect(() => {
    const validate = async () => {
      const data = await checkTestValid(id);
      if (!data) {
        setTimeout(() => {
          navigate("/");
        }, 5000);
      }
    };
    validate();
  }, [id, checkTestValid, navigate]);

  if (isTestLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg">Checking test validity...</p>
      </div>
    );
  }

  if (!isTestValid) {
    return (
      <div className="flex justify-center items-center h-screen flex-col gap-4 animate-fade-in">
        <p className="text-red-500 text-xl font-semibold font-intro">{testError || "Invalid test"}</p>
        <p>Redirecting you back...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4 animate-fade-in">
      <div className="max-w-2xl mx-auto bg-base-100 rounded-lg shadow-lg">
        <div className="bg-primary text-indigo-400 p-6 rounded-t-lg">
          <h1 className="text-2xl font-bold">Exam Instructions</h1>
        </div>

        <div className="p-8">
          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-4 text-primary">Important Guidelines</h2>
            <ul className="space-y-3">
              <li>Ensure you are in a quiet environment with no distractions.</li>
              <li>Your webcam and microphone will be monitored during the test.</li>
              <li>Do not switch browser tabs or open other applications.</li>
              <li>Keep all electronic devices away from your test area.</li>
              <li>Maintain good lighting so your face is clearly visible.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-3">Technical Requirements</h2>
            <div className="p-4 border border-base-300 rounded-md">
              <p className="mb-2">Before beginning, please ensure:</p>
              <ul className="ml-5 list-disc space-y-1">
                <li>Stable internet connection</li>
                <li>Functioning webcam and microphone</li>
                <li>Updated browser (Chrome or Firefox recommended)</li>
                <li>Device is charged or connected to power</li>
              </ul>
            </div>
          </section>

          <section className="mb-8 px-6">
            <PermissionsRequest onPermissionsGranted={setPermissionsGranted} />
          </section>

          <div className="flex justify-center px-6">
            <button
              className="btn w-full md:w-48 text-indigo-400 text-lg animate-fade-in-scale"
              onClick={() => navigate(`/test/${id}`)}
              disabled={!permissionsGranted}
              title={!permissionsGranted ? "Enable mic and camera permissions first" : ""}
            >
              Start Exam
            </button>
          </div>

          <div className="text-center mt-6 text-sm text-base-content/70">
            <p>Technical issues? Contact support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionPage;
