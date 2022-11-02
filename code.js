/*

Is the string uppercase?
Task
Create a method to see whether the string is ALL CAPS.

Examples (input -> output)

*/

String.prototype.isUpperCase = function() {
    return this == this.toUpperCase() ? true : false
  }
