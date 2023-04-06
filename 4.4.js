// On Vscode : Do "node x.x.js" (exercise number) in the terminal to launch the console.

const prompt = require("prompt-sync")({
    sigint: true
});

// Exercise 4.4

// Create a function pickLearner(inputAr, n) that takes 2 parameters.

//     inputAr : An array of learners (the one you created in exercise 3.0 for example)
//     n : A number, that should be greater than 0 and less than the length of inputAr

// The function should return an array of randomly selected learners.


// Here is an array of the Becode Wilson 2 classmates
let classmates = ["Steve" , "Thomas", "Louka", "Jodie", "Noa", "Abel", "Julien", "Delphine", "Marine", "Alexandra", "Ismaël", "Anthony", "Benjamin", "Bruno", "Emilien", "Ethan", "Loïc", "Luciano", "Nikko", "Sylvain", "Willy"];

/**
 * Display the classmate who is choosed by the number n.
 * @param {Array} inputAr An array of learners 
 * @param {Int} n A number choose by the user (between 0 and the lenght of inputAr)
 */
function pickLearner(inputAr, n){
    console.log(inputAr[n]);
}

// Enter a number who will be used to define the choosen classmate
let choice = parseInt(prompt("Enter a number between 0 and " + (classmates.length-1) + " : "));

// The choice is between 0 and the length of the array ?
if(choice >= 0 && choice <= (classmates.length-1)){
    // Call the functionn pcikLearner and define the choosen one.
    pickLearner(classmates, choice);
}else{
    // The number is not between 0 and the length of the array. Nice try.
    console.log("Your number is not between 0 and " + (classmates.length-1));
}
