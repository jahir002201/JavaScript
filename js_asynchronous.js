// Example 1: Using setTimeout for Asynchronous Execution
function myFunction(value) {
    console.log(value); 
}

// Using setTimeout to execute a function after a delay
setTimeout(function() {
    myFunction("I love You !!");
}, 3000);

// Example 2: Passing a Function Directly to setTimeout
setTimeout(function() {
    myFunction("I love You !!!");
}, 3000);

// Example 3: Using setInterval for Repeated Execution
function updateClock() {
    let d = new Date();
    console.log(
        d.getHours() + ":" +
        d.getMinutes() + ":" +
        d.getSeconds()
    );
}

// Using setInterval to execute a function at regular intervals
setInterval(updateClock, 1000);

// Example 4: Using setTimeout and setInterval together
// This demonstrates a function that uses both setTimeout and setInterval

function timeoutAndIntervalExample() {
    console.log("Timeout will execute after 3 seconds");
    setTimeout(function() {
        console.log("Timeout callback executed");
    }, 3000);

    console.log("Interval will execute every second");
    setInterval(function() {
        console.log("Interval callback executed");
    }, 1000);
}

// Uncomment the following line to run the example
// timeoutAndIntervalExample();
