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
    <div className="StatsQuestion">
      <h2>What is the {statType} of this card?</h2>
      <div className="AnswerOptions">
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(Number(e.target.value))}
          className="AnswerInput"
          placeholder={`Enter ${statType} guess`}
        />
        <button className="AnswerButton" onClick={() => handleGuess(guess)}>
          Submit Guess
        </button>
      </div>
    </div>
  );
};

export default StatsQuestion;
