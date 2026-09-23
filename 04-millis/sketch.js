// MIllis demo

let waitTime = 2000;
let lastswaptime = 0;
let state = "red";
async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  drawBack();
  // console.log(millis());
  swapstateifneeded()
}

function swapstateifneeded(){
  if(millis() > lastswaptime + waitTime){
    lastswaptime = millis();
    if(state === "red"){
      state = "black";
    }
    else if(state === "black"){
      state = "black";
    }
  }
}
function drawBack(){
  if (state === "black"){
    background("black");
  }
  else if(state === "red"){
    background("red");
  }
  
}