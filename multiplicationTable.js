const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a positive integer: ', (input) => {
  const n = parseInt(input);

  if (isNaN(n) || n <= 0) {
    console.log('Invalid input. Please enter a positive integer.');
  } else {
    // run a loop from 1 to 10
    // print the multiplication table
    for (let i = 1; i <= 10; ++i) {
      console.log(`${n} * ${i} = ${n * i}`);
    }
  }

  rl.close();
});
