let rotVar = 0;
let spinnerTime;
let frameCheck;
let result;
//image array
let brk = [];
let lch = [];
let dnr = []
let poop = false;

let Breakfast = ['Try Again', 'Eat Out', 'Cereal', 'PBJ', 'Eggs and Bacon', 'Ramen'];
let Lunch = ['Ramen', 'Fried Rice', 'Spaghetti', 'Curry', ' something new', 'Try again', 'eat out', 'Ubereats', 'ask someone else'];
let Dinner = ['Ramen', 'Fried Rice', 'Spaghetti', 'Curry', 'something new', 'Try again', 'eat out', 'Ubereats', 'ask someone else'];
//visible = false;
function preload() {
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


function setup() {
  createCanvas(585,585);
  image(brk[0], 40, 10, 110, 110);
  angleMode(DEGREES);
  frameRate(60);
//Buttons
  buttonSpin = createButton('Spin!');
  buttonSpin.parent('button-holder');
  buttonSpin.size(width/7,height/13);
  buttonSpin.position(width/1.25,height/1.1);
  buttonSpin.mousePressed(buttonPressed4);

    buttonBreakfast = createButton('Breakfast');
  buttonBreakfast.parent('button-holder');
    buttonBreakfast.size(width/7,height/13);
  buttonBreakfast.position(width/6,height/1.1);
  buttonBreakfast.mousePressed(buttonPressed1);
      buttonLunch = createButton('Lunch');
  buttonLunch.parent('button-holder');
    buttonLunch.size(width/7,height/13);
  buttonLunch.position(width/3,height/1.1);
  buttonLunch.mousePressed(buttonPressed2);
      buttonDinner = createButton('Dinner');
  buttonDinner.parent('button-holder');
    buttonDinner.size(width/7,height/13);
  buttonDinner.position(width/2,height/1.1);
  buttonDinner.mousePressed(buttonPressed3);

}
function draw() {
  background(255);
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
  fill(234, 247, 54);
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
  push();
  textSize(50)
    image(brk[5], 40, 10, 110, 110);
    pop();
  breakfastWords();//
  //lunchWords();
//dinnerWords();
text(result,420,90);

//dinner
  if(buttonPressed3){



  if (rotVar % 360 <= 70) {
    result = Breakfast[4]+ '(Red)';
    image(brk[0], 40, 10, 110, 110);
  } else if (rotVar % 360 > 70 && rotVar % 360 <= 130) {
    result = Breakfast[5]+ '(Yellow)';
    image(brk[1], 40, 10, 110, 110);
  } else if (rotVar % 360 > 130 && rotVar % 360 <= 190) {
    result = Breakfast[0]+ '(Green)';

    image(brk[2], 40, 10, 110, 110);
  } else if (rotVar % 360 > 190 && rotVar % 360 <= 250) {
    result = Breakfast[1]+ '(Blue)';

    image(brk[3], 40, 10, 110, 110);
  } else if (rotVar % 360 > 250 && rotVar % 360 <= 310) {
    result = Breakfast[2]+ '(Purple)';

    image(brk[4], 40, 10, 110, 110);
  } else if (rotVar % 360 > 310 && rotVar % 360 <= 370) {
    result = Breakfast[3] + '(Violet)';

    image(brk[5], 40, 10, 110, 110);
  }
      console.log(result);
  }


}
//break fast
function buttonPressed1() {
  spinnerTime = int(random(2500,5000));
  frameCheck = millis() + spinnerTime;
  var myVar = setInterval(moveDial, 25);
  setTimeout(function(){ clearInterval(myVar); }, spinnerTime);
  //if blank = true (){}
}
// lunch
function buttonPressed2() {
  spinnerTime = int(random(2500,5000));
  frameCheck = millis() + spinnerTime;
  var myVar = setInterval(moveDial, 25);
  setTimeout(function(){ clearInterval(myVar); }, spinnerTime);
}
//dinner
function buttonPressed3() {
  spinnerTime = int(random(2500,5000));
  frameCheck = millis() + spinnerTime;
  var myVar = setInterval(moveDial, 25);
  setTimeout(function(){ clearInterval(myVar); }, spinnerTime);
}
//spin
function buttonPressed4() {
  spinnerTime = int(random(2500,5000));
  frameCheck = millis();
  var myVar = setInterval(moveDial, 25);
  setTimeout(function(){ clearInterval(myVar); }, spinnerTime);
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
  push();
  translate(width/2,height/2);
rotate(30);
  text(Breakfast[0], 100 , 0);
  pop();
  push();
  translate(width/2,height/2);
rotate(90);
  text(Breakfast[1], 100 , 0);
  pop();
  push();
  translate(width/2,height/2);
rotate(150);
  text(Breakfast[2], 100 , 0);
  pop();
  push();
  translate(width/2,height/2);
rotate(210);
  text(Breakfast[3], 100 , 0);
  pop();
  push();
  translate(width/2,height/2);
rotate(270);
  text(Breakfast[4], 100 , 0);
  pop();
  push();
  translate(width/2,height/2);
rotate(330);
  text(Breakfast[5], 100 , 0);
  pop();
}

function lunchWords(){
  push();
  translate(width/2,height/2);
rotate(30);
  text(Lunch[0], 100 , 0);
  pop();
  push();
  translate(width/2,height/2);
rotate(90);
  text(Lunch[1], 100 , 0);
  pop();
  push();
  translate(width/2,height/2);
rotate(150);
  text(Lunch[2], 100 , 0);
  pop();
  push();
  translate(width/2,height/2);
rotate(210);
  text(Lunch[3], 100 , 0);
  pop();
  push();
  translate(width/2,height/2);
rotate(270);
  text(Lunch[4], 100 , 0);
  pop();
  push();
  translate(width/2,height/2);
rotate(330);
  text(Lunch[5], 100 , 0);
  pop();
}
function dinnerWords(){
  push();
  translate(width/2,height/2);
rotate(30);
  text(Dinner[0], 100 , 0);
  pop();
  push();
  translate(width/2,height/2);
rotate(90);
  text(Dinner[1], 100 , 0);
  pop();
  push();
  translate(width/2,height/2);
rotate(150);
  text(Dinner[2], 100 , 0);
  pop();
  push();
  translate(width/2,height/2);
rotate(210);
  text(Dinner[3], 100 , 0);
  pop();
  push();
  translate(width/2,height/2);
rotate(270);
  text(Dinner[4], 100 , 0);
  pop();
  push();
  translate(width/2,height/2);
rotate(330);
  text(Dinner[5], 100 , 0);
  pop();

}
