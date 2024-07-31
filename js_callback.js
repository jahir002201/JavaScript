// Example 1: Simple Function Sequence
function myDisplayer(some) {
    console.log(some);
}

function myFirst() {
    myDisplayer("Hello");
}

function mySecond() {
    myDisplayer("Goodbye");
}

// Test function sequence
console.log("Example 1:");
myFirst();  
mySecond(); 

// Example 2: Calculating and Displaying Result Separately
function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

// Separate Calculation and Display
console.log("\nExample 2:");
let result = myCalculator(5, 5);
myDisplayer(result); 

// Example 3: Using Callback for Displaying Result
function myCalculatorWithCallback(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

// Using Callback
console.log("\nExample 3:");
myCalculatorWithCallback(5, 5, myDisplayer); 

// Example 4: Using Callback with Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Function to remove negative numbers
function removeNeg(numbers, callback) {
    const myArray = [];
    for (const x of numbers) {
        if (callback(x)) {
            myArray.push(x);
        }
    }
    return myArray;
}

// Callback to keep only positive numbers
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// Display result of filtered array
console.log("\nExample 4:");
console.log(posNumbers); 
