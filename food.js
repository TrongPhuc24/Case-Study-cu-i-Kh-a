class Food{
   constructor () {
      this.newFood();
   }

   newFood(){
      this.x = Math.floor(random(WITDH));
      this.y = Math.floor(random(HEIGHT));

      this.x = Math.floor(this.x / GRID_SIZE) * GRID_SIZE;
      this.y = Math.floor(this.y / GRID_SIZE) * GRID_SIZE;
   }
   
   // Vẽ thức ăn
   show(){
      fill(255, 40, 0);
      rect(this.x, this.y, GRID_SIZE, GRID_SIZE);
   }
}