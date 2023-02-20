// linea intreractiva con el mouse:
// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   line(200, 200, mouseX, mouseY)
// }
// Cuatro lineas, fondo rojo imagen apaisada:
// function setup() {
//   createCanvas(600, 400);
// }

// function draw() {
//   background(255, 0, 0);
//   line(0, 0, mouseX, mouseY);
//   line(width, 0, mouseX, mouseY);
//   line(0, height, mouseX, mouseY);
//   line(width, height, mouseX, mouseY);
// }
// Ahora las cuatro lines van a ser dibujadas mucas veces:
// function setup() {
//   createCanvas(600, 400);
//   background(255, 0, 0);
// }

// function draw() {
//   line(0, 0, mouseX, mouseY);
//   line(width, 0, mouseX, mouseY);
//   line(0, height, mouseX, mouseY);
//   line(width, height, mouseX, mouseY);
// }
// Ahora hacemos que las lineas se vallan tapando con el fondo porque a background
// le pasamos el cuarto parametro que es la opasidad, los otros tres anteriores
// son rgb
function setup() {
  createCanvas(600, 400);
}

function draw() {
   background(255, 0, 0, 15);
   stroke( 0, 0, 200);// Esto le da color a las lineas
  line(0, 0, mouseX, mouseY);
  line(width, 0, mouseX, mouseY);
  line(0, height, mouseX, mouseY);
  line(width, height, mouseX, mouseY);

  fill(0, 200, 0);// Esto le da color a la elipse
  ellipse(mouseX, mouseY, 20); 
}