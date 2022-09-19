/* Mail */

const emails = [
  "esempio@esempio.com",
  "matteo@esempio.com",
  "luca@esempio.com",
];

const mailOutput = document.getElementById("mail-output");

const promptEmail = prompt("Your email").toLocaleLowerCase().trim();

if (promptEmail === null || promptEmail === "" || !isNaN(promptEmail)) {
  alert("inserisci un email");
  throw new Error("inserisci stringa in prompt");
}

let emailMessage = `Email <strong>${promptEmail}</strong> non può non accedere in quanto non presente. `;

for (let i = 0; i < emails.length; i++) {
  if (emails[i] === promptEmail) {
    emailMessage = `Email <strong>${promptEmail}</strong> può accedere in quanto presente.`;
  }
}

mailOutput.innerHTML = emailMessage;

/* Dadi */

const userNumber = document.getElementById("user-number");
const computerNumber = document.getElementById("computer-number");
const dadiOutput = document.getElementById("dadi-output");

const userRandomNumber = Math.floor(Math.random() * 6 + 1);
const computerRandomNumber = Math.floor(Math.random() * 6 + 1);

let dadiMessage = "Parità";

if (userRandomNumber > computerRandomNumber) {
  dadiMessage = "Vince il giocatore";
} else if (computerRandomNumber > userRandomNumber) {
  dadiMessage = "Vince il computer";
}

userNumber.innerHTML = userRandomNumber;
computerNumber.innerHTML = computerRandomNumber;
dadiOutput.innerHTML = dadiMessage;
