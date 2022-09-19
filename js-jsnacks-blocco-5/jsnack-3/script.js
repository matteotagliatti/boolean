const stringsArray = [
  "ciao",
  "sette",
  "NOVE",
  "palla",
  "NANNA",
  "mimmi",
  "Cotto",
];

const newStringsArray = stringsArray.map((element) => {
  return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
});

console.table(newStringsArray);
