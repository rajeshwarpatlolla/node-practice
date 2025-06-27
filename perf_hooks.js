const { performance } = require('perf_hooks');

const start = performance.now();
performance.mark('start');

for (let i = 0; i < 1000000; i++) {
  // Simulate some work
  Math.sqrt(i);
}

const end = performance.now();
performance.mark('end');
console.log(`Execution time: ${(end - start).toFixed(2)} milliseconds`);
console.log(`Performance marks: ${performance.measure('Time:', 'start', 'end').duration.toFixed(2)} milliseconds`);
