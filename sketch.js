let fillColor;
let lastColorChange = 0;
let circleSize = 20;
let boxWidth = 100;
let boxHeight = 100;
let createDesign = document.getElementById('create');
let widthInput = document.getElementById('width');
let heightInput = document.getElementById('height');
// let audioCtx;
// let osc;
// let letsPlay = false;

// function initAudioContext() {
//   audioCtx = new (window.AudioContext || window.webkitAudioContext)();
// }

// const NOTES = {
//   "C-4": 261.626,
//   "C-#": 277.1826,
//   "D-4": 293.665,
//   "D-#": 311.127,
//   "E-4": 329.628,
//   "F-4": 349.228,
//   "F-#": 369.9944,
//   "G-4": 391.995,
//   "G-#": 415.3047,
//   "A-4": 440.0,
//   "A-#": 466.1638,
//   "B-4": 493.883,
//   "C-5": 523.251,
// };


// function playNote(note) {
//   if (letsPlay) {
//     initAudioContext();
//     if (audioCtx.state === 'suspended') {
//       audioCtx.resume();
//     }
//     osc = audioCtx.createOscillator();
//     osc.type = "sine";
//     osc.frequency.value = NOTES[note];
//     osc.connect(audioCtx.destination);
//     osc.start();
//   }
// }

// function stopNote() {
//   keyIsPressed = true;
//   if (osc) {
//     osc.stop();
//     osc.disconnect();
//   }
// }

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
    boxWidth = mouseX;
    boxHeight = mouseY;
    rotate(mouseX * 0.01);
    // letsPlay = true;
    // playNote('C-4');
    // cursor('none');    
  }   
}


function generateRandomColor() {
  return color(random(255), random(255), random(255));
}