import { useState } from 'react';
import useRandomCard from '../../hooks/useRandomCard';
import Card from '../Card';
import LoadingScreen from '../LoadingScreen';
import ErrorScreen from '../ErrorScreen';
import CorrectScreen from '../CorrectScreen';
import { createDelay } from '../../utils/functions';

const GameManager = ({ onGameOver }) => {
  const [score, setScore] = useState(0);
  const [showCorrect, setShowCorrect] = useState(false);
  const { card, loading, error, refetch } = useRandomCard();

  const handleCorrectAnswer = () => {
    setScore((prev) => prev + 1);
    setShowCorrect(true);
    createDelay(1000).then(() => {
      refetch();
      setShowCorrect(false);
    });
  };

  const handleIncorrectAnswer = () => {
    onGameOver(score);
  };

  if (loading) return <LoadingScreen />;
  if (error) return <ErrorScreen />;
  if (showCorrect) return <CorrectScreen score />;

  return (
    <Card
      card={card}
      handleCorrectAnswer={handleCorrectAnswer}
      handleIncorrectAnswer={handleIncorrectAnswer}
    />
  );
};

export default GameManager;
