import { FC, useState, useEffect } from "react";
import usePostServices from "../../services/PostService";
// Components
import PostItem from "../../components/post-item/PostItem";
// Types
import IPost from "../../types/post";
// Styles
import styles from "./posts.module.scss";

const Posts: FC = () => {
  const { getAllPosts, deletePost, loading, error } = usePostServices();
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    onRequest();
  }, []);

  // Запрос
  const onRequest = () => {
    getAllPosts().then((res: IPost[]) => onPostsLoaded(res));
  };

  // Когда посты загружены в стейт.
  const onPostsLoaded = (newPosts: IPost[]) => {
    setPosts((posts: IPost[]) => [...posts, ...newPosts]);
  };

  // Удаление поста из стейта
  // + запрос на удаления из БД (который уже не видим)
  // Не будет рендерить загрузку при каждом удалении поста
  const onPostDelete = (id: string | undefined) => {
    setPosts((posts) => posts.filter((item) => item._id !== id));
    deletePost(id);
  };

  console.log("render");

  return (
    <>
      <h1>POSTS</h1>
      <div>
        <div>
          {loading ? (
            <h1>Загрузка...</h1>
          ) : error ? (
            <h1>Ошбка!</h1>
          ) : (
            <div className={styles.list_wrap}>
              {posts.map((post) => {
                return (
                  <PostItem
                    key={post._id}
                    _id={post._id}
                    author={post.author}
                    title={post.title}
                    text={post.text}
                    createdAt={post.createdAt}
                    deletePost={() => onPostDelete(post._id)}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Posts;
