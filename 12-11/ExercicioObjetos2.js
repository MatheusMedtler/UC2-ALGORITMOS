

const pessoa = {
    nome: "Luiza",
    idade: 17,
    generoMusical: "Funk",
}

const pessoa2 = {
    nome: "Matheus",
    idade: 17,
    generoMusical: "Trap"
}
    function novoObjt(obj){
        const novaPessoa = {
            ...obj,
            comidaFavorita: ["Xis", "Pizza", "Lasanha"],
            melhorAmg: {
            nome: "Leo",
            idade: 20,
            pet: {
                nome: "Xablau"
            }
            }

            }

            console.log(`O nome da pessoa é ${novaPessoa.nome}, e suas comidas preferidas são ${novaPessoa.comidaFavorita[0]} e ${novaPessoa.comidaFavorita[1]}. Seu melhor amigo se chama ${novaPessoa.melhorAmg.nome} e tem ${novaPessoa.melhorAmg.idade} anos`)


    }
    



novoObjt(pessoa)