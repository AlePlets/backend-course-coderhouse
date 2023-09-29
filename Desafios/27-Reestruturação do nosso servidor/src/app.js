import express from 'express';
import tarefaRouter from './src/routers/tarefaRouter.js';
import config from './src/config.js';

const app = express();

app.use(express.json());
app.use('/tarefas', tarefaRouter);

app.listen(config.porta, () => {
  console.log(`Servidor rodando na porta ${config.porta}`);
});
