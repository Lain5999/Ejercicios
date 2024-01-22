window.onload = function() {  

   funciona= window.mouseover = function() {
pospanta=event.offsetX + " , " + event.offsetY;
posPagina=event.screenX + " , " + event.screenY;
alert(posPagina);
    }
funciona();
}