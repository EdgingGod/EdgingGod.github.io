//loading images and sound

let coinImg;
let coinSound;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  coinImg = await loadImage('coin.png');
  coinSound = await loadSound("coin.wav");
}

function draw() {
  background(0);

  image(coinImg, width/2, height/2);
}

function mousepressed(){
  coinSound.play();
}