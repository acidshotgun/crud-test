import axios from "axios";

export const useHttp = () => {
  const request = async (url, method = "GET") => {
    try {
      let response;

      switch (method) {
        default:
          response = await axios.get(url);
          break;
        case "POST":
          response = await axios.post(url);
          break;
        case "PUT":
          response = await axios.put(url);
          break;
        case "DELETE":
          response = await axios.delete(url);
          break;
      }

      if (response.status !== 200) {
        throw new Error(`Could not fetch ${url}, status ${response.status}`);
      }

      return response;
    } catch (error) {
      throw error;
    }
  };

  return { request };
};
