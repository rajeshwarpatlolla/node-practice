const http = require('http');

const getWebSiteContent = async () => {
  return new Promise((resolve, reject) => {
    http.get('http://example.com', (response) => {
      let data = '';

      // A chunk of data has been received.
      response.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received.
      response.on('end', () => {
        resolve(data);
      });

      response.on('error', (err) => {
        reject(`Error fetching data: ${err.message}`);
      });
    });
  });
};

const server = http.createServer(async (req, res) => {
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
    case '/about-example':
      const response = await getWebSiteContent();
      res.end(response);
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
