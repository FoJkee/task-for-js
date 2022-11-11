String.prototype.toAlternatingCase = function () {
    let letter = this.toUpperCase().split('');
    for (let i = 0; i < letter.length; i++) {
        if (letter[i] == this[i]) {
            letter[i] = letter[i].toLowerCase();
        }
    }
    return letter.join('');
};
