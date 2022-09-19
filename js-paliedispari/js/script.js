/*** PALINDROME ***/

const userStringOutput = document.getElementById("output-user-string");
const palindromegOutput = document.getElementById("output-palindrome");

const userString = prompt("enter a word").toLowerCase();

userStringOutput.innerHTML = userString;
palindromegOutput.innerHTML = checkPalindrome(userString);

/**
 * Check if user string is palindrome.
 * @param {*} string
 * @returns
 */
function checkPalindrome(string) {
  const reverseString = string.split("").reverse().join(""); // Convert string to array > Reverse the array > Convert array to string

  if (string == reverseString) {
    return true;
  } else {
    return false;
  }
}

/*** PARI E DISPARI ***/

const outputOddEven = document.getElementById("output-oddeven");
const outputUserNumber = document.getElementById("output-usernumber");
const outputComputerNumber = document.getElementById("output-computernumber");
const outputSum = document.getElementById("output-sum");
const whoWonOutput = document.getElementById("output-won");

let inputSelect = "";

/* Check if inputSelect is different from Odd or Even */
while (inputSelect !== "odd" && inputSelect !== "even") {
  inputSelect = prompt("even or odd?").toLowerCase();
}

let userNumber = "";
const computerNumber = randomNumber();

/* Check if userNumber is a number and beetween 1 and 5 */
while (userNumber < 1 || userNumber > 5 || isNaN(userNumber)) {
  userNumber = parseInt(prompt("enter a number beetween 1 and 5"));
}

const sum = userNumber + computerNumber;

printDOM(outputOddEven, inputSelect);
printDOM(outputUserNumber, userNumber);
printDOM(outputComputerNumber, computerNumber);
printDOM(outputSum, sum);

/* Check if sum is even or odd */
if (isEven(sum)) {
  printDOM(whoWonOutput, "user");
} else {
  printDOM(whoWonOutput, "computer");
}

/**
 * Random number beetween 1 and 5
 * @returns
 */
function randomNumber() {
  return Math.floor(Math.random() * 5 + 1);
}

/**
 * Check if number is even
 * @param {*} number
 * @returns
 */
function isEven(number) {
  return number % 2 === 0;
}

/**
 * Print element in the DOM
 * @param {*} variable // variable name
 * @param {*} value // value of the variable to be display in the DOM
 */
function printDOM(variable, value) {
  variable.innerHTML = value;
}
