export function isFacePresent(landmarks) {
  return landmarks && landmarks.length > 0;
}

export function getEyeDirection(landmarks) {
  if (!landmarks || landmarks.length < 478) return "No face";

  const leftIris = landmarks[473]; // Iris center
  const leftInner = landmarks[362];
  const leftOuter = landmarks[263];

  const dx = leftOuter.x - leftInner.x;
  const irisDx = leftIris.x - leftInner.x;
  const ratio = irisDx / dx;

  if (ratio < 0.35) return "Looking left";
  if (ratio > 0.65) return "Looking right";
  return "Looking center";
}
export function getHeadPoseDirection(landmarks) {
  if (!landmarks || landmarks.length < 468) return "No face";

  const noseTip = landmarks[1];
  const leftEye = landmarks[263];
  const rightEye = landmarks[33];

  const eyeCenterX = (leftEye.x + rightEye.x) / 2;
  const eyeCenterY = (leftEye.y + rightEye.y) / 2;

  const dx = noseTip.x - eyeCenterX;
  const dy = noseTip.y - eyeCenterY;

  const yaw = dx;   // Horizontal (left/right)
  const pitch = dy; // Vertical (up/down)

  // DEBUG: Show raw pitch/yaw in console
  console.log("Pitch:", pitch.toFixed(4), "Yaw:", yaw.toFixed(4));

  if (pitch > 0.1400) return "Looking down";
  if (pitch < 0.0550 ) return "Looking up";
  if (yaw > 0.0350) return "Looking left";
  if (yaw < -0.0350) return "Looking right";
  if (pitch > 0.0700 ) return "Looking center";

  return "Unclear";
}
