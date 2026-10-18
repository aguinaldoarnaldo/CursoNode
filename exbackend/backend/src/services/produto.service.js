const produtos = [
  {
    id: 1,
    nome: "farinha",
    preco: 1200,
  },

  {
    id: 2,
    nome: "Arroz",
    preco: 3000,
  },

  {
    id: 3,
    nome: "Massa",
    preco: 3500,
  },
];

export function buscarProdutos(req, res) {
  return produtos;
}
