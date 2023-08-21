import { FC, useContext } from "react";
// Types
import IPost from "../../types/post";
// Styles
import styles from "./postItem.module.scss";

import { ThemeContext } from "../../providers/ThemeProvider";

const PostItem: FC<IPost> = ({ author, title, text, createdAt }) => {
  const { isDark } = useContext(ThemeContext);

  const font = isDark ? "#ffffff" : "#000000";

  return (
    <li
      className={styles.list}
      style={{ backgroundColor: isDark ? "#2b3375d6" : "#a1a1a1" }}
    >
      <div className={styles.subtitle}>
        <div className={styles.title} style={{ color: font }}>
          {title}
        </div>
        <div className={styles.author} style={{ color: font }}>
          Автор: <span>{author}</span>
        </div>
        <button>
          <a href="#">Перейти к посту</a>
        </button>
      </div>

      <div className={styles.content}>
        <div style={{ color: font }}>{text}</div>
      </div>
      <p style={{ color: font }}>{createdAt}</p>
    </li>
  );
};

export default PostItem;
