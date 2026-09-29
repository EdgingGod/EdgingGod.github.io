// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const BOARD = [];
let size;
let canvasWidth = 900;
let canvasHeight = 900;
const PLAYER = {
  x: 'x', o: "o"
};
let player = 'x';
async function setup() {
  createCanvas(canvasWidth, canvasHeight);
  size = canvasWidth/3;
  for (let x = 0; x < 3; x++){
    BOARD[x] = [];
    for (let y =  0; y < 3; y++){
      BOARD[x][y] = null;
    }
  }
  showBg();
}

function draw() {}

// functions

function showBg(){
  background(33);
  strokeWeight(5);
  stroke(225);
  for (let i = 1; i < 3; i++){
    line(i * size, 0, i * size, height);  
    line(0, i * size, width, i * size);
  }

  for (let x = 0; x < 3; x++){
 
    for (let y =  0; y < 3; y++){
      if (BOARD[x][y] === null) continue;
      text(BOARD[x][y], (x + 1) * (size / 2), (y + 1) * (size / 2));
    }
  }

}



