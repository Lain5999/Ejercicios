let indice = 0; // Asegúrate de que esta variable esté definida globalmente

function comprobar() {
  // Calcula la posición actual del scroll y la altura máxima de la página
  const scrollPos = window.scrollY;
  const totalHeight = document.body.offsetHeight;
  const windowHeight = window.innerHeight;

  // Comprueba si el scroll está cerca del final de la página
  if (scrollPos + windowHeight > totalHeight - 100) {
    cargar();
  }
}

function cargar() {
  indice++;
  const divContainer = document.getElementsByTagName("div")[0];

  // Crear y añadir un nuevo elemento h1
  const miNuevoNodo = document.createElement("h1");
  const nuevoTexto = document.createTextNode("Cargamos un nuevo " + indice);
  miNuevoNodo.appendChild(nuevoTexto);
  divContainer.appendChild(miNuevoNodo);

  // Crear y añadir una nueva imagen
  const miNuevaImagen = document.createElement("img");
  miNuevaImagen.src = "Avanzado7Media/baraja/" + misImagenes[parseInt(Math.random() * misImagenes.length)];
  divContainer.appendChild(miNuevaImagen);

  // Crear y añadir un nuevo párrafo
  const nuevoParrafo = document.createElement("p");
  const textoParrafo = document.createTextNode("lorem ipsum texto largo " + indice);
  nuevoParrafo.appendChild(textoParrafo);
  divContainer.appendChild(nuevoParrafo);
}

// Añade un event listener para el evento de scroll
window.addEventListener('scroll', comprobar);
