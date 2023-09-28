const fs = require('fs');

class ProductManager {
  constructor(path) {
    this.path = path;
  }

  addProduct(product) {
    const products = this.getProducts();
    product.id = products.length + 1;
    products.push(product);
    this.saveProducts(products);
  }

  getProducts() {
    try {
      const data = fs.readFileSync(this.path, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  getProductById(id) {
    const products = this.getProducts();
    return products.find(product => product.id === id);
  }

  updateProduct(id, updatedProduct) {
    const products = this.getProducts();
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
      products[index] = { ...products[index], ...updatedProduct };
      this.saveProducts(products);
    }
  }

  deleteProduct(id) {
    const products = this.getProducts();
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
      products.splice(index, 1);
      this.saveProducts(products);
    }
  }

  saveProducts(products) {
    fs.writeFileSync(this.path, JSON.stringify(products, null, 2), 'utf8');
  }
}

const productManager = new ProductManager('products.json');

const newProduct = {
  title: 'Celulares',
  description: 'Celulares disponiveis',
  price: 1999,
  thumbnail: ("./cel.png"),
  code: '1234',
  stock: 12
};

productManager.addProduct(newProduct);

const allProducts = productManager.getProducts();
console.log(allProducts);

const productId = 1;
const product = productManager.getProductById(productId);
console.log(product);

const updatedProduct = {
  title: 'Celulares Samsung',
  price: 2899,
  stock: 2
};
productManager.updateProduct(productId, updatedProduct);
productManager.deleteProduct(productId);
