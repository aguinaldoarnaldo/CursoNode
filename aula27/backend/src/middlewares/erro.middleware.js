export function tratamentoErros(err, req, res, next) {
    console.log("Erro encontrado: ", err.message)

    return res.status(500).json({
        mensagem: "Ocorreu um erro no servidor",
    });
}