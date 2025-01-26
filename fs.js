const fs = require('fs');

// Data to be written to the file
const data = 'This is a new file created using Node.js!';

fs.writeFile('example.txt', data, (err) => {
  if (err) {
    console.log('Error creating the file:', err);
  } else {
    console.log('File created and data written successfully!');
  }
});
