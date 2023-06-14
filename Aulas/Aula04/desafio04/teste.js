const fs = require('fs');

class ProductManager {
  constructor(path) {
    this.path = path;
    this.products = [];
    this.loadProducts();
  }

  loadProducts() {
    try {
      const data = fs.readFileSync(this.path, 'utf8');
      this.products = JSON.parse(data);
    } catch (error) {
      this.products = [];
    }
  }

  saveProducts() {
    fs.writeFileSync(this.path, JSON.stringify(this.products, null, 2), 'utf8');
  }

  addProduct(product) {
    const newProduct = {
      id: this.products.length + 1,
      ...product,
    };
    this.products.push(newProduct);
    this.saveProducts();
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    return this.products.find(product => product.id === id);
  }

  updateProduct(id, updatedFields) {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products[index] = {
        ...this.products[index],
        ...updatedFields,
        id,
      };
      this.saveProducts();
    }
  }

  deleteProduct(id) {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
      this.saveProducts();
    }
  }
}

// Exemplo de uso da classe ProductManager

const productManager = new ProductManager('products.json');

// Adicionar um produto
const newProduct = {
  title: 'Sopa',
  description: 'Caldo de Kenga',
  price: 87,
  thumbnail: ('./cel.png'),
  code: '1234',
  stock: 12
};
productManager.addProduct(newProduct);

// Obter todos os produtos
const allProducts = productManager.getProducts();
console.log(allProducts);

// Obter um produto pelo ID
const productId = 1;
const product = productManager.getProductById(productId);
console.log(product);

// Atualizar um produto
const updatedProduct = {
  title: 'Sopa Atualizada',
  price: 99,
  stock: 8
};
productManager.updateProduct(productId, updatedProduct);

// Deletar um produto
productManager.deleteProduct(productId);
