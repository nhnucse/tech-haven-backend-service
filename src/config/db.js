import mongoose from 'mongoose';
import { DB_URL } from './variables.js';

const uri = DB_URL;
mongoose.set('strictQuery', false);
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', () => {
  console.log('Database Connection Successful');
});

db.on('error', (error) => {
  console.error('Error in MongoDB connection:', error);
});

export default mongoose;
