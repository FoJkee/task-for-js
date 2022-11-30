function gimme(triplet) {
    let arr = [];
    for (let i of triplet) {
        arr.push(i);
    }
    arr.sort((a, b) => a - b);
    return triplet.indexOf(arr[1]);
}
