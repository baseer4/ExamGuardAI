import React, { useEffect, useRef } from "react";

const VideoFeed = ({ mirrored = true }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const enableCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Failed to access camera:", err);
      }
    };

    enableCamera();

    return () => {
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      className={`w-full h-full object-cover ${mirrored ? "transform scale-x-[-1]" : ""}`}
    />
  );
};

export default VideoFeed;
