import { useEffect, useState } from "react";

const useFetch = (url, userData = null) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    /*
    If we got userData, that means it is a fetch call for POST request , requesting for result.
    Else it would be call for GET request, requesting for Mock Exam
    */

    const fetchData = async () => {
      // POST call for Fetching User Result
      if (userData) {
        setIsPending(true);
        try {
          const response = await fetch(url, {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(data),
          });
          const json = await response.json();
          setIsPending(false);
          setData(json);
          setError(null);
        } catch (err) {
          setError(`${error} Could Not Fetch Data`);
          setIsPending(false);
        }
      } else {
        // Get call for fetching Mock Exam
        setIsPending(true);
        try {
          const response = await fetch(url);
          const json = await response.json();
          setIsPending(false);
          setData(json.data);
          setError(null);
        } catch (err) {
          setError(`${error} Could Not Fetch Data`);
          setIsPending(false);
        }
      }
    };

    fetchData();
  }, []);
  return { data, isPending, error };
};

export {useFetch}