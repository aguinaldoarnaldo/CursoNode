export function validarUsuario(req, res, next) {

    const { nome, idade, email } = req.body;

    if (!nome || idade === undefined || !email) {
        return res.status(400).json({ 
            mensagem: "Nome, idade e email são obrigatórios!"
         });
    }

    const idadeConvertida = Number(idade);

    if (Number.isNaN(idadeConvertida) || idadeConvertida < 0) {
        return res.status(400).json({ 
            mensagem: "Idade deve ser um número positivo!"
         });
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
        return res.status(400).json({ 
            mensagem: "Email inválido!"
         });
    }

    if (idadeConvertida < 18) {
        return res.status(400).json({
            mensagem: "É necessário ter pelo menos 18 anos."
        });
    }
    
    req.body.idade = idadeConvertida;

    next();
}