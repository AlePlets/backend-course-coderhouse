const fs = require('fs');
const filePath = './04dataHoraAtual.txt'

fs.writeFile(filePath, new Date().toLocaleString(), (error) =>{
    if(error) {
        console.log('Erro ao escrever o arquivo');
        return
    }
    console.log('Arquivo criado com sucesso');
})

fs.readFile(filePath, 'utf-8', (erro, resultado) => {
    if(erro){
        console.log('Erro na leitura')
        return;
    }
    console.log('Conteúdo do arquivo:' + resultado)
})

