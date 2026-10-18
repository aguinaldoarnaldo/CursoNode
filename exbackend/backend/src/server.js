import express from "express";
import usuarioRouter from "./routers/usuario.route.js";

const app = express();

const PORT = 3000;

app.use(express.json());

app.use("/usuarios", usuarioRouter);

app.get("/", (req, res) => {
  res.json({
    mensagem: "API funcionando.",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
