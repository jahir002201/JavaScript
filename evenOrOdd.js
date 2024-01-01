//JavaScript Program (ES6) to check if an integer is even or odd

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter an integer: ', (input) => {
  // Convert the user input to an integer
  const n = parseInt(input);

  // Check if the integer is even or odd
  if (n % 2 === 0) {
    console.log(`${n} is even.`);
  } else {
    console.log(`${n} is odd.`);
  }

  rl.close();
});
