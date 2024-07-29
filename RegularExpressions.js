// Literal Characters
const literalRegex = /hello/;
console.log('hello world'.match(literalRegex)); 
console.log('world'.match(literalRegex)); 

// Metacharacters
const metacharRegex = /^hello.world$/;
console.log(metacharRegex.test('hello world')); 
console.log(metacharRegex.test('hello, world')); 

// Quantifiers
const quantifierRegex1 = /a{2,4}/; 
console.log('aaa'.match(quantifierRegex1)); 
console.log('aaaaa'.match(quantifierRegex1)); 

const quantifierRegex2 = /\d+/; 
console.log('Phone: 123-456-7890'.match(quantifierRegex2)); 

// Special Sequences
const specialSeqRegex1 = /\d+/; 
console.log('Phone: 123-456-7890'.match(specialSeqRegex1)); 

const specialSeqRegex2 = /\w+/; 
console.log('Hello_World!'.match(specialSeqRegex2));

// Groups and Capturing
const groupRegex = /(\d{3})-(\d{3})-(\d{4})/;
const dateStr = 'Phone: 123-456-7890';
const match = dateStr.match(groupRegex);
if (match) {
  console.log(`Full Match: ${match[0]}`); 
  console.log(`Area Code: ${match[1]}`); 
  console.log(`Exchange Code: ${match[2]}`); 
  console.log(`Line Number: ${match[3]}`); 
}

// Assertions
const lookaheadRegex = /(?<=@)\w+/; 
console.log('user@example.com'.match(lookaheadRegex)); 

const lookaheadRegex2 = /(?=\d{4})\d+/; 
console.log('Year: 2024'.match(lookaheadRegex2)); 

// Email Validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailRegex.test('example@example.com')); 
console.log(emailRegex.test('example.com')); 

// Date Extraction
const dateRegex = /(\d{4})-(\d{2})-(\d{2})/;
const dateStr2 = '2024-07-29';
const dateMatch = dateStr2.match(dateRegex);
if (dateMatch) {
  console.log(`Year: ${dateMatch[1]}`); 
  console.log(`Month: ${dateMatch[2]}`); 
  console.log(`Day: ${dateMatch[3]}`); 
}

// Replace Vowels
const replaceVowelsRegex = /[aeiou]/gi; 
const replaced = 'Hello World'.replace(replaceVowelsRegex, '*');
console.log(replaced); 

// Split by Non-Word Characters
const splitRegex = /\W+/; 
const splitResult = 'Hello, world! How are you?'.split(splitRegex);
console.log(splitResult); 

// Using Regex Flags
const caseInsensitiveRegex = /hello/i;
console.log(caseInsensitiveRegex.test('HELLO')); 

const globalRegex = /o/g; 
const globalMatches = 'Hello, world!'.match(globalRegex);
console.log(globalMatches); 

// Escaping Special Characters
const escapedRegex = /\\d/; 
console.log('\\d'.match(escapedRegex)); 

// Matching Digits and Non-Digits
const digitRegex = /\d+/; 
console.log('Room 123'.match(digitRegex)); 

const nonDigitRegex = /\D+/; 
console.log('Room 123'.match(nonDigitRegex)); 

// Word Characters and Non-Word Characters
const wordCharRegex = /\w+/; 
console.log('Hello_123'.match(wordCharRegex)); 

const nonWordCharRegex = /\W+/; 
console.log('Hello_123!'.match(nonWordCharRegex)); 

// Whitespace and Non-Whitespace Characters
const whitespaceRegex = /\s+/; 
console.log('Hello   World'.split(whitespaceRegex)); 

const nonWhitespaceRegex = /\S+/; 
console.log('Hello   World'.match(nonWhitespaceRegex)); 

// Testing Empty Strings and Special Cases
console.log(''.match(/^$/)); 
console.log(' '.match(/^\s+$/)); 
console.log('   '.match(/^\s+$/));
