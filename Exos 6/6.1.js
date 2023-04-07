// On Vscode : Do "node x.x.js" (exercise number) in the terminal to launch the console.

const prompt = require("prompt-sync")({
    sigint: true
});

// Exercise 6.1

// Create a class named Circle with attributes xPos, yPos and radius. Add a method named move(xOffset, yOffset) that will adjust the position of the circle. Add a getter accessor named surface that will return the surface of the circle.

// Test its method and accessors by modifying the values and checking if everything is consistent.

class Circle{
    constructor(xPos, yPos, radius){
        this.xPos = xPos,
        this.yPos = yPos,
        this.radius = radius
    }
    move(xOffset, yOffset){   
        this.xPos = xOffset;
        this.yPos = yOffset;
        return(this.xPos, this.yPos);
    }
    get surface(){
        const surface = Math.pow(this.radius,2)*Math.PI;
        return surface;
    }

}

let circle = new Circle(prompt("Add an abscissa position to the circle : "), prompt("Add and ordered position to the circle : "), prompt("Now, you must add a radius to your circle : "));

console.log("------------------------------------------------");
console.log("The position of your circle of is -> x:" + circle.xPos + ", y:" + circle.yPos);
console.log("The surface of the circle is : " + circle.surface);
console.log("------------------------------------------------");

const askMove = console.log("Do you want to modify the coordinates of your circle ? (y/n)");
    if(askMove = "y"){
        console.log(circle.move(prompt("Change the abscissa position of your circle : "), prompt("Change the ordered position of your circle : ")));
    }
