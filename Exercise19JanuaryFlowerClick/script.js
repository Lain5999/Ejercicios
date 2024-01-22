window.onload = function() {
  document.getElementById("prado").onclick=function(){
    posx=event.offsetX-10;
    posy=event.offsetY-15;
    flor=document.createElement("span");
    (Math.random()*2>1)?flor.innerHTML="🌸":flor.innerHTML="🥼";
    flor.style.top=posy+"px";
    flor.style.left=posx+"px";
    document.getElementById("prado").appendChild(flor);
  }
}