// Basic for loop: Printing numbers 0 to 4
console.log('Basic for loop:');
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// for loop with an array: Iterating over an array
const fruits = ['apple', 'banana', 'cherry', 'date'];
console.log('\nIterating over an array:');
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Nested for loop: Creating a multiplication table
console.log('\nMultiplication Table:');
const size = 5;
for (let i = 1; i <= size; i++) {
    let row = '';
    for (let j = 1; j <= size; j++) {
        row += (i * j).toString().padStart(4, ' ') + ' ';
    }
    console.log(row);
}

// for loop with break: Exiting the loop early
console.log('\nLoop with break statement:');
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log('Breaking the loop at i =', i);
        break;
    }
    console.log(i);
}

// for loop with continue: Skipping an iteration
console.log('\nLoop with continue statement:');
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        // Skip even numbers
        continue;
    }
    console.log(i);
}

// for loop with a descending counter
console.log('\nDescending for loop:');
for (let i = 5; i >= 0; i--) {
    console.log(i);
}
