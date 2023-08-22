import express from 'express';
import contactsRouter from './routes/contacts.router.js';
import mongoose from 'mongoose';
const app = express();
const connection = mongoose.connect('mongodb://localhost:27017/contacts', {useNewUrlParser: true, useUnifiedTopology: true});
const server = app.listen(3000, () => {
    console.log('Server running on port 3000');
}  );

app.use('/contacts', contactsRouter);