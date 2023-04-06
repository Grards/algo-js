// On Vscode : Do "node x.x.js" (exercise number) in the terminal to launch the console.

const prompt = require("prompt-sync")({
    sigint: true
});

// Exercise 3.0

// Create an array that contains every learner from the class (you can find the complete list on the Discord server). Display each name in the console using a for ... of ... loop.

let classmates = ["Steve" , "Thomas", "Louka", "Jodie", "Noa", "Abel", "Julien", "Delphine", "Marine", "Alexandra", "Ismaël", "Anthony", "Benjamin", "Bruno", "Emilien", "Ethan", "Loïc", "Luciano", "Nikko", "Sylvain", "Willy"];

for(mates of classmates){
    console.log(mates);
}