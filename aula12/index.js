import express from "express";

const app = express();

const PORT = 3000;

//Middleware
app.use((req, res, next) => {
  //Mostramos no terminal o metodo HTTP utilizado.
  console.log(`Método: ${req.method}`);

  //Mostradmos no terminal a URL acessada
  console.log(`URL: ${req.url}`);

  next();
});

app.get("/", (req, res) => {
  //Enviamos a resposta para o cliente
  res.json({
    mensagem: "Bem-vindo à API!",
  });
});

app.listen(PORT, () => {
    console.log(`Servidor rondando em http://localhost:${PORT}`);
});
