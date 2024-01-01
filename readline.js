// Node.js Program with readline

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter an integer: ', (numberString) => {
  // Convert the user input to an integer
  const number = parseInt(numberString);

  console.log('You entered ' + number);

  rl.close();
});
