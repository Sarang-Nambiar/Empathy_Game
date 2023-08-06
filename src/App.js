import "./App.css";
import { useState } from "react";
import Modal from "./Components/Modal";
import Scene1 from "./assets/Scene1.mp4";

function App() {
  const [active, setActive] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);
  const [videoList, setVideoList] = useState([]);
  const handleVideoEnd = () => {
    if (videoIndex + 1 < videoList.length) {
      setVideoIndex((prevIndex) => prevIndex + 1);
    } else {
      setActive(true);
    }
  };

  const handleModalClose = () => {
    setActive(false);

  };

  return (
    <div className="App">
      <video
        className="scene"
        onEnded={handleVideoEnd}
        src={videoList[videoIndex] || Scene1}
        autoPlay
        playsInline
        muted
      />
      {active && (
        <Modal
          closeModal={handleModalClose}
          setVideoIndex={setCurrentVideoIndex}
          v_i={currentVideoIndex}
          setVideoList={setVideoList}
          setIndex={setVideoIndex}
        />
      )}
    </div>
  );
}

export default App;
