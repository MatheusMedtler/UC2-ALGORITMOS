// Operador E (AND) - Símbolo: &&
// Retorna true APENAS SE TODOS OS ENVOLVIDOS forem true
// Apenas um unico false ja é suficiente para retornar false
console.log(true && true) //TRUE
console.log(true && false) //FALSE
console.log(false && true) //FALSE
console.log(false && false) //FALSE

let idade = 20
let MaiorIdade = idade >= 18 //Boolean
let temCarteira = true
let temCarro = true

console.log (MaiorIdade && temCarteira && temCarro) // True


// Operador OU (OR) - Símbolo: ||
//Retorna false APENAS SE TODOS OS ENVOLVIDOS forem false
//Apenas um único true ja é suficiente para retornar true

console.log(true || true) //true
console.log(true || false) //true
console.log(false || true) //true
console.log(false || false) //FALSE

let temTrabalho = true
let economiza = true
let investe = true
let herdeiro = true

console.log((temTrabalho && economiza && investe) || herdeiro)



// Operador NÃO/Negação (NOT) - Símbolo: !
//Inverte o estado - True ele transforma em false e vice-versa

let ligado = true

console.log(!ligado)