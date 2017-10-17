var catImg;

// Declaring array that will contain eye objects
var eyes = [];

function setup(){
	var canvas = createCanvas(640, 360);
	background(0);

   catImg = loadImage('assets/cat.jpg');
}

function draw(){
	background(0);

   image(catImg, 0, 0);

	for (var i = 0; i < eyes.length; i++){
	   eyes[i].show(); // call the show() method for each i-th element in the eyes array
	}

}

function mousePressed(){
   eyes.push(new eye(mouseX, mouseY)); // Create a new element in the eyes array: new eye with mouseX/Y as x/y position
   console.log("created eye"); // Log that an eye was created.
}
