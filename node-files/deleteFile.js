const fs = require('fs').promises;

async function deleteFile(filePath) {
  try {
    await fs.unlink(filePath);
    console.log(`Deleted ${filePath}`);
  } catch(error) {
    console.log(`Got an error trying to delete the file: ${error.message}`);
  }
}

// deleteFile('groceries.csv');