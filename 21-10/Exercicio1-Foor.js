// Faça um contador que vai de ate 0.
// Quando o contador for zero, imprime BOOOOOOM
// Quando o contador for par, imprime TIC
// Quando o contador for ímpar, imprime TAC


    for (let contador = 10; contador >=0; contador --) {
        if (contador === 0) {
            console.log (`BOOOOM`)
        } else if ( contador % 2 === 0) {
            console.log (`TIC`)
        } else
            console.log ("TAC")
        
    }
    
    
    