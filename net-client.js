const net = require('net');
const readline = require('readline');

const client = net.createConnection({ port: 3000 }, () => {
  console.log('Connected to chat server');
});

client.on('data', (data) => {
  console.log(data.toString());
});

client.on('end', () => {
  console.log('Disconnected from server');
});

client.on('error', (err) => {
  console.error('Client error:', err.message);
});

// // Read from stdin and send to server
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   prompt: '',
// });

// rl.on('line', (line) => {
//   client.write(line);
// });
