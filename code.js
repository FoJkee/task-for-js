/* 
Исправьте две ошибки индексации в следующей функции, чтобы все числа от 1 до 5 выводились на консоль.

 */

function countToFive() {
    let firstFive = '12345';
    let len = firstFive.length;
    // Only change code below this line
    for (let i = 0; i < len; i++) {
        // Only change code above this line
        console.log(firstFive[i]);
    }
}

countToFive();
