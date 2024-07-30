// 1. Object.assign()
console.log("Object.assign() Example:");
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

const person2 = { firstName: "Anne", lastName: "Smith" };
Object.assign(person1, person2);
console.log(person1); 

// 2. Object.entries()
console.log("\nObject.entries() Example:");
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

const entries = Object.entries(person);
console.log(entries); 

// Loop through entries
let text = "";
for (const [key, value] of entries) {
  text += `${key}: ${value}\n`;
}
console.log("Entries as string:\n", text);

// Convert object to Map
const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };
const fruitMap = new Map(Object.entries(fruits));
console.log("Object to Map:", fruitMap);

// 3. Object.fromEntries()
console.log("\nObject.fromEntries() Example:");
const fruitEntries = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500]
];

const fruitObj = Object.fromEntries(fruitEntries);
console.log(fruitObj); 

// 4. Object.values()
console.log("\nObject.values() Example:");
const personValues = Object.values(person);
console.log(personValues); 

// 5. Object.groupBy()
console.log("\nObject.groupBy() Example (ES2024):");
const fruitsList = [
  { name: "apples", quantity: 300 },
  { name: "bananas", quantity: 500 },
  { name: "oranges", quantity: 200 },
  { name: "kiwi", quantity: 150 }
];

function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by quantity
// const groupedFruits = Object.groupBy(fruitsList, myCallback);
// console.log(groupedFruits); 

// 6. Object.keys()
console.log("\nObject.keys() Example:");
const personKeys = Object.keys(person);
console.log(personKeys); 

// 7. for...in Loop
console.log("\nfor...in Loop Example:");
const personLoop = {
  fname: "John",
  lname: "Doe",
  age: 25
};

let loopText = "";
for (const key in personLoop) {
  if (Object.hasOwn(personLoop, key)) { 
    loopText += `${key}: ${personLoop[key]}\n`;
  }
}
console.log("Properties in for...in loop:\n", loopText);
