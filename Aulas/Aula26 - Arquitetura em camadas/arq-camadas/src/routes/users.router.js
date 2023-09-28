import { Router } from 'express';

router.get('/', (req, res) => {
    res.send('Hello World');
});


// Simulando um banco de dados de usuários
let users = [];

// Rota para listar todos os usuários
router.get('/', (req, res) => {
  res.json(users);
});

// Rota para adicionar um novo usuário
router.post('/', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});









module.exports = router;