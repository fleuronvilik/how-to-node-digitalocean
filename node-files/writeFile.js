const fs = require('fs').promises;

async function openFile() {
  try {
    var csvHeader = 'name,quantity,price';
    await fs.writeFile('groceries.csv', csvHeader);
  } catch(error) {
    console.log(`Got an error trying to write to a file: ${error.message}`);
  }
}
async function addGroceryItem(name, quantity, price) {
  try {
    var csvLine = `\n${name},${quantity},${price}`;
    await fs.writeFile('groceries.csv', csvLine, { flag: 'a' });
  } catch(error) {
    console.log(`Got an error trying to write to a file: ${error.message}`);
  }
}

// (async function() {
//   openFile();
//   addGroceryItem('eggs', '12', '1.50');
//   addGroceryItem('nutella', '1', '4');
// })();