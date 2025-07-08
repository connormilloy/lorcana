import STYLES from './styles/MultipleChoiceQuestion.module.scss';
import GENERIC from './styles/Generic.module.scss';

import common from '../../../images/rarity/common.png';
import uncommon from '../../../images/rarity/uncommon.png';
import rare from '../../../images/rarity/rare.png';
import superrare from '../../../images/rarity/superrare.png';
import legendary from '../../../images/rarity/legendary.png';

const RarityQuestion = ({ rarity, handleAnswerQuestion }) => {
  const handleGuess = (guess) => {
    const isCorrect = guess.toLowerCase() === rarity.toLowerCase();
    handleAnswerQuestion(isCorrect);
  };

  return (
    <div className={STYLES.MultipleChoiceQuestion}>
      <h2>
        What's the <span className={GENERIC.Highlight}>rarity</span> of this
        card?
      </h2>
      <div className={STYLES.MultipleChoiceQuestion__AnswerOptions}>
        <button
          className={STYLES.MultipleChoiceQuestion__AnswerButton}
          onClick={() => handleGuess('common')}
        >
          <img src={common} alt="Common" />
        </button>
        <button
          className={STYLES.MultipleChoiceQuestion__AnswerButton}
          onClick={() => handleGuess('uncommon')}
        >
          <img src={uncommon} alt="Uncommon" />
        </button>
        <button
          className={STYLES.MultipleChoiceQuestion__AnswerButton}
          onClick={() => handleGuess('rare')}
        >
          <img src={rare} alt="Rare" />
        </button>
        <button
          className={STYLES.MultipleChoiceQuestion__AnswerButton}
          onClick={() => handleGuess('super rare')}
        >
          <img src={superrare} alt="Super Rare" />
        </button>
        <button
          className={STYLES.MultipleChoiceQuestion__AnswerButton}
          onClick={() => handleGuess('legendary')}
        >
          <img src={legendary} alt="Legendary" />
        </button>
      </div>
    </div>
  );
};

export default RarityQuestion;
