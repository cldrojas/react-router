import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, SetData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => SetData(data))
      .catch((e) => setError(`Error en el servidor ${e}`))
      .finally(() => setLoading(false));
  }, [url]);
  return { data, error, loading };
};
