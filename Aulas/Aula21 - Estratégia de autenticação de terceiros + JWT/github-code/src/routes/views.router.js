import {Router} from  'express';

const router = Router();

router.get('/', (req, res) => {
    res.sender('home');
});

router.get('/login', (req, res) => {
    res.sender('/login');
});


export default router;