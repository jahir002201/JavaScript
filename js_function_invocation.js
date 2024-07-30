// Invoking a Function as a Function
function multiply(a, b) {
    return a * b;
  }
  console.log(multiply(10, 2));  
  
  // The `this` Keyword
  function checkThis() {
    return this;
  }
  console.log(checkThis());  
  
  // In Strict Mode
  'use strict';
  console.log(checkThis());  
  
  // Invoking a Function as a Method
  const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log(person.fullName());  
  
  // Using `call()`, `apply()`, and `bind()`
  function greet() {
    return "Hello, " + this.name;
  }
  const alice = { name: "Alice" };
  console.log(greet.call(alice));  
  console.log(greet.apply(alice));  
  const boundGreet = greet.bind(alice);
  console.log(boundGreet());  
  
  // Invoking a Function with a Function Constructor
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  const john = new Person("John", "Doe");
  console.log(john.firstName);  
  console.log(john.lastName);  
  