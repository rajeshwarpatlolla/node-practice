const fs = require('fs').promises;

const createFolder = async () => {
  try {
    await fs.mkdir('fs-test');
    console.log('Folder created successfully');
  } catch (error) {
    console.error('Error creating folder:', error);
  }
};

const createFile = async () => {
  try {
    await fs.writeFile('fs-test/newFile.txt', 'Hello, World!');
    console.log('File created successfully');
  } catch (error) {
    console.error('Error creating file:', error);
  }
};

const writeContent = async () => {
  try {
    await fs.appendFile('fs-test/newFile.txt', '\nThis is additional content.');
    console.log('Content written successfully');
  } catch (error) {
    console.error('Error writing content:', error);
  }
};

const readFile = async () => {
  try {
    const data = await fs.readFile('fs-test/newFile.txt', 'utf8');
    console.log('File content:', data);
  } catch (error) {
    console.error('Error reading file:', error);
  }
};

const deleteFile = async () => {
  try {
    await fs.unlink('fs-test/newFile.txt');
    console.log('File deleted successfully');
  } catch (error) {
    console.error('Error deleting file:', error);
  }
};

const getFileStats = async () => {
  try {
    const stats = await fs.stat('fs-test/newFile.txt');
    console.log('File stats:', stats);
  } catch (error) {
    console.error('Error getting file stats:', error);
  }
};

const listFiles = async () => {
  try {
    const files = await fs.readdir('fs-test');
    console.log('Files in directory:', files);
  } catch (error) {
    console.error('Error listing files:', error);
  }
};

const readLinesFromFile = async (filePath) => {
  try {
    const file = await fs.open('fs-test/newFile.txt', 'r');
    const lines = file.readLines();
    for await (const line of lines) {
      console.log(line);
    }
  } catch (error) {
    console.error('Error reading lines from file:', error);
    return [];
  }
};

// createFolder()
// createFile()
// writeContent()
// readFile()
// deleteFile()
// getFileStats()
// listFiles()
readLinesFromFile();
