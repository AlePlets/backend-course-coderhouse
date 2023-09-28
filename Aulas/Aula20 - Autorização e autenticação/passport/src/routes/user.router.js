import { Router } from 'express';
import { UserModel } from '../models/user.model.js';
import { createHash } from '../utils.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const user = await UserModel.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
});

// router.post('/', async (req, res) => {
//     const { nome, sobrenome, email, idade, password } = req.body;
//     let novoUsuario = {
//         nome: nome,
//         sobrenome: sobrenome,
//         email: email,
//         idade: idade,
//         password: createHash(password)
//     }
//     try {
//         let result = await UserModel.create(novoUsuario);
//         res.status(201).json(result);
//     } catch (error) {
//         console.log("Cannot create user with mongoose: " + error);
//         res.status(400).json({ erro: error.message });
//     }

// });

//Não passa pela classe de usuário acima, abstraiu para o passport.config - aqui chama o registro (se usar auth google também)
router.post('/', passport.authenticate('register', {failureRedirect: 'failregister'}), async (req, res) => {
    res.send('Registrado com sucesso!');
});

router.get('/failregister', (req, res) => {
    res.status(400).json({erro: 'Não foi possível registrar o usuário'});
});

export default router;