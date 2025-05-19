import React, { useState } from "react";

const PermissionsRequest = ({ onPermissionsGranted }) => {
  const [status, setStatus] = useState(null); // null | "granted" | "denied" | "requesting"

  const requestPermissions = async () => {
    setStatus("requesting");
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
      setStatus("granted");
      onPermissionsGranted(true);
    } catch (err) {
      setStatus("denied");
      onPermissionsGranted(false);
    }
  };

  React.useEffect(() => {
    requestPermissions();
  }, []);

  if (status === "requesting") {
    return <p>Requesting microphone and camera permissions...</p>;
  }

  if (status === "denied") {
    return (
      <div>
        <p className="text-red-600 font-semibold mb-2">
          Microphone and camera permissions are required to start the exam.
        </p>
        <button
          className="btn btn-secondary"
          onClick={requestPermissions}
        >
          Retry Permissions
        </button>
      </div>
    );
  }

  return null; // granted or initial null state
};

export default PermissionsRequest;
