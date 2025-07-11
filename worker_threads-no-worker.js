console.time('single');

function heavyCompute(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}

for (let i = 0; i < 4; i++) {
  heavyCompute(2e9);
}

console.timeEnd('single');
