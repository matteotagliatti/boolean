const outputArray = document.getElementById("output-array");
const outputSum = document.getElementById("output-sum");
const outputMed = document.getElementById("output-med");

const array = [];
let sum = null;

for (let i = 0; i < 10; i++) {
  const number = Math.floor(Math.random() * 10 + 1);
  array.push(number);
  sum += array[i];
}

let med = sum / array.length;

outputArray.innerHTML = array.join(", ");
outputSum.innerHTML = sum;
outputMed.innerHTML = med;
