import mongoose from 'mongoose';

const checkDatabaseURL = () => {
  const mongodbURL = process.env.DB_URL;
  if (!mongodbURL) {
    throw new Error('database URL is not defined in the environment variables');
  }
  return mongodbURL;
};

const connectToDatabase = async () => {
  const mongodbURL = checkDatabaseURL();
  console.log('Connecting to the database...');
  await mongoose.connect(mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('Successfully connected to the database');
};

export default connectToDatabase;
