console.log(hoistedVar); 
var hoistedVar = 'I am hoisted';

console.log(hoistedFunc()); 
function hoistedFunc() {
  return 'I am a hoisted function';
}

var notHoistedFunc = function() {
  return 'I am not hoisted';
};
console.log(notHoistedFunc()); 

console.log(anotherVar); 
var anotherVar = 'Another hoisted variable';

if (true) {
  console.log(blockVar); 
  var blockVar = 'Block scoped variable with var';
}

console.log(blockVar); 
