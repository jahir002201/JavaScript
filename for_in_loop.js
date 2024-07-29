// for...in with an object
const person = {
    firstName: 'Jahir',
    lastName: 'Islam',
    age: 24,
    occupation: 'Mathematician'
};

console.log('Iterating over an object with for...in:');
for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`${key}: ${person[key]}`);
    }
}

// for...in with an array
const fruits = ['apple', 'banana', 'cherry', 'date'];

console.log('\nIterating over an array with for...in:');
for (const index in fruits) {
    console.log(`${index}: ${fruits[index]}`);
}
