import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import db from './models/index.js';
import postRoutes from './routes/postRoutes.js';

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Sync database
db.sequelize.sync();

// Routes
app.use('/posts', postRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
