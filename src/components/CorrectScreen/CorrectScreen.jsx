import STYLES from './CorrectScreen.module.scss';
const CorrectScreen = () => {
  return (
    <div className={STYLES.CorrectScreen}>
      <h1>Correct!</h1>
      <p>Nice one! Fetching a new card...</p>
    </div>
  );
};

export default CorrectScreen;
