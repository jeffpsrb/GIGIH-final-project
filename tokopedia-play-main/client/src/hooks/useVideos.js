import { useState, useEffect } from 'react';
import { useSearchState } from '../context/SearchProvider';

function useVideos() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { searchQuery } = useSearchState();

  useEffect(() => {
    (async function () {
      try {
        let endpoint = `${apiUrl}/api/videos?`;
        if (searchQuery) {
          const params = new URLSearchParams({ title: searchQuery });
          endpoint += params;
        }
        setLoading(true);
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [searchQuery]);

  return { data, loading, error };
}

export default useVideos;
