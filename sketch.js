let fillColor;
let lastColorChange = 0;
let circleSize = 20;
let boxWidth = 100;
let boxHeight = 100;
let createDesign = document.getElementById('create');
let widthInput = document.getElementById('width');
let heightInput = document.getElementById('height');



createDesign.addEventListener('click', function () {
  fillColor = generateRandomColor();
  boxWidth = random(150, widthInput.value);
  boxHeight = random(150, heightInput.value);  
})

function setup() {
  createCanvas(400, 400, WEBGL);
  background('#111');
  fillColor = color(255);
}

function draw() {

  // fill(0, 150, 220);
  // circle(0, 0, circleSize);

  if (millis() - lastColorChange > 50) {
    fill(fillColor);
    lastColorChange = millis();
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(boxWidth, boxHeight);
  }
  // rotate(frameCount * 0.01); 

  if (mouseIsPressed) {
    fillColor = generateRandomColor();
    // noStroke();    
    fill(fillColor);
    boxWidth = random(mouseY, 150);
    boxHeight = random(mouseY, 75);
    // cursor('none');    
  }
  // circle(mouseX - 200, mouseY - 200, 100);
}


function generateRandomColor() {
  return color(random(255), random(255), random(255));
}