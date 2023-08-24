import { FC } from "react";
import { NavLink } from "react-router-dom";
// Types
import IPost from "../../types/post";
// Styles
import styles from "./postItem.module.scss";

const PostItem: FC<IPost> = ({
  _id,
  author,
  title,
  text,
  createdAt,
  deletePost,
}) => {
  return (
    <div className={styles.list}>
      <div className={styles.subtitle}>
        <div className={styles.description}>
          <div className={styles.title}>{title}</div>
          <div className={styles.author}>
            Автор: <span>{author}</span>
          </div>
        </div>
        <div className={styles.buttons}>
          <button onClick={deletePost}>Удалить</button>
          <button>
            <NavLink to={`/posts/${_id}`}>Перейти к посту</NavLink>
          </button>
        </div>
      </div>

      <div className={styles.content}>
        <div>{text}</div>
      </div>
      <p>{createdAt}</p>
    </div>
  );
};

export default PostItem;
