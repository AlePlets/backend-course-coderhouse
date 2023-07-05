import express from 'express';
import { urlencoded } from 'express';
import userRouter from './routes/users.router.js';
import mongoose from 'mongoose';

const app = express();

app.use(urlencoded({extended: true}));
app.use(express.json());

const port = 8080;
const server = app.listen(port, () => console.log(`Server listening on port ${port}`));

const mongoAtlasUrl = 'mongodb+srv://ale:ale123@cluster0.uzyiebj.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(mongoAtlasUrl)
.catch((error) => {
    if (error) {
    console.log("Nao foi possivel conectar ao banco de dados: " + error)
    process.exit();
    }
});


//Metodo para criar um usuario
router.post('/', async (req, res)=>{
    let {first_name, last_name, email} = req.body;
    if(!first_name||!last_name||!email ) return res.send({status:"error",error: "Incomplete Values"});

    let result = await userModel.create({
        first_name,
        last_name,
        email
    });
    res.send({status: "sucess", payload: result});
 });

 export default router;