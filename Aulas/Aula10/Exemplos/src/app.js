//servidor express com Handlebars + socket.io
import express from 'express';
import __dirname from './utils.js';
import handlebars from 'express-handlebars';
import viewsRouter from './routes/view.router.js';
import {server} from 'socket.io'//Importação nova, esse servidor será criado a partir do servidor HTTP
;
const app = express()
const httpServer = app.listen(8080, () =>console.log("Ouvindo na porta 8080"));//Somente Servidor HTTP

//Criamos um servidor para sockets dentro do servidor principal
const socketServer = new Server(httpServer);//socketServer será um servidor para trabalhar com sockets

//Configuração de tudo relacionado a templates
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname+'/views');
app.set('view engine', 'handlebars');
app.use(express.static(__dirname+'./public'));//Importante ter arquivos js e css nos templates
app.use('/', viewsRouter);

// cliente coneta com websocket no socketServer( websocketsocketServer.on signfica que está esperando algo acontecer) quando o socketServer escuta que existe uma connection ele mostra a mensagem "Novo Cliente conectado"
socketServer.on('connection', socket =>{ 
    console.log('Novo Cliente conectado');
    //socket.on('message', data=>) significa "ouvir quando o socket conectado enviar um envento ipo message. Assim que um evento desse tipo for recebido, com os 'data' que foi enviado, envie-o para o console
    socket.on('message', data=>{ //servidor escuta
        console.log(data)
    });
}); 

socket.emit('event_for_individual_socket', 'Está mensagem só deve ser recebida pelo socket');

socket.broadcast.emit('event_for_everyone_but_the_current_socket', 'Este evento será visto por todos sockets conectados, exceto o socket atual onde a msg foi enviada.');

socketServer.emit('event_for_all', 'Está msg é recebida por todos sockets conectados');


