function openOrSenior(data) {
    let res = [];
    for (let i = 0; i < data.length; i++) {
        res[i] = data[i][0] >= 55 && data[i][1] > 7 ? 'Senior' : 'Open';
    }
    return res;
}
