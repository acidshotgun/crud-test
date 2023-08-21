import { NavLink } from "react-router-dom";
// Styles
import styles from "./header.module.scss";

import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";

const Header = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={styles.header}>
      <button
        style={{
          width: "50px",
          height: "30px",
          backgroundColor: isDark ? "red" : "green",
        }}
        onClick={toggleTheme}
      ></button>
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
