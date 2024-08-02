/*
1. Stampare in console i numeri da 1 a 100 con alcune eccezioni:
    - se il numero è un multiplo di 3 stampare "Fizz"
    - se il numero è un multiplo di 5 stampare "Buzz"
    - se il numero è un multiplo di 3 e di 5 stampare "FizzBuzz"
2. Recuperare l'elemento dal DOM
3. Creare una lista
4. Utilizzare il ciclo for per riempire la lista
5. Montare la lista nel DOM
*/

// Fase di preparazione

// Recupero l'elemento dal DOM
const targetElement = document.getElementById("target");
console.log(targetElement);

// Fase di gestione eventi
// Fase di raccolta dati
// Fase di elaborazione e produzione

// Creo una lista
const list = document.createElement("ul");

// Utilizzo un ciclo for per controllare il numero e riempire la lista
for (let i = 1; i <= 100; i++) {
    const listItem = document.createElement("li");
    // Controllo se il numero è un multiplo di 3 e di 5
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FizzBuzz");
        listItem.append("FizzBuzz");
        list.appendChild(listItem);
    // Controllo se il numero è un multiplo di 3
    } else if (i % 3 === 0) {
        console.log("Fizz");
        listItem.append("Fizz");
        list.appendChild(listItem);
    // Controllo se il numero è un multiplo di 5
    } else if (i % 5 === 0) {
        console.log("Buzz");
        listItem.append("Buzz");
        list.appendChild(listItem);
    } else {
        console.log(i);
        listItem.append(i);
        list.appendChild(listItem);
    }
};

// Monto la lista nel DOM
targetElement.appendChild(list);