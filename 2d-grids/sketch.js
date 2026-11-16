// Grid Demo
//learn 2d arrays

// if you are hard coding the grid
// let grid = [[1, 0, 1, 0],
//             [0, 1, 1, 0],
//             [1, 0, 0, 1],
//             [0, 1, 0, 1]];
// const SQUARE_DIMENSIONS = grid.length;

//if randomizing the grid
const SQUARE_DIMENSIONS = 10;
let grid;
let cellSize;
// let parottimage;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  //parottimage = await loadImage()
  if (width < height) {
    cellSize = width / SQUARE_DIMENSIONS;
  }
  else {
    cellSize = height / SQUARE_DIMENSIONS;
  }
  grid = (38, 48);
}

function draw() {
  background(220);
  showGrid();
}

function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);

  console.log(x, y);
  toggleCell(x, y);
}

function toggleCell(x, y) {
  if (grid[y][x] === 1) {
    grid[y][x] = 0;
  }
  else if (grid[y][x] === 0) {
    grid[y][x] = 1;
  }
}

function showGrid(){

}

function randomizeGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      if (random(100) < 50) {
        newGrid[y].push(0);
      }
      else {
        newGrid[y].push(1);
      }
    }
  }
  return newGrid;
}