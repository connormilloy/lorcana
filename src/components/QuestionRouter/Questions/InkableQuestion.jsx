import STYLES from '../QuestionStyles.module.scss';
const InkableQuestion = ({ inkable, handleAnswerQuestion }) => {
  const handleGuess = (guess) => {
    const isCorrect = guess === inkable;
    handleAnswerQuestion(isCorrect);
  };

  return (
    <div className={STYLES.InkableQuestion}>
      <h2>Is this card inkable?</h2>
      <div className={STYLES.AnswerOptions}>
        <button
          className={STYLES.AnswerButton}
          onClick={() => handleGuess(true)}
        >
          Yes
        </button>
        <button
          className={STYLES.AnswerButton}
          onClick={() => handleGuess(false)}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default InkableQuestion;
