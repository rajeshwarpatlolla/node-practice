const crypto = require('crypto');

const hash = crypto.createHash('sha256').update('Hello, World!').digest('hex');
console.log('SHA-256 Hash:', hash);

const hmac1 = crypto.createHmac('sha256', 'a_secret_key').digest('hex');
const hmac2 = crypto.createHmac('sha256', 'a_secret_key').update('Hello, World!').update('test').digest('hex');
console.log('SHA-256 HMAC 1:', hmac1);
console.log('SHA-256 HMAC 2:', hmac2);






// const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
//   modulusLength: 2048,
//   publicKeyEncoding: { type: 'spki', format: 'pem' },
//   privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
// });
// console.log('Public Key:', publicKey);
// console.log('Private Key:', privateKey);





// const { generateKeyPairSync, publicEncrypt, privateDecrypt } = crypto;

// const { publicKey, privateKey } = generateKeyPairSync('rsa', {
//   modulusLength: 2048,
// });

// console.log('Public Key:', publicKey);
// console.log('Private Key:', privateKey);

// const message = 'secret text';

// const encrypted = publicEncrypt(publicKey, Buffer.from(message));
// const decrypted = privateDecrypt(privateKey, encrypted);

// console.log('Decrypted:', decrypted.toString());
