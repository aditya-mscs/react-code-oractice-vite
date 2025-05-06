import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/sequelize.js';
import connectMongo from './config/mongoose.js';
import registerRoutes from './routes/index.js';
import logger from './middleware/logger.js';

// Load environment variables from .env file
dotenv.config({ path: '.env.development' });


const app = express();

//Middleware
app.use(logger); // applies logging to all incoming requests
app.use(express.json());

// Sequalize setup
try {
  await sequelize.authenticate();
  //await sequelize.sync(); // This creates tables from models if they don't exist so uncomment first time
  console.log('PostgreSQL connected');
} catch (err) {
  console.error('SQL connection error:', err);
}

// MongoDB setup
await connectMongo();

registerRoutes(app);

export default app;