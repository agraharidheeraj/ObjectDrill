const mapObject = require('../mapObject'); 

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

const mapResult = mapObject(testObject, (value) => value.toUpperCase());
console.log('Mapped Object:', mapResult);