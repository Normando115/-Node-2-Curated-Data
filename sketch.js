let rotVar = 0;
let spinnerTime;
let frameCheck;
let result;
//image array
let brk = [];
let lch = [];
let dnr = []
let dnrButton = false;
let lnchButton = false;
let brkButton = false;
let myFont;
let wheel;


let Breakfast = ['Try Again', 'Eat Out', 'Cereal', 'PBJ', 'Eggs and Bacon', 'Ramen'];
let Lunch = ['Ramen', 'Fried Rice', 'Spaghetti', 'Curry', ' something new', 'Try again', 'eat out', 'Ubereats', 'ask someone else'];
let Dinner = ['Ramen', 'Fried Rice', 'Spaghetti', 'Curry', 'something new', 'Try again', 'eat out', 'Ubereats', 'ask someone else'];
//visible = false;

words = [Breakfast, Lunch, Dinner];
function preload() {
  myFont = loadFont('Assets/AnnieUseYourTelescope-Regular.ttf');
  for (var i = 0; i < 8; i++) {
    brk[i] = loadImage("Assets/Food" + i + ".jpg");
  }
 //   for (var i = 0; i < 7; i++) {
   // lch[i] = loadImage("Assets/Food1" + i + ".jpg");
  //}
   // for (var i = 0; i < 7; i++) {
    //dnr[i] = loadImage("Assets/Food2" + i + ".jpg");
 // }

 }
console.log(words);

function setup() {
    song = loadSound('assets/prizewheel.wav');
let canvas = createCanvas(windowWidth*.989, (windowWidth/2));
canvas.parent('myCanvas');
//  createCanvas(585,585);
  image(brk[0], width/3, height/3, width/2,height/3);
  angleMode(DEGREES);
  frameRate(60);
  textFont(myFont);
//Buttons
  buttonSpin = createButton('Spin!');
  buttonSpin.parent('button-holder');
  buttonSpin.size(width*0.1,height*0.05);
  buttonSpin.position(width*0.75,height*0.85);
  buttonSpin.mousePressed(SpinButton);

//    buttonBreakfast = createButton('Breakfast');
//  buttonBreakfast.parent('button-holder');
//    buttonBreakfast.size(width*0.05,height*0.025);
//  buttonBreakfast.position(width*0.2,height*0.875);
//  buttonBreakfast.mousePressed(BreakfastButton);
//  buttonLunch.mousePressed(LunchButton);
//      buttonDinner = createButton('Dinner');
//  buttonDinner.parent('button-holder');
//    buttonDinner.size(width*0.05,height*0.025);
//  buttonDinner.position(width*0.05,height*0.875);
//  buttonDinner.mousePressed(DinnerButton);

}
function draw() {
  background(0);

//Text
push();
fill(255);
textSize(48);
text('Food Randomizer', width/2.5, height*0.075);
pop();


  //Spinner
  push();
  translate(width/3,height/2.25);
  fill(255);
  ellipse(0,0, width/3)
  fill(56, 222, 27);
  arc(0,0, width/3, height/1.5, 0 , 60);
  fill(23, 108, 212);
  arc(0,0, width/3, height/1.5, 60 , 120);
  fill(116, 20, 168);
  arc(0,0, width/3, height/1.5, 120 , 180);
  fill(204, 20, 189);
  arc(0,0, width/3, height/1.5, 180 , 240);
  fill(222, 9, 9);
  arc(0,0, width/3, height/1.5, 240 , 300);
  fill(234, 247, 54);
  arc(0,0, width/3, height/1.5, 300 , 360);
  pop();

  push();
  fill(50,60,20);
  noStroke();
  translate(width/3,height/2.25);
  rotate(rotVar);
  rectMode(CENTER);
  rect(0, 0, 20, 100);
  triangle(0,-60,-20,-40,20, -40)
  pop();
  push();
  textSize(50)
  translate(width/3, height/3) ;
  //  image(brk[5], 40, 10, 110, 110);
    pop();

//fontSize();
  breakfastWords();//
  //lunchWords();
//dinnerWords();
push();
fill(255);
textSize(32);
textAlign(CENTER);
text(result,width*0.775, height*0.75);
pop();

//dinner
if(BreakfastButton){

if (rotVar % 360 <= 60) {
  result = Breakfast[4]+ '(Red)';
  image(brk[0], width*0.65, height*0.15, width*0.25, height*0.5);
} else if (rotVar % 360 > 60 && rotVar % 360 <= 120) {
  result = Breakfast[5]+ '(Yellow)';
  image(brk[1], width*0.65, height*0.15, width*0.25, height*0.5);
} else if (rotVar % 360 > 120 && rotVar % 360 <= 180) {
  result = Breakfast[0]+ '(Green)';

  image(brk[2], width*0.65, height*0.15, width*0.25, height*0.5);
} else if (rotVar % 360 > 180 && rotVar % 360 <= 240) {
  result = Breakfast[1]+ '(Blue)';

  image(brk[3], width*0.65, height*0.15, width*0.25, height*0.5);
} else if (rotVar % 360 > 250 && rotVar % 360 <= 300) {
  result = Breakfast[2]+ '(Purple)';

  image(brk[4], width*0.65, height*0.15, width*0.25, height*0.5);
} else if (rotVar % 360 > 300 && rotVar % 360 <= 360) {
  result = Breakfast[3] + '(Violet)';

  image(brk[5], width*0.65, height*0.15, width*0.25, height*0.5);
}
    console.log(result);
}
}
//break fast
function BreakfastButton() {
breakfastWords();

  //if blank = true (){}
}
// lunch
function LunchButton() {
lunchWords();
}
//dinner
function DinnerButton() {
  let dnrButton = true;
  let lnchButton = false;
  let brkButton = false;
dinnerWords();
}
//spin
function SpinButton() {
  spinnerTime = int(random(3000,5000));
  frameCheck = millis();
  var myVar = setInterval(moveDial, 25);
  setTimeout(function(){ clearInterval(myVar); }, spinnerTime);
    song.play();

}


function moveDial() {
  if (millis() < (frameCheck+(spinnerTime*0.25))) {
    rotVar = rotVar + 15;
  } else if (millis() < (frameCheck+(spinnerTime*0.50))) {
    rotVar = rotVar + 10;
  } else if (millis() < (frameCheck+(spinnerTime*0.75))) {
    rotVar = rotVar + 5;
  } else if (millis() < (frameCheck+(spinnerTime))) {
    rotVar = rotVar + 2.5;
  }
  console.log(rotVar);

      if (rotVar > 360){
      rotVar = rotVar - 360;
    }
}

//text
function breakfastWords(){
textSize(24);
  push();
  translate(width/3,height/2.25);
rotate(30);
  text(Breakfast[0], 100 , 0);
  pop();
  push();
  translate(width/3,height/2.25);
rotate(90);
  text(Breakfast[1], 100 , 0);
  pop();
  push();
  translate(width/3,height/2.25);
rotate(150);
  text(Breakfast[2], 100 , 0);
  pop();
  push();
  translate(width/3,height/2.25);
rotate(210);
  text(Breakfast[3], 100 , 0);
  pop();
  push();
  translate(width/3,height/2.25);
rotate(270);
  text(Breakfast[4], 100 , 0);
  pop();
  push();
  translate(width/3,height/2.25);
rotate(330);
  text(Breakfast[5], 100 , 0);
  pop();

}

function lunchWords(){
  push();
  translate(width/3,height/2.25);
rotate(30);
  text(Lunch[0], 100 , 0);
  pop();
  push();
  translate(width/3,height/2.25);
rotate(90);
  text(Lunch[1], 100 , 0);
  pop();
  push();
  translate(width/3,height/2.25);
rotate(150);
  text(Lunch[2], 100 , 0);
  pop();
  push();
  translate(width/3,height/2.25);
rotate(210);
  text(Lunch[3], 100 , 0);
  pop();
  push();
  translate(width/3,height/2.25);
rotate(270);
  text(Lunch[4], 100 , 0);
  pop();
  push();
  translate(width/3,height/2.25);
rotate(330);
  text(Lunch[5], 100 , 0);
  pop();
}
function dinnerWords(){
  push();
  translate(width/3,height/2.25);
rotate(30);
  text(Dinner[0], 100 , 0);
  pop();
  push();
  translate(width/3,height/2.25);
rotate(90);
  text(Dinner[1], 100 , 0);
  pop();
  push();
  translate(width/3,height/2.25);
rotate(150);
  text(Dinner[2], 100 , 0);
  pop();
  push();
  translate(width/3,height/2.25);
rotate(210);
  text(Dinner[3], 100 , 0);
  pop();
  push();
  translate(width/3,height/2.25);
rotate(270);
  text(Dinner[4], 100 , 0);
  pop();
  push();
  translate(width/3,height/2.25);
rotate(330);
  text(Dinner[5], 100 , 0);
  pop();
}
