import {Router} from 'express';
import { userModel } from '../models/users.model.js';

const router = Router();

router.get('/', async (req,res)=>{
    try{
        let users = await userModel.find();
        res.send({result:"sucess", payload:users});
    }
    catch(erro) {
        console.log("Cannot get users with mongoose: " + erro)
    }
});


//Metodo para criar um usuario
 router.post('/', async (req, res)=>{
    let {first_name, last_name, email} = req.body;
    if(!first_name||!last_name||!email ) return res.send({status:"error",error: "Valores Incompleto"});

    let result = await userModel.create({
        first_name,
        last_name,
        email
    });
    res.send({status: "sucess", payload: result});
 });

 router.put('/:uid', async (req, res) => {
    let {uid} = req.params;
    let userToReplace = req.body;
    if(!uid || !userToReplace.firstName || !userToReplace.lastName || !userToReplace.email) 
    return res.send({result: "error", payload: "Incomplete values"});
    try {
        let result = await UserModel.updateOne({_id: uid}, userToReplace);
        res.send({result: "sucess", payload: result});
    } catch (error) {
        console.log("Cannot update user with mongoose: " + error);
    }
});

router.delete('/:uid', async (req, res) => {
    let {uid} = req.params;
    if(!uid) return res.send({result: "error", payload: "Incomplete values"});
    try {
        let result = await UserModel.deleteOne({_id: uid});
        res.send({result: "sucess", payload: result});
    } catch (error) {
        console.log("Cannot delete user with mongoose: " + error);
    }  
});

export default router;