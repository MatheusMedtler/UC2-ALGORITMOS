/*
Para este exercicio, comece criando um array com os valore: 1,2,,3,4,5 e 6.
Determine o tamanho do array 
Adicione o numero 7
Remova os numeros de 4 a 5
Determine o novo tamanho da array
*/

const Valores = [1,2,3,4,5,6]

console.log(Valores.length)

Valores.push(7)

Valores.splice(3,2,)
console.log(Valores)

console.log(Valores.length)
console.log(Valores)