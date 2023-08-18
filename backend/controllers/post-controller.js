import Post from "../models/post.js";

// Handle error
const handleError = (res, error) => {
  res.status(500).send(error);
};

// Get all posts
const getAllPosts = (req, res) => {
  Post.find()
    .sort({ createdAt: -1 })
    .then((posts) => res.status(200).json(posts))
    .catch((error) => handleError(res, error));
};

// Get one post
const getOnePost = (req, res) => {
  Post.findById(req.params.id)
    .then((post) => res.status(200).json(post))
    .catch((error) => handleError(res, error));
};

// Add post
const addPost = (req, res) => {
  const { title, text, author } = req.body;
  const post = new Post({ author, title, text });

  post
    .save()
    .then((post) => res.status(200).json(post))
    .catch((error) => handleError(res, error));
};

// Delete post
const deletePost = (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json(req.params))
    .catch((error) => handleError(res, error));
};

// Edit post
const editPost = (req, res) => {
  const { author, title, text } = req.body;
  const { id } = req.params;

  Post.findByIdAndUpdate(id, { author, title, text }, { new: true })
    .then((post) => res.status(200).json(post))
    .catch((error) => handleError(res, error));
};

export { getAllPosts, getOnePost, addPost, deletePost, editPost };
