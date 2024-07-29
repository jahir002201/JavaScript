// Sample JSON data as a string
const jsonString = '{"name": "Jahir", "age": 24, "isStudent": true, "courses": ["Math", "Science"]}';

// Parse JSON string into a JavaScript object
const jsonObject = JSON.parse(jsonString);

// Accessing properties of the JavaScript object
console.log('Name:', jsonObject.name); 
console.log('Age:', jsonObject.age);
console.log('Is Student:', jsonObject.isStudent); 
console.log('Courses:', jsonObject.courses); 

// Modifying the object
jsonObject.age = 25;
jsonObject.courses.push('History');

// Convert JavaScript object back to a JSON string
const updatedJsonString = JSON.stringify(jsonObject, null, 2); 

console.log('Updated JSON String:');
console.log(updatedJsonString);

// Handling errors in parsing
const invalidJsonString = '{"name": "Jahir", "age": 24, "isStudent": true, "courses": ["Math", "Science"]'; // Missing closing bracket

try {
  const invalidJsonObject = JSON.parse(invalidJsonString);
} catch (error) {
  console.error('Error parsing JSON:', error.message);
}

// Serializing JavaScript objects with circular references (using a replacer function)
const circularObj = {};
circularObj.self = circularObj;

function replacer(key, value) {
  if (key === 'self') {
    return '[Circular]';
  }
  return value;
}

const circularJsonString = JSON.stringify(circularObj, replacer, 2);
console.log('Circular JSON String:');
console.log(circularJsonString);
