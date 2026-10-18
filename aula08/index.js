const express = require('express');


 //criamos uma aplicação express
const app = express();

// Definimos a porta onde nosso servidor vai funcionar
const port = 3000;

    //criamos nossa primeira rota
app.get("/", (req, res) => {
    //Enviamos uma resposta para quem acessar essa rota
    //res.send("Olá! Meu primeiro servidor com express.js");
    res.send("Olá! Estou aprendendo servidor com express.js")

});

//Iniciamos o servidor
app.listen(port, () => {

    //mostrar mensagem no terminal
    console.log(`Servidor rodando em http://localhost:${port}`)
})