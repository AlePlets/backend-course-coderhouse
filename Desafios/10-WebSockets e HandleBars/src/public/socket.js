// Arquivo: public/socket.js

// Conectar-se ao servidor Socket.IO
const socket = io();

// Evento para receber a atualização da lista de produtos
socket.on('updateProducts', (products) => {
  // Atualize a visualização com os produtos recebidos
  // Por exemplo, você pode manipular o DOM para exibir os produtos na página
  console.log('Lista de produtos atualizada:', products);
});

// Função para enviar um novo produto para o servidor
function addProduct(product) {
  socket.emit('addProduct', product);
}

// Função para excluir um produto do servidor
function deleteProduct(productId) {
  socket.emit('deleteProduct', productId);
}
