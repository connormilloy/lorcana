import STYLES from './App.module.scss';
import useRandomCard from './hooks/useRandomCard';
import Card from './components/Card';

const App = () => {
  const { card, loading, error } = useRandomCard();
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

  console.log(card);
  return (
    <div className={STYLES.App}>
      <Card card={card} />
    </div>
  );
};

export default App;
