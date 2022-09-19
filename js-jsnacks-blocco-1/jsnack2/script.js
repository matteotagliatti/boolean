const input1 = prompt("prima parola");
const input2 = prompt("seconda parola");
const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");
const output3 = document.getElementById("output3");

if (input1.length > input2.length) {
  output3.innerHTML = input1 + " " + input2;
} else if (input2.length > input1.length) {
  output3.innerHTML = input2 + " " + input1;
} else {
  output3.innerHTML = "lunghezza uguale";
}

output1.innerHTML = input1;
output2.innerHTML = input2;
