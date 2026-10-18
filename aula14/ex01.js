import express from "express";

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    mensagem: "API Funcionando!",
  });
});

app.get("/usuarios/:id", (req, res, next) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    const erro = new Error("ID Inválido.");
    erro.statusCode = 400;

    return next(erro);
  }

  res.json({
    mensagem: "Usuário encontrado!",
    usuario: id,
  });
});

// Middleware global de tratamento de erros
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    erro: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Servidor Rodando em http://localhost:${PORT}`);
});