
let grid = [
  [2,2,1,1,2,2,1,1,2,2],
  [2,1,1,1,1,1,1,1,1,2],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [2,1,1,1,1,1,1,1,1,2],
  [2,2,1,1,1,1,1,1,2,2],
  [2,2,2,1,1,1,1,2,2,2],
  [2,2,2,2,1,1,2,2,2,2],
  [2,2,2,2,2,2,2,2,2,2],
  [2,2,2,2,2,2,2,2,2,2]
];

let colored = [];
let squareSize = 45;
let selectedColor = 1;

function setup() {
  createCanvas(600, 600);

  for (let row = 0; row < grid.length; row++) {
    colored[row] = [];

    for (let col = 0; col < grid[row].length; col++) {
      colored[row][col] = 0;
    }
  }
}

function draw() {
  background(240);

  let startX = (width - grid[0].length * squareSize) / 2;
  let startY = (height - grid.length * squareSize) / 2;

  // Draw grid
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {

      let x = startX + col * squareSize;
      let y = startY + row * squareSize;

      if (colored[row][col] == 1) {
        fill("red");
      }
      else if (colored[row][col] == 2) {
        fill("blue");
      }
      else {
        fill(255);
      }

      stroke(0);
      rect(x, y, squareSize, squareSize);

      if (colored[row][col] == 0) {
        fill(0);
        textSize(18);
        textAlign(CENTER, CENTER);
        text(grid[row][col], x + squareSize/2, y + squareSize/2);
      }
    }
  }

  // Instructions
  fill(0);
  textSize(18);
  textAlign(CENTER);
  text("Press 1 for RED  |  Press 2 for BLUE", width/2, 45);
  text("Selected color: " + selectedColor, width/2, 570);
}

function keyPressed() {
  if (key == "1" || key == "2") {
    selectedColor = int(key);
  }
}

function mousePressed() {
  let startX = (width - grid[0].length * squareSize) / 2;
  let startY = (height - grid.length * squareSize) / 2;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {

      let x = startX + col * squareSize;
      let y = startY + row * squareSize;

      if (mouseX > x && mouseX < x + squareSize &&
          mouseY > y && mouseY < y + squareSize) {

        if (colored[row][col] == selectedColor) {
          colored[row][col] = 0;
        }
        else {
          colored[row][col] = selectedColor;
        }
      }
    }
  }
}
