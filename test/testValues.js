const values = require('../values');

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

const valuesResult = values(testObject);
console.log('Values:', valuesResult); 