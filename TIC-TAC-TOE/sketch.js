
//local veriables
let board = [];
let size;
let player = "X";
let won = false;

function setup() {
  createCanvas(900, 900);

  size = width / 3;

  // Make the board empty
  for (let x = 0; x < 3; x++) {
    board[x] = [];

    for (let y = 0; y < 3; y++) {
      board[x][y] = "";
    }
  }
}

function draw() {
  background(33);

  drawLines();
  drawPieces();
  showWinner();
}



//functions
function drawLines() {
  stroke(255);
  strokeWeight(5);

  line(size, 0, size, height);
  line(size * 2, 0, size * 2, height);

  line(0, size, width, size);
  line(0, size * 2, width, size * 2);
}

function drawPieces() {
  textSize(100);
  textAlign(CENTER, CENTER);

  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      text(
        board[x][y],
        x * size + size / 2,
        y * size + size / 2
      );
    }
  }
}

function showWinner() {
  if (won) {
    textSize(60);
    text(player + " won!", width / 2, height / 2);
  }
}

function mousePressed() {
  if (won) {
    return;
  }

  let x = floor(mouseX / size);
  let y = floor(mouseY / size);

  if (x > 2 || y > 2) {
    return;
  }

  if (board[x][y] != "") {
    return;
  }

  board[x][y] = player;

  checkWin();

  if (won == false) {
    changePlayer();
  }
}

function changePlayer() {
  if (player == "X") {
    player = "O";
  } else {
    player = "X";
  }
}

function checkWin() {


  if (board[0][0] != "" &&
      board[0][0] == board[1][0] &&
      board[0][0] == board[2][0]) {
    won = true;
  }

  if (board[0][1] != "" &&
      board[0][1] == board[1][1] &&
      board[0][1] == board[2][1]) {
    won = true;
  }

  if (board[0][2] != "" &&
      board[0][2] == board[1][2] &&
      board[0][2] == board[2][2]) {
    won = true;
  }

  // Columns
  if (board[0][0] != "" &&
      board[0][0] == board[0][1] &&
      board[0][0] == board[0][2]) {
    won = true;
  }

  if (board[1][0] != "" &&
      board[1][0] == board[1][1] &&
      board[1][0] == board[1][2]) {
    won = true;
  }

  if (board[2][0] != "" &&
      board[2][0] == board[2][1] &&
      board[2][0] == board[2][2]) {
    won = true;
  }

  if (board[0][0] != "" &&
      board[0][0] == board[1][1] &&
      board[0][0] == board[2][2]) {
    won = true;
  }

  if (board[2][0] != "" &&
      board[2][0] == board[1][1] &&
      board[2][0] == board[0][2]) {
    won = true;
  }
}