function giveMeFive(obj) {
    const mass = [];
    for (let key in obj) {
        if (key.length == 5) {
            mass.push(key);
        }
        if (obj[key].length == 5) {
            mass.push(obj[key]);
        }
    }

    return mass;
}
