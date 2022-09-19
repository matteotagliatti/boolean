const inputNum1 = document.getElementById("input-num-1").value;
const inputNum2 = document.getElementById("input-num-2").value;
const outputNum1 = document.getElementById("output-num-1");
const outputNum2 = document.getElementById("output-num-2");
const outputNum3 = document.getElementById("output-num-3");

if (parseInt(inputNum1) > parseInt(inputNum2)) {
  outputNum3.innerHTML = inputNum1;
} else if (parseInt(inputNum2) > parseInt(inputNum1)) {
  outputNum3.innerHTML = inputNum2;
} else {
  outputNum3.innerHTML = "Numeri uguali";
}

outputNum1.innerHTML = inputNum1;
outputNum2.innerHTML = inputNum2;
