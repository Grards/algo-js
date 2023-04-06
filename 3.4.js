// On Vscode : Do "node x.x.js" (exercise number) in the terminal to launch the console.

const prompt = require("prompt-sync")({
    sigint: true
});


// Exercise 3.4

// Write a program that will display the minimum and maximum elements of a given array.

let i = 1;
let entriesArray = [];
let numbEntries = prompt("Please enter a number of entries that you want to input in the array : ");

console.log("You must input " + numbEntries + " entries.")

while(i<=numbEntries){
    entriesArray.push(parseInt(prompt("Please add a number : ")));
    i++
}

console.log("Here is the array : ");
console.log(entriesArray);

console.log("The min of the array is : " + Math.min(...entriesArray));
console.log("The max of the array is : " + Math.max(...entriesArray));