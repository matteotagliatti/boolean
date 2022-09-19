const cars = [
  {
    brand: "fiat",
    model: "panda",
    fuel: "diesel",
  },
  {
    brand: "fiat",
    model: "punto",
    fuel: "diesel",
  },
  {
    brand: "ford",
    model: "focus",
    fuel: "benzina",
  },
  {
    brand: "ford",
    model: "mustang",
    fuel: "benzina",
  },
  {
    brand: "porche",
    model: "911",
    fuel: "benzina",
  },
  {
    brand: "citroen",
    model: "c4",
    fuel: "diesel",
  },
  {
    brand: "piaggio",
    model: "fiorino",
    fuel: "metano",
  },
  {
    brand: "fiat",
    model: "panda",
    fuel: "metano",
  },
  {
    brand: "fiat",
    model: "500",
    fuel: "benzina",
  },
];

const carsBenzina = cars.filter((element) => {
  return element.fuel === "benzina";
});

const carsDiesel = cars.filter((element) => {
  return element.fuel === "diesel";
});

const carsOther = cars.filter((element) => {
  return element.fuel !== "diesel" && element.fuel !== "benzina";
});

console.table(carsBenzina);
console.table(carsDiesel);
console.table(carsOther);
