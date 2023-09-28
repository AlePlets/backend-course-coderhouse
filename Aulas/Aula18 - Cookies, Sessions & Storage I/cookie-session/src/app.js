import express from 'express';
import session from 'cookie-parser';
import exp from 'constants';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser());

app.get('/setCookie', (req, res) => {
    res.cookie('myCookie', 'Hello World', { maxAge: 900000}).send('Cookie setado');
});

app.get('/getCookie', (req, res) => {
    res.send(req.cookies);
});
app.get('/deleteCookie', (req, res) => {
    res.clearCookie('myCookie').send('Cookie deletado');
});
app.get('/setSignedCookie', (req, res) => {
    res.cookie('SignedCookie', 'Hello World', { maxAge: 900000, signed: true}).send('Cookie setado');
});