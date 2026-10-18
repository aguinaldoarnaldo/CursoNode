***Estudar mais sobre React Native***

export function criarUsuario(dadosUsuario){
    const novoId = usuarios.length + 1;

    const novoUsuario = {
        id: novoId,
        nome: dadosUsuario.nome,
        idade: dadosUsuario.idade,
        email: dadosUsuario.email,
    }

    usuarios.push(novoUsuario);

    return novoUsuario;

}

****no controller*****

export function criarUsuarioController(req, res) {
    const {nome, idade, email} = req.body;

    if(!nome, || idade === undefined, || !email){
        return res.status(400).json({
            mensagem: "Nome, idade e email são obrigatórios",
        })
    }

    const usuario = criarUsuario({
        nome,
        idade: Number(idade),
       email, 
    })

    res.status(201).json({
        mensagem: "Usuario Criado com sucesso.",
        usuario,
    })
}