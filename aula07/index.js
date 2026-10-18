import validator from "validator"


//Criar Email par testar
const email = "aguinaldoarnaldo@gmail.com";

//Verificamos se o email é valido
const emailValido = validator.isEmail(email)

console.log("Email válido:", emailValido)