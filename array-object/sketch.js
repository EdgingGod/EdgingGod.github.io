// Arrays and object notation
// Ali Mohamed
// oct/7
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Veriables
let playerX, playerY, zombie;
let playerSpeed = 5;
let lives = 3;
let playerdamge = false; 
const DAMGECOOLDOWN = 850;
let lastDamgeTime = 0;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  playerX = width/2;
  playerY = height/2;
  zombieX = random(windowWidth);
  zombieY = random(windowHeight);
  zombie = {
    x : random(windowWidth),
    y : random(windowHeight),
    w : random(40, 68),
    h : random(40, 60)
  };
  
}

function draw() {
  background(0);
  showPlayer();
  movingPlayer();
  spawningZombies();
  gettingDamge();
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
  for (let i = 0; i <= 10; i++){
    fill("green");
    rect(zombie.x, zombie.y, zombie.w, zombie.h);
  } 
}

function checkingDamge(){
  // console.log(collideRectRect(zombieX, zombieY, 50, 60, playerX, playerY, 40, 95));/
  playerdamge = collideRectRect(zombie.x, zombie.y, zombie.w, zombie.h, playerX, playerY, 40, 95);
  if (playerdamge){
    lives -= 1;
    console.log(lives);
    
  }
}

function gettingDamge(){
  // console.log(NOW);
  if (millis() - lastDamgeTime >= DAMGECOOLDOWN){
    lastDamgeTime = millis();
    checkingDamge();
  }
  
}
