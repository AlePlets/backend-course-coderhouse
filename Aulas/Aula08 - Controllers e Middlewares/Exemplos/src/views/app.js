import express from 'express';
import usersRouter from '../routes/users.router.js';
import petsRouter from '../routes/pets.router.js';
import __dirname from './utils.js';
const app = express();
const server = app.listen(8080,()=>console.log("Listening on 8080"))

//indicamos que queremos que o público e torne estático. No caminho raiz, o index.html será exibido
app.use(express.static(__dirname+'/public'))

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);