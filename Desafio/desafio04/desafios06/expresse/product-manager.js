const fs = require('fs');

class ProductManager {
    
      async product(name, preco) {

        let readFile = this.readFile();        

       try {
              const response = await readFile;
                            
              let product = JSON.parse(response);

              product.push({ name: name, preco: preco });

              this.saveFile(JSON.stringify(product));

              return product;
              
          } catch (err) {                       
              return "erro, verificar se o arquivo db.txt inicial com '[' e terina com ']'";
          } 
            
    }

    async readFile(){
       return await fs.promises.readFile('./db.txt', 'utf-8');        
    }

    async saveFile(product){
        fs.promises.writeFile('./db.txt', product);
    }
}

module.exports.ProductManager = ProductManager;