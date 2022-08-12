/* Сравнение с оператором меньше или равно
Оператор меньше или равно ( <=) сравнивает значения двух чисел. Если число слева меньше или равно числу справа, возвращается true. Если число слева больше числа справа, возвращается false. Как и оператор равенства, оператор меньше или равно преобразует типы данных.

Примеры

4   <= 5 // true
'7' <= 7 // true
5   <= 5 // true
3   <= 2 // false
'8' <= 4 // false
Добавьте оператор меньше или равно к указанным строкам, чтобы операторы return имели смысл.
 */

function testLessOrEqual(val) {
  if (val <= 12) {
    // Change this line
    return 'Smaller Than or Equal to 12'
  }

  if (val <= 24) {
    // Change this line
    return 'Smaller Than or Equal to 24'
  }

  return 'More Than 24'
}

testLessOrEqual(10)
