import { useEffect, useState } from 'react';
import { createDelay } from '../utils/functions';

const useRandomCard = () => {
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCard = async () => {
      setLoading(true);
      setError(null);
      try {
        await createDelay(1000);

        const response = await fetch(
          'https://milloy.dev/api/lorcana/random-card'
        );

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        setCard(data);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchCard();
  }, []);

  return { card, loading, error };
};

export default useRandomCard;
