const produtos = [];

produtos.push(
    {
        nome: "Teclado",
        preco: 15000,
        categoria: "Informatica",
        estoque: 20
    },
    {
        nome: "Computador",
        preco: 700500,
        categoria: "Informatica",
        estoque: 20
    },
    {
        nome: "Mouse",
        preco: 15000,
        categoria: "Informatica",
        estoque: 20
    }
);

for (const produto of produtos) {
    console.log(
        `Nome: ${produto.nome}\n` +
        `Preço: ${produto.preco} Kz\n` +
        `Categoria: ${produto.categoria}\n` +
        `Estoque: ${produto.estoque}\n`
    );
}