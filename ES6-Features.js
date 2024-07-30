// The let keyword
let variableLet = "I can be reassigned";

// The const keyword
const variableConst = "I cannot be reassigned";

// Arrow Functions
const arrowFunction = (a, b) => a + b;

// The {a, b} = Operator (Object Destructuring)
const obj = { a: 1, b: 2 };
const { a, b } = obj;

// The [a, b] = Operator (Array Destructuring)
const arr = [1, 2];
const [x, y] = arr;

// The ... Operator (Spread and Rest)
const restParam = (...args) => args;
const spreadExample = [1, 2, ...arr];

// For/of
for (let value of arr) {
  console.log(value);
}

// Map Objects
const map = new Map();
map.set('key', 'value');

// Set Objects
const set = new Set([1, 2, 3]);

// Classes
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello, ${this.name}`;
  }
}

// Promises
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Done'), 1000);
});

// Symbol
const symbol = Symbol('unique');

// Default Parameters
const defaultParamFunc = (a, b = 10) => a + b;

// Function Rest Parameter
const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);

// String.includes()
console.log('Hello world'.includes('world'));

// String.startsWith()
console.log('Hello world'.startsWith('Hello'));

// String.endsWith()
console.log('Hello world'.endsWith('world'));

// Array entries()
for (let [index, value] of arr.entries()) {
  console.log(index, value);
}

// Array.from()
console.log(Array.from('Hello'));

// Array keys()
for (let key of arr.keys()) {
  console.log(key);
}

// Array find()
console.log(arr.find(element => element > 1));

// Array findIndex()
console.log(arr.findIndex(element => element > 1));

// Math.trunc
console.log(Math.trunc(4.9));

// Math.sign
console.log(Math.sign(-10));

// Math.cbrt
console.log(Math.cbrt(27));

// Math.log2
console.log(Math.log2(8));

// Math.log10
console.log(Math.log10(100));

// Number.EPSILON
console.log(Number.EPSILON);

// Number.MIN_SAFE_INTEGER
console.log(Number.MIN_SAFE_INTEGER);

// Number.MAX_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER);

// Number.isInteger()
console.log(Number.isInteger(123));

// Number.isSafeInteger()
console.log(Number.isSafeInteger(123));

// New Global Methods
console.log(Number.parseInt('123'));
console.log(Number.parseFloat('123.45'));

