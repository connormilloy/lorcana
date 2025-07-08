import STYLES from './App.module.scss';
import useRandomCard from './hooks/useRandomCard';
import { useState } from 'react';

import Homepage from './components/Homepage';
import Card from './components/Card';

const App = () => {
  const [shouldShowHomepage, setShouldShowHomepage] = useState(true);
  const [gameActive, setGameActive] = useState(false);
  const { card, loading, error } = useRandomCard();

  if (shouldShowHomepage) {
    return (
      <div className={STYLES.App}>
        <Homepage onClickStart={() => setShouldShowHomepage(false)} />;
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
