
import express from "express";

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/usuarios/:id", (req, res, next) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    const erro = new Error("ID do usuário inválido");

    return next(erro);
  }

  res.json({
    mensagem: "Usuário encontrado.",
    usuario: id,
  });
});

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.message);

  res.status(400).json({
    erro: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
