import { criarUsuario, verificarIdade, mostrarUsuario } from "./usuario.js";
import { somar, subtrair, multiplicacao, divisao, restoDivisao, potencia } from "./calculadora.js";

const resultadoSoma = somar(4, 6);
const resultadoSubtracao = subtrair(6, 4);
const resultaMultiplicacao = multiplicacao(2, 3)
const resultadoDivisao = divisao(20, 2)
const resultadoResto = restoDivisao(20,2)
const resultadoPOtencia = potencia(2,2)

console.log(resultadoSoma);
console.log(resultadoSubtracao);
console.log(resultaMultiplicacao);
console.log(resultadoDivisao);
console.log(resultadoResto);
console.log(resultadoPOtencia);

const usuario = criarUsuario(
    "Aguinaldo",
    21,
    "aguinaldo@gmail.com"
);

mostrarUsuario(usuario)

const resultadoIdade = verificarIdade(usuario.idade)

console.log(`Situação: ${resultadoIdade}`)


