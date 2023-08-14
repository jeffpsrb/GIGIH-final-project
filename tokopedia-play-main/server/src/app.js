import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';
import connectToDatabase from './data/database/connection.js';
import routes from './presentation/routes/index.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', routes);

connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error starting the server:', err.message);
    process.exit(1);
  });
