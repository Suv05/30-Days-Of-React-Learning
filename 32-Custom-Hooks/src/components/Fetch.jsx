import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]); //initialize data state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json(); // responseData to json
        setData(responseData); // set data state with fetched data
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    // Cleanup function
    return () => {
      // Perform any cleanup if necessary
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
