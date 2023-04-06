// On Vscode : Do "node x.x.js" (exercise number) in the terminal to launch the console.

const prompt = require("prompt-sync")({
    sigint: true
});

// Exercise 4.2

// Create a function named rand10() that returns a random integer between 1 and 10. Create a program that will display the result of that function each time it is run.

// Write a documentation for the rand10() function.

// You will have to search on Google how to generate random numbers in JavaScript for this exercise.


// Initialise the number of rands that you want
let numOfRands = parseInt(prompt("How much of randoms woud you to display ? : "));

/**
 * Generate a random number between 1 and 10
 * No @param
 */
function rand10(){
    const rand = Math.floor(Math.random() * 10) + 1;
    console.log(rand)
}

// Run the random function as many times as you asked
while(numOfRands>0){
    rand10();
    numOfRands--;
}
