function colorOf(r, g, b) {
    return `#${[r, g, b].map((i) => i.toString(16).padStart(2, 0)).join('')}`;
}
