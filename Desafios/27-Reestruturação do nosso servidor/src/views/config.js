import dotenv from 'dotenv';

dotenv.config();

export default {
  porta: process.env.PORTA,
  dbUrl: process.env.DB_URL,
};
