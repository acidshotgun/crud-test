// Общий интерфейс под post item
interface IPost {
  _id?: string;
  // id?: string;
  author: string;
  title: string;
  text: string;
  createdAt?: string;
  deletePost?: () => void;
}

export default IPost;
