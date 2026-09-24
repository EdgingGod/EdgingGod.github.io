// zombie slayer
// 
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// local veriables 
let mainplayer, x, y, playerSpeed, zombieX, zombieY, zombieSize;


async function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  mainplayer = await loadImage('mainplayer.png');
  x = windowWidth/2;
  y = windowHeight/2;
  zombieX = random(-windowWidth, windowWidth);
  zombieY = random(-windowHeight, windowWidth);
  zombieSize = random(50, 100);
  playerSpeed = 3;
}

function draw() {
  background(0);
  showingPlayer();
  movingPlayer();
  spawningZombies();
}

//functions
function showingPlayer(){
  imageMode(CENTER);
  image(mainplayer, x, y, mainplayer.width/5 , mainplayer.height/5);
}

function movingPlayer(){
  if (keyIsDown("w") || keyIsDown(UP_ARROW)) {
    y -= playerSpeed;
  }
  else if (keyIsDown("s") || keyIsDown(DOWN_ARROW)) {
    y += playerSpeed;
  }
  else if (keyIsDown("d") || keyIsDown(RIGHT_ARROW)) {
    x += playerSpeed;
  }
  else if (keyIsDown("a") || keyIsDown(LEFT_ARROW)) {
    x -= playerSpeed;
  }
}

function spawningZombies(){
  fill("green");
  square(zombieX, zombieY, zombieSize);
}

