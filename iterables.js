// Example with Array
const numbers = [1, 2, 3, 4, 5];
console.log('Iterating over an array:');
for (const number of numbers) {
    console.log(number);
}

// Example with String
const greeting = 'Hello';
console.log('\nIterating over a string:');
for (const char of greeting) {
    console.log(char);
}

// Example with Set
const uniqueNumbers = new Set([1, 2, 3, 4, 5, 1, 2]);
console.log('\nIterating over a Set:');
for (const number of uniqueNumbers) {
    console.log(number);
}

// Example with Map
const userRoles = new Map([
    ['admin', 'Administrator'],
    ['editor', 'Editor'],
    ['viewer', 'Viewer']
]);
console.log('\nIterating over a Map:');
for (const [key, value] of userRoles) {
    console.log(`${key}: ${value}`);
}

// Example with Custom Iterable
const customIterable = {
    *[Symbol.iterator]() {
        yield 'a';
        yield 'b';
        yield 'c';
    }
};

console.log('\nIterating over a custom iterable:');
for (const value of customIterable) {
    console.log(value);
}
