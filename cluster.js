const cluster = require('cluster');
const http = require('http');
const os = require('os');

console.log('CPUs:', os.cpus());
const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case, it is an HTTP server
  http
    .createServer((req, res) => {
      res.writeHead(200);
      console.log(`Worker ${process.pid} handling request`);
      res.end(`Worker ${process.pid} handling request`);
      // process.exit(); // Terminates the worker which just handled the request
    })
    .listen(8000);

  console.log(`Worker ${process.pid} started`);
  console.log('Server is running on port 8000');
}
