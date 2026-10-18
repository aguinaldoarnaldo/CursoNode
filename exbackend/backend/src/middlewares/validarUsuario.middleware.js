export function validarUsuario(req, res, next) {
  const { nome, idade, email } = req.body;

  //verificar se os campos obrigatorios foram envaidos
  if (!nome || idade === undefined || !email) {
    return res.status(400).json({
      mensagem: "Nome, idade e email são obrigatórios.",
    });
  }
  //converter idade para número
  const idadeConvertida = Number(idade);

  //Verificar se a idade é um número
  if (Number.isNaN(idadeConvertida)) {
    return res.statusÇ(400).json({
      mensagem: "A idade deve ser um número.",
    });
  }

  //verificar se a idade é um número positivo
  if (idadeConvertida <= 0) {
    return res.status(400).json({
      mensagem: "A idade deve ser maior que zero",
    });
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailValido.test(email)) {
    return res.status(400).json({
      mensagem: "Email inválido.",
    });
  }

  if (idadeConvertida < 18) {
  return res.status(400).json({
    mensagem: "É necessário ter pelo menos 18 anos.",
  });
}

  //Guardar a idade convertida para o controller utilizar.
  req.body.idade = idadeConvertida;

    // Se todas as validações passarem, continua.
  next();
}

/*
| Atalho | Resultado |
|---|---|
| `exappm`   | Aplicação Express completa |
| `eximport` | Importação de um módulo |
| `exexport` | Função exportada |
| `exroute`  | Router Express |
| `exctrl`   | Controller |
*/