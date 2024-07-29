// Basic Class Definition
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }
  
  const person1 = new Person('Jahir', 24);
  console.log(person1.greet()); 
  
  // Inheritance
  class Employee extends Person {
    constructor(name, age, position) {
      super(name, age); 
      this.position = position;
    }
  
    greet() {
      return `${super.greet()} I work as a ${this.position}.`; 
    }
  }
  
  const employee1 = new Employee('Jahir', 24, 'Software Developer');
  console.log(employee1.greet()); 
  
  // Static Methods
  class MathUtils {
    static add(x, y) {
      return x + y;
    }
  
    static multiply(x, y) {
      return x * y;
    }
  }
  
  console.log(MathUtils.add(5, 3)); 
  console.log(MathUtils.multiply(4, 5)); 
  
  // Getters and Setters
  class Circle {
    constructor(radius) {
      this._radius = radius;
    }
  
    get radius() {
      return this._radius;
    }
  
    set radius(value) {
      if (value > 0) {
        this._radius = value;
      } else {
        console.error('Radius must be positive');
      }
    }
  
    get area() {
      return Math.PI * this._radius * this._radius;
    }
  }
  
  const circle1 = new Circle(10);
  console.log(circle1.radius); 
  console.log(circle1.area); 
  
  circle1.radius = 5;
  console.log(circle1.radius); 
  console.log(circle1.area); 
  
  // Private Fields (ES2022+)
  class Rectangle {
    #width;
    #height;
  
    constructor(width, height) {
      this.#width = width;
      this.#height = height;
    }
  
    get area() {
      return this.#width * this.#height;
    }
  
    set dimensions({ width, height }) {
      this.#width = width;
      this.#height = height;
    }
  }
  
  const rectangle1 = new Rectangle(10, 20);
  console.log(rectangle1.area); 
  
  rectangle1.dimensions = { width: 15, height: 25 };
  console.log(rectangle1.area); 
  