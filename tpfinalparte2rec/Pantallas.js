class Pantallas {
  constructor(fondo, botones, objJuego, musicaBatalla, musicaVictoria) {
    this.fondo = fondo; // Imagen de fondo
    this.botones = botones; // Objeto que contiene los botones
    this.objJuego = objJuego; // Objeto del juego
    this.musicaBatalla = musicaBatalla; // Música de batalla
    this.musicaVictoria = musicaVictoria; // Música de victoria
    this.estado = "inicio"; // Estado inicial
  }

  cambiarEstado(nuevoEstado) {
    this.estado = nuevoEstado;

    // Gestionar visibilidad de botones según el estado actual
    for (let boton in this.botones) {
      this.botones[boton].ocultar();
    }

    if (nuevoEstado === "inicio") {
      this.botones.jugar.mostrar();
      this.botones.creditos.mostrar();
      this.botones.instrucciones.mostrar();
    } else if (nuevoEstado === "instrucciones" || nuevoEstado === "creditos") {
      this.botones.atras.mostrar();
    } else if (nuevoEstado === "reiniciar") {
      this.botones.reiniciar.mostrar();
    }
  }

  mostrar() {
    background(this.fondo);
    if (this.estado === "inicio") {
      this.mostrarInicio();
    } else if (this.estado === "juego") {
      this.mostrarJuego();
    } else if (this.estado === "creditos") {
      this.mostrarCreditos();
    } else if (this.estado === "instrucciones") {
      this.mostrarInstrucciones();
    }
  }
  mostrarInicio() {
    textSize(32);
    fill(255);
    textAlign(CENTER, CENTER);
    text("Doctor Strange", width / 2, height / 2 - 50);
    textSize(16);
    text("Un nuevo universo", width / 2, height / 2 + 60);
  }

  mostrarInstrucciones() {
    textSize(16);
    fill(255);
    textAlign(CENTER, CENTER);
    text("Instrucciones", width / 2, height / 2 - 50);
    text("Pulse las flechas para moverse", width / 2, height / 2 - 20);
    text("Pulse ENTER para disparar", width / 2, height / 2 + 10);
  }

  mostrarCreditos() {
    textSize(20);
    fill(255);
    textAlign(CENTER, CENTER);
    text("Creadores", width / 2, height / 2 - 50);
    text("Nicolas Coudannes", width / 2, height / 2 - 20);
    text("Natalia Aguilera", width / 2, height / 2 + 10);
  }

  mostrarJuego() {
    if (this.objJuego) {
      this.objJuego.dibujar();
      if (this.objJuego.juegoTerminado) {
        textSize(32);
        fill(255);
        textAlign(CENTER, CENTER);
        text(this.objJuego.resultado, width / 2, height / 2);
        this.botones.reiniciar.mostrar();
      }
    }
  }

  reiniciarJuego() {
    this.objJuego.reiniciar();
    this.cambiarEstado("juego");
  }
}