// On Vscode : Do "node x.x.js" (exercise number) in the terminal to launch the console.

const prompt = require("prompt-sync")({
    sigint: true
});


// Exercise 3.2

// Write a program that will calculate the average value of a given array.

// Test it with the following arrays:

//     [1, 2, 3, 4, 5] => 3
//     [100, 101, 102] => 101


let numbArray1 = [1, 2, 3, 4, 5];
let numbArray2 = [100, 101, 102];
let total = 0;

for(let number1 of numbArray1){
    total += number1;
}

let averageValue = total/(numbArray1.length);
console.log(numbArray1);
console.log("La moyenne du premier tableau est : " + averageValue);
total= 0; // zeroing of the total for the new calculation.

for(let number2 of numbArray2){
    total += number2;
}

averageValue = total/(numbArray2.length);
console.log("La moyenne du deuxième tableau est : " + averageValue);