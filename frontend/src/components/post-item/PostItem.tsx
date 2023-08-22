import { FC, useContext } from "react";
// Types
import IPost from "../../types/post";
// Styles
import styles from "./postItem.module.scss";

const PostItem: FC<IPost> = ({ author, title, text, createdAt }) => {
  return (
    <li className={styles.list}>
      <div className={styles.subtitle}>
        <div className={styles.title}>{title}</div>
        <div className={styles.author}>
          Автор: <span>{author}</span>
        </div>
        <button>
          <a href="#">Перейти к посту</a>
        </button>
      </div>

      <div className={styles.content}>
        <div>{text}</div>
      </div>
      <p>{createdAt}</p>
    </li>
  );
};

export default PostItem;
