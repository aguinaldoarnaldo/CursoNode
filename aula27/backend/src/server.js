import express from "express";
import { tratamentoErros } from "./middlewares/erro.middleware.js";
import usuarioRouter from "./routers/usuario.router.js";
import { PORT } from "./config/env.js";
import "dotenv/config.js";

const app = express();

app.use(express.json());


app.use("/usuario", usuarioRouter);


app.get("/", (req, res) => {
    res.json({ mensagem: "API funcionando!" });
});


app.use(tratamentoErros);

app.listen(PORT, () => {
    console.log(`Servidor a correr na porta http://localhost:${PORT}`);
});