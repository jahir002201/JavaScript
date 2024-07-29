// Basic while loop: Printing numbers 0 to 4
let count = 0;

console.log('Basic while loop:');
while (count < 5) {
    console.log(count);
    count++; // Increment count to eventually break the loop
}

// Example with a string: Counting characters until a condition is met
const text = 'Hello, World!';
let index = 0;

console.log('\nCounting characters in a string:');
while (index < text.length) {
    console.log(text[index]);
    index++; // Move to the next character
}

// while loop with break: Exiting the loop early
let sum = 0;
let num = 1;

console.log('\nLoop with break statement:');
while (num <= 10) {
    sum += num;
    if (sum > 30) {
        console.log('Sum exceeded 30, breaking the loop.');
        break;
    }
    num++;
}
console.log('Sum:', sum);

// while loop with continue: Skipping an iteration
let evenSum = 0;
num = 1;

console.log('\nLoop with continue statement:');
while (num <= 10) {
    if (num % 2 !== 0) {
        // Skip odd numbers
        num++;
        continue;
    }
    evenSum += num;
    num++;
}
console.log('Sum of even numbers:', evenSum);

// Infinite while loop with a condition (requires manual interruption)
console.log('\nInfinite loop (press Ctrl+C to stop):');
let infiniteCounter = 0;
while (true) {
    console.log(infiniteCounter);
    infiniteCounter++;
    if (infiniteCounter > 5) {
        // Break out of the infinite loop for demonstration purposes
        break;
    }
}
