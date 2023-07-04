async function somar (valor1, valor2) { //recebe dois valores
    return new Promise((resolve, reject) => { //cria uma promessa resolve ou rejeita
        let result = valor1 + valor2 //soma valor 1 mais valor 2
        if(valor1 === 0 || valor2 ===0){ // se valor 1 ou valor forem igual a 0, rejeita e da operação desnecessária 
            reject('Operação Desnecessára')
        }
        else if(valor1 + valor2 <0){ //se algum dos valores for menor que 0, rejeita e da Deve retornar valores positivos
            reject('Deve retornar valores positivos');
        } else { 
            resolve(result) //faz o resultado
        }
    })
}

async function subtrair (valor1, valor2){ //recebe dois valores
    return new Promise((resolve, reject) => { //cria uma promessa resolve ou rejeita
        let result = valor1 - valor2 //subtrai valor 1 e valor 2
        if(valor1 === 0 || valor2 ===0){ // se valor 1 ou valor forem igual a 0, rejeita e da operação desnecessária
            reject('Operação Inválida')
        }
        else if(result < 0){ //se algum dos valores for menor que 0, rejeita e retorna Deve retornar valores positivos
            reject('Deve retornar valores positivos');
        } else { 
            resolve(result) 
        }
    })
}

async function multiplicar (valor1, valor2){ //recebe dois valores
    return new Promise((resolve, reject) => { //cria uma promessa resolve ou rejeita
        let result = valor1 * valor2 //multiplica dois valores
        if(result < 0){ // se resultado for menor que 0 retorna Deve ter valores positivos
            reject('Deve ter valores positivos')
        } else { 
            resolve(result) //se obedecer as condições, ele resolve
        }
    })
}

multiplicar(7,1)
  .then(result => {
    console.log(result);
  })
  .catch(reject => {
    console.log(reject);
  });