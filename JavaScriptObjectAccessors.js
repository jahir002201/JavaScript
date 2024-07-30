// 1. JavaScript Getter (The get Keyword)
console.log("JavaScript Getter Example:");

const personGetter = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language;
  }
};

// Display data from the object using a getter
console.log("Getter lang:", personGetter.lang); 

// 2. JavaScript Setter (The set Keyword)
console.log("\nJavaScript Setter Example:");

const personSetter = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang;
  }
};

// Set an object property using a setter
personSetter.lang = "en";
console.log("Setter language:", personSetter.language); 

// 3. Function vs Getter
console.log("\nFunction vs Getter Example:");

// Example 1: Function
const personFunction = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

// Display data from the object using a method
console.log("Function fullName:", personFunction.fullName()); 

// Example 2: Getter
const personGetterExample = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
};

// Display data from the object using a getter
console.log("Getter fullName:", personGetterExample.fullName); 

// 4. Data Quality with Getters and Setters
console.log("\nData Quality with Getters and Setters Example:");

const personQuality = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language.toUpperCase();
  },
  set lang(lang) {
    this.language = lang.toUpperCase();
  }
};

// Display data from the object using a getter
console.log("Getter lang (upper case):", personQuality.lang); 

// Set an object property using a setter
personQuality.lang = "fr";
console.log("Setter language (upper case):", personQuality.language);

// 5. Object.defineProperty() with Getters and Setters
console.log("\nObject.defineProperty() with Getters and Setters Example:");

// Define an object
const obj = { counter: 0 };

// Define getters and setters
Object.defineProperty(obj, "reset", {
  get: function() { this.counter = 0; }
});

Object.defineProperty(obj, "increment", {
  get: function() { this.counter++; }
});

Object.defineProperty(obj, "decrement", {
  get: function() { this.counter--; }
});

Object.defineProperty(obj, "add", {
  set: function(value) { this.counter += value; }
});

Object.defineProperty(obj, "subtract", {
  set: function(value) { this.counter -= value; }
});

// Play with the counter
console.log("Initial counter:", obj.counter); 
obj.reset; 
obj.add = 5; 
obj.subtract = 1; 
obj.increment; 
obj.decrement; 
console.log("Final counter:", obj.counter); 
