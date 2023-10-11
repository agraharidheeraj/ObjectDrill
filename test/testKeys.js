const keys = require('../key');

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

const keysResult = keys(testObject);
console.log('Keys:', keysResult);