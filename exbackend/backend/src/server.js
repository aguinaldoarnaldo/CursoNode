import express from "express";
import { PORT } from "./config/env.js";
import "dotenv/config";
import pool from "./config/database.js";
import usuarioRouter from "./routers/usuario.route.js";
import produtoRouter from "./routers/produto.route.js";
import { tratamentoErros } from "./middlewares/erro.middleware.js";
import "dotenv/config";

const app = express();


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

try {
  const resultado = await pool.query("SELECT NOW()");

  console.log("Ligação ao PostgreSQL estabelecida!");
  console.log("Hora do servidor da base de dados:", resultado.rows[0].now);
} catch (erro) {
  console.error("Erro ao ligar ao PostgreSQL:", erro.message);
}

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
