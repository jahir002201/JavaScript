// Arithmetic Operators
let a = 10;
let b = 5;
let sum = a + b;        // Addition
let difference = a - b; // Subtraction
let product = a * b;    // Multiplication
let power = a ** b;     // Exponentiation
let quotient = a / b;   // Division
let remainder = a % b;  // Modulus
a++;                    // Increment
b--;                    // Decrement

// Assignment Operators
let x = 10;
let y = 5;
x += y;  // x = x + y
x -= y;  // x = x - y
x *= y;  // x = x * y
x /= y;  // x = x / y
x %= y;  // x = x % y
x **= y; // x = x ** y

// Comparison Operators
let isEqual = (a == b);        // equal to
let isStrictEqual = (a === b); // equal value and equal type
let isNotEqual = (a != b);     // not equal
let isStrictNotEqual = (a !== b); // not equal value or not equal type
let isGreaterThan = (a > b);   // greater than
let isLessThan = (a < b);      // less than
let isGreaterOrEqual = (a >= b); // greater than or equal to
let isLessOrEqual = (a <= b);  // less than or equal to

// Ternary Operator
let result = (a > b) ? "a is greater" : "b is greater";

// Logical Operators
let logicalAnd = (a > 0 && b > 0); // logical and
let logicalOr = (a > 0 || b > 0);  // logical or
let logicalNot = !(a > 0);         // logical not

// Type Operators
let typeOfA = typeof a;            // Returns the type of a variable
let isInstanceOf = a instanceof Number; // Returns true if a is an instance of Number

// Bitwise Operators
let bitwiseAnd = 5 & 1;   // AND
let bitwiseOr = 5 | 1;    // OR
let bitwiseNot = ~5;      // NOT
let bitwiseXor = 5 ^ 1;   // XOR
let leftShift = 5 << 1;   // left shift
let rightShift = 5 >> 1;  // right shift
let unsignedRightShift = 5 >>> 1; // unsigned right shift

console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
console.log(`Product: ${product}`);
console.log(`Power: ${power}`);
console.log(`Quotient: ${quotient}`);
console.log(`Remainder: ${remainder}`);
console.log(`Incremented a: ${a}`);
console.log(`Decremented b: ${b}`);
console.log(`x after operations: ${x}`);
console.log(`isEqual: ${isEqual}`);
console.log(`isStrictEqual: ${isStrictEqual}`);
console.log(`isNotEqual: ${isNotEqual}`);
console.log(`isStrictNotEqual: ${isStrictNotEqual}`);
console.log(`isGreaterThan: ${isGreaterThan}`);
console.log(`isLessThan: ${isLessThan}`);
console.log(`isGreaterOrEqual: ${isGreaterOrEqual}`);
console.log(`isLessOrEqual: ${isLessOrEqual}`);
console.log(`Ternary result: ${result}`);
console.log(`Logical AND: ${logicalAnd}`);
console.log(`Logical OR: ${logicalOr}`);
console.log(`Logical NOT: ${logicalNot}`);
console.log(`Type of a: ${typeOfA}`);
console.log(`Is a an instance of Number: ${isInstanceOf}`);
console.log(`Bitwise AND: ${bitwiseAnd}`);
console.log(`Bitwise OR: ${bitwiseOr}`);
console.log(`Bitwise NOT: ${bitwiseNot}`);
console.log(`Bitwise XOR: ${bitwiseXor}`);
console.log(`Left Shift: ${leftShift}`);
console.log(`Right Shift: ${rightShift}`);
console.log(`Unsigned Right Shift: ${unsignedRightShift}`);
