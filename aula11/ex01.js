import express from "express";
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes

//GET Listar produtos
app.get("/produtos", (req, res) => {
  res.status(200).json([
    {
      id: 1,
      nome: "NoteBook",
      preco: 2000,
      categoria: "Tecnologica",
    },

    {
      id: 2,
      nome: "HUb",
      preco: 19000,
      categoria: "IT",
    },
  ]);
});

//GET pegar produto por id
app.get("/produtos/:id", (req, res) => {
  const id = req.params.id;
    
  res.status(200).json({
    mensagem: "produto encontrado com sucesso!",
    produto: id
  });
});

app.post("/produtos", (req, res) => {
  const { nome, preco, categoria } = req.body;

  const produto = {
    nome,
    preco,
    categoria,
  };

  res.status(201).json({
    mensagem: "Produto criado com sucesso!",
    produto,
  });
});

app.put("/produtos/:id", (req, res) => {
  const id = req.params.id;

  const { nome, preco, categoria } = req.body;

  res.status(200).json({
    mensagem: "Produto atualizado com sucesso!",
    produto: {
      id,
      nome,
      preco,
      categoria,
    },
  });
});

app.patch("/produtos/:id", (req, res) => {
  const id = req.params.id;

  const dados = req.body;
  res.status(200).json({
    mensagem: "Produto Atualizado parcialmente!",
    dados,
  });
});

app.delete("/produtos/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).json({
    mensagem: "produtos excluidos com sucesso.",
    produtoId: id,
  });
});

// Start server
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
