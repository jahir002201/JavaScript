// Declares a variable
var age = 25;

// Declares a block variable
let name = "Jahir";

// Declares a block constant
const country = "Bangladesh";

// Function declaration
function getGreeting(hour) {
  // Marks a block of statements to be executed on a condition
  if (hour < 12) {
    return "Good morning";
  } else if (hour < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}

// Switch statement example
function getDayName(dayNumber) {
  // Marks a block of statements to be executed in different cases
  switch (dayNumber) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Invalid day";
  }
}

// For loop example
function listWeekDays() {
  // Marks a block of statements to be executed in a loop
  for (let i = 0; i < 7; i++) {
    console.log(getDayName(i));
  }
}

// Try-catch block for error handling
function calculateAge(yearOfBirth) {
  try {
    if (typeof yearOfBirth !== 'number') {
      throw new Error("Invalid input: yearOfBirth must be a number");
    }
    return new Date().getFullYear() - yearOfBirth;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

// Using the function to get a greeting message
var currentHour = new Date().getHours();
console.log(getGreeting(currentHour));

// Listing all weekdays
listWeekDays();

// Calculating age with error handling
var birthYear = 1995;
console.log(`Age: ${calculateAge(birthYear)}`);
