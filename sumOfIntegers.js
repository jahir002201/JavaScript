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
    let sum = 0;

    for (let i = 1; i <= n; ++i) {
      sum += i;
    }

    console.log(`Sum = ${sum}`);
  }

  rl.close();
});
