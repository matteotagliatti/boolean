const output = document.getElementById("output");
let sum = 0;

for (let i = 0; i < 10; i++) {
  const num = parseInt(prompt(`numero ${i}`));
  sum += num;
}

output.innerHTML = sum;
