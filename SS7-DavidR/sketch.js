let r = 180;
let g = 50;
let b = 150;
let boatSail = 0;
const x = 400;
let sunColor = [200, 180, 0];
let lineXone = 0;
let lineYone = 0;

var rockSize =[700,250,40,100]
let clouds = [];
let fish = []; // Array to hold our Fish objects


function setup() {
  createCanvas(1000, 500);
  frameRate(15);

  // Create multiple fish
  for (let i = 0; i < 5; i++) {
    fish.push(new Fish(random(width), random(330, 380))); // Create fish at random positions in the water
  }

  // Create clouds
  for (let c = 0; c < width; c += 200) {
    clouds.push({ x: c, y: 50 });
  }
  for (let v = 100; v < width; v += 200) {
    clouds.push({ x: v, y: 130 });
  }
}

function draw() {
  let sailX = mouseX + 80;
  let s = millis() / 1000;

  // Background logic
  if (boatSail < x) {
    background(r, g, b);
  } else {
    background(0);
  }

  // Display time running
  textAlign(LEFT, CENTER);
  textSize(10);
  textFont('Courier New');
  text(`Time: ${nf(s, 1, 1)} seconds`, 5, 50, 90);

  boatSail = mouseX;
  console.log(boatSail < x);

  // Sun drawing
  fill(sunColor);
  stroke(0);
  circle(250, 100, 100);
  fill(sunColor[0], sunColor[0] - 20, sunColor[2]);
  stroke(0);
  circle(250, 140, 80);
  fill(sunColor[0], sunColor[1] - 60, sunColor[2]);
  stroke(0);
  circle(250, 180, 60);
  fill(sunColor[0], sunColor[1] - 100, sunColor[2]);
  stroke(0);
  circle(250, 220, 40);
  fill(sunColor[0], sunColor[1] - 120, sunColor[2]);
  stroke(0);
  circle(250, 260, 20);

  //rocks
  fill(90, 70, 70);
  ellipse(700, 250, 40, 100);

  fill(90, 70, 70);
  ellipse(750, 250, rockSize[2], rockSize[3] - 40);

  fill(90, 70, 70);
  ellipse(730, 250, 30, 70);

  // Water and boat
  fill(0, 0, 255);
  rect(0, 260, 1000, 1000);
  strokeWeight(5);
  stroke(0);
  line(0, 260, 1000, 260);
  fill(150, 110, 100);
  rect(mouseX, 300, 100, 10);
  strokeWeight(1);
  fill(255, 255, 255);
  triangle(mouseX, 300, sailX, 200, sailX, 250);
  strokeWeight(2);
  line(sailX, 250, sailX, 300);

  // Cloud loops
  fill(255);
  stroke(255);
  for (let cloud of clouds) {
    ellipse(cloud.x, cloud.y, 100, 50);
  }

  // Display and update fish
  for (let i = 0; i < fish.length; i++) {
    fish[i].moveFish();
    fish[i].display();
  }

  //shooting star
  stroke(255);
  line(lineXone, lineYone, lineXone + 30, lineYone - 30);

  lineXone = random(0, width);
  lineYone = random(0, height / 2);
  fill(255);
  ellipse(50, 50, 100, 50);
}

class Fish {
	constructor(startX, startY) {
this.x = startX;
this.y = startY;
this.bodyColor = color(255, 0, 0)
this.speed = 2;
this.tailLength = 20;
this.finHeight = 20;
this.eyeSize = 5;
}
//Functions for fish
 	moveFish(){
this.x += this.speed;
if(this.x > width + this.tailLength){
	this.x = -this.tailLength; 
	}
}

display(){
	push();		//saves current drawing style settings
	translate(this.x, this.y);	//
	noStroke();

	//tail
	triangle(0, 0, 0, -this.finHeight, this.tailLength, -this.finHeight/2);
	fill(this.bodyColor);
	stroke(0);

	//Body
	ellipse(this.tailLength + this.finHeight/1.4, -this.finHeight/2, 30, 15);

	//Eye
	fill(0);
	circle(this.tailLength + this.finHeight, -this.finHeight/2, this.eyeSize);

	pop();
}
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    sunColor = [255, 255, 255];
  } else if (keyCode === DOWN_ARROW) {
    sunColor = [200, 180, 0];
  }
}





