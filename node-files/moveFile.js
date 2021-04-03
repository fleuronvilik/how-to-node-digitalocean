const fs = require('fs').promises;

async function moveFile(src, dest) {
  try {
    await fs.rename(src, dest);
    console.log(`Moved file from ${src} to ${dest}`)
  } catch(error) {
    console.log(`Got an error trying to move the file: ${error.message}`);
  }
}

// moveFile('greetings-2.txt', 'test-data/salutations.txt');