// Bitwise Operations in JavaScript

// Bitwise AND
const a = 5;  
const b = 3;  
const andResult = a & b; 
console.log(`Bitwise AND of ${a} & ${b} = ${andResult}`);

// Bitwise OR
const orResult = a | b;  
console.log(`Bitwise OR of ${a} | ${b} = ${orResult}`);

// Bitwise XOR
const xorResult = a ^ b; 
console.log(`Bitwise XOR of ${a} ^ ${b} = ${xorResult}`);

// Bitwise NOT
const notResult = ~a;    
console.log(`Bitwise NOT of ${a} = ${notResult}`);

// Bitwise Left Shift
const shiftLeftResult = a << 2; 
console.log(`Bitwise Left Shift of ${a} << 2 = ${shiftLeftResult}`);

// Bitwise Right Shift
const shiftRightResult = a >> 1; 
console.log(`Bitwise Right Shift of ${a} >> 1 = ${shiftRightResult}`);

// Bitwise Unsigned Right Shift
const unsignedShiftRightResult = a >>> 1; 
console.log(`Bitwise Unsigned Right Shift of ${a} >>> 1 = ${unsignedShiftRightResult}`);

// Using Bitwise Operations for Bit Manipulation
const flag = 0b0001;  
const mask = 0b0010;  
const isFlagSet = (flag & mask) !== 0; 
console.log(`Is flag set with mask? ${isFlagSet}`);

// Setting a bit using OR
const setBit = flag | mask; 
console.log(`Setting bit with OR: ${setBit}`);

// Clearing a bit using AND and NOT
const clearBit = flag & ~mask; 
console.log(`Clearing bit with AND and NOT: ${clearBit}`);

// Toggling a bit using XOR
const toggleBit = flag ^ mask; 
console.log(`Toggling bit with XOR: ${toggleBit}`);

