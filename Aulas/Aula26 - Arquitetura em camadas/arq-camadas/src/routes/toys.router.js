import { Router } from 'express';
import toysConstroller from '../controllers/toys.controllers.js';

const router = Router();

router.get('/', toysConstroller.getToys(req, res)) 
router.post('/', toysConstroller.createToy(req, res))

// Rota para listar todos os brinquedos
router.get('/', toysController.listToys);

// Rota para adicionar um novo brinquedo
router.post('/', toysController.addToy);


export default router;