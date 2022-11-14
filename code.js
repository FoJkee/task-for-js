function toAcronym(inp) {
    return inp
        .split(' ')
        .map((elem) => elem.slice(0, 1).toUpperCase())
        .join('');
}
