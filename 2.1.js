// On Vscode : Do "node x.x.js" (exercise number) in the terminal to launch the console.

const prompt = require("prompt-sync")({
    sigint: true
});


// Exercise 2.1

// Ask the user to enter its age. If its age is at least 18 display "You are an adult". If it's not the case display "You are not yet an adult".
// tip: You can use the prompt function to ask for user input in the browser

let age = prompt("How old are you? : ");

if(age >= 18)
    console.log("You're an adult");
else
    console.log("You're not an adult");