//JavaScript Program (ES6) to check if a character is a vowel or consonant

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a character: ', (input) => {
  const c = input.toLowerCase(); // Convert to lowercase for easier comparison

  const isLowercaseVowel = ['a', 'e', 'i', 'o', 'u'].includes(c);
  const isUppercaseVowel = ['A', 'E', 'I', 'O', 'U'].includes(c);

  if (!c.match(/^[a-zA-Z]$/)) {
    console.log('Error! Non-alphabetic character.');
  } else if (isLowercaseVowel || isUppercaseVowel) {
    console.log(`${c} is a vowel.`);
  } else {
    console.log(`${c} is a consonant.`);
  }

  rl.close();
});
