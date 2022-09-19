const animals = [
  { nome: "leone", famiglia: "felidi", classe: "mammiferi" },
  { nome: "cane", famiglia: "canidi", classe: "mammiferi" },
  { nome: "gallina", famiglia: "fasianidi", classe: "uccelli" },
];

const filteredAnimals = animals.filter((element) => {
  return element.classe === "mammiferi";
});

console.table(filteredAnimals);
