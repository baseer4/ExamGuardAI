import { useEffect, useRef, useState } from "react";
import * as faceMesh from "@mediapipe/face_mesh";
import { Camera } from "@mediapipe/camera_utils";

export default function useFaceMesh() {
  const videoRef = useRef(null);
  const [landmarks, setLandmarks] = useState([]);

  useEffect(() => {
    if (!videoRef.current) return;

    const faceMeshInstance = new faceMesh.FaceMesh({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
    });

    faceMeshInstance.setOptions({
      maxNumFaces: 1,
      refineLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    faceMeshInstance.onResults((results) => {
      if (results.multiFaceLandmarks && results.multiFaceLandmarks.length > 0) {
        setLandmarks(results.multiFaceLandmarks[0]);
      } else {
        setLandmarks([]);
      }
    });

    const camera = new Camera(videoRef.current, {
      onFrame: async () => {
        await faceMeshInstance.send({ image: videoRef.current });
      },
      width: 640,
      height: 480,
    });

    camera.start();

    return () => {
      camera.stop();
    };
  }, []);

  return { videoRef, landmarks };
}
