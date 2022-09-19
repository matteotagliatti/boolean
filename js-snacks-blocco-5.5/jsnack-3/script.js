/**
 * 
 * 
    Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall'altro
    es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

 * 
 */

const letters = ["a", "b", "c"];
const numbers = [1, 2, 3];
const result = [];

for (i = 0; i < letters.length; i++) {
  result.push(letters[i], numbers[i]);
}

console.log(result);

// BONUS

let object1 = {};
generateObject("a", 1);

function generateObject(chiave, valore) {
  object1[chiave] = valore;
}

console.log(object1);
