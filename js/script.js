/*
1. chiedi all'utente il cognome
2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
*/

// 1
var cognomeUtente = prompt("Scrivi il tuo cognome");
console.log(cognomeUtente);

// 2
var cognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
console.log(cognomi);

cognomi.push(cognomeUtente);
console.log(cognomi);

// 3
cognomi.sort();
console.log(cognomi);

// 4
var posto = 1;
for (var i = 0; i < cognomi.length; i++) {
    console.log((posto++) + ": " + cognomi[i]);
}

// 4 Soluzione con il while

// var i = 0;
// var posto = 1;

// while ( i < cognomi.length) {
//     console.log((posto++) + ": " + cognomi[i]);  
//     i++;
// }