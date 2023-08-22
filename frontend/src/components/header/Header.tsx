import { NavLink } from "react-router-dom";
// Styles
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.navigation}>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#601dcc" : "inherit",
            })}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#601dcc" : "inherit",
            })}
            to="/posts"
          >
            All posts
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#601dcc" : "inherit",
            })}
            to="/add-post"
          >
            Add Post
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#601dcc" : "inherit",
            })}
            to="/contacts"
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
