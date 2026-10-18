function createUser(nome, idade, email){
    const usuario1 = {
        nome: nome,
        idade: idade,
        email: email,
    }
    return usuario1
}

function verificarIdade1(idade) {
    if (idade >= 18) {
        return "Maior de Idade"
    }else{
        return "Menor de idade"
    }

}

function showUsers(usuario1) {
    console.log(`Nome: ${usuario1.nome}`)
    console.log(`Idade: ${usuario1.idade}`)
    console.log(`Email: ${usuario1.email}`)
}

export {
    createUser,
    verificarIdade1,
    showUsers
}