// SyntaxError
try {
    eval('console.log("Hello)');
  } catch (e) {
    console.error('SyntaxError:', e.message);
  }
  
  // ReferenceError
  try {
    console.log(nonExistentVariable);
  } catch (e) {
    console.error('ReferenceError:', e.message);
  }
  
  // TypeError
  try {
    null.f();
  } catch (e) {
    console.error('TypeError:', e.message);
  }
  
  // RangeError
  try {
    throw new RangeError('Out of range');
  } catch (e) {
    console.error('RangeError:', e.message);
  }
  
  // URIError
  try {
    decodeURIComponent('%');
  } catch (e) {
    console.error('URIError:', e.message);
  }
  
  // Custom Error
  class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = 'CustomError';
    }
  }
  
  try {
    throw new CustomError('This is a custom error');
  } catch (e) {
    console.error(e.name + ':', e.message);
  }
  
  // Error Handling Example
  function divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  }
  
  try {
    console.log(divide(10, 2));
    console.log(divide(10, 0));
  } catch (e) {
    console.error('Error:', e.message);
  }
  