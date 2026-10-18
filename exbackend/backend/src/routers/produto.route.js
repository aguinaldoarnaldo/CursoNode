import express from "express";
import { listarProdutosController } from "../controllers/produto.controller.js";

const router = express.Router();

router.get("/", listarProdutosController)

export default router