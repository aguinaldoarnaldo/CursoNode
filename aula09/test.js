import express from "express";

const app = express();

const port = 3000;

app.get("/produtos", (req, res) => {

  const categoria = req.query.categoria;
  const precoMax = Number(req.query.precoMax);

  res.json({
    categoria: categoria,
    precoMax: precoMax
  })
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
