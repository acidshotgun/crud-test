import { FC } from "react";
import { NavLink } from "react-router-dom";
// Types
import IPost from "../../types/post";
// Styles
import styles from "./postItem.module.scss";

const PostItem: FC<IPost> = ({ id, author, title, text, createdAt }) => {
  return (
    <div className={styles.list}>
      <div className={styles.subtitle}>
        <div className={styles.title}>{title}</div>
        <div className={styles.author}>
          Автор: <span>{author}</span>
        </div>
        <button>
          <NavLink to={`/posts/${id}`}>Перейти к посту</NavLink>
        </button>
      </div>

      <div className={styles.content}>
        <div>{text}</div>
      </div>
      <p>{createdAt}</p>
    </div>
  );
};

export default PostItem;
