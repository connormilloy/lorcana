import STYLES from './styles/InkableQuestion.module.scss';
import GENERIC from './styles/Generic.module.scss';
const InkableQuestion = ({ inkable, handleAnswerQuestion }) => {
  const handleGuess = (guess) => {
    const isCorrect = guess === inkable;
    handleAnswerQuestion(isCorrect);
  };

  return (
    <div className={STYLES.InkableQuestion}>
      <h2>
        Is this card <span className={GENERIC.Highlight}>inkable</span>?
      </h2>
      <div className={STYLES.InkableQuestion__AnswerOptions}>
        <button
          className={STYLES.InkableQuestion__AnswerButton}
          onClick={() => handleGuess(true)}
        >
          ✅
        </button>
        <button
          className={STYLES.InkableQuestion__AnswerButton}
          onClick={() => handleGuess(false)}
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default InkableQuestion;
