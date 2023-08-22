import { useHttp } from "../hooks/useHttp";

const usePostServices = () => {
  const { request } = useHttp();

  // ВОЗВРАЩАЕТ ПОЛНЫЕ ОБЪЕКТЫ ИЗ БД
  const getAllPosts = async () => {
    const res = await request("http://localhost:3001/posts", "GET");
    return res.data;
  };

  // Добавить пост в бд
  const addPost = async (body) => {
    console.log(body);
    await request("http://localhost:3001/posts", "POST", body);
  };

  // const _transformData = (data) => {
  //   return {
  //     author: data.author,
  //     title: data.title,
  //     text: data.text,
  //   };
  // };

  return { getAllPosts, addPost };
};

export default usePostServices;
