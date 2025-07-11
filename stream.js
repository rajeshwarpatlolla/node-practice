// const { Transform } = require('stream');

// const upperCaseTransform = new Transform({
//   transform(chunk, encoding, callback) {
//     this.push(chunk.toString().toUpperCase());
//     callback();
//   }
// });

// process.stdin
//   .pipe(upperCaseTransform)
//   .pipe(process.stdout);

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'exercises.mp4');
const stats = fs.statSync(filePath);
const totalSize = stats.size;

console.log(`Total size: ${totalSize/1000000} MB`);

let bytesRead = 0;

const readStream = fs.createReadStream(filePath);

readStream.on('data', (chunk) => {
  bytesRead += chunk.length;
  const percent = ((bytesRead / totalSize) * 100).toFixed(2);
  console.log(`Progress: ${percent}%`);
});

readStream.on('end', () => {
  console.log('\nDone reading file.');
});
