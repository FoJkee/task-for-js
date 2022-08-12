/*Сравнение с оператором меньше, чем
Оператор меньше чем ( <) сравнивает значения двух чисел. Если число слева меньше числа справа, возвращается true. В противном случае возвращается false. Как и оператор равенства, оператор меньше преобразует типы данных при сравнении.

Примеры

2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false
Добавьте оператор «меньше чем» к указанным строкам, чтобы операторы return имели смысл.
 */

function testLessThan(val) {
  if (val < 25) {
    // Change this line
    return 'Under 25'
  }

  if (val < 55) {
    // Change this line
    return 'Under 55'
  }

  return '55 or Over'
}

testLessThan(10)
