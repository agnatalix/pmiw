//https://youtu.be/E4JWUfBmWjI

let objJuego; 
let img;
let fon;
let per;
let pantallaInicio = true;  
let botonJugar;
let movIzquierda = false;
let movDerecha = false;
let pantallaCredito = false;
let pantallaInstr = false;
let musicaBatalla;  
let musicaVictoria;

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

  // Configuración del botón de jugar con estilo personalizado
  botonJugar = createButton("Jugar");
  botonJugar.position(width / 2 -50, height / 2 - 20);
  botonJugar.style("font-size", "20px");
  botonJugar.style("background-color", "#4CAF50");
  botonJugar.style("color", "#FFFFFF");
  botonJugar.style("border", "none");
  botonJugar.style("padding", "10px 20px");
  botonJugar.style("border-radius", "10px");
  botonJugar.style("cursor", "pointer");
  botonJugar.mousePressed(iniciarJuego);

  botonCreditos = createButton("Creditos");
  botonCreditos.position(170, 300);
  botonCreditos.style("font-size", "10px");
  botonCreditos.style("background-color", "#FFFF00");
  botonCreditos.style("color", "#000000");
  botonCreditos.style("border", "none");
  botonCreditos.style("padding", "4px 10px");
  botonCreditos.style("border-radius", "10px");
  botonCreditos.style("cursor", "pointer");
  botonCreditos.mousePressed(creditos);

  botonInst = createButton("Instrucciones");
  botonInst.position(160, 325);
  botonInst.style("font-size", "10px");
  botonInst.style("background-color", "#FF0000");
  botonInst.style("color", "#000000");
  botonInst.style("border", "none");
  botonInst.style("padding", "4px 10px");
  botonInst.style("border-radius", "10px");
  botonInst.style("cursor", "pointer");
  botonInst.mousePressed(instr);

  botonAtras = createButton("Atras");
  botonAtras.position(20, 370);
  botonAtras.style("font-size", "10px");
  botonAtras.style("background-color", "#000000");
  botonAtras.style("color", "#FFFFFF");
  botonAtras.style("border", "none");
  botonAtras.style("padding", "4px 10px");
  botonAtras.style("border-radius", "10px");
  botonAtras.style("cursor", "pointer");
  botonAtras.mousePressed(atras);
  botonAtras.hide();
}

function draw() {
  if (pantallaInicio) {
    mostrarPantallaInicio();
  } 
  else if (pantallaCredito) {
    mostrarCreditos();
  }
  else if (pantallaInstr) {
    mostrarInstrucciones();
  }
  else {
    image(fon, 0, 0, width, height);
    objJuego.dibujar();  // Llama al método dibujar, que a su vez llama a actualizar
  }
}

function creditos() {
  pantallaCredito = true;
  pantallaInicio = false;
}

function instr() {
  pantallaInstr = true;
  pantallaInicio = false;
}

function atras() {
  pantallaInstr = false;
  pantallaCredito = false;
  pantallaInicio = true;
  botonCreditos.show();
  botonJugar.show();
  botonInst.show();
  botonAtras.hide();
}

function mostrarInstrucciones() {
  image(fon, 0, 0, width, height);
  botonJugar.hide();
  botonCreditos.hide();
  botonInst.hide();
  stroke(0);
  text("Instrucciones", 180,160);
  text("Pulse las flechas izquierda y",180,180); 
  text("derecha del teclado para moverse", 180, 200);
  text("Pulse enter para disparar", 180, 220);
  botonAtras.show();
}

function mostrarCreditos() {
  image(fon, 0, 0, width, height);
  botonJugar.hide();
  botonCreditos.hide(); 
  botonInst.hide();
  fill(0);
  stroke(0);
  fill(255,255,255)
  textSize(20);
  text("Creadores", 180, 155)
  text("Nicolas Coudannes", 180, 180);
  text("Natalia Aguilera", 180, 205)
  botonAtras.show();
}

function mostrarPantallaInicio() {
  image(fon, 0, 0, width, height);
  textSize(32);
  fill(255);
  textAlign(CENTER, CENTER);
  text("Doctor Strange", width / 2, height / 2 - 50);
  textSize(16);
  text("Un nuevo universo", width / 2, height / 2 + 60);
}

function iniciarJuego() {
  pantallaInicio = false;  // Cambia al estado de juego
  botonJugar.hide();  // Oculta el botón al iniciar el juego
  botonCreditos.hide();
  botonAtras.hide();
  botonInst.hide();
  
  // Inicia la música de batalla
  if (!musicaBatalla.isPlaying()) {
    musicaBatalla.loop();  // Reproduce la música en loop
  }
}

function keyPressed() {
  if (!pantallaInicio) {  // Evita que el personaje se mueva en la pantalla de inicio
    objJuego.teclaPresionada(keyCode);
    if (keyCode === LEFT_ARROW) {
      movIzquierda = true;
    } else if (keyCode === RIGHT_ARROW) {
      movDerecha = true;
    }
  }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW) {
    movIzquierda = false;
  } else if (keyCode === RIGHT_ARROW) {
    movDerecha = false;
  }
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