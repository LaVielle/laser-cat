# laser-cat

## I - Getting started

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

## II - Setting up the sketch

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

## III - Importing and displaying an image

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

<!--  -->
