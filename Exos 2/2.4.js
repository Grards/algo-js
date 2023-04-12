// On Vscode : Do "node x.x.js" (exercise number) in the terminal to launch the console.

const prompt = require("prompt-sync")({
    sigint: true
});

// Exercise 2.4

// Count from 1 to 100. For every even number display the result of their division by 2. For every odd number display the result of their multiplication by 3.

for(i=1; i<=100; i++){
    if(i%2==0){
        console.log("La valeur de i est paire => " + i + " / 2 = " + i/2);
    }else{
        console.log("La valeur de i est impaire => " + i + " * 3 = " + i*3);
    }
}