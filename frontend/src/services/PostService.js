import { useHttp } from "../hooks/useHttp";

const usePostServices = () => {
  const { request, loading, error } = useHttp();

  // ВОЗВРАЩАЕТ ПОЛНЫЕ ОБЪЕКТЫ ИЗ БД
  const getAllPosts = async () => {
    const res = await request("http://localhost:3001/posts", "GET");
    return res.data;
  };

  // Получить один пост
  const getOnePost = async (postId) => {
    const res = await request(`http://localhost:3001/posts/${postId}`, "GET");
    return res.data;
  };

  // Добавить пост в бд
  const addPost = async (body) => {
    await request("http://localhost:3001/posts", "POST", body);
  };

  // Изменить пост
  const editPost = async (postId, body) => {
    await request(`http://localhost:3001/posts/${postId}`, "PUT", body);
  };

  // Удалить пост
  const deletePost = async (postId) => {
    await request(`http://localhost:3001/posts/${postId}`, "DELETE");
  };

  return {
    getAllPosts,
    getOnePost,
    addPost,
    editPost,
    deletePost,
    loading,
    error,
  };
};

export default usePostServices;
