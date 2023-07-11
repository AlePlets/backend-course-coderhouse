import express from 'express';
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

app.use('/api/users', userRouter);

