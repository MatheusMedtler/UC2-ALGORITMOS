// Usando switch case, peça para o usuário inserir um numero
// Caso o numero for 1, imprima "você escolheu EA Fc25"
// Caso o numero for 2, imprima "você escolheu Valorant"
// Caso o numero for 3, Imprima "Você escolheu CS Go"
// Caso o número for qualquer outra coisa, imprima "Não encontrei o jogo"

const readline = require("readline-sync")
let jogo = readline.questionFloat("Insira um Numero de 1 a 3: ")

switch (jogo) {
    case  1:
        console.log("Você escolheu EA Fc 25.")
    break
    case 2:
        console.log("Você escolheu Valorant")
    break
    case 3:
        console.log("Você escolheu CS Go")
    break

    default:
        console.log("Não encontrei o jogo")
    break
}