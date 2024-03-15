// Función que se ejecutará cuando se haga clic en el botón
function deltaX() {
  alert("¡Haz hecho clic en el botón!");
}

// Seleccionamos el botón
var boton = document.getElementById("miBoton");

// Agregamos un "escuchador de eventos" al botón
boton.addEventListener("wheel", deltaX());
