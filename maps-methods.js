// Create an Array
const fruits = [
    { name: "apples", quantity: 300 },
    { name: "bananas", quantity: 500 },
    { name: "oranges", quantity: 200 },
    { name: "kiwi", quantity: 150 }
  ];
  
  // Callback function to select low volumes
  function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
  }
  
  // Custom groupBy function using Map
  function groupBy(array, callback) {
    const resultMap = new Map();
    
    array.forEach(item => {
      // Get the group key from the callback function
      const key = callback(item);
      
      // If the key doesn't exist in the resultMap, create an array for it
      if (!resultMap.has(key)) {
        resultMap.set(key, []);
      }
      
      // Push the item into the appropriate array
      resultMap.get(key).push(item);
    });
    
    return resultMap;
  }
  
  // Group by ok and low
  const resultMap = groupBy(fruits, myCallback);
  
  // Display Results
  console.log('Grouped Results:');
  
  // Using forEach to display the results
  resultMap.forEach((value, key) => {
    console.log(`${key}:`, value);
  });
  