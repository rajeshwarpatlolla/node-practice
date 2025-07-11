const dgram = require('dgram');

const client = dgram.createSocket('udp4');

const message = Buffer.from('CLIENT');

client.send(message, 3000, 'localhost', (error) => {
  console.log('sending message to server:', message.toString());
});

client.on('message', (msg, info) => {
  console.log('received from server', msg.toString());
  client.close();
});
