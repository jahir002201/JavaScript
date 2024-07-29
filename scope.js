// Global Scope
var globalVar = 'I am a global variable';

function globalScopeExample() {
  console.log('Global Scope Example:');
  console.log('Global variable:', globalVar);
}

globalScopeExample();

// Function Scope
function functionScopeExample() {
  var functionVar = 'I am a function variable';
  console.log('Function Scope Example:');
  console.log('Function variable:', functionVar);
}

functionScopeExample();
try {
  console.log(functionVar); 
} catch (e) {
  console.error('Function Scope Error:', e.message);
}

// Block Scope with let and const
if (true) {
  let blockLet = 'I am a block scoped variable (let)';
  const blockConst = 'I am a block scoped variable (const)';
  console.log('Block Scope Example:');
  console.log('Block scoped let:', blockLet);
  console.log('Block scoped const:', blockConst);
}

try {
  console.log(blockLet); 
} catch (e) {
  console.error('Block Scope Error (let):', e.message);
}

try {
  console.log(blockConst); 
} catch (e) {
  console.error('Block Scope Error (const):', e.message);
}

// Lexical Scope
function outerFunction() {
  var outerVar = 'I am an outer variable';

  function innerFunction() {
    var innerVar = 'I am an inner variable';
    console.log('Lexical Scope Example:');
    console.log('Outer variable:', outerVar);
    console.log('Inner variable:', innerVar);
  }

  innerFunction();
}

outerFunction();

// Closures
function createCounter() {
  let count = 0;
  return function() {
    count += 1;
    return count;
  };
}

const counter = createCounter();
console.log('Closure Example:');
console.log(counter()); 
console.log(counter()); 
console.log(counter()); 

// Immediately Invoked Function Expressions (IIFE)
(function() {
  var iifeVar = 'I am an IIFE variable';
  console.log('IIFE Example:');
  console.log('IIFE variable:', iifeVar);
})();

try {
  console.log(iifeVar); 
} catch (e) {
  console.error('IIFE Scope Error:', e.message);
}
