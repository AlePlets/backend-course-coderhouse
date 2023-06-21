const socket = io(); /*
io significa "socket.io", é chamado assim por convenção.
a linha 1 permite instancia o socket e armazená-lo na constante "socket"
Este socket é o que usaremos para poder nos comunicar com o socket do servidor
Nesse ponto somos "Clientes", representamos uma visão */

socket.emit('message', 'Estou me comunicando a partir de um websocket.')