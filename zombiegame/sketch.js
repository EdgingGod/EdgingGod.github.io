// zombie slayer
// 
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// local veriables 
let mainplayer, x, y;


async function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke()
  rectmode(CENTER)
  mainplayer = await loadImage('mainplayer.png')
  x = windowWidth/2;
  y = windowHeight/2;
}

function draw() {
  background(220);
  Image(mainplayer, x, y)
}
