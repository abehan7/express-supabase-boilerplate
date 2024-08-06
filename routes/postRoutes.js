import express from 'express';
import db from '../models/index.js';

const router = express.Router();

// Get all posts
router.get('/', async (req, res) => {
  try {
    const listOfPosts = await db.posts.findAll();
    res.json(listOfPosts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new post
router.post('/', async (req, res) => {
  try {
    const post = req.body;
    const newPost = await db.posts.create(post);
    res.json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
