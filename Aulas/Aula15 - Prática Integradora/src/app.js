import express, {urlencoded} from 'express';
import handlebars from "express-handlebars"
import pixRouter from './routes/pix.routes.js'
import mongoose from 'mongoose'


const app = express();

app.use(urlencoded({extended: true}));
app.use(express.json());

const port = 3000;

const server = app.listen(port, () => console.log(`server na porta ${port}`));

const dbUrl = 'mongodb+srv://ale:ale123@cluster0.scsq5pi.mongodb.net/pix-integrador?retryWrites=true&w=majority';
mongoose.connect(dbUrl)
.then(() => {console.log("Conectado ao Mongo")})
.catch((error) => {
  if (error) {
  console.log("Nao foi possivel conectar ao banco de dados: " + error)
  process.exit();
  }
});

app.use('/api/pix', pixRouter);