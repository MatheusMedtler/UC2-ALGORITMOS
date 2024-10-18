//crie uma função que recebe um valor em hora e passa ele em segundos

function ConverterHorasPorSegundos (hora){
    let segundos = hora*60*60
    console.log(`${hora} horas(s) convertidas(s) para segundos: ${segundos} segundos`)
}
ConverterHorasPorSegundos (1)

//crie uma função que receba 3 notas e calcule a média delas

function CalculaNotas (nota1, nota2, nota3){
    let media = (nota1+nota2+nota3)/3
    console.log(`A media das notas é ${media}.` ) 

}
CalculaNotas (8,6,10)

//crie uma função que recebe um numero e mostre se eles é par ou se é impar

function parOUimpar(numero){
    if (numero === 0) {
        console.log("O numero é 0.")
    } else if (numero %2 === 0){
        console.log(`O numero ${numero} é par.`)
    } else {
        console.log (`O numero ${numero} é impar.`)
    }
}
 parOUimpar(3)
