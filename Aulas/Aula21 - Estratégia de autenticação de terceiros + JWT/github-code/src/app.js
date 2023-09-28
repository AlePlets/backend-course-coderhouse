import express from 'express';
import handlebars from 'express-handlebars';
import { __dirname } from './util.js';
import viewsRouter from './routes/views.router.js';
import sessionsRouter from './routes/session.router.js';
import mongoose from 'mongoose';
import passport from 'passport';
import { initializePassport } from './config/passport.config.js';
import session from 'express-session';

const app = express();
const server = app.listen(8080, () => console.log('Server is running'));
const connection = mongoose.connect('mongodb+srv://ale:123@cluster0.sxp8jkm.mongodb.net/auth?retryWrites=true&w=majority');
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

initializePassport();
app.use(session({
    secret: 'secret'
}));

app.use(passport.initialize());

app.use('/',viewsRouter);
app.use('/api/sessions',sessionsRouter);