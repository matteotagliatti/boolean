const output = document.getElementById("output");
const message = document.getElementById("message");
let userNumber = prompt("inserisci un numero di 7 cifre");

message.innerHTML = "No";

if (userNumber.length === 7) {
  message.innerHTML = "Si";
}

userNumber = userNumber.split("");

const sum = userNumber.reduce(function (a, b) {
  return parseInt(a) + parseInt(b);
});

output.innerHTML = sum;

/* 
ALTERNATIVA

let sum = 0;

for (let i = 0; i < userNumber.lenght; i++) {
    sum += parseInt(userNumber.chartAt(i));
}
*/
