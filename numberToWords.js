const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function convertNumberToWords(number) {
  const units = ['', 'Thousand', 'Million', 'Billion', 'Trillion'];
  const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  const teens = ['', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  function convertThreeDigits(num) {
    const result = [];
    const hundred = Math.floor(num / 100);
    const remainder = num % 100;

    if (hundred > 0) {
      result.push(ones[hundred] + ' Hundred');
    }

    if (remainder > 0) {
      if (remainder < 10) {
        result.push(ones[remainder]);
      } else if (remainder < 20) {
        result.push(teens[remainder - 10]);
      } else {
        const ten = Math.floor(remainder / 10);
        const one = remainder % 10;
        result.push(tens[ten]);
        if (one > 0) {
          result.push(ones[one]);
        }
      }
    }

    return result.join(' ');
  }

  if (number === 0) {
    return 'Zero';
  }

  const isNegative = number < 0;
  const numString = Math.abs(number).toString();

  let words = [];
  let i = 0;
  while (i * 3 < numString.length) {
    const chunk = parseInt(numString.substring(numString.length - (i + 1) * 3, numString.length - i * 3), 10);
    if (chunk !== 0) {
      words.unshift(`${convertThreeDigits(chunk)} ${units[i]}`);
    }
    i++;
  }

  if (isNegative) {
    words.unshift('Negative');
  }

  return words.join(' ');
}

rl.question('Enter a number: ', (input) => {
  const number = parseInt(input, 10);

  if (isNaN(number)) {
    console.log('Invalid input. Please enter a valid number.');
  } else {
    const words = convertNumberToWords(number);
    console.log(`${number} in words: ${words}`);
  }

  rl.close();
});
