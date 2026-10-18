import express from "express";

const app = express();

const PORT = 3000;

app.use(express.json());

app.post("/usuarios", (req, res)=>{

    const {nome, idade, email} = req.body;

    const usuario = {
        nome,
        idade,
        email
    };

    res.status(201).json({
        mensagem: "usuario cadastrado com sucesso!",
        usuario
    });
});

//Rota de produto

app.post("/produtos", (req, res)=>{

    const { nome, preco, categoria} = req.body;

    const produto = {
        nome,
        preco,
        categoria
    }

    res.status(201).json({
        mensagem: "Produto criado com sucesso!",
        produto
    });
});



app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

