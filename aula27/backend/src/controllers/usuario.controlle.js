import { atualizarUsuario, criarUsuario, listarUsuario } from "../services/usuario.service.js";

export async function listarUsuarioController(req, res, next) {
  try {
    const resultado = await listarUsuario();
    res.status(200).json({
      mensagem: "Lista de usuários",
      usuarios: resultado,
    });
  } catch (error) {
    next(error);
  }
}

export async function criarUsuarioController(req, res, next) {
  try {
    const { nome, idade, email } = req.body;

    const resultado = await criarUsuario(nome, idade, email);

    res.status(201).json({
      mensagem: "usuario criado com sucesso",
      usuario: resultado,
    });
  } catch (error) {

    //Verificar se o email já existe no banco de dados
    if (error.code === "23505") {
      return res.status(409).json({
        mensagem: "Email já cadastrado!",
      });
    }

    next(error);
  }
}

export async function atualizarUsuarioController(req, res, next) {
  try {
    const {id} = req.params;

    const {nome, idade, email} = req.body;

    const resultado = await atualizarUsuario(id, nome, idade, email);

    if (!resultado) {
      return res.status(404).json({
        mensagem: "Usuario não encontrado!",

      })
    }

    return res.status(200).json({
      mensagem: "usuario atualizado com sucesso",
      usuario: resultado,
    })

  } catch (error) {
    next(error);
  }
}

export async function excluirUsuarioController(req, res, next) {
  try {
    const {id} = req.params;
  
    const resultado = await excluirUsuario(id);

    if (!resultado) {
      return res.status(404).json({
        mensagem: "Usuario não encontrado!",
      }); 
    }

    return res.status(200).json({
      mensagem: "Usuario excluido com sucesso",
    })
  } catch (error) {
    next(error);
  }
}
