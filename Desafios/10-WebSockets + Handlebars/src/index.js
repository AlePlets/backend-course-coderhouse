const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const exphbs = require('express-handlebars');
const path = require('path'); 

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const handlebars = exphbs.create({});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

const viewsRouter = require('./routes/views.router');
app.use('/', viewsRouter);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home');
});

io.on('connection', (socket) => {
  console.log('Novo cliente conectado');

  socket.emit('updateProducts', getProducts());

  socket.on('addProduct', (product) => {
    addProduct(product);
    io.emit('updateProducts', getProducts());
  });

  socket.on('deleteProduct', (productId) => {
    deleteProduct(productId);
    io.emit('updateProducts', getProducts());
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});

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
