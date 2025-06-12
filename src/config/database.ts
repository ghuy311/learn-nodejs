// Get the client
import mongoose from 'mongoose';
import 'dotenv/config';

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || '', {
    //  dbName: '',
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection failed:', err);
  }
};


export default connectMongoDB ;