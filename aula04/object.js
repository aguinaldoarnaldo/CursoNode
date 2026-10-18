const alunos = [
    {
        nome: "Aguinaldo",
        idade: 21,
        curso: "Informática"
    },
    {
        nome: "Manuela",
        idade: 19,
        curso: "Gestão"
    },
    {
        nome: "Arnaldo",
        idade: 18,
        curso: "Informática"
    },

];

/*
console.log(aluno[0].nome)
console.log(aluno[1].nome)
console.log(aluno[2].nome)
*/

for(const aluno of alunos) {
    console.log(aluno.nome);
}

/*
aluno.idade = 20;

//Adicionando Propriedades
aluno.profissao = "Desenvolvedor"

//console.log(aluno.nome,aluno.idade)
console.log(aluno)*/


