/**
 * DATATYPES:
 * 0. 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

// 1. Number
// Primitive data type comprised of one or more digits
// 5, 30, 89

// 2. String
// Primitive data type comprised of text between " " or ''
// "Barry", 'Allen'

// 3. Boolean
// Primitive data type comprised of only two values, true and false

// 4. Array
// Complex data type of an indexed list-like object with []
// var letters = ["A", "b", "C"];

// 5. Object
// Complex data type that stores various keyed collections
// var floors = {first: "A", second: "B", third: "C"};

// 6. Function
// Complex data type of a set of statements that performs a task or calculates a value
// function add(x, y){return x + y};

// 7. undefined
// Primitive data type without a value and the product of not initalizing
// undefined

// 8. null
// Primitive data type without a value and is obtained intentionally

// 9. NaN (Not a Number)
// Primitive data type (despite its name NaN resolves to a number when passed into typeOf)

// 10. Infinity and -Infinity
// Numeric data types global object properties representing positive and negative infinity

// 11. Difference between primitive/simple and complex data types
// Primitive/simple data types don't hold, collect, or aggregate other values and operations
// on simple values return new simple values rather than altering the original. Among them
// includes Strings, Numbers, NaN, Boooleans, null, undefined
var num = 10;
var sum = num + 5;
console.log(sum); // logs 15

// Complex data, however, do aggregate other values and are of indefinite size as a result
var arr = [1, 5, 8];
arr.push(3, 7);
console.log(arr); // logs [1, 5, 8, 3, 7]

// 12. Copy by Value and Copy by Reference
// Simple data types are small enough to fit inside a variable so they are copied by value
var a = 5;
var e = a; // var e copies a
var e = 10; // e is reassigned
console.log(a) // prints 5

// Complex data types are too big to be stored into a variable so they copied by reference
// Rather than having their own unique value these variables simply point to a value
var c = {one: "A"};
var d = c;
d.one = "B"; // changes the value of the object that c and d are pointing to
console.log(c.one); // prints "B"


