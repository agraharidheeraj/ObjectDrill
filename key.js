function keys(obj) {
    const keyArray = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            keyArray.push(key);
        }
    }
    return keyArray;
}

module.exports = keys;
