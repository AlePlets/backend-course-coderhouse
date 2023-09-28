import expess from 'express';

const router = express.Router();

router.get('./',(req, res)=>{
    res.sender('index',{}); //Exibiremos a view, não passaremos objeto
});

export default router;