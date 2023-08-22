import axios from "axios";

export const useHttp = () => {
  const request = async (url, method, body = null) => {
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
          response = await axios.delete(url);
          break;
        default:
          new Error(`Unsupported request method: ${method}`);
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
