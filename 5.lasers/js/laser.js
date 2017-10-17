function laser(x,y){
   this.oX = x; // the x origin point
   this.oY = y; // the y origin point

   this.show = function(){
      stroke(255, 0, 0); // Make the laserbean red
      strokeWeight(5); // Make the laserbeam 5px thick
      line(this.oX, this.oY, mouseX, mouseY); // Draw the laserbeam between the x/y origin point and the x/y position of the mouse
   }
}
