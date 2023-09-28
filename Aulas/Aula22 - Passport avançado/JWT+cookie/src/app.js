const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Exemplo de um serviço de login (somente para fins ilustrativos)
function login(email, senha) {
  // Lógica de autenticação aqui (pode ser um banco de dados, serviço externo, etc.)
  if (email === 'usuario@example.com' && senha === '123456') {
    return 'seu_token_de_autenticacao';
  }
  return null;
}

// Rota para a view pública com campos de login
app.get('/', (req, res) => {
  res.send(`
    <form method="post" action="/login">
      <label for="email">Email:</label>
      <input type="text" id="email" name="email"><br>
      <label for="senha">Senha:</label>
      <input type="password" id="senha" name="senha"><br>
      <button type="submit">Entrar</button>
    </form>
  `);
});

// Rota para o processo de login
app.post('/login', (req, res) => {
  const { email, senha } = req.body;
  const token = login(email, senha);

  if (token) {
    // Configuração do cookie sem httpOnly (somente para fins ilustrativos, não recomendado)
    res.cookie('token', token, { maxAge: 3600000 }); // O cookie expirará em 1 hora (3600000 ms)
    res.send('Login bem-sucedido! Token definido no cookie.');
  } else {
    res.send('Credenciais inválidas. Tente novamente.');
  }
});

// Rota para limpar o cookie
app.get('/limpar-cookie', (req, res) => {
  res.clearCookie('token');
  res.send('Cookie "token" foi limpo.');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});
