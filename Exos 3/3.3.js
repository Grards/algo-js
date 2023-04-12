// On Vscode : Do "node x.x.js" (exercise number) in the terminal to launch the console.

const prompt = require("prompt-sync")({
    sigint: true
});

// Exercise 3.3

// Write a program that will create a duplicate of a given array.

// Bonus: make a first version that will only do it using push(). Make a second version that uses a single method call to perform the copy. (You'll have to search on MDN or Google for this one.)

let i = 1;
let entriesArray = [];
let duplicateArray= [];
let bonus = [];
let numbEntries = prompt("Please enter a number of entries that you want to input in the array : ");

console.log("You must input " + numbEntries + " entries.")

while(i<=numbEntries){
    entriesArray.push(parseInt(prompt("Please add a number : ")));
    i++
}

console.log("Here is the original array : ");
console.log(entriesArray);

for(let entry of entriesArray){
    duplicateArray.push(entry);
}
console.log("Here is the duplicata : ");
console.log(duplicateArray);

console.log("Here is the bonus method slice : ");
bonus = duplicateArray.slice();
console.log(bonus);
