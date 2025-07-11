const { URL } = require('url');

const url = new URL('https://example.com:8080/path/name?query=123#section');

console.log('url.host:', url.host);
console.log('url.hostname:', url.hostname);
console.log('url.port:', url.port);
console.log('url.href:', url.href);
console.log('url.origin:', url.origin);
console.log('url.protocol:', url.protocol);
console.log('url.pathname:', url.pathname);
console.log('url.search:', url.search);
console.log('url.searchParams:', url.searchParams);
console.log('url.hash:', url.hash);
