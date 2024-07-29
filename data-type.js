// String
let name = "Jahir Islam";

// Number
let age = 24;

// Bigint
let largeNumber = 1234567890123456789012345678901234567890n;

// Boolean
let isMarried = false;

// Undefined
let children;

// Null
let car = null;

// Symbol
let uniqueId = Symbol('id');

// Object
let person = {
    firstName: "Jahir",
    lastName: "Islam",
    age: 24,
    isMarried: false
};

// Array (built-in object type)
let hobbies = ["reading", "traveling", "swimming"];

// Date (built-in object type)
let currentDate = new Date();

// Map (built-in object type)
let userRoles = new Map();
userRoles.set('admin', 'Jahir');
userRoles.set('editor', 'shakib');

// Set (built-in object type)
let uniqueNumbers = new Set([1, 2, 3, 4, 5]);

// Int8Array (built-in object type)
let intArray = new Int8Array([1, 2, 3, 4, 5]);

// Float64Array (built-in object type)
let floatArray = new Float64Array([1.1, 2.2, 3.3]);

// Promise (built-in object type)
let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success!"), 1000);
});

// Logging all the variables to the console
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Large Number: ${largeNumber}`);
console.log(`Is Married: ${isMarried}`);
console.log(`Children: ${children}`);
console.log(`Car: ${car}`);
console.log(`Unique ID: ${uniqueId.toString()}`);
console.log(`Person: ${JSON.stringify(person)}`);
console.log(`Hobbies: ${hobbies}`);
console.log(`Current Date: ${currentDate}`);
console.log(`User Roles: ${JSON.stringify([...userRoles])}`);
console.log(`Unique Numbers: ${[...uniqueNumbers]}`);
console.log(`Int8Array: ${intArray}`);
console.log(`Float64Array: ${floatArray}`);
promise.then(result => console.log(`Promise Result: ${result}`));
