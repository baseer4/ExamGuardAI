import React, { useEffect } from 'react'
import { useAuthStore } from '../store/useAuthStore';
import ProfilePageSkeleton from "../components/skeleton/ProfilePageSkeleton"
const ProfilePage = () => {
  const {profile,profileData,isViewingProfile} = useAuthStore();
  useEffect(() => {
    profile()

  }, [profile])

   if (isViewingProfile) {
    return (
      <ProfilePageSkeleton/>
    );
  }

  if (!profileData) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-5rem)]">
        <p>No profile data available.</p>
      </div>
    );
  }

  
  return (
    <div className="bg-base-200 min-h-[calc(100vh-5rem)] flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-base-100 rounded-2xl shadow-2xl px-8 py-12">
        <h2 className="text-3xl font-bold mb-10 text-center">Account Information</h2>

        <div className="space-y-6 text-lg p-6">
          <div className="flex flex-col">
            <span className="text-base-content/60">Full Name</span>
            <span className="font-medium text-base-content">{profileData.fullName || 'N/A'}</span>
          </div>

          <div className="flex flex-col">
            <span className="text-base-content/60">User ID</span>
            <span className="font-medium text-base-content">{profileData._id?.slice(10) || 'N/A'}</span>
          </div>

          <div className="flex flex-col">
            <span className="text-base-content/60">Email</span>
            <span className="font-medium text-base-content">{profileData.email || 'N/A'}</span>
          </div>

          <div className="flex flex-col">
            <span className="text-base-content/60">Account Created</span>
            <span className="font-medium text-base-content">{profileData.createdAt || 'N/A'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}




export default ProfilePage