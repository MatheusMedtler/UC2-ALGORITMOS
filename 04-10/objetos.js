// Como criar objetos
let pessoa = {
    //Atributo/Propriedades
    //Nos nao usamos let sem const 
    //Nos usamos ':' ao inves de '='
    nome: "Leonardo",
    idade: 29,
    cpf: 999999999,
    FilmesFavoritos: ["Senhor dos Aneis", "Gladiador", "Star Wars"],
    trabalhar: function() {
        console.log(`${pessoa.nome} está trabalhando. Ele não ve a hora de chegar em casa e jogar.`)
    }
}

console.log(pessoa.nome)

//para acessar um dos atributos usamos 
console.log(pessoa.nome)
console.log(pessoa.filmesFavoritos[0])

//para acessar um dos atributos usamos 
pessoa.idade = 30
console.log(pessoa.idade)

// para adicionar um atributo

pessoa.altura = 1.70
console.log (pessoa.altura)





