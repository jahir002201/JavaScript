const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a positive integer: ', (input) => {
  const n = parseInt(input);

  if (isNaN(n) || n < 0) {
    console.log('Error! Factorial of a negative number or invalid input.');
  } else {
    let factorial = 1;

    for (let i = 1; i <= n; ++i) {
      factorial *= i;
    }

    console.log(`Factorial of ${n} = ${factorial}`);
  }

  rl.close();
});
