import STYLES from './styles/NumericalQuestion.module.scss';
import GENERIC from './styles/Generic.module.scss';

import { useState } from 'react';
const CostQuestion = ({ cost, handleAnswerQuestion }) => {
  const [guess, setGuess] = useState(0);
  const handleGuess = (guess) => {
    const isCorrect = guess === cost;
    handleAnswerQuestion(isCorrect);
  };

  return (
    <div className={STYLES.NumericalQuestion}>
      <h2 className={GENERIC.Question}>
        What's the <span className={GENERIC.Highlight}>ink cost</span> of this
        card?
      </h2>
      <div className="AnswerOptions">
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(Number(e.target.value))}
          className={STYLES.NumericalQuestion__AnswerInput}
          placeholder="Enter your guess"
        />
        <button
          className={STYLES.NumericalQuestion__AnswerButton}
          onClick={() => handleGuess(guess)}
        >
          Submit Guess
        </button>
      </div>
    </div>
  );
};

export default CostQuestion;
