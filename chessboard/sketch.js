
function setup() {
  if(windowWidth > windowHeight){
    createCanvas(windowHeight, windowHeight);
  }
  else{
    createCanvas(windowWidth, windowWidth);
  }
}

function draw() {
  background(220);
  drawingrects();
}

function drawingrects() {
  let size = windowWidth/8;
  let iswhite = true;
  for (let x = 0; x < 8; x++){
    for (let y = 0; y<8; y++){
      if (iswhite){
        fill("white");
      }
      else{
        fill("black");
      }
      square(x*size, y*size , size);
      iswhite = !iswhite;
    }
    iswhite = !iswhite;
  } 
  
}