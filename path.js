const path = require('path');

console.log('__filename:', __filename);
console.log('__dirname:', __dirname);
console.log('path.basename:', path.basename(__filename));
console.log('path.dirname:', path.dirname(__filename));
console.log('path.extname:', path.extname(__filename));
console.log('path.parse:', path.parse(__filename));
console.log('path.format:', path.format(path.parse(__filename)));
console.log('path.join:', path.join(__dirname, '/test-folder', '../', 'test-file.txt'));
console.log('path.resolve:', path.resolve(__dirname, '/test', '../', 'test-file.txt'));
console.log('path.normalize:', path.normalize('/test-folder/test-folder-2/../test-file.txt'));
console.log('path.isAbsolute:', path.isAbsolute('/test-folder/../test-file.txt'));
console.log('path.relative:', path.relative('/test-folder/test-file-2.txt', 'test-file.txt'));
console.log('path.sep:', path.sep);
console.log('path.delimiter:', path.delimiter);
