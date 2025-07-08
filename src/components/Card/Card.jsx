import STYLES from './Card.module.scss';
import useCardCanvas from '../../hooks/useCardCanvas';
import { useState, useMemo } from 'react';
import {
  obscureRegions,
  validQuestionsPerCardType,
} from '../../utils/constants';
import QuestionRouter from '../QuestionRouter';

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

  const handleAnswerQuestion = (isCorrect) => {
    if (isCorrect) {
      handleCorrectAnswer();
    } else {
      handleIncorrectAnswer();
    }
    setRevealed(true); // Reveal card after answering
  };

  return (
    <div className={STYLES.GameWrapper}>
      <canvas ref={canvasRef} className={STYLES.Card} />
      <QuestionRouter
        handleAnswerQuestion={handleAnswerQuestion}
        questionType={question}
        card={card}
      />
    </div>
  );
};

export default Card;
