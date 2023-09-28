

//Criamos um array chamado valoresBase que contém os valores [1, 2, 3, 4, 5, 6].
let valoresBase = [1,2,3,4,5,6];

//Usamos o método "map()" no array "valoresBase" para criar um novo array chamado novosValores. A função de callback do "map()" é executada para cada elemento do array valoresBase.
//Na função de callback, "numero" representa cada elemento do array valoresBase e indice representa o índice atual do elemento.
let novosValores = valoresBase.map((numero, indice) => numero**indice); //Elevamos numero à potência indice usando a sintaxe numero**indice.

//exibir o array novosValores no console.
console.log(novosValores); //Resultado [ 1, 2, 9, 64, 625, 7776 ]


//Criamos um array chamado nomes com os valores ['Maria', 'João', 'José', 'Ancelmo'].
let nomes = ['Maria', 'João', 'José', 'Ancelmo'];

//Usamos o método includes() para verificar se o valor 'Ancelmo' está presente no array nomes.
if(nomes.includes('Ancelmo')){ //Se 'Ancelmo' estiver presente, será exibida a mensagem 'Ancelmo existe dentro do array'.
    console.log('Ancelmo existe dentro do array');
} else {
    console.log('Nome não encontrado na base de dados.') //Caso contrário, será exibida a mensagem 'Nome não encontrado na base de dados'.
}
