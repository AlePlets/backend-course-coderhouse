const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const exphbs = require('express-handlebars');
const path = require('path'); // Importe o módulo path

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Configurar o Handlebars como o template engine
const handlebars = exphbs.create({});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Configurar o roteador de visualizações
const viewsRouter = require('./routes/views.router');
app.use('/', viewsRouter);

// Configurar a pasta pública para arquivos estáticos
app.use(express.static('public'));

// Rota principal
app.get('/', (req, res) => {
  res.render('home');
});

// Configurar o Socket.IO
io.on('connection', (socket) => {
  console.log('Novo cliente conectado');

  // Emitir evento para atualizar a lista de produtos
  socket.emit('updateProducts', getProducts());

  // Evento para adicionar um produto
  socket.on('addProduct', (product) => {
    addProduct(product);
    io.emit('updateProducts', getProducts());
  });

  // Evento para excluir um produto
  socket.on('deleteProduct', (productId) => {
    deleteProduct(productId);
    io.emit('updateProducts', getProducts());
  });

  // Lidar com desconexão do cliente
  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});

// Funções para manipular a lista de produtos
const products = [];

function getProducts() {
  return products;
}

function addProduct(product) {
  products.push(product);
}

function deleteProduct(productId) {
  const index = products.findIndex((product) => product.id === productId);
  if (index !== -1) {
    products.splice(index, 1);
  }
}
