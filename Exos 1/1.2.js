// On Vscode : Do "node x.x.js" (exercise number) in the terminal to launch the console.

const prompt = require("prompt-sync")({
    sigint: true
});


// Exercise 1.2

// Define three variables: name, firstName and city. Display them like this: "Your name is Gerard Lambert and you live in Paris.".

let name = "Lambert";
let firstName = "Gerard";
let city = "Paris";

console.log("Your name is " + firstName + " " + name + " and you live in " + city + ".");