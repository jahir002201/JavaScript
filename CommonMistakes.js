// Accidentally Using the Assignment Operator
let x = 0;
if (x == 10) {
    console.log('x is 10');
}

x = 10;
if (x) {
    console.log('x is now 10');
}

x = 0;
if (x) {
    console.log('x is zero');
}

// Expecting Loose Comparison
let y = "10";
if (x == y) {
    console.log('x is loosely equal to y');
}

if (x === y) {
    console.log('x is strictly equal to y');
}

// Confusing Addition & Concatenation
let z = 10 + 5;
console.log('Addition result:', z);

z = 10 + "5";
console.log('Concatenation result:', z);

// Misunderstanding Floats
let a = 0.1;
let b = 0.2;
let c = a + b;
console.log('Sum of 0.1 and 0.2:', c);

// Breaking a JavaScript String
let str = "Hello World!";
console.log(str);

// Misplacing Semicolon
if (x == 19);
{
    console.log('This block will execute');
}

// Breaking a Return Statement
function myFunction(a) {
    let power = 10;
    return
    a * power;
}
console.log(myFunction(5));

// Accessing Arrays with Named Indexes
const person = [];
person[0] = "Jahir";
person[1] = "Islam";
person[2] = 46;
console.log(person.length);
console.log(person[0]);

person["firstName"] = "Jahir";
person["lastName"] = "Islam";
person["age"] = 46;
console.log(person.length);
console.log(person["firstName"]);

// Ending Definitions with a Comma
const personObject = {
    firstName: "Jahir",
    lastName: "Islam",
    age: 46
};
console.log(personObject);

const pointsArray = [
    40,
    100,
    1,
    5,
    25,
    10
];
console.log(pointsArray);

// Undefined is Not Null
let myObj;
if (typeof myObj !== "undefined" && myObj !== null) {
    console.log('myObj is not null and defined');
} else {
    console.log('myObj is either null or undefined');
}
