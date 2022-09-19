const output = document.getElementById("output");
const nomi = [
  "antonio",
  "matteo",
  "luca",
  "gianni",
  "paola",
  "davide",
  "raffaele",
  "sofia",
  "thomas",
  "filippo",
];

const nameUser = prompt("nome?").toLowerCase().trim();
output.innerHTML = "No";

for (let i = 0; i < nomi.length; i++) {
  if (nameUser === nomi[i]) {
    output.innerHTML = "Si";
  }
}

/* 
ALTERNATIVA usando .indexOf

if (nomi.indexOf(nameUser) > -1) {
  console.log('si');
} else {
  console.log('no');
}
*/
