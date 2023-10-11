const invert = require('../invert');

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

const invertResult = invert(testObject);
console.log('Inverted Object:', invertResult);