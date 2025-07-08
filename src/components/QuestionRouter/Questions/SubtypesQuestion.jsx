import STYLES from './styles/MultipleChoiceQuestion.module.scss';
import GENERIC from './styles/Generic.module.scss';

const SubtypesQuestion = ({ subtypes, handleAnswerQuestion }) => {
  const handleGuess = (guess) => {
    const isCorrect = subtypes.includes(guess);
    handleAnswerQuestion(isCorrect);
  };

  return (
    <div className={STYLES.MultipleChoiceQuestion}>
      <h2 className={GENERIC.Question}>
        <span className={GENERIC.Highlight}>Storyborn</span>,{' '}
        <span className={GENERIC.Highlight}>Floodborn</span> or{' '}
        <span className={GENERIC.Highlight}>Dreamborn</span>?
      </h2>
      <div className={STYLES.MultipleChoiceQuestion__TextAnswerOptions}>
        <button
          className={STYLES.MultipleChoiceQuestion__TextAnswerButton}
          onClick={() => handleGuess('storyborn')}
        >
          Storyborn
        </button>
        <button
          className={STYLES.MultipleChoiceQuestion__TextAnswerButton}
          onClick={() => handleGuess('floodborn')}
        >
          Floodborn
        </button>
        <button
          className={STYLES.MultipleChoiceQuestion__TextAnswerButton}
          onClick={() => handleGuess('dreamborn')}
        >
          Dreamborn
        </button>
      </div>
    </div>
  );
};

export default SubtypesQuestion;
