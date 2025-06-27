const net = require('net');

const clients = [];

const server = net.createServer((socket) => {
  console.log('New client connected');
  socket.write('Welcome to the chat!\n');

  clients.push(socket);

  socket.on('data', (data) => {
    const message = data.toString().trim();
    console.log(`Message: ${message}`);

    // Broadcast to all other clients
    clients.forEach((client) => {
      if (client !== socket) {
        client.write(`User: ${message}\n`);
      }
    });
  });

  socket.on('end', () => {
    console.log('Client disconnected');
    const index = clients.indexOf(socket);
    if (index !== -1) clients.splice(index, 1);
  });

  socket.on('error', (err) => {
    console.error('Socket error:', err.message);
  });
});

server.listen(3000, () => {
  console.log('Chat server running on port 3000');
});
