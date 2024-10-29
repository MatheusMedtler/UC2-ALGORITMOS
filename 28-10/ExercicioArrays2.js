// Crie um array com pelo menos 5 raças de cachorros. Peça para o usuario inserir um numero de 1 a 5. Imprima no terminal a raça escolhida

const readline = require("readline-sync")


const RacaCachorro =["Buldogue", "Pastor Alemão", "Rottweiler", "Poodle", "Boxer"]
console.log(RacaCachorro)

let indice = readline.question("Escolha uma raca: \n1 - Buldogue \n2 - Pastor-Alemao \n3 - Rottweiler \n4 Poodle \n5 Boxer \n")

console.log("Você escolheu: ", RacaCachorro [indice - 1])   


