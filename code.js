function toAcronym(inp) {
    return inp
        .split(' ')
        .map((elem) => elem[0].toUpperCase())
        .join('');
}
