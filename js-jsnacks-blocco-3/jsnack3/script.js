/* Generate Div */
const output = document.getElementById("output");
const redDiv = document.createElement("div");
redDiv.id = "red-div";
const greenDiv = document.createElement("div");
greenDiv.id = "green-div";

output.append(redDiv, greenDiv);

/* Generate Array */
const array = [];

for (let i = 0; i < 5; i++) {
  const number = parseInt(prompt(`numero ${i + 1}`));
  array.push(number);
}

/* Check */
for (let i = 0; i < array.length; i++) {
  checkOddEven(array[i]);
}

/**
 * Check in number is Even or Odd
 * @param {*} arg // number
 */
function checkOddEven(arg) {
  if (arg % 2 === 0) document.getElementById("red-div").innerHTML += arg + " "; // Even numbers
  if (arg % 2 === 1)
    document.getElementById("green-div").innerHTML += arg + " "; // Odd numbers
}
