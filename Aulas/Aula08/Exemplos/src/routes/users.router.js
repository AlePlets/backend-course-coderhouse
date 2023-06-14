//adiciona um novo Router
import {Router} from 'express';
import usersController from '../controller/users.controller.js'

const router = Router();

router.get('/',(req, res) => {
    //Corpo do serviço para GET users
})

export default router;