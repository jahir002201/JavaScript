// Variables
const MAX_RETRIES = 5;
let userName = 'Jahir';
let userAge = 24;

// Function Declaration
function greetUser(name) {
  return `Hello, ${name}!`;
}

// Function Expression
const calculateSquare = (number) => number * number;

// Class Definition
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `${this.name} is ${this.age} years old.`;
  }
}

// Usage
console.log(greetUser(userName));
console.log(`Square of 4: ${calculateSquare(4)}`);

const person = new Person('Jahir Islam', 24);
console.log(person.getDetails());

// Error Handling
try {
  throw new Error('Something went wrong!');
} catch (error) {
  console.error('Caught an error:', error.message);
}

// Array and Object Destructuring
const [first, second] = ['apple', 'banana'];
const { name, age } = person;

console.log(`First: ${first}`);
console.log(`Name: ${name}, Age: ${age}`);
