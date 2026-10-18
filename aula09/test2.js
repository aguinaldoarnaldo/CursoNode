import express from "express"

const app = express()

const port = 3000;

//Rota principal
app.get("/", (req, res)=>{

    //retornamos a mensgem em formato json
    res.json({
        mensagem: "API funcionado!"
    });
});

//Rota com paramentro 
// O :id representa o id do usuario.
app.get("/usuario/:id", (req, res) =>{

    const id = req.params.id;

    //retornamos o id recebido
    res.json({
        usuarioId: id
    });
});


app.get("/usuarios", (req, res)=>{
    
    const nome = req.query.nome;

    res.json({
        nome: nome
    });
});




app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})
