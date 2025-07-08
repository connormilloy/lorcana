import STYLES from './Homepage.module.scss';
const Homepage = ({ onClickStart }) => {
  return (
    <div className={STYLES.Homepage}>
      <h1>What's that Glimmer?</h1>
      <p>How well do you know your Lorcana cards? Click start to find out!</p>
      <button className={STYLES.StartButton} onClick={onClickStart}>
        Start Game
      </button>
    </div>
  );
};

export default Homepage;
