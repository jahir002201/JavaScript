// Define the Car class
class Car {
    // Constructor method to initialize the object properties
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  
    // Method to calculate the age of the car
    age(currentYear) {
      return currentYear - this.year;
    }
  }
  
  // Create instances of the Car class
  const myCar1 = new Car("Ford", 2014);
  const myCar2 = new Car("Audi", 2019);
  
  // Get the current year
  const currentYear = new Date().getFullYear();
  
  // Display the car ages
  console.log(`My first car is a ${myCar1.name} and it is ${myCar1.age(currentYear)} years old.`);
  console.log(`My second car is a ${myCar2.name} and it is ${myCar2.age(currentYear)} years old.`);
  
  // Example of strict mode
  // Note: Strict mode is automatically applied in class bodies, so no need to explicitly use 'use strict' here
  // But for demonstration purposes, here’s how you’d use it in a regular script:
  
  // 'use strict';
  // class StrictCar {
  //   constructor(name, year) {
  //     this.name = name;
  //     this.year = year;
  //   }
  
  //   age(currentYear) {
  //      Uncommenting the following line will cause an error in strict mode
  //      undeclaredVariable = 10; 
  //     return currentYear - this.year;
  //   }
  // }
  
  // const strictCar = new StrictCar("BMW", 2020);
  // console.log(`Strict car age: ${strictCar.age(currentYear)}`);
  