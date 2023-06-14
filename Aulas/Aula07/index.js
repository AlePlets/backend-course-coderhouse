const express = require('express');

const app = express(); //express sempre app
const port = 8080; 
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const arrayUsuarios = [];

//cria endereço que recebe um post para criar um usuário
app.post('/api/usuarios', (req, res) => {
  const { nome, sobrenome } = req.body;

  if (!nome || !sobrenome) {
    return res.status(400).send('Primeiro e ultimo nome são obrigatórios.');
  }

  const novoUsuario = { nome, sobrenome };
  arrayUsuarios.push(novoUsuario);

  res.status(201).send('Usuario criado com sucesso.');
});

app.delete('/api/usuarios/:nome', (req, res) => {
  const nome = req.params.nome;

  const tamInicial = arrayUsuarios.length;

  const usuariosFiltrados = arrayUsuarios.filter((user) => user.lastName !== nome);

  if (usuariosFiltrados.length === tamInicial) {
    return res.status(400).send('Usuario não encontrado.');
  }

  arrayUsuarios.splice(0, arrayUsuarios.length, ...usuariosFiltrados);

  res.status(200).send('Usuario deletado com sucesso.');
});
//quando inicia aplicação
app.listen(port, () => {
  console.log(`Escutando na porta ${port}`);
});