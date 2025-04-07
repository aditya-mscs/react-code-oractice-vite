import { useEffect, useState } from "react";

const cacheWithExpiry = new Map();
//efficient key management, fast lookups, and method-rich interface.
//Unlike plain objects, Map supports non-string keys and maintains insertion order, making it perfect for caching scenarios.
//data is stored in the browser’s memory (RAM).
//Once you refresh or close the browser, the data is lost.

export const useCustomApiCacheWithExpiry = (url: string, expiry = 60000) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);

      const cacheEntry = cacheWithExpiry.get(url);
      const isExpired = cacheEntry && (Date.now() - cacheEntry.timestamp > expiry);

      if (cacheEntry && !isExpired) {
        console.log('Serving from cache with expiry:', url);
        setData(cacheEntry.data);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch data');
        const result = await response.json();

        cacheWithExpiry.set(url, { data: result, timestamp: Date.now() });
        if (isMounted) {
          setData(result);
          setLoading(false);
        }
      } catch (err: unknown) {
        if (isMounted) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError(String(err));
          }
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url, expiry]);

  return { data, error, loading };
};
