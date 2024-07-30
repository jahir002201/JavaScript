// Defining an object with a method
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  // Defining another object with similar properties
  const person1 = {
    firstName: "Jane",
    lastName: "Smith"
  };
  
  const person2 = {
    firstName: "Mary",
    lastName: "Johnson"
  };
  
  // Using apply() to invoke the method on different objects
  console.log(person.fullName.apply(person1));  
  console.log(person.fullName.apply(person2));  
  
  // Method with additional arguments
  const personWithLocation = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    }
  };
  
  console.log(personWithLocation.fullName.apply(person1, ["New York", "USA"]));  
  
  // Finding the maximum value in an array
  console.log(Math.max(1, 2, 3));  
  console.log(Math.max.apply(null, [1, 2, 3]));  
  