/**
 *  Dato un array, genera randomicamente due numeri:
 *   il primo numero che dovrà essere sempre minore del numero degli elementi dell'array
 *   il secondo numero che dovrà essere sempre minore del primo numero
 *
 * Scrivi una funzione che accetti tre argomenti: l'array e i due numeri nell'ordine scritto prima.
 * La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra il primo numero e il secondo numero
 */

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const min = Math.floor(Math.random() * array.length);
let max = 0;

while (max <= min) {
  max = Math.floor(Math.random() * array.length);
}

const newArray = [];

function arrayMinMax(array, min, max) {
  for (i = min; i <= max; i++) {
    newArray.push(array[i]);
  }
}

arrayMinMax(array, min, max);
console.log(newArray);

/*
    BONUS
    Creo un'altra funzione che dati gli stessi input, restituisca un array esclusivamente composto dagli elementi esterni a quelli selezionati (l'opposto di prima)
*/

const bonusArray = [];

function arrayNotMinMax(array, min, max) {
  for (i = 0; i < array.length; i++) {
    if (i < min || i > max) bonusArray.push(array[i]);
  }
}

arrayNotMinMax(array, min, max);
console.log(bonusArray);
