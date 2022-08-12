/* Замените два оператора if одним оператором, используя &&оператор, который вернет строку Yes, если valменьше или равно 50и больше или равно 25. В противном случае будет возвращена строка No.
 */

function testLogicalAnd(val) {
  // Only change code below this line

  if (25 <= val && val <= 50) {
    return 'Yes'
  }

  // Only change code above this line
  return 'No'
}

testLogicalAnd(10)
