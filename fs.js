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

const truncateFile = async () => {
  try {
    await fs.truncate('fs-test/newFile.txt', 10);
    console.log('File truncated successfully');
  } catch (error) {
    console.error('Error truncating file:', error);
  }
};

const watchFile = async () => {
  // const fs = require('fs').promises;
  // This gives you only the fs.promises API — it does not include fs.existsSync or fs.watch, because those are part of the synchronous and event-based core fs module.

  const fs = require('fs'); // ✅ gives access to existsSync and watch
  const fsp = fs.promises; // ✅ gives async/await methods

  const filePath = 'fs-test/newFile.txt';

  // Ensure folder and file exist
  if (!fs.existsSync(filePath)) {
    await fsp.mkdir('fs-test', { recursive: true });
    await fsp.writeFile(filePath, 'Initial content');
    console.log('File created:', filePath);
  }

  console.log('Watching file:', filePath);

  const watcher = fs.watch(filePath, (eventType, filename) => {
    if (eventType === 'change') {
      console.log(`🔄 File changed: ${filename}`);
    } else if (eventType === 'rename') {
      console.log(`🚨 File renamed or deleted: ${filename}`);
    }
  });

  setTimeout(() => {
    watcher.close();
    console.log('👋 Stopped watching file:', filePath);
    process.exit();
  }, 10000); // Stop watching after 10 seconds
};

const checkFlags = async () => {
  // we can try with w, w+, a, a+, r, r+ flags
  const fd = await fs.open('fs-test/newFile.txt', 'a+');

  // Write to file
  await fd.writeFile('Hello world!');

  // Allocate buffer for reading
  const buffer = Buffer.alloc(100);

  // Read from the beginning. args: buffer, offset, length, position
  await fd.read(buffer, 0, buffer.length, 0);

  // Convert and print
  console.log('content:', buffer.toString().trim());

  await fd.close();
};

// createFolder()
// createFile();
// writeContent();
// readFile();
// deleteFile();
// getFileStats();
// listFiles();
// readLinesFromFile();
// truncateFile();
watchFile();
// checkFlags();

// Keep process alive (optional for small scripts)
setInterval(() => {}, 1000); // dummy interval
