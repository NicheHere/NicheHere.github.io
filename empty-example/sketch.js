function setup() {
  // put setup code here
  createCanvas(displayWidth,displayHeight);
  background('gray');
  noCursor()
  
  rectMode(RADIUS);
  fill('white');
  rect(2,1,displayWidth,300);
  rectMode(CENTER);
}

function draw() {
  // put drawing code here
  if(mouseIsPressed){
    ellipse(mouseX,mouseY,10,10);
    fill('gray');
    strokeWeight(0);
  }
  else{ 
    circle(mouseX,mouseY,10);
    fill('white');
    strokeWeight(1)
  }
}