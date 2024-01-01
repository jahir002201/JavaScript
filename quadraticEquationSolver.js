const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter coefficients a, b, and c: ', (input) => {
  const [a, b, c] = input.split(' ').map(parseFloat);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Invalid input. Please enter valid numbers.');
  } else {
    const discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      console.log('Roots are real and different.');
      console.log(`x1 = ${x1}`);
      console.log(`x2 = ${x2}`);
    } else if (discriminant === 0) {
      const x1 = -b / (2 * a);
      console.log('Roots are real and same.');
      console.log(`x1 = x2 = ${x1}`);
    } else {
      const realPart = -b / (2 * a);
      const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
      console.log('Roots are complex and different.');
      console.log(`x1 = ${realPart} + ${imaginaryPart}i`);
      console.log(`x2 = ${realPart} - ${imaginaryPart}i`);
    }
  }

  rl.close();
});
