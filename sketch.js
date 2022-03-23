let rotVar = 0;
let spinnerTime;
let frameCheck;
let result;
//image array
let brk = [];
let lch = [];
let dnr = []
let myFont;
let wheel;
let mealType = "breakfast";


let Breakfast = ['Try Again', 'Eat Out', 'Cereal', 'PBJ', 'Eggs and Bacon', 'Ramen'];
let Lunch = ['Ramen', 'Fried Rice', 'Spaghetti', 'Curry', ' Popcorn chicken', 'Potato Wedge'];
let Dinner = ['Pizza', 'Indian', 'Hot Pot', 'KBBQ', 'Fast Food', 'Starve'];
//visible = false;
function preload() {
  myFont = loadFont('Assets/AnnieUseYourTelescope-Regular.ttf');
  for (var i = 0; i < 6; i++) {
    brk[i] = loadImage("Assets/Breakfast" + i + ".jpg");
  }
     for (var i = 0; i < 6; i++) {
   lch[i] = loadImage("Assets/Lunch" + i + ".jpg");
  }
   for (var i = 0; i < 6; i++) {
  dnr[i] = loadImage("Assets/Dinner" + i + ".jpg");
   }

}

function setup() {
  song = loadSound('assets/prizewheel.wav');
  let canvas = createCanvas(windowWidth * .989, (windowWidth / 2));
  canvas.parent('myCanvas');
  //  createCanvas(585,585);
  image(brk[0], width / 3, height / 3, width / 2, height / 3);
  angleMode(DEGREES);
  frameRate(60);
  textSize(24);
  textFont(myFont);
  //Buttons
  let buttonSpin = createButton('Spin!');
  buttonSpin.parent('button-holder');
  buttonSpin.size(width * 0.1, height * 0.05);
  buttonSpin.position(width * 0.75, height * 0.85);
  buttonSpin.mousePressed(SpinButton);

  let buttonBreakfast = createButton('Breakfast');
  buttonBreakfast.parent('button-holder');
  buttonBreakfast.size(width * 0.1, height * 0.05);
  buttonBreakfast.position(width * 0.03, height * 0.875);
  buttonBreakfast.mousePressed(BreakfastButton);

  let buttonLunch = createButton('Lunch');
  buttonLunch.parent('button-holder');
  buttonLunch.size(width * 0.1, height * 0.05);
  buttonLunch.position(width * 0.14, height * 0.875);

  buttonLunch.mousePressed(LunchButton);
  let buttonDinner = createButton('Dinner');
  buttonDinner.parent('button-holder');
  buttonDinner.size(width * 0.1, height * 0.05);
  buttonDinner.position(width * 0.25, height * 0.875);
  buttonDinner.mousePressed(DinnerButton);


}

function draw() {
  background(255);

  push();
  noStroke();
  fill(156, 87, 23);
  rect(width*0, height*0.8, width*1, height*1);
  fill(200);
  rect(width*0.63725, height*0.125, width*0.275, height*0.55)
pop();
  //add artist statement into read me txt
  //Text
  push();
  fill(0);
  textSize(48);
  text('Food Randomizer', width / 2.5, height * 0.075);
  pop();


  //Spinner
  push();
  translate(width / 3, height / 2.25);
fill(200);
  triangle(width*-0.1,height*0.4,width*0,height*0.2,width*0.1,height*0.4);
ellipse(0,0, width/2.85);


  fill(255);
  ellipse(0, 0, width / 3);
  fill(56, 222, 27);
  arc(0, 0, width / 3, height / 1.5, 28, 88);
  fill(23, 108, 212);
  arc(0, 0, width / 3, height / 1.5, 88, 148);
  fill(116, 20, 168);
  arc(0, 0, width / 3, height / 1.5, 148, 208);
  fill(204, 20, 189);
  arc(0, 0, width / 3, height / 1.5, 208, 268);
  fill(222, 9, 9);
  arc(0, 0, width / 3, height / 1.5, 268, 328);
  fill(234, 247, 54);
  arc(0, 0, width / 3, height / 1.5, 328, 28);
  pop();

  push();
  fill(50, 60, 20);
  noStroke();
  translate(width / 3, height / 2.25);
  rotate(rotVar);
  rectMode(CENTER);
  rect(0, 0, 20, 100);
  triangle(0, -60, -20, -40, 20, -40)
  pop();

  push();
  fill(0);
  textSize(32);
  textAlign(CENTER);
  text(result, width * 0.775, height * 0.75);
  pop();

  if (mealType == 'breakfast') {
    breakfastWords();
  } else if (mealType == 'lunch') {
    lunchWords();
  } else if (mealType == 'dinner') {
    dinnerWords();
  }

  //dinner
  if (SpinButton) {
    if (mealType == "breakfast") {
      if (rotVar % 360 <= 60) {
        result = Breakfast[4] + '(Red)';
        image(brk[0], width * 0.65, height * 0.15, width * 0.25, height * 0.5);
      } else if (rotVar % 360 > 60 && rotVar % 360 <= 120) {
        result = Breakfast[5] + '(Yellow)';
        image(brk[1], width * 0.65, height * 0.15, width * 0.25, height * 0.5);
      } else if (rotVar % 360 > 120 && rotVar % 360 <= 180) {
        result = Breakfast[0] + '(Green)';

        image(brk[2], width * 0.65, height * 0.15, width * 0.25, height * 0.5);
      } else if (rotVar % 360 > 180 && rotVar % 360 <= 240) {
        result = Breakfast[1] + '(Blue)';

        image(brk[3], width * 0.65, height * 0.15, width * 0.25, height * 0.5);
      } else if (rotVar % 360 > 250 && rotVar % 360 <= 300) {
        result = Breakfast[2] + '(Purple)';

        image(brk[4], width * 0.65, height * 0.15, width * 0.25, height * 0.5);
      } else if (rotVar % 360 > 300 && rotVar % 360 <= 360) {
        result = Breakfast[3] + '(Violet)';

        image(brk[5], width * 0.65, height * 0.15, width * 0.25, height * 0.5);
      }
      console.log(result);
    }
   else if (mealType == "lunch") {
    if (rotVar % 360 <= 60) {
      result = Lunch[4] + '(Red)';
      image(lch[4], width * 0.65, height * 0.15, width * 0.25, height * 0.5);
    } else if (rotVar % 360 > 60 && rotVar % 360 <= 120) {
      result = Lunch[5] + '(Yellow)';
      image(lch[5], width * 0.65, height * 0.15, width * 0.25, height * 0.5);
    } else if (rotVar % 360 > 120 && rotVar % 360 <= 180) {
      result = Lunch[0] + '(Green)';
      image(lch[0], width * 0.65, height * 0.15, width * 0.25, height * 0.5);
    } else if (rotVar % 360 > 180 && rotVar % 360 <= 240) {
      result = Lunch[1] + '(Blue)';
      image(lch[1], width * 0.65, height * 0.15, width * 0.25, height * 0.5);
    } else if (rotVar % 360 > 250 && rotVar % 360 <= 300) {
      result = Lunch[2] + '(Purple)';
      image(lch[2], width * 0.65, height * 0.15, width * 0.25, height * 0.5);
    } else if (rotVar % 360 > 300 && rotVar % 360 <= 360) {
      result = Lunch[3] + '(Violet)';
      image(lch[3], width * 0.65, height * 0.15, width * 0.25, height * 0.5);
    }
    console.log(result);
  } else if (mealType == "dinner") {
    if (rotVar % 360 <= 60) {
      result = Dinner[4] + '(Red)';
      image(dnr[4], width * 0.65, height * 0.15, width * 0.25, height * 0.5);
    } else if (rotVar % 360 > 60 && rotVar % 360 <= 120) {
      result = Dinner[5] + '(Yellow)';
      image(dnr[5], width * 0.65, height * 0.15, width * 0.25, height * 0.5);
    } else if (rotVar % 360 > 120 && rotVar % 360 <= 180) {
      result = Dinner[0] + '(Green)';

      image(dnr[0], width * 0.65, height * 0.15, width * 0.25, height * 0.5);
    } else if (rotVar % 360 > 180 && rotVar % 360 <= 240) {
      result = Dinner[1] + '(Blue)';

      image(dnr[1], width * 0.65, height * 0.15, width * 0.25, height * 0.5);
    } else if (rotVar % 360 > 250 && rotVar % 360 <= 300) {
      result = Dinner[2] + '(Purple)';

      image(dnr[2], width * 0.65, height * 0.15, width * 0.25, height * 0.5);
    } else if (rotVar % 360 > 300 && rotVar % 360 <= 360) {
      result = Dinner[3] + '(Violet)';

      image(dnr[3], width * 0.65, height * 0.15, width * 0.25, height * 0.5);
    }
    console.log(result);
  }
}

}
//end of draw function
//break fast
function BreakfastButton() {
  mealType = "breakfast";
}

function LunchButton() {
  mealType = "lunch";
}

function DinnerButton() {
  mealType = "dinner";
}



//spin
function SpinButton() {
  spinnerTime = int(random(3000, 5000));
  frameCheck = millis();
  var myVar = setInterval(moveDial, 25);
  setTimeout(function() {
    clearInterval(myVar);
  }, spinnerTime);
  song.play();

}


function moveDial() {
  if (millis() < (frameCheck + (spinnerTime * 0.25))) {
    rotVar = rotVar + 15;
  } else if (millis() < (frameCheck + (spinnerTime * 0.50))) {
    rotVar = rotVar + 10;
  } else if (millis() < (frameCheck + (spinnerTime * 0.75))) {
    rotVar = rotVar + 5;
  } else if (millis() < (frameCheck + (spinnerTime))) {
    rotVar = rotVar + 2.5;
  }
  console.log(rotVar);

  if (rotVar > 360) {
    rotVar = rotVar - 360;
  }
}

//text
function breakfastWords() {
rect(1,1,0,0);
  push();
  translate(width / 3, height / 2.25);
  rotate(60);
  text(Breakfast[0], 100, 0);
  pop();
  push();
  translate(width / 3, height / 2.25);
  rotate(120);
  text(Breakfast[1], 100, 0);
  pop();
  push();
  translate(width / 3, height / 2.25);
  rotate(180);
  text(Breakfast[2], 100, 0);
  pop();
  push();
  translate(width / 3, height / 2.25);
  rotate(240);
  text(Breakfast[3], 100, 0);
  pop();
  push();
  translate(width / 3, height / 2.25);
  rotate(300);
  text(Breakfast[4], 100, 0);
  pop();
  push();
  translate(width / 3, height / 2.25);
  rotate(360);
  text(Breakfast[5], 100, 0);
  pop();

}

function lunchWords() {
  push();
  translate(width / 3, height / 2.25);
  rotate(60);
  text(Lunch[0], 100, 0);
  pop();
  push();
  translate(width / 3, height / 2.25);
  rotate(120);
  text(Lunch[1], 100, 0);
  pop();
  push();
  translate(width / 3, height / 2.25);
  rotate(180);
  text(Lunch[2], 100, 0);
  pop();
  push();
  translate(width / 3, height / 2.25);
  rotate(240);
  text(Lunch[3], 100, 0);
  pop();
  push();
  translate(width / 3, height / 2.25);
  rotate(300);
  text(Lunch[4], 100, 0);
  pop();
  push();
  translate(width / 3, height / 2.25);
  rotate(360);
  text(Lunch[5], 100, 0);
  pop();

}

function dinnerWords() {
  push();
  translate(width / 3, height / 2.25);
  rotate(60);
  text(Dinner[0], 100, 0);
  pop();
  push();
  translate(width / 3, height / 2.25);
  rotate(120);
  text(Dinner[1], 100, 0);
  pop();
  push();
  translate(width / 3, height / 2.25);
  rotate(180);
  text(Dinner[2], 100, 0);
  pop();
  push();
  translate(width / 3, height / 2.25);
  rotate(240);
  text(Dinner[3], 100, 0);
  pop();
  push();
  translate(width / 3, height / 2.25);
  rotate(300);
  text(Dinner[4], 100, 0);
  pop();
  push();
  translate(width / 3, height / 2.25);
  rotate(360);
  text(Dinner[5], 100, 0);
  pop();

}
