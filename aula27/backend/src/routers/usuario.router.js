import express from "express";
import { listarUsuarioController, criarUsuarioController, atualizarUsuarioController } from "../controllers/usuario.controlle.js";
import { validarUsuario } from "../middlewares/validarUsuario.middleware.js";
const router = express.Router();

router.get("/", listarUsuarioController);
router.post("/", validarUsuario, criarUsuarioController);
router.put("/:id", validarUsuario, atualizarUsuarioController);

export default router;