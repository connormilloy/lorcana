import STYLES from './App.module.scss';
import useRandomCard from './hooks/useRandomCard';
import Card from './components/Card';
import { useState } from 'react';

const App = () => {
  const [firstLoad, setFirstLoad] = useState(true);
  const [gameActive, setGameActive] = useState(false);
  const { card, loading, error } = useRandomCard();

  if (firstLoad) {
    return (
      <div className={STYLES.App}>
        <h1>What's that Glimmer?</h1>
        <p>How well do you know your Lorcana cards? Click start to find out.</p>
        <button
          className={STYLES.StartButton}
          onClick={() => {
            setFirstLoad(false);
            setGameActive(true);
          }}
        >
          Start Game
        </button>
      </div>
    );
  }

  if (loading)
    return (
      <div className={STYLES.App}>
        <div className={STYLES.SpinnerContainer}>
          <div className={STYLES.SpinnerContainer__Spinner} />
        </div>
      </div>
    );

  if (error) {
    return (
      <div className={STYLES.App}>
        <h1>Something went wrong :(</h1>
      </div>
    );
  }

  return (
    <div className={STYLES.App}>
      <Card card={card} />
    </div>
  );
};

export default App;
