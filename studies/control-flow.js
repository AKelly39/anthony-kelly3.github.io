/**
 * CONTROL-FLOW:
 * 0. Allows us to control the flow of our code with if, else, else if, and switch statements
 * 
 * 
 */

// 1. If
// As the start of a conditional statement it sets the very first condition of a chain but
// it can also be a standalone. 
var sky = "cloudy";

if (sky !== "clear"){            // checks if sky is NOT EQUAL to "clear"
    console.log("I'm so sad");   // "I'm so sad" is logged 
}

if (sky === "clear"){            // checks if sky is EQUAL to "clear"
    console.log("I'm so happy"); // "I'm so happy" is NOT logged 
}


// 2. Else-if
// Sets up another condition beyond the initial if statement but it is only reached if the
// previous condition is false
var sky = "cloudy";

if (sky !== "clear"){            // checks if sky is NOT EQUAL to "clear"
    console.log("I'm so sad");   // "I'm so sad" is logged 
} else if (sky === "clear"){     // previous condition was true therefore this condition isn't read
    console.log("I'm so happy");  
}

// 3. Else
// The very end of an if statement. It only reached if all previous conditions resulted to false
var sky = "falling";

if (sky === "cloudy"){           // checks if sky is EQUAL to "cloudy"
    console.log("I'm so sad");   // "I'm so sad" is not logged 
} else if (sky === "clear"){     // checks if sky is EQUAL to "cloudy"
    console.log("I'm so happy"); // "I'm so sad" is not logged
} else {                         // neither of the previous conditions were met so
    console.log("What just hit me?")  // "What just hit me?" is printed
}

// 4. Switch
// Another kind of conditional but much cleaner than if statements
var shape = 'square';

switch (shape) {
    case 'circle':
        console.log("Perfectly rounded");
        break;
    case 'square':
        console.log("Cubes are cool");
        break;
    default:
        console.log("What's your favorite shape?")
}

