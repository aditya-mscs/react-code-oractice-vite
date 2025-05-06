import mongoose from 'mongoose';

// dotenv.config();
import '../config/env.js'; // loads .env before using env vars

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection failed:', err);
  }
};

export default connectMongo; // ✅ THIS LINE is crucial!