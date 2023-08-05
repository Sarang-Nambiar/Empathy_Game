import React, { useState } from 'react';
import "../Stylesheets/styles.css"
const questions = [
  {
    question: 'What would you do?',
    options: ["Ohh ok, I don't mind.", "It's alright, you guys go ahead. I got work to do. "],
    correctOption: null,
  },
  {
    question: 'What would you do?',
    options: ["Convince parents and join John for tuition.", "Don't ask. Work harder."],
    correctOption: null,
  },
  {
    question: 'What would you do?',
    options: ["Convince parents and join John for tuition.", "Don't ask. Work harder."],
    correctOption: null,
  },
  // Add more questions here
];

const QuizApp = ({closeModal, setVideoIndex,vi}) => {
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

  const currentQuestion = questions[vi];

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
