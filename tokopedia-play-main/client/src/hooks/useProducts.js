import { useState, useEffect } from 'react';

function useProducts(videoId) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        const endpoint = `${apiUrl}/api/videos/${videoId}/products`;
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
  }, [videoId]);

  return { data, loading, error };
}

export default useProducts;
