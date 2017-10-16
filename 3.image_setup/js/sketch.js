// Declaring catImg variable
var catImg;

function setup(){
	var canvas = createCanvas(640, 360);
	background(0);

   // Loading image
   catImg = loadImage('assets/cat.jpg');
}

function draw(){
	background(0);

   // Placing catImg at top left corner of the canvas
   image(catImg, 0, 0);

   // image() can take two addtional parameter to resize the image
   // image(catImg, 0, 0, catImg.width/2, catImg.height/2); // Uncomment this line and see what happens

   // Still drawing the ellipse *above* the cat image
	fill(255);
	ellipse(mouseX, mouseY, 20, 20);
}
