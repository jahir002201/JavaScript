// Example with break: Exiting the loop early
console.log('Using break to exit a loop early:');
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log('Breaking the loop at i =', i);
        // Exit the loop when i is 5
        break; 
    }
    console.log(i);
}

// Example with continue: Skipping an iteration
console.log('\nUsing continue to skip an iteration:');
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        // Skip even numbers
        continue;
    }
    // This will print only odd numbers
    console.log(i); 
}

// Nested loops with break: Breaking out of multiple levels
console.log('\nBreaking out of nested loops:');
outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            console.log('Breaking out of both loops at i =', i, 'and j =', j);
            // Break out of both loops
            break outerLoop; 
        }
        console.log('i:', i, 'j:', j);
    }
}

// Nested loops with continue: Skipping to the next iteration of the outer loop
console.log('\nUsing continue in nested loops:');
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            console.log('Skipping to the next iteration of the outer loop at i =', i, 'and j =', j);
            // Skip the rest of the inner loop, continue with the next iteration of the outer loop
            continue; 
        }
        console.log('i:', i, 'j:', j);
    }
}
