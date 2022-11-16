function isIsogram(str) {
    str = str.toLowerCase();
    var hash = {};
    for (var i in str) {
        if (hash[str[i]]) {
            return false;
        }
        hash[str[i]] = true;
    }
    return true;
}
