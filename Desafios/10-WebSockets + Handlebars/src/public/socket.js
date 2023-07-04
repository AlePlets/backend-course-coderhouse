const socket = io();

socket.on('updateProducts', (products) => {
  console.log('Lista de produtos atualizada:', products);
});

function addProduct(product) {
  socket.emit('addProduct', product);
}

function deleteProduct(productId) {
  socket.emit('deleteProduct', productId);
}
