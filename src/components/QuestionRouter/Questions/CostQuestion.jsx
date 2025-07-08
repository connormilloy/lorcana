import STYLES from '../QuestionStyles.module.scss';
import { useState } from 'react';
const CostQuestion = ({ cost, handleAnswerQuestion }) => {
  const [guess, setGuess] = useState(0);
  const handleGuess = (guess) => {
    const isCorrect = guess === cost;
    handleAnswerQuestion(isCorrect);
  };

  return (
    <div className={STYLES.CostQuestion}>
      <h2>What is the cost of this card?</h2>
      <div className="AnswerOptions">
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(Number(e.target.value))}
          className={STYLES.AnswerInput}
          placeholder="Enter your guess"
        />
        <button
          className={STYLES.AnswerButton}
          onClick={() => handleGuess(guess)}
        >
          Submit Guess
        </button>
      </div>
    </div>
  );
};

export default CostQuestion;
