import { useState, useCallback } from "react";
import axios from "axios";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useCallback() - оптимизирует запрос меомизируя его
  // Если входящие параметры не меняются - то запроса при ререндере не будет.
  const request = useCallback(async (url, method, body = null) => {
    setLoading(true);

    try {
      let response;

      switch (method) {
        case "GET":
          response = await axios.get(url);
          break;
        case "POST":
          response = await axios.post(url, body);
          break;
        case "PUT":
          response = await axios.put(url, body);
          break;
        case "DELETE":
          setLoading(false);
          response = await axios.delete(url);
          break;
        default:
          throw new Error(`Unsupported request method: ${method}`);
      }

      if (response.status !== 200) {
        throw new Error(`Could not fetch ${url}, status ${response.status}`);
      }

      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      setError(error.message);
      throw error;
    }
  }, []);

  return { request, loading, error };
};
