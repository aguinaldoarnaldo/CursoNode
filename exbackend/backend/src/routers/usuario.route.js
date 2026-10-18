import express from "express";

import {
  buscarUsuario,
  buscarUsuarioNome,
  buscarUsuarioPor,
  listarUsuarios,
  criarUsuarioController,
  atualizarUsuarioController,
  excluirUsuarioController,
} from "../controllers/usuario.controller.js";
import { validarUsuario } from "../middlewares/validarUsuario.middleware.js";

const router = express.Router();

router.get("/", listarUsuarios);

router.get("/idade/:idade", buscarUsuarioPor);

router.get("/nome/:nome", buscarUsuarioNome);

router.get("/:id", buscarUsuario);

router.post("/",validarUsuario, criarUsuarioController);

router.put("/:id", atualizarUsuarioController);

router.delete("/:id", excluirUsuarioController);

export default router;
