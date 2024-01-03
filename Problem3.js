//File System Operations

const fs = require('fs');
const path = require('path');

const directoryPath = './Files';
const fileExtension = 'txt';


function listFilesWithExtension(directoryPath, fileExtension) {
  try {
    const files = fs.readdirSync(directoryPath);

    const filteredFiles = files.filter((file) => path.extname(file) === `.${fileExtension}`);

    return filteredFiles;
  } catch (error) {
    console.error('Error reading directory:', error.message);
    throw error;
  }
}



try {
  const filesWithExtension = listFilesWithExtension(directoryPath, fileExtension);
  console.log(`Files with the .${fileExtension} extension:`, filesWithExtension);
} catch (error) {
  console.error('Error:', error.message);
}
