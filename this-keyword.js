// Global Context
console.log('Global context:', this); 

function globalFunction() {
  console.log('Global function context:', this); 
}

globalFunction();

const obj = {
  name: 'Object',
  method: function() {
    console.log('Method context:', this); 
  }
};

obj.method();

const anotherObj = {
  name: 'AnotherObject',
  method: () => {
    console.log('Arrow function context:', this); 
  }
};

anotherObj.method();

function ConstructorFunction() {
  this.value = 'Constructor value';
}

const instance = new ConstructorFunction();
console.log('Constructor function context:', instance.value); 

const boundFunction = globalFunction.bind({ custom: 'Bound object' });
boundFunction(); 

const callFunction = function() {
  console.log('Call function context:', this);
};

callFunction.call({ custom: 'Call object' }); 

callFunction.apply({ custom: 'Apply object' }); 

const arrowFunction = () => {
  console.log('Arrow function context:', this); 
};

arrowFunction();
