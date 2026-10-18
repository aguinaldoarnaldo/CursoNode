import express from "express";

const app = express();

const PORT = 3000;


app.use(express.json());

//Criar Usuario
app.post("/usuarios", (req, res)=>{
    const {nome, idade, email} = req.body;

    // Criamos o objeto do usuário.
    const usuario ={
        nome,
        idade,
        email
    };
    /*const usuario = {
        nome: nome,
        idade: idade,
        email: email
    };*/

    // Retornamos status 201, indicando que o recurso foi criado.
    res.status(201).json({
        mensagem: "Usuario criado com sucesso!",
        usuario: usuario
    });
});

//Iniciar Servidor
app.listen(PORT, ()=>{
    //Informamos que o servidor iniciou
    console.log(`Servidor rondando em http://localhost:${PORT}`)
});