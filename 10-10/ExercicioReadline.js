const readline = require("readline-sync")

let time = readline.question("Que time é o teu? ")
console.log(time)
console.log(time.toUpperCase()) // Transforma a string em maiuscula 
console.log(time.toUpperCase) // Transforma a string em minuscula 

let Time = "Grêmio"


if (Time.toLowerCase() === "Grêmio") {
    console.log("Maior do RS")
} else if (Time.toLowerCase() === "Inter") {
console.log("Menor do RS")
} else if (Time.toLowerCase() === "Juventude") {
    console.log ("Time Verde")
} else if (Time.toLowerCase() === "Corinthians") {
    console.log ("Corinthians sempre ajudado pela CBF")
} else { 
    console.log ("Time não conhecido")
}