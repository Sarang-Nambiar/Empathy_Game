import "./App.css";
import { useState } from "react";
import Modal from "./Components/Modal";
import video1 from './assets/Scene1.mp4';
import video2 from './assets/Scene1option1.mp4';
import video3 from './assets/Scene1option2.mp4';
import video4 from './assets/Scene2option1.mp4';
import video5 from './assets/Scene2option2.mp4';

function App() {
  const [active, setActive] = useState(false);
  const [introPlayed, setIntroPlayed] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setActive(true);
    setIntroPlayed(true);
  }  

  const handleModalClose = () => {
    setActive(false);
    setCurrentVideoIndex(currentVideoIndex + 1);
  }

  const videos = [video1, video2, video3, video4];

  return (
    <div className="App">
      <video
        className="scene"
        onEnded={handleVideoEnd}
        src={introPlayed ? videos[currentVideoIndex] : video1}
        autoPlay
        playsInline
        muted
      />
      {active && <Modal closeModal={handleModalClose} setVideoIndex={setCurrentVideoIndex} />}
    </div>
  );
}

export default App;
