// Arrays são listas de elementos

const listaDeCompras = []; // Este é um array vazio

const listaDeNomes = ["Leo", "Vitoria,"]

const listaDeNumeros = [10,20,40,70]

const listaDeBoolean = [true,false,true]

//Imprime tudo o que tem dentro do array
console.log (listaDeCompras)
console.log (listaDeNomes)


//Adiciona um item final do array

listaDeCompras.push("Pão")
listaDeCompras.push("Nata")
listaDeCompras.push("Iogurte")
console.log(listaDeCompras)

//Remove o ultimo item do array
listaDeCompras.pop ()
console.log (listaDeCompras)

//Exibe o item de acordo com sua posição do array
console.log (listaDeNomes[0]) //Leo 
console.log (listaDeNumeros[3]) //70
console.log (listaDeBoolean[4]) //underfined

//Troca o valor de um elemento do array de acordo com sua posição/indice
console.log("Array antes da troca: ", listaDeNumeros)
listaDeNumeros [3] = 100
console.log("Array depois da troca: ",listaDeNumeros)

//Propriedades length 
// Mostra o numero do array
console.log(listaDeNomes.length)
console.log(listaDeNomes)

//Metodo includes 
// Verifica se um array tem ou não um determinado elemento (retorna true ou false)
const seriesBoas = ["Game of Thrones", "Breaking Bad", "Shogun"]
console.log(seriesBoas.includes("Game of Thrones")) //True
console.log(seriesBoas.includes("La Casa de Papel")) //False

// Metodos Splice
// Remove n elementos, a partir da posição i do array
const letras = ["A","B","C","D","E","F","G","H"]

letras.splice(2,1)  // O primeiro parametro diz a partir de qual indice começa a remover. O segundo diz QUANTOS ele remove
console.log(letras) 