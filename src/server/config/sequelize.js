import { Sequelize } from 'sequelize';

// dotenv.config();
import '../config/env.js'; // loads .env before using env vars

const sequelize = new Sequelize(
  process.env.SQL_DB,
  process.env.SQL_USER,
  process.env.SQL_PASS,
  {
    host: process.env.SQL_HOST,
    dialect: 'postgres' // or 'mysql'
  }
);

export default sequelize;