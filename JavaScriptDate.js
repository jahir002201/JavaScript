// Creating a Date Object
const now = new Date();
console.log('Current Date and Time:', now);

// JavaScript Date Formats
// 1. ISO Date
const isoDate = now.toISOString();
console.log('ISO Date:', isoDate);

// 2. Short Date
const shortDate = now.toLocaleDateString('en-US');
console.log('Short Date (US):', shortDate);

// 3. Long Date
const longDate = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
console.log('Long Date (US):', longDate);

// 4. Full Date and Time
const fullDateTime = now.toLocaleString('en-US');
console.log('Full Date and Time (US):', fullDateTime);

// JavaScript Get Date Methods
const year = now.getFullYear();
console.log('Year:', year);

const month = now.getMonth(); 
console.log('Month:', month + 1); 

const date = now.getDate();
console.log('Date:', date);

const day = now.getDay(); 
console.log('Day:', day);

const hours = now.getHours();
console.log('Hours:', hours);

const minutes = now.getMinutes();
console.log('Minutes:', minutes);

const seconds = now.getSeconds();
console.log('Seconds:', seconds);

const milliseconds = now.getMilliseconds();
console.log('Milliseconds:', milliseconds);

// JavaScript Set Date Methods
const specificDate = new Date();
specificDate.setFullYear(2025);
specificDate.setMonth(11); 
specificDate.setDate(25);
specificDate.setHours(10);
specificDate.setMinutes(30);
specificDate.setSeconds(45);
specificDate.setMilliseconds(500);

console.log('Specific Date:', specificDate);
