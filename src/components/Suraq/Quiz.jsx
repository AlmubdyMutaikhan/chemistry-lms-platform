import { useState } from 'react';
import './Suraq.css';

export default function Suraq({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
  };

  const checkAnswer = () => {
    setShowAnswer(true);
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    setCurrentQuestion((prev) => prev + 1);
  };

  const current = questions[currentQuestion];

  return (
    <div className="quiz-container">
      <h2>🧪 Тест тапсырмасы {currentQuestion + 1} / {questions.length}</h2>
      <p className="question-text">{current.question}</p>
      <div className="options">
        {current.options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${
              showAnswer
                ? index === current.answer
                  ? 'correct'
                  : index === selectedOption
                  ? 'incorrect'
                  : ''
                : selectedOption === index
                ? 'selected'
                : ''
            }`}
            onClick={() => handleOptionSelect(index)}
            disabled={showAnswer}
          >
            {option}
          </button>
        ))}
      </div>

      {!showAnswer && selectedOption !== null && (
        <button className="submit-btn" onClick={checkAnswer}>
          Тексеру
        </button>
      )}

      {showAnswer && (
        <button
          className="next-btn"
          onClick={nextQuestion}
          disabled={currentQuestion + 1 === questions.length}
        >
          Келесі сұрақ
        </button>
      )}

      {showAnswer && selectedOption === current.answer && (
        <p className="result correct-answer">✅ Дұрыс жауап!</p>
      )}
      {showAnswer && selectedOption !== current.answer && (
        <p className="result incorrect-answer">
          ❌ Қате. Дұрыс жауап: {current.options[current.answer]}
        </p>
      )}

      {currentQuestion + 1 === questions.length && showAnswer && (
        <p className="quiz-end">🎉 Тест аяқталды!</p>
      )}
    </div>
  );
}
