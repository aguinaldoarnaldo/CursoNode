import express from "express";

const app = express();

const PORT = 3000;

app.use(express.json());

//listar usuarios

app.get("/usuarios", (req, res)=>{

    res.json([
        {
            id: 1,
            nome: "Aguinaldo Arnaldo",
            idade: 21
        },
        {
            id: 2,
            nome: "Joarquim Arnaldo",
            idade: 15
        }
    ]);
});

//Buscar usuarios por id
app.get("/usuarios/:id", (req, res)=>{
    
    const id = req.params.id;

    res.json({
        usuario: id,
        mensagem: "Usuario Encontrado"
    });
});

//Criar usuari
app.post("usuarios", (req, res)=>{

    const {nome, idade, email} = req.body;

    const usuario = {
        nome,
        idade,
        email
    };

    res.status(201).json({
        mensagem: "Usuarios cadastrado com sucesso!",
        usuario
    });
});

//Atualizar usuario
app.put("/usuarios/:id", (req,res)=>{

    const id = req.params.id;

    const {nome, idade, email} = req.body;

    res.json({
        id,
        nome,
        idade,
        email 
    });
});


//Atualizar parcialmente
app.patch("/usuarios/:id", (req, res)=>{

    const id = req.params.id;

    const dados = req.body;

    res.json({
        mensagem: "Dados atualizados parcilamente",
        usuario: id,
        dados
    });
});


//Delete excluir usuario
app.delete("/usuarios/:id", (req, res)=>{

    const id = params.id;

    res.json({
        mensagem: "Usuario excluido com sucesso!",
        usuarioId: id
    });
});

app.listen(PORT, ()=>{
    console.log(`Servido rodando em http://localhost:${PORT}`)
})