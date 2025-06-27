// console.log(JSON.stringify(process, null, 2));
console.log(process.argv);
console.log(process.env);
console.log(process.pid);
console.log(process.memoryUsage());

process.stdout.write('Enter something:');

process.stdin.on('data', (d) => {
  console.log(d.toString());
  process.exit();
});

console.log('Start');

process.nextTick(() => {
  console.log('Tick 1');
});

console.log('End');
