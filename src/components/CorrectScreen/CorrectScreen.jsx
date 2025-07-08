import STYLES from './CorrectScreen.module.scss';
const CorrectScreen = ({ score }) => {
  return (
    <div className={STYLES.CorrectScreen}>
      <h1>Correct!</h1>
      <p>Well done! You got it right.</p>
    </div>
  );
};

export default CorrectScreen;
