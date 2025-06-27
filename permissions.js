const fs = require('fs');

const getSecuredFilePermissions = () => {
  fs.readFile('/etc/ssh', (err, data) => {
    if (err) {
      console.error(`Error reading /etc/ssh: ${err.message}`);
      // Error reading /etc/ssh: EISDIR: illegal operation on a directory, read
      return;
    }
    // Process the file data
    console.log(`File permissions for /etc/ssh: ${data}`);
  });
};

// Check if the user has read permission for a file
const checkReadPermission = (filePath) => {
  fs.access(filePath, fs.constants.R_OK | fs.constants.W_OK, (err) => {
    if (err) {
      console.error(`Read or Write permissions denied for ${filePath}`);
    } else {
      console.log(`Read and Write permissions granted for ${filePath}`);
    }
  });
};

// Check if the user has write permission for a file
const checkWritePermission = (filePath) => {
  fs.access(filePath, fs.constants.W_OK, (err) => {
    if (err) {
      console.error(`Write permission denied for ${filePath}`);
    } else {
      console.log(`Write permission granted for ${filePath}`);
    }
  });
};

// Check if the user has execute permission for a file
const checkExecutePermission = (filePath) => {
  fs.access(filePath, fs.constants.X_OK, (err) => {
    if (err) {
      console.error(`Execute permission denied for ${filePath}`);
    } else {
      console.log(`Execute permission granted for ${filePath}`);
    }
  });
};

// Example usage
const filePath = './test.txt';
checkReadPermission(filePath);
checkWritePermission(filePath);
checkExecutePermission(filePath);

getSecuredFilePermissions();
