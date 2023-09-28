let arrayDeProva = [1,2,3,4,5]; // Array de prova com valores iniciais

const minhaFunctionMap = (array,callback) => {
    let novoArray = [];
    for (let i=0;i< array.length;i++) {
        let novoValor = callback(array[i]); // Aplica a função de callback em cada elemento do array
        novoArray.push(novoValor); // Armazena os resultados em um novo array
    }
    return novoArray;
}
    

let novoArrayProprio = minhaFunctionMap(arrayDeProva, x=>x*2); // Utiliza a função 'minhaFunctionMap' com uma função de callback que multiplica cada elemento por 2
let novoArrayComMap = arrayDeProva.map(x=>x*2); // Utiliza o método 'map' do array para multiplicar cada elemento por 2

Array.prototype.minhaPropriaFunctionMap = function(callback) {
    let novoArray = [];
    for (let i = 0; i < this.length; i++) {
        let novoValor = callback(this[i]); // Aplica a função de callback em cada elemento do array atual
        novoArray.push(novoValor); // Armazena os resultados em um novo array
    }
    return novoArray;
}

let arrayProva = [1,2,3,4,5];
let novosValores = arrayProva.minhaPropriaFunctionMap(x=>x+1); // Utiliza o método 'minhaPropriaFunctionMap' adicionado ao protótipo do array, com uma função de callback que adiciona 1 a cada elemento

console.log(novosValores);