// On Vscode : Do "node x.x.js" (exercise number) in the terminal to launch the console.

const prompt = require("prompt-sync")({
    sigint: true
});

// Exercise 4.1

// Create a function named calcSurface that takes the length and width of a rectangle and returns its surface. Then create a program that asks the length and width of a rectangle to the user then displays the surface of that rectangle. That program must use the function you created.

// Write a documentation for the calcSurface function.



// Initialisation of the surface of the rectangle
let surface = 0;

/**
 * Calculte the surface of a rectangle
 * @param  {Int} length The lenght of the rectangle
 * @param  {Int} width The width of the rectangle
 */
function calcSurface(length, width){
    surface = length*width;
    return surface;
}

// Print the result of the surface
calcSurface(prompt("Enter a length : "), prompt("Enter a width : "));
console.log("La surface du rectangle est : " + surface);