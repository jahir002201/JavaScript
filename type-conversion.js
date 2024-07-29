// String concatenation with a number
let num = 42;
let str = "The answer is " + num; 
console.log(str); 

// Implicit conversion in arithmetic operations
let strNum = "5";
let result = strNum * 2; 
console.log(result);

// Convert number to string
let number = 123;
let numberToStr = String(number); 
console.log(numberToStr); 

// Convert string to number
let strToNum = "456";
let stringToNumber = Number(strToNum); 
console.log(stringToNumber); 

// Convert string to integer
let strFloat = "123.45";
let integerPart = parseInt(strFloat); 
console.log(integerPart); 

// Convert string to floating-point number
let floatNum = parseFloat(strFloat); 
console.log(floatNum); 

// Convert to boolean
let truthyValue = "Hello";
let boolValue = Boolean(truthyValue); 
console.log(boolValue); 

let falsyValue = 0;
let boolFalse = Boolean(falsyValue); 
console.log(boolFalse); 

// Special cases
console.log(Number(null)); 
console.log(Number(undefined)); 

let invalidNum = "abc";
console.log(Number(invalidNum)); 
