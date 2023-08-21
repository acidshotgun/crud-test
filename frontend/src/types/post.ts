// Общий интерфейс под post item
interface IPost {
  _id?: string;
  author: string;
  title: string;
  text: string;
  createdAt: string;
}

export default IPost;
