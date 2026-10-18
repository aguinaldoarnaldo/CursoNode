import express from "express";

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/test", (req, res) => {
  const erro = new Error("Erro de teste.");

  next(erro);
});

function errorHandler(err, req, res, next) {
  console.error(err);

  res.status(500).json({
    message: "Ocorreu um erro no servidor.",
  });

}

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
