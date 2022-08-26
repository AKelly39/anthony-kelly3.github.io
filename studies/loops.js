/**
 * LOOPS:
 * 0. Loops are extremely helpful constructs that allow us to execute a block of code as many
 *    times as we wish without having to type that block repeatedly
 * 1. Loops are also great for iterating though collections.
 * 2. Be careful of infinite loops
 * 
 * 
 */

// 1. While, For, and For-In Loops
// While loop uses the keyword, while, and in parentheses states a condition that while true
// keeps running the code in the body
var count = 0
while (count < 5){
    console.log(count);  // prints 0, 1, 2, 3, 4
    count++;             // increments count by one every time it's called
}

// For loop is used to iterate through arrays.  It uses the keyword, for, and 3 statements:
// initialize, stop, and increment
var array = [1, 2, 3]
for (var i = 0; i < array.length; i++){
    console.log(array[i] += 5);          // prints 6 7 8
}

//For-in loop is designed for iterating over objects
var person = {nameLast: 'Addams', nameFirst: 'Morticia'};
for (var key in object){
    console.log(person[key]);    // prints 'Addams' 'Morticia'
}

// 2. Loop for as long as you want
// Loops can go on for as long as you need forward and backward
var colors = ['red', 'yellow', 'blue', 'green', ... 'magenta'];
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);       // prints every index of the array
}


// 3. Loop over arrays backwards
// You can loop backwards too
var colors = ['red', 'yellow', 'blue', 'green'];
for (var i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);       // prints 'green', 'blue', 'yellow', 'red'
}

// 4. Loop through objects
// only possible with for-in loops
var person = {nameLast: 'Addams', nameFirst: 'Fester'};
for (var key in object){
    console.log(person[key]);    // prints 'Addams' 'Fester'
}