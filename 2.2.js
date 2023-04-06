// On Vscode : Do "node x.x.js" (exercise number) in the terminal to launch the console.

const prompt = require("prompt-sync")({
    sigint: true
});

// Exercise 2.2

// Ask the user to enter three numbers: min, max and current. Display if current is between min and max.
// Bonus: if min is greater than max, display an error message to explain the user he's doesn't understand anything then exit the program. (It must not ask any other question.)
// Bonus 2: be polite in the error messages. (facultative)

let min = prompt("Give a minimum value : ");
let max = prompt("Give a maxmimum value : ");

if(min > max){
    console.log("Error : Your min value is under the max value. Can you please retry ?");
}else{
    let current = prompt("Give a current value : ");
    if((current >= min) && (current <= max)){
        console.log("Your current value " + current  + " is between " + min + " and " + max);
    }else{
    console.log("You're current value " + current  + " is not between " + min + " and " + max);
    }
}

