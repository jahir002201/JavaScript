// Function borrowing example
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  const member = {
    firstName: "Hege",
    lastName: "Nilsen"
  };
  
  let fullName = person.fullName.bind(member);
  console.log(fullName()); 
  
  // Preserving `this` example
  const person2 = {
    firstName: "John",
    lastName: "Doe",
    display: function() {
      console.log(this.firstName + " " + this.lastName);
    }
  };
  
  let display = person2.display.bind(person2);
  setTimeout(display, 3000); 
  
  // Binding with arguments example
  function greet(greeting, name) {
    return greeting + ", " + name;
  }
  
  const greetHello = greet.bind(null, "Hello");
  console.log(greetHello("World")); 
  