import { json } from "body-parser";
import express from "express";

const app = express();

const PORT = 3000;

app.use(express.json());

//==============================
//Rota PUT - Atualizar usuario
//==============================

app.put("/usuarios/:id", (req, res)=>{

    //Pegamos os ID di usuario
    const id = req.params.id;

    //Pegamos os novos dados
    const {nome, idade, email} = req.body;

    //Retornamos os dados a atualizados.
    res.status(200).json({
        menagem: "Usuario atualizado com sucesso!",
        usuario: {
            id,
            nome,
            idade,
            email
        }
    });
});


//==============================
//Rota PATCH - ATUALIZAR PARCILAMENTE
//==============================
app.patch("/usuarios/:id", (req, res)=>{
    const id = req.params.id;

    const dados = req.body;

    res.json({
        mensagem: "Usuario atualizado parcialmente!",
        usuarioId: id,
        dados
    })
});

//=============================
//Rota DELETE - excluir usuario
//==============================
app.delete("/usuarios/:id", (req, res)=>{

    const id = req.params.id;

    res.json({
        mensagem: "Usuario excluido com sucesso!",
        usuario: id

    })
})

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});