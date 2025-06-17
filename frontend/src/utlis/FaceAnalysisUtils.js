export function isFacePresent(landmarks) {
  return landmarks && landmarks.length > 0;
}

export function getEyeDirection(landmarks) {
  if (!landmarks || landmarks.length < 478) return "No face";

  const leftIris = landmarks[473]; // center of left iris
  const leftInner = landmarks[362]; // inner corner
  const leftOuter = landmarks[263]; // outer corner
  const topLid = landmarks[386];    // upper lid
  const bottomLid = landmarks[374]; // lower lid
  const eyeWidth = Math.abs(leftOuter.x - leftInner.x);
  const eyeHeight = Math.abs(topLid.y - bottomLid.y);


const horizRatio = (leftIris.x - leftInner.x) / eyeWidth;
const vertRatio = (leftIris.y - topLid.y) / eyeHeight;


console.log("Horiz Ratio:", horizRatio.toFixed(3), "Vert Ratio:", vertRatio.toFixed(3));

  if (vertRatio < 0.200) return "Looking down";
  if (vertRatio < 0.300 ) return "Looking up";
  if (horizRatio > 0.620) return "Looking left";
  if (horizRatio < 0.415) return "Looking right";
  if (horizRatio > 0.430 && horizRatio <580 ) return "Looking center";

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


  if (pitch > 0.1400) return "Looking down";
  if (pitch < 0.0550 ) return "Looking up";
  if (yaw > 0.0350) return "Looking left";
  if (yaw < -0.0350) return "Looking right";
  if (pitch > 0.0700 ) return "Looking center";

  return "Unclear";
}
