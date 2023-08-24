import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import usePostServices from "../../services/PostService";

import IPost from "../../types/post";

import PostItem from "../../components/post-item/PostItem";

import styles from "./onePost.module.scss";

const OnePost = () => {
  const { getOnePost, loading, error } = usePostServices();
  const { postId } = useParams();
  const [onePost, setOnePost] = useState<IPost | null>(null);

  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = () => {
    getOnePost(postId).then((res: IPost) => onPostLoaded(res));
  };

  const onPostLoaded = (post: IPost) => {
    setOnePost(post);
  };

  return (
    <div className={styles.container}>
      <div className={styles.postItem}>
        {error ? (
          <h1>Ошибка!</h1>
        ) : !onePost && loading ? (
          <h1>Загрузка...</h1>
        ) : (
          onePost && (
            <PostItem
              author={onePost.author}
              title={onePost.title}
              text={onePost.text}
              createdAt={onePost.createdAt}
            />
          )
        )}
      </div>
    </div>
  );
};

export default OnePost;
