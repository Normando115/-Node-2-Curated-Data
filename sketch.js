let blank = [ {
name: "apple",
color: "Hershey Bar"
} {
name: "Horse",
color: "Human"
} {
name: "Black",
color: "Poop"
}];

function setup() {
  createCanvas(1535, 860);
createButton("Start").mousePressed(startSketch);
console.log(blank[0]);

}


function draw() {
  background(220);
}
