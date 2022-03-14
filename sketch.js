let Breakfast = ['Cereal', 'PBJ', 'Eggs and Bacon', 'Ramen', 'Try again', 'ask someone else', 'eat out', 'make something new'];
let Lunch = ['Ramen', 'Fried Rice', 'Spaghetti', 'Curry', 'make something new', 'Try again', 'eat out', 'Ubereats', 'ask someone else'];
let Dinner = ['Ramen', 'Fried Rice', 'Spaghetti', 'Curry', 'make something new', 'Try again', 'eat out', 'Ubereats', 'ask someone else'];

let button1;
let button2;
let button3;

function setup(){
  createCanvas (400,400);
background(255);
        let button1 = createButton("Breakfast");
  button1.mousePressed(breakfastButton);
  button1.size(130,80);
  button1.position(10,30);
  button1.style("font-family", "Comic Sans MS");
  button1.style("font-size", "24px");
        let button2 = createButton("Lunch");
  button2.mousePressed(lunchButton);
  button2.size(130,80);
  button2.position(10,140);
  button2.style("font-family", "Comic Sans MS");
  button2.style("font-size", "24px");
        let button3 = createButton("Dinner");
  button3.mousePressed(dinnerButton);
  button3.size(130,80);
  button3.position(10,250);
  button3.style("font-family", "Comic Sans MS");
  button3.style("font-size", "24px");
  
        let button4 = createButton("Reset");
  button4.mousePressed(resetButton);
  button4.position(340,370);
  button4.style('color:blue');

    brk = int(random(Breakfast.length));
      lch = int(random(Lunch.length));
      dnr = int(random(Dinner.length));
  w1 = Breakfast[brk];
  w2 = Lunch[lch];
  w3 = Dinner[dnr];
  textSize(16);
  
}

function breakfastButton(){
  text(w1, width*0.45, height*0.2);
  
}function lunchButton(){
   text(w2, width*0.45, height*0.46);
  
}function dinnerButton(){
   text(w3, width*0.45, height*0.72);
}

function resetButton() {
  setup();
  }
