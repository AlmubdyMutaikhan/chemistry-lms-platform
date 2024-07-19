import React, { useState } from 'react';
import './QuizzComponent.css'; // Ensure your CSS is updated for these features

const QuizComponent = ({ quizData }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (option, index) => {
    const correctAnswer = quizData[currentQuestionIndex].correctAnswer;
    setSelectedAnswer(index);
    // Check if answer is correct
    if (option === correctAnswer) {
      setScore(score + 1); // Increment score if correct
    }

    setTimeout(() => {
      if (currentQuestionIndex < quizData.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 500); // Delay for 500 ms to show selection feedback
  };

  if (showResult) {
    return (
      <div className="results">
        <h1>Квиз бітті</h1>
        <p>Сіздің бағаңыз {score}/{quizData.length}.</p>
      </div>
    );
  }

  const question = quizData[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <div className="question-section">
        <h2>{question.question}</h2>
        <ul className="answers-list">
          {question.options.map((option, index) => (
            <li key={index}
                className={`answer ${selectedAnswer === index ? (option === question.correctAnswer ? 'correct' : 'incorrect') : ''}`}
                onClick={() => handleAnswerSelect(option, index)}>
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuizComponent;
