import React, { useState } from 'react';
import "../Stylesheets/styles.css"
import video1 from "../assets/Scene1option1.mp4";
import video2 from "../assets/Scene1option2.mp4";
import video3 from "../assets/Scene2option1.mp4";
import video4 from "../assets/Scene2option2.mp4";
import Scene1 from "../assets/Scene1.mp4";
import Scene2 from "../assets/Scene2.mp4";
const questions = [
  {
    question: 'What would you do?',
    options: [{option: "Ohh ok, I don't mind.", videos: [video1, Scene2]}, 
    {option: "It's alright, you guys go ahead. I got work to do. ", videos: [video2, Scene2]}],
    correctOption: null,
  },
  {
    question: 'What would you do?',
    options: [{option: "Convince parents and join John for tuition.",
              videos : [video3, Scene1]},
            {option:"Don't ask. Work harder.", videos: [video4, Scene1]}],
    correctOption: null,
  },
  // Add more questions here
];

const QuizApp = ({closeModal, vi, setVideoIndex, setVideoList, setIndex}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleOptionClick = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } 

    setVideoList(selectedOption.videos);
    setVideoIndex(vi+1);
    setIndex(0)
    closeModal();
  };

  const currentQuestion = questions[vi];

  return (
    <div>
      <h2>Quiz App</h2>
      {currentQuestion && (
        <div>
          <p>{currentQuestion.question}</p>
          <div className='option_holder'> 
            {currentQuestion.options.map((optionData, index) => (
              <button
                className='option_btns'
                key={index}
                onClick={() => handleOptionClick(optionData)}
              >
                {optionData.option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
