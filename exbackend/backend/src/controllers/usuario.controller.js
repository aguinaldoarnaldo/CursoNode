import {
  atualizarUsuario,
  buscarUsuarioPorId,
  buscarUsuarioPorIdade,
  buscarUsuarioPorNome,
  buscarUsuarios,
  criarUsuario,
  excluirUsuario,
} from "../services/usuario.service.js";

//Listar Usuario
export function listarUsuarios(req, res) {
  const usuarios = buscarUsuarios();

  res.json({
    usuarios,
  });
}

//Buscar Usuario por id
export function buscarUsuario(req, res) {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({
      mensagem: "ID do usuário inválido.",
    });
  }

  const usuario = buscarUsuarioPorId(id);

  if (!usuario) {
    return res.status(404).json({
      mensagem: "Usuário não encontrado.",
    });
  }

  res.json({
    mensagem: "Usuário encontrado.",
    usuario,
  });
}

//Buscar usuario por idade
export function buscarUsuarioPor(req, res) {
  const idade = Number(req.params.idade);

  if (isNaN(idade)) {
    return res.status(400).json({
      mensagem: "Idade inválida.",
    });
  }

  const usuarios = buscarUsuarioPorIdade(idade);

  if (usuarios.length === 0) {
    return res.status(404).json({
      mensagem: "Nenhum usuário encontrado para essa idade.",
    });
  }

  res.status(200).json({
    usuarios,
  });
}

//Buscar Usuario Por nome
export function buscarUsuarioNome(req, res) {
  const nome = req.params.nome;

  const usuario = buscarUsuarioPorNome(nome);

  if (!usuario) {
    return res.status(404).json({
      mensagem: "Usuário não encontrado.",
    });
  }

  res.status(200).json({
    mensagem: "Usuário encontrado.",
    usuario,
  });
}


//Criar Usuario
export function criarUsuarioController(req, res) {
  console.log("POST chegou ao Controller!");

  const { nome, idade, email } = req.body;

  const usuario = criarUsuario({
    nome,
    idade: idadeConvertida,
    email,
  });

  res.status(201).json({
    mensagem: "Usuário criado com sucesso.",
    usuario,
  });
}

//Atualizar usuario
export function atualizarUsuarioController(req, res) {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({
      mensagem: "Id Invalido",
    });
  }

  const { nome, idade, email } = req.body;

  if (!nome || idade === undefined || !email) {
    return res.status(400).json({
      mensagem: "Nome, idade e email são obrigatórios.",
    });
  }

  if (!usuario) {
    return res.status(404).json({
      mensagem: "Usuario não encontrado.",
    });
  }

  const usuario = atualizarUsuario(id, {
    nome,
    idade: Number(idade),
    email,
  });

  res.status(200).json({
    mensagem: "Usuario Atualizado com sucesso",
    usuario,
  });
}

//Função para Excluir Usuario
export function excluirUsuarioController(req, res) {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({
      mensagem: "ID inválido.",
    });
  }

  const usuario = excluirUsuario(id);

  if (!usuario) {
    return res.status(404).json({
      mensagem: "Usuário não encontrado.",
    });
  }

  return res.status(200).json({
    mensagem: "Usuário excluído com sucesso.",
    usuario,
  });
}
