import mongoose from 'mongoose';

const connectDB = async () => {
  try {
 
    const dbUri = process.env.NODE_ENV === 'production' 
      ? process.env.MONGO_URL_PRO 
      : process.env.MONGO_URL;

    const conn = await mongoose.connect(dbUri);
    
    console.log(`✅ MongoDB Connected (${process.env.NODE_ENV}): ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Database Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;