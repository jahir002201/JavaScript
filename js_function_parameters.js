// Default Parameters
function greet(name = 'Guest') {
    return `Hello, ${name}!`;
  }
  console.log(greet());  
  console.log(greet('Alice'));  
  
  // Rest Parameters
  function multiply(multiplier, ...numbers) {
    return numbers.map(num => num * multiplier);
  }
  console.log(multiply(2, 1, 2, 3, 4));  
  
  // Arguments Object
  function average() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum / arguments.length;
  }
  console.log(average(1, 2, 3, 4, 5));  
  
  // Passing by Value
  function updateNumber(num) {
    num += 10;
  }
  let number = 20;
  updateNumber(number);
  console.log(number);  
  
  // Passing by Reference
  function updatePerson(person) {
    person.age += 1;
  }
  let person = { name: 'John', age: 30 };
  updatePerson(person);
  console.log(person.age);  
  