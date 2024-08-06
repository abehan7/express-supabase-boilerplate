import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import db from './models/index.js';
// import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';

import { createClient } from '@supabase/supabase-js';

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Sync database
db.sequelize.sync();

// Routes
// app.use('/users', userRoutes);
app.use('/posts', postRoutes);

// Supabase setup
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

app.get('/supabase', async (req, res) => {
  const { data, error } = await supabase.from('Users').select('*');
  if (error) {
    res.status(500).json({ error: error.message });
  } else {
    res.json(data);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
