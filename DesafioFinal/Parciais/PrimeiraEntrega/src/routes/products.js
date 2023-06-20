const express = require('express');
const fs = require('fs');

const router = express.Router();

// Rota raiz para listar todos os produtos
router.get('/', (req, res) => {
  const { limit } = req.query;
  let products = JSON.parse(fs.readFileSync('./data/products.json'));
  if (limit) {
    products = products.slice(0, parseInt(limit));
  }
  res.json(products);
});

// Rota para buscar um produto pelo id
router.get('/:pid', (req, res) => {
  const { pid } = req.params;
  const products = JSON.parse(fs.readFileSync('./data/products.json'));
  const product = products.find((p) => p.id === pid);
  if (!product) {
    res.status(404).json({ error: 'Produto não encontrado' });
  } else {
    res.json(product);
  }
});

// Rota para adicionar um novo produto
router.post('/', (req, res) => {
  const newProduct = req.body;
  const products = JSON.parse(fs.readFileSync('./data/products.json'));
  newProduct.id = products.length + 1; // Gera um novo id sequencial
  products.push(newProduct);
  fs.writeFileSync('./data/products.json', JSON.stringify(products));
  res.status(201).json(newProduct);
});

// Rota para atualizar um produto pelo id
router.put('/:pid', (req, res) => {
  const { pid } = req.params;
  const updatedFields = req.body;
  const products = JSON.parse(fs.readFileSync('./data/products.json'));
  const productIndex = products.findIndex((p) => p.id === pid);
  if (productIndex === -1) {
    res.status(404).json({ error: 'Produto não encontrado' });
  } else {
    products[productIndex] = { ...products[productIndex], ...updatedFields };
    fs.writeFileSync('./data/products.json', JSON.stringify(products));
    res.json(products[productIndex]);
  }
});

// Rota para deletar um produto pelo id
router.delete('/:pid', (req, res) => {
  const { pid } = req.params;
  const products = JSON.parse(fs.readFileSync('./data/products.json'));
  const productIndex = products.findIndex((p) => p.id === pid);
  if (productIndex === -1) {
    res.status(404).json({ error: 'Produto não encontrado' });
  } else {
    const deletedProduct = products.splice(productIndex, 1);
    fs.writeFileSync('./data/products.json', JSON.stringify(products));
    res.json(deletedProduct[0]);
  }
});

module.exports = router;
