// Arrays and object notation
// Ali Mohamed
// oct/7
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Veriables
let playerX, playerY, zombieX, zombieY;
let playerSpeed = 3;
let lives = 3;
let playerdamge = false; 
const DAMGECOOLDOWN = 1000;


async function setup() {
  createCanvas(windowWidth, windowHeight);
  playerX = width/2;
  playerY = height/2;
  zombieX = random(-windowWidth + 15, windowWidth + 15);
  zombieY = random(-windowHeight + 15, windowHeight + 15);
}

function draw() {
  background(0);
  showPlayer();
  movingPlayer();
  spawningZombies();
  checkingDamge();
  //damgeCooldown();
}


//Functions

function showPlayer(){
  fill("red");
  rect(playerX, playerY, 40, 95);
  rectMode(CENTER);
}

function movingPlayer(){
  if (keyIsDown("w") || keyIsDown(UP_ARROW)) {
    playerY -= playerSpeed;
  }
  if (keyIsDown("s") || keyIsDown(DOWN_ARROW)) {
    playerY += playerSpeed;
  }
  if (keyIsDown("d") || keyIsDown(RIGHT_ARROW)) {
    playerX += playerSpeed;
  }
  if (keyIsDown("a") || keyIsDown(LEFT_ARROW)) {
    playerX -= playerSpeed;
  }
}

function spawningZombies(){
  fill("green");
  while (lives >= 0){
    rect(zombieX, zombieY, 50, 60);
  }

}

function checkingDamge(){
  playerdamge = collideRectRect(zombieX, zombieY, 50, 60, playerX, playerY, 40, 95);
  if (playerdamge){
    lives -= 1;
    console.log(lives);
  }
}

// function damgeCooldown(){
//   let NOW = millis();
//   if (NOW - DAMGECOOLDOWN >= 5000){
//     checkingDamge();
//   }
//   NOW = millis();
// }