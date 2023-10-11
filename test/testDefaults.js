const defaults = require('../defaults'); 

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const defaultProps = { name: 'Unknown', alias: 'Batman' };

const defaultsResult = defaults(testObject, defaultProps);
console.log('Object with Defaults:', defaultsResult);