import mongodb from 'mongodb';
import config from '../config.js';

const MongoClient = mongodb.MongoClient;

export default {
  async adicionarTarefa(tarefa) {
    const cliente = await MongoClient.connect(config.dbUrl);
    const db = cliente.db('nome_do_banco');
    await db.collection('tarefas').insertOne(tarefa);
    cliente.close();
  },
  async listarTarefas() {
    const cliente = await MongoClient.connect(config.dbUrl);
    const db = cliente.db('nome_do_banco');
    const tarefas = await db.collection('tarefas').find().toArray();
    cliente.close();
    return tarefas;
  },
};
