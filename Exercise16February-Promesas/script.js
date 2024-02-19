/*x=1;
//esto es un manejo de errores 
try{
  alert(Y)
//se puede acceder al objeto error y sus propiedades si le pasamos como parámetro al catch guardando lo que pasa en la variable
}catch(error){
  
  alert("error")
}finally{
alert("se acabó")
}
*/
const url = "https://randomuser.me/api/";

// Llamamos a la función fetch para obtener datos de la API.
fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json(); // Convertimos la respuesta en JSON.
    } else {
      throw new Error('Hubo un problema con la petición Fetch: ' + response.statusText);
    }
  })
  .then(data => {
    mostrarDatosUsuario(data.results[0]); // Asumimos que la API devuelve un array de resultados.
  })
  .catch(error => {
    miFuncionError(error); // Manejamos los errores.
  });

// Función para manejar la respuesta exitosa y mostrar los datos y la imagen en el HTML.
function mostrarDatosUsuario(usuario) {
  const nombreCompleto = `${usuario.name.first} ${usuario.name.last}`;
  const ciudad = usuario.location.city;
  const pais = usuario.location.country;
  const email = usuario.email;
  const telefono = usuario.phone;
  const imagenURL = usuario.picture.large; // URL de la imagen del usuario.

  // Construimos el HTML con los datos del usuario y la imagen.
  const detallesHTML = `
    <img src="${imagenURL}" alt="Foto de ${nombreCompleto}"> <!-- Imagen del usuario -->
    <p><strong>Nombre:</strong> ${nombreCompleto}</p>
    <p><strong>Ciudad:</strong> ${ciudad}</p>
    <p><strong>País:</strong> ${pais}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Teléfono:</strong> ${telefono}</p>
  `;

  // Seleccionamos el div con id 'detalles' y actualizamos su contenido.
  document.getElementById('detalles').innerHTML = detallesHTML;
}

// Función para manejar errores.
function miFuncionError(error) {
  alert('Error: ' + error.message);
}