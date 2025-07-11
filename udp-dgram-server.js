const dgram = require('dgram');

const server = dgram.createSocket('udp4');

server.on('message', (msg, info) => {
  console.log('received message from client is:', msg.toString());
  console.log('received message from client address:', info.address, info.port);
  server.send(`SERVER`, info.port, info.address);
  server.close();
});

server.bind(3000, () => {
  console.log('server is running on port', 3000);
});
