function setup(){
	var canvas = createCanvas(640, 360);
	background(0);
}

function draw(){

   // Redrawing background at every frame. See what happens when you delete this line.
	background(0);

   // Setting ellipse color to white
	fill(255);

   // Drawing ellipse
	ellipse(mouseX, mouseY, 20, 20);
}
