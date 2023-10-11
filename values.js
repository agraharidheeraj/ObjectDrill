function values(obj) {
    const valueArray = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && typeof obj[key] !== 'function') {
            valueArray.push(obj[key]);
        }
    }
    return valueArray;
}

module.exports = values;
