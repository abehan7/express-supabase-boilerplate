import Sequelize from 'sequelize';
import sequelize from '../config/database.js';
import postModel from './post.js';

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.posts = postModel(sequelize, Sequelize);

export default db;
