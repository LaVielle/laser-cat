# laser-cat

The goal of this tutorial is to create an interactive laser cat sketch, pretty much with the same look as the following image:

![Laser Cat](https://github.com/LaVielle/laser-cat/blob/master/other-files/laser-cat.jpeg)


## 1. Getting started

Create a new folder on your desktop or wherever you want. Let's call it `laser-cat`. While you're at it, create a subfolder and call it `js`.

Open your favorite code editor and create two new files:
* `index.html` -> save in your main project folder
* `sketch.js`  -> save in the `js` subfolder you just created

Write the basic layout of your html document in `index.html`. It should look like this:
```html
<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <title></title>
   </head>
   <body>

   </body>
</html>
```

In `sketch.js`, write the basic layout of your p5.js sketch:
```JavaScript
function setup(){

}

function draw(){

}
```

Then, download the p5.js library. Go to https://p5js.org/download/ and select p5.js.min
Place `p5.js.min` in your `js` folder.

Finally, link the JS files in `index.html`. Write the following link tags in the `<head>` of your HTML document:
```html
<script src="js/p5.min.js" charset="utf-8"></script>
<script src="js/sketch.js" charset="utf-8"></script>
```
Note: It is also important that you link to the p5 library before you link to your sketch. Since we are using p5 and its built-in functions, the browser needs to recognize them before we actually use them in our sketch.

## 2. Setting up the sketch

You are all set with your HTML for now, so head over to `sketch.js` to start configuring your drawing.

In side the `setup()` function, type the following command:
* `var canvas = createCanvas(640, 360);` - This will create a canvas element in `index.html` 640px wide and 360px tall.
* `background(0);` - This will set the background of the canvas to be black.

Save `sketch.js` and open `index.html` in your browser. You can now see a black box in the top left corner of the page. If you open the html inspector of your browser, you will see that a `<canvas>` element was added. This happens automatically when you call `createCanvas()`.

This is pretty boring however, so just to see a little animation, make a circle that follows your mouse. Type the following command in the `draw()` function to do just that:
```JavaScript
background(0); // Redraw the background at every frame. Try to see what happens when you delete this line.

fill(255); // Set circle color to white

ellipse(mouseX, mouseY, 20, 20);
```
The four parameters we gave are:
* x-position: whatever is the x-position of the mouse
* y-position: whatever is the y-position of the mouse
* width: 20px
* height: 20px

Save your file and then refresh your page in your browser, you will now see a little white ball following your mouse.

Your `sketch.js` file should now look like this:
```JavaScript
function setup(){
	var canvas = createCanvas(640, 360);
	background(0);
}

function draw(){
	background(0);
	fill(255);
	ellipse(mouseX, mouseY, 20, 20);
}
```

## 3. Importing and displaying an image

First, create a new subfolder in your main project folder to keep things clean and organized. Call it `assets`.
Download your favorite cat image and place it in the `assets` folder you just created.

Note: In this example, the image file is called `cat.jpg`, make sure to use the right file name when you reference your image.

Now go back to `sketch.js` and at the very top of your file, just before the `setup()` function, initialize a variable that will hold your image:
```JavaScript
var catImg;
```

Then, in the `setup()` function, load the image:
```JavaScript
catImg = loadImage('assets/cat.jpg');
```
You can now access your image via the `catImg` variable.

Go to the `draw()` function to display the cat:
```JavaScript
image(catImg, 0, 0);
```
The three parameters we gave are:
* name of the variable containing the image file
* x-position of the image
* y-position of the image

Note: There are two additional and optional parameter to the `image()` function:
* width resize
* height resize

If you try to refresh your browser now, you will not see the image and you will notice an error in the console saying that the image file is inaccessible for security reasons. We run into this problem because we are running our project locally. To go around this, we must run a local server. There are various ways of doing this explained here: https://github.com/processing/p5.js/wiki/Local-server

If your local server is running with Python, visit `http://localhost:8000`. If your local server is running with Node.js, visit `http://localhost:8080`.

You should now see the cat image appearing inside your canvas when you refresh your browser.

Note: If you do not see the white ball that you were drawing before, it is because you are drawing the cat ***on top*** of it.
To make sure this does not happen, you commands should be given in the correct order, like in the following:
```JavaScript
var catImg;

function setup(){
	var canvas = createCanvas(640, 360);
	background(0);
	catImg = loadImage("assets/cat.jpg");
}

function draw(){
	background(0);
	image(catImg, 0, 0);
	fill(255);
	ellipse(mouseX, mouseY, 20, 20);
}
```

## 4. Placing eyes

Before drawing lasers, you want to be able to place a red dot where the eyes are (or wherever you want) when you click your mouse. Eyes will not only show on the canvas as red dots, they will also hold origin point information that you'll use later to draw lasers. Let's create an `eye` object to handle all that.

In your `js` subfolder, create a new file and call it `eye.js`. Then, type in the object with an `x` and a `y` parameter:
```JavaScript
function eye(x, y){
   this.posX = x; // The eye's x position will be equal to whatever we feed the object as x parameter.
   this.posY = y; // y position will equal whatever we feed the object as y parameter.
   this.r = 10; // The radius of the eye will be 10px
}
```

You will then want to display the eye, so give the object a method:
```JavaScript
this.show = function(){
   fill(255, 0, 0); // Make the eye red.
   noStroke(); // No stroke (or border)
   ellipse(this.posX, this.posY, this.r*2, this.r*2); // Draw an ellipse at the object's x and y position.
}
```

Back to `sketch.js`, you're gonna want to do three things:
First, declare an array where you'll store your eye objects. Do this before the `setup()` function.
```JavaScript
var eyes = [];
```
Secondly, write a `placePoint()` function to create an eye and add it to the `eyes` array each time the mouse is pressed -we cannot use the P5 `mousePressed()` function, which would let us place eyes outside of the canvas. Write this function at the end of your code, below `draw()`:
```JavaScript
function placePoint(){
   eyes.push(new eye(mouseX, mouseY)); // Create a new element in the eyes array: new eye with mouseX/Y as x/y position
   console.log("created eye"); // Log that an eye was created.
}
```
You'll also need to call `placePoint()` in `setup()`:
```JavaScript
canvas.mousePressed(placePoint);
```

Thirdly, in the `draw()` function, you will loop through that `eyes` arrays and draw each object it contains.
```JavaScript
for (var i = 0; i < eyes.length; i++){
   eyes[i].show(); // call the show() method for each i-th element in the eyes array
}
```

Of course, don't forget to link `eye.js` in the HTML file, after `p5.min.js` and before `sketch.js`:
```html
<script src="js/eye.js" charset="utf-8"></script>
```

Save all your files, kill your local server (ctrl + c) and restart it. You should now be able to place red dots where you click your mouse!

## 5. Drawing lasers

Just like how you created an eye object, you will create a laser object. In your `js` subfolder, create and save a new file called `laser.js`. Type in:
```JavaScript
function laser(x, y){
   this.oX = x; // the x origin point
   this.oY = y; // the y origin point
}
```

The laser too will need a `show()` method to be displayed:
```JavaScript
this.show = function(){
   stroke(255, 0, 0); // Make the laserbean red
   strokeWeight(5); // Make the laserbeam 5px thick
   line(this.oX, this.oY, mouseX, mouseY); // Draw the laserbeam between the x/y origin point and the x/y position of the mouse
}
```

Then, back to `sketch.js`. Declare a `lasers` array:
```JavaScript
var lasers = [];
```
In the `placePoint()` function, add these two lines:
```JavaScript
lasers.push(new laser(mouseX, mouseY)); // Adding new laser object to the lasers array
console.log("created laser"); // Log that a laser was created
```
In the `draw()` function, write another for loop:
```JavaScript
for (var i = 0; i < lasers.lenght; i++){
   lasers[i].show(); // call the show() method for each i-th element in the lasers array
}
```

Link `laser.js` in `index.html`:
```html
<script src="js/laser.js" charset="utf-8"></script>
```

Save all your files and restart your local server. Laser beams should now follow your mouse after you place eyes!

![Laser Cat](https://github.com/LaVielle/laser-cat/blob/master/other-files/laser-cat.gif)
