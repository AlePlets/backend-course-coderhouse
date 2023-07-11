//adiciona um novo Router
import {Router} from 'express';
import usersController from '../controller/users.controller.js'

const router = Router();

//Corpo do serviço para GET users
router.get('/:id',(req, res) => {
    res.send('Lista de usuários')
});

router.get('/:id',(req, res) => {
    const userId = req.params.id;
    res.send(`Detalhes do Usuário de ID: ${userId}`)
});

export default router;

