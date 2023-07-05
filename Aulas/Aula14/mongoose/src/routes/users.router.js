import {Router} from 'express';
import { userModel } from '../models/users.model.js';

const router = Router();

router.get('/', async (req, res)=>{
    try{
        let users = await userModel.find()
        res.send({result:"sucess", payload:users})
    }
    catch(erro) {
        console.log("Cannot get users with mongoose: " + erro)
    }
});

export default router