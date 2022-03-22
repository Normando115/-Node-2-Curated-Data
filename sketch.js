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
let Lunch = ['Ramen', 'Fried Rice', 'Spaghetti', 'Curry', ' something new', 'Try again'];
let Dinner = ['Pizza', 'Indian', 'Hot Pot', 'KBBQ', 'Fast Food', 'Starve', 'All you can eat'];
//visible = false;
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
  background(0);
  //add artist statement into read me txt
  //Text
  push();
  fill(255);
  textSize(48);
  text('Food Randomizer', width / 2.5, height * 0.075);
  pop();


  //Spinner
  push();
  translate(width / 3, height / 2.25);
  fill(255);
  ellipse(0, 0, width / 3)
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
  textSize(50)
  translate(width / 3, height / 3);
  //  image(brk[5], 40, 10, 110, 110);
  pop();

  //fontSize();
  //  breakfastWords();
  //lunchWords();
  //dinnerWords();
  push();
  fill(255);
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
  } else if (mealType == "lunch") {
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
    console.log("i am lunch");
  } else if (mealType == "dinner") {
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
    console.log("i am dinner");
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

function dinnerWords() {
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
