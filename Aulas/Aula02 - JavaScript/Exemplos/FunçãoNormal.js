function nomeDaFuncao(parametros){
// Corpo da função, todas as instruções internas necessárias para que a função execute
    let variavelParaMinhaFuncao = 2;
    return variavelParaMinhaFuncao;
}

//EXEMPLO COMPLETO
function somaDoisNumeros (numero1, numero2) {
    //resultado só existe dentro da função
    let resultado;
    resultado = numero1 + numero2
    // Após a execução da função é necessário que retorne o valor da soma de dois números para outro escopo
    return resultado;
}

let total = somarDoisNumeros(2,3);
console.log(total);