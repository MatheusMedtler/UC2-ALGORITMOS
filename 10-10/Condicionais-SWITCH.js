
//if (Time.toLowerCase() === "Grêmio") {
  //  console.log("Maior do RS")
//} else if (Time.toLowerCase() === "Inter") {
//console.log("Menor do RS")
//} else if (Time.toLowerCase() === "Juventude") {
  //  console.log ("Time Verde")
//} else if (Time.toLowerCase() === "Corinthians") {
    //console.log ("Corinthians sempre ajudado pela CBF")
//} else { 
  //  console.log ("Time não conhecido")
//}


const readline = require("readline-sync")
let time = readline.question("Qual seu time?")

switch (time) {
    case "Grêmio":
        console.log("O seu time é o grêmio.")
    break
    case "Inter":
        console.log("O seu time é o inter")    
    break

    default:
        console.log("O seu time não foi reconhecido")
    break
}