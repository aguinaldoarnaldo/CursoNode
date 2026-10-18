const produtos = [
    {
        id: 1,
        nome: "Monitor",
        preco: 20000,
        categoria: "Tecnologica",
        estoque: 4
    },
    {
        id: 2,
        nome: "HUB",
        preco: 40000,
        categoria: "tecnologica",
        estoque: 5
    },
    {
        id: 3,
        nome: "Mouse",
        preco: 10000,
        categoria: "Lenta",
        estoque: 4
    }
];

// Percorrer todos os produtos
produtos.forEach((produto) => {
    console.log(produto.nome);
});

// Filtrar produtos com preço maior que 500
const produtosC = produtos.filter((produto) => {
    return produto.preco > 30000;
});

// Mostrar os produtos filtrados
console.log(produtosC);