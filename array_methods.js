let drinks = ["Latte", "Tea", "Espresso"];
let pastries = ["Croissant", "Muffin", "Bagel"];

console.log("Number of drinks: " + drinks.length);
console.log("Number of pastries: " + pastries.length);

console.log("First drink: " + drinks[0]);
console.log("Last pastry: " + pastries[pastries.length - 1]);

for (let i = 0; i < drinks.length; i++) {
    console.log(`Drink ${i + 1}: ${drinks[i]}`);
}

drinks.push("Flat White");
console.log("Number of drinks: " + drinks.length);

let drinkorder = 3;
let pastryorder = 2;

console.log(`Selected Order: Drink - ${drinks[drinkorder]}, Pastry - ${pastries[pastryorder]}`);