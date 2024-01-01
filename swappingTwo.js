//JavaScript Program (ES6) for swapping two variables using arithmetic operations

let a = 5, b = 10;

console.log("Before swapping.");
console.log(`a = ${a}, b = ${b}`);

a = a + b;
b = a - b;
a = a - b;

console.log("\nAfter swapping.");
console.log(`a = ${a}, b = ${b}`);
