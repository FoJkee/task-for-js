function checkExam(array1, array2) {
    let num = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i]) {
            num += 4;
        } else if (array2[i] == '') {
            num += 0;
        } else {
            num -= 1;
        }
    }
    return num < 0 ? 0 : num;
}
