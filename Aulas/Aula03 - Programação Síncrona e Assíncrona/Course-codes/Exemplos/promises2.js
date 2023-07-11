
//uma promessa (Promise) é criada com uma função de executor que recebe dois parâmetros: resolve e reject
new Promise(function (resolve, reject){
    setTimeout(() => resolve(1), 1000); // Após 1 segundo, a promessa é resolvida com o valor 1
})
  .then((result) => {
    console.log(result); // Exibe o valor resolvido da primeira promessa (1)
    return result * 2; // Retorna o dobro do valor resolvido
  })
  .then((result) => {
    console.log(result); // Exibe o valor resultante do dobro do valor resolvido (2)
    return result * 2; // Retorna o resultado multiplicado por 2 novamente
  })
  .then((result) => {
    console.log(result); // Exibe o valor resultante da multiplicação anterior (4)
    return result * 2; // Retorna o resultado multiplicado por 2 mais uma vez
  });