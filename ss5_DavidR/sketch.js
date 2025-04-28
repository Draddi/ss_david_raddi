let r = 180;
let g = 50;
let b = 150;
let boatSail = 0;
const x = 400;
let sunColor = [200, 180, 0];
let lineXone = 0;
let lineYone = 0;
let fishA =250
let fishB =270
let fishC =285
let fishD =290
let fishE =100
let fishF =120
let fishG =135
let fishH =140
let fishI =460
let fishJ =480
let fishK =495
let fishL =500


function setup() {
  createCanvas(1000, 500);
}

function draw() {
  let sailX = mouseX + 80;

  // Background logic
  if (boatSail < x) {
    background(r, g, b);
  } else {
    background(0);
  }
 // amount of second runs.
  let s = millis() / 1000;

  // text location
  textAlign(LEFT, CENTER);
  textSize(10);
  textFont('Courier New');

  // Display time running
  text(`Time: ${nf(s, 1, 1)} seconds`, 5, 50, 90);
 
frameRate(15); 
 
  boatSail = mouseX;
  console.log(boatSail < x);
  
  
  // Sun drawing
  fill(sunColor);
    stroke(0)
  circle(250, 100, 100);
  fill(sunColor[0], sunColor[0] - 20, sunColor[2]);
  stroke(0)
  circle(250, 140, 80);
  fill(sunColor[0], sunColor[1] - 60, sunColor[2]);
  stroke(0)
  circle(250, 180, 60);
  fill(sunColor[0], sunColor[1] - 100, sunColor[2]);
  stroke(0)
  circle(250, 220, 40);
  fill(sunColor[0], sunColor[1] - 120, sunColor[2]);
  stroke(0)
  circle(250, 260, 20);

  // Water and boat
  fill(0, 0, 255);
  rect(0, 260, 1000, 1000);
  strokeWeight(5);
  stroke(0)
  line(0, 260, 1000, 260);
  fill(150, 110, 100);
  rect(mouseX, 300, 100, 10);
  strokeWeight(1);
  fill(255, 255, 255);
  triangle(mouseX, 300, sailX, 200, sailX, 250);
  strokeWeight(2);
  line(sailX, 250, sailX, 300);
  
  // Cloud loops
  for(var c=0; c< width; c=c+200){ 
  fill(255)
  stroke(255)  
  ellipse(c,50,100,50);}
  
  for(var v=100; v< width; v=v+200){ 
  fill(255)
  stroke(255)  
  ellipse(v,130,100,50);}
  

  // Fish
  triangle(fishA, 350, fishA, 330, fishB, 340);
  fill(255, 0, 0);
  stroke(0)
  ellipse(fishC, 340, 30, 15);
  fill(0);
  circle(fishD, 340, 5);


  
  triangle(fishE, 370, fishE, 350, fishF, 360);
  fill(255, 0, 0);
  ellipse(fishG, 360, 30, 15);
  fill(0);
  circle(fishH, 360, 5);

  triangle(fishI, 370, fishI, 350, fishJ, 360);
  fill(255, 0, 0);
  ellipse(fishK, 360, 30, 15);
  fill(0);
  circle(fishL, 360, 5);
  fishA = frameCount % width
  fishB= frameCount % width + 20
  fishC= frameCount % width + 35
  fishD= frameCount % width + 40
  fishE= frameCount % width -120
  fishF= frameCount % width -100
  fishG= frameCount % width -85
  fishH= frameCount % width -80
  fishI= frameCount % width + 200
  fishJ= frameCount % width + 220
  fishK= frameCount % width + 235
  fishL= frameCount % width + 240
  
  
  //shooting star
  stroke(255)
  line(lineXone, lineYone, lineXone + 30, lineYone - 30); 

 
lineXone = random(0, width);
lineYone = random(0, height/2); 
  fill(255)
  ellipse(50,50,100,50);
  
  
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    sunColor = [255, 255, 255];
  } else if (keyCode === DOWN_ARROW) {
    sunColor = [200, 180, 0];
  }
}
