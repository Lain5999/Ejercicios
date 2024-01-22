window.onload = function() {
  var nave = document.getElementById('nave');
  var posX = 0, posY = 0;

  nave.style.position = 'absolute'; 
  nave.style.top = posY + 'px'; 
  nave.style.left = posX + 'px'; 

  window.addEventListener("keydown", function(event) {
    switch(event.key) {
      case "ArrowUp":
        posY -= 10;
        break;
      case "ArrowDown":
        posY += 10;
        break;
      case "ArrowLeft":  
        posX -= 10;
        break;
      case "ArrowRight":
        posX += 10;
        break;
    }
    nave.style.top = posY + "px";
    nave.style.left = posX + "px";
  });
}