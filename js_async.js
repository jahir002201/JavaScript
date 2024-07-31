// ES module syntax for fs promises API
import fs from 'fs/promises'; 

function myDisplayer(some) {
// Use console.log for Node.js
  console.log(some);  
}

async function myDisplay() {
  let myPromise = new Promise((resolve) => {
    resolve("I love You !!");
  });
  let result = await myPromise;
  myDisplayer(result);
}

myDisplay();

async function getFile() {
  let myPromise = new Promise(async (resolve, reject) => {
    try {
      const data = await fs.readFile("mycar.html", "utf8");
      resolve(data);
    } catch (error) {
      reject("File not Found");
    }
  });

  try {
    let result = await myPromise;
    myDisplayer(result);
  } catch (error) {
    myDisplayer(error);
  }
}

getFile();
