function findUniq(arr) {
    let res = [];
    const cod = (el) => el[0];
    for (let num of arr) {
        if (!res.includes(num)) {
            res.push(num);
        }
    }
    return Number(
        res.filter((el) => arr.indexOf(el) === arr.lastIndexOf(el)).join()
    );
}
