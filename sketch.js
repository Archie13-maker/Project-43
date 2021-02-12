
var scAngle, minAngle, hrAngle;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  translate(200,200);
  rotate(-90);

  hr= hour();
  min= minute();
  sec= second();
  
  strokeWeight(8);
  stroke("blue");
  noFill();

  scAngle=map(sec,0,60,0,360);
  arc(0,0,260,260,0,scAngle);

  push()
  rotate(scAngle);
  stroke("blue");
  line(0,0,100,0);
  pop();

  stroke(0,255,0);
  minAngle=map(min,0,60,0,360);
  arc(0,0,280,280,0,minAngle);

  push()
  rotate(minAngle);
  stroke(0,255,0);
  line(0,0,75,0);
  pop();

  stroke("red");
  hrAngle=map(hr %12,0,12,0,360);
  arc(0,0,300,300,0,hrAngle);

  push()
  rotate(hrAngle);
  stroke("red");
  line(0,0,50,0);
  pop();


  //fill(255);
  //noStroke();
 // text(hr+ ':'+ min+ ':'+ sec, 10,200);
  drawSprites();
}