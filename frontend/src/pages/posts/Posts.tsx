import { FC, useState, useEffect } from "react";
import usePostServices from "../../services/PostService";

import styles from "./posts.module.scss";

// Типизация объектов в стейте (массив объектов)
interface IPosts {
  _id: string;
  author: string;
  title: string;
  text: string;
  createdAt: string;
}

const Posts: FC = () => {
  const { getAllPosts } = usePostServices();
  const [posts, setPosts] = useState<IPosts[]>([]);

  useEffect(() => {
    onRequest();
  }, []);

  // Запрос
  const onRequest = () => {
    getAllPosts().then((res: IPosts[]) => onPostsLoaded(res));
  };

  // Когда посты загружены в стейт.
  const onPostsLoaded = (newPosts: IPosts[]) => {
    setPosts((posts: IPosts[]) => [...posts, ...newPosts]);
  };

  return (
    <>
      <h1>POSTS</h1>
      <div className={styles.conteiner}>
        <div>
          <ul className={styles.list_wrap}>
            {posts.map((post) => {
              return (
                <li key={post._id} className={styles.list}>
                  <div className={styles.subtitle}>
                    <div className={styles.title}>{post.title}</div>
                    <div className={styles.author}>
                      Автор: <span>{post.author}</span>
                    </div>
                    <button>
                      <a href="#">Перейти к посту</a>
                    </button>
                  </div>

                  <div className={styles.content}>
                    <div>{post.text}</div>
                  </div>
                  <p>{post.createdAt}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Posts;
