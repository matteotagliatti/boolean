const output = document.getElementById("output");
const numbers = [];

for (let i = 0; i < 6; i++) {
  const num = parseInt(prompt(`numero ${i}?`));

  if (num % 2 !== 0) {
    numbers.push(num);
  }
}

output.innerHTML = numbers.join(", ");
