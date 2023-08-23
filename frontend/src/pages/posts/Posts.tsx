import { FC, useState, useEffect } from "react";
import usePostServices from "../../services/PostService";
// Components
import PostItem from "../../components/post-item/PostItem";
// Types
import IPost from "../../types/post";
// Styles
import styles from "./posts.module.scss";

const Posts: FC = () => {
  const { getAllPosts } = usePostServices();
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

  console.log("render");

  return (
    <>
      <h1>POSTS</h1>
      <div>
        <div>
          <div className={styles.list_wrap}>
            {posts.map((post) => {
              return (
                <PostItem
                  key={post._id}
                  id={post._id}
                  author={post.author}
                  title={post.title}
                  text={post.text}
                  createdAt={post.createdAt}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
