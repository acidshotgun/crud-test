import express from "express";

import {
  getAllPosts,
  getOnePost,
  addPost,
  deletePost,
  editPost,
} from "../controllers/post-controller.js";

const router = express.Router();

// Get all posts
router.get("/posts", getAllPosts);
// Get one post
router.get("/posts/:id", getOnePost);
// Add post
router.post("/posts", addPost);
// Delete post
router.delete("/posts/:id", deletePost);
// Edit post
router.put("/posts/:id", editPost);

export default router;
