// 1. Using const
console.log("Using const Example:");

const car = { type: "Fiat", model: "500", color: "white" };

// Re-assigning the object will throw an error
// car = { type: "Ford", model: "Mustang", color: "red" }; 

// Changing properties is allowed
car.color = "red";
console.log("Updated car color:", car.color);

// 2. Object.preventExtensions()
console.log("\nObject.preventExtensions() Example:");

const person = { firstName: "John", lastName: "Doe" };

// Prevent adding new properties
Object.preventExtensions(person);

try {
    // Attempting to add a new property
    person.nationality = "English";
} catch (e) {
    console.error("Error adding property:", e.message);
}

console.log("Person with attempted new property:", person); 

// Check if the object is extensible
const isExtensiblePerson = Object.isExtensible(person);
console.log("Is person extensible:", isExtensiblePerson); 

// 3. Object.seal()
console.log("\nObject.seal() Example:");

const carSealed = { type: "Fiat", model: "500", color: "white" };

// Seal the object
Object.seal(carSealed);

try {
    // Attempting to delete a property
    delete carSealed.color;
} catch (e) {
    console.error("Error deleting property:", e.message);
}

console.log("Sealed car with attempted deleted property:", carSealed); 

// Check if the object is sealed
const isSealedCar = Object.isSealed(carSealed);
console.log("Is car sealed:", isSealedCar);

// 4. Object.freeze()
console.log("\nObject.freeze() Example:");

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Freeze the array
Object.freeze(fruits);

try {
    // Attempting to add a new element
    fruits.push("Kiwi");
} catch (e) {
    console.error("Error adding element:", e.message);
}

console.log("Frozen fruits array:", fruits); 

// Check if the object is frozen
const isFrozenFruits = Object.isFrozen(fruits);
console.log("Is fruits array frozen:", isFrozenFruits); 
