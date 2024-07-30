// Class Inheritance Example

// Base class Car
class Car {
    constructor(brand) {
      this.carname = brand;
    }
    
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  // Derived class Model that inherits from Car
  class Model extends Car {
    constructor(brand, mod) {
      super(brand); // Call the parent class constructor
      this.model = mod;
    }
    
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  // Create an instance of Model
  let myCar = new Model("Ford", "Mustang");
  console.log("Inheritance Example:", myCar.show());
  
  // Getters and Setters Example
  
  // Class with getters and setters
  class CarWithGettersSetters {
    constructor(brand) {
      this._carname = brand; // Use underscore to differentiate private property
    }
  
    // Getter for carname
    get carname() {
      return this._carname;
    }
  
    // Setter for carname
    set carname(x) {
      this._carname = x;
    }
  }
  
  // Create an instance of CarWithGettersSetters
  const myCarWithGettersSetters = new CarWithGettersSetters("Ford");
  
  // Display the initial carname
  console.log("Initial car name:", myCarWithGettersSetters.carname);
  
  // Change the carname using the setter
  myCarWithGettersSetters.carname = "Volvo";
  
  // Display the updated carname
  console.log("Updated car name:", myCarWithGettersSetters.carname);
  
  // Hoisting Example
  // Correct way to use classes, declare the class first
  class CarForHoisting {
    constructor(brand) {
      this.carname = brand;
    }
  }
  
  // Now you can use the class
  const myCarForHoisting = new CarForHoisting("Ford");
  console.log("Car created with hoisting example:", myCarForHoisting.carname);
  
  