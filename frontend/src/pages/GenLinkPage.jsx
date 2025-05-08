import React from "react";
import { FiCopy } from "react-icons/fi";
import toast from "react-hot-toast";
import { useExamStore } from "../store/useExamStore";

const LinkGenerator = () => {
  const { joinLink, isJoinLinkLoading } = useExamStore();

  const copyToClipboard = () => {
    if (joinLink) {
      navigator.clipboard.writeText(joinLink);
      toast.success("Link copied to clipboard!");
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
    <div className="h-[calc(100vh-5rem)] flex items-center justify-center bg-base-200 animate-fade-in">
      <div className="p-6 bg-base-100 rounded-xl mb-24 shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Your Test Join Link</h2>

        {joinLink ? (
          <div className="flex items-center justify-between bg-base-300 p-3 rounded-lg">
            <span className="text-sm truncate">{joinLink}</span>
            <button onClick={copyToClipboard} className="btn btn-ghost btn-sm">
              <FiCopy className="text-lg" />
            </button>
          </div>
        ) : (
          <p className="text-center text-sm text-gray-500">
            No link found. Please create a test first.
          </p>
        )}
      </div>
    </div>
  );
};

export default LinkGenerator;
