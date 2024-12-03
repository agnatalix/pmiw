class Juego {
  constructor(img) {
    this.enemigo = new Enemigo(width / 2, 50, img);
    this.img = img;
    this.per = per;
    this.crearPersonaje();
    this.juegoTerminado = false;
    this.resultado = ""; // "Victoria" o "Derrota"
    this.esPrimeraVez = true; // Nueva variable para controlar la primera vez que se juega
  }

  actualizar() {
    if (this.esPrimeraVez) {
      this.iniciarPrimeraVez();
    }

    if (!this.juegoTerminado) {
      this.personaje.actualizar();
      this.enemigo.actualizar();
      this.verificarColisiones();
      this.verificarFinDelJuego();
    }
  }

  iniciarPrimeraVez() {
    if (!musicaBatalla.isPlaying()) {
      musicaBatalla.loop(); // Iniciar la música al comienzo
    }
    this.esPrimeraVez = false; // Marcar que ya no es la primera vez
  }

  dibujar() {
    this.actualizar(); // Aquí se llama a actualizar en cada ciclo
  }

  crearPersonaje() {
    this.personaje = new Personaje(width / 2, 300);
  }

  verificarColisiones() {
    // Comprobar si alguna bala del enemigo impacta al personaje
    for (let i = this.enemigo.balas.length - 1; i >= 0; i--) {
      if (this.enemigo.balas[i].colisionaCon(this.personaje)) {
        this.personaje.vida--;
        this.enemigo.balas.splice(i, 1); // Eliminar la bala
      }
    }
    // Comprobar si la bala del personaje impacta al enemigo
    for (let i = this.personaje.balas.length - 1; i >= 0; i--) {
      if (this.personaje.balas[i].colisionaCon(this.enemigo)) {
        this.enemigo.vida--;
        this.personaje.balas.splice(i, 1); // Eliminar la bala
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

  reiniciar() {
    this.juegoTerminado = false;
    this.resultado = "";
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