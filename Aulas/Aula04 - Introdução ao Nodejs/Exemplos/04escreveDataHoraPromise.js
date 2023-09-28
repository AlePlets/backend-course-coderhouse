/////////////////////////////////////////////////////////////////
//fs com promisses 
const fs = require('fs');
const filePathh = './04dataHoraAtualpromises.txt'
const operacaoAsync = async() => {
    await fs.promises.writeFile(filePathh, new Date().toLocaleString()) //promisse para esperar a resposta e imprimir o resultado
    console.log('Arquivo escrito com sucesso')
    resultado = await fs.promises.readFile(filePathh, 'utf-8')
    console.log(resultado)
}

operacaoAsync();
