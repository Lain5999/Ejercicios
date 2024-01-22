window.onload = function() {
  var menu = document.getElementById("menu");

  window.oncontextmenu = function(event) {
    event.preventDefault();
    var posy = event.clientY;
    var posx = event.clientX;
    posx = posx > (window.innerWidth - 200) ? posx - 230 : posx;
    posy = posy > (window.innerHeight - 100) ? posy - 130 : posy;
    
    menu.style.top = posy + "px";
    menu.style.left = posx + "px";
    menu.style.display = "block";

    var srcText = event.target.src ? event.target.src.toString().split("/").pop() : "No es imagen";
    menu.innerHTML = "<p>Opción 1</p><p>Opción 2</p><p>" + srcText + "</p>";
  }

  window.onclick = function() {
    menu.style.display = "none";
  }
}
