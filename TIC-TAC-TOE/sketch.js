// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const board = [];
let size;


async function setup() {
  size = width/3 ;
  createCanvas(900, 900);
  for (let x = 0; x < 3; x++){
    board[x] = [];
    for (let y =  0; y < 3; y++){
      board[x][y] = null;
    }
  }
  showBg();
}

function draw() {
  background(220);
  
}




// functions

function showBg(){
  background(33);
}