// Perlin noise

let time = 0;
let deltaTime = 0.015;
const TIME_OFF_SET = 10000; 

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);


  let x = noise(time) * width;
  let y = noise(time + TIME_OFF_SET) * height;
  fill("black");
  circle(x, y, 50);

  time += deltaTime;
}
