// On Vscode : Do "node x.x.js" (exercise number) in the terminal to launch the console.

const prompt = require("prompt-sync")({
    sigint: true
});


// Exercise 5.1

// Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie:

//     Name
//     Production year
//     Names of the cast members (there can be as much as the user want)

// That function must gather all the data in a single object and return it. The data structure must be elegant.

// Create a program that use that function to generate a TV serie object and display it to the user in JSON format.



/**
 * This function fullfill ths informations of the object : serieTv with user entries.
 */
function askTvSerie(){
    let again = "";
    do{
        serieTv.castMembers.push(prompt("Please add an actor or an actress you like : "));  
        console.log("Your actual list of actors is : ");
        console.log(serieTv.castMembers);
        again = prompt("Do you want to continue to add actors to this list ? (y/n) : ")
    }while(again != "n");
}
// Our object : serieTv and his parameters.
let serieTv = {
    serieName : prompt("What is the name of your favorite serie ? : "),
    productionYear : prompt("What is its year of production ? : "),
    castMembers : []
}
//Call of the function askTvSerie
askTvSerie();

// Print the object in JSON format, with 3 spaces (indentation)
console.log(JSON.stringify(serieTv,null,3));