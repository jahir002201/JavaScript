// Creating a JavaScript object
let person = {
    firstName: "Jahir",
    lastName: "Islam",
    age: 24,
    nationality: "Bangladeshi",
    // Method inside an object
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    // Another method
    introduce: function() {
        return `Hello, my name is ${this.fullName()} and I am ${this.age} years old from ${this.nationality}.`;
    }
};

// Accessing properties
console.log(person.firstName);  
console.log(person.age);        

// Calling methods
console.log(person.fullName());  
console.log(person.introduce()); 
