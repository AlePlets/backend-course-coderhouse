/* Validação de string com trim.
Achatamento de array com aninhamento múltiplo */

let cadeia1 = '                   olá'; //a mensagem dessa forma consome espaço desnecessário
console.log(cadeia1.trim()); //Usando o método trim(), removemos os espaços em branco do início e do final da string.

//Simulação de envio de uma mensagem vazia
let mensagens = [];
let intencaoDaMensagem = '                               ';
if (intencaoDaMensagem.trim().length>0) { //Verificamos se o tamanho da string resultante após o trim() é maior que 0.
    mensagens.push(intencaoDaMensagem.trim()); //Se for maior, significa que a mensagem não está vazia, então adicionamos a mensagem no array mensagens usando push().
} else {
    console.log('Mensagem Vazia, escreva algo');
};

let arrayAninhado = [1,32,4,5,6,[1,4,5,1],[3411,3,4]];

console.log(arrayAninhado.flat()); //Usando o método flat(), achatamos o array, removendo um nível de aninhamento.
//retorna um novo array com os elementos do array original e seus subarrays concatenados em um único nível.