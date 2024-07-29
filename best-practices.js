// Avoid global variables and always declare local variables
(function() {
    'use strict'; 
  
    // Declare and initialize variables
    const MAX_RETRIES = 5;
    let userName = 'Jahir Islam';
    let userAge = 30;
  
    // Function Declaration
    function greetUser(name = 'Guest') {
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
  
    // Use functions
    console.log(greetUser(userName));
    console.log(`Square of 4: ${calculateSquare(4)}`);
  
    const person = new Person('Jahir Islam', 28);
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
  
    // Avoid using new keyword for primitives and objects
    const str = ''; 
    const num = 0; 
    const bool = false; 
    const obj = {}; 
    const arr = []; 
    const regex = /()/; 
    const func = function() {}; 
  
    // Example of automatic type conversion
    let x = 5 + '7'; 
    console.log(x); 
  
    // Use === for comparison
    console.log(0 === ''); 
    console.log(1 === '1'); 
    console.log(1 === 1); 
  
    // Avoid using eval()
    // eval("console.log('This is dangerous!')"); // Should be avoided
  
    // Default parameters
    function myFunction(x, y = 0) {
      return x + y;
    }
    console.log(myFunction(5)); 
  
    // Switch statement with default case
    const day = new Date().getDay();
    let dayName;
    switch (day) {
      case 0:
        dayName = 'Sunday';
        break;
      case 1:
        dayName = 'Monday';
        break;
      case 2:
        dayName = 'Tuesday';
        break;
      case 3:
        dayName = 'Wednesday';
        break;
      case 4:
        dayName = 'Thursday';
        break;
      case 5:
        dayName = 'Friday';
        break;
      case 6:
        dayName = 'Saturday';
        break;
      default:
        dayName = 'Unknown';
    }
    console.log(`Today is: ${dayName}`);
  })();
  