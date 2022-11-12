function pickIt(arr) {
    var odd = [],
        even = [];
    for (element of arr) (element % 2 ? odd : even).push(element);

    return [odd, even];
}
