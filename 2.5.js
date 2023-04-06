// On Vscode : Do "node x.x.js" (exercise number) in the terminal to launch the console.

const prompt = require("prompt-sync")({
    sigint: true
});

// Exercise 2.5

// Make a program that asks the favorite number of the user. If that number is anything other than 42 display "Are you sure?" and ask again. (This program should never end as long as the user didn't chose 42).

let favoriteNumb = "";

do{
    if(favoriteNumb !== ""){console.log("Are you sure ?")}

    favoriteNumb = prompt("What's you're favorite number ? : ");
}while(favoriteNumb!=42)

console.log("We're agree.");