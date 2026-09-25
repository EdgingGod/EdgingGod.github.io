// zombie slayer
// 
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// local veriables 
let player, playerX, playerY, playerSpeed, zombieX, zombieY, zombieSize, playerHealth, turess;


async function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  player = await loadImage('player.png');
  playerX = windowHeight/2;
  playerY = windowHeight/2;
  zombieX = random(-600, 600);
  zombieY = random(-600, 600);
  zombieSize = random(50, 100);
  playerSpeed = 5;
  playerHealth = 3;
  truess = true;
}

function draw() {
  background(0);
  showingPlayer();
  movingPlayer();
  spawningZombies();
  playerDamge();
}

//functions
function showingPlayer(){
  imageMode(CENTER);
  image(player, playerX, playerY, player.width/4 , player.height/4);
}

function movingPlayer(){
  if (keyIsDown("w") || keyIsDown(UP_ARROW)) {
    playerY -= playerSpeed;
  }
  else if (keyIsDown("s") || keyIsDown(DOWN_ARROW)) {
    playerY += playerSpeed;
  }
  else if (keyIsDown("d") || keyIsDown(RIGHT_ARROW)) {
    playerX += playerSpeed;
  }
  else if (keyIsDown("a") || keyIsDown(LEFT_ARROW)) {
    playerX -= playerSpeed;
  }
}

function spawningZombies(){
  fill("green");
  while (truess ===  true){
    rectMode(CENTER);
    square(zombieX, zombieY, zombieSize);
  }
}

function playerDamge(){
  // if (playerX === zombieX && playerY === zombieY){
  //   playerHealth -= 1;
  // }
} 