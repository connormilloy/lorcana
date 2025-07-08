import STYLES from './Card.module.scss';
import useCardCanvas from '../../hooks/useCardCanvas';
import { useState, useMemo } from 'react';
import {
  obscureRegions,
  validQuestionsPerCardType,
} from '../../utils/constants';
import QuestionRouter from '../QuestionRouter';

import { createDelay } from '../../utils/functions';

const Card = ({ card, handleCorrectAnswer, handleIncorrectAnswer }) => {
  const [revealed, setRevealed] = useState(false);
  const validQuestions =
    validQuestionsPerCardType[card.type.toLowerCase()] || [];
  const question = useMemo(() => {
    return validQuestions[Math.floor(Math.random() * validQuestions.length)];
  }, [card]);

  const canvasRef = useCardCanvas(card, {
    obscure: !revealed, // initially obscured
    region: obscureRegions[question],
  });

  const revealCard = () => {
    setRevealed(true);
  };

  const handleAnswerQuestion = (isCorrect) => {
    if (isCorrect) {
      revealCard();
      createDelay(1500).then(() => handleCorrectAnswer());
    } else {
      revealCard();
      createDelay(1500).then(() => handleIncorrectAnswer());
    }
  };

  return (
    <div className={STYLES.GameWrapper}>
      <canvas ref={canvasRef} className={STYLES.Card} />
      {!revealed && (
        <QuestionRouter
          handleAnswerQuestion={handleAnswerQuestion}
          questionType={question}
          card={card}
        />
      )}
    </div>
  );
};

export default Card;
