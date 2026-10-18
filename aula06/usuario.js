function criarUsuario(nome, idade, email){
    const usuario = {
            nome: nome,
            idade: idade,
            email: email
        };

        return usuario;

}

function verificarIdade(idade){
    if (idade > 18) {

        return "Maior de Idade";

    }else{

        return "Menor de Idade";
    }
}


function mostrarUsuario(usuario) {

    console.log(`Nome: ${usuario.nome}`);
    console.log(`Idade ${usuario.idade}`);
    console.log(`Email: ${usuario.email}`);
    
}


export{
    criarUsuario,
    verificarIdade,
    mostrarUsuario
}