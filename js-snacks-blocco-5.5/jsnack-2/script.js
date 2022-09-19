/**
 * 
    A - Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
    B - Scrivi una funzione che accetti un numero come argomento e ritorni il suo opposto (inverso additivo) es (34 -> -34)
    C - Data una lista di 10 numeri e 10 stringhe, restituisci una copia della lista con tutte le stringhe girate e i numeri opposti.
    * 
 */

function reverseString(string) {
  return string.split("").reverse().join("");
}

function reverseInt(n) {
  /* return Math.sign(n) * parseInt(n.toString().split("").reverse().join("")); */
  return -n;
}

const numAndString = [
  {
    num: 224,
    str: "onta",
  },
  {
    num: 098,
    str: "ciao",
  },
  {
    num: 457,
    str: "ciao",
  },
  {
    num: 224,
    str: "onta",
  },
  {
    num: 098,
    str: "ciao",
  },
  {
    num: 457,
    str: "ciao",
  },
  {
    num: 224,
    str: "onta",
  },
  {
    num: 098,
    str: "ciao",
  },
  {
    num: 024,
    str: "sisisi",
  },
  {
    num: 224,
    str: "onta",
  },
];

const reverseNumAndString = [];
numAndString.forEach((element) => {
  const object = {};
  object.num = reverseInt(element.num);
  object.str = reverseString(element.str);
  reverseNumAndString.push(object);
});

console.log(reverseString("Ciao"));
console.log(reverseInt(3465));
console.log(reverseNumAndString);
