let snake;
let food;

function setup() {
   createCanvas(WITDH, HEIGHT);
   newGame();
}

function draw() {
   background("green");
   if(!snake.isDead){
      drawSnake();
   }else {
      newGame();
   }
}

function eatFood() {
   snake.length++;
   food.newFood();
}

function drawSnake() {
   // update every SNAKE_SPEED frame
   if(frameCount % SNAKE_SPEED === 0)
   {
      snake.update();
   }
   // setInterval(drawSnake, 50);
   snake.show();
   food.show();

   if(snake.head.x == food.x && snake.head.y == food.y){
      eatFood();
   }

   textSize(30);
   text("Score:" + snake.length, 0, 100);
}


function newGame() {
   snake = new Snake();
   food = new Food();
}

function keyPressed() {
   if (keyCode == UP_ARROW && snake.vel.y != 1) {
      snake.vel.y = -1;
      snake.vel.x = 0;
   } else if (keyCode == DOWN_ARROW && snake.vel.y != -1) {
      snake.vel.y = 1;
      snake.vel.x = 0;
   }  else if (keyCode == LEFT_ARROW && snake.vel.x != 1) {
      snake.vel.y = 0;
      snake.vel.x = -1;
   } else if (keyCode == RIGHT_ARROW && snake.vel.x != -1) {
      snake.vel.y = 0;
      snake.vel.x = 1;
   }
}

