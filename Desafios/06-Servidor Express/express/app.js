const express = require('express');
const {ProductManager} = require('./product-manager.js');

const server = express();

server.get('/produtos', async (req, res)=>{    
    let {name, preco} = req.query;
    let productManager = new ProductManager();
    let result = await productManager.product(name, preco); 
    res.send(result);

})

server.get('/products/:pid', async (req, res) => {
    let productId = req.params.pid;
    let productManager = new ProductManager();
    let result = await productManager.getProductById(productId);
    res.send(result);
})

server.listen(8080,()=> console.log('servidor rodando'));