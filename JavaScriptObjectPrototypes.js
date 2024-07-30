// 1. Constructor Function Example
function Person(first, last, age, eyeColor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyeColor;
  }
  
  // Creating instances
  const myFather = new Person("Jahir", "Islam", 24, "blue");
  const myMother = new Person("Sai", "Rai", 38, "green");
  
  console.log("Initial Person objects:");
  console.log(myFather);
  console.log(myMother);
  
  // 2. Adding Properties to Prototype
  Person.prototype.nationality = "English";
  console.log("Nationality property added to prototype:");
  console.log(myFather.nationality); 
  console.log(myMother.nationality); 
  
  // 3. Adding Methods to Prototype
  Person.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
  
  console.log("FullName method added to prototype:");
  console.log(myFather.fullName()); 
  console.log(myMother.fullName()); 
  
  // 4. Adding Properties and Methods to Constructor Function Directly (Not Recommended)
  // This does not affect existing instances
  Person.nationality = "British"; 
  console.log("Nationality property on Person function itself:", Person.nationality); 
  
  // 5. Adding More Properties and Methods to Prototype
  Person.prototype.ageInMonths = function() {
    return this.age * 12;
  };
  
  console.log("Age in Months method added to prototype:");
  console.log(myFather.ageInMonths());
  console.log(myMother.ageInMonths());
  
  // Demonstrating the Prototype Chain
  console.log("Prototype chain demonstration:");
  console.log(myFather.__proto__ === Person.prototype); 
  console.log(myFather.__proto__.__proto__ === Object.prototype); 
  console.log(myFather.__proto__.__proto__.__proto__ === null); 
  
  // Modifying Prototypes of Standard Objects (Not Recommended)
  // For educational purposes only; modifying standard prototypes can lead to unexpected behavior.
  Array.prototype.firstElement = function() {
    return this[0];
  };
  
  const arr = [1, 2, 3];
  console.log("Custom method on Array prototype:");
  console.log(arr.firstElement()); 
  
  // Avoid modifying standard prototypes in real applications.
  