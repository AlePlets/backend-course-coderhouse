//Intecerptor para fazer validação e chamar a rota
//Middleware de nível de aplicativo

//Função middleware sem nenhum caminho de montagem. A função é executada toda vez que o app recebe uma requisição
    const app = express()
    app.use(function (req, res, next) {
        console.log('Time:', Date.now());
        next();
    })

//Middleware de endpoint função com if

    function mid1(req, res, next) { 
        req.data1 = 'uma data'
        next()
    }

    function mid2(req, res, next) { 
        req.data1 = 'outra data'
        next()
    }

    app.get('/rota1', mid1, (req, res) => { 
        res.json({
            data1:req.data1
        })
    })

    app.get('/rota2', mid1, mid2, (req, res) => { 
        res.json({
            data1: req.data1,
            data2: req.data2
        })
    })

//Middleware de nível do router - está vinculado a uma instância express.Router()

    const app2 = express();
    const router = express.Router();
    //função de middleware sem caminho de montagem
    //o código é executado a cada requisição do router
    router.use(function (req, res, next){
        console.log('Time', Date.now());
        next();
    });


//Middleware de tratamento de erros - recebem 4 argumentos 

    app.use(function (err, req, res, next){
        console.error(err.stack);
        res.status(500).send('Something broke!');
    });

//Middleware embutido - vinculada ao express.static - responsável pelo serviço de arquivo estático
    app.use(express.static('public', options));

    //diretório raiz onde o serviço estátivo é executado
    app.use(express.static(root, options)); 
    //  dotfiles, etag, extensions, index, lastModified, maxAge, redirect, setHeaders

//Middleware de terceiros
    //npm install cookie-parser - analisador de cookies do recurso de middleware
    var express = require('express');
    var app3 = express();
    var cookieParser = require('cookie-parser');

    //carrega o cookie-parsing middleware
    app.use(cookie.Parser());
    

