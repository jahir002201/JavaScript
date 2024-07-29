// Creating an array
const fruits = ['apple', 'banana', 'cherry', 'date'];

// JavaScript Array Methods
// 1. push() - Add elements to the end
fruits.push('elderberry');
console.log('After push:', fruits);

// 2. pop() - Remove the last element
fruits.pop();
console.log('After pop:', fruits);

// 3. unshift() - Add elements to the beginning
fruits.unshift('fig');
console.log('After unshift:', fruits);

// 4. shift() - Remove the first element
fruits.shift();
console.log('After shift:', fruits);

// 5. slice() - Get a sub-array
const subArray = fruits.slice(1, 3);
console.log('Sub-array using slice:', subArray);

// 6. splice() - Modify the array by removing or adding elements
fruits.splice(1, 2, 'grape', 'honeydew');
console.log('After splice:', fruits);

// JavaScript Array Search
// 1. indexOf() - Find the index of an element
const index = fruits.indexOf('honeydew');
console.log('Index of honeydew:', index);

// 2. includes() - Check if an array contains an element
const hasGrape = fruits.includes('grape');
console.log('Array contains grape:', hasGrape);

// JavaScript Sorting Arrays
// 1. sort() - Sort the array
const sortedFruits = fruits.slice().sort(); // slice() to create a copy for sorting
console.log('Sorted array:', sortedFruits);

// 2. reverse() - Reverse the array
const reversedFruits = fruits.slice().reverse(); // slice() to create a copy for reversing
console.log('Reversed array:', reversedFruits);

// JavaScript Array Iteration
// 1. forEach() - Iterate over the array
console.log('Using forEach:');
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

// 2. map() - Create a new array by transforming elements
const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log('Upper case fruits using map:', upperCaseFruits);

// 3. filter() - Create a new array with elements that pass a test
const longNamedFruits = fruits.filter(fruit => fruit.length > 5);
console.log('Fruits with names longer than 5 characters using filter:', longNamedFruits);

// 4. reduce() - Reduce the array to a single value
const totalLength = fruits.reduce((sum, fruit) => sum + fruit.length, 0);
console.log('Total length of all fruit names using reduce:', totalLength);

// JavaScript Array Const
// Demonstrating that arrays declared with const can be modified
console.log('Original fruits array:', fruits);
fruits[0] = 'kiwi'; // Modify an element
fruits.push('lemon'); // Add a new element
console.log('Modified fruits array:', fruits);
