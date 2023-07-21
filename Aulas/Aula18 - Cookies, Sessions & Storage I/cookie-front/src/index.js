import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/static', express.static('../static')) //cria uma rota para o express.static, para acessar os arquivos da pasta static

app.use(cookieParser());

//maxAge: 1200 = 2 minutos para expirar
app.post('/cookie', (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    res.cookie(`Cookie de ${nome}`, email, {maxAge: 600000}).redirect('/index.html') //nao envia resposta , na response coloca um cookie e cria com os dados... envia os dados após o send
});

app.get('/cookie/read', (req, res) => {
    res.send(req.cookies); //texto quando acesso, pega um cookie pega requisição req.cookie e devolve via send. 
});

app.listen(port, () => {
    console.log('Server started on port 3000');
});