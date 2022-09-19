const firstName = prompt("Your name?");
document.getElementById("name").innerHTML = firstName;
const surname = prompt("Your surname?");
document.getElementById("surname").innerHTML = surname;
const color = prompt("Your favorite color?");
const colorSpan = document.getElementById("color");
colorSpan.innerHTML = color;
colorSpan.style.backgroundColor = color;
document.getElementById("password").innerHTML =
  firstName + surname + color + "21";
