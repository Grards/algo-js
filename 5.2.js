// On Vscode : Do "node x.x.js" (exercise number) in the terminal to launch the console.

const prompt = require("prompt-sync")({
    sigint: true
});

// Exercise 5.2

// Create a function named randomizeCast(tvSerie) that will take as argument the data structure you defined in the previous exercise and return a list of the same cast but in a random order.

// Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask the user about a TV serie then display a randomized list of the previous cast that will form the new cast of your next serie.


/**
 * This function will randomize and return a list of actors who are choosen by the user under this code
 * @param {Object} tvSerie All the informations of the serie
 * @returns 
 */
function randomizeCast(tvSerie){
    let randomList = []
    let numOfRandoms = parseInt(prompt("How much actors do you want in your new cast ? (Max : " + tvSerie.castMembers.length + " ) : " ));
    if(tvSerie.castMembers.length>=numOfRandoms){
        while(numOfRandoms>0){
            randomList.push(tvSerie.castMembers[(Math.floor(Math.random() * (tvSerie.castMembers.length)))]);
            numOfRandoms--;
        }
        return randomList;
    }else{
        console.log("Error. Your max of casts is too high !");
    }
}

/**
 * This function fullfill the informations of the object : serieTv with user entries.
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
console.log("Here is the informations of your serie in a JSON file : ");
console.log(JSON.stringify(serieTv,null,3));

// Print a list of random actors choosen for the new cast
console.log("Here is your list for your new team of actors : " + randomizeCast(serieTv));