const { Worker } = require('worker_threads');
console.time('multi');

for (let i = 0; i < 4; i++) {
  const worker = new Worker('./worker_threads-worker.js', { workerData: 2e9 });

  worker.on('message', () => {
    if (i === 3) console.timeEnd('multi');
  });
}
