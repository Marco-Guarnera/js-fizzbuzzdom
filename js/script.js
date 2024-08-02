/*
1. Stampare in console i numeri da 1 a 100 con alcune eccezioni:
    - se il numero è un multiplo di 3 stampare "Fizz"
    - se il numero è un multiplo di 5 stampare "Buzz"
    - se il numero è un multiplo di 3 e di 5 stampare "FizzBuzz"
*/

// Fase di preparazione
// Fase di gestione eventi
// Fase di raccolta dati
// Fase di elaborazione e produzione

// Utilizzo un ciclo for
for (let i = 1; i <= 100; i++) {
    // Controllo se il numero è un multiplo di 3 e di 5
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FizzBuzz");
    // Controllo se il numero è un multiplo di 3
    } else if (i % 3 === 0) {
        console.log("Fizz");
    // Controllo se il numero è un multiplo di 5
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
};