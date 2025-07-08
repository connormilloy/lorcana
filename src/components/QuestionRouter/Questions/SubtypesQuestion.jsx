import STYLES from '../QuestionStyles.module.scss';

const SubtypesQuestion = ({ subtypes, handleAnswerQuestion }) => {
  const handleGuess = (guess) => {
    const isCorrect = subtypes.includes(guess);
    handleAnswerQuestion(isCorrect);
  };

  return (
    <div className={STYLES.SubtypesQuestion}>
      <h2>Storyborn, Floodborn or Dreamborn?</h2>
      <div className={STYLES.AnswerOptions}>
        <button
          className={STYLES.AnswerButton}
          onClick={() => handleGuess('storyborn')}
        >
          Storyborn
        </button>
        <button
          className={STYLES.AnswerButton}
          onClick={() => handleGuess('floodborn')}
        >
          Floodborn
        </button>
        <button
          className={STYLES.AnswerButton}
          onClick={() => handleGuess('dreamborn')}
        >
          Dreamborn
        </button>
      </div>
    </div>
  );
};

export default SubtypesQuestion;
