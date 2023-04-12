// On Vscode : Do "node x.x.js" (exercise number) in the terminal to launch the console.

const prompt = require("prompt-sync")({
    sigint: true
});


// Exercise 3.1

// Write a program that will add all the elements of an array.
// Test it with the following arrays:

//     [1, 2, 3, 4, 5] => 15
//     [100, 101, 102] => 303

let i = 1;
let result = 0
let entriesArray = [];
let numbEntries = prompt("Please enter a number of entries that you want to input in the array : ")

console.log("You must input " + numbEntries + " entries.")

while(i<=numbEntries){
    entriesArray.push(parseInt(prompt("Please add a number : ")));
    i++
}

console.log("Here is the saved array : ");
console.log(entriesArray);

for(let entry of entriesArray){
    result += entry;
}

console.log("The addition of the differents numbers is : " + result);

