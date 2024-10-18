// criar uma função que gere uma saudação personalizada e retorne o resultado.

function Gerarsaudação(nome, Nomeinformal){
   return (`Olá ${nome}!Você prefere ser chamado de ${Nomeinformal}?`)

}
 

// criar uma função que recebe uma temperatura em graus celsius e retorna ela em fahrenheit
  
function CelsiusPraFahrenheit(TempC){
    const TempF = (TempC * 1.8) + 32 
    return (TempC, TempF)
}
    console.log(CelsiusPraFahrenheit(40))

    console.log(`A temperatura de ${40} graus Celsius equivale a ${CelsiusPraFahrenheit(30)} fahrenheit`)
    