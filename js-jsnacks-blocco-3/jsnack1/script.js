const outputArray = document.getElementById("output-array");
const outputArrayOdd = document.getElementById("output-array-odd");
const outputArrayEven = document.getElementById("output-array-even");
const output = document.getElementById("output");

const array = [];
const arrayOdd = [];
const arrayEven = [];

let sum = 0;

while (sum < 200) {
  const number = parseInt(prompt("scrivi numero"));
  array.push(number);
  sum += number;

  if (number % 2 === 0) {
    arrayEven.push(number);
  } else {
    arrayOdd.push(number);
  }
}

outputArray.innerHTML = array.join(", ");
outputArrayOdd.innerHTML = arrayOdd.join(", ");
outputArrayEven.innerHTML = arrayEven.join(", ");
output.innerHTML = sum;
