import { Router } from 'express';
import { UserModel } from '../models/user.model.js';
import cookieParser from 'cookie-parser';
import session from "express-session";
import { createHash } from '../utils.js';
import { isValidPassword } from '../utils.js';

const router = Router();

router.get('/', (req, res) => {
    console.log(req.session);
    if (req.session.logged) {
        res.send('Logado!');
    } else {
        res.send('Não logado!');
    }
});

router.post('/recovery', async (req, res) => {
    let {email, password} = req.body;
    try {
        const user = await UserModel.findOne({email: email});
        if (user == null) {
            res.status(404)
        } else { 
            user.password = createHash(password);
            user.save();
            res.send('Senha alterada com sucesso!');
        }
    }
    catch (error) {
        res.status(400).json({erro: error.message});
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