const output = document.getElementById("output");

const number1 = parseInt(prompt("primo numero"));
const number2 = parseInt(prompt("secondo numero"));

function sumEven(n1, n2) {
  if ((n1 + n2) % 2 === 0) {
    return true;
  } else {
    if ((n1 + n2) % 2 === 1) return false;
  }
}

output.innerHTML = sumEven(number1, number2);
