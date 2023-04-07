// On Vscode : Do "node x.x.js" (exercise number) in the terminal to launch the console.

const prompt = require("prompt-sync")({
    sigint: true
});

// Exercise 4.6

// Create a function factorial(a) that returns the factorial of a number.

// That function must be recursive.

let a = parseInt(prompt("Enter a number : "));
let result = a;

/**
 * This function apply a factorial to a number with a recursivity method.
 * @param {Int} a It's a simple int value.
 * @returns result of the factorial.
 */
function factorial(a){
    --a;
    result = result*a;
    // The recursivity is here : we recall the fuction herself.
    if(a>1){
        factorial(a);
    }else{
        return result;
    }
}

factorial(a);
console.log("The result is : " + result);