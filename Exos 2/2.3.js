// On Vscode : Do "node x.x.js" (exercise number) in the terminal to launch the console.

const prompt = require("prompt-sync")({
    sigint: true
});


// Exercise 2.3

// Display all even numbers between 1 and 100.

// Bonus: do two different versions. The first one should use while and make a loop that will execute 100 times. The second one should use for and make a loop that will execute 50 times.

let i = 1;
while(i <= 100){
    if((i%2) == 0){
        console.log(i);
    }
    i++;
}

for(x=0; x<=50; x+=2){
    console.log(x);
}