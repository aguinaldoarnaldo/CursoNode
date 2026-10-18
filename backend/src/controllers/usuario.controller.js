import {
  buscarUsuarios,
  buscarUsuarioPorId,
} from "../services/usuario.service.js";

// Controller responsável por listar todos os usuários
export function listarUsuarios(req, res) {
  // Chama o Service para buscar todos os usuários
  const usuarios = buscarUsuarios();

  // Envia os usuários como resposta
  res.json({
    usuarios,
  });
}

// Controller responsável por buscar um usuário pelo ID
export function buscarUsuario(req, res) {
  // Pega o ID que veio pela URL
  // Exemplo: /usuarios/2 → req.params.id = "2"
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({
      mensagem: "ID do usuário inválido.",
    });
  }

  // Chama o Service passando o ID
  const usuario = buscarUsuarioPorId(id);

  if (!usuario) {
    return res.status(404).json({
      mensagem: "Usuário não encontrado.",
    });
  }

  // Envia o usuário encontrado
  res.json({
    usuario,
  });
}

export default listarUsuarios;
