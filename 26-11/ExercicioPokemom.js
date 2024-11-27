const readline = require("readline-sync")

const PokemonsDisponiveis1 = ["Pikachu","Bulbasaur","Eevee","Charmander","Gencar","Abra","Lapras","Onix"]

const PokemonsDisponiveis = [
{nome: "Pikachu", tipo: "Elétrico",nivel:29},
{nome: "Bulbasaur", tipo: "Veneno", nivel: 40},
{nome: "Eevee", tipo: "normal", nivel:40},
{nome:"Charmander", tipo: "Fogo", nivel:2},
{nome:"Gencar", tipo: "Veneno", nivel:5},
{nome:"Abra", tipo: "Psiquico", nivel:15},
{nome:"Lapras", tipo: "Gelo", nivel:12},
{nome:"Onix", tipo: "Pedra", nivel:12}]
 
console.log(PokemonsDisponiveis)

function adicionarPokemon(){
    console.log("Escolha um Pokémon para adicionar na sua mochila: ")
    
    for (let i = 0; i < computador.lenght;{i}.nome) {
        console.log(`${[i+1]}.${PokemonsDisponiveis[i].nome}`)
    }

    const escolha = readlineSync.questionInt("Digite o número do Pokémon: ")
    if (escolha <= 6) {
        const pokemonEscolhido = computador[escolha - 1]
        mochilha.push(pokemonEscolhido)
        console.log(`${pokemonEscolhido.nome} foi adicionado à sua mochila.`);
    }else {
        console.log("Escolha inválida");
    }
    }

