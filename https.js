const http = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('server-key.pem'),
  cert: fs.readFileSync('server-cert.pem'),
};

const server = http.createServer(options, async (req, res) => {
  switch (req.url) {
    case '/':
      if (req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('This is a GET request to the root path');
      }
      if (req.method === 'POST') {
        let data = '';
        // curl -X POST -H "Content-Type: application/json" -d '"This is a sample message"' http://localhost:3000

        req.on('data', (chunk) => {
          data = JSON.parse(chunk.toString());
        });

        req.on('end', () => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/plain');
          res.end(`This is a POST request to the root path: ${data}`);
        });
      }
      break;
    case '/about':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('About Page');
      break;
    case '/contact':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Contact Page');
      break;
    default:
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Page Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
