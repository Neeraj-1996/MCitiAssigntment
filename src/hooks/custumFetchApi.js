import { useState, useEffect } from 'react';
import axios from 'axios';
const custumFetchApi = (UrlEndPoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //iife
   (async () => {
      try {
        const response = await axios.get(UrlEndPoint);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();

  }, [UrlEndPoint]);

  return { data, loading, error };
};

export default custumFetchApi;
