import React from "react";
import useFaceMesh from "../hooks/useFaceMesh";
import {
  getEyeDirection,
  getHeadPoseDirection
} from "../utlis/FaceAnalysisUtils";

export default function FaceMeshDetector() {
  const { videoRef, landmarks } = useFaceMesh();
  const faceDetected = Array.isArray(landmarks) && landmarks.length > 0;

  const headPose = faceDetected
    ? getHeadPoseDirection(landmarks)  // ✅ Fixed here
    : "❓";

  const eyeDirection = faceDetected ? getEyeDirection(landmarks) : "❓";

  return (
    <div className="relative">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        width="640"
        height="480"
        style={{ borderRadius: "12px" }}
      />
      <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white p-2 rounded space-y-1 text-sm">
        <p>Face: {faceDetected ? "✅" : "❌"}</p>
        <p>Head Direction: {headPose}</p>
        <p>eyeDirection: {eyeDirection}</p>
      </div>
    </div>
  );
}
