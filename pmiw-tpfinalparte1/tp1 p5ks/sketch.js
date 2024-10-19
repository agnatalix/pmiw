let sound;
let i = 0;
let k = 0;
let musicaIniciada = false;
let pantallas = [];
let dialogos = ["Siguiente", "Si", "No", "Siguiente", "Siguiente", "Siguiente", "Finalizar", "Siguiente", "Siguiente", "Siguiente","Siguiente", "Si", "No", "Siguiente", "Finalizar","Siguiente", "Siguiente", "Finalizar"];
let textos = ["1.Stephen Strange, un cirujano de renombre, es conocido por su brillantez y su arrogancia,\n lo que le ha llevado a una vida de éxito y reconocimiento", 
"2.En su búsqueda desesperada por recuperar la destreza de sus manos, Strange explora\n diversas opciones de tratamiento, desde la fisioterapia convencional hasta remedios alternativos.",
"3.Después de llegar al Tíbet y conocer al hombre que sanó, Strange se enfrenta a la realidad de que sus\n problemas son más profundos de lo que pensaba.", 
"4.Tras el tratamiento, Strange comienza a experimentar visiones perturbadoras de dimensiones paralelas \ny realidades alternativas. Estas visiones son intensas y reveladoras, lo que lo lleva a cuestionar\n su propia percepción de la realidad", 
"5.A medida que Strange profundiza en sus visiones, descubre que tiene la capacidad de viajar entre \nmundos. Utiliza su vasto conocimiento médico no solo para tratar sus propios traumas, sino \ntambién para ayudar a aquellos que están sufriendo en otros planos de existencia.",
" 6.Con el tiempo, las experiencias traumáticas de los otros mundos comienzan a afectar gravemente la \ndsalud mental de Strange. Cada viaje lo deja más marcado y confundido, lo que provoca que se sienta\ncada vez más distante de la realidad",
"7.Al llegar al Tíbet, Strange se encuentra con elAnciano, una figura enigmática que no solo logra curar \n sus  manos, sino que también le abre los ojos a un mundo más allá de lo físico",
"8. Durante su formación, Strange forma una amistad con Karl Mordo, un aprendiz del Anciano que \n se convierte en su mentor. Mordo le enseña sobre las artes místicas y lo guía en su aprendizaje,\n ayudándolo a entender el equilibrio entre el poder y la responsabilidad",
"9.La tranquilidad de su nuevo mundo se ve interrumpida por Kaecilius, un antiguo aprendiz del Anciano\n que ha desviado su camino y busca poder a cualquier costo. Al robar un fragmento del Libro de Cagliostro,\n Kaecilius planea invocar a Dormammu, un ser oscuro que representa una amenaza inminente para la Tierra.",
"10.Strange, junto con Mordo y otros hechiceros, se enfrenta a Kaecilius y sus seguidores en una intensa\n batalla en Nueva York. Durante este conflicto, Strange descubre el poder del Ojo de Agamotto,\n un artefacto místico que le permite manipular el tiempo. ",
"11.La culminación de su enfrentamiento llega cuando Strange se enfrenta a Kaecilius \ny a su maestro, Dormammu, en el aterrador Reino Oscuro",
"12.En un giro inesperado, Strange utiliza un recurso ingenioso para engañar a Dormammu, atrapándolo \nen  un ciclo temporal que lo obliga a llegar a un acuerdo. Esta maniobra no solo salva al mundo, \nsino que también demuestra el crecimiento de Strange como héroe y protector.", 
"13.Al final de su travesía, Stephen Strange se convierte en el nuevo Hechicero Supremo, asumiendo la \n responsabilidad de proteger la Tierra de futuras amenazas. Este nuevo rol \nno solo representa su crecimiento personal, sino también su compromiso de usar sus poderes para el bien.", 
"14.En el bucle temporal, Strange se encuentra atrapado en una repetición interminable de\n la misma lucha. Los años se convierten en siglos mientras experimenta la misma batalla sin fin", 
"15.Con el tiempo y la experiencia, Strange se convierte en un experto en la manipulación temporal. \nAprende a navegar dentro del bucle, utilizando sus habilidades para alterar los eventos a su favor",
"16. Al regresar, Strange lleva consigo una visión distorsionada del tiempo y la \nrealidad. Las experiencias en el bucle han cambiado su perspectiva, \ny se convierte en un vigilante solitario, dedicándose a proteger la Tierra desde las sombras."]
textos[17] = ["Fin"];
textos[18] = ["Créditos: dios"];
dialogos[18] = ["Reiniciar"];
dialogos[19] = ["Ver créditos"];

function preload() {
  for (let i = 0; i < 19; i++) {
    pantallas[i] = loadImage(`imagen ${i}.jpg`);
  }
  sound = loadSound('musica.mp3');  
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(100);
  image(pantallas[i], 0, 0, 640, 480);
  textSize(12);

  if (i == 0 || (i > 1 && i < 10) || (i > 10 && i < 16)) {
    fill(0);
    rect(30, 20, 570, 50);
    fill(255);
    text(textos[i], 43, 40);
    rect(220, 440, 150, 30);
    fill(0);
    textSize(15);
    text(dialogos[k], 260, 460);
  }

  if (i == 1 || i == 17 || i == 10) {
    fill(0);
    rect(30, 20, 570, 50);
    fill(255);
    text(textos[i], 43, 40);
    rect(50, 440, 150, 30);
    rect(420, 440, 150, 30);
    fill(0);
    textSize(15);
    text(dialogos[k], 110, 460);
    text(dialogos[k + 1], 490, 460);
  }

  if (i == 18) {
    background(0);
    fill(255);
    textSize(30);
    text("Nicolas Coudannes 119002/4\n Natalia Aguilera 75373/2", 180, 250);
    fill(255);
    rect(220, 440, 150, 30);
    fill(0);
    textSize(15);
    text("Reiniciar", 260, 460);
  }
}

function mousePressed() {
  
  if (!musicaIniciada) {
    sound.loop();  
    musicaIniciada = true;  
  }

  // Siguiente pantalla
  if (mouseX > 220 && mouseX < 370 && mouseY > 440 && mouseY < 470 && 
      (i == 0 || (i > 1 && i < 10) || (i > 10 && i < 19))) {
    if (i == 18) {
      i = 0;
      k = 0;
    } else {
      i++;
      k++;
    }
    if (i == 6 || i == 13 || i == 16) {
      i = 17;
      k = 18;
    }
  }

  // Opción "Sí" en P2, P10, P17
  if (mouseX > 50 && mouseX < 200 && mouseY > 440 && mouseY < 470 && 
      (i == 1 || i == 10 || i == 17)) {
    i++;
    k += 2;
    if (i >= 17) {
      i = 0;
      k = 0;
    }
  }

  // Opción "No" en P2, P10, P17
  if (mouseX > 420 && mouseX < 570 && mouseY > 440 && mouseY < 470 && 
      (i == 1 || i == 10 || i == 17)) {
    if (i == 1) {
      i = 6;
      k = 7;
    } else if (i == 10) {
      i = 13;
      k = 15;
    } else if (i == 17) {
      i++;
    }
  }
}
