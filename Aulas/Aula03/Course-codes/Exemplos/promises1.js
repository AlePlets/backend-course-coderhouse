const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => { //Promessa passando um callback com dois parametros
        if(divisor===0) {
            reject('Não pode dividir por zero') //não pode cumprir a promessa
        }else {
            resolve(dividendo/divisor) //valores válidos então cumpre
        }
    })
}

dividir(6,3) //criada a promessa vamos usá-la, será cumprida, não tem valor = 0
.then(resultado => { //then recebe qualquer RESOLVE da promessa, usamos em caso em que sabemos que a função terá êxito
//resultado será o valor da resolução da promessa.
    console.log(resultado)
})

dividir(5,0)
.then(resultado => {
    console.log(resultado);
}).catch(error => { //como o divisor é zero, a promessão não é resolvida ai entra o catch indicando que não pode ser resolvida.
//Controlamos o que dá certo e o que dá errado.
    console.log(error);
})