import React from "react";

const ProfilePageSkeleton = () =>{
  return (
    <div className="bg-base-200 min-h-[calc(100vh-5rem)] flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-base-100 rounded-2xl shadow-2xl px-8 py-12">
        <div className="mx-auto mb-10 w-1/2 skeleton h-8 rounded"></div>

        <div className="space-y-6 text-lg p-8">
          <div className="flex flex-col gap-2">
            <span className="skeleton w-24 h-4 rounded"></span>
            <span className="skeleton w-3/4 h-5 rounded"></span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="skeleton w-24 h-4 rounded"></span>
            <span className="skeleton w-1/2 h-5 rounded"></span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="skeleton w-24 h-4 rounded"></span>
            <span className="skeleton w-2/3 h-5 rounded"></span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="skeleton w-32 h-4 rounded"></span>
            <span className="skeleton w-1/3 h-5 rounded"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePageSkeleton;