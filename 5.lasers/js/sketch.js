var catImg;

var eyes = [];
// Declaring array that will contain laser objects
var lasers = [];

function setup(){
	var canvas = createCanvas(640, 360);
	background(0);

   catImg = loadImage('assets/cat.jpg');
}

function draw(){
	background(0);

   image(catImg, 0, 0);

	for (var i = 0; i < eyes.length; i++){
	   eyes[i].show();
	}
	for (var i = 0; i < lasers.length; i++){
		lasers[i].show(); // call the show() method for each i-th element in the lasers array
	}

}

function mousePressed(){
   eyes.push(new eye(mouseX, mouseY));
   console.log("created eye");
	lasers.push(new laser(mouseX, mouseY)); // Adding new laser object to the lasers array
	console.log("created laser"); // Log that a laser was created
}
