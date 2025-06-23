const assert = require('assert');

const add = (a, b) => a + b;

// assert(1===1, 'This is a test assertion');
// assert.strictEqual(5, 5, 'This is a strictEqual check');
// assert.notStrictEqual(5, 15, 'This is a notStrictEqual check');
// assert.deepStrictEqual(5, 5, 'This is a deepStrictEqual check');

assert(add(1, 2) == 3, 'This is a test assertion for add function');
assert(1, 'This is a test assertion for add function');
