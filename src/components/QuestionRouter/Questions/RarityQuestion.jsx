import STYLES from '../QuestionStyles.module.scss';
const RarityQuestion = ({ rarity, handleAnswerQuestion }) => {
  const handleGuess = (guess) => {
    const isCorrect = guess.toLowerCase() === rarity.toLowerCase();
    handleAnswerQuestion(isCorrect);
  };

  return (
    <div className={STYLES.RarityQuestion}>
      <h2>What's the rarity of this card?</h2>
      <div className={STYLES.AnswerOptions}>
        <button
          className={STYLES.AnswerButton}
          onClick={() => handleGuess('common')}
        >
          Common
        </button>
        <button
          className={STYLES.AnswerButton}
          onClick={() => handleGuess('uncommon')}
        >
          Uncommon
        </button>
        <button
          className={STYLES.AnswerButton}
          onClick={() => handleGuess('rare')}
        >
          Rare
        </button>
        <button
          className={STYLES.AnswerButton}
          onClick={() => handleGuess('super rare')}
        >
          Super Rare
        </button>
        <button
          className={STYLES.AnswerButton}
          onClick={() => handleGuess('legendary')}
        >
          Legendary
        </button>
      </div>
    </div>
  );
};

export default RarityQuestion;
