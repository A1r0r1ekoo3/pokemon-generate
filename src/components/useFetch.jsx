import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsPending(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
        setIsPending(false);
        setError(null);
      } catch (error) {
        setIsPending(false);
        setError(error.message);
        setData(null);
      }
    }
    getData();
  }, [url]);
  return { data, isPending, error };
}
