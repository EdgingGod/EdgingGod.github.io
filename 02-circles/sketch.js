let a = true;
async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // background(220);
  fill(random(0, 255), random(0, 255), random(0, 255));
  circle(random(0, width), random(0, height), random(60, 200));
}
