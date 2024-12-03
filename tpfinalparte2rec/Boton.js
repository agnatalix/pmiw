class Boton {
    constructor(texto, x, y, ancho, alto, colorFondo, colorTexto, accion) {
      this.texto = texto;
      this.x = x;
      this.y = y;
      this.ancho = ancho;
      this.alto = alto;
      this.colorFondo = colorFondo;
      this.colorTexto = colorTexto;
      this.accion = accion;
      this.boton = createButton(this.texto);
      this.configurar();
    }
  
    configurar() {
      this.boton.position(this.x, this.y);
      this.boton.style("width", `${this.ancho}px`);
      this.boton.style("height", `${this.alto}px`);
      this.boton.style("font-size", "16px");
      this.boton.style("background-color", this.colorFondo);
      this.boton.style("color", this.colorTexto);
      this.boton.style("border", "none");
      this.boton.style("border-radius", "10px");
      this.boton.style("cursor", "pointer");
      this.boton.mousePressed(this.accion);
    }
  
    mostrar() {
      this.boton.show();
    }
  
    ocultar() {
      this.boton.hide();
    }
  }
  