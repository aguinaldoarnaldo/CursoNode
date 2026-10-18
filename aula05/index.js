const produtos = [
    {
        id: 1,
        nome: "Teclado",
        preco: 15000,
        estoque: 9
    },
    {
        id: 2,
        nome: "Mouse",
        preco: 8000,
        estoque: 5
    },
    {
        id: 3,
        nome: "Monitor",
        preco: 120000,
        estoque: 10
    }
];

produtos.push(
    {
        nome: "Tela",
        preco: 30000
    }
)

produtos.forEach( (produto) => {
    console.log(produto.nome)
});

const nomes = produtos.map((produto) => {
    return produto.nome;
});

const preco = produtos.map((produto) => {
    return produto.preco;
})


console.log(preco)
console.log(nomes)


const produtosCaros = produtos.filter((produto) => {
    return produto.preco > 1000;
})

console.log(produtosCaros)


const produto = produtos.find((produto) => {
    return produto.id === 2;
})


console.log(produto)




/*
const produtosDisponiveis = produtos.filter((produto) => {
    return produto.estoque
})*/