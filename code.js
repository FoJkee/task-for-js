function openOrSenior(data) {
    const num = [];
    for (let i = 0; i < data.length; i++) {
        num[i] = data[i][0] >= 55 && data[i][1] > 7 ? 'Senior' : 'Open';
    }
    return num;
}
