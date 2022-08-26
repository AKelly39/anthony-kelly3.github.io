/**
 * OPERATORS:
 * 0. Operators act on our data in several ways.
 * 1. Operators are classified by what they do and how many operands, values they work on,
 *    they require.
 * 
 */

// 1. Assignment
// Assignment operators assign values.
var weather = "sunny"; // "=" assigns the value "sunny" to the variable weather

// 2. Arithmatic
// Arithmatic operators perform math.
console.log(6 + 2); // logs 8
console.log(6 - 2); // logs 4
console.log(6 * 2); // logs 12
console.log(6 / 2); // logs 3
// Modelo gives us the remainder of a division problem
console.log(6 % 2); // logs 0

// 3. Comparison
// Comparison operators compare 2 values and evaluate to a Boolean, true or false.
// Greater than
console.log(6 > 2); // logs true
// Lesser than
console.log(6 < 2); // logs false
// Greater than OR equal to
console.log(6 >= 2); // logs true
// Lesser than OR equal to
console.log(6 <= 2); // logs false

//Strictly equal to
console.log(6 === 2); // logs false
//Strictly not equal to
console.log(6 !== 2); // logs false

// 4. Logical
// && is the AND operator: both conditions must be true
console.log(4 < 3 && 5 > 2); // logs false
console.log(7 > 1 && 8 > 2); // logs true
// || is the OR operator: either one of the conditions must be true
console.log(5 < 3 || 8 > 2); // logs true
console.log(5 < 3 || 8 < 2); // logs false
// ! is the bang operator: swiches the truthy and falsey values
console.log(true); // logs true
console.log(!true); // logs false

// 5. Unary
// Operators acting on only one operand
// typeOf resolves to a string of the variable type of its operand
console.log(typeof (0 > 5)); // logs "false"
console.log(typeof 5); // logs "number"
console.log(typeof "apple"); // logs "string"

// 6. Ternary
// Operators acting on three operands


