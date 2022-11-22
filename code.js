function removeEveryOther(arr) {
    let array = [];
    for (let i = 0; i < arr.length; i += 2) {
        array.push(arr[i]);
    }
    return array;
}
//
