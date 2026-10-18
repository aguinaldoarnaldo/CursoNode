import express from "express";
const app = express();
const port = 3000;
app.use(express.json);

function validarUsuario(req, res, next) {
  const { nome, email } = req.body;

  const idade = Number(req.body.idade);
  
  if (!nome) {
    return res.status(400).json({
      mensagem: "O nome é obrigatorio.",
    });
  }

  if (isNaN(!idade)) {
    return res.status(400).json({
      mensagem: "A idade é obrigatoria.",
    });
  }

  if (!email) {
    return req.status(400).json({
      mensagem: "O email é obrigatorio.",
    });
  }

  next();
}

app.post("/usuarios", validarUsuario, (req, res) => {
  const { nome, idade, email } = req.body;

  res.status(201).json({
    mensagem: "Usuario cadastrado!",
    usuario: {
      nome,
      idade,
      email,
    },
  });
});

app.listen(port, () => {
  console.log(`Servidor Rodando em http://localhost:${port}`);
});
