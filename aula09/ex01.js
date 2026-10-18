import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res)=> {

    res.json({
        mensagem: "Bem-Vindo à API de usuários"
    });

});

app.get("/usuarios/:id", (req, res)=>{

    const id = req.params.id;

    res.json({
        usuarioId: id,
        mensagem: "Usuario encontrado"
    });
});

app.get("/usuarios", (req, res)=>{

    const nome = req.query.nome;

    const idade = req.query.idade;

    res.json({
        nome: nome,
        idade: idade,
        mensagem: "Pesquisa realizada"
    });
});



app.get("/produtos/:id", (req, res)=>{

    const id = req.params.id;

    res.json({
        produtoId: id,
        mensagem: "Produto Encontrado"
    })
})


app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${P}`)
})