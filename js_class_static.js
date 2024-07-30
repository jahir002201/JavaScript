// Class with Static Methods
class Car {
    constructor(name) {
      this.name = name;
    }
    
    // Static method
    static hello() {
      return "Hello!!";
    }
  
    // Static method that accepts an object as a parameter
    static helloWithObject(car) {
      return "Hello " + car.name;
    }
  }
  
  // Create an instance of Car
  const myCar = new Car("Ford");
  
  // Display the results of static methods
  console.log("Static method hello:", Car.hello());
  console.log("Static method helloWithObject:", Car.helloWithObject(myCar));
  