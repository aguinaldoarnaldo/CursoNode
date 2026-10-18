const usuarios = [
  {
    id: 1,
    nome: "AGuinaldo Arnaldo Arnaldo",
    idade: 21,
    email: "aguinaldoarnaldoanaldo@gmail.com",
  },
  {
    id: 2,
    nome: "Esperança Arnaldo",
    idade: 27,
    email: "ancaleaarnaldo@gmail.com",
  },
  {
    id: 3,
    nome: "Adelaide Jose Arnaldo",
    idade: 23,
    email: "adelaidearnaldo@gmail.com",
  },
  {
    id: 4,
    nome: "Ludivina Arnaldo",
    idade: 21,
    email: "ludivinaarnaldo@gmail.com",
  },
  {
    id: 5,
    nome: "Aldina Arnaldo",
    idade: 21,
    email: "aldinaarnaldo@gmail.com",
  },
];

export function buscarUsuarios() {
  return usuarios;
}

export function buscarUsuarioPorId(id) {
  const usuario = usuarios.find((usuario) => usuario.id === id);

  return usuario;
}

export function buscarUsuarioPorIdade(idade) {
  const usuariosEncontrados = usuarios.filter(
    (usuario) => usuario.idade === idade,
  );

  return usuariosEncontrados;
}

export function buscarUsuarioPorNome(nome) {
  const usuario = usuarios.find((usuario) => usuario.nome === nome);

  return usuario;
}

export function criarUsuario(dadosUsuario) {
  const novoId = usuarios.length + 1;

  const novoUsuario = {
    id: novoId,
    nome: dadosUsuario.nome,
    idade: dadosUsuario.idade,
    email: dadosUsuario.email,
  };

  usuarios.push(novoUsuario);

  return novoUsuario;
}

export function atualizarUsuario(id, dadosUsuario) {
  const usuario = usuarios.find((usuario) => usuario.id === id);

  if (!usuario) {
    return null;
  }

  //Atualiza os dados do usuario encontrado.
  Object.assign(usuario, dadosUsuario);

  //Devolve o usuario atualizado
  return usuario;
}

export function excluirUsuario(id) {
  const indice = usuarios.findIndex((usuario) => usuario.id === id);

  if (indice === -1) {
    return null;
  }

  const usuarioExcluido = usuarios.splice(indice, 1);

  return usuarioExcluido[0];
}
