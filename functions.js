// Function to convert Fahrenheit to Celsius
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit - 32);
  }
  
  // Function to calculate the area of a rectangle
  function calculateArea(length, width) {
    return length * width;
  }
  
  // Function to greet a user
  function greetUser(name) {
    return `Hello, ${name}!`;
  }
  
  // Function to display user information
  function displayUserInfo(name, age, country, occupation) {
    return `Name: ${name}, Age: ${age}, Country: ${country}, Occupation: ${occupation}`;
  }
  
  // Example of using a function directly as a variable value
  let temperatureText = "The temperature is " + toCelsius(77) + " Celsius";
  console.log(temperatureText);
  
  // Example of storing function return value in a variable
  let area = calculateArea(5, 10);
  console.log(`The area of the rectangle is ${area}`);
  
  // Example of calling a function and storing the result
  let greeting = greetUser("Jahir");
  console.log(greeting);
  
  // Display user information
  let userInfo = displayUserInfo("Jahir", 24, "Bangladesh", "Student");
  console.log(userInfo);
  
  // Example of local variables
  function displayCarName() {
    let carName = "Volvo"; // Local variable
    console.log(`Inside function: ${carName}`);
  }
  
  // Calling the function to display car name
  displayCarName();
  
  // Trying to access the local variable outside the function will result in an error
  // console.log(carName); // Uncommenting this line will cause an error
  
  // Self-invoking function example
  (function() {
    console.log("This is a self-invoking function!");
  })();
  
  // Function without parameters, returning a value
  function sayHello() {
    return "Hello, World!";
  }
  
  let message = sayHello();
  console.log(message);
  
  // Example of incorrect parameter usage
  let incorrectValue = toCelsius();
  console.log(`Incorrect value: ${incorrectValue}`); // Will print "Incorrect value: NaN"
  
  // Accessing a function without ()
  let functionReference = toCelsius;
  console.log(functionReference); // Will print the function definition
  