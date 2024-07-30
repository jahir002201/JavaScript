// "use strict"
"use strict";
try {
    undeclaredVariable = 10; 
} catch (e) {
    console.log(e.message); 
}

// String[number] access
let stringAccess = "Hello";
console.log(stringAccess[1]); 

// Multiline strings
let multiline = "This is a long string \
that spans multiple lines.";
console.log(multiline);

// String.trim()
let text = "   Hello World!   ";
console.log(text.trim()); 

// Array.isArray()
let arr = [1, 2, 3];
console.log(Array.isArray(arr)); 

// Array forEach()
arr.forEach(num => console.log(num * 2)); 

// Array map()
let doubled = arr.map(num => num * 2);
console.log(doubled); 

// Array filter()
let evens = arr.filter(num => num % 2 === 0);
console.log(evens); 

// Array reduce()
let sum = arr.reduce((total, num) => total + num, 0);
console.log(sum); 

// Array reduceRight()
let sumRight = arr.reduceRight((total, num) => total + num, 0);
console.log(sumRight); 

// Array every()
let allEven = arr.every(num => num % 2 === 0);
console.log(allEven); 

// Array some()
let someEven = arr.some(num => num % 2 === 0);
console.log(someEven); 

// Array indexOf()
console.log(arr.indexOf(3)); 

// Array lastIndexOf()
let lastIndex = [1, 2, 3, 4, 3];
console.log(lastIndex.lastIndexOf(3)); 

// JSON.parse()
let jsonStr = '{"name": "Jahir", "age": 24}';
let obj = JSON.parse(jsonStr);
console.log(obj.name); 

// JSON.stringify()
let jsonString = JSON.stringify(obj);
console.log(jsonString); 

// Date.now()
console.log(Date.now()); 

// Date toISOString()
let date = new Date();
console.log(date.toISOString()); 

// Date toJSON()
console.log(date.toJSON()); 

// Property getters and setters
let person = {
    firstName: "Jahir",
    lastName: "Islam",
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(" ");
    }
};
console.log(person.fullName); 
person.fullName = "Jahir Islam";
console.log(person.fullName); 

// Reserved words as property names
let reservedWords = {
    class: "Math",
    function: "Lecture"
};
console.log(reservedWords.class); 

// Object.create()
let human = {
    isHuman: false,
    printIntroduction: function() {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};
let me = Object.create(human);
me.name = "Jahir";
me.isHuman = true;
me.printIntroduction(); 

// Object.keys()
let objectKeys = { a: 1, b: 2, c: 3 };
console.log(Object.keys(objectKeys)); 

// Object.defineProperty()
let definePropertyExample = {};
Object.defineProperty(definePropertyExample, 'property', {
    value: 42,
    writable: false 
});
console.log(definePropertyExample.property); 

// Object.freeze()
let frozenObject = { prop: 42 };
Object.freeze(frozenObject);
console.log(frozenObject.prop); 

// Function bind()
let module = {
    x: 42,
    getX: function() {
        return this.x;
    }
};
let unboundGetX = module.getX;
let boundGetX = unboundGetX.bind(module);
console.log(boundGetX()); 

// Trailing commas
let arrayWithTrailingComma = [
    1,
    2,
    3,
];
let objectWithTrailingComma = {
    name: "Jahir",
    age: 24,
};
console.log(arrayWithTrailingComma); 
console.log(objectWithTrailingComma); 
