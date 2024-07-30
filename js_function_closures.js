// JavaScript Closures Example

// Global vs Local Variables
function example1() {
    let a = 4; 
    return a * a; 
  }
  
  console.log("Example 1:", example1()); 
  
  // Global variable
  let globalVar = 4;
  
  function example2() {
    return globalVar * globalVar; 
  }
  
  console.log("Example 2:", example2()); 
  
  // Variable Lifetime Example
  let counterGlobal = 0;
  
  function incrementGlobalCounter() {
    counterGlobal += 1;
  }
  
  incrementGlobalCounter();
  incrementGlobalCounter();
  incrementGlobalCounter();
  
  console.log("Global Counter:", counterGlobal); 
  
  // Using Local Counter with Function Return
  function createCounter() {
    let counter = 0; 
  
    function increment() {
      counter += 1;
      return counter;
    }
  
    return increment; 
  }
  
  const counter = createCounter();
  
  console.log("Local Counter:", counter()); 
  console.log("Local Counter:", counter()); 
  console.log("Local Counter:", counter()); 
  
  // Self-Invoking Function Example
  const add = (function () {
    let counter = 0; 
    return function () {
      counter += 1;
      return counter;
    }
  })();
  
  console.log("Self-Invoking Function Counter:", add()); 
  console.log("Self-Invoking Function Counter:", add()); 
  console.log("Self-Invoking Function Counter:", add()); 
  