import express from "express";
import usuarioRouter from "./routers/usuario.route.js";
import produtoRouter from "./routers/produto.route.js";
import { tratamentoErros } from "./middlewares/erro.middleware.js";

const app = express();

const PORT = 3000;

app.use(express.json());

app.use("/usuarios", usuarioRouter);

app.use("/produtos", produtoRouter);

app.get("/", (req, res) => {
  res.json({
    mensagem: "API funcionando.",
  });
});

// Rota temporária para testar o tratamento de erros.
app.get("/erro-teste", (req, res, next) => {
  const erro = new Error("Falha durante o processamento.");

  next(erro);
});

app.use(tratamentoErros);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
