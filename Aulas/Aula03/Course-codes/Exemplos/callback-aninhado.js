const copiarArquivo = (nomeArquivo, callback) => {
    buscarArquivo(nomeArquivo, (error, arquivo) => { // Chama a função assíncrona 'buscarArquivo' para buscar o arquivo original
        if(error) { // Se ocorrer um erro durante a busca do arquivo original
            callback(error); // Chama o callback com o erro
        } else { // Caso contrário, se a busca for bem-sucedida
            const nomeCopia = nomeArquivo + '.copy'; // Cria um nome para a cópia do arquivo
            escrevaArquivo(nomeCopia, texto, (error) => { // Chama a função assíncrona 'escrevaArquivo' para escrever a cópia do arquivo
                if (error) { // Se ocorrer um erro durante a escrita da cópia
                    callback(error); // Chama o callback com o erro
                } else { // Caso contrário, se a escrita for bem-sucedida
                    callback(null); // Chama o callback sem erros (passando null como argumento)
                }
            });
        }
    });
};
