// Creating a Set
const numbers = new Set([1, 2, 3, 4, 5]);
console.log('Initial Set:', numbers);

// Adding values to a Set
numbers.add(6);
numbers.add(2); // Adding a duplicate value (will be ignored)
console.log('\nSet after adding values:', numbers);

// Checking the size of the Set
console.log('Size of the Set:', numbers.size);

// Checking for existence of a value
console.log('Has 3?', numbers.has(3)); // true
console.log('Has 7?', numbers.has(7)); // false

// Removing a value from the Set
numbers.delete(4);
console.log('\nSet after removing a value:', numbers);

// Iterating over a Set
console.log('\nIterating over the Set:');
for (const number of numbers) {
    console.log(number);
}

// Clearing all values from the Set
numbers.clear();
console.log('\nSet after clearing all values:', numbers);

// Creating a Set with different data types
const mixedSet = new Set([1, 'hello', { name: 'Jahir' }, true]);
console.log('\nSet with mixed data types:', mixedSet);

// Demonstrating Set operations: Union, Intersection, Difference

// Union
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
const union = new Set([...setA, ...setB]);
console.log('\nUnion of Set A and Set B:', union);

// Intersection
const intersection = new Set([...setA].filter(item => setB.has(item)));
console.log('Intersection of Set A and Set B:', intersection);

// Difference
const difference = new Set([...setA].filter(item => !setB.has(item)));
console.log('Difference of Set A and Set B:', difference);
