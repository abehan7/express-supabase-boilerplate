import Sequelize from 'sequelize';
import sequelize from '../config/database.js';
import userModel from './user.js';

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.users = userModel(sequelize, Sequelize);

export default db;
