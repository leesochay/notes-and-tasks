// Importing the fs(file system) and util modules
const fs = require('fs');
const util = require('util');

// Promise version of fs.readFile that resolves with the file's content
const readFromFile = util.promisify(fs.readFile);

// Writing the content to the destination file
// Content is a JSON string with a 4-digit indent
const writeToFile = (destination, content) =>
fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
err ? console.error(err) : console.info(`\nData written to ${destination}`)
);

// This function reads the content of the file, parses it as a JSON
// object, appends the new content, and writes this back to the file
const readAndAppend = (content, file) => {
fs.readFile(file, 'utf8', (err, data) => {
 if (err) {
   console.error(err);
 }  else {
    const parsedData = JSON.parse(data);
    parsedData.push(content);
    writeToFile(file, parsedData);
    }
  });
};

// Exports an obect with the 3 functions
module.exports = { readFromFile, writeToFile, readAndAppend };