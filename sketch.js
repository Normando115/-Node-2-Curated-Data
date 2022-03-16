let rotVar = 0;
let spinnerTime;
let frameCheck;
let result;

let img = [];

let Breakfast = ['Cereal', 'PBJ', 'Eggs and Bacon', 'Ramen', 'Try again', 'eat out'];
let Lunch = ['Ramen', 'Fried Rice', 'Spaghetti', 'Curry', 'make something new', 'Try again', 'eat out', 'Ubereats', 'ask someone else'];
let Dinner = ['Ramen', 'Fried Rice', 'Spaghetti', 'Curry', 'make something new', 'Try again', 'eat out', 'Ubereats', 'ask someone else'];

function preload() {
  for (var i = 0; i < 7; i++) {
    img[i] = loadImage("Assets/Food" + i + ".jpg");
  }
 }


function setup() {
  createCanvas(585,585);
  image(img[6], 40, 10, 110, 110);
  angleMode(DEGREES);
  frameRate(60);
  buttonSpin = createButton('Spin!');
  buttonSpin.parent('button-holder');
    buttonSpin.size(width/7,height/13);
  buttonSpin.position(width/1.25,height/1.1);
  buttonSpin.mousePressed(buttonPressed);
frameRate(30);
      

}

function draw() {
  //Spinner
  push();
  translate(width/2,height/2);
  fill(255);
  ellipse(0,0, width*0.75)
  fill(56, 222, 27);
  arc(0,0, width*0.75, height*0.75, 0 , 60);
  fill(23, 108, 212);
  arc(0,0, width*0.75, height*0.75, 60 , 120);
  fill(116, 20, 168);
  arc(0,0, width*0.75, height*0.75, 120 , 180);
  fill(204, 20, 189);
  arc(0,0, width*0.75, height*0.75, 180 , 240);
  fill(222, 9, 9);
  arc(0,0, width*0.75, height*0.75, 240 , 300);
  fill(242, 234, 68);
  arc(0,0, width*0.75, height*0.75, 300 , 360);
  pop();
  
  push();
  fill(50,60,20);
  noStroke();
  translate(width/2, height/2);
  rotate(rotVar);
  rectMode(CENTER);
  rect(0, 0, 20, 100);
  triangle(0,-60,-20,-40,20, -40)
  pop();
  fill(120,52,33);
  noStroke();
  rect(width/2,width/8,5,30)
  
  if (rotVar % 360 <= 60) {
    result = Breakfast[0]+ '(Red)';
    image(img[0], 40, 10, 110, 110);
  } else if (rotVar % 360 > 60 && rotVar % 360 <= 120) {
    result = Breakfast[1]+ '(Yellow)';
    image(img[1], 40, 10, 110, 110);
  } else if (rotVar % 360 > 120 && rotVar % 360 <= 180) {
    result = Breakfast[2]+ '(Green)';
    image(img[2], 40, 10, 110, 110);
  } else if (rotVar % 360 > 180 && rotVar % 360 <= 240) {
    result = Breakfast[3]+ '(Blue)';
    image(img[3], 40, 10, 110, 110);
  } else if (rotVar % 360 > 240 && rotVar % 360 <= 300) {
    result = Breakfast[4]+ '(Purple)';
    image(img[4], 40, 10, 110, 110);
  } else if (rotVar % 360 > 300 && rotVar % 360 <= 360) {
    result = Breakfast[5] + '(Violet)';
    image(img[5], 40, 10, 110, 110);
  }
  console.log(result);
  

  
  
}

function buttonPressed() {
  spinnerTime = int(random(2500,5000));
  frameCheck = millis() + spinnerTime;
  var myVar = setInterval(moveDial, 25);
  setTimeout(function(){ clearInterval(myVar); }, spinnerTime);
}

function moveDial() {
  if (millis() < (frameCheck*0.25)) {
    rotVar = rotVar + 15;
  } else if (millis() < (frameCheck*0.5)) {
    rotVar = rotVar + 10;
  } else if (millis() < (frameCheck*0.75)) {
    rotVar = rotVar + 5;
  } else if (millis() < (frameCheck)) {
    rotVar = rotVar + 2.5;
  }
  console.log(rotVar);
}

