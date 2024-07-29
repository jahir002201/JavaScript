// Creating a Set
const mySet = new Set([1, 2, 3, 4, 5]);
console.log('Initial Set:', mySet);

// Using add() method
mySet.add(6);
mySet.add(3); // Duplicate value, will be ignored
console.log('\nSet after adding values:', mySet);

// Using delete() method
mySet.delete(4);
console.log('Set after deleting 4:', mySet);

// Using has() method
console.log('\nDoes the set have 3?', mySet.has(3)); // true
console.log('Does the set have 4?', mySet.has(4)); // false

// Using size property
console.log('\nSize of the set:', mySet.size);

// Using forEach() method
console.log('\nIterating over the set with forEach:');
mySet.forEach(value => {
    console.log(value);
});

// Using clear() method
mySet.clear();
console.log('\nSet after clearing all values:', mySet);
