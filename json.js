const obj = { name: 'test', age: 12, address: { city: 'hyd' } };
console.log(JSON.stringify(obj, ['address', 'city'], 4));
