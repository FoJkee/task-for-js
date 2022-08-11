/* Завершите функцию квадратной суммы, чтобы она возводила в квадрат каждое переданное ей число, а затем суммировала результаты.

Например, for [1, 2, 2]это должно возвращаться , 9потому что 1^2 + 2^2 + 2^2 = 9.
 */

function squareSum(numbers) {
  var result = 0
  numbers.forEach(function (item) {
    result += Math.pow(item, 2)
  })
  return result
}
