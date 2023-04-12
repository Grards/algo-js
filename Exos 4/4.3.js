// On Vscode : Do "node x.x.js" (exercise number) in the terminal to launch the console.

const prompt = require("prompt-sync")({
    sigint: true
});

// Exercise 4.3

// By reusing the function rand10() created in Exercise 2, write a function named multiRand(n) that returns an array of n numbers between 1 and 10. You should not modify anything in rand10() to achieve this.

// Write a documentation for the multiRand(n) function.

// Use that function to create a program that will ask the number of random numbers to generate then display that same number of random numbers.


/**
 * Generate a random number between 1 and 10
 * No parameter needed
 */
function rand10(){
    const rand = Math.floor(Math.random() * 10) + 1;
    console.log(rand)
}

/** 
 * Call the function rand10() to create multiple randoms
 * @param {Int} numOfRands The amount of randoms who are generated. 
*/
function multiRand(numOfRands){
    // Run the random function as many times as you asked
    while(numOfRands>0){
        rand10();
        numOfRands--;
    }
}

// Initialise the number of rands that you want and call the multiRand function.
multiRand(parseInt(prompt("How much of randoms woud you to display ? : ")))