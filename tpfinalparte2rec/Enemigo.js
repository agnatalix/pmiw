class Enemigo {
  constructor(posX, posY, img) {
    this.posX = posX;
    this.posY = posY;
    this.velocidadX = 2;
    this.miColor = color(0, 0, 0, 0);
    this.vida = 5;  // Cambiar las vidas del enemigo a 5
    this.balas = [];
    this.img = img;
    this.tiempoDisparo = 0;
  }

  mover() {
    this.posX += this.velocidadX;
    if (this.posX < 0 || this.posX > width) {
      this.velocidadX *= -1;
    }
  }

  disparar() {
    if (millis() - this.tiempoDisparo > 1000) {
      let nuevaBala = new Bala(this.posX, this.posY + 25);
      nuevaBala.direccion = 1;
      nuevaBala.disparar();
      this.balas.push(nuevaBala);
      this.tiempoDisparo = millis();
    }
  }

  dibujar() {
    noStroke();
    fill(this.miColor);
    ellipse(this.posX, this.posY, 30, 50);
    image(this.img, this.posX - 50, this.posY - 50);

    for (let i = this.balas.length - 1; i >= 0; i--) {
      this.balas[i].dibujar();
      this.balas[i].mover();

      if (this.balas[i].posY > height) {
        this.balas.splice(i, 1);
      }
    }

    // Mostrar las vidas del enemigo
    textSize(16);
    fill(255, 0, 0);
    text("Vida: " + this.vida, this.posX - 40, this.posY - 40); // Mostrar las vidas del enemigo
  }

  actualizar() {
    this.mover();
    this.disparar();
    this.dibujar();
  }
}
