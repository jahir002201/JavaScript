// Example with an array
const fruits = ['apple', 'banana', 'cherry', 'date'];

console.log('Iterating over an array with for...of:');
for (const fruit of fruits) {
    console.log(fruit);
}

// Example with a string
const text = 'Hello, World!';

console.log('\nIterating over a string with for...of:');
for (const char of text) {
    console.log(char);
}

// Example with a Set
const uniqueNumbers = new Set([1, 2, 3, 4, 5]);

console.log('\nIterating over a Set with for...of:');
for (const number of uniqueNumbers) {
    console.log(number);
}

// Example with a Map
const userRoles = new Map([
    ['admin', 'Administrator'],
    ['editor', 'Editor'],
    ['viewer', 'Viewer']
]);

console.log('\nIterating over a Map with for...of:');
for (const [key, value] of userRoles) {
    console.log(`${key}: ${value}`);
}

// Example with an array of objects
const people = [
    { name: 'Jahir', age: 24 },
    { name: 'Islam', age: 25 },
    { name: 'Shakib', age: 26 }
];

console.log('\nIterating over an array of objects with for...of:');
for (const person of people) {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
}
