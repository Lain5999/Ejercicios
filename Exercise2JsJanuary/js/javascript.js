window.onload = function() {
    // Selecciona el primer elemento <p> en el documento
    var pElement = document.querySelector('p');

    // Agrega un evento de clic al elemento <p>
    pElement.addEventListener('click', function() {
        // Usa la función toggle para alternar entre las clases 'day' y 'night'
        document.body.classList.toggle('night');
    });
};