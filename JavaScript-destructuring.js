// Array Destructuring

const numbers = [1, 2, 3, 4, 5];

// Destructuring the array
const [first, second, third] = numbers;

console.log("Array Destructuring:");
console.log("first:", first);  
console.log("second:", second); 
console.log("third:", third);  

// Rest syntax example
const [head, ...rest] = numbers;
console.log("\nRest syntax:");
console.log("head:", head);     
console.log("rest:", rest);   

// Object Destructuring

const person = {
    name: 'Jahir',
    age: 24,
    country: 'Bangladesh'
};

// Destructuring the object
const { name, age, country } = person;

console.log("\nObject Destructuring:");
console.log("name:", name);    
console.log("age:", age);      
console.log("country:", country); 

// Default Values Example
const [firstElement, secondElement = 10] = [1];
console.log("\nDefault Values in Array Destructuring:");
console.log("firstElement:", firstElement);  
console.log("secondElement:", secondElement); 

const { name: personName, occupation = 'Unknown' } = { name: 'Jahir' };
console.log("\nDefault Values in Object Destructuring:");
console.log("personName:", personName);       
console.log("occupation:", occupation);     

// Nested Destructuring

// Nested Array Destructuring
const [[firstNum, secondNum], thirdNum] = [[1, 2], 3];
console.log("\nNested Array Destructuring:");
console.log("firstNum:", firstNum);   
console.log("secondNum:", secondNum); 
console.log("thirdNum:", thirdNum);  

// Nested Object Destructuring
const personDetails = {
    name: 'Jahir',
    address: {
        city: 'Dhaka',
        country: 'Bangladesh'
    }
};

const { name: personNameNested, address: { city: cityName, country: countryName  } } = personDetails;
console.log("\nNested Object Destructuring:");
console.log("personNameNested:", personNameNested); 
console.log("city:", cityName);                       
console.log("country:", countryName);                 
