const div = document.getElementById("grid");

for (let i = 1; i <= 100; i++) {
  let newDiv = document.createElement("div");
  newDiv.innerText = i;
  newDiv.classList.add(
    "bg-gray-200",
    "rounded-xl",
    "flex",
    "justify-center",
    "p-1",
    "w-20"
  );

  if (i % 3 === 0 && i % 5 === 0) {
    newDiv.innerHTML = "FizzBuzz";
  } else if (i % 3 === 0) {
    newDiv.innerHTML = "Fizz";
  } else if (i % 5 === 0) {
    newDiv.innerHTML = "Buzz";
  }

  div.append(newDiv);
}
