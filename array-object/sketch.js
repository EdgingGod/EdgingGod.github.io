// Arrays and object notation
// Ali Mohamed
// oct/7
//used this example to help with zombies following a player, gun following mouse,
//https://editor.p5js.org/p5/sketches/Interaction%3A_Follow3?
//https://www.youtube.com/watch?v=iVM7PxTx8Lc&t=228s 
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Veriables
let playerX, playerY;
let zombie = [];
let bullet;
let playerSpeed = 5;
let lives = 3;
let playerdamge = false; 
const DAMGECOOLDOWN = 850;
let lastDamgeTime = 0;
let maxZombies = 2; 
let zombieSpawnDelay = 1000;
let lastspawnTime = 0;



async function setup() {
  createCanvas(windowWidth, windowHeight);
  playerX = width/2;
  playerY = height/2;
}

function draw() {
  background(0);
  showPlayer();
  showingGun();
  movingPlayer();
  spawningZombies();
  gettingDamge();
  movingZombies();
  displayingLives();
  shoting();

  gameOver();
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
  if (zombie.length < maxZombies && millis() - lastspawnTime >= zombieSpawnDelay) {
    //used array
    zombie.push({
      x: random(width),
      y: random(height),
      w: random(40, 68),
      h: random(40, 60)
    });

    lastSpawnTime = millis();
  }
  for (let i = 0; i < zombie.length; i++) {
    fill("green");
    rect(zombie[i].x, zombie[i].y, zombie[i].w, zombie[i].h);
  }
}

function checkingDamge(){
  // console.log(collideRectRect(zombieX, zombieY, 50, 60, playerX, playerY, 40, 95));/
  for (let i = 0; i < zombie.length; i++) {
    playerdamge = collideRectRect(zombie[i].x, zombie[i].y, zombie[i].w, zombie[i].h, playerX, playerY, 40, 95);
    if (playerdamge) {
      lives -= 1;
      console.log(lives);
      return;
    }
  }
}

function gettingDamge(){
  if (millis() - lastDamgeTime >= DAMGECOOLDOWN){
    lastDamgeTime = millis();
    checkingDamge();
  }
  
}

function movingZombies() {
  for (let i = 0; i < zombie.length; i++) {
    let angle = atan2(playerY - zombie[i].y, playerX - zombie[i].x);

    zombie[i].x += cos(angle) * 2;
    zombie[i].y += sin(angle) * 2;
  }
}

function displayingLives(){
  fill("white");
  textSize(25);
  text("lives: " + lives, 20, 30);
}
function gameOver(){
  if (lives <= 0) {
    background("black");
    fill("red");
    textSize(80);
    textAlign(CENTER, CENTER);
    text("GAME OVER", width / 2, height / 2);
    noLoop();
  } 
}

function showingGun(){
  let angle = atan2(mouseY - playerY, mouseX - playerX);
  stroke("blue");
  strokeWeight(10);
  line(playerX, playerY, playerX + cos(angle) * 50, playerY + sin(angle) * 50);
  noStroke();
}

function spawnBullets(){
  bullets = {
    mX: mouseX,
    mY: mouseY,
    y: playerY,
    size: 20,
    speed: 10
  };
}