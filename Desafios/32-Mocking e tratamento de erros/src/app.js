import express from 'express';

const app = express();
const port = 3000;

// Módulo Mocking
const generateMockProducts = () => {
  const products = [];
  for (let i = 0; i < 100; i++) {
    products.push({
      id: i,
      name: `Produto ${i}`,
      price: Math.random() * 100
    });
  }
  return products;
};

// Rota para produtos mockados
app.get('/mockingproducts', (req, res) => {
  res.json(generateMockProducts());
});

// Rota de exemplo que gera um erro
app.get('/some-endpoint', (req, res, next) => {
  next(new Error('PRODUCT_NOT_FOUND'));
});

// Rota erro de adição ao carrinho
app.get('/cart-add', (req, res, next) => {
  next(new Error('CART_ADD_ERROR'));
});

// Rota erro de adição ao carrinho
app.get('/cart-removed', (req, res, next) => {
  next(new Error('CART_REMOVE_ERROR'));
});

// Rota raiz
app.get('/', (req, res) => {
  res.send('Bem-vindo ao servidor!');
});

// Dicionário de Erros
const errorDictionary = {
  PRODUCT_NOT_FOUND: 'Produto não encontrado!',
  CART_ADD_ERROR: 'Erro ao adicionar produto ao carrinho!',
  CART_REMOVE_ERROR: 'Erro ao remover produto do carrinho!'};

// Manipulador de Erros
app.use((err, req, res, next) => {
  const errorMessage = errorDictionary[err.message] || 'Algo deu errado!';
  console.error(err.stack);
  res.status(500).send(errorMessage);
});

// Inicialização do Servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
