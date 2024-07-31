// Example 1: Basic Promise Syntax
let myPromise = new Promise(function(myResolve, myReject) {
    // Producing Code
    let x = 0;

    // Simulate some asynchronous operation
    if (x === 0) {
        myResolve("OK");  
    } else {
        myReject("Error"); 
    }
});

// Consuming Code
myPromise.then(
    function(value) { console.log("Success: " + value); }, 
    function(error) { console.log("Error: " + error); }   
);

// Example 2: Using Promise with setTimeout
let timeoutPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() {
        myResolve("I love You !!");
    }, 3000);
});

// Consuming Code
timeoutPromise.then(function(value) {
    console.log(value); 
});

// Example 3: Using Promise with XMLHttpRequest (Simulating File Request)
let filePromise = new Promise(function(myResolve, myReject) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html"); 
    req.onload = function() {
        if (req.status === 200) {
            myResolve(req.responseText); 
        } else {
            myReject("File not Found");  
        }
    };
    req.onerror = function() {
        myReject("Network Error"); 
    };
    req.send();
});

// Consuming Code
filePromise.then(
    function(value) { console.log("File Content: " + value); }, 
    function(error) { console.log("Error: " + error); }         
);
