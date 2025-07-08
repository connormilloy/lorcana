import STYLES from '../QuestionStyles.module.scss';
import { useState } from 'react';

const LoreQuestion = ({ lore, handleAnswerQuestion }) => {
  const [guess, setGuess] = useState(0);
  const handleGuess = (guess) => {
    const isCorrect = guess === lore;
    handleAnswerQuestion(isCorrect);
  };

  return (
    <div className={STYLES.LoreQuestion}>
      <h2>How much lore does this card quest for?</h2>
      <div className="AnswerOptions">
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(Number(e.target.value))}
          className={STYLES.AnswerInput}
          placeholder="Enter lore guess"
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

export default LoreQuestion;
