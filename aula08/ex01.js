import express from "express"


const app = express();

const port = 3000;

app.get("/", (req, res)=>{
    res.send("Bem-vindo à minha API!")
})

app.get("/sobre", (req, res) => {
    res.send("Esta API foi criada por Aguinaldo.")
})

app.get("/status", (req, res)=>{
    res.send("API funcionando normalmente!")
})

app.listen(port, () =>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})