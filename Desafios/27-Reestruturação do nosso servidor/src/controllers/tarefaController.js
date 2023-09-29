import tarefaDAO from '../dao/tarefaDAO.js';

export default {
  async adicionarTarefa(req, res) {
    try {
      const tarefa = req.body;
      await tarefaDAO.adicionarTarefa(tarefa);
      res.status(201).send('Tarefa adicionada com sucesso!');
    } catch (erro) {
      res.status(500).send(erro.message);
    }
  },
  async listarTarefas(req, res) {
    try {
      const tarefas = await tarefaDAO.listarTarefas();
      res.status(200).send(tarefas);
    } catch (erro) {
      res.status(500).send(erro.message);
    }
  },
};
