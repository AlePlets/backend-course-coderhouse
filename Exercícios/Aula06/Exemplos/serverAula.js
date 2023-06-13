const http = require('http'); //importa modulo http

const server = http.createServer((request, response) => {
    response.end("Criando um servidor")
});

server.listen(8080, () => {
    console.log("Servidor On na porta 8080")
});