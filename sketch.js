function setup() {
  createCanvas(400, 400);
}

function draw() {

  stroke(255,0,0);
  fill("blue");

if(mouseIsPressed){
  rect(mouseX,mouseY,10,10);
}
}