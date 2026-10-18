const profissionais = [
    {
        nome: "Carlos",
        profissao: "Eletrecista",
        preco: 50000
    },
    {
        nome: "Andrade",
        profissao: "Canalisador",
        preco: 4000
    },
    {
        nome: "João",
        profissao: "Pintor",
        preco: 70000
    }

];

for (const profissional of profissionais) {
    console.log(
        `${profissional.nome} - ${profissional.profissao} - ${profissional.preco} Kz`
    )
}