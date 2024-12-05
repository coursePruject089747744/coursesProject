import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING ); // חיבור ללא פרמטרים נוספים
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // סיום התהליך במקרה של כשל
  }
};

export default connectDB;