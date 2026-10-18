import express from "express";

import listarUsuarios from "../controllers/usuario.controller.js";

// Criamos um router do Express
const router = express.Router();

// Rota para listar usuários
router.get("/", listarUsuarios);

// Exportamos o router
export default router; 