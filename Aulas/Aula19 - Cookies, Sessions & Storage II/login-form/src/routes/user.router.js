import {Router} from 'express';
import { userModel } from '../models/user.model.js';


const router = Router();

router.get('/', async (req, res) => {
    try {
        const user = await userModel.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({erro: error.message});
    }
});

router.post('/', async (req, res) => {
    let newUser = req.body;
    try {
        let result = await User.create(newUser);
        res.status(201).json(result);
    } catch (error) {
        console.log("Num dá não irmão" + error);
        res.status(400).json({erro: error.message});
    }
});

export default router;