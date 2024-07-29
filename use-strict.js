'use strict';

function globalStrictMode() {
  console.log('Strict mode is applied globally.');
}

globalStrictMode();

function nonStrictFunction() {
  // Create a non-strict function context
  (function() {
    var x = 1; 
    console.log('Variable x defined:', x);
  })();
}

nonStrictFunction();

function localStrictMode() {
  'use strict';
  
  var localVar = 'I am local';
  console.log('Local strict mode variable:', localVar);
  
  // console.log(this);
}

localStrictMode();

try {
  console.log(this);
} catch (e) {
  console.error('Error:', e.message);
}
