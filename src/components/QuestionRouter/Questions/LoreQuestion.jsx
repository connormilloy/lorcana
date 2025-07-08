import STYLES from './styles/NumericalQuestion.module.scss';
import GENERIC from './styles/Generic.module.scss';
import { useState } from 'react';

const LoreQuestion = ({ lore, handleAnswerQuestion }) => {
  const [guess, setGuess] = useState(0);
  const handleGuess = (guess) => {
    const isCorrect = guess === lore;
    handleAnswerQuestion(isCorrect);
  };

  return (
    <div className={STYLES.NumericalQuestion}>
      <h2 className={GENERIC.Question}>
        How much <span className={GENERIC.Highlight}>lore</span> does this quest
        for?
      </h2>
      <div className={STYLES.NumericalQuestion__AnswerOptions}>
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(Number(e.target.value))}
          className={STYLES.NumericalQuestion__AnswerInput}
          placeholder="Enter lore guess"
        />
        <button
          className={STYLES.NumericalQuestion__AnswerButton}
          onClick={() => handleGuess(guess)}
        >
          Guess
        </button>
      </div>
    </div>
  );
};

export default LoreQuestion;
