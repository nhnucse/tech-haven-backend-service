import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import morgan from 'morgan';
import routes from './routes/index.js';
import { PORT } from './config/variables.js';
import cookieParser from 'cookie-parser';
import './config/db.js';
import { responseHandler } from './helper/responseHandler.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(responseHandler());
app.options('*', cors());
app.use(cookieParser());
app.use(morgan('dev'));
app.use('/v1', routes);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
