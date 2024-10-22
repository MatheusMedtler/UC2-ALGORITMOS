//Usando loop while e readline-sync, imprima toda a tabuada de um numero.

const readline = require("readline-sync")

let tabuada = readline.questionInt("Digite qual a tabuada que voce quer: ")

let numero = 1

while (numero <= 10){

console.log (`${tabuada} x ${numero} = ${tabuada * numero}`)
    numero ++
}