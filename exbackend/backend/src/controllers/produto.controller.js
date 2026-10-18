import { buscarProdutos } from "../services/produto.service.js";

export function listarProdutosController(req, res) {
  const produtos = buscarProdutos();

  res.status(200).json({
    produtos,
  });
}
