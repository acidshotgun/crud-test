import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Components
import Header from "../header/Header";
// Pages
import Home from "../../pages/home/Home";
import Posts from "../../pages/posts/Posts";
import Contacts from "../../pages/contacts/Contacts";
import AddPost from "../../pages/add-post-page/AddPost";
// Styles
import styles from "./app.module.scss";
// Provider
import { ThemeProvider } from "../../providers/ThemeProvider";

const App: FC = () => {
  return (
    <ThemeProvider>
      <div>
        <Router>
          <Header />
          <div className={styles.container}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/add-post" element={<AddPost />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
