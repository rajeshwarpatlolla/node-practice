const fs = require('fs');
const buf = require('node:buffer');

const a = Buffer('test');
// console.log(a.toString())

const b = Buffer([116, 101, 115, 116]);
// console.log(b)
// console.log(b.toString())
// console.log(b.toString('hex'))
// console.log(b.toString('base64'))
// console.log(b.toString('utf-8'))
// console.log(b.length)

const c = Buffer.alloc(10, 1);
// console.log(c)

const d = Buffer.allocUnsafe(10);
// console.log(d)

d[0] = '1234';
// console.log(d)

const file = fs.readFileSync('test.txt');
// console.log(file.toString());

// To enforce chunking, use the highWaterMark option to limit the buffer size (i.e., the size of each chunk in bytes):
const stream = fs.createReadStream('test.txt', {
  highWaterMark: 1024, // 1 KB chunks
});

// stream.on('data', (chunk) => {
//   console.log('========================');
//   console.log(chunk, chunk.toString());
// });

console.log(Buffer.isBuffer(a));
console.log(buf.isUtf8(file));
