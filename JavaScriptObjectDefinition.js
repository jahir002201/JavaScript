// 1. Using an Object Literal
const personLiteral = {
    firstName: "Jahir",
    lastName: "Islam",
    age: 24,
    eyeColor: "blue"
  };
  console.log("Object Literal:", personLiteral);
  
  // 2. Using the new Keyword
  const personNew = new Object();
  personNew.firstName = "Jahir";
  personNew.lastName = "Islam";
  personNew.age = 24;
  personNew.eyeColor = "blue";
  console.log("Object using new Object():", personNew);
  
  // 3. Using an Object Constructor Function
  function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  const myFather = new Person("Jahir", "Islam", 24, "blue");
  const myMother = new Person("Sally", "Rally", 38, "green");
  console.log("Object Constructor Function:", myFather, myMother);
  
  // 4. Using Object.assign()
  const source = { firstName: "Jahir", lastName: "Islam" };
  const target = {};
  Object.assign(target, source);
  console.log("Object.assign():", target);
  
  // 5. Using Object.create()
  const protoPerson = { nationality: "English" };
  const personCreate = Object.create(protoPerson, {
    firstName: { value: "Jahir", writable: true },
    lastName: { value: "Islam", writable: true }
  });
  console.log("Object.create():", personCreate);
  
  // 6. Using Object.fromEntries()
  const entries = [['firstName', 'Jahir'], ['lastName', 'Islam']];
  const personFromEntries = Object.fromEntries(entries);
  console.log("Object.fromEntries():", personFromEntries);
  
  // 7. JavaScript Object Methods
  
  // Property Management Methods
  Object.defineProperty(personLiteral, 'gender', {
    value: 'Male',
    writable: true,
    enumerable: true,
    configurable: true
  });
  console.log("Object.defineProperty():", personLiteral);
  
  const descriptors = Object.getOwnPropertyDescriptors(personLiteral);
  console.log("Object.getOwnPropertyDescriptors():", descriptors);
  
  // Object Protection Methods
  Object.preventExtensions(personLiteral);
  console.log("Object.isExtensible():", Object.isExtensible(personLiteral)); 
  
  Object.seal(personLiteral);
  console.log("Object.isSealed():", Object.isSealed(personLiteral)); 
  
  Object.freeze(personLiteral);
  console.log("Object.isFrozen():", Object.isFrozen(personLiteral)); 
  
  // Modifying the object after freezing (will not work)
  try {
    personLiteral.age = 51;
  } catch (e) {
    console.log("Error after freezing:", e.message);
  }
  
  console.log("Final Object:", personLiteral);
  