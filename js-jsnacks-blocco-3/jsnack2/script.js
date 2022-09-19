const output = document.getElementById("output");

let number = parseInt(prompt("inserisci un numero N"));
const m = parseInt(prompt("inserisci un secondo numero M"));
const l = parseInt(prompt("inserisci un terzo numero L"));

if (number > 100) number = 100;

const array = [];

for (let i = 0; i < number; i++) {
  array[i] = [];
  let sum = 0;
  let outputSum1 = "false";
  let outputSum2 = "false";

  while (array[i].length < m) {
    const arrayNumber = Math.floor(Math.random() * 4528 + 4);
    array[i].push(arrayNumber);
    sum += arrayNumber;
    if (sum > l) outputSum1 = sum;
    if (sum < l) outputSum2 = sum;
  }

  output.innerHTML += `<li>Array${[i]}: <span>${array[i].join(
    ", "
  )}</span> - Sum > L: <span>${outputSum1}</span> - Sum < L: <span>${outputSum2}</span></li>`;
}
