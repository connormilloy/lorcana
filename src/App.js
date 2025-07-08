import STYLES from './App.module.scss';
import { useState } from 'react';

import Homepage from './components/Homepage';
import GameManager from './components/GameManager';
import GameOverScreen from './components/GameOverScreen';

const App = () => {
  const [shouldShowHomepage, setShouldShowHomepage] = useState(true);
  const [shouldShowGameOver, setShouldShowGameOver] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const startGame = () => {
    setShouldShowHomepage(false);
    setShouldShowGameOver(false);
    setFinalScore(0);
  };

  const endGame = (score) => {
    setFinalScore(score);
    setShouldShowGameOver(true);
  };

  if (shouldShowHomepage) {
    return (
      <div className={STYLES.App}>
        <Homepage onClickStart={startGame} />
      </div>
    );
  }

  if (shouldShowGameOver) {
    return (
      <div className={STYLES.App}>
        <GameOverScreen score={finalScore} onRestart={startGame} />
      </div>
    );
  }

  return (
    <div className={STYLES.App}>
      <GameManager onGameOver={endGame} />
    </div>
  );
};

export default App;
