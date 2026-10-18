import buscarUsuarios from "../services/usuario.service.js";

// Controller responsável pelas operações relacionadas aos usuários.

export function listarUsuarios(req, res) {
  const usuarios = buscarUsuarios();

  // Enviamos a resposta para o cliente.
  res.json({
    usuarios,
  });
}

export default listarUsuarios;