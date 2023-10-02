import mongoose from 'mongoose';
import { DB_URL } from './variables.js';

const uri = DB_URL;
mongoose.set('strictQuery', false);
mongoose.connect(uri);
const db = mongoose.connection;

db.once('open', () => {
  console.log('Database Connection Successful');
});

db.on('error', () => {
  console.log('Error in MongoDB connection');
});

export default mongoose;