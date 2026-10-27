// Arrays and object notation
// zombie slayer
// Ali Mohamed
// oct/7
//used this example to help with zombies following a player, gun following mouse,
//https://editor.p5js.org/p5/sketches/Interaction%3A_Follow3?
//https://www.youtube.com/watch?v=iVM7PxTx8Lc&t=228s 
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// learned to use the tan function  and angles to make the gun trgctory and the gun. 


//Veriables
let playerX, playerY;
let zombie = [];
let bullets = [];
let bulletSpeed = 8;
let playerSpeed = 5;
let lives = 3;
let score = 0;
let playerdamge = false; 
const DAMGECOOLDOWN = 850;
let lastDamgeTime = 0;
let maxZombies = 5; 
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
  checkingZombietDamage();
  showingScore();
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


function showingGun(){
  let angle = atan2(mouseY - playerY, mouseX - playerX);
  stroke("blue");
  strokeWeight(10);
  line(playerX, playerY, playerX + cos(angle) * 50, playerY + sin(angle) * 50);
  noStroke();
}

function shoting() {
  for (let i = 0; i < bullets.length; i++) {
    fill("yellow");
    noStroke();

    circle(bullets[i].x, bullets[i].y, 8);

    bullets[i].x += cos(bullets[i].angle) * bulletSpeed;
    bullets[i].y += sin(bullets[i].angle) * bulletSpeed;
  }
}

function mousePressed() {
  let angle = atan2(mouseY - playerY, mouseX - playerX);

  bullets.push({
    x: playerX + cos(angle) * 50,
    y: playerY + sin(angle) * 50,
    angle: angle
  });
}

function checkingZombietDamage() {
  for (let i = bullets.length - 1; i >= 0; i--) {
    for (let j = zombie.length - 1; j >= 0; j--) {

      if (collideRectCircle(
        zombie[j].x - zombie[j].w / 2,
        zombie[j].y - zombie[j].h / 2,
        zombie[j].w,
        zombie[j].h,
        bullets[i].x,
        bullets[i].y,
        8
      )) {
       score += 1;
       zombie.splice(j, 1);
       bullets.splice(i, 1);
        break;
      }
    }
  }
}

function showingScore() {
  fill("white");
  textSize(25);
  text("Score: " + score, 20, 60);
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