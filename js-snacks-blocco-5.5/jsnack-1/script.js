/**
 * Crea un array di 10 oggetti che rappresentino una zucchina.
 * indicando per ognuna varietà, peso e lunghezza.
 *
 * A - Calcola quanto pesano tutte le zucchine
 * B - Dividi in due array separati le zucchine che misurano più o meno di 15cm
 * C - Stampa separatamente quanto pesano i due gruppi di zucchine
 *
 * */

const zucchine = [
  {
    varieta: "romana",
    peso: 2,
    lunghezza: 13,
  },
  {
    varieta: "tonda",
    peso: 3,
    lunghezza: 16,
  },
  {
    varieta: "napoletana",
    peso: 2,
    lunghezza: 14,
  },
  {
    varieta: "romana",
    peso: 2,
    lunghezza: 13,
  },
  {
    varieta: "tonda",
    peso: 3,
    lunghezza: 16,
  },
  {
    varieta: "napoletana",
    peso: 2,
    lunghezza: 14,
  },
  {
    varieta: "romana",
    peso: 2,
    lunghezza: 13,
  },
  {
    varieta: "tonda",
    peso: 3,
    lunghezza: 16,
  },
  {
    varieta: "napoletana",
    peso: 2,
    lunghezza: 14,
  },
  {
    varieta: "tonda",
    peso: 3,
    lunghezza: 16,
  },
];

let peso = 0;
let pesoGrandi = 0;
let pesoPiccole = 0;
const zucchineGrandi = [];
const zucchinePiccole = [];

zucchine.forEach((element) => {
  peso += element.peso;

  if (element.lunghezza >= 15) {
    zucchineGrandi.push(element);
    pesoGrandi += element.peso;
  } else {
    zucchinePiccole.push(element);
    pesoPiccole += element.peso;
  }
});

console.log(peso, pesoGrandi, pesoPiccole, zucchineGrandi, zucchinePiccole);

// BONUS

const tipiZicchine = ["tonda", "napoletana", "romana"];
const randomTipoZucchina =
  tipiZicchine[Math.floor(Math.random() * tipiZicchine.length)];
