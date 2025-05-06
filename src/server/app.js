import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/sequelize.js';
// import connectMongo from './config/mongoose.js';
import registerRoutes from './routes/index.js';
import User from './models/sql/user.js';

// dotenv.config();
dotenv.config({ path: '.env.development' });

const app = express();
app.use(express.json());

try {
  await sequelize.authenticate();
  await sequelize.sync(); // This creates tables from models if they don't exist
  console.log('PostgreSQL connected');
} catch (err) {
  console.error('SQL connection error:', err);
}

// await connectMongo();
registerRoutes(app);

export default app;