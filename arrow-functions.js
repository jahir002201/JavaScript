// Basic Arrow Function
const add = (a, b) => a + b;
console.log('Add result:', add(5, 3)); 

// Single Parameter
const square = x => x * x;
console.log('Square result:', square(4)); 

// No Parameters
const greet = () => 'Hello, world!';
console.log('Greeting:', greet());

// Multi-Line Arrow Function
const sumAndMultiply = (a, b) => {
  const sum = a + b;
  const product = a * b;
  return `Sum: ${sum}, Product: ${product}`;
};
console.log(sumAndMultiply(2, 3)); 

// Arrow Function with `this`
const person = {
  name: 'Jahir',
  greet: function() {
    setTimeout(() => {
      console.log('Hello from', this.name); 
    }, 1000);
  }
};
person.greet(); 

// Arrow Function vs Regular Function in Methods
const obj = {
  name: 'Bob',
  regularMethod: function() {
    console.log('Regular Method:', this.name); 
  },
  arrowMethod: () => {
    console.log('Arrow Method:', this.name); 
  }
};
obj.regularMethod(); 
obj.arrowMethod(); 

// Arrow Function as a Callback
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log('Doubled numbers:', doubled);

// Implicit Return
const multiply = (x, y) => x * y;
console.log('Multiply result:', multiply(3, 4));

// Handling `this` in Constructor Functions
function Person(name) {
  this.name = name;
  this.greet = () => {
    console.log('Hello, my name is', this.name); 
  };
}

const p = new Person('Jahirul Islam');
p.greet(); 
