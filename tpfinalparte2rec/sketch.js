//https://youtu.be/lzcRww3EbN0//

let objJuego; 
let img;
let fon;
let per;
let movIzquierda = false;
let movDerecha = false;
let musicaBatalla;  
let musicaVictoria;
let pantallas;

function preload() {
  img = loadImage("cas.png");
  fon = loadImage("esptie.jpeg");
  per = loadImage("doc strangepng 1.png");
  musicaBatalla = loadSound("musica.mp3"); 
  musicaVictoria = loadSound("musica2.mp3");
}

function setup() {
  createCanvas(400, 400);
  objJuego = new Juego(img);
  const botones = {
    jugar: new Boton("Jugar", width / 2 - 50, height / 2 - 20, 80, 50, "#4CAF50", "#FFFFFF", () => pantallas.cambiarEstado("juego")),
    creditos: new Boton("Creditos", 155, 290, 80, 30, "#FFFF00", "#000000", () => pantallas.cambiarEstado("creditos")),
    instrucciones: new Boton("Instrucciones", 140, 325, 110, 30, "#FF0000", "#000000", () => pantallas.cambiarEstado("instrucciones")),
    atras: new Boton("Atras", 20, 370, 80, 30, "#000000", "#FFFFFF", () => pantallas.cambiarEstado("inicio")),
    reiniciar: new Boton("Reiniciar", width / 2 - 60, height / 2 + 50, 100, 50, "#FF5733", "#FFFFFF", () => pantallas.reiniciarJuego())
  };

  pantallas = new Pantallas(fon, botones, objJuego, musicaBatalla, musicaVictoria);

  pantallas.cambiarEstado("inicio"); // Mostrar pantalla inicial
}

  function draw() {
    pantallas.mostrar(); // Delegar el dibujo a la clase Pantallas
  }
  
function keyPressed() {
  if (pantallas.estado === "juego") {
    objJuego.teclaPresionada(keyCode);
    if (keyCode === LEFT_ARROW) movIzquierda = true;
    if (keyCode === RIGHT_ARROW) movDerecha = true;
  }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW) movIzquierda = false;
  if (keyCode === RIGHT_ARROW) movDerecha = false;
}

function reproducirMusica() {
  if (!musicaVictoria.isPlaying()) {
    musicaVictoria.play();
  }
}
function detenerMusicaBatalla() {
  if (musicaBatalla.isPlaying()) {
    musicaBatalla.stop(); 
  }
}
