/* Измените функцию abTestтак, чтобы, если aили bменьше 0, функция немедленно завершалась со значением undefined.

Подсказка
Помните, что undefinedэто ключевое слово , а не строка.
 */

function abTest(a, b) {
  if (a < 0) {
    return undefined
  } else if (b < 0) {
    return undefined
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2))
}

abTest(2, 2)
