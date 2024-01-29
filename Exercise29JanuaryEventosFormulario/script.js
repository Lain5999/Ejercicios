
/* el primer paso es acceder al elemento formulario
  el segundo paso capturamos el evento submit
  evitamos que se envie el formulario
  */
  window.onload = function() {
    document.forms[0].onsubmit = function(event){
        // Evitamos que se envíe el formulario de manera predeterminada
        event.preventDefault();

        var valido = true; // Variable para controlar la validez del formulario

        // Verificaciones de validación
        if(document.forms[0].name.value == ""){
            alert("El campo nombre es obligatorio");
            valido = false;
        }

        if(document.forms[0].paises.value == "0"){
            alert("Debe seleccionar un país");
            valido = false;
        }

        // Si el formulario es válido, lo enviamos
        if(valido){
            document.forms[0].submit();
            alert("Gracias por enviar el formulario");
        }
    };
}
