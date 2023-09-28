import {Router} from 'express';
import { keyModel } from '../models/keys.model.js';

const router = Router();

router.get('/', async (req, res)=>{
    try{
        let keys = await keyModel.find();
        res.send({result:"sucess", payload: keys});
    }
    catch(error) {
        console.log("Cannot get pix keys with mongoose: " + erro)
    }
});
 

router.post('/', async (req, res) => {

    let {key, keyType, user} = req.body;
    try {
        let result = await KeyModel.create({key, keyType, user});
        res.send({result: "sucess", payload: result});
    } catch (error) {
        console.log("Cannot create pix key with mongoose: " + error);
        res.status(400).send({result: "error", payload: error});
    }
});

router.delete('/', async (req, res) => {
    let keyToDelete = req.query.key;
    try {
        let result = await keyModel.deleteOne({key, keyToDelete});
        res.send({result: "sucess", payload: result});
    } catch (error) {
        console.log("Cannot delete key with mongoose: " + error);
    }  
});

router.put('/', async (req, res) => {
    let {key, user} = req.body;

    try {
        let result = await keyModel.updateOne({key: key}, {user: user});
        res.send({result: "sucess", payload: result});
    } catch (error) {
        console.log("Cannot update key with mongoose: " + error);
    }
});

export default router;