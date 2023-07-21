import express from 'express';
import session from 'express-session';

const app = express();

app.use(session({
    secret: 'my-secret',



    resave: true,



    saveUninitialized: true
}));

app.get('/session', (req, res) => {
    if (req.session.count) {
        req.session.count++;
        res.send(`voce visitou ${req.session.count} vezes`);
    } else {
        req.session.count = 1;
        res.send('Bem vindo!');
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (!err)  res.send('Logout efetuado com sucesso!');
        else res.send('Erro ao efetuar logout!');
    });
});    

function auth(req, res, next) {
    if (req.session?.user === 'admin' && req.session?.admin) {
    return next();
    }
    return res.status(401).send('Não autorizado');
}

app.get('/privado', auth, (req, res) => {
    res.send('Você já está logado!');
});

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.json({ status: 'Erro ao efetuar logout', body: err });
        }
        res.send('Logout efetuado com sucesso!');
    });
});

app.listen(8080, () => {
    console.log('Server started on port 3000');
});