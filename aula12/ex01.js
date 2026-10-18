import express from "express";

const app = express();

const PORT = 3000;

// Middleware global para registrar as requisições
app.use((req, res, next) => {
  console.log(`Método: ${req.method}`);
  console.log(`URL: ${req.url}`);

  next();
});

// Rota principal
app.get("/", (req, res) => {
  res.json({
    mensagem: "API funcionando",
  });
});

// Rota de usuários
app.get("/usuarios", (req, res) => {
  res.json({
    mensagem: "Listar funcionários",
  });
});

// Middleware para verificar idade
function VerificarIdade(req, res, next) {
  const idade = Number(req.query.idade);

  // Verifica se a idade é um número válido
  if (Number.isNaN(idade)) {
    return res.status(400).json({
      mensagem: "Idade inválida.",
    });
  }

  // Verifica se é maior de idade
  if (idade < 18) {
    return res.status(403).json({
      mensagem: "Acesso negado. Você precisa ser maior de idade.",
    });
  }

  next();
}

// Área restrita
app.get("/area-restrita", VerificarIdade, (req, res) => {
  return res.json({
    mensagem: "Bem-vindo à área restrita!",
  });
});

// Middleware para verificar token
function VerificarToken(req, res, next) {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).json({
      mensagem: "Token não informado.",
    });
  }

  if (authorization !== "Bearer 123456") {
    return res.status(401).json({
      mensagem: "Token inválido.",
    });
  }

  next();
}

// Área administrativa
app.get("/admin", VerificarIdade, VerificarToken, (req, res) => {
  return res.json({
    mensagem: "Bem-vindo à área administrativa!",
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
