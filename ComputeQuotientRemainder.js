//JavaScript Program (ES6) for division with quotient and remainder

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter dividend: ', (dividendInput) => {
  rl.question('Enter divisor: ', (divisorInput) => {
    // Convert the user input to integers
    const dividend = parseInt(dividendInput);
    const divisor = parseInt(divisorInput);

    // Calculate quotient and remainder
    const quotient = Math.floor(dividend / divisor);
    const remainder = dividend % divisor;

    // Print the result
    console.log(`Quotient = ${quotient}`);
    console.log(`Remainder = ${remainder}`);

    rl.close();
  });
});
