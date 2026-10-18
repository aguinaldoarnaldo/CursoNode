import validator from "validator"


function validarEmail(email) {
    return validator.isEmail(email) ? "Valido" : "Invalido"
}

/*const email = "arnaldo@gmail.com"
const email2 = "aguinaldo@gmail.com"
const email3 = "andrade@gmail,com"*/

const emails = [
    "arnaldo@gmail.com",
    "aguinaldo@gmail.com",
    "andrade@gmail,com",
    "joaquim@ymail..com",
    "josue@gail..com"


];


function mostrarResultado() {
    for (const email of emails) {
        console.log(`Email: ${email}`)
        console.log(`Status: ${validarEmail(email)}`)
        console.log("")
    }
}

mostrarResultado();
/*console.log(`Email: ${email} \n Status: ${validarEmail(email)}\n`)
console.log(`Email: ${email2} \n Status: ${validarEmail(email2)}\n`)
console.log(`Email: ${email3} \n Status: ${validarEmail(email3)}\n`)*/