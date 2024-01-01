const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first number: ', (input1) => {
  rl.question('Enter the second number: ', (input2) => {
    rl.question('Enter the third number: ', (input3) => {
      const num1 = parseFloat(input1);
      const num2 = parseFloat(input2);
      const num3 = parseFloat(input3);

      if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        console.log('Invalid input. Please enter valid numbers.');
      } else {
        let largest;

        if (num1 >= num2 && num1 >= num3) {
          largest = num1;
        } else if (num2 >= num1 && num2 >= num3) {
          largest = num2;
        } else {
          largest = num3;
        }

        console.log(`The largest number is: ${largest}`);
      }

      rl.close();
    });
  });
});
