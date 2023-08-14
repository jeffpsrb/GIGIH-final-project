import { useState, useEffect } from 'react';

function useVideo(videoId) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        const endpoint = `${apiUrl}/api/videos/${videoId}`;
        setLoading(true);
        const response = await fetch(endpoint);
        if (!response.ok) {
          const {
            error: { message },
          } = await response.json();
          throw new Error(message);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
        console.error(`${error.name}:`, error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [videoId]);

  return { data, loading, error };
}

export default useVideo;
