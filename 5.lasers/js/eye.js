function eye(x,y){
   this.posX = x;
   this.posY = y;
   this.r = 10;

   this.show = function(){
      fill(255, 0, 0);
      noStroke();
      ellipse(this.posX, this.posY, this.r*2, this.r*2);
   }
}
