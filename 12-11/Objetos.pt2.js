

const donoDoPet = {
    nome: "Matheus",
    pet: {
        nome: "Lucky",
        raca: "Vira-Lata",
        idade: 8
    }
}

console.log(donoDoPet.pet.nome)




const curso = {
    nome: "Front",
    linguagem: ["Javascript", "css", "HTML"],

}

console.log(curso.linguagem[1])


const professoresTDS = [{nome: "Leonardo", uc: "2",}, {nome: "Lucas", uc: "3"}, {nome: "Maria Claudia", uc: "5"}]

console.log(professoresTDS[0].uc)




const professor = {
    nome:"Leo",
    idade: 29,
    disciplinas:["Algoritmos", "Banco de Dados", "Java"]
}

const novoProfessor = {
    ...professor,
    nome: "Lucas",
    idade: 30,
   veiculo: "Carro"
}

console.log(professor)
console.log(novoProfessor)