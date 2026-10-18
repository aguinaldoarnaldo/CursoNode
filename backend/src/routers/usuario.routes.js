import express from "express";
import {
  listarUsuarios,
  buscarUsuario,
} from "../controllers/usuario.controller.js";

//Criando um Router Express
const router = express.Router();

router.get("/", listarUsuarios);
router.get("/:id", buscarUsuario)

export default router;
