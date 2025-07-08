import STYLES from './GameOverScreen.module.scss';

const GameOverScreen = ({ score, onRestart }) => {
  return (
    <div className={STYLES.GameOverScreen}>
      <h1>Game Over!</h1>
      <p>You scored: {score}</p>
      <button onClick={onRestart}>Play Again</button>
    </div>
  );
};

export default GameOverScreen;
