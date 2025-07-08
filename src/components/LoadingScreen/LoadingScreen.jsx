import STYLES from './LoadingScreen.module.scss';

const LoadingScreen = () => (
  <div className={STYLES.SpinnerContainer}>
    <div className={STYLES.SpinnerContainer__Spinner} />
  </div>
);

export default LoadingScreen;
