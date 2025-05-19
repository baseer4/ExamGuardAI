import React, { useState } from "react";
import { FiCopy } from "react-icons/fi";
import QRCode from "react-qr-code";
import toast from "react-hot-toast";
import { useExamStore } from "../store/useExamStore";

const LinkGenerator = () => {
  const { joinLink, isJoinLinkLoading } = useExamStore();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (joinLink) {
      navigator.clipboard.writeText(joinLink);
      toast.success("Link copied to clipboard!");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (isJoinLinkLoading) {
    return (
      <div className="h-[calc(100vh-6rem)] flex items-center justify-center bg-base-200 animate-fade-in">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-5rem)] flex flex-col items-center justify-center bg-base-200 animate-fade-in p-4">
      <div className="p-6 bg-base-100 rounded-xl shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-1">Share This Link With Your Students</h2>
        <p className="text-sm text-gray-500 mb-4">
          Anyone with this link can join the test.
        </p>

        {joinLink ? (
          <>
            <div className="flex items-center justify-between bg-base-300 p-3 rounded-lg mb-4">
              <span className="text-sm truncate">{joinLink}</span>
              <button
                onClick={copyToClipboard}
                className="btn btn-outline btn-sm flex items-center gap-2"
              >
                <FiCopy className="text-lg" />
                {copied ? "Copied!" : "Copy Link"}
              </button>
            </div>

            <div className="mb-6 flex justify-center">
              <QRCode value={joinLink} size={128} />
            </div>
          </>
        ) : (
          <p className="text-center text-sm text-gray-500">
            No link found. Please create a test first.
          </p>
        )}

        <div className="text-left text-sm text-gray-600 mt-6 border-t pt-4">
          <p>🔹 Share this link with students who need to take the test.</p>
          <p>🔹 You can track test participation and status on your dashboard.</p>
          <p>🔹 Chrome browser is recommended for the best experience.</p>
          <p>🔹 Mobile devices are not supported — please use a desktop/laptop.</p>
        </div>
      </div>
    </div>
  );
};

export default LinkGenerator;
