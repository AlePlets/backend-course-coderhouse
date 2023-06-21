//Criamos um objeto chamado impostos que contém várias propriedades representando diferentes impostos e seus valores.
let impostos = {
    imposto1: 2341,
    imposto2: 341,
    imposto3: 4611,
    imposto4: 111
};

// Converte o objeto "impostos" em uma matriz de arrays contendo pares chave-valor
let partChaveValor = Object.entries(impostos);
console.log(partChaveValor);

// Obtém apenas as propriedades do objeto "impostos" em um array
let apenasPropriedades = Object.keys(impostos);
console.log(apenasPropriedades);

// Obtém apenas os valores do objeto "impostos" em um array
let apenasValores = Object.values(impostos);
console.log(apenasValores);

//Utilizando o método reduce(), somamos todos os valores do array apenasValores.
//A função de callback passada para o reduce() recebe dois parâmetros: valorInicial (acumulador) e valorAcumulado (valor atual do array).
let impostosTotais = apenasValores.reduce((valorInicial, valorAcumulado)=>valorAcumulado+valorInicial);
console.log(impostosTotais);