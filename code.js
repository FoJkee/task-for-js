function factorial(n) {
    if (n < 0 || n > 12) {
        throw Error;
    } else if (n) {
        return n * factorial(n - 1);
    } else {
        return 1;
    }
}
