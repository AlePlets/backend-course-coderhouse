// Uma função arrow é anônima, quer dizer que não possui nomeDaFuncao, porém é possível atribui-la a uma variável para que possa identificá-la
const identificadorDeFuncao = (parametros) => {
    // Corpo da função, todas as instruções internas necessárias para que a função execute
    let variavelParaMinhaFuncao = 2;
    return variavelParaMinhaFuncao;
    //com o Return podemos enviar o valor da variável para outro escopo que necessite desse valor
    //a arrow function, possui retorno implícito

}

const identificadorDeFuncaoRetornoImplicito = (parametros) => parametros;

//EXEMPLO COMPLETO//
const somarDoisNumeros = (numero1, numero2) => {
    let resultado;
    resultado = numero1 + numero2
    return resultado;
}

const somarDoisNumerosImplicito = (numero1,numero2) => numero1+numero2;