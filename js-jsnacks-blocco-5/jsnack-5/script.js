const arrayOfPeople = [
  {
    nome: "paolo",
    cognome: "sette",
    eta: "20",
  },
  {
    nome: "matteo",
    cognome: "ciao",
    eta: "12",
  },
  {
    nome: "luca",
    cognome: "otto",
    eta: "45",
  },
  {
    nome: "gianni",
    cognome: "recia",
    eta: "30",
  },
  {
    nome: "paola",
    cognome: "cotto",
    eta: "16",
  },
];

const newArray = arrayOfPeople.map((element) => {
  let guida;
  if (element.eta > 17) {
    guida = "può guidare";
  } else {
    guida = "non può guidare";
  }
  return `${element.nome} ${element.cognome} ${guida}`;
});

console.table(newArray);
