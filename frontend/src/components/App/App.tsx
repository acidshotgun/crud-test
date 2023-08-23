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
import OnePost from "../../pages/one-post/OnePost";

const App: FC = () => {
  return (
    <div>
      <Router>
        <Header />
        <div className={styles.container}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:postId" element={<OnePost />} />
            <Route path="/add-post" element={<AddPost />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
