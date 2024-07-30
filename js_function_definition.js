// Function Declaration
function multiply(a, b) {
    return a * b;
  }
  
  // Function Expression
  const divide = function(a, b) {
    return a / b;
  };
  
  // Function Constructor
  const add = new Function("a", "b", "return a + b;");
  
  // Hoisting Example
  console.log(subtract(10, 5)); 
  function subtract(a, b) {
    return a - b;
  }
  
  // Self-Invoking Function
  (function() {
    console.log("Self-invoking function");
  })();
  
  // Functions as Values
  let result = multiply(4, 3) * 2;
  console.log(result);  
  
  // Functions as Objects
  console.log(multiply.length); 
  console.log(multiply.toString());
  
  // Arrow Function
  const square = (x) => x * x;
  console.log(square(5)); 
  