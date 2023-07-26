import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import mongoose from 'mongoose';
import loginRouter from './routes/login.router.js';
import userRouter from './routes/user.router.js';
import passport from 'passport';
import { initializePassport } from 'passport';

const port = 3000
const app = express()

const mongoUrl = 'mongodb+srv://ale:123@cluster0.sxp8jkm.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {console.log("Conectado ao Mongo")})
.catch((error) => {
  if (error) {
  console.log("Nao foi possivel conectar ao banco de dados: " + error)
  process.exit();
  }
});

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(port, () => {
    console.log(`Servidor rodando na porta:${port}`)
})

app.use('/api/login', loginRouter);
app.use('/api/user', userRouter);