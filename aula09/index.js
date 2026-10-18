import express from "express";

const app = express();

const port = 3000;

app.get("/usuarios", (req, res) => {
  const nome = req.query.nome;

  const idade = req.query.idade;

  const trabalho = req.query.trabalho;

  res.send(`Você pesquisou pelo usuário: ${nome} | Idade ${idade} | Trabalho ${trabalho}`);
});

app.get("/usuarios/:usuarioId/pedidos/:pedidosId", (req, res) => {
  const usuarioId = req.params.usuarioId;

  const pedidosId = req.params.pedidosId;

  res.send(`Você solicitou o usuario:${usuarioId} e o pedido ${pedidosId}`);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
