const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a year: ', (input) => {
  const year = parseInt(input);

  if (isNaN(year)) {
    console.log('Invalid input. Please enter a valid year.');
  } else {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          console.log(`${year} is a leap year.`);
        } else {
          console.log(`${year} is not a leap year.`);
        }
      } else {
        console.log(`${year} is a leap year.`);
      }
    } else {
      console.log(`${year} is not a leap year.`);
    }
  }

  rl.close();
});
