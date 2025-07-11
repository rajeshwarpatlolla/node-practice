const { workerData, parentPort } = require('worker_threads');

function heavyCompute(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}

const result = heavyCompute(workerData);
parentPort.postMessage(result);
