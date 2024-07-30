// 1. Object.defineProperty()
console.log("Object.defineProperty() Example:");

// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "EN"
};

// Add a new property
Object.defineProperty(person, "year", { value: "2008" });
console.log(person); 

// Change a property value
Object.defineProperty(person, "language", { value: "NO", writable: true }); 
console.log(person.language); 

// Make language read-only
Object.defineProperty(person, "language", { writable: false });
console.log("Attempting to change a read-only property:");
try {
  person.language = "EN"; 
} catch (e) {
  console.error("Error:", e.message); 
}
console.log(person.language); 

// Make language non-enumerable
Object.defineProperty(person, "language", { enumerable: false });
console.log("Enumerable Properties:", Object.keys(person)); 

// 2. Object.getOwnPropertyDescriptor()
console.log("\nObject.getOwnPropertyDescriptor() Example:");
const descriptor = Object.getOwnPropertyDescriptor(person, "language");
console.log(descriptor);
// { value: 'NO', writable: false, enumerable: false, configurable: false }

// 3. Object.getOwnPropertyDescriptors()
console.log("\nObject.getOwnPropertyDescriptors() Example:");
const descriptors = Object.getOwnPropertyDescriptors(person);
console.log(descriptors);

// 4. Object.getOwnPropertyNames()
console.log("\nObject.getOwnPropertyNames() Example:");
const allProperties = Object.getOwnPropertyNames(person);
console.log(allProperties); 

// 5. Object.keys()
console.log("\nObject.keys() Example:");
const enumerableProperties = Object.keys(person);
console.log(enumerableProperties); 

// 6. Adding Getters and Setters
console.log("\nAdding Getters and Setters Example:");

// Create an object
const person2 = { firstName: "John", lastName: "Doe" };

// Define a getter
Object.defineProperty(person2, "fullName", {
  get: function() { return this.firstName + " " + this.lastName; }
});
console.log(person2.fullName); 

// Define setters and getters for a counter
console.log("\nCounter Example:");
const counterObj = { counter: 0 };

Object.defineProperty(counterObj, "reset", {
  get: function() { this.counter = 0; }
});

Object.defineProperty(counterObj, "increment", {
  get: function() { this.counter++; }
});

Object.defineProperty(counterObj, "decrement", {
  get: function() { this.counter--; }
});

Object.defineProperty(counterObj, "add", {
  set: function(value) { this.counter += value; }
});

Object.defineProperty(counterObj, "subtract", {
  set: function(value) { this.counter -= value; }
});

// Use the counter object
counterObj.reset; 
counterObj.add = 5; 
counterObj.subtract = 1; 
counterObj.increment; 
counterObj.decrement; 
console.log(counterObj.counter); 

// 7. Object.getPrototypeOf()
console.log("\nObject.getPrototypeOf() Example:");
const prototype = Object.getPrototypeOf(person);
console.log(prototype); 

// Demonstrating Prototype Chain
console.log("\nPrototype Chain Demonstration:");
console.log(person.__proto__ === Object.prototype); 
console.log(person.__proto__.__proto__ === null); 
