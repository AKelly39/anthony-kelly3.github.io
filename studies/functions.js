/**
 * FUNCTIONS:
 * 0. A type of encapsulating reusable code
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

// 1. Functions must be declared/defined before they can be invoked
function subtract(b, s){   
    return b - s;
}


// 2. A function's parameters are stand-ins to be replaced by the function call's arguments
function divide(b, s){
    return b / s;
}
divide(10, 2);  //returns 5

// 3. You want your functions to have names that accurately describe their actions
function add(a, b){     // named add because it returns the sum of the arguments passed in
    return a + b;
}

// 4. Assigning functions to variables
// Anonymous functions can be assigned to variables to create function expressions which
// cannot be called before they are assigned.
console.log(multiply(5, 6));    // gives an error
var multiply = function(x, y){
    return x * y;
}
console.log(multiply(8, 3));    // prints 24

// 5. Optional inputs and optional outputs
// 



// 6. Scope
// Functions can interact with variables from the global and parent


// 7. Closures
// 