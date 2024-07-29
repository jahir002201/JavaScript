// Declaring variables
var name = "Jahir"; 
let age = 30; 
const country = "Wonderland"; 

// Data types
let isEmployed = true; 
let salary = 50000.50; 
let hobbies = ["reading", "traveling", "gardening"]; 
let address = { 
  street: "123 Dhaka Street",
  city: "Fantasy City",
  zip: "12345"
};

// Operators
let incrementAge = age + 1; 
let fullName = name + " Islam"; 
let isAdult = age >= 18; 

// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Arrow function
const calculateBonus = (salary) => salary * 0.1;

// Control structures
if (isEmployed) {
  console.log("You are employed.");
} else {
  console.log("You are not employed.");
}

let dayOfWeek = new Date().getDay();
switch (dayOfWeek) {
  case 0:
    console.log("Today is Sunday.");
    break;
  case 1:
    console.log("Today is Monday.");
    break;
  // Add cases for other days
  default:
    console.log("It's a weekday.");
}

// Loops
for (let i = 0; i < hobbies.length; i++) {
  console.log("Hobby:", hobbies[i]);
}

let counter = 0;
while (counter < 5) {
  console.log("Counter:", counter);
  counter++;
}

do {
  console.log("Executing at least once. Counter:", counter);
  counter++;
} while (counter < 5);

// Object manipulation
address.country = country; 
console.log(address);

// Array manipulation
hobbies.push("coding"); 
console.log(hobbies);

// Error handling
try {
  let result = calculateBonus(salary);
  if (isNaN(result)) {
    throw new Error("Invalid calculation.");
  }
  console.log("Bonus:", result);
} catch (error) {
  console.error("Error:", error.message);
}

// Using the function to greet
console.log(greet(fullName));
