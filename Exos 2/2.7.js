// On Vscode : Do "node x.x.js" (exercise number) in the terminal to launch the console.

const prompt = require("prompt-sync")({
    sigint: true
});

// Exercise 2.7

// Make a program that ask the user to enter a number named n. Then ask him n time to enter a new number. At the end display the sum of all the numbers collected this way.

// Example: If the user enters 3 for n then 1, 2 and 3, the program should display 6.

let n = prompt("Please enter a number : ");
console.log("Now, you will must enter " + n + " number(s).")

let result = 0;

if(n<=0){
    console.log("Hm. We attempted a positive value bigger than 0. Retry please.")
}else{
    for(i=1; i<=n; i++){
        result+= parseInt(prompt("Enter a new number : "));
    }
    console.log("The addition of you're differents numbers is : " + result);
}

