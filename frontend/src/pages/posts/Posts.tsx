import { FC, useState, useEffect } from "react";
import usePostServices from "../../services/PostService";

const Posts: FC = () => {
  const { getAllPosts } = usePostServices();
  const [posts, setPosts] = useState<any>([]);

  // ОБНОВИТЬ ЗАПРОС
  // ТИПИЗАЦИЯ ????
  const testFetch = () => {
    getAllPosts().then((res) => onPostsLoaded(res));
  };

  const onPostsLoaded = (newPosts: any) => {
    setPosts((posts: any) => [...posts, ...newPosts]);
  };

  return (
    <>
      <h1>POSTS</h1>
      <button onClick={testFetch}></button>
    </>
  );
};

export default Posts;

// import { FC, useState, useEffect } from "react";
// import usePostServices from "../../services/PostService";

// const Posts: FC = () => {
//   const { getAllPosts } = usePostServices();
//   const [posts, setPosts] = useState<any>([]);

//   // const testFetch = () => {
//   //   getAllPosts().then((res) => console.log(res));
//   // };

//   const testFetch = () => {
//     getAllPosts().then((res) => onPostsLoaded(res));
//   };

//   const onPostsLoaded = (newPosts: any) => {
//     setPosts((posts: any) => [...posts, ...newPosts]);
//   };

//   return (
//     <>
//       <h1>POSTS</h1>
//       <button onClick={testFetch}></button>
//     </>
//   );
// };

// export default Posts;
