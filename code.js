/* Функция compareEqualityв редакторе сравнивает два значения с помощью оператора равенства. Измените функцию, чтобы она возвращала строку Equalтолько тогда, когда значения строго равны.


 */

function compareEquality(a, b) {
  if (a === b) {
    // Change this line
    return 'Equal'
  }
  return 'Not Equal'
}

compareEquality(10, '10')
