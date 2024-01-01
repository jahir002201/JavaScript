//JavaScript Program (ES6) for multiplying two numbers

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter two numbers (space-separated): ', (input) => {
  // Split the user input into an array of strings
  const numbers = input.split(' ');

  // Convert the array of strings to an array of floating-point numbers
  const [num1, num2] = numbers.map(Number);

  // Calculate the product of two numbers
  const product = num1 * num2;

  // Print the result
  console.log(`Product = ${product}`);

  rl.close();
});
