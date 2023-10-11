# JavaScript Object Utility Functions

This repository contains custom JavaScript object utility functions that provide various operations for working with objects. These functions can help you manipulate and transform objects in different ways. Each function is explained below, along with its usage and examples.

## Functions

### `keys(obj)`

This function retrieves all the property names of an object and returns them as an array of strings.

### `values(obj)`

The `values` function returns an array containing all the values of the object's own properties, excluding functions.

### `mapObject(obj, cb)`

`mapObject` is similar to the `map` function for arrays but works with objects. It transforms the value of each property by passing it to a callback function.

### `pairs(obj)`

The `pairs` function converts an object into a list of [key, value] pairs and returns it as an array.

### `invert(obj)` (Stretch)

The `invert` function returns a copy of the object where the keys have become the values and the values have become the keys. It assumes that all object values are unique and string serializable.

### `defaults(obj, defaultProps)` (Stretch)

The `defaults` function fills in undefined properties in an object with values from a `defaultProps` object and returns the modified object.

## Usage

To use these utility functions, follow these steps:

1. Create a JavaScript file for each function, such as `keys.js`, `values.js`, and so on.
2. Implement the function in its respective file.
3. Export the function using `module.exports`.

```javascript
// Example for 'keys.js'
function keys(obj) {
    // Implementation here
}

module.exports = keys;

