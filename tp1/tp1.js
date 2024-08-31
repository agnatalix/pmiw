// https://youtu.be/3cm2MDU6mBI
let img2;
let cantidad = 20;
let tamaño;
let diametroInicial = 17; // tamaño inicial de los círculos
let agrandar = false; // variable para controlar si se debe agrandar los círculos
let mostrarBoton = false; // Variable para controlar la visibilidad del botón "Reiniciar"

function preload() {
  img2 = loadImage('data/img2.png');
}

function setup() {
  createCanvas(800, 400);

  tamaño = width / cantidad;
}

function draw() {
  background(250);
  print('X: ', mouseX, 'Y: ', mouseY);
  // imagen
  image(img2, 0, 0);
  // dibujar cuadrados
  for (let x = cantidad/2; x < cantidad; x++) {
    for (let y = 0; y < cantidad; y++) {
      if ((x + y) % 2 == 0) {
        fill(0);
      } else {
        fill(255);
      }
      rect(x * tamaño, y * tamaño, tamaño, tamaño);
    }
  }

  // dibujar círculos
  for (let x = cantidad/2; x < cantidad; x++) {
    for (let y = 0; y < cantidad; y++) {
      if ((x + y) % 2 == 0) {
        fill(255);
      } else {
        fill(0);
      }

      // Llamar a la función para calcular el diámetro
      let diametro = diametroInicial; // mantener el tamaño inicial por defecto

      if (agrandar) {
        diametro = calcularDiametro(x, y);
      }

      ellipse(x * tamaño + tamaño / 2, y * tamaño + tamaño / 2, diametro, diametro);
    }
  }


  // Dibujar el botón de "Reiniciar" si mostrarBoton es true
  if (mostrarBoton) {
    fill(0);
    rect(width - 520, 0, 120, 40);
    fill(255);
    textAlign(CENTER, CENTER);
    text("Reiniciar", width - 460, 20);
  }
}

// Calcular el diámetro basado en la distancia del ratón
function calcularDiametro( x, y) {
  let distancia = dist(mouseX, mouseY, x * tamaño + tamaño / 2, y * tamaño + tamaño / 2);
  let diametro = map(distancia, 0, width / 2, diametroInicial, diametroInicial * 2);
  return diametro;
}

function mousePressed() {

  if (mouseX >= width - 120 && mouseX <= width - 20 &&
    mouseY >= 20 && mouseY <= 60) {
    // Restaurar el estado inicial
    agrandar = false;
    mostrarBoton = false;
  } else {

    agrandar = !agrandar;

    mostrarBoton = true;
  }
}
