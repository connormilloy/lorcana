import './App.css';
import useRandomCard from './hooks/useRandomCard';
import Card from './components/Card';

const App = () => {
  const { card, loading, error } = useRandomCard();
  if (loading) return <div className="App">Loading...</div>;

  console.log(card);
  return (
    <div className="App">
      <Card card={card} />
    </div>
  );
};

export default App;
