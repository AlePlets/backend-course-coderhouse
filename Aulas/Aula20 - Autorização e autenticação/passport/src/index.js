import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import mongoose from 'mongoose';
import loginRouter from './routes/login.router.js';
import userRouter from './routes/user.router.js';
import passport from 'passport'; //npm install passport passport-local 
import { initializePassport } from 'passport';

const port = 3000;
const app = express();

const mongoUrl = 'mongodb+srv://ale:123@cluster0.sxp8jkm.mongodb.net/?retryWrites=true&w=majority';

// Conexão com o banco de dados MongoDB
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conectado ao Mongo");
  })
  .catch((error) => {
    if (error) {
      console.log("Nao foi possivel conectar ao banco de dados: " + error);
      process.exit();
    }
  });

// Configuração do middleware para interpretar dados enviados através de formulários
app.use(express.urlencoded({ extended: true }));

// Configuração do middleware para interpretar dados no formato JSON
app.use(express.json());

// Configuração do middleware de sessão
app.use(session({
  store: MongoStore.create({ mongoUrl: mongoUrl }), // Armazena as sessões no banco de dados MongoDB
  mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
  ttl: 30, // Tempo de vida da sessão em minutos
  secret: 'secret', // Chave secreta usada para assinar a sessão
  resave: false, // Evita que a sessão seja regravada no armazenamento se não for modificada
  saveUninitialized: false // Não salva sessões não inicializadas no armazenamento
}));

// Inicializa o Passport (não foram fornecidos detalhes do que essa função faz)
initializePassport(passport);

// Inicia o servidor para ouvir na porta especificada
app.listen(port, () => {
  console.log(`Servidor rodando na porta:${port}`);
});

// Configuração das rotas para '/api/login' e '/api/user'
app.use('/api/login', loginRouter);
app.use('/api/user', userRouter);
