// On Vscode : Do "node x.x.js" (exercise number) in the terminal to launch the console.

const prompt = require("prompt-sync")({
    sigint: true
});

// Exercise 2.6

// Make a program that ask the user to enter a number between 1 and 7. Depending on the number, display the day of the week that correspond. (1 => Monday, 2 => Tuesday, etc...)

let day = prompt("Enter a number between 1 and 7 to display the correspondant day : ");

switch(day){
    case '1':
        console.log("The day " + day + " is : Monday.");
        break;
    case '2':
        console.log("The day " + day + " is : Thuesday.");
        break;
    case '3':
        console.log("The day " + day + " is : Wednesday.");
        break;
    case '4':
        console.log("The day " + day + " is : Thursday.");
        break;
    case '5':
        console.log("The day " + day + " is : Friday.");
        break;
    case '6':
        console.log("The day " + day + " is : Sunday.");
        break;
    case '7':
        console.log("The day " + day + " is : Saturday.");
        break;
    default:
        console.log("We've said between 1 and 7...");
        break;
}