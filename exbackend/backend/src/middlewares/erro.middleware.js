export function tratamentoErros(err, req, res, next) {
  console.error("Erro encontrado:", err.message);

  return res.status(500).json({
    mensagem: "Ocorreu um erro interno no servidor.",
  });
}
