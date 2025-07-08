import STYLES from './styles/NumericalQuestion.module.scss';
import GENERIC from './styles/Generic.module.scss';
import { useState, useMemo } from 'react';

const StatsQuestion = ({ stats, handleAnswerQuestion }) => {
  const isStrengthQuestion = Math.random() < 0.5;

  const statType = useMemo(() => {
    return isStrengthQuestion ? 'strength' : 'willpower';
  }, [stats]);

  const correctAnswer = stats[statType];
  const [guess, setGuess] = useState(0);
  const handleGuess = (guess) => {
    const isCorrect = guess === correctAnswer;
    handleAnswerQuestion(isCorrect);
  };

  return (
    <div className={STYLES.NumericalQuestion}>
      <h2>
        What's the <span className={GENERIC.Highlight}>{statType}</span> of this
        card?
      </h2>
      <div className={STYLES.NumericalQuestion__AnswerOptions}>
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(Number(e.target.value))}
          className={STYLES.NumericalQuestion__AnswerInput}
          placeholder={`Enter ${statType} guess`}
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

export default StatsQuestion;
