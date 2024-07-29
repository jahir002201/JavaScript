// Object Constructor
function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;

    // Method to display car details
    this.getCarInfo = function() {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`;
    };

    // Method to start the car
    this.start = function() {
        return `${this.make} ${this.model} is starting.`;
    };

    // Method to display a custom message
    this.displayMessage = function(message) {
        return `Message from ${this.make} ${this.model}: ${message}`;
    };
}

// Creating an instance of Car
let myCar = new Car("Toyota", "Corolla", 2020, "Blue");

// Accessing Properties
console.log(myCar.make);       
console.log(myCar.model);       

// Calling Methods
console.log(myCar.getCarInfo()); 
console.log(myCar.start());     
console.log(myCar.displayMessage("Welcome to your new ride!")); 

// Displaying Object (Converting to String)
console.log(JSON.stringify(myCar)); 
