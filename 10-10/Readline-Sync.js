// Importando o readline-sync
const readline = require("readline-sync")

// Exemplo pedir ao usuario o nome dele
let nome = readline.question(`Qual seu nome?`)
console.log(`Olá, ${nome}. Tudo bem com você`)
