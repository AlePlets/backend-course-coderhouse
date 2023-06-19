const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 8080;
const DATA_FILE = './products.json';


//Carrega os produtos já registrado, caso exista.
let products = [];
if (fs.existsSync(DATA_FILE)) {
  const data = fs.readFileSync(DATA_FILE, 'utf8');
  products = JSON.parse(data);
}

//Rota de retorno dos products
app.get('/api/products', (req, res) => {
  res.json(products);
});

//Rota para reigstrar um novo pet
app.post('/api/products', (req, res) => {
    console.log(req.body)
  const { id, titulo, descricao, code, preco, status, estoque, categoria, thumbnail } = req.body;
  const ide = products.length > 0 ? products[products.length - 1].ide + 1 : 1;
  const newProduct = { id, titulo, descricao, code, preco, status, estoque, categoria, thumbnail };
  products.push(newProduct);
  salvaProductsNoArquivo();
  res.status(201).json(newProducts);
});

// Helper function to save products data to JSON file
function salvaProductsNoArquivo() {
  fs.writeFileSync(DATA_FILE, JSON.stringify(products), 'utf8');
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});