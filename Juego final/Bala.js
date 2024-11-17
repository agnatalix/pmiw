class Bala {
    constructor(posX, posY) {
      this.posX = posX;
      this.posY = posY;
      this.disparada = false;
      this.direccion = -1;
    }
  
    dibujar() {
      if (this.disparada) {
        fill(0);
        ellipse(this.posX, this.posY, 5, 5);
      }
    }
  
    mover() {
      if (this.disparada) {
        this.posY += 5 * this.direccion;
      }
    }
  
    disparar() {
      this.disparada = true;
    }
  
    colisionaCon(objeto) {
      return dist(this.posX, this.posY, objeto.posX, objeto.posY) < 25;
    }
  }
  