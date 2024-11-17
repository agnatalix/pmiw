class Juego {
  constructor(img) {
    this.enemigo = new Enemigo(width / 2, 50, img);
    this.img = img;
    this.per = per;
    this.crearPersonaje();
    this.juegoTerminado = false;
    this.resultado = "";  // "Victoria" o "Derrota"
    this.botonReiniciar = createButton("Reiniciar");  // Crear el botón de reinicio
    this.botonReiniciar.position(width / 2 - 60, height / 2 + 50);
    this.botonReiniciar.style("font-size", "20px");
    this.botonReiniciar.style("background-color", "#FF5733");
    this.botonReiniciar.style("color", "#FFFFFF");
    this.botonReiniciar.style("border", "none");
    this.botonReiniciar.style("padding", "10px 20px");
    this.botonReiniciar.style("border-radius", "10px");
    this.botonReiniciar.style("cursor", "pointer");
    this.botonReiniciar.mousePressed(() => this.reiniciarJuego());
    this.botonReiniciar.hide();  // Ocultarlo inicialmente
  }

  actualizar() {
    if (!this.juegoTerminado) {
      this.personaje.actualizar();
      this.enemigo.actualizar();
      this.verificarColisiones();
      this.verificarFinDelJuego();
    } else {
      this.mostrarResultado();
    }
  }

  dibujar() {
    this.actualizar();  // Aquí se llama a actualizar en cada ciclo
  }

  crearPersonaje() {
    this.personaje = new Personaje(width / 2, 300);
  }

  verificarColisiones() {
    // Comprobar si alguna bala del enemigo impacta al personaje
    for (let i = this.enemigo.balas.length - 1; i >= 0; i--) {
      if (this.enemigo.balas[i].colisionaCon(this.personaje)) {
        this.personaje.vida--;
        this.enemigo.balas.splice(i, 1);  // Eliminar la bala
      }
    }

    // Comprobar si la bala del personaje impacta al enemigo
    for (let i = this.personaje.balas.length - 1; i >= 0; i--) {
      if (this.personaje.balas[i].colisionaCon(this.enemigo)) {
        this.enemigo.vida--;
        this.personaje.balas.splice(i, 1);  // Eliminar la bala
      }
    }
  }

  verificarFinDelJuego() {
    if (this.personaje.vida <= 0) {
      this.juegoTerminado = true;
      this.resultado = "Derrota";
      detenerMusicaBatalla();
    } else if (this.enemigo.vida <= 0) {
      this.juegoTerminado = true;
      this.resultado = "Victoria";
      detenerMusicaBatalla();
      reproducirMusica();
    }
  }
  mostrarResultado() {
    textSize(32);
    fill(255);
    textAlign(CENTER, CENTER);
    text(this.resultado, width / 2, height / 2);
    this.botonReiniciar.show();  // Mostrar el botón de reinicio cuando termina el juego
  }

  reiniciarJuego() {
    this.juegoTerminado = false;
    this.resultado = "";
    this.botonReiniciar.hide();
    this.personaje = new Personaje(width / 2, 300);
    this.enemigo = new Enemigo(width / 2, 50, this.img);
    if (!musicaBatalla.isPlaying()) {
      musicaBatalla.loop(); 
    }
  }
  

  teclaPresionada(keyCode) {
    this.personaje.teclaPresionada(keyCode);
  }
}
