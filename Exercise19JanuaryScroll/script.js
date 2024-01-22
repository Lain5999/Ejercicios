window.onload = function() {
  window.onscroll = function() {
    // Obtener el tamaño de la ventana, la posición del scroll y el tamaño completo de la página
    var tamanoVentana = window.innerHeight;
    var posicionScroll = window.scrollY;
    var tamanoCompleto = document.body.scrollHeight;

    // Imprimir información en la consola
    console.log("Tamaño de la ventana: " + tamanoVentana + ", Posición del scroll: " + posicionScroll + ", Tamaño completo: " + tamanoCompleto);

    // Verificar si estás en el fondo de la página
    if (tamanoCompleto - tamanoVentana - posicionScroll < 100) {
      console.log("Estás en el fondo de la página");
    }
  }
}