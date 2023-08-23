import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import usePostServices from "../../services/PostService";

import IPost from "../../types/post";

import PostItem from "../../components/post-item/PostItem";

import styles from "./onePost.module.scss";

const OnePost = () => {
  const { getOnePost } = usePostServices();
  const { postId } = useParams();

  const [onePost, setOnePost] = useState<IPost>({
    author: "",
    title: "",
    text: "",
    createdAt: "",
  });

  useEffect(() => {
    onRequest();
  }, [postId]);

  const onRequest = () => {
    getOnePost(postId).then((res) => onPostLoaded(res));
  };

  const onPostLoaded = (post: IPost) => {
    setOnePost(post);
  };

  return (
    <div className={styles.container}>
      <div className={styles.postItem}>
        <PostItem
          author={onePost.author}
          title={onePost.title}
          text={onePost.text}
          createdAt={onePost.createdAt}
        />
      </div>
    </div>
  );
};

export default OnePost;
