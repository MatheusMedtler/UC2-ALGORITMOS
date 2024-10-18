
const base1 = 10
const altura1 = 3
const area1 = base1 * altura1
console.log(area1)

const base2 = 5
const altura2 = 2
const area2 = base2 * altura2
console.log(area2)


//Funções executam uma determinada tarefa que criamos para fazer
// Primeiro precisamos criar a função e depois de criada, precisamos executa-la/chama-la/invoc-la

// para criar uma função usamos a palavra reservada 'function'
// depois dela, precisamos dar um nome a função. O melhor é que seja um nome bem descritivo, seguindo o padrão camelCase
// depois do nome, abrimos e fechamos os parenteses. É aqui que colocamos as 'variaveis' que vamos usar dentro do nosso codigo da função. Chamamos elas de parâmetros/argumentos.
// depois dos parenteses, abrimos e fechamos chaves. DICA: de um enter as chaves. Dentro das chaves é onde vamos criar o código que a função vai executar


function calcularAreaRetangulo (base,altura) {

    const area1= base * altura1
    console.log(area1)

}


calcularAreaRetangulo(9,6)

function frase (nome, idade, altura) {
    console.log(`Olá ${nome}, você tem ${idade} e tem ${altura} de altura.`)
}

frase (Matheus, 17, 1.70)


function calculaSoma(num1,num2){
    let soma = num1 + num2
    console.log(soma)
    return soma
}
let numero = calculaSoma(5,7)

console.log(numero + 10)

//Assim se retorna mais de um valor
function converterCelsius(TempC){
    let tempF = (TempC * 1.8) + 32
    return {TempC,tempF}
}
const {tempF,TempC} = converterCelsius

console.log(TempC)