/* 
Функция raiseToPowerвозводит основание в степень. К сожалению, он не вызывается должным образом - исправьте код, чтобы значение powerбыло ожидаемым 8.

 */

function raiseToPower(b, e) {
    return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);
