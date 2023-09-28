const express = require('express');

const app = express();

//GET - Verbo HTTP - ordem para o servidor HTTP para responder
app.get('/hello', (request, response) => {
    response.send("Olá Mundo com Express!")  //pega esse response e manda uma mensagem com o SEND
});

app.listen(8080, () => console.log("Aplicaçao iniciada"))