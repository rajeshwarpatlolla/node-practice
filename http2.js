const http2 = require('http2');

const server = http2.createServer();

server.on('stream', (stream, headers) => {
  // This function handles incoming HTTP/2 streams
  console.log('Received a new stream');

  // Respond to the client
  stream.respond({
    'content-type': 'text/plain',
    ':status': 200,
  });

  stream.end('Hello from HTTP/2 server!');
});


server.listen(3000, () => {
  console.log('HTTP/2 server is running on port 3000');
});
