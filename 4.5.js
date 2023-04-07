// On Vscode : Do "node x.x.js" (exercise number) in the terminal to launch the console.

const prompt = require("prompt-sync")({
    sigint: true
});

// Exercise 4.5

// Create a function named calcDistance which takes the coordinates of two different points A and B in a 2D space. That function must return the distance between those two points.

// Examples results:

//     Point A = [1, 1], point B = [2, 2] => 1.41
//     Point A = [1, 1], point B = [3, 1] => 2
//     Point A = [4, 1], point B = [1, 1] => 3
//     Point A = [-2, 2], point B = [2, -2] => 5.65

// Create a program to use that function.

// Write a documentation for the calcDistance function.

// Note: You probably need to make some search on Google to learn the mathematical formula to do that. You will also probably need to search for useful functions in JavaScript to help you making complex mathematical formulas...

let a = [];
let b = [];

// Inititialisation of two coordinates A and B.
a.push(parseInt(prompt("Enter the first coordinate for the A point : ")), parseInt(prompt("Enter the second coordinate for the A point : ")));
b.push(parseInt(prompt("Enter the first coordinate for the B point : ")), parseInt(prompt("Enter the second coordinate for the B point : ")));

// Log of the coordinates.
console.log("The coordinates for A is : ");
console.log(a);
console.log("The coordinates for B is : ");
console.log(b);

/**
 * This function calculate the distance between two coordinates.
 * @param {Array} a Two coordinates (x,y) for the point A.
 * @param {Array} b Two coordinates (x,y) for the point B.
 */
function calcDistance(a,b){
    /**
     * Let explain this calcul to calculate a distance between two coordinates :
     * 
     * First of all, we substract the coordinates like : B(x) - A(x) and B(y) - A(y).
     * Secondly, we apply an exponant (2) on the result of theses substractions => Math.sqrt.
     * Thirdly, we apply a square root (Math.sqrt) on the addition of two coordinates.
     */
    let distance = Math.sqrt(Math.pow((b[0]-a[0]),2) + Math.pow((b[1]-a[1]),2));
    console.log("The distance between the two coordinates is : " + distance);
}

// Call of the calcDistance function.
calcDistance(a,b);

