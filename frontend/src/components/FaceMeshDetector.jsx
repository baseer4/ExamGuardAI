import React, { useEffect, useRef } from "react";
import useFaceMesh from "../hooks/useFaceMesh";
import {
  getEyeDirection,
  getHeadPoseDirection
} from "../utlis/FaceAnalysisUtils";
import { useFlagStore } from "../store/useFlagStore";

export default function FaceMeshDetector() {
  const { videoRef, landmarks } = useFaceMesh();
  const faceDetected = Array.isArray(landmarks) && landmarks.length > 0;
  const {addViolation} = useFlagStore();
  const lastViolationTime = useRef(0);


  const headPose = faceDetected
    ? getHeadPoseDirection(landmarks)  // ✅ Fixed here
    : "❓";

  const eyeDirection = faceDetected ? getEyeDirection(landmarks) : "❓";
  
useEffect(() => {
  const now = Date.now();
  if (now - lastViolationTime.current < 5000) return;

  if (!faceDetected) {
    addViolation({
      message: "Face not detected.",
      type: "no_face",
      timestamp: new Date().toISOString(),
    });
    lastViolationTime.current = now;
    return;
  }

  if (["Looking left", "Looking right", "Looking up", "Looking down"].includes(headPose)) {
    addViolation({
      message: `Suspicious head pose: ${headPose}`,
      type: `head_${headPose.split(" ")[1].toLowerCase()}`,
      timestamp: new Date().toISOString(),
    });
    lastViolationTime.current = now;
    return; // prevent stacking
  }

  if (["Looking left", "Looking right", "Looking up", "Looking down"].includes(eyeDirection)) {
    addViolation({
      message: `Suspicious eye movement: ${eyeDirection}`,
      type: `eye_${eyeDirection.split(" ")[1].toLowerCase()}`,
      timestamp: new Date().toISOString(),
    });
    lastViolationTime.current = now;
    return;
  }
}, [headPose, eyeDirection, faceDetected]);

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
        {/* for debugging */}
        <p>Face: {faceDetected ? "✅" : "❌"}</p>
        <p>Head Direction: {headPose}</p>
        <p>eyeDirection: {eyeDirection}</p>
      </div>
    </div>
  );
}
