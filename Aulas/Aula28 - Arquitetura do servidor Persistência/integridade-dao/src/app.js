import express from 'express';
import apiRoutes from './routes/apiRoutes.js';
import { MongoDBDAO } from './dao/mongodbDao.js';

const app = express();

app.use(express.json());
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;

// Initialize MongoDBDAO here or choose another DAO implementation
const dao = new MongoDBDAO();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
