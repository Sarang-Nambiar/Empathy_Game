import { useState } from "react";

export default function Options({ setVideoSrc, openModal }) {
    const [scene, setScene] = useState(1);
    const handleClick = (videoSrc) => {
    setVideoSrc(videoSrc);
    openModal(false);
    setScene(scene + 1);
  };
  return (
    <>
      <div className="options">
        <div className="option-1">
          <button
            style={{ height: "200px", width: "400px" }}
            onClick={() => handleClick(`./assets/Scene${scene}option1.mp4`)}
          >
            Play Video 1
          </button>
        </div>
        <div className="option-2">
          <button
            style={{ height: "200px", width: "400px" }}
            onClick={() => handleClick(`./assets/Scene${scene}option2.mp4`)}
          >
            Play Video 2
          </button>
        </div>
      </div>
    </>
  );
}
