import express from "express";
import usuarioRoutes from "./routers/usuario.routes.js";

const app = express();

const PORT = 3000;

app.use(express.json());

//Rotas de usuários.
app.use("/usuarios", usuarioRoutes);

app.get("/", (req, res) => {
  res.json({
    mensagem: "API funcionando.",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
