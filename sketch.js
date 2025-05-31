let fillColor;
let lastColorChange = 0;
let circleSize = 20;
let boxWidth = 100;
let boxHeight = 100;
let stop = document.getElementById('stop');
let isRotating = true;
let rotX = 0;
let rotY = 0;

function setup() {
  createCanvas(400, 400, WEBGL);
  background('#111');
  fillColor = color(255);
}

function draw() {
  if (millis() - lastColorChange > 50) {
    fill(fillColor);
    lastColorChange = millis();
    if (isRotating) {
      rotX += 0.01;
      rotY += 0.01;
    }
    rotateX(rotX);
    rotateY(rotY);
    box(boxWidth, boxHeight);
  }

  if (mouseIsPressed) {
    fillColor = generateRandomColor();
    fill(fillColor);
    boxWidth = mouseX;
    boxHeight = mouseY;
    if (isRotating) {
      rotX += mouseX * 0.0001;
    }
  }   
}

stop.addEventListener('click', function (event) {
  fillColor = color(255);
  isRotating = false; // Detiene la rotación
  event.stopPropagation(); // Evita que el click se propague al canvas
});

// Reanuda la rotación al hacer clic en el canvas (excepto en el botón stop)
function mousePressed() {
  // Obtener la posición absoluta del canvas
  let canvasRect = canvas.getBoundingClientRect();
  // Coordenadas absolutas del mouse
  let absMouseX = mouseX + canvasRect.left;
  let absMouseY = mouseY + canvasRect.top;

  // Coordenadas del botón stop
  let stopRect = stop.getBoundingClientRect();

  // Verifica si el mouse está sobre el botón stop
  if (
    absMouseX >= stopRect.left &&
    absMouseX <= stopRect.right &&
    absMouseY >= stopRect.top &&
    absMouseY <= stopRect.bottom
  ) {
    return;
  }
  isRotating = true;
}

function generateRandomColor() {
  return color(random(255), random(255), random(255));
}