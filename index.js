import { add, subtract } from './modules/math.js';
import multiply from './modules/math.js';
import { Person } from './modules/person.js';
import generateId, { formatDate } from './modules/utils.js';

// Using functions from math.js
console.log('Add:', add(5, 3)); 
console.log('Subtract:', subtract(5, 3)); 
console.log('Multiply:', multiply(5, 3)); 

// Using Person class from person.js
const person = new Person('Jahir', 24);
console.log(person.greet()); 

// Using functions from utils.js
console.log('Generated ID:', generateId()); 
console.log('Formatted Date:', formatDate(new Date())); 
