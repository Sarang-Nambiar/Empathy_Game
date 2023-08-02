import React, { useState } from 'react';
import "../Stylesheets/styles.css"
const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London'],
    correctOption: 'Paris',
  },
  {
    question: 'What is the largest mammal?',
    options: ['Elephant', 'Blue Whale'],
    correctOption: 'Blue Whale',
  },
  // Add more questions here
];

const QuizApp = ({closeModal, setVideoIndex}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const calcVideoIndex = (optionIndex) => {
    return (currentQuestionIndex * 2 + optionIndex) % 4; // currently maxed out at 4 because there are only 4 videos
  }

  const handleOptionClick = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } 

    const optionIndex = currentQuestion.options.indexOf(selectedOption);

    setVideoIndex(calcVideoIndex(optionIndex));

    closeModal();
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h2>Quiz App</h2>
      {currentQuestion && (
        <div>
          <p>{currentQuestion.question}</p>
          <div className='option_holder'> 
            {currentQuestion.options.map((option, index) => (
              <button
                className='option_btns'
                key={index}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
