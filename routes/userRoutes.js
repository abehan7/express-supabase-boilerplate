import express from 'express';
import db from '../models/index.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await db.users.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = await db.users.create({ email, password });
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
