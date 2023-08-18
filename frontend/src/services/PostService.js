import { useHttp } from "../hooks/useHttp";

const usePostServices = () => {
  const { request } = useHttp();

  // ВОЗВРАЩАЕТ ПОЛНЫЕ ОБЪЕКТЫ ИЗ БД
  const getAllPosts = async () => {
    const res = await request("http://localhost:3001/posts", "GET");
    return res.data;
    // return res.data.map(_transformData);
  };

  // БУДЕМ ВЫТАСКИВАТЬ НУЖНЫЕ ДАННЫЕ
  // РАЗДЕЛЕННЫЕ ПО НАИМЕНОВАНИЮ
  // + Дата
  // + ID
  const _transformData = (data) => {
    return {
      author: data.author,
      title: data.title,
      text: data.text,
    };
  };

  return { getAllPosts };
};

export default usePostServices;
