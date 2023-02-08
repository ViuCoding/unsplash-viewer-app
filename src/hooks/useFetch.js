import { useEffect, useState } from "react";

export default function useFetch(URL) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  async function fetchPics() {
    setLoading(true);
    try {
      const res = await fetch(URL);
      
      if (!res.ok) {
        throw new Error("Unable to fetch data at the moment...");
      }

      const parsedFetch = await res.json();
      setData(prevData => prevData = parsedFetch);
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchPics();
  }, []);

  return { loading, data, error };
}
