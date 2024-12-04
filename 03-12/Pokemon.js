const readline = require("readline-sync");

const PokemonsDisponiveis = [
  { nome: "Pikachu", tipo: "Elétrico", nivel: 29 },
  { nome: "Bulbasaur", tipo: "Veneno", nivel: 40 },
  { nome: "Eevee", tipo: "Normal", nivel: 40 },
  { nome: "Charmander", tipo: "Fogo", nivel: 2 },
  { nome: "Gencar", tipo: "Veneno", nivel: 5 },
  { nome: "Abra", tipo: "Psíquico", nivel: 15 },
  { nome: "Lapras", tipo: "Gelo", nivel: 12 },
  { nome: "Onix", tipo: "Pedra", nivel: 12 },
  { nome: "Jigglypuff", tipo: "Normal", nivel: 22 },
  { nome: "Meowth", tipo: "Normal", nivel: 16 },
  { nome: "Zubat", tipo: "Venenoso", nivel: 9 },
  { nome: "Snorlax", tipo: "Normal", nivel: 50 },
  { nome: "Pidgey", tipo: "Normal", nivel: 8 },
  { nome: "Rattata", tipo: "Normal", nivel: 4 }
];

let mochila = []; 

function adicionarPokemon() {
    console.log("Escolha um Pokémon para adicionar na sua mochila:");

  
    for (let i = 0; i < PokemonsDisponiveis.length; i++) {
        console.log(`${i + 1}. ${PokemonsDisponiveis[i].nome}`);
    }

    const escolha = readline.questionInt("Digite o numero do Pokemon: ");
    
    if (escolha > 0 && escolha <= PokemonsDisponiveis.length) {
        if (mochila.length < 6) {
            const pokemonEscolhido = PokemonsDisponiveis[escolha - 1];
            mochila.push(pokemonEscolhido);
            console.log(`${pokemonEscolhido.nome} foi adicionado à sua mochila.`);
        } else if (mochila.length =6){
            console.log("Você não pode adicionar mais que 6 pokemons a mochila. É contra as regras da Liga pokemon.");
        }
    } else {
        console.log("Escolha inválida.");
    }

}


function Vermochila(){
    if(mochila.length != 0) {

    }
}


function verMochila() {
    if (mochila.length > 0) {
        console.log("\nPokémons na sua mochila:");
        mochila.forEach((pokemon, index) => {
            console.log(`${index + 1}. ${pokemon.nome} - Tipo: ${pokemon.tipo} - Nível: ${pokemon.nivel}`);
        });
    } else {
        console.log("Sua mochila está vazia.");
    }

    readline.question("Aperte Enter para continuar...");
}

function removerPokemon() {
    if (mochila.length > 0) {
        console.log("\nEscolha um Pokémon para remover da sua mochila:");
        mochila.forEach((pokemon, index) => {
            console.log(`${index + 1}. ${pokemon.nome} - Tipo: ${pokemon.tipo} - Nível: ${pokemon.nivel}`);
        });

        const escolha = readline.questionInt("Digite o número do Pokémon para remover: ");
        
        if (escolha > 0 && escolha <= mochila.length) {
            const pokemonRemovido = mochila.splice(escolha - 1, 1);
            console.log(`${pokemonRemovido[0].nome} foi removido da sua mochila.`);
        } else {
            console.log("Escolha inválida.");
        }
    } else {
        console.log("Sua mochila está vazia, não há pokémons para remover.");
    }

    readline.question("Aperte Enter para continuar...");
}

function menu() {
    let opcao = 0;

    do {
        console.log("\nEscolha uma opção:");
        console.log("1. Adicionar Pokémon");
        console.log("2. Ver Pokémons na Mochila");
        console.log("3. Remover Pokémon da Mochila");
        console.log("4. Sair");

        opcao = readline.questionInt("Digite o número da opção: ");

        switch (opcao) {
            case 1:
                adicionarPokemon();
                break;
            case 2:
                verMochila();
                break;
            case 3:
                removerPokemon();
                break;
            case 4:
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
                break;
        }
    } while (opcao !== 4);
}

menu();
