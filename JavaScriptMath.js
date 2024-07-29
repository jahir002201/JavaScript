// JavaScript Math Object
console.log('JavaScript Math Object:');
console.log('Value of PI:', Math.PI); 

console.log('Rounded value of 4.7:', Math.round(4.7));
console.log('Ceiling value of 4.1:', Math.ceil(4.1)); 
console.log('Floor value of 4.9:', Math.floor(4.9)); 
console.log('Square root of 64:', Math.sqrt(64));
console.log('2 to the power of 3:', Math.pow(2, 3)); 
console.log('Maximum value:', Math.max(1, 3, 2, 5, 4)); 
console.log('Minimum value:', Math.min(1, 3, 2, 5, 4)); 

// JavaScript Random
console.log('\nJavaScript Random:');
console.log('Random value between 0 and 1:', Math.random()); 

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('Random integer between 1 and 10:', getRandomInt(1, 10)); 

// JavaScript Booleans
console.log('\nJavaScript Booleans:');
console.log('Boolean value of true:', true); 
console.log('Boolean value of false:', false); 

console.log('Boolean value of 0:', Boolean(0)); 
console.log('Boolean value of 1:', Boolean(1)); 
console.log('Boolean value of an empty string:', Boolean('')); 
console.log('Boolean value of a non-empty string:', Boolean('Hello')); 
console.log('Boolean value of null:', Boolean(null)); 
console.log('Boolean value of undefined:', Boolean(undefined)); 
console.log('Boolean value of an empty object:', Boolean({}));
