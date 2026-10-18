import express from "express"

const app = express();

const PORT = 3000;

app.use(express());

app.get("/", (req, res)=>{
    res.status(200).json({
        mensagem: "Olha Aguinaldo ta tudo bem."
    })
})

app.listen(PORT, ()=>{
    console.log(`Servidor Rodando em http://localhost:${PORT}`)
})

