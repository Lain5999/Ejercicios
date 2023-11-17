/*Hashchange recuperar el marcador
Para escribir contenido en javascript innerHTML
Location.hash-> valor del hash
*/ 

titulo22="hola mundo";
texto22="texto";
titulo21="adioss";
texto21="textitoo";

window.onhashchange=comprobar;
window.onload=comprobar;
function comprobar(){
    let marcador=document.location.hash;
    switch(marcador){
        case "#uno":
        titulo1.innerHTML=titulo21;
        texto1.innerHTML=texto21;
        break;
        case "#dos":
            titulo1.innerHTML=titulo22;
            texto1.innerHTML=texto22;
            break;
    }
}