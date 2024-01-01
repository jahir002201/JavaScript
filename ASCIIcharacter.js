//JavaScript Program (ES6) to get ASCII value of a character

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a character: ', (inputChar) => {
  const c = inputChar.charAt(0); // Take the first character

  console.log(`ASCII Value of ${c} is ${c.charCodeAt(0)}`);

  rl.close();
});
