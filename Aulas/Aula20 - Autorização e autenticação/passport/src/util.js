import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bcrypt from 'bcryptjs';
import express from 'express';

const createHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

const isValidPassword = (user, password) => bcrypt.compareSync(password, user.password);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

router.post('/register', async (req, res) => {
  const { nome, sobrenome, email, idade, password } = req.body;

  if (!nome || !sobrenome || !email || !idade) {
    return res.status(400).send({ status: 'error', message: 'Dados incompletos' });
  }

  let user = {
    nome,
    sobrenome,
    email,
    idade,
    password: createHash(password),
  };

  // Código restante do roteador, se houver...
});

export default { createHash, isValidPassword, router };
