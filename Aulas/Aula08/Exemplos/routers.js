                        // # Aula 7
// Converter uma pasta em um recurso estático(cliente acessa caminho do arquivo)
    app.use(express.static('público'))
    // http://localhost:3000/hello.html
    // http://localhost:3000/images/kitten.jpg
    // http://localhost:3000/css/style.css
    // http://localhost:3000/js/app/js
    // http://localhost:3000/images/bg.png

//Prefixo Virtual (onde o caminhão nao existe de fato no sistema de arquivos) Carrega o arquivo a partir do /static
    app.use('static',express.static('public'))   
    // http://localhost:3000/static/hello.html
    // http://localhost:3000/static/images/kitten.jpg
    // http://localhost:3000/static/css/style.css
    // http://localhost:3000/static/js/app/js
    // http://localhost:3000/static/images/bg.png
          
//Path absoluto(o caminho é relativo ao diretório de onde o processo de nó é iniciado)
    app.use('/static',express.static(__dirname+'/public'))    


