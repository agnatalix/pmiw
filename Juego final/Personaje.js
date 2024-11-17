class Personaje {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(255, 0, 0);
    this.vida = 3;
    this.balas = [];
    this.velocidad = 5;  // Nueva variable para controlar la velocidad del movimiento
    this.per = per;
  }

  teclaPresionada(keyCode) {
    if (keyCode === ENTER) {
      this.dispararBala();
    }
  }

  mover() {
    if (movIzquierda) {
      this.posX -= this.velocidad;
    }
    if (movDerecha) {
      this.posX += this.velocidad;
    }

    // Mantener al personaje dentro de los límites de la pantalla
    this.posX = constrain(this.posX, 0, width - 50);
  }

  dibujar() {
    image(this.per, this.posX, this.posY, 50, 50);

    for (let i = this.balas.length - 1; i >= 0; i--) {
      this.balas[i].dibujar();
      this.balas[i].mover();

      if (this.balas[i].posY < 0) {
        this.balas.splice(i, 1);
      }
    }

    // Mostrar las vidas del personaje
    textSize(16);
    fill(255, 0, 0);
    text("Vida: " + this.vida, this.posX - 15, this.posY - 20);  // Mostrar las vidas arriba del personaje
  }

  dispararBala() {
    let nuevaBala = new Bala(this.posX + 25, this.posY);
    nuevaBala.disparar();
    this.balas.push(nuevaBala);
  }

  actualizar() {
    this.mover();  // Llama a mover para actualizar la posición
    this.dibujar();
  }
}
