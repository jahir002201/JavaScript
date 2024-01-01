//JavaScript Program (ES6) for summing two integers

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter two integers (space-separated): ', (input) => {
  // Split the user input into an array of strings
  const numbers = input.split(' ');

  // Convert the array of strings to an array of integers
  const [firstNumber, secondNumber] = numbers.map(Number);

  // Calculate the sum of two numbers
  const sum = firstNumber + secondNumber;

  // Print the result
  console.log(`${firstNumber} + ${secondNumber} = ${sum}`);

  rl.close();
});
