import express from "express";

// Criamos a aplicação Express.
const app = express();

// Definimos a porta do servidor.
const PORT = 3000;


// Middleware responsável por interpretar JSON.
app.use(express.json());


// Middleware para validar usuários.
function validarUsuario(req, res, next) {

  // Pegamos nome e email do corpo da requisição.
  const { nome, email } = req.body;

  // Pegamos a idade e transformamos em número.
  const idade = Number(req.body.idade);


  // Verificamos se o nome foi informado.
  if (!nome) {
    return res.status(400).json({
      mensagem: "O nome é obrigatório.",
    });
  }


  // Verificamos se a idade é um número válido.
  if (isNaN(idade)) {
    return res.status(400).json({
      mensagem: "A idade é obrigatória.",
    });
  }


  // Verificamos se a idade é maior que zero.
  if (idade <= 0) {
    return res.status(400).json({
      mensagem: "A idade deve ser maior que zero.",
    });
  }


  // Verificamos se o email foi informado.
  if (!email) {
    return res.status(400).json({
      mensagem: "O email é obrigatório.",
    });
  }


  // Se tudo estiver correto, continuamos para a rota.
  next();
}


// Rota para cadastrar usuários.
app.post("/usuarios", validarUsuario, (req, res) => {

  // Pegamos os dados enviados pelo cliente.
  const { nome, idade, email } = req.body;

  // Retornamos o usuário cadastrado.
  res.status(201).json({
    mensagem: "Usuário cadastrado com sucesso!",
    usuario: {
      nome,
      idade,
      email,
    },
  });
});


// Middleware para validar produtos.
function validarProduto(req, res, next) {

  // Pegamos nome e categoria.
  const { nome, categoria } = req.body;

  // Pegamos o preço e transformamos em número.
  const preco = Number(req.body.preco);


  // Verificamos se o nome foi informado.
  if (!nome) {
    return res.status(400).json({
      mensagem: "O nome do produto é obrigatório.",
    });
  }


  // Verificamos se o preço é um número válido.
  if (isNaN(preco)) {
    return res.status(400).json({
      mensagem: "O preço é obrigatório.",
    });
  }


  // Verificamos se o preço é maior que zero.
  if (preco <= 0) {
    return res.status(400).json({
      mensagem: "O preço deve ser maior que 0.",
    });
  }


  // Verificamos se a categoria foi informada.
  if (!categoria) {
    return res.status(400).json({
      mensagem: "A categoria é obrigatória.",
    });
  }


  // Permite que a requisição continue.
  next();
}


// Rota para cadastrar produtos.
app.post("/produtos", validarProduto, (req, res) => {

  // Pegamos os dados enviados pelo cliente.
  const { nome, preco, categoria } = req.body;

  // Retornamos o produto cadastrado.
  res.status(201).json({
    mensagem: "Produto cadastrado com sucesso.",
    produto: {
      nome,
      preco,
      categoria,
    },
  });
});


// Iniciamos o servidor.
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});