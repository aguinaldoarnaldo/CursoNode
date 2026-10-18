import express from "express";
const app = express();
const PORT = 3000;

// Habilitamos o recebimento de JSON.
app.use(express.json());

app.post("/usuarios", (req, res)=>{

    // Pegamos os dados enviados no corpo da requisição.
    const dados = req.body;

    // Mostramos os dados no terminal.
    console.log(dados);

    // Respondemos para o cliente.   
    res.json({
        mensagem: "Usuario recebido com sucesso!",
        usuario: dados
    });
});

//Inicar o Servidor
app.listen(PORT, ()=>{
    console.log(`Servidor Rodando em http://localhost:${PORT}`);
});