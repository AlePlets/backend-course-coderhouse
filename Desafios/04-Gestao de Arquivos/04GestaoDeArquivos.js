//importa o módulo fs (File System) do Node.js, que é usado para interagir com o sistema de arquivos.
const fs = require('fs');

////definição da classe ProductManager, que gerencia a gestão de produtos. O construtor recebe um parâmetro path, que é o caminho para o arquivo onde os produtos serão salvos.

class ProductManager {
  constructor(path) {
    this.path = path;
  }
//O método addProduct adiciona um novo produto. Ele recebe um objeto product como parâmetro, atribui um ID ao produto com base no número de produtos existentes, adiciona o produto ao array products e, em seguida, chama o método saveProducts para salvar os produtos no arquivo.

  addProduct(product) {
    const products = this.getProducts();
    product.id = products.length + 1;
    products.push(product);
    this.saveProducts(products);
  }
//O método getProducts lê o arquivo especificado pelo caminho this.path e retorna os produtos em formato de array. Ele utiliza o método readFileSync do módulo fs para ler o conteúdo do arquivo e, em seguida, usa JSON.parse para converter os dados JSON em um objeto JavaScript. Se houver algum erro na leitura do arquivo, o método retorna um array vazio.

  getProducts() {
    try {
      const data = fs.readFileSync(this.path, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }
//O método getProductById recebe um ID como parâmetro e retorna o produto correspondente a esse ID. Ele chama o método getProducts para obter todos os produtos e, em seguida, usa o método find do array para encontrar o produto com o ID especificado.

  getProductById(id) {
    const products = this.getProducts();
    return products.find(product => product.id === id);
  }
//O método updateProduct atualiza um produto existente com os dados fornecidos. Ele recebe um ID e um objeto updatedProduct contendo os campos a serem atualizados. O método chama o método getProducts para obter todos os produtos, encontra o índice do produto com base no ID e, se o índice for diferente de -1 (ou seja, se o produto for encontrado), ele atualiza o produto com os novos dados. Em seguida, chama o método saveProducts para salvar as alterações no arquivo.

  updateProduct(id, updatedProduct) {
    const products = this.getProducts();
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
      products[index] = { ...products[index], ...updatedProduct };
      this.saveProducts(products);
    }
  }
//O método deleteProduct é chamado na instância do productManager, passando um ID como parâmetro, para excluir um produto com base no ID.

  deleteProduct(id) {
    const products = this.getProducts();
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
      products.splice(index, 1);
      this.saveProducts(products);
    }
  }
//O método saveProducts é responsável por salvar os produtos no arquivo especificado pelo caminho this.path. 
//saveProducts(products) {: Declaração do método saveProducts com um parâmetro products, que representa o array de produtos a serem salvos.

//fs.writeFileSync(this.path, JSON.stringify(products, null, 2), 'utf8');: Chama o método writeFileSync do módulo fs para escrever os produtos no arquivo especificado pelo caminho this.path. O método writeFileSync é síncrono, o que significa que ele bloqueia a execução até que a escrita no arquivo seja concluída.

//this.path: É o caminho para o arquivo onde os produtos serão salvos. Foi definido no construtor da classe ProductManager e atribuído à propriedade path da instância.

//JSON.stringify(products, null, 2): Converte o array de produtos em uma string JSON formatada. O método JSON.stringify converte o objeto ou array fornecido em uma string JSON. O segundo parâmetro null é opcional e é usado para filtrar os valores a serem incluídos na string JSON. O terceiro parâmetro 2 é opcional e define o número de espaços usados para indentação na string JSON, tornando-a mais legível.

//'utf8': É a codificação do arquivo de texto. Nesse caso, 'utf8' indica que a codificação é UTF-8.

  saveProducts(products) {
    fs.writeFileSync(this.path, JSON.stringify(products, null, 2), 'utf8');
  }
}

// Exemplo de uso da classe ProductManager

// Cria uma instância da classe ProductManager, passando o caminho do arquivo "products.json" como parâmetro
const productManager = new ProductManager('products.json');

// Cria um novo produto como um objeto JavaScript
const newProduct = {
  title: 'Sopa',
  description: 'Caldo de Kenga',
  price: 87,
  thumbnail: 'Backend',
  code: '1234',
  stock: 12
};

// Adiciona o novo produto chamando o método addProduct da instância do productManager
productManager.addProduct(newProduct);

// Obtém todos os produtos chamando o método getProducts da instância do productManager
const allProducts = productManager.getProducts();
console.log(allProducts);

// Obtém um produto pelo ID chamando o método getProductById da instância do productManager
const productId = 1;
const product = productManager.getProductById(productId);
console.log(product);

// Atualiza um produto chamando o método updateProduct da instância do productManager
const updatedProduct = {
  title: 'Sopa Atualizada',
  price: 99,
  stock: 8
};
productManager.updateProduct(productId, updatedProduct);

// Deleta um produto chamando o método deleteProduct da instância do productManager
productManager.deleteProduct(productId);


//Nesse exemplo, estamos criando uma instância da classe ProductManager e utilizando seus métodos para adicionar, obter, atualizar e excluir produtos. Primeiro, criamos um novo produto como um objeto JavaScript e, em seguida, chamamos o método addProduct para adicioná-lo. Depois, chamamos o método getProducts para obter todos os produtos salvos e exibimos no console. Em seguida, chamamos o método getProductById para obter um produto específico com base em seu ID e exibimos no console. Depois, atualizamos o produto chamando o método updateProduct com os novos dados e, por fim, excluímos o produto chamando o método deleteProduct com o ID do produto a ser excluído.

//Esse exemplo demonstra como utilizar os métodos da classe ProductManager para gerenciar produtos no contexto do arquivo "products.json".