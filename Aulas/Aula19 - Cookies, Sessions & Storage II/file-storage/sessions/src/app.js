import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import FileStore from 'session-file-store';
import MongoStore from 'connect-mongo';
// import __dirname from './util.js';

const fileStorage = FileStore(session);
const app = express();
const port = 3000;


app.use(cookieParser());
app.use(session({
    store:MongoStore.create({
        mongoUrl: 'mongodb+srv://diogomagliano:VqJ8vbXbJaqjat8F@cluster0.ppgtl4o.mongodb.net/?retryWrites=true&w=majority',
        mongoOptions:{ useNewUrlParser: true,useUnifiedTopology: true },
        ttl: 15,
    }),
    secret:'my-secret',
    resave: false,
    saveUninitialized: true,
}));



app.listen(port, () => {
    console.log('Server started on port 3000');
});





app.use(cookieParser());
// app.use(session({
//     storage: new fileStorage({path: './sessions', ttl:100, retries:0}),
//     secret: 'my-secret',
//     resave: false,
//     saveUnitialized: true,
// }));