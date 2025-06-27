const os = require('os');

console.log('os.platform:', os.platform()); // Returns the operating system platform
console.log('os.arch:', os.arch()); // Returns the operating system CPU architecture
console.log('os.cpus:', os.cpus()); // Returns an array of objects containing information about each CPU/core installed
console.log('os.freemem:', os.freemem()); // Returns the amount of free system memory in bytes
console.log('os.totalmem:', os.totalmem()); // Returns the total amount of system memory in bytes
console.log('os.uptime:', os.uptime()); // Returns the system uptime in seconds
console.log('os.hostname:', os.hostname()); // Returns the hostname of the operating system
console.log('os.userInfo:', os.userInfo()); // Returns information about the currently logged-in user
console.log('os.tmpdir:', os.tmpdir()); // Returns the operating system's default directory for temporary files
console.log('os.release:', os.release()); // Returns the operating system release
console.log('os.type:', os.type()); // Returns the operating system name
console.log('os.endianness:', os.endianness()); // Returns the endianness of the CPU ('BE' for big-endian, 'LE' for little-endian)
console.log('os.constants:', os.constants); // Returns an object containing operating system constants
console.log('os.loadavg:', os.loadavg()); // Returns an array containing the 1, 5, and 15 minute load averages
console.log('os.homedir:', os.homedir()); // Returns the home directory of the current user
console.log('os.networkInterfaces:', os.networkInterfaces()); // Returns an object containing network interfaces and their addresses

