const player = {};

player.cod = `${randomNumber(10)}${randomNumber(10)}${randomNumber(
  10
)}${randomCharacter()}${randomCharacter()}${randomCharacter()}`;
player["media-punti"] = randomNumber(51);
player["percentuale-tiri-3"] = randomNumber(101);

function randomNumber(maxNumberPlusOne) {
  return Math.floor(Math.random() * maxNumberPlusOne);
}

function randomCharacter() {
  const alphabet = "ABCDEFGHILMNOPQRSTUVZ";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

console.table(player);
