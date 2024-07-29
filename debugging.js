// Function with a bug fixed
function calculateTotalPrice(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].price;
    }
    return total;
  }
  
  // Example data
  const shoppingCart = [
    { name: 'Apple', price: 1.00 },
    { name: 'Banana', price: 0.75 },
    { name: 'Cherry', price: 2.00 }
  ];
  
  // Function call
  console.log('Total Price:', calculateTotalPrice(shoppingCart));
  
  // Debugging output
  console.log('Shopping Cart:', shoppingCart);
  
  // Example with error handling
  function parseJson(jsonString) {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      console.error('Error parsing JSON:', error.message);
      return null;
    }
  }
  
  const validJson = '{"name": "Jahir", "age": 24}';
  const invalidJson = '{"name": "Jahir", "age": 24}'; 
  
  console.log('Parsed Valid JSON:', parseJson(validJson));
  console.log('Parsed Invalid JSON:', parseJson(invalidJson));
  
  // Function to demonstrate improved error handling
  function divide(a, b) {
    try {
      if (b === 0) {
        throw new Error('Cannot divide by zero');
      }
      return a / b;
    } catch (error) {
      console.error('Division Error:', error.message);
      return null; 
    }
  }
  
  console.log('Division Result:', divide(10, 2));
  console.log('Division Result:', divide(10, 0));
  