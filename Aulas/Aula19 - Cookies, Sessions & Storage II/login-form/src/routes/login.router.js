import {Router} from 'express';
import { userModel } from '../models/user.model.js';

const router = Router();

router.get('/', (req, res) => {
    console.log(req.session);
    if (req.session.logged) {
        res.send('Logado!');
    } else {
        res.send('Não logado!');
    }
});
router.post('/', async (req, res) => {
    let {email, password} = req.body;
    try {
        const user = await userModel.findOne({email: email});
        if(user === null) {
            res.status(400)
        }
        if(user.password !== password) {
            res.status(400).json({erro: "Senha incorreta"});
        } else {
        req.session.user = email;
        req.session.logged = true;
        res.send('Logado com sucesso!');    
        }
    } catch (error) {
        res.status(400).json({erro: error.message});
    }
});

export default router;