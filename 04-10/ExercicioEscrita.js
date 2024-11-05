
//Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem://
//O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!


const readline = require("readline-sync")

let nomeDoUsuario = readline.question ('Qual e seu nome? ')
let emailDoUsuario= readline.question ('Qual e seu Email? ')

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)



/*
2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
a) Imprima no console o array completo

b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista
*/

const ComidasPreferidas = ["Hamburguer", "Pizza", "Shawarma", "Batata frita", "Churrasco"]

console.log (ComidasPreferidas)

console.log ('Essas sao minhas comidas preferidas:')
    for (let i = 0; i < ComidasPreferidas.length; i ++) {
        console.log(ComidasPreferidas[i])
    }

    const readline = require("readline-sync")
    let comida = readline.question("Qual sua comida favorita?\n")
    ComidasPreferidas[1] = comida 

    console.log(ComidasPreferidas)






let listaDeTarefas = []

let readline = require('readline-sync')
let tarefa1 = readline.question ("Digite a Tarefa 1: ")
let tarefa2 = readline.question ("Digite a Tarefa 2: ")
let tarefa3 = readline.question ("Digite a Tarefa 3: ")

listaDeTarefas.push(tarefa1,tarefa2,tarefa3)

console.log(listaDeTarefas)

const numeroTarefa = readline.questionInt("Qual tarefa voce ja realizou? ")

const indice = numeroTarefa -1
listaDeTarefas.splice(indice,1)