import STYLES from './Card.module.scss';
import useCardCanvas from '../../hooks/useCardCanvas';
import { useState } from 'react';
import {
  obscureRegions,
  validQuestionsPerCardType,
} from '../../utils/constants';
import QuestionRouter from '../QuestionRouter';

const Card = ({ card }) => {
  const [revealed, setRevealed] = useState(false);
  const validQuestions =
    validQuestionsPerCardType[card.type.toLowerCase()] || [];
  const question =
    validQuestions[Math.floor(Math.random() * validQuestions.length)];

  const canvasRef = useCardCanvas(card, {
    obscure: !revealed, // initially obscured
    region: obscureRegions[question],
  });

  const handleAnswerQuestion = (isCorrect) => {
    if (isCorrect) {
      alert('Nice job! You guessed correctly!');
    } else {
      alert(`Nope!`);
    }
    setRevealed(true); // Reveal card after answering
  };

  return (
    <div>
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
