import express from 'express';
import tarefaController from '../controllers/tarefaController.js';

const router = express.Router();

router.post('/', tarefaController.adicionarTarefa);
router.get('/', tarefaController.listarTarefas);

export default router;
