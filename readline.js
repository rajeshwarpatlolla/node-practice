// const readline = require('readline/promises');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// (async () => {
//   const name = await rl.question('What is your name?');
//   const age = await rl.question('What is your age?');
//   console.log(`Your name is ${name} and age is ${age}`);
//   rl.close();
// })();

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('test.txt'),
  crlfDelay: Infinity,
});

rl.on('line', (line) => {
  console.log('Line:', line);
});

rl.on('close', () => {
  console.log('Finished reading file');
});
