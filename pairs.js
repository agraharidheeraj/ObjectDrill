function pairs(obj) {
    const pairArray = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            pairArray.push([key, obj[key]]);
        }
    }
    return pairArray;
}

module.exports = pairs;
