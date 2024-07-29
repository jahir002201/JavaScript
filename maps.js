// Creating a Map with your details
const myMap = new Map([
    ['name', 'Jahir Islam'],
    ['age', 24],
    ['occupation', 'Mathematician']
]);
console.log('Initial Map:', myMap);

// Using set() method
myMap.set('city', 'Dhaka');
myMap.set('age', 25); 
console.log('\nMap after adding and updating values:', myMap);

// Using get() method
console.log('\nGetting values from the map:');
console.log('Name:', myMap.get('name')); 
console.log('City:', myMap.get('city')); 
console.log('Country:', myMap.get('country')); 

// Using has() method
console.log('\nChecking existence of keys:');
console.log('Has age?', myMap.has('age'));
console.log('Has country?', myMap.has('country'));

// Using delete() method
myMap.delete('occupation');
console.log('\nMap after deleting a key:', myMap);

// Using size property
console.log('\nSize of the map:', myMap.size);

// Using forEach() method
console.log('\nIterating over the map with forEach:');
myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

// Using clear() method
myMap.clear();
console.log('\nMap after clearing all entries:', myMap);

// Using iterators
const anotherMap = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

console.log('\nUsing keys() iterator:');
for (const key of anotherMap.keys()) {
    console.log(key);
}

console.log('\nUsing values() iterator:');
for (const value of anotherMap.values()) {
    console.log(value);
}

console.log('\nUsing entries() iterator:');
for (const [key, value] of anotherMap.entries()) {
    console.log(`${key}: ${value}`);
}
