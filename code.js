/*Сможете ли вы найти иголку в стоге сена?

Напишите функцию findNeedle(), которая принимает arrayполный мусор, но содержит один"needle"

После того, как ваша функция найдет иглу, она должна вернуть сообщение (в виде строки), в котором говорится:

"found the needle at position "плюс indexон нашел иглу, так что:
*/

function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.indexOf('needle')) {
            return `found the needle at position ${haystack.indexOf('needle')}`;
        }
    }
}
